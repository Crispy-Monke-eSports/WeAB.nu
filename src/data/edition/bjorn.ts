import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const bjornArticles = makeMagazineArticles('bjorn-ralsund', 65, [
  {
    "slug": "fem-fragor-om-wesort",
    "format": "intervju",
    "title": "Fem frågor om lager som faktiskt räcker till",
    "summary": "Kapacitet handlar om vad som händer när nästa leverans kommer.",
    "image": "/images/wesort-interior.webp",
    "scene": "Jag börjar med den enkla frågan om vad som händer när rätt kista redan är full och nästa leverans står på tur.",
    "context": "WeSort behöver ta emot material från flera anläggningar utan att sorteringsflödet fastnar i varje enskild behållare.",
    "tension": "En följdfråga gäller vem som märker att kapaciteten är för liten innan hela anläggningen tvingas stanna.",
    "ending": "Det praktiska svaret är en plan för både avvikelser och utbyggnad. Då blir lagret mer än en rad fyllda kistor."
  },
  {
    "slug": "fragorna-vid-centralstationen",
    "format": "intervju",
    "title": "Vem ansvarar när resan behöver ändras?",
    "summary": "Vi följer vad en stationsförändring betyder för dem som faktiskt ska komma fram.",
    "image": "/images/wetravel-huvudstaden-centralstation.webp",
    "scene": "Jag frågar direkt vem som ger besked när en resväg inte längre fungerar som resenären hade förväntat sig.",
    "context": "WeTravel arbetar med stationer och förbindelser som påverkar varandra, även när förändringen sker på bara en plats.",
    "tension": "Det är lätt att inviga en ny linje. Svårare är att förklara en oväntad omväg för den som redan står på plattformen.",
    "ending": "En tydlig trafikorganisation behöver därför ansvara för hela vägen, inklusive den information som hjälper nästa resenär."
  },
  {
    "slug": "nar-rutinen-inte-racker",
    "format": "intervju",
    "title": "Vad gör WeRule när det vanliga inte räcker?",
    "summary": "Ett samtal om rutinerna som faktiskt måste fungera även när något oväntat händer.",
    "image": "/images/werule-sektion-1-stadshus.webp",
    "scene": "Jag börjar med ett vardagligt undantag: vad händer om en byggnad behöver ses över snabbare än planerat?",
    "context": "WeRule ansvarar för lokaler vars användning kräver kontinuitet. Därför behöver även brådskande frågor ha tydliga kontaktvägar.",
    "tension": "En vanlig rutin är användbar bara om det går att förstå hur man ska agera när ett ärende inte passar den första kategorin.",
    "ending": "Till sist handlar det om vem som kan fatta nästa beslut och följa upp arbetet. Det är där organisationens tydlighet prövas."
  },
  {
    "slug": "utlamning-fran-webox",
    "format": "intervju",
    "title": "Tre frågor om vem som öppnar rätt shulkerbox",
    "summary": "Det finns en skillnad mellan att hitta en resurs och att veta hur den ska lämnas vidare.",
    "image": "/images/webox-terminal.webp",
    "scene": "Jag frågar vad som avgör om material i ett förråd är tillgängligt för nästa steg eller fortfarande behöver ligga kvar.",
    "context": "WeBox arbetar med förvaring där innehåll och ansvar ska vara begripliga även när den som ställde dit kistan inte längre är där.",
    "tension": "När två verksamheter behöver samma sak räcker det inte att båda kan peka på lådan. Någon måste bedöma användningen.",
    "ending": "Ett tydligt besked kan kännas formellt, men det gör också att nästa person vet hur samma fråga ska behandlas."
  },
  {
    "slug": "fragorna-om-arenan",
    "format": "intervju",
    "title": "Fem frågor som Huvudstadens arena väcker",
    "summary": "Publikens väg genom arenan är tydlig, men nästa arrangemang måste fortfarande planeras.",
    "image": "/images/huvudstadens-arena-laktare.webp",
    "scene": "Jag börjar på läktaren med frågan hur publiken ska kunna följa distriktens tävlingar utan att alla trängs på samma passage.",
    "context": "Huvudstadens arena har en central tävlingsyta och särskilda gångar, vilket ger en praktisk grund för kommande arrangemang.",
    "tension": "Det är viktigt att skilja byggnadens möjligheter från vad som faktiskt har meddelats. Några kommande datum eller resultat är ännu inte publicerade.",
    "ending": "Nästa svar får komma i ett officiellt program. Fram till dess berättar själva arenan hur en gemensam tävling skulle kunna organiseras."
  }
] satisfies StorySeed[]);
