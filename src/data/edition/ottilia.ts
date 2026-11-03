import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const ottiliaArticles = makeMagazineArticles('ottilia-glas', 30, [
  {
    "slug": "arenans-bla-vita-ljus",
    "format": "kultur",
    "title": "När Huvudstadens arena blir en egen berättelse",
    "summary": "De blåvita ytorna och läktarnas ordning ger distriktens tävlingar en scen som känns större än varje enskilt resultat.",
    "image": "/images/huvudstadens-arena-interior.webp",
    "scene": "En besökare på den översta raden lutar sig fram för att se var tävlingsytan börjar. Läktaren är ännu inte fylld av jubel, men blicken hittar ändå samma punkt som alla andra blickar kommer att söka.",
    "context": "Huvudstadens arena är byggd för möten mellan distrikt som tidigare kunnat hålla sina tävlingar var för sig. Det blåvita rummet samlar dem utan att kräva att byarna slutar vara olika. Varje hemort kan bära sina färger in i samma byggnad.",
    "tension": "Hur gör man en plats för rivalitet utan att själva huset tar ställning? Genom att ge deltagare och publik var sin tydlig väg och låta reglerna, inte arkitekturen, avgöra vem som vinner. WeAB har stått för ramen; den första stora berättelsen får distrikten skriva själva.",
    "ending": "Jag ser mig om innan jag går. Det finns ännu inga officiella resultat att läsa upp, bara en arena som gör det lätt att föreställa sig hur någon en dag kommer att minnas exakt var hen satt."
  },
  {
    "slug": "riksdagshusets-fasad",
    "format": "kultur",
    "title": "Fasaden som låter en institution synas",
    "summary": "Riksdagshusets arkitektur skapar en särskild tyngd åt ett uppdrag som annars lätt stannar i ord.",
    "image": "/images/werule-riksdagshuset.webp",
    "scene": "Den ljusa fasaden och de cyanblå detaljerna ger Riksdagshuset en tydlig närvaro i Huvudstaden. Byggnaden vill bli sedd.",
    "context": "Lokalen används av serverns riksdag men ägs av WeAB, vilket ger huset två sammanhängande berättelser: användning och förvaltning.",
    "tension": "Man kan förstås önska att en offentlig byggnad skulle vara alldeles anonym. Men då förloras också möjligheten att visa vad platsen betyder.",
    "ending": "När en institution får en igenkännbar form blir också omsorgen om själva byggnaden en del av det offentliga rummet."
  },
  {
    "slug": "arkitekturen-i-en-sorteringshall",
    "format": "reportage",
    "title": "En sorteringshall har sin egen sorts skönhet",
    "summary": "WeSort visar att återkommande funktioner och tydliga rader av förvaring också kan bilda en genomtänkt helhet.",
    "image": "/images/wesort-interior.webp",
    "scene": "Raderna av kistor ser nästan målade ut på håll. På nära håll märks skillnaden: en av dem fylls medan vi står där, en annan väntar på ett material som ännu inte kommit fram.",
    "context": "WeSort är inte byggt som ett museum. Hallens form följer varornas väg från mottagning till sortering och vidare mot förvaring. Just därför går det att läsa arkitekturen: varje upprepning berättar att samma sak ska kunna hända igen i morgon.",
    "tension": "Den som kallar rummet enbart praktiskt har förstås rätt. Men det är också en miljö där det praktiska fått färg, rytm och proportioner. De tomma facken är inte hål i kompositionen. De gör plats för den del av bilden som ännu inte levererats.",
    "ending": "På vägen ut hör jag ett föremål landa i sin behållare. I WeSort låter skönheten inte som applåder. Den låter som att något kom fram."
  },
  {
    "slug": "huvudstaden-sedd-ovanifran",
    "format": "kultur",
    "title": "Huvudstaden blir en annan stad från ovan",
    "summary": "Överblicken över halvön visar hur hus, gångvägar och större miljöer ger varandra proportioner.",
    "image": "/images/huvudstaden-overview.webp",
    "scene": "Från ovan blir Huvudstadens olika byggnader delar av samma mönster. Sträckor som kändes långa på marken ser plötsligt ut som linjer.",
    "context": "Staden på halvön rymmer flera verksamheter och offentliga funktioner. Alla ägs inte av samma aktör, men de påverkar ändå varandras utseende.",
    "tension": "En fristående byggnad kan vara vacker. Det svåra är att få många byggnader att tillsammans skapa en begriplig plats.",
    "ending": "Det är därför överblicken känns intressant även utan stora ord. Den visar den tysta kamp som pågår mellan enskilda idéer och en stad som vill hänga ihop."
  },
  {
    "slug": "byggnadens-egna-farg",
    "format": "kronika",
    "title": "Vad säger egentligen den cyanblå färgen?",
    "summary": "WeAB:s tydliga färgval får även vardagliga byggnader att framstå som delar av en större berättelse.",
    "image": "/images/weab-cyan-building.webp",
    "scene": "Vissa färger går att se från långt håll. Den cyanblå tonen som förknippas med WeAB hör till dem och förändrar hur man uppfattar en byggnad.",
    "context": "När liknande detaljer återkommer blir det lättare att känna igen vad som hör till samma koncern. Färgen gör en komplicerad ägarstruktur synlig.",
    "tension": "Det finns naturligtvis något tilltalande med helt individuella fasader. Samtidigt kan en plats förlora sin identitet om varje detalj är en egen förklaring.",
    "ending": "Jag tror att det är därför en konsekvent färg fungerar. Den talar stilla om sammanhanget innan skylten ens hunnit bli läst."
  }
] satisfies StorySeed[]);
