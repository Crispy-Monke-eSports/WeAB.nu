import { expandedPressPartA } from './press-part-a.ts';
import { expandedPressPartB } from './press-part-b.ts';
import { expandedEditorialPartA } from './editorial-part-a.ts';
import { expandedEditorialPartB } from './editorial-part-b.ts';
import { rubenFullLengthPart1 } from './ruben-part-1.ts';
import { rubenFullLengthPart2 } from './ruben-part-2.ts';
import { rubenFullLengthPart3 } from './ruben-part-3.ts';
import { alvaFullLengthPart1 } from './alva-part-1.ts';
import { alvaFullLengthPart2 } from './alva-part-2.ts';
import { alvaFullLengthPart3 } from './alva-part-3.ts';

/**
 * Fullängdstexter från etapp 2 samt kompletta skribentserier för Ruben Kist och Alva Heden.
 * Originaldata behåller metadata, officiella avsändare och signaturer.
 * Nya redaktionella omgångar läggs till här utan att äldre texter skrivs över.
 */
export const expandedArticleBodies = new Map<string, string[]>();
for (const article of [
  ...expandedPressPartA,
  ...expandedPressPartB,
  ...expandedEditorialPartA,
  ...expandedEditorialPartB,
  ...rubenFullLengthPart1,
  ...rubenFullLengthPart2,
  ...rubenFullLengthPart3,
  ...alvaFullLengthPart1,
  ...alvaFullLengthPart2,
  ...alvaFullLengthPart3
]) {
  if (expandedArticleBodies.has(article.slug)) {
    throw new Error('Dubbel fullängdstext: ' + article.slug);
  }
  expandedArticleBodies.set(article.slug, article.body);
}
