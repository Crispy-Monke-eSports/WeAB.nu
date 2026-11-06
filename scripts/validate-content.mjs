import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { companies } from '../src/data/companies.ts';
import { jobs } from '../src/data/jobs.ts';
import { news } from '../src/data/news.ts';
import { expandedArticleSlugs, completedAuthorIds, expandedMinimumWords, expandedMinimumParagraphs } from '../src/data/expandedArticleSlugs.ts';
import { editorials } from '../src/data/editorial.ts';
import { publications, editorialFormats, publicationFormatLabels, additionalArticles, establishedSlugs, authorPublications, pressIssuerSlugs } from '../src/data/publications.ts';
import { authors, getAuthor } from '../src/data/authors.ts';
import { projects, featuredProjectIds } from '../src/data/projects.ts';
import { wedgsProposal } from '../src/data/wedgsProposal.ts';
import { arenaPhotos } from '../src/data/arena.ts';
import { locations, locationGroups } from '../src/data/locations.ts';
import { companyEditorial } from '../src/data/companyEditorial.ts';
import { companyContacts, headquarters, emailForCompany } from '../src/data/contacts.ts';
import { chiefExecutive, leadingMembers } from '../src/data/leadership.ts';
import { leaderProfiles } from '../src/data/leaderProfiles.ts';
import { lightingSecurityArticleSlugs, lightingSecurityEdits, lightingSecurityNotice } from '../src/data/lightingSecurity.ts';

function unique(values, description) {
  assert.equal(new Set(values).size, values.length, `Dubbletter bland ${description}`);
}

function asset(path, description) {
  assert.ok(path.startsWith('/') && !path.includes('..'), `Ogiltig sökväg för ${description}: ${path}`);
  const source = path.startsWith('/images/') ? join('src/assets', path.slice(1)) : join('public', path.slice(1));
  assert.ok(existsSync(source), `Saknad fil för ${description}: ${path}`);
}

for (const name of readdirSync('public/images')) {
  const original = join('public/images', name);
  const imported = join('src/assets/images', name);
  assert.ok(existsSync(imported) && readFileSync(original).equals(readFileSync(imported)),
    `Publik originalbild och Astro-import skiljer sig åt: ${name}`);
}

// Designregel från AGENTS.md: inga ögonbryn/överrubriker före rubriker.
function assertNoHeadingEyebrows(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filepath = join(directory, entry.name);
    if (entry.isDirectory()) {
      assertNoHeadingEyebrows(filepath);
      continue;
    }
    if (!entry.name.endsWith('.astro')) continue;
    const source = readFileSync(filepath, 'utf8');
    const directPrefix = /<(span|p|small|div)\b([^>]*)>[^<]*<\/\1>\s*<h[1-6]\b/gi;
    for (const match of source.matchAll(directPrefix)) {
      const [, tag, attributes] = match;
      // En grafisk avatar är inte en ögonbrynstext.
      if (tag === 'span' && /\bmember-symbol\b/.test(attributes)) continue;
      const looksLikeEyebrow = tag === 'span'
        || /\b(?:small-caps|eyebrow|kicker|overline|section-label|overtitle)\b/i.test(attributes);
      assert.ok(!looksLikeEyebrow,
        `${filepath} har en förbjuden ögonbrynsetikett direkt före en rubrik: ${match[0].slice(0, 120)}`);
    }
    const nestedTimePrefix = /<span\b[^>]*><time\b[^>]*>[^<]*<\/time>[^<]*<\/span>\s*<h[1-6]\b/gi;
    assert.ok(!nestedTimePrefix.test(source),
      `${filepath} har datum eller kategorietikett ovanför en rubrik; placera metadata under titeln`);
    const quotedEyebrow = /<span\b[^>]*class="[^"]*\bsmall-caps\b[^"]*"[^>]*>[^<]*<\/span>\s*<blockquote\b/gi;
    assert.ok(!quotedEyebrow.test(source),
      `${filepath} har ögonbrynsetikett ovanför ett citatblock`);
  }
}
assertNoHeadingEyebrows('src');

