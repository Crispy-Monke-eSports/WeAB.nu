import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { companies } from '../src/data/companies.ts';
import { jobs } from '../src/data/jobs.ts';
import { news } from '../src/data/news.ts';
import { expandedArticleSlugs, completedAuthorIds, expandedMinimumWords, expandedMinimumParagraphs } from '../src/data/expandedArticleSlugs.ts';
import { editorials } from '../src/data/editorial.ts';
import { publications, editorialFormats, publicationFormatLabels, additionalArticles, establishedSlugs, authorPublications, pressIssuerSlugs } from '../src/data/publications.ts';
import { authors, getAuthor } from '../src/data/authors.ts';
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
    assert.ok(group.title.trim() && group.ids.length, `Ofullständig grupp för ${company.name}`);
    return group.ids;
  });
  unique(ids, `anläggningar för ${company.name}`);
  for (const id of ids) assert.equal(projectById.get(id)?.division, company.name, `Fel eller saknad anläggning ${id} hos ${company.name}`);
  assert.deepEqual(ids.slice().sort(), projects.filter(project => project.division === company.name).map(project => project.id).sort(), `Anläggningar saknas i grupperna för ${company.name}`);
  for (const step of editorial.connections?.steps ?? []) {
    assert.ok(step.name.trim(), `Ofullständig bolagskoppling för ${company.name}`);
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
assert.equal(news.length, 16, 'Det ska finnas 16 befintliga pressmeddelanden');
assert.equal(editorials.length, 10, 'Det ska finnas tio tidigare redaktionella artiklar');
assert.equal(additionalArticles.length, 74, 'Det ska finnas 74 nya texter');
assert.equal(publications.length, 100, 'Tidningen ska innehålla exakt 100 artiklar');
unique([...expandedArticleSlugs], 'genomarbetade artikeladresser');
unique([...completedAuthorIds], 'färdigställda skribenter');
for (const authorId of completedAuthorIds) {
  const authorArticles = authorPublications(authorId);
  assert.ok(authorArticles.length >= 1, `Skribenten saknar artiklar: ${authorId}`);
  assert.ok(authorArticles.every(article => expandedArticleSlugs.includes(article.slug)),
    `Skribentens samtliga artiklar måste vara fullängdstexter: ${authorId}`);
  if (authorId === 'dagmar-stenqvist') {
    assert.equal(authorArticles.length, 5, 'Dagmar Stenqvist ska ha fem artiklar');
    for (const article of authorArticles) {
      assert.ok(article.body.length >= 9 &&
        article.body.join(' ').trim().split(/\s+/u).length >= 700,
        `Dagmars text har inte fullängd: ${article.slug}`);
    }
  }
  if (authorId === 'herr-elskar-weandersson') {
    assert.equal(authorArticles.length, 5, 'Herr Elskar Weandersson ska ha exakt fem artiklar');
    for (const article of authorArticles) {
      assert.ok(article.body.length >= 9 &&
        article.body.join(' ').trim().split(/\s+/u).length >= 700,
        `Herr Weanderssons text har inte fullängd: ${article.slug}`);
    }
  }
  if (authorId === 'alva-heden') {
    assert.equal(authorArticles.length, 6, 'Alva ska ha exakt fem nya texter och en äldre insändare');
    for (const article of authorArticles) {
      assert.ok(article.body.length >= 9 &&
        article.body.join(' ').trim().split(/\s+/u).length >= 700,
        `Alvas text har inte fullängd: ${article.slug}`);
    }
  }
}
for (const slug of expandedArticleSlugs) {
  const article = publications.find(item => item.slug === slug);
  assert.ok(article, `Genomarbetad artikel saknas: ${slug}`);
  const words = article.body.join(' ').trim().split(/\s+/u).length;
  assert.ok(words >= expandedMinimumWords,
    `Artikeln ${slug} är för kort: ${words} ord (minst ${expandedMinimumWords})`);
  assert.ok(article.body.length >= expandedMinimumParagraphs,
    `Artikeln ${slug} behöver minst ${expandedMinimumParagraphs} utvecklade stycken`);
}

assert.equal(authors.length, 15, 'Tidningen ska ha exakt 15 återkommande skribenter');
assert.equal(publications.filter(item => item.format === 'pressmeddelande').length, 16,
  'Det ska finnas 16 officiella pressmeddelanden');
assert.equal(publications.filter(item => item.authorId !== null).length, 84,
  'Skribenterna ska tillskrivas exakt 84 redaktionella texter');
assert.deepEqual(Object.keys(pressIssuerSlugs).sort(), news.map(item => item.slug).sort(),
  'Alla pressmeddelanden ska ha en explicit bolagsavsändare');
assert.equal(Object.keys(publicationFormatLabels).length, 12, 'Alla format behöver namn');
unique(authors.map(author => author.id), 'skribent-ID');
unique(authors.map(author => author.name), 'skribentnamn');
unique(publications.map(article => article.slug), 'artikeladresser');
for (const author of authors) {
  assert.ok(author.name.length > 7 && author.biography.length > 60 && author.approach.length > 45,
    `Skribentens personlighet måste beskrivas: ${author.id}`);
  assert.ok(authorPublications(author.id).length >= 4,
    `Skribenten ${author.name} måste ha minst fyra artiklar`);
}
for (const format of editorialFormats) {
  assert.ok(publications.some(item => item.format === format),
    `Saknat format: ${format}`);
}
for (const [index, article] of publications.entries()) {
  assert.match(article.publishedAt, /^20\d{2}-(0[1-9]|1[0-2])-([0-2]\d|3[01])$/,
    `Felaktigt datum i artikeln: ${article.slug}`);
  assert.equal(new Date(article.publishedAt + 'T12:00:00Z').toISOString().slice(0,10),
    article.publishedAt, `Ogiltigt datum: ${article.slug}`);
  assert.ok(article.publishedAt <= '2026-11-02', `Framtidsdaterad artikel: ${article.slug}`);
  if (index) assert.ok(publications[index - 1].publishedAt >= article.publishedAt,
    'Artiklarna ska vara sorterade med senaste datum först');
  const established = establishedSlugs.has(article.slug);
  assert.ok(article.title.trim().length >= 25 && article.summary.trim().length >= (established ? 65 : 45),
    `Artikelns rubrik eller ingress är för kort: ${article.slug}`);
  assert.ok(article.alt.trim().length > 10 && publicationFormatLabels[article.format],
    `Bilden eller formatet saknas: ${article.slug}`);
  if (article.format === 'pressmeddelande') {
    assert.equal(article.authorId, null,
      `Pressmeddelanden får inte tillskrivas skribenter: ${article.slug}`);
    assert.ok(article.issuer, `Pressmeddelandet saknar bolagsavsändare: ${article.slug}`);
    assert.equal(article.byline, article.issuer.name);
    const slug = pressIssuerSlugs[article.slug];
    if (slug === 'weab') {
      assert.deepEqual(article.issuer, { name: 'WeAB-koncernen', href: '/koncernen/' });
    } else {
      const company = companies.find(item => item.slug === slug);
      assert.ok(company, `Okänd pressavsändare för ${article.slug}`);
      assert.deepEqual(article.issuer, {
        name: company.name, href: `/verksamheter/${company.slug}/`
      });
    }
  } else {
    assert.equal(article.issuer, null,
      `Redaktionella artiklar får inte ha pressavsändare: ${article.slug}`);
    assert.equal(article.byline, getAuthor(article.authorId).name,
      `Fel skribent för artikeln: ${article.slug}`);
  }
  // Låt reportage, insändare och korta nyhetsnotiser ha olika längd och rytm.
  const minParagraphs = 3;
  const minChars = 350;
  assert.ok(article.body.length >= minParagraphs && article.body.every(p => p.trim().length > 0)
    && article.body.join('').length >= minChars,
    `Ofullständig artikel: ${article.slug} (minst ${minParagraphs} stycken och ${minChars} tecken)`);
  asset(article.image, article.slug);
}
for (const job of jobs) {
  assert.ok(divisions.has(job.division), `Okänd verksamhet i annons ${job.id}`);
}

console.log(`OK: ${companies.length} verksamheter, ${projects.length} projekt, ${publications.length} artiklar, ${authors.length} skribenter, ${jobs.length} annonser.`);
