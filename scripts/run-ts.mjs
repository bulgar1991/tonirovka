// Runs one of the TypeScript scripts in scripts/ that import the app's config, texts and SEO
// helpers through the tsconfig path aliases: bundles it with esbuild and runs it on a folder.
//   node scripts/run-ts.mjs scripts/manifests.ts src                      (before start / build)
//   node scripts/run-ts.mjs scripts/seo-pages.ts dist/frontend/browser    (after build)
import { build } from 'esbuild';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const [entry, dir] = process.argv.slice(2);
const tmp = mkdtempSync(join(tmpdir(), 'run-ts-'));
const outfile = join(tmp, basename(entry).replace(/\.ts$/, '.mjs'));

try {
  await build({
    entryPoints: [entry],
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node20',
    tsconfig: 'tsconfig.json',
    outfile,
    logLevel: 'warning',
  });
  process.argv[2] = resolve(dir);
  await import(pathToFileURL(outfile).href);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
