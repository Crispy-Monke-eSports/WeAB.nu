export interface ArenaPhoto {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const arenaPhotos: ArenaPhoto[] = [
  {
    src: '/images/huvudstadens-arena-exterior.webp',
    alt: 'Översiktsbild av Huvudstadens stora arena i skymningen, med blåvita tak, cyanbelysta kanter och kringliggande landskap i Minecraft.',
    title: 'Arenan från ovan',
    caption: 'Den blåvita arenabyggnaden reser sig över huvudstadens omgivande landskap.'
  },
  {
    src: '/images/huvudstadens-arena-laktare.webp',
    alt: 'Vy mot Huvudstadens arenas läktare och belysta ingång under det stora taket.',
    title: 'Läktarna',
    caption: 'Rader av sittplatser och belysta passager under det stora taket.'
  },
  {
    src: '/images/huvudstadens-arena-interior.webp',
    alt: 'Interiör med stenpelare, ljusinstallationer och trappstegsformade läktare i Huvudstadens arena.',
    title: 'Arenans interiör',
    caption: 'Stenarkitektur och ljussättning inne i arenakomplexet.'
  }
];
