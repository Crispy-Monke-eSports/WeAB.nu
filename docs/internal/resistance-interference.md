# Motståndsrörelsens digitala intrång – plan och implementation

> Intern ARG-dokumentation. WeAB:s offentliga nyheter, koncernhistorik och pressmeddelanden ska fortsatt tala med koncernens egen röst. Detta är ett undantag där den ännu aktiva motståndsrörelsen tillfälligt bryter igenom själva gränssnittet.

## Avsedd upplevelse

En besökare som stannar på WeAB.nu ska med relativt hög sannolikhet se något som inte hör hemma på en välkontrollerad koncernwebbplats, men inte utsättas för konstant glitchdekor.

1. Under normal läsning ändras ibland en huvudrubrik kort till **DU SER DET OCKSÅ.** och webbläsarflikens titel till **HÖR DU OSS?**. Allt återställs efter mindre än en sekund.
2. Vid huvudintrånget byts nästan alla synliga textnoder i huvud, navigering och sidfot till **DISOBEY** i 1,5 sekunder. Originaltexterna sparas individuellt och återställs exakt, utan att länkar och HTML-struktur skrivs om.
3. Den vanliga sidan återkommer under 450 ms, för att skapa ett kort falskt lugn.
4. Ett mörkt, heltäckande lager tar sedan över och visar tre meddelanden i snabb följd: **HÖR DU OSS?**, **VI ÄR FORTFARANDE HÄR.**, **HITTA OSS.** (totalt 4,15 sekunder). Ingen företagslogotyp eller förklarande kontext visas.
5. Webbläsaren navigerar till `/31-66--351/`. Ingen sådan statisk sida skapas. GitHub Pages visar i stället WeAB:s redan befintliga `404.html`, som förnekar att adressen existerar, samtidigt som koordinaterna står kvar i adressfältet.

Koordinaterna **31, 66, -351** är den sedan tidigare bekräftade hemliga tunneln i **WeLiveLaughLove Sektion 1, Avdelning B**, inte husruinen och absolut inte vraket. Webbadressen är ett **nytt ARG-spår från webben till den befintliga tunneln**, men knyter *inte* samman tunneln med det separata vrakfyndet. Inga detaljer om kuppen, valresultatet, husrädens offer eller spelmästardokumenten förekommer i de publika meddelandena.

## Frekvens och variation

- Ett enda mindre intrång planeras efter **30–70 sekunders aktiv läsning**.
- **80 %** av besöken får huvudintrånget någon gång efter **100–210 aktiva sekunder**. Resterande **20 %** får det efter **225–320 aktiva sekunder**.
- Aktiv tid räknas bara medan fliken är synlig. Tiden och schemat ligger i `sessionStorage` så att vanlig navigering mellan webbplatsens sidor inte nollställer besöket.
- Efter huvudintrånget följer **15 minuters spärr** lagrad i `localStorage`. Mätningen nollställs vid en genomförd sekvens.
- Sannolikhetsfördelningen ska ge god chans att upptäcka något under ett besök, men tidpunkten ska inte vara exakt och upprepningen ska inte ske vid varje sidladdning.

## Tekniskt

- `src/data/resistanceSignal.ts`: konstanta budskap, koordinat-URL, tider, regler för schemaläggning och spärrtid.
- `src/components/ResistanceInterference.astro`: DOM-störningar, helskärmslager, fliktitel, styrning och omdirigering.
- `src/layouts/BaseLayout.astro`: laddar komponenten genom ett valbart `enableInterference`-fält.
- `src/pages/404.astro`: sätter `enableInterference={false}`; inget återkommande intrång och ingen redirect-loop.
- `tests/resistance-signal.test.mjs`: deterministiska tester av tider, datavalidering, meddelanden och spärr.
- `scripts/validate-site.mjs`: kontrollerar genererad 404-sida och att koordinatadressen **inte** råkar bli en riktig sida.

Helskärmslagret använder befintlig mörk visuell stil, utan höga ljud, starka blixtar eller snabba kontrastblinkningar. **Alla besökare ser samma intrång, utan separat lugnare version.** Sekvensen kan inte avbrytas genom Escape eller klick på lagret, utan genomförs och navigerar därefter vidare. Webbläsarens vanliga navigering fungerar fortfarande. Komponentens kod är vanlig klientsides-JavaScript, och publicerade signaler går därför att hitta i sidans källkod. Viktigare framtida hemligheter bör inte lagras så.

## Förhandsvisning och kontroll

I Astro-utvecklingsläge (`npm run dev`) kan sekvensen snabbtestas med **`/?previewResistance=1`**. Parametern fungerar **inte** som en dold produktionsgenväg. Normala produktionstillfällen förblir tidsstyrda.

Kontrollera manuellt på desktop och mobil att:

- Webbplatsen fungerar normalt innan, efter och mellan störningarna.
- Alla ändrade textnoder och sidans ursprungliga titel återställs exakt.
- Sekvensen visar tre meddelanden, varefter adressfältet får koordinaterna och den existerande 404-sidan visas.
- Escape och klick på lagret avbryter inte sekvensen. Efter 404-sidan fungerar normal navigering utan redirect-loop.
- Flikar i bakgrunden inte tillgodoräknas aktiv tid.
- Sekvensen innehåller inga strobljus eller upprepade skarpa ljusblinkningar, även om samma version visas för alla.
- Ingen länk eller officiell nyhet publicerar hemliga ARG-koordinater.
- `npm run check` och GitHub Actions går igenom.

**Ändra inte `main` direkt.** Den här satsningen ska granskas i en PR och kräver uttryckligt godkännande före merge.
