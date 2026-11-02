import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist = resolve('dist');
if (!existsSync(dist)) {
  throw new Error('Ingen dist/-katalog hittades. Kör npm run build först.');
}
const pages = [];
function scan(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) scan(path);
    else if (item.name.endsWith('.html')) pages.push(path);
  }
}
scan(dist);

const required = ['index.html', 'koncernen/index.html', 'projekt/index.html', 'arena/index.html', 'karta/index.html', 'verksamheter/wegamble/index.html'];
const missing = required.filter(path => !existsSync(join(dist, path)));
const broken = [];

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const references = html.matchAll(/\b(?:href|src)=["'](\/[^"'?#]*)(?:[?#][^"']*)?["']/g);
  for (const [, urlPath] of references) {
    const target = join(dist, decodeURIComponent(urlPath).replace(/^\/+/, ''));
    const found = existsSync(target) &&
      (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!found) broken.push(`${page.slice(dist.length + 1)} → ${urlPath}`);
  }
}

if (!existsSync(join(dist, 'sitemap-index.xml'))) missing.push('sitemap-index.xml');
if (broken.length || missing.length) {
  console.error('Saknade byggfiler:', missing);
  console.error('Trasiga interna länkar och resurser:', broken.slice(0, 30));
  process.exitCode = 1;
} else {
  console.log(`Verifierade ${pages.length} HTML-sidor och deras lokala resurser.`);
}
