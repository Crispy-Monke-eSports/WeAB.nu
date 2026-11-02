export interface Company {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  overview: string;
  description: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  location: string;
  status: string;
  services: string[];
  facts: { label: string; value: string }[];
}

export const companies: Company[] = [
  {
    slug: 'wekill', name: 'WeKill', kicker: 'INDUSTRIELL PRODUKTION', tagline: 'Livet är en resurs.',
    overview: 'Vår produktion slutar aldrig. Det är inte en metafor.',
    description: 'På WeKill mäts livet i droppfrekvens, effektivitet och marginaler. När produktionen stannar upp ställer vi den enda relevanta frågan: Vem gav den tillåtelse?',
    accent: '#C62828', image: '/images/wekill-headquarters.webp', imageAlt: 'WeKills kontorsbyggnad med röd WE-skylt',
    secondaryImage: '/images/wekill-farms.webp', secondaryAlt: 'Rader av växthusliknande produktionsanläggningar i Minecraft',
    location: 'Sektion 1', status: 'Aktiv verksamhet',
    services: ['Automatiserad farmdrift', 'Storskalig resursproduktion', 'Produktionseffektivisering', 'Anläggningsutveckling'],
    facts: [{label: 'Huvudkontor',value:'Sektion 1'},{label:'Prioritet',value:'Maximal avkastning'}]
  },
  {
    slug: 'wesort', name: 'WeSort', kicker: 'LOGISTIK & SORTERING', tagline: 'Allting har sin plats.',
    overview: 'Sortering, lagring och resursflöden som håller konsumtionen i konstant rörelse.',
    description: 'Vi sorterar allt. Block, varor, arbetskraft och människors ambitioner. En välordnad ekonomi behöver inga överraskningar och absolut inga tomma kistor.',
    accent: '#E66A00', image: '/images/wesort-exterior.webp', imageAlt: 'WeSort-byggnad med orange WE-logotyp och stor SORT-skylt',
    secondaryImage:'/images/wesort-interior.webp', secondaryAlt:'WeSort-hall med långa rader av förvaringskistor',
    location:'Sektion 1',status:'Aktiv verksamhet',
    services:['Automatiserad sortering','Centrallager','Distributionsflöden','Konsumtionsoptimering'],
    facts:[{label:'Huvudkontor',value:'Sektion 1'},{label:'Integrerat system',value:'WeBox'}]
  },
  {
    slug:'webox', name:'WeBox', kicker:'INTEGRERADE LAGERSYSTEM',tagline:'Ditt lager. Vår infrastruktur.',
    overview:'Vi förvarar dina ägodelar. Och registrerar dem. För allas bästa, förstås.',
    description:'Dina ägodelar förtjänar professionell tillsyn. Vi erbjuder spårbarhet, lagringskapacitet och fullständig sinnesro, åtminstone för den som äger systemet.',
    accent:'#8E44AD',image:'/images/webox-terminal.webp',imageAlt:'Detaljbild från WeBoxes anslutning vid en upplyst stenvägg',
    location:'Sektion 1 · ansluten till WeSort',status:'Aktivt system',
    services:['Shulkerbox-hantering','Lagerintegration','Förvaringsinfrastruktur','Resursförflyttning'],
    facts:[{label:'Organisatorisk koppling',value:'WeSort'},{label:'Systemtyp',value:'Shulkerbox'}]
  },
  {
    slug:'welivelaughlove', name:'WeLiveLaughLove',kicker:'BOENDE & SAMHÄLLSHARMONI',tagline:'Mer gemenskap per kvadratmeter.',
    overview:'Varje invånare förtjänar ett hem. Vi bestämmer hur mycket hem.',
    description:'En bostad, en arbetsplats, ett syfte. Efter det olyckliga missförståndet om självbestämmande har byarna äntligen återfått lugnet. Invånarna tillfrågades inte; det hade stört mätningen.',
    accent:'#79A83B', image:'/images/welivelaughlove-compound.webp',imageAlt:'Inhägnat villager-område med stor WE-skylt',secondaryImage:'/images/welivelaughlove-village.webp',secondaryAlt:'Villagers i bymiljö intill ett järngolem-monument',location:'Bostadsdistrikten',status:'Aktiv verksamhet',
    services:['Kompakt boende','Kapacitetsplanering','Samhällsstabilisering','Standardiserad trivsel'],
    facts:[{label:'Boendeform',value:'Högdensitet'},{label:'Officiell lägesbild',value:'Stabil'}]
  },
  {
    slug:'wegamble',name:'WeGamble',kicker:'NÖJEN & ENTERTAINMENT',tagline:'Huset vinner. Vi äger huset.',
    overview:'Diamanter kan ge glädje. De kan också bli våra. Vi erbjuder båda utfallen.',
    description:'På WeGamble Island bygger vi en plats där alla kan bli vinnare. Med alla menar vi förstås WeAB. Gästerna bidrar med diamanter; vi bidrar med matematik.',
    accent:'#D4A017',image:'/images/construction-coast.webp',imageAlt:'WeGamble Island under uppbyggnad vid kusten',location:'WeGamble Island',status:'Under uppbyggnad',
    services:['Casinomiljö under utveckling','Underhållningskoncept','Framtida besöksverksamhet'],
    facts:[{label:'Status',value:'Under uppbyggnad'},{label:'Affärsområde',value:'Underhållning'}]
  },
  {
    slug:'wetravel',name:'WeTravel',kicker:'TRANSPORT & INFRASTRUKTUR',tagline:'Alla vägar leder genom oss.',
    overview:'Räls och isbåtsleder som förbinder platser, människor och verksamheter.',
    description:'Vi erbjuder snabba järnvägar och isbåtsleder till vartenda område av betydelse. Avgångarna är punktliga. Destinationerna är godkända. Den fria rörligheten är numera mycket välorganiserad.',
    accent:'#2563EB',image:'/images/wetravel-station.webp',imageAlt:'Transportstation i Minecraft med spår, skyltar och upplysta hållplatser',
    location:'Flera destinationer',status:'Aktiv infrastruktur',
    services:['Järnvägsförbindelser','Isbåtstransport','Stationsinfrastruktur','Nätverksutveckling'],
    facts:[{label:'Transportmedel',value:'Räls och isbåt'},{label:'Räckvidd',value:'Serverns nätverk'}]
  }
];

export const companyBySlug = Object.fromEntries(companies.map(company => [company.slug,company])) as Record<string,Company>;
