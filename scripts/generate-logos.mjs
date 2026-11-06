/**
 * WE-logo variants from the original vector artwork in src/assets/we-logo.svg.
 * The silhouette, lighting, grey corners and pixel letters stay untouched.
 *
 * npm run logos:generate  — rebuild
 * npm run logos:check     — fail if SVGs are stale
 */
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { companies } from '../src/data/companies.ts';
import { wedgsProposal } from '../src/data/wedgsProposal.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const master = await readFile(join(root, 'src/assets/we-logo.svg'), 'utf8');
const outputDir = join(root, 'public/logos');
const check = process.argv.includes('--check');

// These are individual SVG layers. The corner pieces are always opaque;
// the shadow retains its independent alpha value.
const defaults = { corners: '#D9D6D3', shadow: '#171413', shadowOpacity: '.19' };
const overrides = {
  // Example: wekill: { corners: '#C6C2BE', shadow: '#241514' },
};

const brands = [
  { slug: 'weab', name: 'WeAB', color: '#00BCD4' },
  ...companies.map(({ slug, name, accent }) => ({ slug, name, color: accent })),
  // Endast preliminär konceptprofil: DGS finns ännu inte bland dotterbolagen.
  { slug: wedgsProposal.slug, name: wedgsProposal.proposedGroupName, color: wedgsProposal.proposedBrandColor },
];

const replaceExactly = (source, regex, replacement, description) => {
  const hits = [...source.matchAll(new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g'))];
  assert.equal(hits.length, 1, 'SVG layer missing or duplicated: ' + description);
  return source.replace(regex, replacement);
};

assert.equal(new Set(brands.map(({ slug }) => slug)).size, brands.length);
assert.ok(!companies.some(company => company.slug === wedgsProposal.slug), 'DGS is not an approved subsidiary');
assert.ok(!companies.some(company => company.accent.toLowerCase() === wedgsProposal.proposedBrandColor.toLowerCase()), 'Use an unused concrete shade');
assert.match(master, /viewBox="0 0 1200 830"/);
for (const id of ['brand-color', 'brand-corners', 'brand-shadow', 'letter-W', 'letter-E']) {
  assert.ok(master.includes('id="' + id + '"'), 'Missing original SVG group: ' + id);
}
assert.equal((master.match(/<rect\b[^>]*fill="#D9D6D3"/g) ?? []).length, 8,
  'Expected all eight opaque, grey corner pieces from the original design');

function variant(brand) {
  const { corners, shadow, shadowOpacity } = { ...defaults, ...overrides[brand.slug] };
  for (const value of [brand.color, corners, shadow]) {
    assert.match(value, /^#[0-9a-f]{6}$/i, 'Invalid brand color');
  }
  assert.match(shadowOpacity, /^(?:0?(?:\.\d+)|0|1(?:\.0+)?)$/);

  let svg = replaceExactly(master, /(<title id="logo-title">)[^<]*(<\/title>)/,
    (_m, a, b) => a + 'WE – ' + brand.name + b, 'logo title');
  svg = replaceExactly(svg, /(<path id="brand-color"[^>]*\bfill=")[^"]+(")/,
    (_m, a, b) => a + brand.color + b, 'brand-color');
  svg = replaceExactly(svg, /(<path id="brand-shadow"[^>]*\bfill=")[^"]+(" opacity=")[^"]+(")/,
    (_m, a, b, c) => a + shadow + b + shadowOpacity + c, 'brand-shadow');
  svg = svg.replaceAll('fill="#D9D6D3"', 'fill="' + corners + '"');
  const count = (svg.match(new RegExp('fill="' + corners + '"', 'g')) ?? []).length;
  assert.equal(count, 8, 'All eight opaque corners must remain visible');
  assert.ok(svg.includes('id="brand-lighting"'), 'Must preserve original gradient');
  assert.ok(svg.includes('id="letter-W"') && svg.includes('id="letter-E"'), 'Must preserve logo letters');
  return svg.trimEnd() + '\n';
}

if (!check) await mkdir(outputDir, { recursive: true });
for (const brand of brands) {
  const path = join(outputDir, brand.slug + '.svg');
  const output = variant(brand);
  if (check) {
    const existing = await readFile(path, 'utf8');
    assert.equal(existing, output,
      'Outdated logo: ' + brand.slug + '. Run npm run logos:generate');
  } else {
    await writeFile(path, output, 'utf8');
  }
}
console.log(check
  ? 'Verified ' + brands.length + ' WE logos against the official SVG master.'
  : 'Generated ' + brands.length + ' WE logos from the official SVG master.');
