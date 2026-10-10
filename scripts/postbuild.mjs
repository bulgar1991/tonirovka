// Bundles scripts/seo-pages.ts (it imports the app's config, texts and SEO helpers through the
// tsconfig path aliases) and runs it on the build output.
import { build } from 'esbuild';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const outDir = resolve('dist/frontend/browser');
const tmp = mkdtempSync(join(tmpdir(), 'seo-pages-'));
const outfile = join(tmp, 'seo-pages.mjs');

try {
  await build({
    entryPoints: ['scripts/seo-pages.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node20',
    tsconfig: 'tsconfig.json',
    outfile,
    logLevel: 'warning',
  });
  process.argv[2] = outDir;
  await import(pathToFileURL(outfile).href);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
