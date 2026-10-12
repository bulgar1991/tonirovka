// Runs before `ng serve` / `ng build` (npm prestart / prebuild). Makes web-ready copies of the
// service photos, so only the original JPGs live in git - replace a .jpg and the copies follow:
//   hero.jpg -> hero.webp (1600 wide), hero-800.webp (phones), og.jpg (1200×630 social preview)
//   card.jpg -> card.webp
//   1.jpg …  -> 1.webp (lightbox, 1200 wide), 1-600.webp (grid thumbnail)
// Copies are skipped when they are newer than their JPG. They are ignored by git (.gitignore).
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const ROOT = 'src/assets/images/services';
const WEBP = { quality: 78, effort: 5 };

const outputs = (name) => {
  const base = name.replace(/\.jpg$/, '');
  if (base === 'hero')
    return [
      ['hero.webp', (img) => img.resize({ width: 1600, withoutEnlargement: true }).webp(WEBP)],
      ['hero-800.webp', (img) => img.resize({ width: 800 }).webp(WEBP)],
      [
        'og.jpg',
        (img) => img.resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }),
      ],
    ];
  if (base === 'card') return [['card.webp', (img) => img.resize({ width: 800 }).webp(WEBP)]];
  if (/^\d+$/.test(base))
    return [
      [`${base}.webp`, (img) => img.resize({ width: 1200, withoutEnlargement: true }).webp(WEBP)],
      [`${base}-600.webp`, (img) => img.resize({ width: 600 }).webp(WEBP)],
    ];
  return [];
};

const mtime = (file) => {
  try {
    return statSync(file).mtimeMs;
  } catch {
    return 0;
  }
};

let made = 0;
const jobs = [];
for (const dir of readdirSync(ROOT, { withFileTypes: true }).filter((d) => d.isDirectory())) {
  const folder = join(ROOT, dir.name);
  for (const name of readdirSync(folder).filter((f) => f.endsWith('.jpg') && f !== 'og.jpg')) {
    const src = join(folder, name);
    for (const [out, pipe] of outputs(name)) {
      const dest = join(folder, out);
      if (mtime(dest) > mtime(src)) continue;
      jobs.push(
        pipe(sharp(src).rotate())
          .toFile(dest)
          .then(() => made++),
      );
    }
  }
}
await Promise.all(jobs);
console.log(`Images: ${made} optimized copies written (${ROOT})`);
