# Motståndsrörelsens digitala intrång – slumpad ARG-sekvens

> Intern dokumentation. WeAB:s offentliga texter och pressutskick förblir skrivna ur koncernens perspektiv.

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
- När Morse startar avbryts hela schemat och en 15-minuters spärr sparas i localStorage.
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
- Tester kontrollerar slumpfördelning, Morse först, terminalregeln, minst 20 sekunders paus och bibehållen ordning vid omdirigering.

Om webbläsaren blockerar Web Audio fortsätter bara den visuella Morse-koden, utan någon extra knapp. window.close() kan normalt inte stänga en manuellt öppnad flik: fallback är about:blank.

Kör npm run check och granska GitHub Actions. I Astros utvecklingsläge kan ?previewResistance=1 snabbstarta en slumpad första effekt efter en sekund och ?previewMorse=1 visa Morse direkt på valfri sida. Kontrollera även att en direktbesökt 404 inte startar intrång utan ett tidigare påbörjat schema.
