/**
 * WeAB block-logo. Hand-coded pixel art, no fonts, no generative images.
 * The silhouette is a front-on geometric interpretation of the physical
 * WE emblem shown on the WeSort and WeKill Minecraft builds.
 *
 * Edit the 1/0 mask below to change the geometry, then run:
 *   node scripts/generate-logos.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';

// Each # is one square Minecraft-style block (an SVG rect).
// W has two descenders; E has three horizontal bars.
const mask = [
  '..............',
  '.#...#.#####..',
  '.#...#.#......',
  '.#.#.#.####...',
  '.#.#.#.#......',
  '..#.#..#####..',
  '..............',
];
const palette = {
  weab: '#00BCD4',
  wekill: '#C62828',
  wesort: '#E66A00',
  webox: '#8E44AD',
  welivelaughlove: '#79A83B',
  wegamble: '#D4A017',
  wetravel: '#2563EB',
};

const pixel = 11;
const edge = 10;
const width = mask[0].length * pixel + edge*2;
const height = mask.length * pixel + edge*2;
const blocks = mask.flatMap((row, y) => [...row].flatMap((char, x) =>
  char === '#' ? [`<rect x="${x*pixel+edge}" y="${y*pixel+edge}" width="${pixel}" height="${pixel}"/>`] : []
)).join('');

await mkdir('public/logos', { recursive: true });
for (const [name, fill] of Object.entries(palette)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="logo-title"><title id="logo-title">${name} — WE</title><rect width="${width}" height="${height}" fill="${fill}"/><g fill="#fff" shape-rendering="crispEdges">${blocks}</g></svg>`;
  await writeFile(`public/logos/${name}.svg`, svg + '\n');
}
console.log('Generated 7 WE pixel-art SVG logos from code.');
