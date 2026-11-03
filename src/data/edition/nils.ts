import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const nilsArticles = makeMagazineArticles('nils-brynja', 15, [
  {
    "slug": "under-sorten-i-wesort",
    "format": "reportage",
    "title": "Där WeSort låter blocken hitta rätt utan ett enda råd",
    "summary": "I den stora sorteringsanläggningen följer vi material som går in i systemet och kommer ut på en bestämd plats.",
    "image": "/images/wesort-interior.webp",
    "scene": "En behållare öppnas och ett föremål rör sig vidare i det dolda systemet. Inne i WeSort är rörelsen mer intressant än bullret, eftersom varje förflyttning redan har en tänkt destination.",
    "context": "Sorteringens styrka syns i de små upprepningarna. Samma sak händer igen och igen tills kistorna får ett innehåll som både går att använda och hitta tillbaka till.",
    "tension": "Det händer förstås att ett material får vänta på utrymme. På avstånd ser det ut som ett stopp, men vid anläggningen blir det tydligt hur förvaring och kapacitet är samma fråga.",
    "ending": "När jag lämnar hallen fortsätter flödet utan publik. Det är kanske det mest påtagliga intrycket från besöket: anläggningen kräver inte att någon står och beundrar dess arbete."
  },
  {
    "slug": "en-timme-vid-jarnfarmen",
    "format": "reportage",
    "title": "En timme vid järnfarmen berättar mer än ett möte",
    "summary": "WeKills produktion pågår enligt sin mekanik, men den avgörande frågan kommer när materialet ska vidare.",
    "image": "/images/wekill-iron-farm.webp",
    "scene": "Anläggningens ljud ligger som en jämn bakgrund medan den automatiska processen fortsätter. Vid WeKills järnfarm behöver ingen dagligen förklara varför varje nytt materialföremål är viktigt.",
    "context": "Det är lätt att räkna resultatet i kistor. Den egentliga organisationen börjar dock tidigare, med en process som måste vara tillräckligt stabil för att ge nytta över längre tid.",
    "tension": "Om nästa del av kedjan blir full spelar det liten roll att den första delen fortsätter leverera. Det är därför produktionsanläggningen inte kan förstås utan WeSort och senare förvaring.",
    "ending": "När besöket är slut har en ny omgång material redan påbörjat sin väg. Ingen applåderar, men för dem som ska använda resurserna i ett bygge är det en ganska bra nyhet."
  },
  {
    "slug": "pa-besok-hos-welove",
    "format": "reportage",
    "title": "I WeLoves lokaler är framtiden redan en arbetsuppgift",
    "summary": "Vi ser närmare på hur anläggningen för villager breeding kopplas till koncernens fortsatta personalbehov.",
    "image": "/images/welove-headquarters.webp",
    "scene": "Utanför WeLoves anläggning bryts bergmiljön av en tydlig skylt. Inne i verksamheten är det svårare att tala om framtiden som något avlägset; planeringen gäller redan dem som ännu inte har börjat arbeta.",
    "context": "Driftansvarige Haapalainen ansvarar för en verksamhet som ska kunna möta andra bolags behov över tid. Det gör att personalförsörjning behandlas med samma framförhållning som lager och byggnader.",
    "tension": "En besökare kan undra hur många steg som ligger mellan dagens rutiner och en framtida plats vid en handelsdisk. Svaret finns i samordningen med bland andra WeTrade och boendeverksamheten.",
    "ending": "På vägen ut framstår anläggningen som ett ovanligt konkret svar på en vanlig organisationsfråga: hur ser man till att nästa verksamhet inte börjar med att sakna dem som ska arbeta där?"
  },
  {
    "slug": "bedrockhalets-botten",
    "format": "reportage",
    "title": "Nere vid bedrockhålets botten är djupet svårt att förhandla om",
    "summary": "Ett helt chunk har grävts ur och dekorerats. Vi följer det stora projektet från marknivån till botten.",
    "image": "/images/bedrock-hole-interior.webp",
    "scene": "Ovanifrån ser bedrockhålet nästan ut som en öppning i en ritning. Väl nere vid botten förändras skalan. Väggarna stiger brant och de utvalda dekorationerna framstår som ännu mer avsiktliga.",
    "context": "Projektet ligger vid WeKills kontor i Sektion 1 och visar hur mycket arbete som kan läggas på något som inte omedelbart producerar ett föremål. Här är själva genomförandet en del av poängen.",
    "tension": "Det går att fråga varför man väljer att gräva så långt ned när marken redan ligger där den ligger. Frågan är rimlig, men den besvaras delvis av resultatet: ett djup som ingen kan misstolka.",
    "ending": "När jag återvänder till ytan är marknivån inte längre någon självklar referens. Projektet har gjort en förvånansvärt konkret sak av ett mycket företagsmässigt begrepp: att gå till botten med frågan."
  },
  {
    "slug": "bakom-wetrades-diskar",
    "format": "reportage",
    "title": "Ett besök bakom WeTrades ordnade handelsdiskar",
    "summary": "Handel med enchanted books förutsätter mer än efterfrågan; den behöver personal, rutiner och en plats där sortimentet går att hitta.",
    "image": "/images/wetrade-hall.webp",
    "scene": "Handelsmiljön fylls av upprepade möten vid disk efter disk. Besökaren ser enchantments och priser, men bakom den ytan finns en ordning som gör att kunden inte behöver leta i hela servern.",
    "context": "WeTrade samlar specialiserade handlare i samma miljö. Det förenklar både presentationen av utbudet och den administrativa frågan om vem som svarar för vilken del av tjänsten.",
    "tension": "Det är lätt att tänka sig varje affär som en helt fristående händelse. Men då försvinner sambandet med den personalförsörjning och de lokaler som gör att handeln faktiskt kan upprepas.",
    "ending": "När jag går därifrån fortsätter diskarna sitt arbete. Det är inte en dramatisk syn, men just frånvaron av drama förklarar en stor del av varför kunderna kan planera sina besök."
  }
] satisfies StorySeed[]);
