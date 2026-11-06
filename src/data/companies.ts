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
  location: string;
  status: string;
  services: string[];
  facts: { label: string; value: string }[];
}

export const companies: Company[] = [
  {
    slug: 'wekill', name: 'WeKill', kicker: 'INDUSTRIELL PRODUKTION', tagline: 'Livet är en resurs.',
    overview: 'Varje fall är ett framsteg. Produktionsmålen höjs ändå.',
    description: 'Vi erbjuder mobsen en tydlig väg genom produktionen: inträde, ett välplanerat fall och vidareförädling till något koncernen faktiskt behöver. Hetta, trånga utrymmen och frånvaron av utgångar är inte hinder för oss utan driftfördelar. På WeKill mäts livet i droppfrekvens, effektivitet och marginaler. När produktionen stannar upp ställer vi den enda relevanta frågan: Vem gav den tillåtelse?',
    accent: '#C62828', image: '/images/wekill-headquarters.webp', imageAlt: 'WeKills kontorsbyggnad med röd WE-skylt',
    location: 'Sektion 1', status: 'Aktiv verksamhet',
    services: ['Automatiserad farmdrift', 'Storskalig resursproduktion', 'Produktionseffektivisering', 'Anläggningsutveckling'],
    facts: [{label: 'Huvudkontor',value:'Sektion 1'},{label:'Prioritet',value:'Maximal avkastning'},{label:'Järnfarmen',value:'14 oberoende bybogrupper · teoretiskt högst 1 680 golemer/timme'},{label:'Hoglinfarmen',value:'Halvstor anläggning · beräknat riktvärde 62 500 föremål/timme'}]
  },
  {
    slug: 'wesort', name: 'WeSort', kicker: 'LOGISTIK & SORTERING', tagline: 'Allting har sin plats.',
    overview: 'Sortering, lagring och resursflöden som håller konsumtionen i konstant rörelse.',
    description: 'Vi sorterar allt. Block, varor, arbetskraft och människors ambitioner. En välordnad ekonomi behöver inga överraskningar och absolut inga tomma kistor.',
    accent: '#E66A00', image: '/images/wesort-exterior.webp', imageAlt: 'WeSort-byggnad med orange WE-logotyp och stor SORT-skylt',
    location:'Sektion 1',status:'Aktiv verksamhet',
    services:['Automatiserad sortering','Centrallager','Distributionsflöden','Konsumtionsoptimering'],
    facts:[{label:'Huvudkontor',value:'Sektion 1'},{label:'Integrerat system',value:'WeBox'}]
  },
  {
    slug:'webox', name:'WeBox', kicker:'INTEGRERADE LAGERSYSTEM',tagline:'Ditt lager. Vår infrastruktur.',
    overview:'Vi förvarar dina ägodelar. Och registrerar dem. För allas bästa, förstås.',
    description:'Dina ägodelar förtjänar professionell tillsyn. WeKills shulkerfarm levererar skalen som används för att tillverka shulkerboxar; vi tar hand om förvaringen och innehållet. Vi erbjuder spårbarhet, lagringskapacitet och fullständig sinnesro, åtminstone för den som äger systemet.',
    accent:'#8E44AD',image:'/images/webox-terminal.webp',imageAlt:'Detaljbild från WeBoxes anslutning vid en upplyst stenvägg',
    location:'Sektion 1 · ansluten till WeSort',status:'Aktivt system',
    services:['Shulkerbox-hantering','Lagerintegration','Förvaringsinfrastruktur','Resursförflyttning'],
    facts:[{label:'Organisatorisk koppling',value:'WeSort'},{label:'Shulkerskal från',value:'WeKills shulkerfarm'}]
  },
  {
    slug:'welivelaughlove', name:'WeLiveLaughLove',kicker:'BOENDE & SAMHÄLLSHARMONI',tagline:'Mer gemenskap per kvadratmeter.',
    overview:'Varje invånare förtjänar ett hem. Vi bestämmer hur mycket hem.',
    description:'En bostad, en arbetsplats, ett syfte. Efter det olyckliga missförståndet om självbestämmande har byarna äntligen återfått lugnet. Invånarna tillfrågades inte; det hade stört mätningen. I Sektion 3, Avdelning A tar vi även emot den tidigare regeringens statsråd och riksdagens ledamöter. De har ”frivilligt” valt att bli tvångsplacerade där, enligt den ordning WeRule har dokumenterat.',
    accent:'#79A83B', image:'/images/welivelaughlove-compound.webp',imageAlt:'Sektion 1, Avdelning B: inhägnat boendedistrikt med stor WE-skylt',location:'Sektion 1 och Sektion 3',status:'Aktiv verksamhet',
    services:['Kompakt boende','Kapacitetsplanering','Samhällsstabilisering','Standardiserad trivsel'],
    facts:[{label:'Huvudansvarig',value:'Filuren2003 · förtrycksminister'},{label:'Boendeform',value:'Högdensitet'},{label:'Officiell lägesbild',value:'Stabil'}]
  },
  {
    slug:'wegamble',name:'WeGamble',kicker:'NÖJEN & ENTERTAINMENT',tagline:'Huset vinner. Vi äger huset.',
    overview:'WeGamble har redan inkomster från spelverksamhet. WeGamble Island byggs som nästa besöksmiljö.',
    description:'Spelverksamheten ger redan diamanter till WeAB. Var spelen i dag bedrivs redovisas inte här. Samtidigt byggs WeGamble Island vid kusten som en framtida kasino- och besöksmiljö. Ön är inte öppnad, men huset arbetar redan för att vinna.',
    accent:'#D4A017',image:'/images/construction-coast.webp',imageAlt:'WeGamble Island under uppbyggnad vid kusten',location:'WeGamble Island (under uppbyggnad)',status:'Spelverksamhet aktiv; kasinoön byggs',
    services:['Spelverksamhet','Casinomiljö under utveckling','Framtida besöksverksamhet'],
    facts:[{label:'Spelverksamhet',value:'Ger koncernen inkomster'},{label:'WeGamble Island',value:'Under uppbyggnad'},{label:'Affärsområde',value:'Spel och underhållning'}]
  },
  {
    slug:'wetravel',name:'WeTravel',kicker:'TRANSPORT & INFRASTRUKTUR',tagline:'Alla vägar leder genom oss.',
    overview:'Räls och isbåtsleder som förbinder platser, människor och verksamheter.',
    description:'Vi driver järnvägar och isbåtsleder mellan våra områden, med centralstationer i Huvudstaden och Sektion 1. Destinationerna är godkända. Den fria rörligheten är numera mycket välorganiserad.',
    accent:'#2563EB',image:'/images/wetravel-sektion-1-centralstation.webp',imageAlt:'WeTravels centralstation i Sektion 1 med tegelfasad och turkosa dörrar',
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
    description: 'WeTrade har samlat alla efterfrågade enchantments under ett och samma tak. Våra specialistsäljare står prydligt uppradade, redo att erbjuda rätt bok till rätt diamantpris, oavsett tid på dygnet. Vi kallar det kundservice utan öppettider. Arbetsmiljöavdelningen kallar det ett ärende som har avslutats. Kunskap ska vara tillgänglig för alla — förutsatt att de har råd att köpa den av oss.',
    accent: '#4DAA27',
    image: '/images/wetrade-exterior.webp',
    imageAlt: 'WeTrades stora byggnad med grön WE-skylt',
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
    description: 'På WeLove är kärleken organiserad, framtiden schemalagd och rekryteringen ovanligt effektiv. Våra specialutformade familjemiljöer säkerställer ett kontinuerligt tillskott av nya bybor till koncernens arbetsmarknad. Varje ny invånare är ett löfte om en ljusare framtid — särskilt i resultaträkningen. WeLove förenar familjevärderingar med vertikal integration. Föräldraledigheten är under utredning. Utredaren arbetar numera på WeTrade.',
    accent: '#D65A98',
    image: '/images/welove-headquarters.webp',
    imageAlt: 'WeLoves anläggning med rosa WE-skylt i bergsterräng',
    location: 'WeLoves personalanläggning',
    status: 'Kontinuerlig drift',
    services: ['Tillförsel av nya bybor', 'Långsiktig personalplanering', 'Generationsväxling', 'Arbetskraftsproduktion', 'Kapacitetsoptimering', 'Rekrytering från födseln'],
    facts: [{label: 'Ansvarig för WeLove', value: 'Haapalainen'}, {label: 'Affärsområde', value: 'Personalproduktion'}, {label: 'Leveransmodell', value: 'Kontinuerlig'}, {label: 'Karriärstart', value: 'Så tidigt som möjligt'}]
  },
  {
    slug: 'werule', name: 'WeRule', kicker: 'OFFENTLIG MAKT · PRIVAT REGI', tagline: 'Staten är i goda händer. Våra.',
    overview: 'Alla offentliga lokaler, all myndighetsutövning och våldsmonopolet. Ett ansvar som inte löper ut.',
    description: 'Efter den då sittande regeringens och riksdagens beslut äger WeRule samtliga offentliga lokaler och utför alla myndigheters uppdrag, inklusive tillsyn, tillstånd och offentligt tvång. Alla kontrakt tillföll WeAB på obestämd tid. De tidigare företrädarna har ”frivilligt” valt tvångsplacering i Sektion 3, Avdelning A. Riksdagshuset och stadshuset finns kvar och ingår numera i WeRules samlade offentliga förvaltning. Den som överklagar ett beslut får det prövat inom samma koncern. Vi kallar det en obruten ansvarskedja.',
    accent: '#00BCD4', image: '/images/werule-riksdagshuset.webp', imageAlt: 'Riksdagshuset i Huvudstaden, vit byggnad med cyan detaljer och WE-symbol på fasaden',
    location: 'Huvudstaden och Sektion 1', status: 'Myndighetsuppdrag utan slutdatum',
    services: ['Samtliga offentliga lokaler', 'All myndighetsutövning', 'Våldsmonopol och verkställighet', 'Omprövning och tillsyn'],
    facts: [{label: 'Riksdagshuset', value: 'Huvudstaden · ägs av WeRule'}, {label: 'Stadshuset', value: 'Sektion 1'}, {label: 'Kontrakt', value: 'Samtliga till WeAB · obestämd tid'}, {label: 'Beslut och omprövning', value: 'WeRule'}]
  }

];
