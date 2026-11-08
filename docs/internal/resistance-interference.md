# Motståndsrörelsens digitala intrång – slumpad ARG-sekvens

> Intern dokumentation. WeAB:s offentliga texter och pressutskick förblir skrivna ur koncernens perspektiv. **OBS: Slutspoiler för ARG:et.**

## Den dolda berättelsen bakom störningarna

**Det ser ut som ett motståndsintrång, men organisationen är i hemlighet WeAB-kontrollerad.** Dess vanliga medlemmar tror att de hackar sig in och kan läcka information om koncernens övergrepp. De flesta känner inte till att WeAB själv använder rörelsen för att kartlägga samtliga oppositionella och redan vet var alla befinner sig.

**Den konkurrerande rösten kommer från en verklig död person:** En tidigare WeAB-infiltratör i motståndsstyrkan började sympatisera med medlemmarna och var på väg att byta sida. WeAB avslöjade personen innan något hann läcka, torterade denne i Huvudstaden, och personen dog där. **Själen hemsöker nu webbplatsen för att försöka stoppa motståndets fortsatta infiltration, varna dem för fällan och rädda deras liv.** WeAB försöker censurera själen eftersom den kan avslöja den hemliga övervakningen.

**Spelarnas gradvisa upplevelse:** Den slumpade serien av titelbyten, DISOBEY, helskärmsmeddelanden, 404 och Morse kan fortfarande *uppfattas som* motståndsrörelsens hackningsförsök. De desperata fragmenten som bryter in på karantänskärmen tillhör däremot den före detta infiltratörens själ. Att systemet påstår `Dödsfall bekräftat` behöver inte betyda att det lyckas tysta den. **Berätta inte denna förklaring på webbplatsen och ändra inte existerande meddelanden för att ge bort slutet.**

## Händelser och ordning

Fem händelser blandas med Fisher–Yates för varje ny sessionskö:

1. **TITEL** – rubrik och fliktitel byts i 0,95 sekunder, sedan återställs de.
2. **DISOBEY** – nästan all synlig text blir DISOBEY i 1,5 sekunder, därefter återställs alla textnoder.
3. **HELSKÄRM** – HÖR DU OSS?, VI ÄR FORTFARANDE HÄR., HITTA OSS. visas i tre snabba skärmar under totalt 4,15 sekunder.
4. **KOORDINAT-404** – webbläsaren går till /31-66--351/, en avsiktligt obefintlig sida som leder spelaren mot den redan etablerade tunneln. Den återstående sessionskön sparas och **fortsätter på 404-sidan**.
5. **MORSE** – förvrängda radiosignaler skickar morsekod samtidigt som textblock korrumperas gradvis. Sidans färger inverteras mörkt **exakt medan varje morseprick eller morsestreck ljuder**. Morse är **terminal**, och inga andra händelser sker efteråt. När uppspelningen är slut försöker sidan stänga fliken, annars visar den about:blank.

De fem händelserna får slumpmässig position, men bara effekterna **fram till och med Morse** körs. Morse kan därför inträffa **först**, utan att besökaren sett något annat, eller efter en eller flera andra störningar. Koordinat-404 före Morse är inte längre ett krav.

## Tid och lagring

- Första händelsen börjar efter **30–70 sekunder aktivt besök**.
- Mellan varje par separata händelser väntar systemet **22–34 sekunder aktiv besökstid efter den föregående effektens SLUT**.
- Slumpkö, återstående steg och förbrukad aktiv besökstid lagras i sessionStorage. Sessionens schema fortsätter vid navigering, inklusive koordinat-404.
- Sidans timer räknar inte tid för dolda flikar.
- När Morse startar avbryts hela schemat och en **cookie-spärr på exakt fem minuter** sätts för hela domänen. Efter fem minuter tas spärren bort av webbläsaren och en ny sidladdning skapar en helt ny slumpad händelsekö.
- Manuella besök på en obefintlig adress utan pågående schema utlöser inga nya effekter.

## Morse – internt facit

Meddelandet är:

    SOK VRAKET. DAR FINNS SVAR OM 2045.

Tolkning: **Sök vraket. Där finns svar om 2045.** Standard Morse används med translittererade svenska tecken. Prick = 1 enhet, streck = 3, paus inom bokstav = 1, mellan bokstäver = 3, mellan ord = 7. Enheten är 95 ms.

Kraftigt överstyrd oscillator, frekvensdrift och brus skapas med Web Audio API. Sidans gradvisa textförstörelse och invertering i Morse-rytm fungerar även när webbläsaren blockerar automatiskt ljud. Ingen förklarande knapp visas. Inverteringen dämpas kraftigt för att undvika bländande vita skärmblinkningar.

Morse är en separat webbledtråd till det befintliga vraket, **inte en bekräftelse på en fysisk tunnelväg dit**. Inga vrakkoordinater eller okända valresultat avslöjas.

## Arkitektur och kontroll

