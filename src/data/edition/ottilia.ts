import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const ottiliaArticles = makeMagazineArticles('ottilia-glas', 30, [
  {
    "slug": "arenans-bla-vita-ljus",
    "format": "kultur",
    "title": "När Huvudstadens arena blir en egen berättelse",
    "summary": "De blåvita ytorna och läktarnas ordning ger distriktens tävlingar en scen som känns större än varje enskilt resultat.",
    "image": "/images/huvudstadens-arena-interior.webp",
    "scene": "Från läktaren faller blicken nästan automatiskt mot tävlingsytan. Det är som om hela byggnaden har fått uppgiften att samla människors uppmärksamhet.",
    "context": "Huvudstadens arena rymmer passager och publikytor som ger de olika distriktens representanter ett gemensamt sammanhang.",
    "tension": "Ett mindre arrangemang ute i en by hade kanske varit charmigt, men inte kunnat ge alla deltagare samma centrala plats.",
    "ending": "Det vackraste är kanske att arenan låter rivaliteten synas utan att den spiller ut över hela servern. Här får den en tydlig ram."
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
    "scene": "I WeSort är det inte en utsikt som först fångar blicken, utan upprepningen. Behållare, passager och linjer fortsätter i ordnad följd.",
    "context": "Hallens arkitektur utgår från vad föremålen ska göra. Den är därför ett slags karta över arbetet som utförs där varje dag.",
    "tension": "En sådan miljö riskerar att avfärdas som rent praktisk. Men själva tydligheten har en egen estetik som är svår att uppnå genom improvisation.",
    "ending": "Det är en ovanlig sorts skönhet: den behöver ingen högtidlig förklaring för att göra sitt arbete, bara fortsatt omsorg om ordningen."
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
