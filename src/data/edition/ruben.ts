import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const rubenArticles = makeMagazineArticles('ruben-kist', 35, [
  {
    "slug": "den-borttappade-kistans-sorg",
    "format": "kronika",
    "title": "Det tragiska livet som omärkt kista",
    "summary": "En låda utan tydligt syfte kan orsaka förvånansvärt mycket rörelse bland dem som försöker hitta rätt sak.",
    "image": "/images/webox-terminal.webp",
    "scene": "Jag hittade en kista som innehöll lite av varje och frågade mig vilket slags framtid den egentligen hade fått. Det var en besvärlig syn.",
    "context": "WeBox arbetar med att ge förvaringen struktur och låta resurserna fortsätta vara användbara även efter att den som lade dem där har gått vidare.",
    "tension": "Det finns de som tycker att lite oordning ger livet färg. De har sällan erbjudit sig att hitta en bortglömd shulkerbox när ett bygge redan väntar.",
    "ending": "En bra etikett är inget stort konstverk. Men den kan vara det mest uppskattade inslaget i en hall när någon verkligen behöver det som ligger bakom locket."
  },
  {
    "slug": "hur-en-farg-fick-en-egen-avdelning",
    "format": "reportage",
    "title": "Hur färgerna fick en alldeles egen avdelning",
    "summary": "WeSort Colors visar vad som händer när material av en viss sort får en tydlig destination.",
    "image": "/images/wesort-sign-original.webp",
    "scene": "En skylt och ett tydligt system berättar snart att färgerna inte längre behöver uppträda som en enda rörig familj i lagret.",
    "context": "WeSort Colors har en egen plats på servern, och uppdelningen gör att färgrelaterade resurser kan hanteras utan att ständigt blandas med allt annat.",
    "tension": "En del föremål hade säkert trivts med att ligga kvar i samma kista som sina gamla grannar. Men gemenskap är sällan ett tillräckligt sorteringskriterium.",
    "ending": "Det finns en stillsam rättvisa i att varje material hittar rätt hem. Den som senare öppnar kistan behöver åtminstone inte fråga varför innehållet bytt färg."
  },
  {
    "slug": "shulkerboxens-lilla-hemlighet",
    "format": "analys",
    "title": "Varför en shulkerbox inte är ett litet lager",
    "summary": "Det är förvånansvärt enkelt att underskatta vad ett antal flyttbara förvaringsenheter gör med ordningen.",
    "image": "/images/webox-terminal.webp",
    "scene": "En shulkerbox ser ut som en vanlig behållare med ovanligt gott självförtroende. Den kan dock bära material vidare utan att allt först behöver packas om.",
    "context": "WeBox arbetar med sådana enheter som en del av ett större system, där förvaringens plats och ansvar behöver kunna följas även när kistan flyttas.",
    "tension": "Om varje enhet får sitt eget hemliga innehåll blir det snabbt svårt att avgöra vad som faktiskt finns tillgängligt för nästa projekt.",
    "ending": "Det är därför jag gärna ser en låda som en del av en kedja snarare än som en ensam möbel. Även en behållare behöver känna sin plats i världen."
  },
  {
    "slug": "ett-fack-for-framtiden",
    "format": "ekonomi",
    "title": "Varför det tomma facket har ett uppdrag",
    "summary": "Det lediga utrymmet i ett lager är ingen pinsam tystnad, utan en chans att slippa bygga om i sista stund.",
    "image": "/images/wesort-interior.webp",
    "scene": "Ett tomt fack i en sorteringshall kan se ensamt ut. Man får nästan lust att lägga dit något bara för att det ska känna sig behövt.",
    "context": "Men WeSort måste kunna ta emot nya material även när dagens sortering redan fungerar. Ett sådant utrymme är därför en planerad möjlighet.",
    "tension": "Den som vill fylla varje plats genast kan få ett vackert fullt lager. Frågan är vad som sedan händer när WeKill levererar nästa omgång resurser.",
    "ending": "Jag skulle hellre lämna några hyllor i fred tills de verkligen behövs. Tomheten blir då inte brist på framgång, utan bevis på framförhållning."
  },
  {
    "slug": "varje-block-har-en-adress",
    "format": "guide",
    "title": "Så slutar du leta efter samma block två gånger",
    "summary": "Det finns ett enkelt första steg mot ordning: bestäm var saken ska ligga innan den ställs ifrån dig.",
    "image": "/images/wesort-interior.webp",
    "scene": "Alla känner igen stunden då ett viktigt material verkar ha försvunnit. Vanligen är det inte borta, utan ligger bara mycket övertygande i fel kista.",
    "context": "WeSort visar vad som händer när varje kategori får en tydlig väg genom systemet. Den första sorteringen gör varje senare sökning betydligt kortare.",
    "tension": "Det går självklart att skjuta upp ordningen till nästa gång. Men det är nästan alltid just nästa gång man behöver materialet så brådskande att städningen glöms bort.",
    "ending": "Börja därför med ett fåtal tydliga kategorier och märk dem ordentligt. Om föremålen själva fick välja skulle de sannolikt uppskatta att slippa bli borttappade."
  }
] satisfies StorySeed[]);
