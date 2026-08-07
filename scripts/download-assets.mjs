import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const sourceFiles = [
  'C:/Users/qwert/AppData/Local/Temp/windsurf/mcp_output_9ec3ce4add67ca28.txt',
  'C:/Users/qwert/AppData/Local/Temp/windsurf/mcp_output_d5762f32f7c55dbd.txt',
];
const assetsDir = path.join(root, 'public', 'assets');

await fs.mkdir(assetsDir, { recursive: true });

const assets = {};
const seen = new Set();

for (const file of sourceFiles) {
  const text = await fs.readFile(file, 'utf-8');
  const re = /const (img[A-Za-z0-9_]*) = "(https?:\/\/[^"]+)";/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    const [, varName, url] = match;
    if (seen.has(varName)) continue;
    seen.add(varName);

    const { pathname } = new URL(url);
    const ext = path.extname(pathname).toLowerCase();
    const uuid = path.basename(pathname, ext);
    const filename = `${varName}-${uuid}${ext}`;
    const outPath = path.join(assetsDir, filename);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`status ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(outPath, buf);
      assets[varName] = `/assets/${filename}`;
      console.log('downloaded', varName, '->', filename, `(${(buf.length / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error('failed', varName, url, e.message);
    }
  }
}

const libDir = path.join(root, 'lib');
await fs.mkdir(libDir, { recursive: true });
await fs.writeFile(
  path.join(libDir, 'assets.ts'),
  'export const assets = ' + JSON.stringify(assets, null, 2) + ' as const;\n',
);

console.log('done:', Object.keys(assets).length, 'assets');
