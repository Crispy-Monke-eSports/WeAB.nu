# Motståndsrörelsens digitala intrång – genomförandeplan

> Endast intern ARG-dokumentation. WeAB:s vanliga sidor, pressutskick och koncerntexter förblir skrivna med WeAB:s egen röst. Intrången är motståndets otillåtna manipulation av själva gränssnittet.

## Händelsekedjan

Alla separata moment fram till 404 ligger **minst 22 sekunders aktiv läsning efter det föregående momentets slut**, med slumpvariation upp till ungefär 34 sekunder.

1. **TITEL:** Efter 30–70 sekunders aktiv läsning ändras rubrik och fliktitel kort. Efter 0,95 sekunder återställs sidan.
2. **VÄNTAN:** 22–34 sekunder vanlig webbplats.
3. **DISOBEY:** Nästan all text ersätts av DISOBEY under 1,5 sekunder. Alla textnoder återställs.
4. **VÄNTAN:** 22–34 sekunder vanlig webbplats.
5. **HELSKÄRM:** Tre mörka skärmar visas i följd: HÖR DU OSS? (1,15 s), VI ÄR FORTFARANDE HÄR. (1,35 s), HITTA OSS. (1,65 s).
6. **VÄNTAN:** 22–34 sekunder vanlig webbplats.
7. **404:** Navigera till `/31-66--351/`, ett avsiktligt obefintligt dokument. GitHub Pages serverar den vanliga, förnekande 404-sidan medan koordinatadressen visas i adressfältet.
8. **VÄNTAN PÅ 404:** Den särskilda 404-sidan är helt normal under 22–34 sekunder av aktiv fliktid.
9. **MORSE OCH NEDBRYTNING:** En förvrängd, överstyrd radioton med filtrerat brus skickar **internationell Morse**. Samtidigt blir textblock på 404-sidan korrupta ett efter ett: rubrik, ingress, länkar, navigation och sidfot. Fliktiteln förlorar läsbarhet och en mörk skärmslöja tilltar gradvis. Ingen stark blixt, stroboskop eller skrämselljud används.
10. **SLUT:** Efter den sista morsebokstaven blir skärmen svart och skriptet försöker `window.close()`. Webbläsaren får normalt inte stänga en manuellt öppnad flik: fallback är `location.replace('about:blank')`, så sidan blir en tom flik i stället.

Ingen Escape-knapp eller klickavbrytning har införts för standardintrånget.

## Morsekodens facit – endast internt

Det engelska/internationella Morse-alfabetet används med ASCII-translitterering. Signalen är:

```text
SOK VRAKET. DAR FINNS SVAR OM 2045.
```

Tolkning: **Sök vraket. Där finns svar om 2045.**

Rytm: prick = 1 tidsenhet, streck = 3 enheter, paus mellan tecken i samma bokstav = 1 enhet, mellan bokstäver = 3, mellan ord = 7. Enhet 95 ms, total uppspelning ca 33 sekunder. Det svårhörda radiobruset och tonhöjdsförändringarna ändrar inte de fasta pausernas och tonernas kodning.

Meddelandet nämner ett vrak men **inte dess koordinater, röstsiffror eller något faktiskt valutfall**. Den tidigare bekräftade tunneln i WeLiveLaughLove Sektion 1 Avdelning B och dess husruin förblir en egen fysisk ledtrådsväg. Morsekoden på webben är ett nytt separat spår till ett redan känt vrak och ska inte presenteras som en fysisk förbindelse.

## Ljud och webbläsarbegränsningar

Koden använder Web Audio API: överstyrd oscillator, frekvensdrift och låg brusmatta, syntetiserat direkt i webbläsaren utan ljudfil. Om webbläsaren tillåter Web Audio startar signalen automatiskt. Om **autoplay blockeras** väntar intrånget i stället på ett klick på en kontextuell knapp: **SIGNAL BRUTEN. ÅTERUPPRÄTTA FÖRBINDELSEN.** Sidan börjar inte spela tyst och stängs inte innan ljuduppspelningen verkligen har genomförts. Om Web Audio inte stöds körs en visuell nedbrytning med samma tidslängd.

`window.close()` kan vanligen bara stänga flikar som öppnats av webbinnehåll, och får inte forcera stängning av en manuell flik. Fallback till `about:blank` ger det visuella avslut som begärts, men ändrar inte själva webbläsarens flikhantering.

## Avgränsning och lagringsregler

- `src/data/resistanceSignal.ts` och `src/components/ResistanceInterference.astro` sköter den ordinarie inledningen och navigering till 404.
- Precis före omdirigeringen lagras en tidsstämplad engångsmarkering i `sessionStorage`.
- `src/pages/404.astro` laddar `src/components/ResistanceMorse.astro`, som bara aktiveras på **exakt** koordinatadressen med en **färsk** markering (högst 60 sekunder gammal). Alla andra 404-sidor förblir helt normala.
- Signalen använder `src/data/resistanceMorse.ts` för text, alfabet, takter, tidslinje och startfördröjning. Triggermarkeringen förbrukas direkt och ger ingen 404-loop vid återbesök.
- Ljudets egen `AudioContext.currentTime` bestämmer när meddelandet är klart, så fliken försöker inte stänga sig innan signalens sista element är färdigt.
- 15 minuters spärr efter hela ordinarie intrångssekvensen finns kvar.
- `npm run test:resistance` testar såväl pauser i originalsekvensen som internationell Morse, meddelandets varaktighet, fördröjning och engångstrigger.

## Tester före och efter publicering

Kör `npm run check` och verifiera GitHub Actions. Kontrollera på en riktig webbläsare att ljudet är hörbart och morserytmen går att avkoda. Testa både ljudtillåten och ljudblockerad autoplay. Besök en vanlig felaktig URL och kontrollera att Morse **inte** börjar där. Kontrollera mobil, att korruptionen sprider sig successivt och att fliken stängs endast om webbläsaren tillåter det. I utvecklingsläge kan `/?previewResistance=1` snabbstarta första titelfasen och `/31-66--351/?previewMorse=1` snabbstarta Morse-finalen separat; produktionsbygget tillåter inte dessa genvägar.
