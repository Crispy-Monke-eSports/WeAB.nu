import { arenaPhotos } from './arena';

export interface Project {
  id: string;
  name: string;
  division: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  stage: string;
  detailUrl?: string;
}
export const projects: Project[] = [
  {
    id: 'huvudstadens-arena',
    name: 'Huvudstadens arena',
    division: 'WeAB',
    category: 'Tävling & samlingsplats',
    description: 'Här möts bybor från olika distrikt och tävlar om att vinna ära till sin egen by. Den blåvita arenan ligger i huvudstaden.',
    image: arenaPhotos[0].src,
    alt: arenaPhotos[0].alt,
    stage: 'Dokumenterad',
    detailUrl: '/arena/'
  },
  {id:'wesort-facility', name:'WeSort-anläggningen',division:'WeSort', category:'Logistik', description:'En byggnad vars fasad utstrålar ordning och vars lager rymmer alldeles för många ambitioner.',image:'/images/wesort-exterior.webp',alt:'WeSort exteriör',stage:'Dokumenterad'},
  {id:'wesort-hall',name:'Sorteringshallen',division:'WeSort',category:'Lager',description:'Långa förvaringsrader och effektivt planerade interna flöden.',image:'/images/wesort-interior.webp',alt:'WeSort interiör',stage:'Dokumenterad'},
  {id:'webox',name:'WeBox-anslutningen',division:'WeBox',category:'Lagersystem',description:'Varje shulkerbox har en plats. Varje plats har en ägare.',image:'/images/webox-terminal.webp',alt:'WeBox terminal',stage:'Dokumenterad'},
  {id:'wekill-hq',name:'WeKill i Sektion 1',division:'WeKill',category:'Kontor',description:'Produktionsbolagets byggnad med den karakteristiska röda WE-identiteten.',image:'/images/wekill-headquarters.webp',alt:'WeKill huvudkontor',stage:'Dokumenterad'},
  {id:'wekill-farms',name:'Farmkomplexet',division:'WeKill',category:'Produktion',description:'En större grupp anläggningar för organiserad resursproduktion.',image:'/images/wekill-farms.webp',alt:'WeKill farmkomplex',stage:'Dokumenterad'},
  {id:'wetravel-station',name:'Transportknutpunkt',division:'WeTravel',category:'Infrastruktur',description:'Spår, hållplatser och lokala skyltar längs koncernens transportnät.',image:'/images/wetravel-station.webp',alt:'WeTravel station',stage:'Dokumenterad'},
  {id:'wegamble-island',name:'WeGamble Island',division:'WeGamble',category:'Underhållning',description:'En kasinoö växer fram vid kusten. Målet är enkelt: gästerna tar med diamanter. Koncernen ser till att de inte behöver bära hem dem.',image:'/images/construction-coast.webp',alt:'WeGamble Island, koncernens kasinoö under byggnation',stage:'Under byggnation'},
  {id:'welivelaughlove-compound',name:'Samhällsharmoniskt boendedistrikt',division:'WeLiveLaughLove',category:'Boende',description:'En trygg och välavgränsad tillvaro. Rörelsefriheten är lika stor för alla: tillräcklig.',image:'/images/welivelaughlove-compound.webp',alt:'Inhägnat villager-område med WE-skylt',stage:'Aktiv'},
  {id:'welivelaughlove-village',name:'Stabiliserat bostadsområde',division:'WeLiveLaughLove',category:'Samhällsservice',description:'Invånarna har återfunnit lugnet. Alternativa tolkningar av ordet lugn undanbedes.',image:'/images/welivelaughlove-village.webp',alt:'Minecraft-by med villagers och järngolem',stage:'Aktiv'}
];

export const featuredProjectIds = ['wegamble-island', 'wekill-hq', 'welivelaughlove-compound'] as const;
