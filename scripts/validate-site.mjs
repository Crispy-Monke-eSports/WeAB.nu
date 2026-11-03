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

const required = ['index.html', 'koncernen/index.html', 'verksamheter/index.html', 'arena/index.html', 'verksamheter/wegamble/index.html', 'hallbarhet/index.html', 'bolagsstyrning/index.html', 'press/index.html', 'investerare/rapporter/index.html', 'kontakt/index.html', 'strategi/index.html', 'leverantorer/index.html'];
const missing = required.filter(path => !existsSync(join(dist, path)));
const broken = [];

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  if (!/<html\s+lang="sv">/.test(html) || !/<main\s+id="main">/.test(html) || !/href="#main"/.test(html)) {
    broken.push(`${page.slice(dist.length + 1)} saknar sidstruktur för språk eller tangentbordsnavigation`);
  }
  if (!/<meta\s+name="robots"\s+content="noindex, nofollow, noimageindex"\s*\/?\s*>/.test(html)) {
    broken.push(`${page.slice(dist.length + 1)} saknar noindex-direktiv`);
  }
  if (/rel="(?:canonical|sitemap)"/.test(html)) {
    broken.push(`${page.slice(dist.length + 1)} annonserar indexering`);
  }
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt(?:\s|=|>)/.test(tag) || !/\bwidth="\d+"/.test(tag) || !/\bheight="\d+"/.test(tag)) {
      broken.push(`${page.slice(dist.length + 1)} har en bild utan alt-text eller originalmått`);
    }
    if (/\bsrc="\/_astro\/[^\"]+\.webp"/.test(tag) && (!/\bsrcset=/.test(tag) || !/\bsizes=/.test(tag))) {
      broken.push(`${page.slice(dist.length + 1)} saknar responsiva bildstorlekar`);
    }
    const srcset = tag.match(/\bsrcset="([^"]+)"/)?.[1];
    for (const candidate of srcset?.split(',') ?? []) {
      const path = candidate.trim().split(/\s+/)[0];
      if (path.startsWith('/') && !existsSync(join(dist, path.slice(1)))) {
        broken.push(`${page.slice(dist.length + 1)} saknar bildvariant: ${path}`);
      }
    }
  }
  const references = html.matchAll(/\b(?:href|src)=["'](\/[^"'?#]*)(?:[?#][^"']*)?["']/g);
  for (const [, urlPath] of references) {
    const target = join(dist, decodeURIComponent(urlPath).replace(/^\/+/, ''));
    const found = existsSync(target) &&
      (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!found) broken.push(`${page.slice(dist.length + 1)} → ${urlPath}`);
  }
}

const featuredCorporateLinks = [
  ['index.html', '/strategi/'],
  ['koncernen/index.html', '/strategi/'],
  ['kontakt/index.html', '/leverantorer/'],
  ['press/index.html', '/logos/weab.svg'],
  ['investerare/index.html', '/investerare/rapporter/#verksamhetsoversikt']
];
for (const [file, link] of featuredCorporateLinks) {
  const html = readFileSync(join(dist, file), 'utf8');
  if (!html.includes('href="' + link + '"')) broken.push(file + ' saknar företagets länk: ' + link);
}

const htmlCache = new Map();
for (const page of pages) {
  const path = page.slice(dist.length + 1);
  const html = readFileSync(page, 'utf8');
  for (const [, href] of html.matchAll(/\bhref=["']([^"']+)["']/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const url = new URL(href, `https://weab.nu/${path.replace(/index\.html$/, '')}`);
    if (!url.hash || !url.pathname.endsWith('/')) continue;
    const targetPage = join(dist, decodeURIComponent(url.pathname).replace(/^\/+/, ''), 'index.html');
    if (!existsSync(targetPage)) {
      broken.push(path + ' länkar till en saknad sida: ' + href);
      continue;
    }
    const targetHtml = htmlCache.get(targetPage) ?? readFileSync(targetPage, 'utf8');
    htmlCache.set(targetPage, targetHtml);
    if (!targetHtml.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"')) {
      broken.push(path + ' länkar till ett saknat avsnitt: ' + href);
    }
  }
}

// Filter i tidningen, pressrummet och karriärsidan ska vara progressivt aktiverade.
// Utan JavaScript visas allt innehåll, men inga synligt verkningslösa filter.
for (const path of ['nyheter/index.html', 'press/index.html', 'karriar/index.html']) {
  const html = readFileSync(join(dist, path), 'utf8');
  const controls = [...html.matchAll(/<[^>]+data-js-control[^>]*>/g)].map(match => match[0]);
  if (!controls.length) broken.push(path + ' saknar progressivt aktiverade filter');
  for (const tag of controls) {
    if (!/\bhidden\b/.test(tag)) broken.push(path + ' har ett filter som visas utan JavaScript');
  }
}
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  if (/\bhref=["']#["']/.test(html)) {
    broken.push(page.slice(dist.length + 1) + ' har en länk utan mål');
  }
}

const contactHtml = readFileSync(join(dist, 'kontakt/index.html'), 'utf8');
for (const address of [
  'huvudkontor@weab.nu', 'kill@weab.nu', 'sort@weab.nu',
  'box@weab.nu', 'livelaughlove@weab.nu', 'gamble@weab.nu',
  'travel@weab.nu', 'trade@weab.nu', 'love@weab.nu', 'rule@weab.nu'
]) {
  if (!contactHtml.includes('mailto:' + address)) broken.push('Kontaktkatalog saknar ' + address);
}
const governanceHtml = readFileSync(join(dist, 'bolagsstyrning/index.html'), 'utf8');
for (const name of ['Store-W', 'RavenHamstster', 'Filuren2003', 'Haapalainen', 'Laxen_MX']) {
  if (!governanceHtml.includes(name)) broken.push('Ledningssidan saknar ' + name);
}
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
if (!/User-agent: Googlebot\s+Allow: \//.test(robots) ||
    !/User-agent: Bingbot\s+Allow: \//.test(robots) ||
    !/User-agent: \*\s+Disallow: \//.test(robots)) {
  broken.push('robots.txt saknar avsedda krypinstruktioner');
}
if (readdirSync(dist).some(name => /^sitemap.*\.xml$/.test(name))) {
  broken.push('Webbplatskartan ska inte publiceras');
}
if (broken.length || missing.length) {
  console.error('Saknade byggfiler:', missing);
  console.error('Trasiga interna länkar och resurser:', broken.slice(0, 30));
  process.exitCode = 1;
} else {
  console.log(`Verifierade ${pages.length} HTML-sidor och deras lokala resurser.`);
}