- src/data/resistanceSignal.ts innehåller slumpkö, tidsavstånd och terminalregel. Sessionsnyckel v3 skiljer sig från gamla sekventiella scheman.
- src/components/ResistanceInterference.astro visar vanliga händelser och skickar start-eventet weab:resistance-morse-start när terminalfasen valts.
- src/components/ResistanceMorse.astro lyssnar efter eventet och kan korrumpera **vilken WeAB-sida som helst**.
- src/layouts/BaseLayout.astro monterar båda komponenterna även på 404.
- src/pages/404.astro har ingen separat Morse-trigger. Koordinat-404 är nu en valfri händelse i slumpkön.
- src/data/resistanceMorse.ts är källa för avkodningsbar Morse-timing.
- src/data/resistanceLockdown.ts innehåller en stor uppsättning unika meddelanden från både WeAB och något oidentifierat. Vid varje karantän skapas en **deterministiskt slumpad tidslinje från cookie-sluttiden**, vilket ger samma aktiva text vid samma tidpunkt på varje sida och i varje flik, men ett nytt förlopp nästa gång. **Ingen rad får upprepas inom femminutersperioden**. Intervallen är avsiktligt oregelbundna (tidigt 6–11,4 sekunder, senare 3,8–8,8 sekunder och mot slutet 2–5,1 sekunder); ungefär tre av fyra inbrott tillhör själen. WeAB försöker skriva över den gång på gång, men utan att avslöja dess identitet eller bakgrund. 
- src/layouts/BaseLayout.astro kontrollerar cookies **i HEAD innan webbplatsens innehåll kan målas**. Under låsningen visas WeAB:s original-WE-logotyp, oregelbundet växlande system- och inkräktartexter och en **liten, rund roterande laddningssymbol under texten**. Egna glitch-effekter inspirerade av DDLC:s psykologiska skräck (förstörd text, förskjutna RGB-kanaler, horisontella bildbrott och tillfälliga överlagringar) blir tätare/intensivare under karantänen, men utan snabb helskärmsstrobning eller grafik från spelet. Rörelser stängs av eller förenklas vid `prefers-reduced-motion`.
- Cookie-spärren sätts **redan vid Morse-start**. En navigation mitt under Morse, sidomladdning, eller en ny flik på samma domän visar därför spärren. Redan öppna flikar underrättas med ett localStorage-event och stoppas från att fortsätta sin gamla störningssekvens.
- **Precis vid fem minuter** ändras statusen till **”Dödsfall bekräftat. Återtar anslutning...”**. Den visas under cirka 3,2 sekunder innan sidan laddas om och en ny slumpordning skapas. Om en flik har sovit förbi sluttiden visas ändå den korta bekräftelsen före omladdning. Ingen extra cookieperiod införs; meddelandet är en kort avslutssekvens. Den tidigare 15-minuterspausen är borttagen.
- Tester kontrollerar slumpfördelning, Morse först, terminalregeln, minst 20 sekunders paus och bibehållen ordning vid omdirigering samt att karantäntexten saknar upprepningar, är tätare för själen, har oregelbundna intervall och fungerar identiskt över flikar.

Om webbläsaren blockerar Web Audio fortsätter bara den visuella Morse-koden, utan någon extra knapp. window.close() kan normalt inte stänga en manuellt öppnad flik: fallback är about:blank. Om besökaren därefter försöker återvända till WeAB under femminutersspärren möts den enbart av logotypen och det officiella meddelandet. På grund av GitHub Pages statiska HTML är spärren **en klientsidesberättelseeffekt**, inte en autentisering eller verklig servernekning; utan JavaScript eller cookies kan effekten inte säkerställas.

Kör npm run check och granska GitHub Actions. I Astros utvecklingsläge kan ?previewResistance=1 snabbstarta en slumpad första effekt efter en sekund och ?previewMorse=1 visa Morse direkt på valfri sida. Kontrollera även att en direktbesökt 404 inte startar intrång utan ett tidigare påbörjat schema.

## Karantänens beteende som ska kontrolleras

1. Morse startar på valfri sida och spelar vidare utan att den aktuella sidan omedelbart ersätts.
2. Besök en annan sida mitt under Morse: den ska direkt visa **WE-logotypen**, systemtext och många olika inbrottstexter som försöker ta över, plus **en liten rund, roterande laddningsikon under texten**. Dämpade RGB-förskjutningar, fragmenterad text och enstaka horisontella bildbrott blir mer intensiva mot slutet. Samma sak vid omladdning eller i ny flik. Textläget bestäms av tid sedan Morse-start, så en ny flik återupptar **samma skede** i konflikten.
3. Den låsta sidan får inte schemalägga nya ARG-händelser, inte ens om den är 404-sidan.
4. Vänta tills fem minuter sedan Morse-start passerat: **”Dödsfall bekräftat. Återtar anslutning...”** ska synas ungefär 3,2 sekunder innan sidan laddas om och en helt ny, slumpad sekvens med 30–70 sekunders första väntetid startar.
5. Inga nedräkningar, knappar, avbryt-funktioner, snabba helskärmsblixtar eller inspelade röster ska läggas till låsskärmen. Brottningsmatchen ska ske via tät, oregelbunden och alltmer fragmenterad text och visuella fel. Ingen replik upprepas inom samma låsning. Laddningscirkeln är den enda kontinuerliga animationen; visuella störningar är korta och oregelbundna.
