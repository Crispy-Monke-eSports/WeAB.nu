export interface ArenaPhoto {
  src: string;
  alt: string;
}

export const arenaPhotos: ArenaPhoto[] = [
  {
    src: '/images/huvudstadens-arena-exterior.webp',
    alt: 'Översiktsbild av Huvudstadens stora arena i skymningen, med blåvita tak, cyanbelysta kanter och kringliggande landskap.'
  },
  {
    src: '/images/huvudstadens-arena-laktare.webp',
    alt: 'Vy mot Huvudstadens arenas läktare och belysta ingång under det stora taket.'
  },
  {
    src: '/images/huvudstadens-arena-interior.webp',
    alt: 'Interiör med stenpelare, ljusinstallationer och trappstegsformade läktare i Huvudstadens arena.'
  }
];

/** Fastslagna sakuppgifter. Inga ogrundade datum, resultat eller intäktsbelopp. */
export const hungerGames = {
  name: 'Hungerspelen',
  venue: 'Huvudstadens arena',
  contestantsPerVillage: 2,
  fightToTheDeath: true,
  earnsIncomeForWeAB: true
} as const;
