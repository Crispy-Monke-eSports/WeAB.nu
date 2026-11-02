import { news, type NewsItem } from './news.ts';
import { editorials, type EditorialFormat } from './editorial.ts';

export type PublicationFormat = 'pressmeddelande' | EditorialFormat;
export interface Publication extends NewsItem {
  format: PublicationFormat;
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
  guide: 'Guide'
};
export const publications: Publication[] = [
  ...news.map(article => ({
    ...article,
    format: 'pressmeddelande' as const,
    byline: 'WeAB Group, koncernkommunikation'
  })),
  ...editorials
].sort((a,b) => b.publishedAt.localeCompare(a.publishedAt));

export const editorialFormats: EditorialFormat[] = [
  'insandare', 'ledare', 'kronika', 'reportage', 'intervju', 'ekonomi', 'kultur', 'guide'
];
export const opinionFormats: PublicationFormat[] = ['insandare','ledare','kronika'];
