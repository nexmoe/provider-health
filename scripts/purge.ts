#!/usr/bin/env bun
import postgres from 'postgres';
import { readFile } from 'node:fs/promises';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL is required');
  process.exit(1);
}

const BATCH_SIZE = 10000;
const RETENTION_DAYS = 35;

const state = JSON.parse(await readFile('state.json', 'utf8')) as {
  last_archived_id: number;
};
const throughId = state.last_archived_id;

if (!throughId) {
  console.log('state.last_archived_id is 0, nothing to purge');
  process.exit(0);
}

const sql = postgres(DATABASE_URL, {
  ssl: /sslmode=disable/.test(DATABASE_URL)
    ? false
    : { rejectUnauthorized: false },
});
console.log(`purging rows with id <= ${throughId} and checked_at < NOW() - ${RETENTION_DAYS}d`);

let total = 0;
while (true) {
  const rows = await sql<{ id: number }[]>`
    DELETE FROM provider_healthchecks
    WHERE id IN (
      SELECT id FROM provider_healthchecks
      WHERE id <= ${throughId}
        AND checked_at < NOW() - make_interval(days => ${RETENTION_DAYS})
      ORDER BY id
      LIMIT ${BATCH_SIZE}
    )
    RETURNING id
  `;
  if (rows.length === 0) break;
  total += rows.length;
  if (total % 50000 === 0) console.log(`  deleted ${total}`);
}

console.log(`deleted ${total} row(s)`);

try {
  await sql.unsafe('VACUUM (ANALYZE) provider_healthchecks');
  console.log('vacuum analyze done');
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err);
  console.log(`vacuum skipped (${msg}); autovacuum will reclaim space`);
}

await sql.end();
