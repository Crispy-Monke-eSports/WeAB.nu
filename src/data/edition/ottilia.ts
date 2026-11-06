import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const ottiliaArticles = makeMagazineArticles('ottilia-glas', 30, [
  {
    "slug": "arenans-bla-vita-ljus",
    "format": "kultur",
    "title": "När Huvudstadens arena blir en egen berättelse",
    "summary": "Den blåvita arenan är scen för Hungerspelen, där två bybor från varje by kämpar till döden, och koncernen får intäkterna.",
    "image": "/images/huvudstadens-arena-interior.webp",
    "scene": "En besökare på den översta raden lutar sig fram för att se var stridsytan börjar. Här utkämpas Hungerspelen, där två bybor från varje by möter de andra i strider till döden. Arkitekturen gör skillnaden mellan åskådare och deltagare påtaglig.",
    "context": "Huvudstadens arena är byggd för ett arrangemang som förenar byarna genom att varje by bidrar med två invånare. Det blåvita rummet ger publik och deltagare skilda vägar och förvandlar en dödlig strid till ett evenemang som kan betraktas från bekväma läktare.",
    "tension": "Hur gör man dödliga strider till en koncernverksamhet? Genom att ordna byggnaden och arrangemanget så att byarna lämnar deltagarna och WeAB får intäkterna. Resultatet är ett exempel på hur långt en till synes neutral arkitektur kan bära ett mycket onyanserat beslut.",
    "ending": "Jag ser mig om innan jag går. Läktaren är utformad med stor omsorg om åskådarens upplevelse. Deltagarnas förhållanden får ett mindre utrymme i den offentliga beskrivningen, fast det är de som betalar det högsta priset för att arenan ska fylla sin funktion."
  },
  {
    "slug": "riksdagshusets-fasad",
    "format": "kultur",
    "title": "Fasaden som låter en institution synas",
    "summary": "Riksdagshusets arkitektur skapar en särskild tyngd åt ett uppdrag som annars lätt stannar i ord.",
    "image": "/images/werule-riksdagshuset.webp",
    "scene": "Den ljusa fasaden och de cyanblå detaljerna ger Riksdagshuset en tydlig närvaro i Huvudstaden. Byggnaden vill bli sedd.",
    "context": "Lokalen används av riksdagen men ägs av WeAB, vilket ger huset två sammanhängande berättelser: användning och förvaltning.",
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
