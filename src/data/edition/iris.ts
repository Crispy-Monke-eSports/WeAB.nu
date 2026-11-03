import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const irisArticles = makeMagazineArticles('iris-skymningsson', 70, [
  {
    "slug": "horizonten-fran-huvudstaden",
    "format": "kronika",
    "title": "Huvudstaden ser mindre självklar ut från horisonten",
    "summary": "När byggnaderna krymper i fjärran framträder landskapet, men också spåren av dem som har planerat dess vägar.",
    "image": "/images/huvudstaden-overview.webp",
    "scene": "Jag stannade en stund utanför de mest trafikerade stråken och såg hur Huvudstadens byggnader blev små mot resten av världen.",
    "context": "Staden ligger på en halvö och binds samman av verksamheter, offentliga byggnader och vanliga invånare som inte alltid delar samma planer.",
    "tension": "Det finns en särskild lockelse i att låta landskapet bestämma vägen helt på egen hand. Men även en vandring brukar förr eller senare behöva en bro.",
    "ending": "Kanske är det därför staden känns intressant på avstånd. Naturen gör vad den vill, medan människorna fortfarande försöker få passagerna att gå ihop."
  },
  {
    "slug": "en-resa-till-casinoon",
    "format": "reportage",
    "title": "Vid Casinoön möter kustlinjen nästa stora projekt",
    "summary": "WeGamble Island är fortfarande under utveckling, men landskapet antyder redan vilken sorts destination som planeras.",
    "image": "/images/construction-coast.webp",
    "scene": "Vid kusten är det lätt att först se vattnet och sedan byggnaden. Projektet vid Casinoön håller fortfarande på att ta form.",
    "context": "WeGamble planerar en framtida miljö för nöjen, och den kustnära placeringen gör att resan dit också blir en del av upplevelsen.",
    "tension": "Den som söker ett färdigt besöksmål får än så länge nöja sig med utsikten över en anläggning som ännu inte har öppnat.",
    "ending": "Jag går därifrån utan någon spelvinst, men med en tydlig bild av vad platsen kan bli. Det är kanske en rimlig första avkastning på ett kustbesök."
  },
  {
    "slug": "bedrockhalets-ovantade-utsikt",
    "format": "kultur",
    "title": "Ett hål i marken kan också vara en sevärdhet",
    "summary": "Det utgrävda chunket vid Sektion 1 förändrar hur man ser på en plats som annars mest skulle ha varit vanlig mark.",
    "image": "/images/bedrock-hole-exterior.webp",
    "scene": "Vid kanten av bedrockhålet stannar blicken längre än väntat. Där marken borde ha fortsatt finns ett djup som gör hela platsen annorlunda.",
    "context": "Det stora utgrävda chunket är dekorerat med material som får botten att se avsiktlig ut, som om själva frånvaron av mark vore en byggnad.",
    "tension": "Man kan invända att det hade varit enklare att lämna jorden i fred. Det är sant, men det hade också varit en betydligt mindre märklig utsikt.",
    "ending": "När jag går vidare tänker jag på hur mycket arbete det kan krävas för att skapa något som framför allt består av ett tomrum."
  },
  {
    "slug": "en-faro-utanfor-vagarna",
    "format": "kronika",
    "title": "På vägen mot får-ön blir kartan mer försiktig",
    "summary": "Vissa sevärdheter på servern gör mest intryck just därför att de ligger långt från de vanliga arbetsvägarna.",
    "image": "/images/huvudstaden-overview.webp",
    "scene": "Jag tittade på markeringen för Noas får-ö och började fundera på hur annorlunda världen känns när målet ligger långt från en vanlig station.",
    "context": "Ön finns som en egen waypoint på servern, men vägen dit är inte nödvändigtvis en del av den vardagliga infrastrukturen.",
    "tension": "Det är frestande att önska att varje utsikt ska få sin egen förbindelse. Men då skulle också varje avlägsen plats snabbt bli ett nytt underhållsärende.",
    "ending": "Jag tycker om att vissa resmål kräver eftertanke. De påminner om att världen är stor, samtidigt som man förstår varför de stora vägarna byggdes där folk faktiskt reser."
  }
] satisfies StorySeed[]);
