import { arenaPhotos } from './arena.ts';

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
  {id:'welivelaughlove-village',name:'Stabiliserat bostadsområde',division:'WeLiveLaughLove',category:'Samhällsservice',description:'Invånarna har återfunnit lugnet. Alternativa tolkningar av ordet lugn undanbedes.',image:'/images/welivelaughlove-village.webp',alt:'Minecraft-by med villagers och järngolem',stage:'Aktiv'},
  {id:'wetrade-exterior',name:'WeTrade handelscentrum',division:'WeTrade',category:'Handel',description:'En monumental grön skylt och en enda godkänd leverantör. Det är enklare så.',image:'/images/wetrade-exterior.webp',alt:'WeTrade-byggnaden med grön WE-skylt',stage:'Aktiv'},
  {id:'wetrade-hall',name:'Handelsavdelningen',division:'WeTrade',category:'Enchantment-handel',description:'Våra bibliotekarier är alltid redo att hjälpa. Skiftbyten skulle bara skapa onödiga avbrott.',image:'/images/wetrade-hall.webp',alt:'Villagers i rader vid WeTrades handelsdiskar',stage:'Aktiv'},
  {id:'wetrade-interior',name:'WeTrade interiör',division:'WeTrade',category:'Handelsinfrastruktur',description:'En arbetsmiljö byggd för tillgänglighet, ordning och total frånvaro av fackliga möten.',image:'/images/wetrade-interior.webp',alt:'Översikt över WeTrades handelskomplex',stage:'Aktiv'},
  {id:'welove-headquarters',name:'WeLove personalcentrum',division:'WeLove',category:'Personalproduktion',description:'Familjens framtid är trygg i våra händer. Framför allt koncernens framtida personalbudget.',image:'/images/welove-headquarters.webp',alt:'WeLove-anläggning med rosa WE-skylt vid snöklädda berg',stage:'Aktiv'},
  {id:'welove-breeder',name:'WeLove produktionslinje',division:'WeLove',category:'Generationsplanering',description:'En modern familjemiljö där nästa generations medarbetare välkomnas till arbetsmarknaden före de lärt sig uttala ordet semester.',image:'/images/welove-breeder.webp',alt:'WeLoves villager breeder, interiör',stage:'Aktiv'},
  {id:'welove-villager',name:'Framtida koncernmedarbetare',division:'WeLove',category:'Personalutveckling',description:'En ljus framtid väntar. Vi har redan valt vilken avdelning.',image:'/images/welove-villager.webp',alt:'Villager i WeLoves avelsanläggning',stage:'Aktiv'},
];

export const featuredProjectIds = ['wegamble-island', 'wekill-hq', 'welivelaughlove-compound'] as const;
