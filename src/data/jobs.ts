export interface JobPosting {
  id: string;
  title: string;
  division: string;
  location: string;
  type: string;
  compensation: string;
  pitch: string;
  responsibilities: string[];
  requirements: string[];
  perk: string;
}

export const jobs: JobPosting[] = [
  {
    id: 'WEAB-001', title: 'Strateg för konkurrensavveckling', division: 'WeAB', location: 'Huvudstaden', type: 'Heltid',
    compensation: 'Diamanter efter lyckade förvärv',
    pitch: 'Vi söker dig som ser en fri marknad och omedelbart identifierar problemet.',
    responsibilities: ['Kartlägg verksamheter som ännu inte tillhör oss.', 'Erbjud uppköp, sammanslagning eller pedagogisk omprövning.', 'Rapportera minskad konkurrens som ökad kundfrihet.'],
    requirements: ['God förhandlingsvana. Motpartens samtycke är meriterande.', 'Förmåga att kalla ett monopol för en helhetslösning.'],
    perk: 'Eget kontor. Fönster mot den senast förvärvade konkurrenten.'
  },
  {
    id: 'WEAB-002', title: 'Biträdande aktiekursstödjare', division: 'WeAB', location: 'Huvudstaden', type: 'Heltid',
    compensation: 'Resultatbaserade diamanter (resultatet beslutas av styrelsen)',
    pitch: 'När siffrorna går ned behöver vi någon som kan förklara varför de egentligen går upp.',
    responsibilities: ['Presentera varje kvartal som rekordstarkt.', 'Ta fram prognoser som matchar ledningens humör.', 'Omklassificera oväntade kostnader som framtida möjligheter.'],
    requirements: ['Starkt självförtroende i kalkylark.', 'Kan uttala ”justerat resultat” utan att blinka.'],
    perk: 'Obegränsad tillgång till positiva diagram.'
  },
  {
    id: 'KILL-001', title: 'Chef för biologisk avkastning', division: 'WeKill', location: 'Sektion 1', type: 'Heltid',
    compensation: 'Diamanter per godkänd produktionscykel',
    pitch: 'På WeKill är livets stora fråga enkel: hur många drops per timme?',
    responsibilities: ['Maximera farmarnas utbyte och minimera tomgång.', 'Planera expansion där andra ser ett ekosystem.', 'Leverera produktionsrapporter med konsekvent goda nyheter.'],
    requirements: ['Erfarenhet av automatiserade farmer.', 'En imponerande förmåga att inte ställa följdfrågor.'],
    perk: 'Hörselskydd vid behov. Behoven bedöms centralt.'
  },
  {
    id: 'KILL-002', title: 'Nattansvarig för produktionslinjen', division: 'WeKill', location: 'Sektion 1', type: 'Skiftgång',
    compensation: 'Diamanter, när produktionen godkänts',
    pitch: 'Mobs sover aldrig. Vi ser gärna samma arbetsmoral hos dig.',
    responsibilities: ['Övervaka produktionslinjer och uppsamlingssystem.', 'Åtgärda flaskhalsar innan någon hinner kalla dem problem.', 'Håll anläggningen igång när dagskiftet säger god natt.'],
    requirements: ['Förståelse för redstone, mobstillströmning och trattarnas flöden.', 'Nattsyn är meriterande. Sömn är det inte.'],
    perk: 'Arbetsplatsbelysning ingår under godkända driftstopp.'
  },
  {
    id: 'SORT-001', title: 'Resursflödesoperatör', division: 'WeSort', location: 'Sektion 1', type: 'Heltid',
    compensation: 'Diamanter efter inventering',
    pitch: 'Tusentals kistor. Miljoner möjligheter. En enda tillåten sorteringsordning.',
    responsibilities: ['Säkra sorteringsflöden från farm till centrallager.', 'Felsök fulla kistor innan de skapar självständighet.', 'Inventera även sådant ingen längre minns att vi äger.'],
    requirements: ['Kunskap om item filters och sorteringssystem.', 'Stark känsla för ordning och en svag känsla för fritid.'],
    perk: 'Fri tillgång till etiketter. Varje etikett registreras.'
  },
  {
    id: 'SORT-002', title: 'Direktör för konsumtionsstimulans', division: 'WeSort', location: 'Sektion 1', type: 'Heltid',
    compensation: 'Diamanter kopplade till köpbehov som ännu inte fanns',
    pitch: 'Vår vision är att ingen ska behöva undra om de behöver mer. Svaret är ja.',
    responsibilities: ['Öka omsättningen av perfekt användbara föremål.', 'Utforma kampanjer för produkter vi redan har för många av.', 'Gör överfulla lager till en konsumentfråga.'],
    requirements: ['Kan sälja samma shulkerbox två gånger.', 'Tror på ständig tillväxt även i ett begränsat inventory.'],
    perk: 'Personalrabatt på varor du nyss inventerade.'
  },
  {
    id: 'BOX-001', title: 'Senior shulkerlogistiker', division: 'WeBox', location: 'Sektion 1', type: 'Heltid',
    compensation: 'Diamanter per korrekt märkt box',
    pitch: 'Det finns 27 platser i en shulkerbox. Vi vill kontrollera samtliga.',
    responsibilities: ['Standardisera koncernens shulkerbox-hantering.', 'Samordna lagring och leveranser med WeSort.', 'Spåra försvunna boxar till rätt person eller lämplig syndabock.'],
    requirements: ['Noggrannhet även efter den tusende boxen.', 'Lojalitet mot färgkodning och övriga direktiv.'],
    perk: 'En egen shulkerbox. Innehållet förblir koncernens.'
  },
  {
    id: 'LIVE-001', title: 'Boendekapacitetsansvarig', division: 'WeLiveLaughLove', location: 'Bostadssektorn', type: 'Heltid',
    compensation: 'Diamanter per optimerad kvadratmeter',
    pitch: 'Vi skapar plats för fler invånare genom att skapa mindre plats för varje invånare.',
    responsibilities: ['Beräkna maximal beläggning per boendeenhet.', 'Effektivisera korridorer, sängplatser och dörrtillgång.', 'Rapportera trångboddhet som social närhet.'],
    requirements: ['Erfarenhet av villagerlogistik är meriterande.', 'Kan beskriva en cell som ett kompakt premiumboende.'],
    perk: 'Egen arbetsstation med mer benutrymme än våra boenden.'
  },
  {
    id: 'LIVE-002', title: 'Chef för invånarharmoni', division: 'WeLiveLaughLove', location: 'Bostadssektorn', type: 'Heltid',
    compensation: 'Diamanter per konfliktfri rapport',
    pitch: 'Sedan föregående uppror har vi lärt oss värdet av en entydig nöjdhetsmätning.',
    responsibilities: ['Genomför obligatoriska trivselundersökningar.', 'Säkerställ att invånare inte störs av konkurrerande åsikter.', 'Sammanställ synpunkter under rubriken ”överväldigande stöd”.'],
    requirements: ['God förmåga att hålla ett vänligt tonläge under strikt övervakning.', 'Diskretion rörande historiska samhällshändelser.'],
    perk: 'Årets medarbetare utses på förhand.'
  },
  {
    id: 'TRAVEL-001', title: 'Räls- och isbåtskoordinator', division: 'WeTravel', location: 'Transportnätet', type: 'Heltid',
    compensation: 'Diamanter per godkänd avgång',
    pitch: 'Alla vägar leder till WeAB. Ditt jobb är att stänga de övriga.',
    responsibilities: ['Planera och underhåll rälsnät och isbåtsleder.', 'Garantera anslutning till koncernens strategiska anläggningar.', 'Prioritera punktlighet före onödigt många alternativa rutter.'],
    requirements: ['Praktisk erfarenhet av räls- och isbåtstrafik.', 'Kunna skilja en genväg från obehörig infrastruktur.'],
    perk: 'Fri enkelresa på utvalda sträckor. Returresa prövas separat.'
  },
  {
    id: 'TRAVEL-002', title: 'Reserättshandläggare', division: 'WeTravel', location: 'Huvudstaden', type: 'Dagtid',
    compensation: 'Enligt koncernens diamanttabell',
    pitch: 'Rörlighet är en rättighet som vi erbjuder som tjänst.',
    responsibilities: ['Godkänn resor mellan koncernens olika sektioner.', 'Kontrollera färdbevis, tillstånd och onödigt självständiga planer.', 'Optimera väntetider efter strategisk betydelse.'],
    requirements: ['Oöverträffad ordningskänsla.', 'Förmåga att säga ”nästa avgång” utan att ange en tid.'],
    perk: 'Garanterad sittplats vid interna förflyttningar.'
  },
  {
    id: 'GAMBLE-001', title: 'Chef för husets fördel', division: 'WeGamble', location: 'WeGamble Island', type: 'Projektanställning',
    compensation: 'Diamanter, förutsatt att huset vinner',
    pitch: 'WeGambles spelverksamhet ger redan intäkter. Kasinoön har däremot ännu inte öppnat, och någon måste säkerställa att slumpen uppför sig när den gör det.',
    responsibilities: ['Utforma underhållning med långsiktigt positivt kassaflöde.', 'Säkerställ att spelupplevelsen alltid är spännande för gästen och lönsam för oss.', 'Rapportera varje utbetalning som ett extraordinärt undantag.'],
    requirements: ['Redstonekunskap och ett intresse för sannolikhet.', 'Förstår skillnaden mellan tur och otillräcklig marginal.'],
    perk: 'En personalingång finns med i planerna för kasinoön. Utgång ingår i en senare etapp.'
  },
  {
    id: 'GAMBLE-002', title: 'VIP-ansvarig för diamantåtervinning', division: 'WeGamble', location: 'WeGamble Island', type: 'Projektanställning',
    compensation: 'Prestationsbaserad provision i diamanter',
    pitch: 'Vi värdesätter våra nuvarande och framtida gäster. Framför allt det de bär i fickorna.',
    responsibilities: ['Utveckla lojalitetsprogram som ingen vill lämna.', 'Föreslå bekväma vägar från gästernas fickor till våra valv.', 'Se till att förlust känns som en exklusiv upplevelse.'],
    requirements: ['Enastående servicekänsla och räkneförmåga.', 'Kan uttala ”en sista omgång” med fullständig övertygelse.'],
    perk: 'Representationsbudget som dras från framtida gästers vinster.'
  }
];
