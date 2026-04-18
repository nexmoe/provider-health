#!/usr/bin/env bun
import postgres from 'postgres';
import { existsSync } from 'node:fs';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL is required');
  process.exit(1);
}

type SummaryRow = {
  slug: string | null;
  name: string | null;
  website_url: string | null;
  latest_status_ok: boolean | null;
  latest_checked_at: Date | null;
  latest_latency_ms: number | null;
  window_7d_total_checks: number;
  window_7d_ok_checks: number;
  window_7d_avg_latency_ms: number | null;
  window_30d_total_checks: number;
  window_30d_ok_checks: number;
  window_30d_avg_latency_ms: number | null;
  live_1y_total: number;
  live_1y_ok: number;
  live_all_total: number;
  live_all_ok: number;
  p95_7d: number | null;
  incidents_30d: number;
  mttr_seconds: number | null;
  last_incident_at: Date | null;
};

type Row = SummaryRow & {
  total_1y: number;
  ok_1y: number;
  total_all: number;
  ok_all: number;
};

type ArchiveOk = {
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

type ArchiveFail = {
  type: 'fail';
  from: string;
  to: string;
  count: number;
  url: string;
  status: number | null;
  error: string | null;
  avg_latency: number | null;
};

type ArchiveEntry = ArchiveOk | ArchiveFail;

type Status = 'ok' | 'degraded' | 'down' | 'unknown';

type State = { last_archived_id: number };

const state: State = existsSync('state.json')
  ? (JSON.parse(await readFile('state.json', 'utf8')) as State)
  : { last_archived_id: 0 };

const sql = postgres(DATABASE_URL, {
  ssl: /sslmode=disable/.test(DATABASE_URL)
    ? false
    : { rejectUnauthorized: false },
});

const summaryRows = await sql<SummaryRow[]>`
  WITH live AS (
    SELECT
      ph.provider_id,
      COUNT(*) FILTER (
        WHERE ph.checked_at >= NOW() - INTERVAL '1 year'
      )::int AS y_total,
      COUNT(*) FILTER (
        WHERE ph.checked_at >= NOW() - INTERVAL '1 year' AND ph.ok
      )::int AS y_ok,
      COUNT(*)::int AS all_total,
      COUNT(*) FILTER (WHERE ph.ok)::int AS all_ok,
      PERCENTILE_CONT(0.95) WITHIN GROUP (
        ORDER BY CASE
          WHEN ph.ok AND ph.latency_ms IS NOT NULL
            AND ph.checked_at >= NOW() - INTERVAL '7 days'
          THEN ph.latency_ms
        END
      )::int AS p95_7d
    FROM provider_healthchecks ph
    WHERE ph.id > ${state.last_archived_id}
    GROUP BY ph.provider_id
  ),
  window_30d AS (
    SELECT
      ph.provider_id, ph.ok, ph.checked_at,
      CASE
        WHEN NOT ph.ok AND (
          LAG(ph.ok) OVER w IS NULL OR LAG(ph.ok) OVER w
        ) THEN 1 ELSE 0
      END AS is_start
    FROM provider_healthchecks ph
    WHERE ph.checked_at >= NOW() - INTERVAL '30 days'
    WINDOW w AS (PARTITION BY ph.provider_id ORDER BY ph.checked_at, ph.id)
  ),
  fail_labeled AS (
    SELECT provider_id, checked_at,
      SUM(is_start) OVER (
        PARTITION BY provider_id ORDER BY checked_at
      ) AS incident_id
    FROM window_30d WHERE NOT ok
  ),
  incidents_by_run AS (
    SELECT provider_id, incident_id,
      MIN(checked_at) AS start_at,
      MAX(checked_at) AS end_at
    FROM fail_labeled
    GROUP BY provider_id, incident_id
  ),
  incidents AS (
    SELECT provider_id,
      COUNT(*)::int AS incidents_30d,
      AVG(EXTRACT(EPOCH FROM (end_at - start_at)))::int AS mttr_seconds,
      MAX(start_at) AS last_incident_at
    FROM incidents_by_run
    GROUP BY provider_id
  )
  SELECT
    p.slug, p.name, p.website_url,
    phs.latest_status_ok, phs.latest_checked_at, phs.latest_latency_ms,
    COALESCE(phs.window_7d_total_checks, 0) AS window_7d_total_checks,
    COALESCE(phs.window_7d_ok_checks, 0) AS window_7d_ok_checks,
    phs.window_7d_avg_latency_ms,
    COALESCE(phs.window_30d_total_checks, 0) AS window_30d_total_checks,
    COALESCE(phs.window_30d_ok_checks, 0) AS window_30d_ok_checks,
    phs.window_30d_avg_latency_ms,
    COALESCE(live.y_total, 0)::int AS live_1y_total,
    COALESCE(live.y_ok, 0)::int AS live_1y_ok,
    COALESCE(live.all_total, 0)::int AS live_all_total,
    COALESCE(live.all_ok, 0)::int AS live_all_ok,
    live.p95_7d,
    COALESCE(incidents.incidents_30d, 0)::int AS incidents_30d,
    incidents.mttr_seconds,
    incidents.last_incident_at
  FROM providers p
  LEFT JOIN provider_health_summary phs ON phs.provider_id = p.id
  LEFT JOIN live ON live.provider_id = p.id
  LEFT JOIN incidents ON incidents.provider_id = p.id
  WHERE p.status = 'publish' AND p.slug IS NOT NULL
  ORDER BY p.slug
`;

const yearCutoff = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);

