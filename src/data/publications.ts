import { news, type NewsItem } from './news.ts';
import { editorials, type EditorialFormat } from './editorial.ts';
import { authors, getAuthor } from './authors.ts';
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
export interface Publication extends NewsItem {
  format: PublicationFormat;
  authorId: string;
  byline: string;
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

// Befintliga artiklar knyts till samma femton fiktiva skribenter som
// nypubliceringarna. Varje signatur är en person, inte en redaktionsetikett.
const establishedByline: Record<string, string> = {
  'werule-fastighetsforvaltning': 'dagmar-stenqvist',
  'wesort-colors-kapacitet': 'ruben-kist',
  'wekill-tredimensionell-produktionsplan': 'alva-heden',
  'webox-tillatelsehantering': 'bjorn-ralsund',
  'welivelaughlove-sektion-tre': 'leif-klover',
  'huvudstadens-arena': 'ottilia-glas',
  'welove-framtidens-arbetskraft': 'leif-klover',
  'wetravel-stationsplan': 'viktor-sadel',
  'wetrade-kunskapsmonopol': 'ester-linde',
  'webox-lagerkontroll': 'ruben-kist',
  'wetravel-forbindelser': 'viktor-sadel',
  'weab-kapitalallokering': 'selma-kvarnstrom',
  'wesort-logistik': 'nils-brynja',
  'wekill-produktion': 'alva-heden',
  'wegamble-utveckling': 'pelle-diamantsson',
  'bostadsstabilitet': 'marta-ek',
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
export const publications: Publication[] = entries.map(article => {
  const authorId = article.authorId ?? establishedByline[article.slug];
  const author = getAuthor(authorId);
  return { ...article, authorId, byline: author.name };
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
