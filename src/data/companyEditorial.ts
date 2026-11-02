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
    heading: 'Produktion i tre dimensioner.',
    introduction: 'Kontoret ligger i Sektion 1. Farmerna är utspridda över flera platser; bilder och kända platsmarkeringar är olika saker.',
    groups: [
      { title: 'Kontor och farmkomplex', description: 'Kontoret ligger i Sektion 1. Farmkomplexet visas här utan egen exakt platsangivelse.', ids: ['wekill-hq', 'wekill-farms'] },
      { title: 'Farmer i Overworld', description: 'Anläggningar med egna bilder och markeringar i Overworld.', ids: ['wekill-mobgrinder', 'wekill-iron-farm', 'wekill-witch-farm', 'wekill-sugarcane-farm', 'wekill-shulker-farm'] },
      { title: 'Slimeproduktion', description: 'Slimefarmen har en egen bild men ingen exakt platsmarkering här.', ids: ['wekill-slime-farm'] },
      { title: 'Nether', description: 'Guldfarmen hör till produktionen i Nether.', ids: ['wekill-gold-farm'] },
      { title: 'End', description: 'Endermanfarmen och Witherfarmen finns i End.', ids: ['wekill-enderman-farm', 'wekill-wither-farm'] }
    ]
  },
  wesort: {
    heading: 'En byggnad. Ett ordnat flöde.',
    introduction: 'Fasaden och sorteringshallen är två vyer av samma WeSort-anläggning i Sektion 1.',
    groups: [{ title: 'Sorteringsanläggningen', description: 'Utsidan, insidan och kistorna i samma byggnad.', ids: ['wesort-facility'] }],
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
    heading: 'Lagersystemet vid WeSort.',
    introduction: 'WeBox-anslutningen finns i Sektion 1. Shulkerboxarna kommer från WeKill; förvaringen sköts här.',
    groups: [{ title: 'WeBox-anslutningen', description: 'En anläggning kopplad till sortering och förvaring.', ids: ['webox'] }],
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
    heading: 'Två avdelningar. Samma bostadsmodell.',
    introduction: 'Sektion 1 Avdelning B och Sektion 3 Avdelning A är skilda platser med egna bilder och markeringar.',
    groups: [
      { title: 'Sektion 1 · Avdelning B', description: 'Det inhägnade distriktet och nattvyn med järnvägen i förgrunden.', ids: ['welivelaughlove-compound'] },
      { title: 'Sektion 3 · Avdelning A', description: 'Den andra byn, med egen överblick och egna invånare.', ids: ['welivelaughlove-village'] }
    ]
  },
  wegamble: {
    heading: 'WeGamble Island tar form.',
    introduction: 'Casinoön är fortfarande under uppbyggnad. Bilderna visar kustbygget, inte en färdigöppnad verksamhet.',
    groups: [{ title: 'Kustbygget', description: 'Arbetet på ön pågår.', ids: ['wegamble-island'] }]
  },
  wetravel: {
    heading: 'Stationer på två platser.',
    introduction: 'Huvudstadens centralstation och centralstationen i Sektion 1 är olika anläggningar. Den övriga transportknutpunkten visas separat.',
    groups: [
      { title: 'Huvudstadens centralstation', description: 'Interiören med räls och portal.', ids: ['wetravel-huvudstaden-centralstation'] },
      { title: 'Centralstationen i Sektion 1', description: 'En annan station, här sedd utifrån.', ids: ['wetravel-sektion-1-centralstation'] },
      { title: 'Längs nätet', description: 'En annan vy från transportinfrastrukturen.', ids: ['wetravel-station'] }
    ]
  },
  wetrade: {
    heading: 'Handeln samlad under ett tak.',
    introduction: 'Fasaden, handelsdiskarna och interiören hör till en och samma anläggning. Sortimentet omfattar alla enchantments.',
    groups: [{ title: 'Handelsanläggningen', description: 'En adress för hela bokhandeln.', ids: ['wetrade-exterior'] }]
  },
  welove: {
    heading: 'Personalförsörjning från början.',
    introduction: 'WeLoves anläggning visas utifrån och inifrån. Här planeras nästa generation villagers för koncernens arbetsmarknad.',
    groups: [{ title: 'Personalanläggningen', description: 'Huvudbyggnaden och produktionsmiljön hör till samma plats.', ids: ['welove-headquarters'] }]
  },
  werule: {
    heading: 'Två hus. Två offentliga roller.',
    introduction: 'Riksdagshuset i Huvudstaden är en statlig byggnad där serverns riksdag sammanträder. Det ägs av WeAB. Stadshuset ligger i Sektion 1.',
    groups: [
      { title: 'Huvudstaden · Riksdagshuset', description: 'Serverns riksdag i en statlig byggnad med privat ägare. Ingen exakt byggnadskoordinat finns här.', ids: ['werule-riksdagshuset'] },
      { title: 'Sektion 1 · Stadshuset', description: 'En annan byggnad, med egen platsmarkering på servern.', ids: ['werule-stadshus'] }
    ]
  }
};
