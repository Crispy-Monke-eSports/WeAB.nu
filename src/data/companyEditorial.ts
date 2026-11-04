interface AssetGroup {
  title: string;
  ids: string[];
}

interface CompanyEditorial {
  heading: string;
  introduction: string;
  groups: AssetGroup[];
  connections?: {
    heading: string;
    steps: { name: string; href: string }[];
  };
}

export const companyEditorial: Record<string, CompanyEditorial> = {
  wekill: {
    heading: 'Produktionen har vuxit ur kontoret.',
    introduction: 'Ledningen sitter i Sektion 1. Produktionen har sedan länge vuxit ur en enda dimension.',
    groups: [
      { title: 'Ledning och farmkomplex', ids: ['wekill-hq', 'wekill-farms'] },
      { title: 'Overworld', ids: ['wekill-mobgrinder', 'wekill-iron-farm', 'wekill-witch-farm', 'wekill-sugarcane-farm', 'wekill-shulker-farm'] },
      { title: 'Under jord', ids: ['wekill-slime-farm'] },
      { title: 'Nether', ids: ['wekill-gold-farm'] },
      { title: 'End', ids: ['wekill-enderman-farm', 'wekill-wither-farm'] }
    ]
  },
  wesort: {
    heading: 'Allting på sin plats.',
    introduction: 'I Sektion 1 väntar en sorteringshall där ingenting försvinner. Åtminstone inte ur våra register.',
    groups: [{ title: 'Sorteringsanläggningen', ids: ['wesort-facility'] }, { title: 'WeSort Colors', ids: ['wesort-colors'] }],
    connections: {
      heading: 'Från farm till förvaring.',
      steps: [
        { name: 'WeKill', href: '/verksamheter/wekill/#anlaggningar' },
        { name: 'WeSort', href: '#anlaggning-wesort-facility' },
        { name: 'WeBox', href: '/verksamheter/webox/#anlaggningar' }
      ]
    }
  },
  webox: {
    heading: 'Varje box får en etikett.',
    introduction: 'WeKills farm producerar shulkerskal till boxarna. Vi registrerar innehållet och förvarar det i Sektion 1, anslutna till WeSort.',
    groups: [{ title: 'WeBox-anslutningen', ids: ['webox'] }],
    connections: {
      heading: 'Vem gör vad med boxen?',
      steps: [
        { name: 'WeKill', href: '/verksamheter/wekill/#anlaggning-wekill-shulker-farm' },
        { name: 'WeBox', href: '#anlaggning-webox' },
        { name: 'WeSort', href: '/verksamheter/wesort/#anlaggning-wesort-facility' }
      ]
    }
  },
  welivelaughlove: {
    heading: 'Ett hem. Ett syfte.',
    introduction: 'Avdelning B ligger i Sektion 1 och Avdelning A i Sektion 3. Boendeformen är densamma: gemenskap på koncernens villkor.',
    groups: [
      { title: 'Sektion 1 · Avdelning B', ids: ['welivelaughlove-compound'] },
      { title: 'Sektion 3 · Avdelning A', ids: ['welivelaughlove-village'] }
    ]
  },
  wegamble: {
    heading: 'WeGamble Island tar form.',
    introduction: 'Casinoön byggs vid kusten. Spelbordet får vänta; kalkylerna är redan klara.',
    groups: [{ title: 'WeGamble Island', ids: ['wegamble-island'] }]
  },
  wetravel: {
    heading: 'Avgångar enligt plan.',
    introduction: 'Från Huvudstaden till Sektion 1 håller WeTravel rälsen och isbåtslederna i gång. Valet av destination är naturligtvis fritt inom nätet.',
    groups: [
      { title: 'Huvudstadens centralstation', ids: ['wetravel-huvudstaden-centralstation'] },
      { title: 'Centralstationen i Sektion 1', ids: ['wetravel-sektion-1-centralstation'] },
      { title: 'Längs nätet', ids: ['wetravel-sparnat'] }
    ]
  },
  wetrade: {
    heading: 'Kunskap till fast pris.',
    introduction: 'Alla enchantments säljs under ett tak. Handlarna står redo dygnet runt, oavsett vad deras scheman säger.',
    groups: [{ title: 'Handelsanläggningen', ids: ['wetrade-exterior'] }]
  },
  welove: {
    heading: 'Personalförsörjning från början.',
    introduction: 'Här planeras nästa generation villagers för koncernens arbetsmarknad. Familjens framtid är redan budgeterad.',
    groups: [{ title: 'Personalanläggningen', ids: ['welove-headquarters'] }]
  },
  werule: {
    heading: 'Makten har en adress.',
    introduction: 'WeRule äger samtliga offentliga lokaler och ansvarar nu för myndigheterna och våldsmonopolet. Riksdagshuset i Huvudstaden och stadshuset i Sektion 1 är två synliga delar av uppdraget.',
    groups: [
      { title: 'Huvudstaden · Riksdagshuset', ids: ['werule-riksdagshuset'] },
      { title: 'Sektion 1 · Stadshuset', ids: ['werule-stadshus'] }
    ]
  }
};
