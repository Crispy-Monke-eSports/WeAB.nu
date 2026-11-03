import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const martaArticles = makeMagazineArticles('marta-ek', 10, [
  {
    "slug": "grinden-vid-sektion-tre",
    "format": "lokalt",
    "title": "Grinden på gångvägen blev snabbt en självklarhet",
    "summary": "En liten förändring i Sektion 3 fick fler grannar att lägga märke till hur de gemensamma passagerna fungerar.",
    "image": "/images/welivelaughlove-section-3-a-overview.webp",
    "scene": "En morgon mötte jag en ny grind på vägen till mina vanliga ärenden. Två grannar stod bredvid och försökte minnas hur de tidigare brukade gå genom området.",
    "context": "Efter några dagar hade alla lärt sig vilken passage som var avsedd för vad. Det gav en stilla ordning åt morgnarna och gjorde det lättare att planera när man behövde gå hemifrån.",
    "tension": "Det fanns förstås frågor om varför vägen inte kunde fortsätta vara öppen. Jag förstod dem, men såg också hur den nya rutten hjälpte oss att undvika att gå genom varandras utrymmen.",
    "ending": "Nu lägger jag knappast märke till grinden längre. Det är nog det tydligaste tecknet på att en förändring har blivit en vanlig del av livet i området."
  },
  {
    "slug": "den-lilla-lyktan",
    "format": "lokalt",
    "title": "Den lilla lyktan som förändrade kvällspromenaden",
    "summary": "I Sektion 1 kan en välplacerad ljuskälla få en välbekant stig att kännas märkbart enklare att följa.",
    "image": "/images/welivelaughlove-section-1-b-overview.webp",
    "scene": "Jag kom hem efter skymningen och märkte att gången mellan husen var lättare att urskilja. Ljuset över de närmaste blocken gjorde mer skillnad än jag först förstod.",
    "context": "Det är lätt att tala om stora byggnader och glömma det som finns mellan dem. När en passage är tydlig blir också vardagen mindre krånglig för oss som går där varje dag.",
    "tension": "Någon föreslog att alla kunde ordna belysning framför sitt eget hus. Det låter enkelt, men då skulle ingen ansvara för de mörkaste bitarna som faktiskt ligger mitt emellan.",
    "ending": "Jag hoppas att förvaltningen fortsätter se sådana detaljer. En lykta behöver inte bli en stor nyhet, men den kan göra många vanliga kvällar bättre."
  },
  {
    "slug": "ett-besok-vid-stadshuset",
    "format": "insandare",
    "title": "Tack för att stadshuset bara står där det ska",
    "summary": "Alla byggnader behöver inte överraska. Ibland är det gott nog att de går att hitta och fortfarande fungerar.",
    "image": "/images/werule-sektion-1-stadshus.webp",
    "scene": "Jag passerar stadshuset i Sektion 1 ganska ofta. Även när jag inte har något ärende tycker jag om att veta var byggnaden står och att den fortsätter fylla sin vanliga uppgift.",
    "context": "Det finns en trygghet i att offentliga lokaler hålls efter. De behöver inte ständigt förändras för att vara viktiga, och det märks först när något faktiskt slutar fungera.",
    "tension": "En granne undrade om man verkligen behöver en särskild organisation för att sköta fastigheten. Jag tänker snarare att någon måste ha den uppgiften även när den verkar osynlig.",
    "ending": "WeRule får gärna fortsätta ta hand om byggnaden. Jag uppskattar mest att jag kan använda området utan att först behöva sätta mig in i underhållets alla frågor."
  },
  {
    "slug": "flytta-till-ny-avdelning",
    "format": "guide",
    "title": "Fyra vardagsråd till den som flyttar till Sektion 3",
    "summary": "Det är lätt att trivas bättre när man tidigt lär känna passagerna, kontaktvägarna och de gemensamma funktionerna.",
    "image": "/images/welivelaughlove-section-3-a-overview.webp",
    "scene": "När jag lärde känna Sektion 3 tittade jag först på husen och de små detaljerna på gårdarna. Efter några dagar insåg jag att vägarna mellan byggnaderna spelade minst lika stor roll.",
    "context": "Jag råder nya grannar att följa skyltarna, fråga var gemensamma funktioner finns och ta reda på vem som kan hjälpa till när något behöver ses över. Det sparar mycket vardaglig tvekan.",
    "tension": "Det kan förstås kännas ovant om man är van att gå precis där man vill. Jag tycker att den känslan går över när man upptäcker att områdets rutiner också gör det lättare att hitta hem.",
    "ending": "Ge det lite tid, är mitt sista råd. WeLiveLaughLove har en tydlig tanke med miljöerna, och de små fördelarna blir ofta tydligare när man faktiskt har bott där ett tag."
  },
  {
    "slug": "nagra-ord-om-kon",
    "format": "insandare",
    "title": "En ordentlig kö är också en form av service",
    "summary": "För kunden som vill komma fram snabbt är det frestande att glömma värdet av att alla andra vet vem som är näst på tur.",
    "image": "/images/wetrade-interior.webp",
    "scene": "Jag stod hos WeTrade med en lista över sådant jag behövde till mitt senaste bygge. Framför mig väntade flera andra kunder och jag märkte hur jag började leta efter en genväg.",
    "context": "Men alla som stod där hade sina egna ärenden. Just därför var det bra att ordningen inte byggde på vem som ropade högst eller såg mest angelägen ut den dagen.",
    "tension": "Det kan vara irriterande att vänta när man redan vet vad man vill köpa. Ändå är en tydlig kö ofta mindre tidskrävande än att springa mellan flera olika handlare utan att veta deras sortiment.",
    "ending": "Jag hoppas att WeTrade fortsätter förbättra servicen. För min del är det en lättnad att veta vad som gäller, även när det innebär att någon annan får handla före mig."
  }
] satisfies StorySeed[]);
