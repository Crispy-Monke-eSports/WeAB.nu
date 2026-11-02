import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const alvaArticles = makeMagazineArticles('alva-heden', 40, [
  {
    "slug": "jarnfarmens-andra-uppgift",
    "format": "reportage",
    "title": "Järnfarmen måste också kunna leverera vidare",
    "summary": "En stadig produktion är bara början; den behövs också en väg från farmen till rätt förråd.",
    "image": "/images/wekill-iron-farm.webp",
    "scene": "Vid järnfarmen upprepas samma tekniska moment gång på gång. Det är denna återkommande mekanik som gör resursen möjlig att planera för.",
    "context": "WeKill äger anläggningen och behöver följa resultatet även efter att materialet lämnat själva farmen. Sortering och lagring är nästa steg.",
    "tension": "En snabb produktion kan framstå som lyckad tills en full behållare visar att nästa led inte hunnit med. Det är där ett tekniskt stopp får ekonomiska följder.",
    "ending": "Jag bedömer därför inte processen efter en enskild leverans. Det intressanta är om materialet fortsätter hitta rätt även när produktionen körs under längre tid."
  },
  {
    "slug": "endermanfarmens-egen-dimension",
    "format": "reportage",
    "title": "I End fortsätter arbetet långt från Huvudstaden",
    "summary": "Endermanfarmen visar att dimensioner kan skilja en anläggning från dess kunder utan att resursbehovet blir mindre.",
    "image": "/images/wekill-enderman-farm.webp",
    "scene": "Resan till End förändrar känslan av avstånd. Här ligger en av WeKills specialiserade farmer i en miljö där det vanliga landskapet inte följer med.",
    "context": "Anläggningens uppgift är fortfarande densamma som i andra delar av produktionen: en återkommande process ska ge resurser som går att ta hand om.",
    "tension": "Det är lätt att tro att den ovanliga platsen gör driften till ett helt separat projekt. Men tekniken behöver också här underhåll och en plan för materialet.",
    "ending": "Skillnaden mellan dimensioner är tydlig för besökaren, men bör inte bli en ursäkt för att förlora överblick. En farm är värdefull när dess resultat går att använda."
  },
  {
    "slug": "sockerrorens-stilla-arbete",
    "format": "analys",
    "title": "Sockerrören växer utan att fråga efter arbetstid",
    "summary": "Bakom en till synes enkel farm finns ett system som måste tåla både jämn produktion och återkommande leveranser.",
    "image": "/images/wekill-sugarcane-farm.webp",
    "scene": "En sockerrörsfarm kan se stillsam ut jämfört med andra anläggningar. Det mesta av arbetet sker genom mekanik som upprepar samma uppgift utan större dramatik.",
    "context": "WeKill behöver därför förstå både hur snabbt grödan återkommer och hur själva insamlingen fungerar. Produktionen räknas först när materialet faktiskt lämnat systemet.",
    "tension": "Den som bara följer de första minuterna kan få en missvisande bild av kapaciteten. Ett system visar sin styrka när det fortsätter leverera utan avbrott under längre tid.",
    "ending": "Det är den sortens pålitlighet som ger nästa anläggning något att planera efter. En enkel farm kan vara en mycket viktig länk i en större kedja."
  },
  {
    "slug": "guldfarmens-bortglomda-kedja",
    "format": "ekonomi",
    "title": "Guld är användbart först när någon hämtar det",
    "summary": "Guldfarmens värde beror på hur väl den passar ihop med systemet som tar emot och förvarar resurserna.",
    "image": "/images/wekill-gold-farm.webp",
    "scene": "I Nether arbetar en av WeKills anläggningar med en resurs som lätt får all uppmärksamhet. Men när guldet väl har producerats börjar ett nytt problem.",
    "context": "Materialet behöver kunna hämtas, transporteras och förvaras utan att hela processen bygger på vem som råkar vara i närheten just då.",
    "tension": "Om en farm producerar mer än nästa del kan hantera riskerar resultatet att bli ett förråd fullt av väntan i stället för en fungerande leveranskedja.",
    "ending": "En bra produktionsplan tittar därför både på takten och på mottagningen. Det är så farmens resurser blir till något mer än en full kista."
  },
  {
    "slug": "shulkerfarmens-betydelse",
    "format": "reportage",
    "title": "Från shulkerfarm till WeBox är avståndet en affärsfråga",
    "summary": "Specialiserad farmproduktion visar varför en resurs kan vara betydelsefull långt från den plats där den uppstår.",
    "image": "/images/wekill-shulker-farm.webp",
    "scene": "Shulkerfarmen är ett tydligt exempel på en anläggning vars resultat får en särskild betydelse i nästa steg av produktionen.",
    "context": "WeKill äger farmen medan WeBox använder shulkerboxar i sin lagringsverksamhet. Sambandet gör tekniken till mer än ett lokalt produktionsprojekt.",
    "tension": "Det kan locka att bedöma anläggningen isolerat efter hur mycket den ger. Men förvaringsmöjligheterna längre fram avgör vilken nytta materialet skapar.",
    "ending": "Jag följer därför gärna resursen en bit till. Först när nästa verksamhet kan använda resultatet blir anläggningens uppgift riktigt tydlig."
  }
] satisfies StorySeed[]);
