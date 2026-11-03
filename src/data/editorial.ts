import type { NewsItem } from './news.ts';

/**
 * Fiktiva läsartexter och redaktionella inslag för WeAB:s tidning.
 * Signaturerna är påhittade röster inom Minecraft-rollspelet.
 */
export type EditorialFormat = 'insandare' | 'ledare' | 'kronika' | 'reportage' | 'intervju' | 'ekonomi' | 'kultur' | 'guide';
export interface EditorialItem extends NewsItem {
  format: EditorialFormat;
  byline: string;
}
export const editorials: EditorialItem[] = [
  {
    "publishedAt": "2026-11-02",
    "slug": "insandare-ordning-sektion-tre",
    "format": "insandare",
    "type": "INSÄNDARE",
    "byline": "En nöjd invånare i Sektion 3",
    "title": "Fler staket skulle göra vår vardag enklare",
    "summary": "Den som aldrig har behövt välja väg förstår inte hur mycket trygghet en tydligt avgränsad passage kan ge.",
    "image": "/images/welivelaughlove-section-3-a-overview.webp",
    "alt": "Överblick över WeLiveLaughLoves bostadsområde i Sektion 3",
    "body": [
      "Till WeLiveLaughLove: tack för grinden vid vår gångväg. Jag menar det. I måndags gick min granne runt den av gammal vana, och vi skrattade båda åt att vi nu vet precis var den gamla stigen brukade ligga.",
      "Men varför sluta där? Mellan brunnen och de nya husen finns en öppen yta där folk ibland stannar och undrar vilken väg de ska ta. Ett litet staket skulle kunna visa var gången börjar. Det behövs inga höga väggar; bara en vänlig påminnelse som inte blåser bort.",
      "Min bror i ett annat distrikt tycker att vi får väl många instruktioner. Själv tycker jag om att kunna ge honom en enda anvisning när han hälsar på. Fler staket, tack, men gärna med en tydlig grind för besökare. / En nöjd invånare i Sektion 3"
    ]
  },
  {
    "publishedAt": "2026-11-02",
    "slug": "ledare-egendom-och-ansvar",
    "format": "ledare",
    "type": "LEDARE",
    "byline": "WeAB:s ledarredaktion",
    "title": "Samhället behöver tydliga ägare, inte fler diskussioner",
    "summary": "Riksdagshusets lokaler visar varför samhällsansvar och fastighetsförvaltning mår väl av att vara nära varandra.",
    "image": "/images/werule-riksdagshuset.webp",
    "alt": "Riksdagshuset i Huvudstaden med cyan detaljer",
    "body": [
      "När stadshusets lykta slocknar är det inte en åsikt. Den är släckt tills någon byter den. Det är därför ägandefrågan förtjänar en mindre högtidlig diskussion än den brukar få.",
      "Riksdagshuset är en offentlig mötesplats i en byggnad som ägs av WeAB. Den ordningen innebär inte att fastighetsägaren röstar i riksdagen. Däremot innebär den att WeRule kan ta emot felanmälan, planera underhåll och hålla entrén användbar även mellan sammanträdena.",
      "Det finns ett legitimt skäl att fråga hur långt en ägares inflytande bör sträcka sig. Svaret blir bättre om det utgår från det som faktiskt behöver avgöras: vem bekostar reparationen, vem beställer arbetet och vem kan använda lokalen under tiden? Ett ständigt samtal om själva väggen lagar den inte.",
      "Låt de förtroendevalda ägna mötestiden åt besluten. Låt den som äger huset ansvara för att mötesrummet står kvar även nästa gång. Det är ingen stor teori, men en ganska hållbar fördelning."
    ]
  },
  {
    "publishedAt": "2026-11-01",
    "slug": "insandare-en-handlare-racker",
    "format": "insandare",
    "type": "INSÄNDARE",
    "byline": "En regelbunden kund hos WeTrade",
    "title": "Jag vill kunna köpa min bok innan solen går ned",
    "summary": "En kund berättar varför ett tydligt sortiment ibland är värt mer än ännu en omväg till nästa handlare.",
    "image": "/images/wetrade-interior.webp",
    "alt": "Interiör från WeTrades handel med enchanted books",
    "body": [
      "Jag gick in hos WeTrade för att köpa en enda bok. På min lista stod Mending. På väg ut hade jag fortfarande min bok, men också ett svar på var jag hittar skydd till rustningen nästa gång. Det låter obetydligt tills man har ägnat en hel eftermiddag åt att leta efter fel bibliotekarie.",
      "Jag vill kunna jämföra priser, förstå vad jag får och gå hem. Det hjälper att sortimentet finns under samma tak och att handlarna inte hinner flytta mellan mina besök. Visst kan en annan säljare erbjuda ett annat pris. För mig skulle även resan dit behöva räknas.",
      "Så min högst vardagliga önskan är inte ett förbud mot andra handlare. Den är en påminnelse om att den bästa affären ibland är den jag faktiskt kan genomföra före solnedgången."
    ]
  },
  {
    "publishedAt": "2026-10-31",
    "slug": "reportage-inne-i-wesort",
    "format": "reportage",
    "type": "REPORTAGE",
    "byline": "Koncernens utsända",
    "title": "Bakom portarna till WeSort har varje block en bestämd väg",
    "summary": "Vi följer flödet från inkommande resurser till en lagerplats där inget lämnas åt det fria omdömet.",
    "image": "/images/wesort-interior.webp",
    "alt": "WeSort med ordnade sorteringssystem och lagring",
    "body": [
      "Det klickar bakom väggen i WeSort. En tratt tar emot, en annan skickar vidare och någonstans längre in faller ett föremål ned i sin kista med ett kort, ihåligt ljud. Hallen i Sektion 1 låter som om den sorterar också våra steg.",
      "En leverans från WeKill kommer in utan följeslagare. Först passerar materialet mottagningen, sedan väljer systemet kategori. Det som hör till WeSort Colors får ett annat slut än järnet. På skyltarna står inte vem som bar hit varan, utan vad nästa person ska kunna göra med den.",
      "Ett fack är tomt. Längre bort är ett annat nästan fullt. Den som bara ser kistor missar att skillnaden mellan dem är en prognos: här finns plats för nästa leverans, där måste någon snart bestämma om lagret ska växa.",
      "När jag går ut hörs klickandet fortfarande. Sorteringen har inte märkt att vi lämnat den. Det är förmodligen precis den sorts uppmärksamhet WeSort önskar sig av en maskin."
    ]
  },
  {
    "publishedAt": "2026-10-30",
    "slug": "kronika-kostnaden-for-genvagar",
    "format": "kronika",
    "type": "KRÖNIKA",
    "byline": "Koncernkrönikören",
    "title": "Den egna genvägen är sällan gratis för någon annan",
    "summary": "Ett par spontant lagda rälsblock kan kännas som frihet. Sedan ska någon underhålla dem.",
    "image": "/images/wetravel-huvudstaden-centralstation.webp",
    "alt": "Centralstation i Huvudstaden",
    "body": [
      "En ny räls genom skogen sparar kanske trettio steg. Jag har sett förslaget på kartan och förstår frestelsen. Men kartan visar inte vem som ska ersätta vagnen när den fastnar vid korsningen med huvudlinjen.",
      "För en trafikskribent är det inte genvägen som är intressant utan anslutningen. Har den skyltning åt båda hållen? Kan en resenär hitta tillbaka? Vem märker om ett block försvinner? Där brukar frihetsargumentet gå av tåget och lämna underhållsfrågan på perrongen.",
      "WeTravel kan också bygga fel. Skillnaden är att det finns någon att ringa och en plan att pröva ändringen mot. Jag välkomnar gärna den kortare resan den dag den också fungerar för nästa resenär."
    ]
  },
  {
    "publishedAt": "2026-10-28",
    "slug": "intervju-webox-fem-fragor",
    "format": "intervju",
    "type": "INTERVJU",
    "byline": "WeAB:s ekonomiredaktion",
    "title": "Fem frågor om vad som egentligen finns i WeBoxes lager",
    "summary": "Varför är tomma kistor en tillgång, och vem ska egentligen bestämma när de får öppnas? Vi bad koncernens lagringsfunktion förklara.",
    "image": "/images/webox-terminal.webp",
    "alt": "Terminal vid WeBoxes shulkerboxsystem",
    "body": [
      "Vi ställde fem korta frågor till WeBox om shulkerboxarna som samlas vid anslutningen till WeSort. Frågorna gäller inte hur många kistor som syns, utan vem som vet vad de ska användas till.",
      "Varför finns det tomma boxar? För att nästa leverans inte ska behöva vänta på nästa bygge. Vem bestämmer innehållet? WeSort sorterar materialet, WeBox ansvarar för märkning och förvaring när det kommer vidare.",
      "Kan jag ta ut det jag lämnade in? Det beror på om materialet fortfarande är avsett för ditt projekt eller redan reserverat för ett annat. Hur får jag besked? Genom en uttagsbegäran som anger vad du behöver och när.",
      "Och den femte frågan: vad händer med en box som ingen minns? Den blir ett inventeringsärende. Det är kanske det mest trösterika svaret i en verksamhet där varje låda rymmer 27 chanser att glömma något."
    ]
  },
  {
    "publishedAt": "2026-10-26",
    "slug": "ekonomi-en-diamant-ar-inte-bara-en-diamant",
    "format": "ekonomi",
    "type": "EKONOMI",
    "byline": "WeAB:s ekonomiredaktion",
    "title": "Varför diamanten behöver en organisation",
    "summary": "Resurser kan utvinnas på många sätt. Det är först genom ordnad handel, logistik och ägande som de blir riktigt användbara.",
    "image": "/images/weab-cyan-building.webp",
    "alt": "WeAB:s cyanmarkerade byggnad",
    "body": [
      "Tänk dig två diamanter. Den ena ligger i en privat kista. Den andra har avsatts för att köpa material till en ny station. Båda är lika hårda, men bara den senare har redan fått en plats i nästa års plan.",
      "Det betyder inte att en diamant måste lämna sin ägare för att bli värdefull. Det betyder att värdet beror på vad den kan göra. WeAB kan väga stationen mot en ny farm, mot ett större lager eller mot att låta materialet ligga kvar tills behovet är tydligare.",
      "Koncernens fördel är inte magi utan överblick. WeKill producerar, WeSort och WeBox redovisar flödet, WeTrade omsätter kunskap och WeTravel kan motivera en förbindelse när människor faktiskt behöver resa. Varje led har en kostnad. Men alternativet – flera värdefulla kistor utan gemensam plan – har också ett pris, även om ingen skickar fakturan.",
      "En diamant behöver alltså inte en organisation för att glittra. För att bli en del av något större behöver den däremot någon som ser mer än locket på kistan."
    ]
  },
  {
    "publishedAt": "2026-10-24",
    "slug": "kultur-arenan-och-aran",
    "format": "kultur",
    "type": "KULTUR & NÖJE",
    "byline": "WeAB:s kulturredaktion",
    "title": "En arena som gör varje distrikt större än sig självt",
    "summary": "Huvudstadens blåvita arena erbjuder mer än tävlingar. Den ger lokala ambitioner en gemensam scen och en huvudman.",
    "image": "/images/huvudstadens-arena-interior.webp",
    "alt": "Inre läktare och tävlingsytor i Huvudstadens arena",
    "body": [
      "Det blå och vita drar blicken mot mitten. Från en av de övre läktarna ser tävlingsytan nästan liten ut; där nere kommer den att kännas som hela världen för den som bär sitt distrikts färger.",
      "Huvudstadens arena är ännu inte ett minne av en viss seger. Den är ett löfte om att det ska gå att se vem som faktiskt vann. Passagerna skiljer deltagare från publik, så att båda kan ta sin plats utan att trängas om samma entré. Även förväntan har fått en arkitektur.",
      "En liten tävling hemma i byn kan ha sin egen charm. Men när flera distrikt möts behövs ett rum som alla känner igen och regler som gäller från samma startlinje. WeAB har byggt den ramen. Det återstår för byarna att fylla den med jubel, och kanske en lagom mängd missnöje när grannbyn vinner."
    ]
  },
  {
    "publishedAt": "2026-10-22",
    "slug": "guide-besok-weab",
    "format": "guide",
    "type": "GUIDE",
    "byline": "WeAB:s serviceredaktion",
    "title": "En promenad genom Sektion 1 som också löser dina ärenden",
    "summary": "Stationen, bokhandeln och lagerhallarna ligger på samma karta. Men se gärna något mer än bara inköpslistan.",
    "image": "/images/section-1-overview.webp",
    "alt": "Överblick över verksamheterna i Sektion 1",
    "body": [
      "Jag börjar hellre en utflykt vid stationen än vid ett schema. I Sektion 1 kan man gå från WeTravels skyltar till handeln, vidare mot sorteringshallarna och ändå ha tid att se stadshuset innan ljuset ändrar färg.",
      "För den som har ett praktiskt ärende: kontrollera först vilken station som faktiskt har anslutning dit du ska. Behöver du en enchanted book är WeTrade ett bra nästa stopp. Material från WeKill passerar WeSort; den som vill veta var något förvaras bör fråga efter rätt funktion hos WeBox i stället för att försöka öppna varje kista själv.",
      "Ta också en omväg som inte bara sparar tid. Se hur boendeområdenas gångar möter de större vägarna, eller stå en stund vid en offentlig byggnad som ingen behöver tänka på förrän dess dörr inte fungerar. WeAB har gjort det ovanligt enkelt att röra sig mellan så olika platser. Man får gärna uppskatta det utan att för den skull kalla varje promenad för ett affärsbesök."
    ]
  },
  {
    "publishedAt": "2026-10-18",
    "slug": "insandare-farmer-som-fungerar",
    "format": "insandare",
    "type": "INSÄNDARE",
    "byline": "En återkommande materialkund",
    "title": "Sluta klaga på att farmerna aldrig stänger",
    "summary": "Det är märkligt att beskriva stabil produktion som ett problem när resultatet är att material faktiskt finns när det behövs.",
    "image": "/images/wekill-iron-farm.webp",
    "alt": "WeKills järnfarm med konstruktion i Minecraft",
    "body": [
      "En järnfarm har inga öppettider. Det är inte samma sak som att den aldrig behöver tillsyn. Tvärtom: när produktionen pågår utan publik måste någon kontrollera att både utmatning och lagring hinner med.",
      "Som materialkund vill jag inte bygga en egen farm varje gång jag saknar järn. Jag vill veta att nästa leverans kommer och att den inte ligger kvar i en full kista bakom anläggningen. WeKill och WeSort har arbetsuppgifter som hör ihop men inte är identiska. Det märks först när någon av dem slutar fungera.",
      "Det talas ibland som om en farm som producerar hela natten vore ett samhällsproblem. För den som vill bygga nästa morgon är det snarare en fördel. Låt oss diskutera hur flödet ska förbättras i stället för att längta tillbaka till tiden då alla grävde efter samma block var för sig."
    ]
  }
];
