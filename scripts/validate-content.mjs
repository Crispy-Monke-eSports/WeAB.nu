import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { companies } from '../src/data/companies.ts';
import { jobs } from '../src/data/jobs.ts';
import { news } from '../src/data/news.ts';
import { projects, featuredProjectIds } from '../src/data/projects.ts';
import { arenaPhotos } from '../src/data/arena.ts';
import { locations, locationGroups } from '../src/data/locations.ts';

function unique(values, description) {
  assert.equal(new Set(values).size, values.length, `Dubbletter bland ${description}`);
}

function asset(path, description) {
  assert.ok(path.startsWith('/') && !path.includes('..'), `Ogiltig sökväg för ${description}: ${path}`);
  assert.ok(existsSync(join('public', path.slice(1))), `Saknad fil för ${description}: ${path}`);
}

unique(companies.map(({ slug }) => slug), 'verksamhetsslugs');
unique(companies.map(({ name }) => name), 'verksamhetsnamn');
unique(projects.map(({ id }) => id), 'projekt-id');
unique(news.map(({ slug }) => slug), 'nyhetsslugs');
unique(jobs.map(({ id }) => id), 'annons-id');
unique(arenaPhotos.map(({ src }) => src), 'arenabilder');
unique(locations.map(({ id }) => id), 'waypoint-identifierare');
unique(locations.map(({ name, dimension, x, y, z }) => [name, dimension, x, y, z].join('|')), 'waypoint-positioner');
assert.equal(locations.length, 35, 'Importen ska innehålla 35 unika platser');
assert.equal(locations.filter(place => place.group === 'Farmer').length, 14, 'Det ska finnas 14 farmer');
for (const place of locations) {
  assert.ok(locationGroups.includes(place.group), `Okänd platskategori: ${place.group}`);
  assert.ok(['overworld', 'the_nether', 'the_end'].includes(place.dimension), `Ogiltig dimension: ${place.name}`);
  for (const coordinate of [place.x, place.y, place.z]) assert.ok(Number.isInteger(coordinate), `Ogiltig koordinat för ${place.name}`);
  if (place.group === 'Farmer') {
    assert.equal(place.owner, 'WeKill', `WeKill ska stå som ansvarig för farmen ${place.name}`);
    assert.equal(place.relatedPage, '/verksamheter/wekill/');
  }
}

assert.equal(arenaPhotos.length, 3, 'Arenagalleriet ska ha tre bilder');
for (const photo of arenaPhotos) {
  assert.ok(photo.alt.trim(), 'Arena-bilder behöver alt-text');
  asset(photo.src, photo.alt);
}

const divisions = new Set(['WeAB', ...companies.map(({ name }) => name)]);
for (const company of companies) {
  assert.ok(company.name.startsWith('We') && company.name.length > 2,
    `Verksamhetsnamn måste kunna kombineras med WE-logotypen: ${company.name}`);
  asset(`/logos/${company.slug}.svg`, company.name);
  if (company.image) {
    assert.ok(company.imageAlt?.trim(), `Alt-text saknas för ${company.name}`);
    asset(company.image, company.name);
  }
  if (company.secondaryImage) {
    assert.ok(company.secondaryAlt?.trim(), `Sekundär alt-text saknas för ${company.name}`);
    asset(company.secondaryImage, company.name);
  }
}
asset('/logos/weab.svg', 'WeAB');
assert.ok(existsSync(join('src', 'assets', 'we-logo.svg')),
  'Den officiella WE-SVG-förlagan saknas');

for (const project of projects) {
  assert.ok(divisions.has(project.division), `Okänd verksamhet i projekt ${project.id}`);
  assert.ok(project.alt.trim(), `Alt-text saknas i projekt ${project.id}`);
  asset(project.image, project.id);
  for (const photo of project.gallery ?? []) {
    assert.ok(photo.alt.trim(), `Alt-text saknas i galleriet för ${project.id}`);
    asset(photo.image, project.id);
  }
}
for (const id of featuredProjectIds) {
  assert.ok(projects.some(project => project.id === id), `Utvalt projekt saknas: ${id}`);
}
for (const article of news) {
  assert.ok(article.alt.trim() && article.body.length > 0, `Ofullständig artikel: ${article.slug}`);
  asset(article.image, article.slug);
}
for (const job of jobs) {
  assert.ok(divisions.has(job.division), `Okänd verksamhet i annons ${job.id}`);
}

console.log(`OK: ${companies.length} verksamheter, ${projects.length} projekt, ${news.length} nyheter, ${jobs.length} annonser.`);
