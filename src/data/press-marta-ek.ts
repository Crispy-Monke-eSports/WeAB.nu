import type { NewsItem } from './news.ts';

/** Officiellt meddelande från WeAB-koncernen, inte en artikel signerad Märta Ek. */
export const martaEkPressRelease: NewsItem = {
  publishedAt: '2026-11-03',
  slug: 'weab-marta-ek-olycka-jarnfarmen',
  type: 'KONCERNMEDDELANDE',
  title: 'WeAB bekräftar tragisk olycka vid järnfarmen',
  summary: 'WeAB bekräftar att skribenten Märta Ek omkommit efter ett fall i järnfarmens transportsystem för järngolemer. Koncernen betecknar händelsen som en olycka och avböjer vidare frågor.',
  image: '/images/wekill-iron-golem-bridge.webp',
  alt: 'Bro och transportsystem för järngolemer vid WeKills järnfarm',
  body: [
    'WeAB bekräftar med sorg att Märta Ek har omkommit efter att av misstag ha fallit ned i järnfarmens transportsystem för järngolemer.',
    'Enligt koncernens slutgiltiga bedömning rör det sig om en olyckshändelse. Hur Märta fick tillträde till anläggningens säkerhetsklassade transportutrymmen omfattas för närvarande av sekretess.',
    'Händelsen inträffade i nära anslutning till Märtas senaste publiceringar, där hon vid upprepade tillfällen felaktigt ifrågasatt belysningens kvalitet i koncernens byar.',
    'WeAB vill understryka att dessa publiceringar saknar samband med olyckan. Någon närmare utredning av ett sådant samband har därför inte bedömts nödvändig.',
    'Koncernen påminner samtidigt om att samtliga lampor är utmärkta och inga fel finns.',
    'Övervakningsmaterial, vittnesuppgifter och Märtas sista redaktionella anteckningar har omhändertagits med hänvisning till rikets säkerhet.',
    'Ärendet betraktas härmed som avslutat. Inga ytterligare frågor kommer att tas emot.',
    'WeAB Group – avdelningen för koncernkommunikation och intern säkerhet.'
  ]
};
