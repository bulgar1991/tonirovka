// Runs before `ng serve` / `ng build` (see package.json). Writes the web app manifest in each
// language into src/ - site.webmanifest (Romanian), site-ru.webmanifest, site-en.webmanifest -
// so both the dev server and the build serve them. Pages link their own language's manifest.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { LANGS } from '@/config/routes';
import { manifestPath, webManifest } from '@services/seo-data';

const dir = process.argv[2];
for (const lang of LANGS) {
  writeFileSync(join(dir, manifestPath(lang)), JSON.stringify(webManifest(lang), null, 2) + '\n');
}
console.log(`Manifests: ${LANGS.map(manifestPath).join(', ')} -> ${dir}`);
