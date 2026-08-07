import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(root, 'public', 'assets');
const libFile = path.join(root, 'lib', 'assets.ts');

const files = await fs.readdir(assetsDir);
const assets = {};

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const varName = base.split('-')[0];

  if (ext === '.png') {
    const inPath = path.join(assetsDir, file);
    const outName = `${base}.webp`;
    const outPath = path.join(assetsDir, outName);
    await sharp(inPath).webp({ quality: 85, effort: 4 }).toFile(outPath);
    await fs.unlink(inPath);
    assets[varName] = `/assets/${outName}`;
    console.log('converted', file, '->', outName);
  } else if (ext === '.svg') {
    assets[varName] = `/assets/${file}`;
  }
}

await fs.writeFile(
  libFile,
  'export const assets = ' + JSON.stringify(assets, null, 2) + ' as const;\n',
);

console.log('converted', Object.keys(assets).length, 'assets');
