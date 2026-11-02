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
  assert.ok(photo.alt.trim() && photo.title.trim() && photo.caption.trim(), 'Arena-bilder behöver tillgängliga texter');
  asset(photo.src, photo.title);
}

const divisions = new Set(['WeAB', ...companies.map(({ name }) => name)]);
for (const company of companies) {
  asset(`/logos/${company.slug}.svg`, company.name);
  if (company.image) {
    assert.ok(company.imageAlt?.trim(), `Bildtext saknas för ${company.name}`);
    asset(company.image, company.name);
  }
  if (company.secondaryImage) {
    assert.ok(company.secondaryAlt?.trim(), `Sekundär bildtext saknas för ${company.name}`);
    asset(company.secondaryImage, company.name);
  }
}
asset('/logos/weab.svg', 'WeAB');

for (const project of projects) {
  assert.ok(divisions.has(project.division), `Okänd verksamhet i projekt ${project.id}`);
  assert.ok(project.alt.trim(), `Bildtext saknas i projekt ${project.id}`);
  asset(project.image, project.id);
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

console.log(`OK: ${companies.length} verksamheter, ${projects.length} projekt, ${news.length} nyheter, ${jobs.length} exempelannonser.`);