unique(companies.map(({ slug }) => slug), 'verksamhetsslugs');
assert.equal(headquarters.email, 'huvudkontor@weab.nu');
assert.equal(companyContacts.length, companies.length, 'Varje dotterbolag ska ha en kontaktadress');
unique(companyContacts.map(contact => contact.email), 'dotterbolagsadresser');
for (const company of companies) {
  const contact = companyContacts.find(item => item.slug === company.slug);
  assert.ok(contact, 'Saknad kontakt för ' + company.name);
  assert.equal(contact.name, company.name);
  assert.equal(emailForCompany(company.slug), contact.email);
  assert.match(contact.email, /^[a-z]+@weab\.nu$/u, 'Ogiltig kontaktadress för ' + company.name);
}
assert.equal(chiefExecutive.name, 'Store-W');
assert.deepEqual(leadingMembers.map(member => member.name), [
  'RavenHamster', 'Filuren2003', 'Haapalainen', 'Laxen_MX'
]);
assert.ok(leadingMembers.every(member => member.title === 'Ledande ledamot'));
unique(leadingMembers.map(member => member.slug), 'ledamotsadresser');
assert.equal(leaderProfiles.length, leadingMembers.length, 'Alla ledamöter behöver en profilsida');
for (const profile of leaderProfiles) {
  assert.ok(profile.member && leadingMembers.includes(profile.member), 'Okänd ledamot i profil');
  assert.ok(profile.introduction.length > 70 && profile.past.length > 70 &&
    profile.work.length >= 2 && profile.day.length >= 3 && profile.future.length > 70 &&
    profile.questions.length >= 3,
    `Ofullständig profil för ${profile.member.name}`);
  assert.ok(profile.work.every(paragraph => paragraph.length > 70) &&
    profile.day.every(paragraph => paragraph.length > 70) &&
    profile.questions.every(item => item.question.trim() && item.answer.length > 40),
    `Ofullständiga svar för ${profile.member.name}`);
  if (profile.responsibility) {
    assert.ok(companies.some(company => `/verksamheter/${company.slug}/` === profile.responsibility.href),
      `Ogiltigt bolag i profilen för ${profile.member.name}`);
  }
}
const filurenProfile = leaderProfiles.find(profile => profile.member.slug === 'filuren2003');
assert.ok(filurenProfile?.past.includes('vatten utdelat varannan dag') &&
  filurenProfile.past.includes('Årets insparning 2025') && filurenProfile.past.includes('champagnefest') &&
  filurenProfile.past.includes('bara företagets toppar var inbjudna'),
  'Filuren2003s vattenbesparing och utmärkelse ska finnas i profilen');
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
const housingCompany = companies.find(company => company.slug === 'welivelaughlove');
assert.ok(leadingMembers.some(member => member.name === 'Filuren2003' && member.title === 'Ledande ledamot'),
  'Filuren2003 ska förbli en av de fyra ledande ledamöterna');
assert.ok(housingCompany?.facts.some(fact => fact.label === 'Huvudansvarig' && fact.value.includes('Filuren2003') && fact.value.includes('förtrycksminister')),
  'WeLiveLaughLoves nya ansvarsfördelning ska framgå');
assert.ok(companies.find(company => company.slug === 'welove')?.facts.some(fact => fact.label === 'Ansvarig för WeLove' && fact.value === 'Haapalainen'),
  'Haapalainens ansvar för WeLove ska framgå');
for (const member of leadingMembers) asset(member.profileImage, `Profilbild för ${member.name}`);
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
assert.equal(news.length, 20, 'Det ska finnas 20 pressmeddelanden');
assert.equal(wedgsProposal.proposer, 'ezzo13337', 'WeDGS-förslagets upphovsperson får inte tappas bort');
assert.ok(!wedgsProposal.approved && !wedgsProposal.implemented, 'WeDGS är inte beslutat eller implementerat');
assert.ok(!companies.some(company => company.slug === wedgsProposal.slug), 'WeDGS får inte registreras som dotterbolag utan beslut');
assert.equal(pressIssuerSlugs[wedgsProposal.pressSlug], 'weab', 'WeDGS-besked måste avsändas av WeAB');
assert.ok(news.some(item => item.slug === wedgsProposal.pressSlug &&
  item.body.some(paragraph => paragraph.includes('ezzo13337')) &&
  item.body.some(paragraph => paragraph.includes('Store-W'))),
  'Pressmeddelandet måste redovisa förslagsställare och Store-W:s kommentar');
assert.equal(editorials.length, 10, 'Det ska finnas tio tidigare redaktionella artiklar');
assert.equal(additionalArticles.length, 74, 'Det ska finnas 74 nya texter');
assert.equal(publications.length, 104, 'Arkivet ska innehålla exakt 104 publikationer');
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

