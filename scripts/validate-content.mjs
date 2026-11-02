import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { companies } from '../src/data/companies.ts';
import { jobs } from '../src/data/jobs.ts';
import { news } from '../src/data/news.ts';
import { projects, featuredProjectIds } from '../src/data/projects.ts';
import { arenaPhotos } from '../src/data/arena.ts';
import { locations, locationGroups } from '../src/data/locations.ts';
import { companyEditorial } from '../src/data/companyEditorial.ts';

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
unique(Object.keys(companyEditorial), 'redaktionella verksamhetsslugs');
assert.deepEqual(Object.keys(companyEditorial).sort(), companies.map(company => company.slug).sort(), 'Alla bolag behöver egna redaktionella avsnitt');
const projectById = new Map(projects.map(project => [project.id, project]));
for (const company of companies) {
  const editorial = companyEditorial[company.slug];
  assert.ok(editorial.heading.trim() && editorial.introduction.trim(), `Saknad introduktion för ${company.name}`);
  assert.ok(editorial.groups.length, `Saknade anläggningsgrupper för ${company.name}`);
  const ids = editorial.groups.flatMap(group => {
    assert.ok(group.title.trim() && group.description.trim() && group.ids.length, `Ofullständig grupp för ${company.name}`);
    return group.ids;
  });
  unique(ids, `anläggningar för ${company.name}`);
  for (const id of ids) assert.equal(projectById.get(id)?.division, company.name, `Fel eller saknad anläggning ${id} hos ${company.name}`);
  assert.deepEqual(ids.slice().sort(), projects.filter(project => project.division === company.name).map(project => project.id).sort(), `Anläggningar saknas i grupperna för ${company.name}`);
  for (const step of editorial.connections?.steps ?? []) {
    assert.ok(step.name.trim() && step.description.trim(), `Ofullständig bolagskoppling för ${company.name}`);
    const match = step.href.match(/^(?:\/verksamheter\/([^/]+)\/)?#(anlaggningar|anlaggning-([\w-]+))$/);
    assert.ok(match, `Ogiltig kopplingslänk: ${step.href}`);
    const targetSlug = match[1] ?? company.slug;
    assert.ok(companies.some(item => item.slug === targetSlug), `Okänt bolag i kopplingslänk: ${step.href}`);
    if (match[3]) {
      const targetName = companies.find(item => item.slug === targetSlug).name;
      assert.equal(projectById.get(match[3])?.division, targetName, `Fel anläggningslänk: ${step.href}`);
    }
  }
}
for (const id of featuredProjectIds) {
  assert.ok(projects.some(project => project.id === id), `Utvalt projekt saknas: ${id}`);
}
assert.equal(news.length, 16, 'Nyhetsarkivet ska innehålla nio omarbetade artiklar och sju nya pressmeddelanden');
for (const [index, article] of news.entries()) {
  assert.match(article.publishedAt, /^20\d{2}-(0[1-9]|1[0-2])-([0-2]\d|3[01])$/, `Felaktigt publiceringsdatum: ${article.slug}`);
  assert.equal(new Date(article.publishedAt + 'T12:00:00Z').toISOString().slice(0, 10), article.publishedAt,
    `Ogiltigt kalenderdatum: ${article.slug}`);
  if (index > 0) {
    assert.ok(news[index - 1].publishedAt >= article.publishedAt,
      'Nyhetsarkivet ska vara sorterat med senaste publiceringsdatum först');
  }
  assert.ok(article.title.trim().length >= 25 && article.summary.trim().length >= 70,
    `För kort rubrik eller ingress: ${article.slug}`);
  assert.ok(article.type.trim() && article.alt.trim(), `Saknad kategori eller bildtext: ${article.slug}`);
  assert.ok(article.body.length >= 6 && article.body.every(p => p.trim().length >= 125),
    `Nyhetsartikeln behöver minst sex utvecklade stycken: ${article.slug}`);
  asset(article.image, article.slug);
}
for (const job of jobs) {
  assert.ok(divisions.has(job.division), `Okänd verksamhet i annons ${job.id}`);
}

console.log(`OK: ${companies.length} verksamheter, ${projects.length} projekt, ${news.length} nyheter, ${jobs.length} annonser.`);
