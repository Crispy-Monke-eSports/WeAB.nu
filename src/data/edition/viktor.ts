import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const viktorArticles = makeMagazineArticles('viktor-sadel', 25, [
  {
    "slug": "sektion-ett-och-vagvalet",
    "format": "reportage",
    "title": "Vid Sektion 1 börjar resan redan på plattformen",
    "summary": "En station fungerar bäst när resenären kan hitta rätt utan att känna hela nätet utantill.",
    "image": "/images/wetravel-sektion-1-centralstation.webp",
    "scene": "På stationen i Sektion 1 börjar resenärens första uppgift innan någon vagn rör sig. Det gäller att hitta rätt riktning.",
    "context": "WeTravel samordnar flera förbindelser och behöver därför göra anslutningarna lika begripliga som själva spåren.",
    "tension": "Det går att bygga fler vägar utan en gemensam plan. Men varje ny anslutning skapar också nya val som någon måste förstå.",
    "ending": "Den välfungerande resan är ofta den som ingen behöver förklara i efterhand. Det är inte alltid samma sak som den snabbaste."
  },
  {
    "slug": "en-isvag-behover-ett-slut",
    "format": "analys",
    "title": "En isväg måste också ha ett begripligt slut",
    "summary": "Hög hastighet hjälper föga om ankomsten kräver ett nytt orienteringsprojekt.",
    "image": "/images/wetravel-station.webp",
    "scene": "En isbåtsled kan göra en lång sträcka förvånansvärt kort. Farten blir lätt det första besökaren minns.",
    "context": "WeTravel behöver samtidigt ordna anslutningar i båda ändar, så att resenären vet vart den ska efter själva färden.",
    "tension": "En enskild genväg kan kännas fantastisk fram till den dag då nya byggnader gör det gamla slutet mindre användbart.",
    "ending": "Ett riktigt nätverk löser därför hela resan, från första skylten till den sista passagen. Det är vad planeringen ska klara."
  },
  {
    "slug": "den-bra-stationsskylten",
    "format": "guide",
    "title": "Den bästa stationsskylten förebygger ett samtal",
    "summary": "Tre frågor avgör om en resenär får den information som behövs för nästa steg.",
    "image": "/images/wetravel-huvudstaden-centralstation.webp",
    "scene": "Tänk dig att du står i Huvudstadens centralstation för första gången. Du vill veta vart linjen går, var den börjar och hur du byter.",
    "context": "En välordnad stationsmiljö visar inte bara ett namn. Den förklarar anslutningen till nästa plats och gör rutten begriplig även för nya resenärer.",
    "tension": "För mycket information kan vara nästan lika besvärligt som för lite. Den som bara möts av pilar utan sammanhang får ändå gissa.",
    "ending": "En skylt har gjort sitt arbete när resenären kan gå vidare utan att behöva känna sig som en expert på transportnätets historia."
  },
  {
    "slug": "underhall-ar-en-del-av-resan",
    "format": "kronika",
    "title": "En spårreparation är inte en omväg från framsteg",
    "summary": "Förbindelser som underhålls i tid fortsätter fungera också när själva invigningen är glömd.",
    "image": "/images/wetravel-station.webp",
    "scene": "När en förbindelse behöver ses över känns pausen alltid onödigt lång för den som redan har bråttom.",
    "context": "Men räls och stationer fortsätter inte fungera enbart på grund av vår önskan att resa. De behöver tillsyn och genomtänkta förbättringar.",
    "tension": "En improviserad passage kan verka mer tillgänglig tills den plötsligt inte fungerar. Då visar sig den uteblivna planeringen snabbt.",
    "ending": "Den ansvarsfulla trafikorganisationen bedöms därför bäst efter hur väl nätet håller i längden, inte hur fort första vagnen avgick."
  },
  {
    "slug": "centralstationens-tysta-arbete",
    "format": "reportage",
    "title": "Centralstationens viktigaste arbete syns nästan inte",
    "summary": "En fungerande station består även av passagerna, anvisningarna och anslutningarna mellan spåren.",
    "image": "/images/wetravel-huvudstaden-centralstation.webp",
    "scene": "Vid centralstationen i Huvudstaden är det lätt att fästa blicken vid tågen och glömma dem som letar efter nästa plattform.",
    "context": "WeTravels anläggningar behöver fungera både för vana resenärer och för dem som kommer till en station för allra första gången.",
    "tension": "En station kan vara imponerande byggd och ändå skapa förvirring om varje passage behandlas som ett fristående projekt.",
    "ending": "När de små delarna samverkar blir resultatet diskret: människor kommer vidare utan att göra en särskild händelse av varje byte."
  }
] satisfies StorySeed[]);
