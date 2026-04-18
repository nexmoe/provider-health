#!/usr/bin/env bun
import postgres from 'postgres';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL is required');
  process.exit(1);
}

const RETENTION_DAYS = 35;
const STATE_PATH = 'state.json';

type Row = {
  id: number;
  provider_id: number;
  slug: string;
  healthcheck_url: string;
  status_code: number | null;
  ok: boolean;
  latency_ms: number | null;
  error: string | null;
  checked_at: Date;
};

type OkEntry = {
  type: 'ok';
  from: string;
  to: string;
  count: number;
  url: string;
  avg: number;
  min: number;
  max: number;
  p95: number;
};

type FailEntry = {
  type: 'fail';
  from: string;
  to: string;
  count: number;
  url: string;
  status: number | null;
  error: string | null;
  avg_latency: number | null;
};

type Entry = OkEntry | FailEntry;

type State = {
  last_archived_id: number;
  last_archived_at: string | null;
  last_archived_day: string | null;
};

const loadState = async (): Promise<State> => {
  if (!existsSync(STATE_PATH)) {
    return {
      last_archived_id: 0,
      last_archived_at: null,
      last_archived_day: null,
    };
  }
  return JSON.parse(await readFile(STATE_PATH, 'utf8')) as State;
};

const saveState = async (state: State) => {
  await writeFile(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`);
};

const percentile = (sorted: number[], p: number): number => {
  if (sorted.length === 0) return 0;
  const idx = Math.min(sorted.length - 1, Math.floor(sorted.length * p));
  return sorted[idx] ?? 0;
};

const aggregateProviderDay = (rows: Row[]): Entry[] => {
  const entries: Entry[] = [];
  let run: Row[] = [];

  const flush = () => {
    if (run.length === 0) return;
    const head = run[0];
    if (!head) return;

    if (head.ok) {
      const latencies = run
        .map((r) => r.latency_ms)
        .filter((x): x is number => x !== null)
        .sort((a, b) => a - b);
      const tail = run[run.length - 1];
      const avg = latencies.length
        ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length)
        : 0;
      entries.push({
        type: 'ok',
        from: head.checked_at.toISOString(),
        to: (tail ?? head).checked_at.toISOString(),
        count: run.length,
        url: head.healthcheck_url,
        avg,
        min: latencies[0] ?? 0,
        max: latencies[latencies.length - 1] ?? 0,
        p95: percentile(latencies, 0.95),
      });
    } else {
      const latencies = run
        .map((r) => r.latency_ms)
        .filter((x): x is number => x !== null);
      const tail = run[run.length - 1];
      const avg = latencies.length
        ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length)
        : null;
      entries.push({
        type: 'fail',
        from: head.checked_at.toISOString(),
        to: (tail ?? head).checked_at.toISOString(),
        count: run.length,
        url: head.healthcheck_url,
        status: head.status_code,
        error: head.error,
        avg_latency: avg,
      });
    }
    run = [];
  };

  for (const row of rows) {
    const last = run[run.length - 1];
    const shouldBreak =
      last !== undefined &&
      (last.ok !== row.ok ||
        last.healthcheck_url !== row.healthcheck_url ||
        (!last.ok &&
          (last.status_code !== row.status_code || last.error !== row.error)));
    if (shouldBreak) flush();
    run.push(row);
  }
  flush();
  return entries;
};

const sql = postgres(DATABASE_URL, {
  ssl: /sslmode=disable/.test(DATABASE_URL)
    ? false
    : { rejectUnauthorized: false },
});

const fetchDaysToArchive = async (
  lastArchivedId: number
): Promise<string[]> => {
  const rows = await sql<{ day: Date }[]>`
    SELECT DISTINCT DATE_TRUNC('day', checked_at)::timestamp AS day
    FROM provider_healthchecks
    WHERE id > ${lastArchivedId}
      AND checked_at < DATE_TRUNC('day', NOW() - make_interval(days => ${RETENTION_DAYS}))
    ORDER BY day
  `;
  return rows.map((r) => r.day.toISOString().slice(0, 10));
};

const fetchDayRows = async (
  day: string,
  lastArchivedId: number
): Promise<Row[]> => {
  const rows = await sql<Row[]>`
    SELECT
      ph.id, ph.provider_id, p.slug,
      ph.healthcheck_url, ph.status_code, ph.ok,
      ph.latency_ms, ph.error, ph.checked_at
    FROM provider_healthchecks ph
    JOIN providers p ON p.id = ph.provider_id
    WHERE ph.id > ${lastArchivedId}
      AND ph.checked_at >= ${`${day} 00:00:00`}::timestamp
      AND ph.checked_at <  ${`${day} 00:00:00`}::timestamp + INTERVAL '1 day'
    ORDER BY p.slug, ph.checked_at, ph.id
  `;
  return rows;
};

type Header = { url: string };

const isHeader = (obj: unknown): obj is Header =>
  typeof obj === 'object' &&
  obj !== null &&
  'url' in obj &&
  !('type' in obj);

/**
 * Write/merge a month file for one provider. If all entries in the resulting
 * file share a single URL, the URL is hoisted to a `{"url":"..."}` header line
 * and entries omit their `url` field. Otherwise, the header is dropped and
 * every entry carries its own `url`. Rewrites the whole file on every run so
 * format transitions handle cleanly.
 */
const writeEntries = async (
  slug: string,
  yyyymm: string,
  newEntries: Entry[]
) => {
  const filePath = join('history', slug, `${yyyymm}.jsonl`);
  await mkdir(dirname(filePath), { recursive: true });

  let existing: Entry[] = [];
  if (existsSync(filePath)) {
    const text = await readFile(filePath, 'utf8');
    const lines = text.split('\n').filter((l) => l);
    const [first, ...rest] = lines;
    if (!first) {
      existing = [];
    } else {
      const parsed = JSON.parse(first);
      if (isHeader(parsed)) {
        existing = rest.map((l) => {
          const e = JSON.parse(l) as Entry;
          return { ...e, url: parsed.url };
        });
      } else {
        existing = lines.map((l) => JSON.parse(l) as Entry);
      }
    }
  }

  const all = [...existing, ...newEntries];
  const urls = new Set(all.map((e) => e.url));

  let data: string;
  if (urls.size === 1) {
    const url = all[0]?.url ?? '';
    const body = all
      .map((e) => {
        const { url: _omit, ...rest } = e;
        return JSON.stringify(rest);
      })
      .join('\n');
    data = `${JSON.stringify({ url })}\n${body}\n`;
  } else {
    data = `${all.map((e) => JSON.stringify(e)).join('\n')}\n`;
  }
  await writeFile(filePath, data);
};

const main = async () => {
  const state = await loadState();
  console.log(
    `starting archive, last_archived_id=${state.last_archived_id}, last_archived_day=${state.last_archived_day ?? 'none'}`
  );

  const days = await fetchDaysToArchive(state.last_archived_id);
  console.log(`${days.length} day(s) to process`);

  if (days.length === 0) {
    console.log('nothing to archive');
    await sql.end();
    return;
  }

  let maxId = state.last_archived_id;
  let lastDay = state.last_archived_day;
  let totalEntries = 0;

  for (const day of days) {
    const rows = await fetchDayRows(day, state.last_archived_id);
    if (rows.length === 0) continue;

    const byProvider = new Map<string, Row[]>();
    for (const row of rows) {
      const list = byProvider.get(row.slug);
      if (list) list.push(row);
      else byProvider.set(row.slug, [row]);
    }

    const yyyymm = day.slice(0, 7);
    let dayEntries = 0;

    for (const [slug, providerRows] of byProvider) {
      const entries = aggregateProviderDay(providerRows);
      await writeEntries(slug, yyyymm, entries);
      dayEntries += entries.length;
    }

    for (const row of rows) {
      if (row.id > maxId) maxId = row.id;
    }
    lastDay = day;
    totalEntries += dayEntries;

    console.log(
      `  ${day}: ${rows.length} row(s) → ${dayEntries} entr${dayEntries === 1 ? 'y' : 'ies'} across ${byProvider.size} provider(s)`
    );
  }

  await saveState({
    last_archived_id: maxId,
    last_archived_at: new Date().toISOString(),
    last_archived_day: lastDay,
  });

  await sql.end();
  console.log(
    `archive done: ${totalEntries} entries written, new last_archived_id=${maxId}, through day=${lastDay}`
  );
};

await main();
