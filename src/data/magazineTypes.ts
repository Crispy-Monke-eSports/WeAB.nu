export interface MagazineDraft {
  slug: string;
  publishedAt: string;
  format: 'insandare' | 'ledare' | 'kronika' | 'reportage' | 'intervju' | 'ekonomi' | 'kultur' | 'guide' | 'analys' | 'lokalt' | 'debatt';
  type: string;
  title: string;
  summary: string;
  body: string[];
  image: string;
  alt: string;
  authorId: string;
}