// Samtliga publika artiklar säkerhetsgranskas efter att fullängdstexten valts.
// Endast artiklar som faktiskt innehåller invändningar om ljuset censureras.
assert.deepEqual([...lightingSecurityArticleSlugs].sort(), [
  'bostadsstabilitet',
  'den-lilla-lyktan',
  'en-tydlig-ordning-for-besok',
  'insandare-ordning-sektion-tre',
  'ledare-egendom-och-ansvar',
  'vad-stadshuset-ansvarar-for',
  'werule-fastighetsforvaltning'
].sort(), 'Fel lista över säkerhetsgranskade ljusärenden');
assert.ok(lightingSecurityNotice.includes('Samtliga lampor är utmärkta. Inga fel finns.'));
assert.ok(lightingSecurityNotice.includes('rikets säkerhet'));
for (const article of publications) {
  const edits = lightingSecurityEdits[article.slug];
  const joinedBody = article.body.join(' ');
  if (!edits) {
    assert.ok(!joinedBody.includes(lightingSecurityNotice),
      'Oskyldiga artiklar ska inte censureras: ' + article.slug);
    continue;
  }
  assert.equal(article.body.at(-1), lightingSecurityNotice,
    'Säkerhetsbesked saknas eller har flyttats i ' + article.slug);
  assert.ok(joinedBody.includes('████') && joinedBody.includes('rikets säkerhet'),
    'Censur av ljusfrågor saknas i ' + article.slug);
  for (const [original] of edits) {
    assert.ok(!joinedBody.includes(original),
      'Omaskad kritik mot belysningen finns kvar i ' + article.slug + ': ' + original);
  }
}
const uncensoredLightComplaints = /(?:en trasig lykta|en lykta inte fungerar|lyktan vid en gång hade slocknat|stadshus som saknar fungerande belysning|önskemål om bättre belysning|väg beskrivs som mörk av flera boende|belysningen slutat fungera|fråga om trasig belysning)/i;
for (const article of publications) {
  assert.ok(!uncensoredLightComplaints.test(article.body.join(' ')),
    'Omaskad uppgift om undermålig belysning i ' + article.slug);
}

assert.equal(authors.length, 15, 'Tidningen ska ha exakt 15 återkommande skribenter');
assert.equal(publications.filter(item => item.format === 'pressmeddelande').length, 19,
  'Det ska finnas 19 officiella pressmeddelanden');
assert.equal(publications.filter(item => item.authorId !== null).length, 84,
  'Skribenterna ska tillskrivas exakt 84 redaktionella texter');
// Koncernens nya säkerhetsmeddelande ska förbli ett officiellt pressutskick.
const martaNotice = publications.find(article => article.slug === 'weab-marta-ek-olycka-jarnfarmen');
assert.ok(martaNotice, 'Pressmeddelandet om Märta Ek saknas');
assert.equal(martaNotice.format, 'pressmeddelande');
assert.equal(martaNotice.authorId, null);
assert.equal(martaNotice.issuer?.name, 'WeAB-koncernen');
assert.equal(martaNotice.publishedAt, '2026-11-03');
assert.ok(publications.findIndex(item => item.slug === martaNotice.slug) > 1,
  'De nya WeRule-meddelandena ska listas före det tidigare beskedet');
for (const slug of ['werule-samlad-myndighetsutovning', 'werule-valdsmonopol-och-tillsyn']) {
  const notice = publications.find(item => item.slug === slug);
  assert.equal(notice?.format, 'pressmeddelande');
  assert.equal(notice?.authorId, null);
  assert.equal(notice?.issuer?.name, 'WeRule');
  assert.equal(notice?.publishedAt, '2026-11-04');
}
assert.ok(publications.find(item => item.slug === 'werule-samlad-myndighetsutovning')?.body.join(' ').includes('”frivilligt” valt att bli tvångsplacerade i Sektion 3, Avdelning A'),
  'Den tidigare regeringens och riksdagens placering ska framgå av pressmeddelandet');
assert.deepEqual(publications.slice(0, 2).map(item => item.slug),
  ['werule-samlad-myndighetsutovning', 'werule-valdsmonopol-och-tillsyn']);
assert.ok(martaNotice.body.join(' ').includes('samtliga lampor är utmärkta och inga fel finns'));
assert.ok(martaNotice.body.join(' ').includes('rikets säkerhet'));
assert.ok(martaNotice.body.join(' ').includes('Inga ytterligare frågor kommer att tas emot.'));
assert.deepEqual(Object.keys(pressIssuerSlugs).sort(), news.map(item => item.slug).sort(),
  'Alla pressmeddelanden ska ha en explicit bolagsavsändare');
assert.equal(Object.keys(publicationFormatLabels).length, 12, 'Alla format behöver namn');
unique(authors.map(author => author.id), 'skribent-ID');
unique(authors.map(author => author.name), 'skribentnamn');
unique(publications.map(article => article.slug), 'artikeladresser');
for (const author of authors) {
  assert.ok(author.name.length > 7 && author.biography.length > 60 && author.background.length > 45,
    `Skribentens bakgrund måste beskrivas: ${author.id}`);
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
  assert.ok(article.publishedAt <= '2026-11-04', `Framtidsdaterad artikel: ${article.slug}`);
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
