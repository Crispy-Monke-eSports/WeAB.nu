import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const selmaArticles = makeMagazineArticles('selma-kvarnstrom', 20, [
  {
    "slug": "tomma-kistor-ar-kapital",
    "format": "ekonomi",
    "title": "När den tomma kistan blir en investering",
    "summary": "Lagerkapacitet är värdefull även innan den behöver fyllas.",
    "image": "/images/webox-terminal.webp",
    "scene": "Att se en tom kista och dra slutsatsen att den är onödig vore att blanda ihop dagens beläggning med morgondagens behov.",
    "context": "WeBox arbetar med förvaring som ska kunna ta emot material när produktionen ökar. En ledig plats ger hela kedjan handlingsutrymme.",
    "tension": "Visst innebär kapacitet en kostnad i förväg. Men den ska vägas mot avbrottet som uppstår när nästa leverans saknar plats.",
    "ending": "Jag skulle därför mäta lagret efter hur väl det klarar nästa förändring, inte hur överfullt det råkar vara på en bild."
  },
  {
    "slug": "guldets-langa-vag",
    "format": "analys",
    "title": "Guldets väg slutar inte vid farmens dörr",
    "summary": "Produktionen behöver sortering och förvaring för att bli användbar.",
    "image": "/images/wekill-gold-farm.webp",
    "scene": "En guldfarm kan leverera stora mängder resurser utan att de automatiskt gör nytta. Värdet uppstår också efter själva produktionen.",
    "context": "WeKill äger sina farmer, medan WeSort och WeBox är delar av den fortsatta kedjan från råmaterial till tillgänglig resurs.",
    "tension": "Att maximera varje farm för sig verkar enkelt. Om nästa kista redan är full får en högre takt däremot ett oväntat pris.",
    "ending": "Det är flödet som bör fungera som en helhet. Annars blir framgången på ett ställe en kö hos någon annan."
  },
  {
    "slug": "enchantments-och-tidskostnad",
    "format": "ekonomi",
    "title": "En billig enchantment kan bli en dyr resa",
    "summary": "Priset vid disken är inte den enda kostnaden för ett inköp.",
    "image": "/images/wetrade-interior.webp",
    "scene": "Det är enkelt att jämföra två synliga priser. Svårare är att sätta värde på tiden som går åt för att resa mellan olika handlare.",
    "context": "WeTrade samlar många enchantments på ett ställe och låter kunden planera sitt besök utan att först undersöka varje handelsplats i regionen.",
    "tension": "En annan handlare kan säkert erbjuda ett lägre pris i ett enskilt fall. Men hur många omvägar ska räknas som gratis?",
    "ending": "En ordnad handelsplats kan alltså skapa ekonomiskt värde även när prisskylten inte är den lägsta möjliga."
  },
  {
    "slug": "isvagens-underhall",
    "format": "analys",
    "title": "Genvägens pris kommer efter invigningen",
    "summary": "Ett nytt spår är mer än kostnaden för blocken som läggs.",
    "image": "/images/wetravel-station.webp",
    "scene": "En genväg ser ofta billig ut just när den byggs. Några rälsblock eller en issträcka verkar lösa hela frågan om en lång resa.",
    "context": "WeTravel måste däremot se hur nya förbindelser ansluts, skyltas och underhålls tillsammans med resten av nätet.",
    "tension": "Den första resan kan bli kortare samtidigt som varje senare driftstopp blir svårare att hantera utan gemensamt ansvar.",
    "ending": "En investering bör därför bedömas också på den dag när byggaren inte längre står bredvid och visar vägen."
  },
  {
    "slug": "kapacitet-fore-krisen",
    "format": "ekonomi",
    "title": "Kapacitet bör byggas före nästa kris",
    "summary": "När flera anläggningar växer tillsammans är förberedelser ett ekonomiskt verktyg.",
    "image": "/images/wesort-interior.webp",
    "scene": "Ett extra lagerutrymme kan se överflödigt ut tills den dag då produktionen ökar. Då blir varje saknad kista ett nytt dröjsmål.",
    "context": "WeKills farmer, WeSort och WeBox är olika verksamheter men ingår i samma resursflöde. Ingen del kan planeras helt ensam.",
    "tension": "Att bygga i förväg skapar förstås en kostnad. Att vänta kan bli betydligt dyrare när flera anläggningar står stilla.",
    "ending": "Jag ser därför framförhållning som en tillgång i sig, även när den ännu inte har fyllts med föremål."
  }
] satisfies StorySeed[]);
