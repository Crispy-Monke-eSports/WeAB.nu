import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const bjornArticles = makeMagazineArticles('bjorn-ralsund', 65, [
  {
    "slug": "fem-fragor-om-wesort",
    "format": "intervju",
    "title": "Fem frågor om lager som faktiskt räcker till",
    "summary": "Kapacitet handlar om vad som händer när nästa leverans kommer.",
    "image": "/images/wesort-interior.webp",
    "scene": "Vi kommer in när en leverans sten väntar vid mottagningen. Jag frågar lageransvarig: Vad gör ni om kistan för sten redan är full? Svaret är att flödet tillfälligt leds till en märkt reservplats, inte till närmaste lediga låda.",
    "context": "Vem märker att reservplatsen också börjar fyllas? WeSort för en lista över avvikelser vid varje mottagning. Två upprepade omdirigeringar för samma vara blir en signal att planera mer utrymme.",
    "tension": "Kan ni inte bara bygga ut allt på en gång? Ansvarig pekar på de tomma facken: utrymme kostar också underhåll, och fel sorts fack löser inte en full kista för sten.",
    "ending": "Vad händer med leveransen som väntar just nu? Den får sin märkning och går vidare medan vi pratar. Jag får inget löfte om ett oändligt lager, men ett påtagligt besked om vem som tar nästa steg."
  },
  {
    "slug": "fragorna-vid-centralstationen",
    "format": "intervju",
    "title": "Vem ansvarar när resan behöver ändras?",
    "summary": "Vi följer vad en stationsförändring betyder för dem som faktiskt ska komma fram.",
    "image": "/images/wetravel-huvudstaden-centralstation.webp",
    "scene": "På plattformen i Huvudstaden frågar jag WeTravels trafikfunktion vem som berättar att en anslutning inte går att använda. Stationspersonalen ska ge beskedet här, blir svaret, inte först vid nästa spår.",
    "context": "Och den som redan har åkt? Då behöver även skyltarna i Sektion 1 uppdateras. Två stationer ingår i samma resa, även när felet sitter vid bara den ena.",
    "tension": "Jag pekar på en karta där den gamla vägen fortfarande syns. Den visar nätets sträckning, förklarar funktionen, men inte alltid dagens driftläge. Det är en lucka som de nya anslagen ska täcka.",
    "ending": "När får vi veta att trafiken går igen? När spåret är kontrollerat, inte när skylten är tryckt. Det är ett mindre tilltalande svar än ett klockslag, men betydligt mer användbart vid nästa försening."
  },
  {
    "slug": "nar-rutinen-inte-racker",
    "format": "intervju",
    "title": "Vad gör WeRule när det vanliga inte räcker?",
    "summary": "Ett samtal om rutinerna som faktiskt måste fungera även när något oväntat händer.",
    "image": "/images/werule-sektion-1-stadshus.webp",
    "scene": "Tänk om stadshusets dörr inte går att stänga precis före ett sammanträde? Jag får svaret att felanmälan då går direkt till WeRules fastighetsjour, inte via nästa ordinarie protokollmöte.",
    "context": "Vem bestämmer om mötet kan fortsätta? Den som leder mötet avgör sitt program; fastighetsjouren bedömer om lokalen är säker att använda. De två beskeden behöver inte skrivas på samma blankett.",
    "tension": "Och om det bara är en gnisslande dörr? Då får ärendet ett nummer och tas vid ordinarie tillsyn. Brådskande får inte bli en synonym för irriterande, påpekar den ansvariga funktionen.",
    "ending": "Vi avslutar vid samma dörr, som fungerar utmärkt. Det är inte där intervjun blir intressant. Det intressanta är att även en tänkt avvikelse har fått en adress."
  },
  {
    "slug": "utlamning-fran-webox",
    "format": "intervju",
    "title": "Tre frågor om vem som öppnar rätt shulkerbox",
    "summary": "Det finns en skillnad mellan att hitta en resurs och att veta hur den ska lämnas vidare.",
    "image": "/images/webox-terminal.webp",
    "scene": "Jag pekar på en shulkerbox vid WeBoxes terminal. Kan jag ta den? Inte utifrån var den står, svarar lagerfunktionen. Först behöver vi veta om innehållet är fritt eller redan reserverat.",
    "context": "Hur ser ni skillnaden? Märkningen följer boxen från WeSort. Den som en gång ställde den på hyllan ska inte behöva vara närvarande för att materialet ska kunna användas.",
    "tension": "Två byggprojekt vill ha samma glas. Vem går först? WeBox jämför tidigare reservationer och när leveranserna behövs. Ingen av dem får företräde bara för att deras representant står närmast dörren.",
    "ending": "När får den andre ett svar? Så snart materialets nästa användning är bekräftad. Det är färre sekunder än det tar att öppna alla boxar, men mer administration än att bara ta den första."
  },
  {
    "slug": "fragorna-om-arenan",
    "format": "intervju",
    "title": "Fem frågor som Huvudstadens arena väcker",
    "summary": "Publikens väg genom arenan är tydlig, men nästa arrangemang måste fortfarande planeras.",
    "image": "/images/huvudstadens-arena-laktare.webp",
    "scene": "Vem får gå genom den breda porten under läktaren? Vi frågar arenans planeringsfunktion på plats. Deltagare och funktionärer, är svaret; publiken leds från entrén till sina egna gångar.",
    "context": "Var sitter byarnas supportrar? Det avgörs för varje arrangemang. Läktaren har plats för flera distrikt, men en fast fördelning innan anmälningarna kommit in vore mer ritning än rättvisa.",
    "tension": "Kan vi redan boka en final? Nej. Arenan är byggd, men tävlingsregler, program och datum behöver fastställas innan någon kan sälja ett löfte om resultat.",
    "ending": "Vad är då klart? Golvet, passagerna och huvudmannaskapet. Jag ser mig om från läktaren och konstaterar att det åtminstone är tre svar fler än man brukar få av en tom tävlingsyta."
  }
] satisfies StorySeed[]);
