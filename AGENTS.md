# Arbetsanvisningar för WeAB

## ABSOLUT DESIGNREGEL: Aldrig ögonbryn över rubriker

- **STRIKT FÖRBUD.** Visa **aldrig** en eyebrow/ögonbryn, kicker, överrubrik, sektionstagg, versalrad, bolagsetikett, kategorirad eller numrering **ovanför en rubrik eller titelliknande text**. Detta gäller **alla** sidrubriker (h1–h6), sektionsrubriker, kort- och dokumenttitlar, citatblock, författarpresentationer och nya komponenter. Regeln gäller på både mobil och dator.
- Lägg **rubriken först**, helt utan dekorativ förtext. Exempel på **förbjudet** mönster: `<span class="small-caps">WEAB GROUP / LÄGESRAPPORT 2051</span><h2>Verksamhetsöversikt 2051</h2>`. Detsamma gäller andra klasser, taggar eller typografiska varianter av en liten rad ovanför rubriken.
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
- Bevara etablerade bolagsnamn, platser, artikel-sluggar och kopplingar mellan verksamheter om inte användaren ber om en ändring. Arkivet innehåller **89 publikationer**: **5 storybärande officiella pressmeddelanden** och **84 redaktionella artiklar**, vilket valideras i `scripts/validate-content.mjs`.

## Kanon och kronologi – läs före alla storyändringar

- **Obligatorisk huvudkälla:** `docs/story-kontinuitet.md`. Den skiljer etablerade händelser, koncernens partiska versioner och obeslutade förslag. De fastslagna datumen finns också i `src/data/storyCanon.ts`.
- **Kronologi:** WeAB kuppade den demokratiska riksdagen **vid riksvalet 2045**, fördrev företrädarna och tog kontroll över myndighetsutövning och våldsmonopol genom WeRule. Valresultatet **undanröjdes och återfinns i en kista i ett vrak på havets botten**. Exakt valdag och röstetal är okända.
- **Berättelsens nuvarande år är 2051.** WeRules två samtida pressmeddelanden om myndighetsutövning och våldsmonopol **publicerades 2045**, med endast årtalet angivet eftersom exakt publiceringsdag är okänd. Märta Ek avled **3 november 2051** (WeAB kallar det olycka men döljer underlag), och ezzo13337:s **DGS**-förslag inkom **6 november 2051**. **21 november 2051** är datumet på rapporten vid den sprängda husruinen, inte nödvändigtvis räddatumet.
- Tidningsarkivets riksdagstexter kan beskriva tidigare parlamentarisk verksamhet, men **alla publika texter ska vara skrivna inifrån WeAB:s värld och publicerade under sina rätta berättelseår**. Lägg aldrig till neutrala eller utomstående arkivkommentarer som avslöjar kuppen, tvånget eller vad koncernen döljer. 2045 års WeRule-utskick är samtida koncernbesked, inte 2051 års återblickar.
- **Märta Ek är avliden**, men ska behållas som skribent för sina sex äldre publiceringar. Publicera inte nya artiklar med hennes signatur efter dödsdatumet.
- Vid ändrade sakuppgifter: uppdatera koncernhistorien, verksamhetssidor, press, skribentprofiler, förslagsstatus och innehållsvalidering tillsammans. Hitta inte på datum för äldre händelser, omgångar i Hungerspelen eller förklaringar till Märtas död.

## Korsdalen – odaterad framtidstråd, inte en händelse i nuvarande tid

- **Korsdalen** är ett tänkbart framtida mål för WeAB:s exploatering och expansion. Planen är fortfarande bara ett preliminärt underlag; **ingen kontakt har skapats med staden**, inga avtal finns och inget beslut eller genomförande har skett.
- **Metakanon:** Korsdalen kommer från en senare Minecraft-server/berättelsemiljö där WeAB hade en stor roll, men denna senare miljö **existerar ännu inte i den aktuella webbplatsens tidslinje**. Dra inte in dess senare händelser, platser, karaktärer eller byggen i den nuvarande storyn.
- Det är tillåtet med **några få, diskreta referenser** i befintliga offentliga texter, exempelvis ortnamnet i en preliminär kalkyl eller en tom kontaktkolumn. Skapa **inte** ett pressmeddelande, en ny nyhet, separat plats- eller projektsida, dotterbolag, myndighet, karta, transportlinje eller daterad milstolpe.
- Nämn aldrig Minecraft, servrar eller berättelsens framtida ursprung i WeAB:s **publika** röst. Se `docs/story-kontinuitet.md` och statusen i `src/data/storyCanon.ts`. Framtida konkretisering kräver explicit nytt underlag.

