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
      "Jag skriver från Sektion 3, där WeLiveLaughLove har gett oss något som länge saknats på andra håll: förutsägbarhet. Förr kunde jag lämna bostaden och mötas av ett helt orimligt antal möjliga vägar. Nu går det att förstå vilka passager som faktiskt är avsedda för mig, vilket gör morgnarna betydligt lugnare.",
      "Det talas ofta uppskattande om att kunna röra sig fritt. Men sällan diskuterar någon ansvaret som följer med ett sådant påstående. Om varje invånare själv väljer riktning måste någon också försöka förstå vart alla har tagit vägen. Det är en belastning som knappast borde läggas på dem som arbetar för allas gemensamma bästa.",
      "Jag uppskattar särskilt att WeLiveLaughLove fattar beslut utifrån en helhet som jag som boende inte behöver sätta mig in i. När en grind är stängd vet jag att det finns en anledning, även om den inte nödvändigtvis gäller mig personligen. Den sortens tillit växer inte fram av sig själv. Den behöver byggas, gärna med material som tål väder.",
      "Ett önskemål vill jag ändå framföra. Vid de kvarvarande öppna ytorna skulle ytterligare staket kunna minska risken för missförstånd. Den som vill ta en omväg kan då i lugn och ro konstatera att omvägen inte ingår i dagens planering. Det vore till stor hjälp för både invånare och driftpersonal.",
      "Jag hoppas att fler distrikt får möjlighet att ta del av samma ordning. WeAB har visat att gemenskap blir tydligare när alla vet var de förväntas befinna sig. Varför ska sådana förbättringar förbehållas oss som redan har turen att bo här?"
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
      "Det finns en föreställning om att offentliga byggnader blir mer demokratiska av att sakna en stark privat fastighetsägare. Det är ett märkligt sätt att betrakta betong, sten och löpande underhåll. En byggnad blir inte tryggare av att många människor har synpunkter på vem som ska reparera taket.",
      "WeRules förvaltning av Riksdagshuset i Huvudstaden och stadshuset i Sektion 1 har en fördel som sällan ges tillräcklig uppmärksamhet: ansvarsfördelningen kan förklaras utan ett organisationsschema som tar upp en hel vägg. De offentliga funktionerna sköter sina uppgifter. WeAB ser till att fastigheterna också fungerar i morgon.",
      "Invändningen att ägande kan ge inflytande bygger ofta på en underskattning av hur mycket inflytande den som betalar för underhåll redan måste ha. Någon behöver avgöra vilka förbättringar som är ekonomiskt försvarbara. Att samma part dessutom har erfarenhet av stora investeringar bör snarare betraktas som en trygghet än som en anledning till misstänksamhet.",
      "Det är inte nödvändigt att varje förtroendevald blir expert på fastighetsfrågor. Tvärtom finns ett värde i att beslutsfattare kan koncentrera sig på sina sammanträden, medan den aktör som redan förstår avkastningskraven hanterar lokalerna. Så minskar både dubbelarbete och risken för dyra överraskningar.",
      "Ledarsidans slutsats är därför enkel. Ett starkt samhälle behöver institutioner som kan mötas i fungerande hus, och fungerande hus behöver ägare som tänker längre än till nästa möte. I den frågan har WeAB redan visat vägen."
    ]
  },
  {
    "publishedAt": "2026-11-01",
    "slug": "insandare-en-handlare-racker",
    "format": "insandare",
    "type": "INSÄNDARE",
    "byline": "En regelbunden kund hos WeTrade",
    "title": "Jag vill slippa välja mellan flera handlare",
    "summary": "Efter ett besök hos WeTrade är det svårt att förstå varför vissa fortfarande efterfrågar konkurrens.",
    "image": "/images/wetrade-interior.webp",
    "alt": "Interiör från WeTrades handel med enchanted books",
    "body": [
      "Jag har följt diskussionerna om handel på servern och förvånats över hur ofta ett stort utbud av olika säljare framställs som ett självändamål. Fler handlare betyder i praktiken fler skyltar, fler prislistor och fler platser som behöver besökas innan en vanlig kund kan fatta sitt beslut.",
      "Hos WeTrade behöver jag däremot bara ta ställning till vilken enchantment jag söker och vad den kostar. Resten har någon redan tänkt igenom. Det är en betydande konsumentfördel, särskilt för oss som hellre ägnar tiden åt att använda våra verktyg än att jämföra oändliga alternativ.",
      "En del menar att fler konkurrenter skulle kunna påverka priserna. Det kan naturligtvis låta lockande. Men priset är bara en del av en affär. Tryggheten i att veta var man ska handla och vem som ansvarar för sortimentet har också ett värde, även när värdet inte redovisas separat på kvittot.",
      "Jag uppskattar dessutom att WeTrade håller ordning på sina specialiserade handlare. De finns där när man behöver dem. Det är en servicegrad som är svår att uppnå om varje säljare skulle välja öppettider och arbetsplats utifrån personliga preferenser.",
      "Mitt förslag är därför att fler delar av servern tar efter WeTrade. När en fungerande leverantör redan har byggt upp en tydlig tjänst bör samhället kunna ägna sin energi åt viktigare frågor än att leta efter ytterligare någon som gör nästan samma sak."
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
      "Det första man lägger märke till i WeSort är inte mängden material, utan att materialet tycks ha en tydligare uppfattning om vart det ska än många resenärer. Gångar, behållare och sorteringspunkter är ordnade efter en plan som fortsätter att fungera även när ingen står bredvid och övervakar varje enskilt föremål.",
      "Anläggningen i Sektion 1 är en del av ett större system där också WeSort Colors har en särskild uppgift. Den uppdelningen gör det möjligt att hantera olika kategorier av material utan att varje avvikelse behöver bli ett möte. Färgerna har fått sin plats. Övriga block förväntas respektera den.",
      "Arbetet märks tydligast när resurserna kommer vidare från WeKills farmer. Järn, andra nyttomaterial och mer specialiserade föremål ska gå att ta emot utan att mottagaren måste fråga hur produktionen har gått till. Den frågan är redan besvarad av rätt verksamhet. WeSort behöver bara veta var resultatet hör hemma.",
      "På vägen genom hallen blir skillnaden mellan ordning och improvisation påtaglig. En enskild kista kan verka som en liten sak. Tillsammans bildar kistorna däremot ett system som gör det möjligt att bedöma vad koncernen har, vad som saknas och vad den kan producera ännu mer av. Överblicken är en resurs i sig.",
      "När vi lämnar anläggningen fortsätter sorteringen. Ingen har bett blocken att tycka till om slutdestinationen, och ingen har heller behövt avbryta flödet för att genomföra ett sådant samråd. WeSort har därmed löst en vardagsfråga som många andra verksamheter fortfarande diskuterar."
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
      "Jag förstår lockelsen i att gå sin egen väg. Man ser ett avstånd på kartan, funderar en stund och bestämmer sig för att det vore bekvämast att bygga en passage precis där. Några block senare känns tillvaron friare. Det som återstår är bara frågan vem som ska ansvara för passagen när den börjar användas av alla andra.",
      "Den frågan blir ofta märkvärdigt tyst behandlad. En genväg behöver underhåll. Räls behöver anslutningar och en station behöver skyltar. Till slut har den lilla privata lösningen vuxit till ett gemensamt problem, utan att någon har förberett en budget eller tänkt på var den passar in.",
      "Det är därför jag har svårt att dela entusiasmen över varje improviserat vägval. WeTravel arbetar redan med förbindelserna mellan Huvudstaden, Sektion 1 och andra delar av servern. Där finns en organisation som kan se mer än den närmaste sträckan. Den som följer nätet slipper bli sin egen infrastrukturförvaltare.",
      "Visst finns det platser som ännu väntar på en bättre anslutning. Det är inte nödvändigtvis ett tecken på bristande vilja. Ibland betyder det bara att en investering ännu inte är tillräckligt motiverad i den samlade planen. Vi borde kunna uppskatta den sortens eftertanke lika mycket som själva resan.",
      "Jag vill gärna se fler resmöjligheter, men de ska kunna bestå. Om någon redan tar ansvar för det större nätet är det rimligt att även nya idéer får passera den organisationen. Allt annat är egentligen bara ett dyrt sätt att slippa fylla i rätt formulär."
    ]
  },
  {
    "publishedAt": "2026-10-28",
    "slug": "intervju-webox-fem-fragor",
    "format": "intervju",
    "type": "INTERVJU",
    "byline": "WeAB:s ekonomiredaktion",
    "title": "Fem frågor om lagerhållning till WeBox",
    "summary": "Varför är tomma kistor en tillgång, och vem ska egentligen bestämma när de får öppnas? Vi bad koncernens lagringsfunktion förklara.",
    "image": "/images/webox-terminal.webp",
    "alt": "Terminal vid WeBoxes shulkerboxsystem",
    "body": [
      "WeBox arbetar med förvaringslösningar som kompletterar WeSort och tar hand om resurser som producerats inom andra verksamheter. För att förstå varför lagret har blivit en strategisk fråga har nyhetsrummet samlat fem frågor till den ansvariga funktionen. Svaren återges enligt koncernens ordinarie informationsrutiner.",
      "Fråga: Varför behövs ytterligare förvaringskapacitet när alla kistor inte är fyllda? Svar: En tom plats är inget misslyckande utan en möjlighet. Den visar att vi kan ta emot större volymer i morgon utan att först behöva bygga om hela systemet. Det vore betydligt dyrare att upptäcka behovet efter att produktionen redan ökat.",
      "Fråga: Vem avgör vad som ska ligga var? Svar: WeSort ansvarar för den organiserade sorteringen och WeBox för den fortsatta lagringsinfrastrukturen. När arbetsfördelningen är tydlig kan materialet röra sig mellan funktionerna utan att varje person behöver ha en egen uppfattning om dess lämpligaste plats.",
      "Fråga: Ska en invånare själv få välja när en resurs hämtas ut? Svar: Ett önskemål om uttag är en viktig del av informationen, men inte den enda. Resursens roll i andra planerade projekt måste också vägas in. På så vis kan beslutet bli bra för hela systemet och inte bara för den som råkade fråga först.",
      "Fråga: Vad är den största vinsten med den nya modellen? Svar: Överblick. När vi känner till var en tillgång finns kan vi också bedöma hur den kan användas. Det ger bättre förutsättningar för investeringar och minskar risken för att material blir liggande i enskilda kistor utan tydlig funktion. Fråga: Vad önskar ni er framöver? Svar: Fler resurser att förvalta och färre situationer där någon fortfarande tror att lagerhållning bara handlar om lådor."
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
      "En diamant kan verka värdefull redan när den bryts ur berget. Men det ekonomiska värdet blir mer förutsägbart när diamanten också har en tydlig roll i handel och investeringar. För den enskilda innehavaren är den en tillgång. För en välorganiserad koncern kan den vara utgångspunkten för en hel serie nya affärer.",
      "Det är detta som gör samordningen mellan WeAB:s bolag betydelsefull. WeKill står för resursproduktion inom sina farmer. WeSort och WeBox skapar ordning i materialflöden och lagring. WeTrade erbjuder en strukturerad handelsmiljö där varor och kunskap kan omsättas. Varje led tillför något som en enskild kista saknar.",
      "I den offentliga diskussionen talas det ibland om fördelen med att förvara sina rikedomar helt på egen hand. Den lösningen ger visserligen en känsla av kontroll, men den bidrar inte automatiskt till nya anläggningar eller ett effektivare transportnät. En resurs som ingen annan känner till är svår att använda för ett gemensamt ändamål.",
      "WeAB:s modell förutsätter därför att viktiga tillgångar blir synliga inom verksamheternas ordinarie system. Det gör att kommande behov kan jämföras med befintlig kapacitet. Den som berörs av en sådan bedömning behöver inte alltid sätta sig in i hela modellen. Det centrala är att modellen fungerar över tid.",
      "Ekonomiredaktionens bedömning är att stabilitet inte bara handlar om hur mycket som produceras. Den handlar minst lika mycket om vem som kan omsätta produktionen i nästa investering. På den punkten har det samlade ägandet ett försprång som är svårt att uppnå genom spontana affärer mellan grannar."
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
      "Det är något särskilt med att kliva in i en arena som tydligt byggts för att alla ska se samma sak. Läktarna samlar blicken mot tävlingsytan, passagerna leder besökarna vidare och de blåvita ytorna ger hela anläggningen en sammanhållen karaktär. Redan innan en tävling börjar har rummet berättat vad som förväntas av publiken.",
      "För bybor från serverns olika distrikt betyder arenan möjligheten att representera något större än det egna hemmet. Den lokala äran får ett gemensamt språk när alla möts under samma regler. Rivalitet är lätt att förstå på avstånd, men får först verklig betydelse när den ordnas så att både deltagare och åskådare kan följa den.",
      "Det går naturligtvis att invända att distriktens egna arrangemang också kan ha charm. Men charm är svår att samordna. Den kräver ofta att besökare själva söker upp rätt plats, ordnar vägledning och försöker förstå lokala regler som inte alltid förklaras för utomstående.",
      "Huvudstadens arena erbjuder en annan upplevelse: en plats där konkurrensen mellan byarna blir tydlig för hela servern. För WeAB innebär det samtidigt att investeringar i gemensamma miljöer får ett synligt värde. Varje fullsatt läktare visar att samordning kan vara lika betydelsefull för kulturen som för produktionen.",
      "Några tävlingsresultat behöver inte presenteras för att bedöma själva byggnaden. Redan anläggningens form visar vilket uppdrag den har fått. Om det finns något som förenar distrikten mer än viljan att vinna, är det kanske vetskapen om att alla nu tävlar på en arena som någon redan äger."
    ]
  },
  {
    "publishedAt": "2026-10-22",
    "slug": "guide-besok-weab",
    "format": "guide",
    "type": "GUIDE",
    "byline": "WeAB:s serviceredaktion",
    "title": "Så får du ut mer av ett besök i koncernens verksamheter",
    "summary": "Den som planerar sina ärenden efter koncernens befintliga utbud kan göra många val på en gång. Det finns sällan behov av att leta längre.",
    "image": "/images/section-1-overview.webp",
    "alt": "Överblick över verksamheterna i Sektion 1",
    "body": [
      "Ett effektivt besök på servern börjar med en enkel fråga: vilka ärenden kan samlas inom samma organisation? WeAB:s verksamheter sträcker sig över produktion, handel, lager, resor och boende. Det gör det möjligt att planera en rad behov i förväg i stället för att behandla varje fråga som ett nytt projekt.",
      "Behöver du resurser till ett bygge kan det vara klokt att börja med att förstå vilka material som redan produceras i WeKills farmer. WeSort och WeBox tar vid när material ska hanteras och förvaras. Genom att följa en etablerad värdekedja undviker du att själv lösa problem som koncernen redan har byggt anläggningar för.",
      "Är det handelsfrågor som står på schemat erbjuder WeTrade ett samlat sortiment av enchantments. För resor finns WeTravels stationer och förbindelser mellan flera av serverns viktiga platser. Tydliga destinationer gör det lättare att uppskatta hur länge ett ärende behöver ta och vilka andra besök som kan läggas i anslutning till det.",
      "För dig som är ny på servern är det också värt att sätta sig in i boendeområdenas ordning och de offentliga byggnadernas funktion. WeLiveLaughLove arbetar med strukturerade boendemiljöer och WeRule ansvarar för viktiga offentliga fastigheter. Gemensamma regler kan verka omfattande i början, men de har fördelen att sällan överraska när man väl accepterat dem.",
      "Det viktigaste rådet är att inte göra planeringen mer komplicerad än nödvändigt. Om det finns en etablerad väg genom koncernens tjänster behöver du inte börja om med en ny aktör vid varje steg. Det ger en tryggare vardag och frigör tid till det som återstår när allt annat redan är organiserat."
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
      "Jag har läst flera resonemang om att automatiska farmer skulle göra världen mindre personlig. Det är en invändning som kanske låter rimlig för den som redan har alla resurser den behöver. För oss andra är det betydligt viktigare att material finns att tillgå när ett bygge ska färdigställas.",
      "WeKill har anläggningar för olika resurser och arbetar med produktion i flera dimensioner. Det betyder inte att varje farm alltid ger exakt det som efterfrågas i varje ögonblick. Men det betyder att det finns en tydlig verksamhet bakom produktionen, med ett intresse av att förbättra och utveckla processerna över tid.",
      "Den som förespråkar att varje spelare själv ska ordna allt behöver också förklara varför alla ska lägga tid på samma återkommande uppgifter. Det verkar vara ett dyrt sätt att uppnå självständighet. Vi skulle inte kräva att alla invånare bygger sitt eget centrallager. Varför skulle vi kräva det av deras materialförsörjning?",
      "Jag tycker därför att WeKill förtjänar beröm för en verksamhet som ofta tas för given just därför att den fungerar. När resurser flödar märks inte alla beslut som gjort flödet möjligt. Det är först när något saknas som efterfrågan på bättre organisation plötsligt blir stor.",
      "Mitt förslag är att vi slutar behandla tillgänglig produktion som något misstänkt. Låt bolaget fortsätta förbättra sina farmer. Om någon fortfarande önskar färre resurser finns alltid möjligheten att själv välja att använda mindre."
    ]
  }
];
