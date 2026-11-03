import { arenaPhotos } from './arena.ts';

export interface Project {
  id: string;
  name: string;
  division: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  stage?: string;
  detailUrl?: string;
  gallery?: { image: string; alt: string }[];
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
    detailUrl: '/arena/'
  },
  {id:'section-1-overview',name:'Sektion 1',division:'WeAB',category:'Infrastruktur',description:'Från järnfarmen till sorteringshallen ligger produktion, lager och räls inom bekvämt avstånd från ledningens kalkylark.',image:'/images/section-1-overview.webp',alt:'Överblick över Sektion 1 med järnfarm, produktionsbyggnader, mobgrinder och räls'},
  {id:'bedrock-hole',name:'Bedrockhålet',division:'WeAB',category:'Monument · Sektion 1',description:'Bredvid WeKills kontor har en hel chunk grävts ned till bedrock. Väggarna pryds av guld, järn och smaragder. WeAB hade pengar över och valde ett projekt som inte riskerade att hjälpa någon.',image:'/images/bedrock-hole-exterior.webp',alt:'Bedrockhålet i Sektion 1 sett ovanifrån, med lysande pelare och väggar av guld, järn och smaragder',gallery:[{image:'/images/bedrock-hole-interior.webp',alt:'Vy uppåt genom Bedrockhålet mot himlen, med upplysta rader av guld, järn och smaragder längs väggarna'}]},
  {id:'werule-riksdagshuset',name:'Riksdagshuset',division:'WeRule',category:'Offentlig byggnad · Huvudstaden',description:'Här sammanträder riksdagen. Byggnaden är statlig och ägs av WeAB. Vi kallar det en effektiv ansvarsfördelning.',image:'/images/werule-riksdagshuset.webp',alt:'Riksdagshuset i Huvudstaden med cyan fasad, WE-symbol och vit staty intill'},
  {id:'werule-stadshus',name:'Stadshuset i Sektion 1',division:'WeRule',category:'Offentlig byggnad · Sektion 1',description:'WeRules stadshus ligger i Sektion 1. Även offentligheten behöver en fasad.',image:'/images/werule-sektion-1-stadshus.webp',alt:'Stadshuset i Sektion 1, en mörk stenbyggnad med höga fönster och trappor vid entrén'},
  {id:'wesort-facility', name:'WeSort-anläggningen',division:'WeSort', category:'Logistik', description:'Bakom den välordnade fasaden finns en sorteringshall med alldeles för många ambitioner.',image:'/images/wesort-exterior.webp',alt:'WeSort-anläggningens fasad',gallery:[{image:'/images/wesort-interior.webp',alt:'Sorteringshallen inne i WeSort-anläggningen'}]},
  {id:'webox',name:'WeBox-anslutningen',division:'WeBox',category:'Lagersystem',description:'Varje shulkerbox har en plats. Varje plats har en ägare.',image:'/images/webox-terminal.webp',alt:'WeBox terminal'},
  {id:'wekill-hq',name:'WeKill i Sektion 1',division:'WeKill',category:'Kontor',description:'Kontoret i Sektion 1. Här räknas produktionen innan någon annan hinner göra det.',image:'/images/wekill-headquarters.webp',alt:'WeKill huvudkontor'},
  {id:'wekill-farms',name:'Farmkomplexet',division:'WeKill',category:'Produktion',description:'Farm efter farm. Varje resurs förväntas hitta hem till koncernen.',image:'/images/wekill-farms.webp',alt:'WeKill farmkomplex'},
  {id:'wekill-mobgrinder',name:'Mobgrindern',division:'WeKill',category:'Mobfarm',description:'Tio produktionsplan för bland annat krut, benmjöl och tråd. Angiven kapacitet: över 7 000 föremål i timmen. Personalen har ännu inte begärt hiss.',image:'/images/wekill-mobgrinder.webp',alt:'WeKills höga mobgrinder i mörk sten, med en creeper på ett av våningsplanen'},
  {id:'wekill-iron-farm',name:'Järnfarmen',division:'WeKill',category:'Järnproduktion',description:'Järn växer inte på träd. Vi byggde ett torn för att se om det kunde ändra på saken.',image:'/images/wekill-iron-farm.webp',alt:'WeKills höga järnfarm reser sig över träden'},
  {id:'wekill-gold-farm',name:'Guldfarmen',division:'WeKill',category:'Guldproduktion · Nether',description:'Flera glödande våningar i Nether. Angiven kapacitet: över 1 200 guldtackor i timmen. Erfarenhetsuttaget fungerar inte i nuläget.',image:'/images/wekill-gold-farm.webp',alt:'WeKills guldfarm i Nether med flera lysande produktionsplan av magmablock'},
  {id:'wekill-witch-farm',name:'Häxfarmen',division:'WeKill',category:'Produktion',description:'Bakom den röda fasaden anges en kapacitet på över 2 000 föremål i timmen. I fördelningen ingår bland annat 239 krut, 224 rödstensdamm, 210 glasflaskor, 229 spindelögon, 224 socker och 225 glödstensdamm per timme. WeKill samlar allt; även sådant ingen bett om.',image:'/images/wekill-witch-farm.webp',alt:'WeKills häxfarm med röd fasad, vit symbol och portal i bakgrunden'},
  {id:'wekill-enderman-farm',name:'Endermanfarmen',division:'WeKill',category:'Produktion · End',description:'Långt ute i End står plattformen där ingen konkurrent kan hävda att vi stör grannarna. Anläggningens angivna kapacitet är att föra en användare från erfarenhetsnivå 0 till minst 33 på omkring en minut; utfallet i WeAB:s drift är inte uppmätt.',image:'/images/wekill-enderman-farm.webp',alt:'WeKills endermanfarm med hög plattform och lång gångväg mot den lila himlen i End'},
  {id:'wekill-wither-farm',name:'Witherfarmen',division:'WeKill',category:'Produktion · End',description:'Maskinerna sköter det som ingen vill göra manuellt. Styrelsen tar åt sig äran ändå.',image:'/images/wekill-wither-farm.webp',alt:'WeKills witherfarm i End med redstonemekanik under ett mörkt tak'},
  {id:'wekill-slime-farm',name:'Slimefarmen',division:'WeKill',category:'Slimeproduktion',description:'Under jord håller WeKill slimeproduktionen i gång. Övriga arbetsvillkor utreds internt.',image:'/images/wekill-slime-farm.webp',alt:'Underjordisk stenkammare i WeKills slimefarm med facklor och en järngolem'},
  {id:'wekill-sugarcane-farm',name:'Sugarcanefarmen',division:'WeKill',category:'Sockerrörsproduktion',description:'Sockerrör på rad bakom glas. Angiven kapacitet: 1 300 sockerrör i timmen. WeKill inväntar ännu en egen mätning innan skörden förs in i resultatrapporten.',image:'/images/wekill-sugarcane-farm.webp',alt:'WeKills sockerrörsfarm bakom glasväggar i ett savannlandskap'},
  {id:'wekill-shulker-farm',name:'Shulkerfarmen',division:'WeKill',category:'Lagerförsörjning',description:'Här produceras skalen som används till shulkerboxar. WeBox tar hand om de färdiga behållarna; WeKill får återkomma med siffror när den egna driften är uppmätt.',image:'/images/wekill-shulker-farm.webp',alt:'WeKills shulkerfarm med tre lila upplysta produktionssektioner'},
  {id:'wetravel-station',name:'Transportknutpunkt',division:'WeTravel',category:'Infrastruktur',description:'Spår, hållplatser och lokala skyltar längs koncernens transportnät.',image:'/images/wetravel-station.webp',alt:'WeTravel station'},
  {id:'wetravel-huvudstaden-centralstation',name:'Huvudstadens centralstation',division:'WeTravel',category:'Station · Huvudstaden',description:'Inne på centralstationen i Huvudstaden möts räls, upplysta väggar och en lila portal.',image:'/images/wetravel-huvudstaden-centralstation.webp',alt:'WeTravels centralstation i Huvudstaden med räls, takbelysning och lila portal'},
  {id:'wetravel-sektion-1-centralstation',name:'Centralstationen i Sektion 1',division:'WeTravel',category:'Station · Sektion 1',description:'Bakom tegelfasaden med de turkosa dörrarna börjar nästa godkända resa.',image:'/images/wetravel-sektion-1-centralstation.webp',alt:'WeTravels centralstation i Sektion 1 med tegelfasad, lyktor och turkosa dörrar'},
  {id:'wegamble-island',name:'WeGamble Island',division:'WeGamble',category:'Underhållning',description:'En kasinoö växer fram vid kusten. Målet är enkelt: gästerna tar med diamanter. Koncernen ser till att de inte behöver bära hem dem.',image:'/images/construction-coast.webp',alt:'WeGamble Island, koncernens kasinoö under byggnation',stage:'Under byggnation'},
  {id:'welivelaughlove-compound',name:'Sektion 1 · Avdelning B',division:'WeLiveLaughLove',category:'Boende',description:'En trygg och välavgränsad tillvaro i Sektion 1. Rörelsefriheten är lika stor för alla: tillräcklig.',image:'/images/welivelaughlove-compound.webp',alt:'WeLiveLaughLoves boendedistrikt i Sektion 1, Avdelning B, med WE-skylt',gallery:[{image:'/images/welivelaughlove-section-1-b-overview.webp',alt:'Nattvy över Sektion 1, Avdelning B, med inhägnade hus och upplyst järnväg i förgrunden'}]},
  {id:'welivelaughlove-village',name:'Sektion 3 · Avdelning A',division:'WeLiveLaughLove',category:'Boende',description:'I Sektion 3 har invånarna återfunnit lugnet. Alternativa tolkningar av ordet lugn undanbedes.',image:'/images/welivelaughlove-village.webp',alt:'WeLiveLaughLoves boendedistrikt i Sektion 3, Avdelning A, med bybor och järngolem',gallery:[{image:'/images/welivelaughlove-section-3-a-overview.webp',alt:'Överblick nattetid över Sektion 3, Avdelning A, med murar, hus och orangevit byggnad i mitten'}]},
  {id:'wetrade-exterior',name:'WeTrades handelsanläggning',division:'WeTrade',category:'Handel',description:'Grön skylt utanför, handelsdiskar innanför. En enda godkänd leverantör. Det är enklare så.',image:'/images/wetrade-exterior.webp',alt:'WeTrades handelsanläggning med grön WE-skylt',gallery:[{image:'/images/wetrade-hall.webp',alt:'Handelsdiskarna inne i WeTrades anläggning'},{image:'/images/wetrade-interior.webp',alt:'WeTrades handelsanläggning med rader av handelsdiskar'}]},
  {id:'welove-headquarters',name:'WeLoves personalanläggning',division:'WeLove',category:'Personalproduktion',description:'Rosa WE-skylt på utsidan. Familjeplanering på insidan. Koncernen räknar redan med nästa generation.',image:'/images/welove-headquarters.webp',alt:'WeLoves anläggning med rosa WE-skylt vid snöklädda berg',gallery:[{image:'/images/welove-breeder.webp',alt:'Produktionsmiljön i WeLove-anläggningen'},{image:'/images/welove-villager.webp',alt:'Bybo inne i WeLove-anläggningen'}]},
];

export const featuredProjectIds = ['wegamble-island', 'wekill-hq', 'welivelaughlove-compound'] as const;