type ArchiveCounts = {
  ok_1y: number;
  total_1y: number;
  ok_all: number;
  total_all: number;
};

const scanArchive = async (slug: string): Promise<ArchiveCounts> => {
  const counts: ArchiveCounts = {
    ok_1y: 0,
    total_1y: 0,
    ok_all: 0,
    total_all: 0,
  };
  const dir = join('history', slug);
  if (!existsSync(dir)) return counts;
  const files = (await readdir(dir)).filter((f) => f.endsWith('.jsonl'));
  for (const file of files) {
    const text = await readFile(join(dir, file), 'utf8');
    for (const line of text.split('\n')) {
      if (!line) continue;
      const parsed = JSON.parse(line) as ArchiveEntry | { url: string };
      if (!('type' in parsed)) continue;
      const entry = parsed;
      if (entry.type === 'ok') {
        counts.ok_all += entry.count;
        counts.total_all += entry.count;
        if (new Date(entry.from) >= yearCutoff) {
          counts.ok_1y += entry.count;
          counts.total_1y += entry.count;
        }
      } else {
        counts.total_all += entry.count;
        if (new Date(entry.from) >= yearCutoff) counts.total_1y += entry.count;
      }
    }
  }
  return counts;
};

const rows: Row[] = [];
for (const r of summaryRows) {
  const arc = r.slug
    ? await scanArchive(r.slug)
    : { ok_1y: 0, total_1y: 0, ok_all: 0, total_all: 0 };
  rows.push({
    ...r,
    ok_1y: arc.ok_1y + r.live_1y_ok,
    total_1y: arc.total_1y + r.live_1y_total,
    ok_all: arc.ok_all + r.live_all_ok,
    total_all: arc.total_all + r.live_all_total,
  });
}

const uptime = (total: number, ok: number): number | null =>
  total === 0 ? null : (ok / total) * 100;

const classify = (r: Row): Status => {
  if (r.latest_status_ok === null || r.window_7d_total_checks === 0)
    return 'unknown';
  if (r.latest_status_ok === false) return 'down';
  const u7 = uptime(r.window_7d_total_checks, r.window_7d_ok_checks);
  if (u7 !== null && u7 >= 99) return 'ok';
  return 'degraded';
};

const grouped: Record<Status, Row[]> = {
  ok: [],
  degraded: [],
  down: [],
  unknown: [],
};
for (const r of rows) grouped[classify(r)].push(r);

const sortByUptime = (a: Row, b: Row) => {
  const ua = uptime(a.window_7d_total_checks, a.window_7d_ok_checks) ?? -1;
  const ub = uptime(b.window_7d_total_checks, b.window_7d_ok_checks) ?? -1;
  if (ua !== ub) return ub - ua;
  return (a.slug ?? '').localeCompare(b.slug ?? '');
};
for (const list of Object.values(grouped)) list.sort(sortByUptime);

const fmtPct = (total: number, ok: number): string => {
  const u = uptime(total, ok);
  return u === null ? '—' : `${u.toFixed(2)}%`;
};

const fmtLatency = (ms: number | null): string =>
  ms === null ? '—' : `${ms} ms`;

