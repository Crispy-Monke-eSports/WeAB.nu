# Motståndsrörelsens digitala intrång – plan och implementation

> Intern ARG-dokumentation. Koncernens officiella texter förblir skrivna ur WeAB:s perspektiv. Intrånget är motståndsrörelsens tillfälliga kontroll över webbplatsens gränssnitt, inte en offentlig nyhet.

## Upplevelse och garanterat mellanrum

Alla händelser är **separata**. En paus på **22–34 sekunders aktiv läsning** infaller efter att varje effekt avslutats, alltså alltid **minst 20 sekunder** mellan händelserna:

1. **TITELÄNDRING:** Efter 30–70 sekunders aktiv läsning byts webbläsarflikens titel till **HÖR DU OSS?** och sidans första rubrik till **DU SER DET OCKSÅ.** under 0,95 sekunder. Båda återställs.
2. **PAUS:** 22–34 sekunder med en helt normal WeAB-sida.
3. **DISOBEY:** Nästan all synlig text i huvudmeny, innehåll och sidfot ersätts av **DISOBEY** i 1,5 sekunder; fliktiteln ändras också. Sidan återställs helt.
4. **PAUS:** 22–34 sekunder med en helt normal sida.
5. **HELSKÄRM:** Ett mörkt lager täcker webbplatsen. Tre texter visas snabbt i följd: **HÖR DU OSS?** (1,15 s), **VI ÄR FORTFARANDE HÄR.** (1,35 s) och **HITTA OSS.** (1,65 s). Fliktiteln följer texten. Lagret försvinner efter totalt 4,15 sekunder och WeAB-sidan återkommer.
6. **PAUS:** 22–34 sekunder med en helt normal sida.
7. **404:** Webbläsaren navigerar till **\`/31-66--351/\`**. Ingen sådan Astro-sida byggs; GitHub Pages visar WeAB:s befintliga 404-sida, som förnekar att adressen existerar. Koordinaterna finns kvar i adressfältet.

Det finns alltså **aldrig en direkt övergång från DISOBEY till helskärmsmeddelandena eller från sista helskärmstexten till 404**. Intervallet slumpas för att kännas oförutsägbart, men understiger aldrig 22 sekunder efter förra effektens slut.

## ARG-kontinuitet

Koordinaterna **31, 66, -351** avser den tidigare fastställda **hemliga tunneln** i WeLiveLaughLove Sektion 1 Avdelning B. Adressen är ett nytt webbspår till en redan existerande fysisk ledtråd. Den säger **ingenting** om husrädens hemliga detaljer och leder **inte till vraket**. Vraket är ett separat fynd som saknar ledtrådskedja.

## Tid, återbesök och implementation

- Första titelförändringen planeras efter **30–70 sekunders aktiv tid**. Alla mellanliggande pauser är **22–34 sekunder efter att den föregående händelsen avslutats**.
- Schemat (nästa steg, tidigare förbrukad aktiv tid och tidigaste start) sparas i \`sessionStorage\` för att behålla pauserna vid sidbyten. Sessionsnyckeln är versionerad, så äldre tätt sammankopplade sekvenser återanvänds inte.
- Ingen aktiv tid räknas i bakgrundsflikar. En körande textanimation kan slutföras medan fliken är dold, men det efterföljande steget kräver fortfarande sin aktiva väntetid.
- Efter omdirigeringen registreras **15 minuters spärr** i \`localStorage\`.
- \`src/data/resistanceSignal.ts\` beskriver varje fas och dess varaktighet och räknar fram nästa fas med en separat minsta väntetid.
- \`src/components/ResistanceInterference.astro\` tillämpar faserna en åt gången och återställer samtliga DOM-textnoder, rubrik, fliktitel, fokus och \`inert\`-tillstånd efter respektive effekt.
- \`src/layouts/BaseLayout.astro\` laddar komponenten centralt. \`src/pages/404.astro\` utesluter den för att inte bilda en loop.
- \`tests/resistance-signal.test.mjs\` testar uttryckligen minsta möjliga paus efter **var och en** av de tre effekterna, variation, sessionsdata och spärr. \`scripts/validate-site.mjs\` kontrollerar 404-sidan och att koordinatadressen inte genereras.

Alla besökare får samma sekvens; den kan inte avbrytas med Escape eller klick, enligt beställningen. Den innehåller inga skrämselljud, strobljus eller kraftiga blinkningar. Webbläsarens vanliga navigering fungerar fortfarande.

## Testning

Kör \`npm run check\`. I Astro-utvecklingsläge (\`npm run dev\`) kan \`/?previewResistance=1\` förkorta **endast väntan till titeländringen** till ungefär en sekund. **Alla tre senare pauser på 22–34 sekunder gäller även i förhandsvisningen.** Förhandsvisningen är inte aktiv i produktion.

Kontrollera manuellt på dator och mobil att rubrik och fliktitel återställs, att DISOBEY återställs, att de tre meddelandena visas efter den andra pausen, att vanlig sida återkommer under den tredje pausen, och att koordinatadressen ger den befintliga 404-sidan.

## Publiceringsstatus

Funktionaliteten är avsedd att ligga på \`main\` efter användarens uttryckliga instruktion att lägga ändringarna direkt där. Den interna ARG-dokumentationen ska inte exponeras som en offentlig webbplatslänk.
