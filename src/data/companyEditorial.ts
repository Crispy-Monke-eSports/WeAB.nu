interface AssetGroup {
  title: string;
  description: string;
  ids: string[];
}

interface CompanyEditorial {
  heading: string;
  introduction: string;
  groups: AssetGroup[];
  connections?: {
    heading: string;
    introduction: string;
    steps: { name: string; description: string; href: string }[];
  };
}

export const companyEditorial: Record<string, CompanyEditorial> = {
  wekill: {
    heading: 'Produktionen har vuxit ur kontoret.',
    introduction: 'Ledningen sitter i Sektion 1. Produktionen har sedan länge vuxit ur en enda dimension.',
    groups: [
      { title: 'Ledning och farmkomplex', description: 'Besluten fattas i Sektion 1. Resten sköter produktionen.', ids: ['wekill-hq', 'wekill-farms'] },
      { title: 'Overworld', description: 'Mobs, järn, sockerrör och shulkerboxar. Allt har en produktionsplan.', ids: ['wekill-mobgrinder', 'wekill-iron-farm', 'wekill-witch-farm', 'wekill-sugarcane-farm', 'wekill-shulker-farm'] },
      { title: 'Under jord', description: 'Även slime har ett avkastningskrav.', ids: ['wekill-slime-farm'] },
      { title: 'Nether', description: 'Guld pågår även när omgivningen brinner.', ids: ['wekill-gold-farm'] },
      { title: 'End', description: 'Enderman och withers lämnas inte utanför budgeten.', ids: ['wekill-enderman-farm', 'wekill-wither-farm'] }
    ]
  },
  wesort: {
    heading: 'Allting på sin plats.',
    introduction: 'I Sektion 1 väntar en sorteringshall där ingenting försvinner. Åtminstone inte ur våra register.',
    groups: [{ title: 'Sorteringsanläggningen', description: 'Kistorna står redo för nästa leverans från WeKill.', ids: ['wesort-facility'] }],
    connections: {
      heading: 'Från farm till förvaring.',
      introduction: 'Resurserna passerar flera bolag, men stannar inom samma koncern.',
      steps: [
        { name: 'WeKill', description: 'Producerar resurserna.', href: '/verksamheter/wekill/#anlaggningar' },
        { name: 'WeSort', description: 'Sorterar och lagrar dem.', href: '#anlaggning-wesort-facility' },
        { name: 'WeBox', description: 'Hanterar shulkerboxarna i det anslutna systemet.', href: '/verksamheter/webox/#anlaggningar' }
      ]
    }
  },
  webox: {
    heading: 'Varje box får en etikett.',
    introduction: 'WeKill tillverkar shulkerboxarna. Vi registrerar innehållet och förvarar det i Sektion 1, anslutna till WeSort.',
    groups: [{ title: 'WeBox-anslutningen', description: 'Varje box får en plats. Äganderätten prövas vid behov.', ids: ['webox'] }],
    connections: {
      heading: 'Vem gör vad med boxen?',
      introduction: 'Tre verksamheter med varsin roll i samma förvaringskedja.',
      steps: [
        { name: 'WeKill', description: 'Producerar shulkerboxar i Shulkerfarmen.', href: '/verksamheter/wekill/#anlaggning-wekill-shulker-farm' },
        { name: 'WeBox', description: 'Hanterar shulkerboxar och innehåll.', href: '#anlaggning-webox' },
        { name: 'WeSort', description: 'Är det anslutna sorteringssystemet.', href: '/verksamheter/wesort/#anlaggning-wesort-facility' }
      ]
    }
  },
  welivelaughlove: {
    heading: 'Ett hem. Ett syfte.',
    introduction: 'Avdelning B ligger i Sektion 1 och Avdelning A i Sektion 3. Boendeformen är densamma: gemenskap på koncernens villkor.',
    groups: [
      { title: 'Sektion 1 · Avdelning B', description: 'Järnvägen går förbi det inhägnade distriktet. De boende stannar.', ids: ['welivelaughlove-compound'] },
      { title: 'Sektion 3 · Avdelning A', description: 'Bybor och järngolem delar kvarter. Vi kallar det grannsamverkan.', ids: ['welivelaughlove-village'] }
    ]
  },
  wegamble: {
    heading: 'WeGamble Island tar form.',
    introduction: 'Casinoön byggs vid kusten. Spelbordet får vänta; kalkylerna är redan klara.',
    groups: [{ title: 'WeGamble Island', description: 'Bygget pågår. Huset planerar att vinna från dag ett.', ids: ['wegamble-island'] }]
  },
  wetravel: {
    heading: 'Avgångar enligt plan.',
    introduction: 'Från Huvudstaden till Sektion 1 håller WeTravel rälsen och isbåtslederna i gång. Valet av destination är naturligtvis fritt inom nätet.',
    groups: [
      { title: 'Huvudstadens centralstation', description: 'Rälsen möter en lila portal under det upplysta taket.', ids: ['wetravel-huvudstaden-centralstation'] },
      { title: 'Centralstationen i Sektion 1', description: 'Tegelfasad, turkosa dörrar och koncernens avgångar.', ids: ['wetravel-sektion-1-centralstation'] },
      { title: 'Längs nätet', description: 'Spår och hållplatser mellan verksamheterna.', ids: ['wetravel-station'] }
    ]
  },
  wetrade: {
    heading: 'Kunskap till fast pris.',
    introduction: 'Alla enchantments säljs under ett tak. Handlarna står redo dygnet runt, oavsett vad deras scheman säger.',
    groups: [{ title: 'Handelsanläggningen', description: 'Grön skylt, långa handelsdiskar och ingen konkurrent i sikte.', ids: ['wetrade-exterior'] }]
  },
  welove: {
    heading: 'Personalförsörjning från början.',
    introduction: 'Här planeras nästa generation villagers för koncernens arbetsmarknad. Familjens framtid är redan budgeterad.',
    groups: [{ title: 'Personalanläggningen', description: 'Rosa WE-skylt utanför. Personalplanering innanför.', ids: ['welove-headquarters'] }]
  },
  werule: {
    heading: 'Makten har en adress.',
    introduction: 'Riksdagen sammanträder i Huvudstaden. Byggnaden är statlig, men ägs av WeAB. Stadshuset finns i Sektion 1.',
    groups: [
      { title: 'Huvudstaden · Riksdagshuset', description: 'Här beslutas om allmänintresset. Fastigheten står i koncernens namn.', ids: ['werule-riksdagshuset'] },
      { title: 'Sektion 1 · Stadshuset', description: 'WeRule tar gärna åt sig äran för ordningen.', ids: ['werule-stadshus'] }
    ]
  }
};