const fmtDuration = (sec: number | null): string => {
  if (sec === null) return '—';
  if (sec < 60) return `${sec}s`;
  if (sec < 3600) return `${Math.round(sec / 60)}m`;
  if (sec < 86400) {
    const h = Math.floor(sec / 3600);
    const m = Math.round((sec % 3600) / 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  const d = Math.floor(sec / 86400);
  const h = Math.round((sec % 86400) / 3600);
  return h > 0 ? `${d}d ${h}h` : `${d}d`;
};

const fmtRelative = (d: Date | null): string => {
  if (!d) return '—';
  const sec = Math.max(0, Math.round((Date.now() - d.getTime()) / 1000));
  if (sec < 60) return `${sec}s ago`;
  if (sec < 3600) return `${Math.round(sec / 60)}m ago`;
  if (sec < 86400) return `${Math.round(sec / 3600)}h ago`;
  return `${Math.round(sec / 86400)}d ago`;
};

const fmtInt = (n: number): string => n.toString();

const fmtTrend = (
  recent: number | null,
  baseline: number | null
): string => {
  if (recent === null || baseline === null || baseline === 0) return '—';
  const ratio = recent / baseline;
  const arrow = ratio >= 1.05 ? '↑' : ratio <= 0.95 ? '↓' : '→';
  return `${arrow} ${ratio.toFixed(2)}x`;
};

const providerLink = (r: Row): string => {
  const label = r.name ?? r.slug ?? 'unknown';
  return r.slug
    ? `[${label}](https://lmspeed.net/provider/${r.slug})`
    : label;
};

const renderTable = (rs: Row[]): string => {
  if (rs.length === 0) return '_none_';
  const lines: string[] = [
    '| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |',
    '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
  ];
  for (const r of rs) {
    lines.push(
      `| ${providerLink(r)} | ${fmtPct(r.window_7d_total_checks, r.window_7d_ok_checks)} | ${fmtPct(r.window_30d_total_checks, r.window_30d_ok_checks)} | ${fmtPct(r.total_1y, r.ok_1y)} | ${fmtPct(r.total_all, r.ok_all)} | ${fmtLatency(r.p95_7d)} | ${fmtTrend(r.window_7d_avg_latency_ms, r.window_30d_avg_latency_ms)} | ${fmtInt(r.incidents_30d)} | ${fmtDuration(r.mttr_seconds)} | ${fmtRelative(r.last_incident_at)} | ${fmtRelative(r.latest_checked_at)} |`
    );
  }
  return lines.join('\n');
};

const section = (title: string, list: Row[], defaultOpen: boolean): string => {
  const open = defaultOpen ? ' open' : '';
  return `<details${open}>
<summary><strong>${title} (${list.length})</strong></summary>

${renderTable(list)}

</details>`;
};

const nowUtc = new Date().toISOString().replace('T', ' ').slice(0, 16);
const total = rows.length;

const md = `# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [\`archive.yml\`](.github/workflows/archive.yml).

## Status

**${total} providers** — ${grouped.ok.length} 🟢 operational · ${grouped.degraded.length} 🟡 degraded · ${grouped.down.length} 🔴 down · ${grouped.unknown.length} ⚫ unknown

_Updated ${nowUtc} UTC. 7d/30d come from \`provider_healthchecks\`; 1y and all-time combine archived \`history/\` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = \`ok checks ÷ total checks\` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — \`7d avg latency ÷ 30d avg latency\`. \`↑ 1.30x\` means the last week is ~30% slower than the trailing month; \`↓\` means faster; \`→\` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

${section('🟢 Operational', grouped.ok, true)}

${section('🟡 Degraded', grouped.degraded, true)}

${section('🔴 Down', grouped.down, true)}

${
  grouped.unknown.length > 0
    ? `${section('⚫ Unknown', grouped.unknown, false)}\n`
    : ''
}

## Archive layout

    history/<slug>/<YYYY-MM>.jsonl
    state.json        # archive cursor: {last_archived_id, last_archived_at, last_archived_day}

### Entry formats

**URL header** — if every entry in a file shares one URL, the first line is a header and entries omit their \`url\` field:

    {"url":"https://..."}

Files with mixed URLs (rare) have no header and every entry carries its own \`url\`.

**Success run** — consecutive successful checks for one provider on one day with the same URL, aggregated into a single entry:

    {"type":"ok","from":"2026-02-14T00:03:12Z","to":"2026-02-14T23:53:22Z","count":144,"avg":118,"min":95,"max":512,"p95":180}

**Failure run** — consecutive failed checks for one provider on one day with the same URL, status code, and error message, aggregated into a single entry:

    {"type":"fail","from":"2026-02-14T10:13:22Z","to":"2026-02-14T11:03:15Z","count":6,"status":503,"error":"HTTP 503","avg_latency":4810}

Runs break on: day boundary, status flip (ok ↔ fail), URL change, status code change (fails only), or error message change (fails only).
`;

await writeFile('README.md', md);
await sql.end();
console.log(
  `rendered README: ${grouped.ok.length} ok / ${grouped.degraded.length} degraded / ${grouped.down.length} down / ${grouped.unknown.length} unknown`
);
