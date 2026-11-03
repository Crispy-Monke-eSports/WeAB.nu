import { expandedPressPartA } from './press-part-a.ts';
import { expandedPressPartB } from './press-part-b.ts';
import { expandedEditorialPartA } from './editorial-part-a.ts';
import { expandedEditorialPartB } from './editorial-part-b.ts';

/**
 * Etapp 2: brödtexten för artiklar 11–20.
 * Originaldata behåller metadata, officiella avsändare och signaturer.
 * Nya redaktionella omgångar läggs till här utan att äldre texter skrivs över.
 */
export const expandedArticleBodies = new Map<string, string[]>();
for (const article of [
  ...expandedPressPartA,
  ...expandedPressPartB,
  ...expandedEditorialPartA,
  ...expandedEditorialPartB
]) {
  if (expandedArticleBodies.has(article.slug)) {
    throw new Error('Dubbel fullängdstext: ' + article.slug);
  }
  expandedArticleBodies.set(article.slug, article.body);
}
