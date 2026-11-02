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
    description:'Dina ägodelar förtjänar professionell tillsyn. WeKill producerar shulkerboxarna, vi tar hand om innehållet. Vi erbjuder spårbarhet, lagringskapacitet och fullständig sinnesro, åtminstone för den som äger systemet.',
    accent:'#8E44AD',image:'/images/webox-terminal.webp',imageAlt:'Detaljbild från WeBoxes anslutning vid en upplyst stenvägg',
    location:'Sektion 1 · ansluten till WeSort',status:'Aktivt system',
    services:['Shulkerbox-hantering','Lagerintegration','Förvaringsinfrastruktur','Resursförflyttning'],
    facts:[{label:'Organisatorisk koppling',value:'WeSort'},{label:'Shulkerboxar från',value:'WeKills shulkerfarm'}]
  },
  {
    slug:'welivelaughlove', name:'WeLiveLaughLove',kicker:'BOENDE & SAMHÄLLSHARMONI',tagline:'Mer gemenskap per kvadratmeter.',
    overview:'Varje invånare förtjänar ett hem. Vi bestämmer hur mycket hem.',
    description:'En bostad, en arbetsplats, ett syfte. Efter det olyckliga missförståndet om självbestämmande har byarna äntligen återfått lugnet. Invånarna tillfrågades inte; det hade stört mätningen.',
    accent:'#79A83B', image:'/images/welivelaughlove-compound.webp',imageAlt:'Sektion 1, Avdelning B: inhägnat boendedistrikt med stor WE-skylt',secondaryImage:'/images/welivelaughlove-village.webp',secondaryAlt:'Sektion 3, Avdelning A: bybor och järngolem i bostadsdistriktet',location:'Sektion 1 och Sektion 3',status:'Aktiv verksamhet',
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
    description:'Vi erbjuder järnvägar och isbåtsleder mellan serverns platser. Centralstationerna i Huvudstaden och Sektion 1 visar två sidor av nätet. Destinationerna är godkända. Den fria rörligheten är numera mycket välorganiserad.',
    accent:'#2563EB',image:'/images/wetravel-sektion-1-centralstation.webp',imageAlt:'WeTravels centralstation i Sektion 1 med tegelfasad och turkosa dörrar',
    secondaryImage:'/images/wetravel-huvudstaden-centralstation.webp',secondaryAlt:'Interiör i Huvudstadens centralstation med räls och lila portal',
    location:'Huvudstaden och Sektion 1',status:'Aktiv infrastruktur',
    services:['Järnvägsförbindelser','Isbåtstransport','Stationsinfrastruktur','Nätverksutveckling'],
    facts:[{label:'Transportmedel',value:'Räls och isbåt'},{label:'Räckvidd',value:'Serverns nätverk'}]
  },
  {
    slug: 'wetrade',
    name: 'WeTrade',
    kicker: 'HANDEL & KUNSKAPSKONTROLL',
    tagline: 'Kunskap är makt. Vi säljer båda.',
    overview: 'Alla enchantments. En enda handelsaktör. Våra handlare väntar på dig dygnet runt. De har inget annat val.',
    description: 'WeTrade har samlat Minecrafts samtliga enchantments under ett och samma tak. Våra specialistsäljare står prydligt uppradade, redo att erbjuda rätt bok till rätt diamantpris, oavsett tid på dygnet. Vi kallar det kundservice utan öppettider. Arbetsmiljöavdelningen kallar det ett ärende som har avslutats. Kunskap ska vara tillgänglig för alla — förutsatt att de har råd att köpa den av oss.',
    accent: '#4DAA27',
    image: '/images/wetrade-exterior.webp',
    imageAlt: 'WeTrades stora byggnad med grön WE-skylt',
    secondaryImage: '/images/wetrade-hall.webp',
    secondaryAlt: 'Handelsdiskar inne i WeTrades handelsanläggning',
    location: 'WeTrades handelsanläggning',
    status: 'Öppet dygnet runt',
    services: ['Handel med samtliga enchantments', 'Enchanted books', 'Diamantbaserad prissättning', 'Dygnet-runt-bemanning', 'Centraliserad handelsinfrastruktur', 'Konkurrensbegränsande kundlojalitet'],
    facts: [{label: 'Sortiment', value: 'Samtliga enchantments'}, {label: 'Öppettider', value: '24/7'}, {label: 'Bemanning', value: 'Permanent'}]
  },
  {
    slug: 'welove',
    name: 'WeLove',
    kicker: 'FRAMTIDENS PERSONALFÖRSÖRJNING',
    tagline: 'Vi älskar tillväxt. Bokstavligen.',
    overview: 'Framtidens arbetskraft börjar här. Vi planerar varje ny generation med samma omsorg som en kvartalsbudget.',
    description: 'På WeLove är kärleken organiserad, framtiden schemalagd och rekryteringen ovanligt effektiv. Våra specialutformade familjemiljöer säkerställer ett kontinuerligt tillskott av nya villagers till koncernens arbetsmarknad. Varje ny invånare är ett löfte om en ljusare framtid — särskilt i resultaträkningen. WeLove förenar familjevärderingar med vertikal integration. Föräldraledigheten är under utredning. Utredaren arbetar numera på WeTrade.',
    accent: '#D65A98',
    image: '/images/welove-headquarters.webp',
    imageAlt: 'WeLoves anläggning med rosa WE-skylt i bergsterräng',
    secondaryImage: '/images/welove-breeder.webp',
    secondaryAlt: 'Produktionsmiljö inne i WeLoves personalanläggning',
    location: 'WeLoves personalanläggning',
    status: 'Kontinuerlig drift',
    services: ['Villager breeding', 'Långsiktig personalplanering', 'Generationsväxling', 'Arbetskraftsproduktion', 'Kapacitetsoptimering', 'Rekrytering från födseln'],
    facts: [{label: 'Driftansvarig', value: 'Haapalainen'}, {label: 'Affärsområde', value: 'Personalproduktion'}, {label: 'Leveransmodell', value: 'Kontinuerlig'}, {label: 'Karriärstart', value: 'Så tidigt som möjligt'}]
  },
  {
    slug: 'werule', name: 'WeRule', kicker: 'OFFENTLIG FASTIGHET · PRIVAT ÄGANDE', tagline: 'Statens hus. Vår fastighet.',
    overview: 'Riksdagshuset i Huvudstaden och Stadshuset i Sektion 1. Offentliga byggnader i WeAB:s värld.',
    description: 'WeRule är WeAB:s dotterbolag för de offentliga byggnaderna. I Huvudstaden ligger Riksdagshuset, en statlig byggnad där serverns riksdag sammanträder – och som ägs av WeAB. I Sektion 1 finns WeRules stadshus. Två byggnader, två platser. En påminnelse om hur nära den offentliga makten kan ligga ett privat bolag.',
    accent: '#00BCD4', image: '/images/werule-riksdagshuset.webp', imageAlt: 'Riksdagshuset i Huvudstaden, vit byggnad med cyan detaljer och WE-symbol på fasaden',
    location: 'Huvudstaden och Sektion 1', status: 'Två offentliga byggnader',
    services: ['Riksdagshuset i Huvudstaden', 'Serverns riksdag', 'Stadshuset i Sektion 1', 'Offentliga byggnader'],
    facts: [{label: 'Riksdagshuset', value: 'Huvudstaden · ägs av WeAB'}, {label: 'Stadshuset', value: 'Sektion 1'}, {label: 'Riksdagens plats', value: 'Riksdagshuset'}]
  }

];
