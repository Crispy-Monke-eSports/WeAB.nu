import type { MagazineDraft } from '../magazineTypes.ts';

export type StorySeed = {
  slug: string;
  format: MagazineDraft['format'];
  title: string;
  summary: string;
  image: string;
  alt?: string;
  scene: string;
  context: string;
  tension: string;
  ending: string;
};

/**
 * Varje text har sin egen scen och slutsats. Lägg inte på standardfraser per
 * skribent: de gjorde att skilda röster ändå fick samma fyrtaktsrytm.
 */
export function makeMagazineArticles(authorId: string, startOffset: number, seeds: StorySeed[]): MagazineDraft[] {
  return seeds.map((seed, i) => {
    const publishedAt = new Date(Date.UTC(2051, 10, 2) - (startOffset + i) * 86_400_000)
      .toISOString().slice(0, 10);
    const passages = [seed.scene, seed.context, seed.tension, seed.ending];
    // Kortare läsarbrev och guider får ett annat tempo än reportage och analyser.
    const body = seed.format === 'insandare' || seed.format === 'guide'
      ? [passages[0], `${passages[1]} ${passages[2]}`, passages[3]]
      : seed.format === 'reportage' || seed.format === 'intervju'
        ? passages
        : i % 2 === 0
          ? [passages[0], passages[1], `${passages[2]} ${passages[3]}`]
          : [passages[0], `${passages[1]} ${passages[2]}`, passages[3]];
    return {
      slug: seed.slug,
      publishedAt,
      format: seed.format,
      type: seed.format.toUpperCase(),
      title: seed.title,
      summary: seed.summary,
      image: seed.image,
      alt: seed.alt ?? 'Miljö som illustrerar ' + seed.title.toLowerCase(),
      authorId,
      body
    };
  });
}
