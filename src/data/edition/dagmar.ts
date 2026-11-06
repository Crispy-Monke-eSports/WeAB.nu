import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const dagmarArticles = makeMagazineArticles('dagmar-stenqvist', 50, [
  {
    "slug": "vad-stadshuset-ansvarar-for",
    "format": "analys",
    "title": "Stadshusets uppdrag kräver mer än en byggnad",
    "summary": "När förvaltning och användning skiljs åt blir det också lättare att hitta rätt ansvarig.",
    "image": "/images/werule-sektion-1-stadshus.webp",
    "scene": "För att förstå stadshusets funktion i Sektion 1 behöver man först skilja själva lokalen från den verksamhet som bedrivs där.",
    "context": "WeRule ansvarar för offentliga fastigheter i våra områden och kan därför samordna frågor om lokalerna på ett sätt som är tydligt över tid.",
    "tension": "En invändning gäller vilka frågor som faktiskt är fastighetsfrågor. Det behöver avgöras innan ett önskemål skickas mellan olika kontaktvägar.",
    "ending": "När uppdraget är avgränsat går det också att följa upp varför en åtgärd har genomförts eller ännu inte prioriterats. Det skapar en ordning som kan återanvändas."
  },
  {
    "slug": "nar-ett-underhall-far-ett-nummer",
    "format": "reportage",
    "title": "Ett litet underhållsärende blir begripligt först när det dokumenteras",
    "summary": "I arbetet med offentliga byggnader kan en enkel notering få större betydelse än ett långt samtal.",
    "image": "/images/werule-riksdagshuset.webp",
    "scene": "Ett underhållsbehov börjar ofta med en iakttagelse som verkar självklar: någonting behöver repareras eller ses över innan nästa användning.",
    "context": "En fastighetsorganisation behöver förvandla den iakttagelsen till ett beslut med ansvar, prioritet och en plan för när arbetet ska utföras.",
    "tension": "Det låter byråkratiskt att skriva ned sådant som alla redan har sett. Men utan dokumentation blir nästa medarbetare tvungen att börja om med samma fråga.",
    "ending": "Att WeRule kan arbeta enligt fasta rutiner gör det möjligt att följa ärendet vidare. Det är mindre dramatiskt än en konflikt om ansvar och betydligt mer praktiskt."
  },
  {
    "slug": "en-tydlig-ordning-for-besok",
    "format": "guide",
    "title": "Så fungerar tillträde när flera använder samma byggnad",
    "summary": "Gemensamma lokaler kräver att besökare, verksamheter och fastighetsansvariga kan förstå sina respektive uppgifter.",
    "image": "/images/werule-riksdagshuset.webp",
    "scene": "Börja med att fråga vilken funktion du ska besöka. Det är inte samma sak som att bestämma hur hela byggnaden ska användas för alla andra.",
    "context": "Vid offentliga fastigheter behöver den dagliga verksamheten samspela med de rutiner som gäller för lokaler, tillträde och underhåll.",
    "tension": "En oplanerad passage kan kännas obetydlig för en besökare men samtidigt påverka något helt annat som pågår bakom nästa dörr.",
    "ending": "Den tydligaste ordningen är den som kan beskrivas i förväg och tillämpas på samma sätt vid nästa besök. Då blir gränserna ett stöd, inte en överraskning."
  },
  {
    "slug": "riksdagshuset-och-fastighetsfragan",
    "format": "analys",
    "title": "Det är inte samma sak att äga huset och att använda rummet",
    "summary": "Riksdagshuset visar varför två uppgifter som sker på samma plats inte måste vara samma organisatoriska fråga.",
    "image": "/images/werule-riksdagssalen.webp",
    "alt": "Riksdagssalen med talarstol och sittplatser i Huvudstaden",
    "scene": "Före ansvarssamordningen 2045 användes Riksdagshuset i Huvudstaden av den dåvarande riksdagen medan WeAB ägde fastigheten. Denna tidigare ansvarsfördelning visar fördelarna med dagens samlade förvaltning.",
    "context": "För den som följer förvaltningen är det därför viktigt att hålla isär institutionens arbete och fastighetsägarens frågor om själva lokalerna.",
    "tension": "Det kan finnas situationer där uppgifterna möts. Då blir det särskilt värdefullt att veta vilken fråga som hör hemma hos vilken ansvarig.",
    "ending": "Det avgörande är inte att alla frågor samlas i ett enda begrepp, utan att varje fråga kan följas till den funktion som faktiskt har möjlighet att ta hand om den."
  },
  {
    "slug": "vem-tar-hand-om-nasta-byggnad",
    "format": "lokalt",
    "title": "Nästa offentliga byggnad behöver en förvaltare från början",
    "summary": "Underhåll blir enklare när ansvaret inte måste bestämmas först efter att den första frågan redan har uppstått.",
    "image": "/images/section-1-overview.webp",
    "scene": "En ny byggnad får vanligtvis stor uppmärksamhet när den står färdig. Det är naturligt, men de mest långsiktiga besluten behöver fattas innan invigningen.",
    "context": "WeRule arbetar med offentliga fastigheter och kan använda erfarenheter från befintliga byggnader för att skapa en tydligare ordning också framöver.",
    "tension": "Om ansvarsfördelningen skjuts upp tills något går sönder börjar själva reparationen med en diskussion som egentligen kunde ha förts långt tidigare.",
    "ending": "Ett tidigt besked om förvaltningen är därför ingen administrativ detalj. Det ger en grund för användning och underhåll under lång tid."
  }
] satisfies StorySeed[]);
