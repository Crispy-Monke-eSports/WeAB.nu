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
    "summary": "I End ligger en anläggning där erfarenhet är den viktiga leveransen. Angiven kapacitet: från nivå 0 till minst 33 på omkring en minut.",
    "image": "/images/wekill-enderman-farm.webp",
    "scene": "Vägen till WeKills endermanfarm slutar vid en plattform långt ute i End. Här är erfarenhet den leverans som besökaren märker först. Anläggningens angivna kapacitet är att ta en användare från nivå 0 till minst 33 på omkring en minut.",
    "context": "En sådan uppgift beskriver ett tillfälle vid farmen, inte ett lager som fylls med 33 nivåer per minut. Erfarenhet behöver samlas av den som står på plats, medan föremål från driften måste tas om hand i sitt eget flöde.",
    "tension": "WeAB har ännu inte redovisat en egen tidsmätning för nivåökningen. Resultatet beror också på var användaren börjar och om anläggningen kan hållas i gång utan avbrott. En snabb minut säger mindre om nyttan om nästa besökare möts av ett stopp.",
    "ending": "WeKill vill därför följa både tillgängligheten och det som lämnar plattformen. Avståndet till Huvudstaden kan vara stort; den del av arbetet som sker här får ändå inte försvinna ur koncernens rapportering."
  },
  {
    "slug": "sockerrorens-stilla-arbete",
    "format": "analys",
    "title": "Sockerrören växer utan att fråga efter arbetstid",
    "summary": "Kapaciteten anges till 1 300 sockerrör i timmen. Det intressanta för WeKill är vad uppsamlingen faktiskt kan ta emot.",
    "image": "/images/wekill-sugarcane-farm.webp",
    "scene": "Bakom glaset växer sockerrören i ordnade rader. WeKill anger kapaciteten till 1 300 sockerrör i timmen. Det är en siffra som kräver mer än bördig jord: skörden ska också samlas upp utan att något blir kvar längs rälsen.",
    "context": "Pistons skördar odlingen och trattvagnar rör sig längs spåren för att fånga upp det som faller. För den som står utanför glaset ser allt stilla ut tills ett helt led av sockerrör försvinner på en gång.",
    "tension": "Den angivna kapaciteten är ännu inte ett uppmätt driftresultat från WeAB:s anläggning. En vagn som stannar eller en full kista kan ge en annan skörd än den som står i planeringen. Ett kort besök vid glasväggen säger heller inte hur systemet klarar flera timmars arbete.",
    "ending": "Nästa kontroll börjar därför i mottagningen: hur mycket sockerrör kommer faktiskt fram, och kan WeSort ta emot det? Först då blir farmens takt användbar för resten av koncernen."
  },
  {
    "slug": "guldfarmens-bortglomda-kedja",
    "format": "ekonomi",
    "title": "Guld är användbart först när någon hämtar det",
    "summary": "Över 1 200 guldtackor i timmen är farmens angivna kapacitet. Erfarenhetsuttaget fungerar däremot inte i nuläget.",
    "image": "/images/wekill-gold-farm.webp",
    "scene": "WeKills guldfarm reser sig ovanför Nether med våningar av magmablock. Kapaciteten anges till över 1 200 guldtackor i timmen. Något fungerande uttag av erfarenhet finns inte i nuläget.",
    "context": "Farmen behöver rätt förutsättningar för att zombifierade piglins ska ta sig till uppsamlingsdelen. Därifrån måste guldet vidare till lagring och sortering. Den som bara ser de lysande planen missar hur stor del av arbetet som pågår vid kistorna.",
    "tension": "Kapacitet är inte samma sak som leverans. En full uppsamlingskista eller en bruten transportväg kan begränsa resultatet även om anläggningen fortsätter arbeta. WeKill ska heller inte räkna erfarenhet som en resurs när uttaget inte fungerar.",
    "ending": "Guldet behöver nå WeSort innan det kan bokföras som användbar leverans. Den angivna kapaciteten ger verksamheten något att planera efter, men varje faktiskt driftpass måste redovisas för sig."
  },
  {
    "slug": "shulkerfarmens-betydelse",
    "format": "reportage",
    "title": "Från shulkerfarm till WeBox är avståndet en affärsfråga",
    "summary": "Farmen ger skalen, inte färdiga boxar. Först när hela flödet till WeBox är uppmätt kan koncernen ange en egen produktionstakt.",
    "image": "/images/wekill-shulker-farm.webp",
    "scene": "Det som lämnar WeKills shulkerfarm är skal. Två skal och en kista behövs för att tillverka en shulkerbox; farmen skickar alltså inte färdiga förvaringslådor direkt till WeBox.",
    "context": "WeKill ansvarar för anläggningen och WeBox använder de färdiga boxarna i sitt lagersystem. Mellan dem behövs både vanliga kistor och ett arbetsmoment där skalen blir användbara behållare. Att räkna skal som färdiga boxar skulle ge lagret ett överskott som bara finns på papperet.",
    "tension": "Produktionen är inte garanterad att pågå utan avbrott. En shulker kan behöva ersättas och portalerna kräver tillsyn. WeKill förbereder därför påfyllning och underhåll i stället för att lova att varje driftpass fortsätter av sig självt.",
    "ending": "WeBox behöver veta hur många användbara boxar som verkligen kan tas emot, inte hur många skal som borde finnas i teorin. Först när den egna driften och stegen därefter har följts upp kan koncernen sätta en siffra på leveransen."
  }
] satisfies StorySeed[]);
