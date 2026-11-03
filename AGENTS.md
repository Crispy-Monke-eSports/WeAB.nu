# Arbetsanvisningar för WeAB

## ABSOLUT DESIGNREGEL: Aldrig ögonbryn över rubriker

- **STRIKT FÖRBUD.** Visa **aldrig** en eyebrow/ögonbryn, kicker, överrubrik, sektionstagg, versalrad, bolagsetikett, kategorirad eller numrering **ovanför en rubrik eller titelliknande text**. Detta gäller **alla** sidrubriker (h1–h6), sektionsrubriker, kort- och dokumenttitlar, citatblock, författarpresentationer och nya komponenter. Regeln gäller på både mobil och dator.
- Lägg **rubriken först**, helt utan dekorativ förtext. Exempel på **förbjudet** mönster: `<span class="small-caps">WEAB GROUP / LÄGESRAPPORT 2026</span><h2>Verksamhetsöversikt 2026</h2>`. Detsamma gäller andra klasser, taggar eller typografiska varianter av en liten rad ovanför rubriken.
- Behövs information som datum, avsändare, dokumentkategori eller bolagsnamn, placera den **under rubriken**, i brödtext eller som ett riktigt datafält. Ta inte bort nödvändig sakinformation bara för att uppfylla förbudet.
- Återinför **aldrig** ögonbryn som grafisk förfining, inte heller vid framtida designarbete. Rena symboler och avatarer som **inte innehåller textetiketter** får däremot finnas vid en rubrik.
- Projektets innehållsvalidering ska upptäcka och stoppa återfall med etikett- eller spanrader direkt före rubriker.

## Antimall-regler för webb, design och text

Det här är bindande krav för hela WeAB.nu, inte inspiration till nya sektioner. Den tidigare absoluta regeln om **inga ögonbryn ovanför titlar** gäller fortfarande.

1. **Ingen standardtema-estetik.** Inför aldrig orörda Tailwind-, shadcn/ui- eller webbbyggarmönster. Behåll WeAB:s egen cyanprofil, industribilder och typografiska röst. Ändra färg, typsnitt och spacing för en verklig funktion, inte för att följa en trend.
2. **Ingen automatisk landningssidemall.** Bygg inte återkommande hero → tre fördelar → testimonials → CTA. Utgå från sidans faktiska uppgift: kontaktkatalog, rapport, verksamhetsregister, tidningsarkiv, process eller bildgalleri.
3. **Inga utfyllnadskort.** Använd kort när objekt verkligen är skilda, exempelvis nio dotterbolag, pressbilder eller lediga tjänster. Policyer och löptext hör normalt hemma i artiklar, listor, tabeller eller avsnitt med enkla avdelare.
4. **Ingen effektdekor utan syfte.** Undvik glöd, glas, aurora, gradienttext, överdrivna bakgrundsgradienter, neonramar och slentrianmässigt rundade paneler. En mörk toning på en verklig bild är tillåten om den behövs för läsbarheten.
5. **Begränsa behållare.** En meningsfull informationsgrupp får gärna en ram, men inte varje stycke eller dokument. Låt typografi, sidmarginaler och horisontella linjer ordna innehållet.
6. **Inga dekorativa badges/ikoner.** Status kan visas som text. Undvik raketer, gnistor, emojis och etiketter utan informationsvärde. Inga ögonbryn/överrubriker får placeras ovanför titlar.
7. **Ingen uppvisningsanimation.** Använd inte scroll-reveal, parallax, rörliga räknare, svävande kort eller pulserande knappar. Funktionell rörelse ska respektera `prefers-reduced-motion`.
8. **Inga uppdiktade illustrationer.** Använd de faktiska skärmbilderna från koncernens anläggningar. Visa inte fiktiva dashboards, mätserier eller personporträtt som faktiska bevis. Eventuella exempel ska uttryckligen märkas som exempel.
9. **Inga falska belägg eller skenkontroller.** Hitta inte på siffror, kunder, recensioner, priser, e-postleverans, investeringar eller ansvarsförhållanden. Länkar, filter, menyer och knappar ska ha verklig funktion på mobil och med tangentbord. En `mailto:`-länk bevisar inte att brevlådan finns.
10. **Inget generiskt AI-språk.** Stryk ”revolutionera”, ”frigör potentialen”, ”sömlös”, ”i dagens snabbt föränderliga värld”, upprepade trepunktsuppräkningar och ”inte bara X – utan Y”. Skriv konkret om WeKill, WeSort, WeBox, verksamheternas platser, processer och ägarstyrning.

### WeAB:s särdrag

WeAB ska se ut som en **faktisk koncernwebbplats**, och satiren ska ligga i koncernens egna sakliga formuleringar. En seriös ton på en sida om monopol, personalbostäder eller resursutvinning är roligare än en ny punchline i varje rubrik. Bevara den etablerade världen, Store-W:s anonymitet, fyra namngivna ledande ledamöter och de nio dotterbolagen. Koncernen vet inte att den är ett spel. Ingen ny grafik eller personalbild får presenteras som verklig om den inte finns i repo.

**Förbjud motiveringslöshet, inte funktionella komponenter.** Listor, kort, knappar och befintliga bildtoningar får finnas där de löser en identifierad uppgift. Beskriv i PR varför ovanliga visuella val behövs.

### Kontroll före leverans

- Har varje avsnitt en tydlig uppgift? Ta bort upprepade CTA-sektioner, generiska siffror och duplicerad bolagsintroduktion.
- Är texten konkret och verksamhetsspecifik, utan obelagda påståenden? Kontrollera att siffror är faktiska eller tydligt illustrativa.
- Kommer alla bilder från rätt anläggning? Har de användbar alt-text eller avsiktligt tom alt-text för rent dekorativa bilder?
- Kan varje synlig kontroll användas med tangentbord på liten skärm, och fungerar dess åtgärd? Kontrollera filtertillstånd, tomma sökresultat och interna ankarlänkar.
- Är rubrikerna fria från ögonbryn, och har vi valt sidstruktur utifrån innehållet i stället för en AI-mall?
- Kör `npm run check` och kontrollera mobil, tangentbord och kontrast inför PR. Var ärlig om tester som inte kunde utföras.

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