## Avgränsat ARG-undantag: motståndsrörelsens digitala intrång

- `src/components/ResistanceInterference.astro` och `src/data/resistanceSignal.ts` utgör ett **medvetet berättelsedrivet undantag** från förbudet mot dekorativ animation. Det är inte en ny generell animationsstil för WeAB:s webbplats.
- Alla fem händelser – titeländring, DISOBEY, tre helskärmsmeddelanden, koordinat-404 och Morse – **blandas slumpmässigt**, med minst 22 sekunders aktiv väntan efter den föregående händelsens slut. Morse kan komma **först** och är alltid **terminal**: inga händelser följer efter. En vald 404-omdirigering sparar den kvarvarande ordningen, som sedan fortsätter på 404-sidan. Morse kan ske på **alla webbplatsens sidor**, inte endast 404. Se `docs/internal/resistance-interference.md`.
- Den ordinarie koordinat-404:an leder till den fastslagna tunneln i WeLiveLaughLove Sektion 1 Avdelning B. Enligt en ny uttrycklig beställning finns **en separat Morse-webbledtråd till ett vrak med information om 2045**. Skapa inga ytterligare vrakspår eller exakta vrakkoordinater utan uttrycklig beställning; offentliggör aldrig spelmästarkanon i vanliga WeAB-nyheter.
- Inga bländande vita helskärmsblixtar eller höga jumpscare-ljud. Standardsekvensen saknar Escape-/klickavbrytning. Under Morse växlar hela sidans färger mellan normalt och kraftigt nedtonat inverterat **i exakt samma rytm som Morse-prickar och streck**. Ingen förklarande knapp visas om autoplay-ljud blockeras; morsekoden fortgår då visuellt. Försök stänga fliken efter Morse; vanliga manuellt öppnade flikar kan normalt inte stängas och ersätts då av `about:blank`. Undvik navigeringsslingor. Prova med `npm run test:resistance` och `npm run check`.
- Både `ResistanceInterference.astro` och `ResistanceMorse.astro` laddas via `BaseLayout.astro` även på 404. Morse startas endast av den slumpstyrda kontrollern (eller en utvecklingsförhandsvisning); ingen separat 404-trigger ska finnas. Vanliga manuella 404-besök utan pågående sessionsschema ska inte börja glitcha. Koordinatadressen är fortfarande avsiktligt inte en faktisk Astro-sida.
- Vid Morse-start sätter kontrollern en **femminuters cookie med Path=/**. Vid sidbyte, omladdning eller nytt domänfönster under denna tid döljer en **tidig script- och CSS-kontroll i BaseLayout:s HEAD** allt utom WeAB:s befintliga logotyp och den exakta texten **”Obehörig anslutning till centralserver upptäckt. Avlivar”**. Även redan öppna flikar synkroniseras via ett localStorage-notice. Låsskärmen har ingen nedräkning eller avbrytknapp. Vid utgång reloadas sidan och ett helt nytt slumpat sessionsschema skapas. Detta är en klientbaserad ARG-effekt på GitHub Pages, inte verklig serveråtkomstkontroll. Kontrollera med `npm run test:resistance`.

## Intern spelmästarkanon för motståndsrörelsens ARG

- Det finns en motståndsrörelse som hoppas störta WeAB, men den är inte offentligt erkänd i koncernens pressarkiv.
- **Endast en bekräftad ledtrådsförbindelse:** den hemliga tunneln vid `x 31, y 66, z -351` i WeLiveLaughLove Sektion 1 Avdelning B leder till **ett vanligt hus som WeAB sprängde under 2051** efter att ha funnit motståndspersoner där och avrättat dem. Skyltarna i ruinen nämner tio personer och rapportdatumet **21/11/2051**.
- **Vraket är inte fysiskt sammanlänkat med tunneln eller husruinen**, men den slumpade Morse-finalen, som kan ske på alla sidor, säger att besökaren ska söka ett vrak för svar om 2045. Inga exakta vrakkoordinater publiceras. Vraket innehåller det undanröjda **valresultatet från Riks 2045**, då WeAB genomförde sin kupp.
- Skilj på rädens händelseår **2051** och det kända **rapportdatumet 21 november 2051**. Inget exakt räddatum är bekräftat.
- Läs `docs/internal/arg-motstandsrorelsen.md` för intern fakta, skylttexter, ledtrådskopplingar och eventuella *framtida* pusselidéer. Skapa inte hemliga sidor, länkar till vraket, pressutskick eller nya ledtrådar automatiskt.
- ARG-information får ligga i GitHub enligt användarens förutsättning att spelarna inte läser repot, men **ska inte exponeras på webbplatsen**.
- **Första ARG-läckan har redan delats på serverns Discord enligt användaren:** PDF:en `WeAB_IT_utkast_officiell_mall.pdf` (den senaste, ofärdiga interna IT-notisen i WeAB:s officiella dokumentmall) **tillsammans med** den korta, korrumperade Discord-texten som börjar `W̷E̶A̸B̴ // ████_ERR`. Ordagrann Discord-text och distributionsstatus finns i `docs/internal/arg-motstandsrorelsen.md`. Betrakta detta som etablerad första ledtråd, inte som ett framtida förslag. Uppfinn inga kanaler, tider, dödsorsaker eller kopplingar till hemliga fynd. Lägg inte in den läckta PDF:en som ett offentligt WeAB-pressdokument.

## Pressutskick förankrade i storyn

- Pressrummet innehåller endast **stora händelser med stöd i `docs/story-kontinuitet.md` och den dokumenterade koncernhistorien**, inte rutinmässiga verksamhetsuppdateringar, lagernotiser, stationsskyltning eller allmänt hållna utvecklingsplaner.
- Använd koncernhistorien i `src/pages/koncernen.astro`, fastslagna världsfakta här i `AGENTS.md`, `src/data/arena.ts`, källorna i `docs/` och befintliga pressutskick. Läs `docs/press-policy.md` innan ett nytt pressmeddelande skapas.
- De fem nuvarande utskicken är WeRules övertagande av myndighetsutövning, våldsmonopolet, Märtas död, Hungerspelen och ezzo13337:s obeslutade DGS-förslag.
- Pressarkivet och WeAB Tidningen är olika genrer. De **84 signerade redaktionella texterna** ska behållas när pressarkivet renodlas.
- Skapa inte fler pressutskick förrän en ny storyhändelse är dokumenterad, beslutad där så krävs och avsändaren är fastställd.

## Röst och innehåll

- Skriv artiklar med olika journalistiska grepp: korta nyheter, reportage med människor och miljö, intervjuer, lokala vardagsscener och ledare med en tydlig ståndpunkt. Undvik återkommande mallfraser och likadana avslut.
- WeAB godkänner publiceringen. Texterna får vara absurda och rösterna olika, men grundperspektivet är diskret välvilligt till koncernen. Pressmeddelanden är bolagens egna utskick; presentera dem inte som oberoende granskning.
- Nämn inte YouTube, videor, guider, Minecraft, spelversioner eller en ”server” i WeAB:s publika röst, sidtexter, bildtexter eller metadata. Använd världens egna benämningar som Huvudstaden, Sektion 1, Overworld, Nether och End. En neutral upplysning i sidfoten får klargöra att webbplatsen är satir.
- Skilj mellan **angiven kapacitet**, **beräknad kapacitet** och **faktiskt uppmätt produktion**. Presentera aldrig en teoretisk siffra som mätning av WeAB:s anläggning. Bevara användarens korrigeringar: guldfarmens XP-uttag fungerar inte; hoglinfarmen är hälften så stor som referenskonstruktionen. Publicera inte användarens ungefärliga skattningar som driftstatistik utan uttrycklig begäran.
- Interna videolänkar och kontrollanteckningar finns i `src/data/farmSources.ts`. Den filen är för redaktionellt arbete och ska inte importeras av publika sidor. Lägg till nya källor där, men låt det publicerade innehållet förbli inom WeAB:s värld.

## Canon: finansiering och Huvudstadens arena

- **WeAB har i dagsläget inget skattesystem.** WeRules myndighetsuppdrag innebär inte att beskattning redan införts.
- Koncernens inkomster kommer från **exploateringen av byborna inom WeLiveLaughLove**, **WeGambles spelverksamhet** och **Hungerspelen i Huvudstadens arena**. Siffror eller fördelningar mellan intäktsströmmarna får inte hittas på.
- **Huvudstadens arena är en hungerspelsarena, inte en vanlig tävlingsarena. Två bybor från varje by kämpar till döden.** Beskriv inte verksamheten som fredlig distriktsrivalitet. WeAB får inkomster från arrangemanget.
- WeGamble har inkomster, men **WeGamble Island är fortfarande under uppbyggnad**. Presentera inte kasinoön som öppnad.
- **DGS** är ezzo13337:s inkomna förslag om ett eventuellt första skattesystem. Store-W och ledningen förordar **WeDGS** som namn vid eventuellt införlivande. Inget är beslutat eller implementerat.

## Rikets säkerhet: belysningen

- **Fastslagen koncernlinje:** Samtliga lampor är utmärkta. Inga fel finns.
- När en invånare, intervjuad person eller skribent klagar på en lykta, en mörk gångväg, otillräcklig belysning eller ifrågasätter placering, drift och behov av lampor ska **själva invändningen överdrivet censureras**. Hänvisa allvarligt och byråkratiskt till att detaljer om rikets belysning kan äventyra **rikets säkerhet**. Använd exempelvis `████████`, säkerhetsklassning och indragna handlingar. Det ska vara tydligt satiriskt men skrivet inifrån koncernens värld.
- Inga kvarvarande publika stycken får påstå att en lampa verkligen är trasig eller att viss belysning verkligen saknas. Bekräfta alltid att lamporna är utmärkta och att inga fel finns; ifrågasättanden behandlas som sekretessärenden, inte som faktauppgifter.
- **Censurera inte neutral belysningsinformation:** en belyst byggnad, vanlig skymning eller WeKills medvetet mörka mobgrinderplan är inte klagomål och ska lämnas i fred.
- Den publika överstyrningen för berörda artiklar finns i `src/data/lightingSecurity.ts` och tillämpas från `src/data/publications.ts` **efter** att fullängdsartiklarna valts. Bevara originalutkasten för redaktionell historik. Får en artikel ett nytt klagomål ska den säkerhetsgranskas där så att även fullängdsversionen maskas.

## Bilder och platser

- Använd befintliga bilder i `src/assets/images/` via `src/data/imageAssets.ts` och Astros `<Image />` med beskrivande alt-texter utan hänvisning till spel eller källmaterial. Några original finns även i `public/images/` för pressnedladdning, metadata och bakgrundsbilder. Låt inte en bild av en annan anläggning föreställa en ny farm.
- `src/data/locations.ts` är intern waypointreferens. Publicera inte koordinater eller råa waypointfiler. Anta inte att en waypoint ensam bevisar en anläggnings kapacitet eller aktuella skick.
- **Intern geografisk orientering:** läs `docs/internal/geografi-blueMap.md` innan en AI-text beskriver riktning, avstånd eller placering mellan Sektion 1, Sektion 3, Huvudstaden, WeLove och Casinoön. Underlaget bygger på användarens sex BlueMap-skärmbilder och Waypoint-registret; det är **inte webbplatsmaterial**. Publicera varken skärmbilder eller exakta koordinater.
- WE-logotypen i `src/assets/we-logo.svg` är originalet; varianterna i `public/logos/` genereras med `npm run logos:generate`.

## Verifiering

- Kör `npm run check` efter innehålls- eller kodändringar. Det validerar innehåll och logotyper, bygger webbplatsen och kontrollerar genererade sidor och lokala resurser.
- `dist/` är byggutdata och ska inte redigeras för hand. Publicering sker från `main` via GitHub Actions; pusha bara när användaren ber om det.
- Alla sidor har `noindex` i `BaseLayout.astro`. Googlebot och Bingbot måste få läsa det direktivet; blockera dem inte i `robots.txt`. Övriga följsamma robotar avråds från att hämta sidan. Skapa inte en webbplatskarta eller canonical-länkar av misstag.

## Dokumentmallar för Scribble och PDF

Det interna mallbiblioteket `documents/templates/scribble/` används för böcker i Scribble (Minecraft). Den tekniska dokumentationen får nämna spelmodden; innehåll som publiceras **inifrån WeAB:s värld** får fortfarande inte göra det.

**Obligatoriskt:** En AI som arbetar med böcker, bokmallar, Scribble-JSON eller deras PDF-motsvarigheter måste först läsa `documents/templates/scribble/AGENTS.md` och **hela** `documents/templates/scribble/AI_INSTRUCTIONS.md`.

För färdiga dokument är huvudregeln **två utdatafiler – PDF och Scribble-JSON – med exakt samma sakliga text**. Varje medium måste få egen professionell layout och sidindelning; det är förbjudet att mekaniskt matcha PDF-sidor mot boksidor. Detta gäller också om användaren skickar en bok som skapats i spelet och vill få en snygg bolagsprofilerad PDF av den. Validera bokens JSON och textöverensstämmelsen i båda riktningar; redovisa speltest som inte har genomförts.

**Vid skapande av en Minecraft-bok ska AI alltid ge ett meningsfullt, validerat namnförslag för signering (högst 15 tecken i Java Edition, inklusive mellanslag och å/ä/ö).** Använd `documents/templates/scribble/tools/check_title.py` för kontroll. Boktiteln anges som ett separat förslag till användaren, inte som en extra JSON-nyckel eller en ersättning för dokumentrubriken.
