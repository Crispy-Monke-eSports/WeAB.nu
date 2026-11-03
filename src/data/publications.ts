import { news, type NewsItem } from './news.ts';
import { editorials, type EditorialFormat } from './editorial.ts';
import { authors, getAuthor } from './authors.ts';
import { expandedArticleBodies } from './expanded/bodies.ts';
import { censorLightingComplaints } from './lightingSecurity.ts';
import { companies } from './companies.ts';
import { agnesArticles } from './edition/agnes.ts';
import { elskarArticles } from './edition/elskar.ts';
import { martaArticles } from './edition/marta.ts';
import { nilsArticles } from './edition/nils.ts';
import { selmaArticles } from './edition/selma.ts';
import { viktorArticles } from './edition/viktor.ts';
import { ottiliaArticles } from './edition/ottilia.ts';
import { rubenArticles } from './edition/ruben.ts';
import { alvaArticles } from './edition/alva.ts';
import { leifArticles } from './edition/leif.ts';
import { dagmarArticles } from './edition/dagmar.ts';
import { pelleArticles } from './edition/pelle.ts';
import { esterArticles } from './edition/ester.ts';
import { bjornArticles } from './edition/bjorn.ts';
import { irisArticles } from './edition/iris.ts';
import type { MagazineDraft } from './magazineTypes.ts';

export type PublicationFormat = 'pressmeddelande' | EditorialFormat | MagazineDraft['format'];
export interface PressIssuer {
  name: string;
  href: string;
}
export interface Publication extends NewsItem {
  format: PublicationFormat;
  /** Endast redaktionella texter har en personlig skribent. */
  authorId: string | null;
  /** Mänsklig skribent eller officiellt bolagsnamn beroende på typ. */
  byline: string;
  /** Enbart pressmeddelanden har en officiell bolagsavsändare. */
  issuer: PressIssuer | null;
}
export const publicationFormatLabels: Record<PublicationFormat, string> = {
  pressmeddelande: 'Pressmeddelande',
  insandare: 'Insändare',
  ledare: 'Ledare',
  kronika: 'Krönika',
  reportage: 'Reportage',
  intervju: 'Intervju',
  ekonomi: 'Ekonomi',
  kultur: 'Kultur',
  guide: 'Guide',
  analys: 'Analys',
  lokalt: 'Lokalt',
  debatt: 'Debatt'
};

// Pressmeddelanden är bolagens officiella utskick, inte texter av
// redaktionens 15 fiktiva skribenter.
export const pressIssuerSlugs: Record<string, string> = {
  'weab-marta-ek-olycka-jarnfarmen': 'weab',
  'werule-fastighetsforvaltning': 'werule',
  'wesort-colors-kapacitet': 'wesort',
  'wekill-tredimensionell-produktionsplan': 'wekill',
  'webox-tillatelsehantering': 'webox',
  'welivelaughlove-sektion-tre': 'welivelaughlove',
  'huvudstadens-arena': 'weab',
  'welove-framtidens-arbetskraft': 'welove',
  'wetravel-stationsplan': 'wetravel',
  'wetrade-kunskapsmonopol': 'wetrade',
  'webox-lagerkontroll': 'webox',
  'wetravel-forbindelser': 'wetravel',
  'weab-kapitalallokering': 'weab',
  'wesort-logistik': 'wesort',
  'wekill-produktion': 'wekill',
  'wegamble-utveckling': 'wegamble',
  'bostadsstabilitet': 'welivelaughlove'
};
function pressIssuerFor(slug: string): PressIssuer {
  const companySlug = pressIssuerSlugs[slug];
  if (!companySlug) throw new Error('Pressmeddelandet saknar bolagsavsändare: ' + slug);
  if (companySlug === 'weab') return { name: 'WeAB-koncernen', href: '/koncernen/' };
  const company = companies.find(item => item.slug === companySlug);
  if (!company) throw new Error('Okänt avsändande bolag: ' + companySlug);
  return { name: company.name, href: `/verksamheter/${company.slug}/` };
}

// Personliga signaturer gäller endast tidigare redaktionella texter.
const establishedByline: Record<string, string> = {
  'insandare-ordning-sektion-tre': 'marta-ek',
  'ledare-egendom-och-ansvar': 'agnes-holmgren',
  'insandare-en-handlare-racker': 'ester-linde',
  'reportage-inne-i-wesort': 'nils-brynja',
  'kronika-kostnaden-for-genvagar': 'viktor-sadel',
  'intervju-webox-fem-fragor': 'bjorn-ralsund',
  'ekonomi-en-diamant-ar-inte-bara-en-diamant': 'selma-kvarnstrom',
  'kultur-arenan-och-aran': 'ottilia-glas',
  'guide-besok-weab': 'iris-skymningsson',
  'insandare-farmer-som-fungerar': 'alva-heden'
};
export const additionalArticles: MagazineDraft[] = [
  ...agnesArticles, ...elskarArticles, ...martaArticles,
  ...nilsArticles, ...selmaArticles, ...viktorArticles,
  ...ottiliaArticles, ...rubenArticles, ...alvaArticles,
  ...leifArticles, ...dagmarArticles, ...pelleArticles,
  ...esterArticles, ...bjornArticles, ...irisArticles
];
export const establishedSlugs = new Set([...news, ...editorials].map(article => article.slug));

const entries: Array<NewsItem & { format: PublicationFormat; authorId?: string }> = [
  ...news.map(article => ({ ...article, format: 'pressmeddelande' as const })),
  ...editorials,
  ...additionalArticles
];
export const publications: Publication[] = entries.map(original => {
  const article = { ...original, body: censorLightingComplaints(original.slug, expandedArticleBodies.get(original.slug) ?? original.body) };
  if (article.format === 'pressmeddelande') {
    const issuer = pressIssuerFor(article.slug);
    return { ...article, authorId: null, issuer, byline: issuer.name };
  }
  const authorId = article.authorId ?? establishedByline[article.slug];
  const author = getAuthor(authorId);
  return { ...article, authorId, issuer: null, byline: author.name };
}).sort((a,b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug, 'sv'));

export const editorialFormats: Exclude<PublicationFormat, 'pressmeddelande'>[] = [
  'insandare', 'ledare', 'kronika', 'reportage', 'intervju',
  'ekonomi', 'kultur', 'guide', 'analys', 'lokalt', 'debatt'
];
export const opinionFormats: PublicationFormat[] = ['insandare','ledare','kronika','debatt'];

export const authorPublications = (authorId: string): Publication[] =>
  publications.filter(article => article.authorId === authorId);
export const authorArticleCounts = Object.fromEntries(
  authors.map(author => [author.id, authorPublications(author.id).length])
) as Record<string, number>;
