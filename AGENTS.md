# Arbetsanvisningar för WeAB

## ABSOLUT DESIGNREGEL: Aldrig ögonbryn över rubriker

- **STRIKT FÖRBUD.** Visa **aldrig** en eyebrow/ögonbryn, kicker, överrubrik, sektionstagg, versalrad, bolagsetikett, kategorirad eller numrering **ovanför en rubrik eller titelliknande text**. Detta gäller **alla** sidrubriker (h1–h6), sektionsrubriker, kort- och dokumenttitlar, citatblock, författarpresentationer och nya komponenter. Regeln gäller på både mobil och dator.
- Lägg **rubriken först**, helt utan dekorativ förtext. Exempel på **förbjudet** mönster: `<span class="small-caps">WEAB GROUP / LÄGESRAPPORT 2026</span><h2>Verksamhetsöversikt 2026</h2>`. Detsamma gäller andra klasser, taggar eller typografiska varianter av en liten rad ovanför rubriken.
- Behövs information som datum, avsändare, dokumentkategori eller bolagsnamn, placera den **under rubriken**, i brödtext eller som ett riktigt datafält. Ta inte bort nödvändig sakinformation bara för att uppfylla förbudet.
- Återinför **aldrig** ögonbryn som grafisk förfining, inte heller vid framtida designarbete. Rena symboler och avatarer som **inte innehåller textetiketter** får däremot finnas vid en rubrik.
- Projektets innehållsvalidering ska upptäcka och stoppa återfall med etikett- eller spanrader direkt före rubriker.

## Projektet

- Statisk Astro 7-webbplats på svenska. Node.js 22.23.4 eller senare.
- WeAB är en absurd, fiktiv megakoncern med nio dotterbolag. Webbplatsens texter berättas **inifrån den världen**. Koncernen känner inte till att världen är ett spel.
- `src/data/companies.ts`, `projects.ts` och `companyEditorial.ts` innehåller verksamheter och anläggningar. `src/data/news.ts` innehåller pressmeddelanden; `editorial.ts` och `edition/` innehåller signerade artiklar. `publications.ts` samlar arkivet.
- Bevara etablerade bolagsnamn, platser, artikel-sluggar och kopplingar mellan verksamheter om inte användaren ber om en ändring. Tidningen har exakt **100 artiklar**, vilket valideras i `scripts/validate-content.mjs`.

## Röst och innehåll

- Skriv artiklar med olika journalistiska grepp: korta nyheter, reportage med människor och miljö, intervjuer, lokala vardagsscener och ledare med en tydlig ståndpunkt. Undvik återkommande mallfraser och likadana avslut.
- WeAB godkänner publiceringen. Texterna får vara absurda och rösterna olika, men grundperspektivet är diskret välvilligt till koncernen. Pressmeddelanden är bolagens egna utskick; presentera dem inte som oberoende granskning.
- Nämn inte YouTube, videor, guider, Minecraft, spelversioner eller en ”server” i WeAB:s publika röst, sidtexter, bildtexter eller metadata. Använd världens egna benämningar som Huvudstaden, Sektion 1, Overworld, Nether och End. En neutral upplysning i sidfoten får klargöra att webbplatsen är satir.
- Skilj mellan **angiven kapacitet**, **beräknad kapacitet** och **faktiskt uppmätt produktion**. Presentera aldrig en teoretisk siffra som mätning av WeAB:s anläggning. Bevara användarens korrigeringar: guldfarmens XP-uttag fungerar inte; hoglinfarmen är hälften så stor som referenskonstruktionen. Publicera inte användarens ungefärliga skattningar som driftstatistik utan uttrycklig begäran.
- Interna videolänkar och kontrollanteckningar finns i `src/data/farmSources.ts`. Den filen är för redaktionellt arbete och ska inte importeras av publika sidor. Lägg till nya källor där, men låt det publicerade innehållet förbli inom WeAB:s värld.

## Bilder och platser

- Använd befintliga bilder i `public/images/` och skriv beskrivande alt-texter utan hänvisning till spel eller källmaterial. Låt inte en bild av en annan anläggning föreställa en ny farm.
- `src/data/locations.ts` är intern waypointreferens. Publicera inte koordinater eller råa waypointfiler. Anta inte att en waypoint ensam bevisar en anläggnings kapacitet eller aktuella skick.
- WE-logotypen i `src/assets/we-logo.svg` är originalet; varianterna i `public/logos/` genereras med `npm run logos:generate`.

## Verifiering

- Kör `npm run check` efter innehålls- eller kodändringar. Det validerar innehåll och logotyper, bygger webbplatsen och kontrollerar genererade sidor och lokala resurser.
- `dist/` är byggutdata och ska inte redigeras för hand. Publicering sker från `main` via GitHub Actions; pusha bara när användaren ber om det.
- Alla sidor har `noindex` i `BaseLayout.astro`. Googlebot och Bingbot måste få läsa det direktivet; blockera dem inte i `robots.txt`. Övriga följsamma robotar avråds från att hämta sidan. Skapa inte en webbplatskarta eller canonical-länkar av misstag.
