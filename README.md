# WeAB Group — Minecraft corporate satire website

En responsiv, statisk Astro-webbplats med riktiga Minecraft-skärmbilder från WeAB:s verksamheter. Språk: svenska. Fiktiv koncern och rollspelsmaterial.

## Kom igång

Kräver Node.js 22.23.4+ (Astro 7).

```bash
npm install
npm run dev
```

Besök adressen som skrivs ut i terminalen (normalt `http://localhost:4321`).

Bygg publiceringsfiler:

```bash
npm run build
npm run preview
```

`dist/` innehåller den statiska webbplatsen.

Kör `npm run check` före leverans. Utöver innehåll, logotyper, byggda sidor
och länkar kör det `astro check` för typ- och Astro-diagnostik; `astro build`
gör inte den kontrollen. Originalmåtten för bilder i `public/images/` finns i
`src/data/imageDimensions.ts` och används där bilderna återges dynamiskt.

### Publicering på GitHub Pages

Webbplatsen publiceras automatiskt på [weab.nu](https://weab.nu) (även `www.weab.nu`)
via GitHub Actions. Arbetsflödet i `.github/workflows/deploy.yml` bygger sajten med
[withastro/action](https://github.com/withastro/action) och publicerar med GitHub Pages
varje gång något pushas till `main`.

Engångsinställning innan första publiceringen:

1. I repots *Settings → Pages*: välj källa **GitHub Actions**.
2. Lägg till `weab.nu` som custom domain i samma vy (`public/CNAME` innehåller redan värdet).
3. Konfigurera DNS hos domänleverantören:
   - Apex (`@`): A-pekare till `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: CNAME-pekare till `crispy-monke-esports.github.io` (exakt värde visas i Settings → Pages)
4. Slå på **Enforce HTTPS** när certifikatet har utfärdats (kan ta några minuter).

### URL-struktur

- `/` – Startsida
- `/koncernen/` – Om WeAB, koncernstruktur, koncernledning och moderbolagets anläggningar
- `/strategi/` – Koncernens affärsmodell, värdekedja och strategiska prioriteringar
- `/bolagsstyrning/` – Ledningspresentation med Store-W som anonym VD och de fyra ledande ledamöterna
- `/hallbarhet/` – Fiktiv hållbarhetssida med avsiktlig greenwashing-satir
- `/press/` – Officiellt pressrum med bolagens pressmeddelanden och nedladdningsbart grafiskt material
- `/verksamheter/` och `/verksamheter/[slug]/` – Verksamhetssidor med bolagens egna byggnader, bilder och platsmarkeringar
- `/arena/` – Huvudstadens arena med tre bilder och platsmarkeringen Hungerspelsarenan
- `/investerare/` – Fiktiv investerarportal utan publicerad börskurs, med rapportarkiv och finansiell kalender
- `/investerare/rapporter/` – Verksamhetsöversikt, kapitalpolicy och rapporteringsprinciper
- `/karriar/` – Platsannonser inom rollspelet; inga ansökningar via webbplatsen
- `/nyheter/` – WeAB Tidningen: 84 redaktionella texter (insändare, ledare, reportage och andra genrer); officiella pressmeddelanden listas separat i `/press/`
- `/kontakt/` – Koncernens kontaktkatalog med mailto-länkar till huvudkontoret och nio dotterbolag
- `/leverantorer/` – Inköpsprocess, leverantörskod och vanliga frågor för externa samarbeten

### Design- och textprinciper

WeAB:s visuella och redaktionella regler definieras i [AGENTS.md](AGENTS.md), inklusive
det absoluta förbudet mot ögonbryn över rubriker och de tio antimall-reglerna:
ingen standardtema-estetik, inga generiska feature-kort, inga fejkmätvärden,
inga ornament utan funktion och inga visade kontroller som inte fungerar.

Se [designgranskningen](docs/design-audit.md) för en genomgång av varje
sidmall, vad som ändrats och vad som medvetet behållits. Webbplatsen använder
skärmbilder från projektets egna anläggningar. Pressmaterial, kontakter,
policyer, artiklar och anläggningar presenteras utifrån deras **verkliga
uppgifter i den fiktiva WeAB-världen**.

Nyhets-, press- och jobbfilter är progressiva: utan JavaScript visas innehållet
utan inaktiva filtreringskontroller. Den automatiska webbkontrollen verifierar
att de genererade sidorna behåller detta beteende.

### Redigera innehåll

- `src/data/companies.ts` – Företagsbeskrivningar, namn, accentfärger, bilder och status
- `src/data/contacts.ts` – Officiella @weab.nu-adresser för huvudkontoret och dotterbolagen
- `src/data/leadership.ts` – Store-W som VD och fyra ledande ledamöter
- `src/data/projects.ts` – Anläggningar, bilder och alt-texter som visas på respektive bolagssida och koncernsidan
- `src/data/companyEditorial.ts` – Bolagens egna avsnitt, anläggningsgrupper och kopplingar mellan verksamheter
- `src/data/arena.ts` – Arenagalleriets tre foton och alt-texter
- `src/assets/we-logo.svg` – Den bifogade officiella WE-logotypen (gemensam för alla bolag)
- `src/data/locations.ts` – Internt referensmaterial från JourneyMap-exporten (35 unika positioner, varav 14 WeKill-anläggningsplatser); visas inte på webbplatsen. Järnfarmen är en anläggning med 14 tregrupper av bybor. Två grupper delar en zombie, alltså sju zombier totalt — inte 14 separata järnfarmer.
- `src/data/news.ts` – 16 längre fiktiva pressmeddelanden (nio omskrivna och sju nya)
- `src/data/editorial.ts` – Tio fiktiva tidningstexter i åtta redaktionella genrer
- `src/data/publications.ts` – Gemensamt, datumordnat tidningsarkiv med skribent- och formatmetadata
- `src/data/authors.ts` – Femton fiktiva skribenter med unika röster och profiler
- `src/data/edition/` – Sjuttiofyra nya texter organiserade kring skribenternas ämnen
- `src/styles/global.css` – Global grafisk profil
- `public/logos/` – Tio SVG-varianter genererade från den officiella WE-logotypen
- `public/images/` – Optimerade WebP-versioner av bilderna från Minecraft
- `public/robots.txt` – Avråder övriga robotar från att hämta webbplatsen. Googlebot och Bingbot får läsa det sidgemensamma `noindex`-direktivet i `src/layouts/BaseLayout.astro`; ingen webbplatskarta publiceras. Instruktionerna är frivilliga och hindrar inte robotar som ignorerar dem.

### Platsinformation från servern

`global_waypoints.dat` används **endast som indata lokalt** och är ignorerad av Git.
En deduplicerad och redigerbar lista med namn, dimensioner och blockkoordinater
förvaltas i `src/data/locations.ts`. Råfilen, ikoner, GUID:er och användarinställningar
lagras inte i repot. Två olika positioner med namnet ”Simons bas” är avsiktligt kvar.

Listan används som intern hjälp vid gruppering och faktakontroll. Varken
waypointlistor eller koordinater publiceras på webbplatsen. Byggnader och
platser presenteras i stället genom bilder och redaktionella beskrivningar.
Koordinaterna är en ögonblicksbild och uppdateras inte automatiskt.

### WE:s officiella logotyp och företagsspecifik typografi

Den ursprungliga logotypen från koncernen ligger i `src/assets/we-logo.svg`.
Den är **den enda källan** för WE-symbolen. Ingen egen pixelmatris eller
AI-genererad tolkning används längre.

Vid generering anpassar `scripts/generate-logos.mjs` följande lager utan att
ändra symbolens geometri:

- `brand-color`: färgad bakgrund enligt accentfärgerna i `src/data/companies.ts`,
  med cyan som moderbolaget WeAB:s färg.
- `brand-corners`: samtliga åtta opaka, grå stenhörn; förvaltningsbar färg
  i generatorns `defaults.corners` och `overrides`.
- `brand-shadow`: skyltens halvtransparenta skugga med separat färg
  och opacitet i `defaults.shadow` och `defaults.shadowOpacity`.

Alla tio varianter i `public/logos/` (WeAB och nio dotterbolag) är
genererade från originalfilen. Samma filer används som logotyper i
huvudmenyn, sidfoten, verksamhetskorten, koncernstrukturen, respektive
verksamhetssida och respektive bolags favicon (cyan på övriga sidor).

`BrandMark.astro` visar WE-symbolen **över** resten av företagsnamnet:
**AB**, **Kill**, **Sort**, **Box**, **LiveLaughLove**, **Gamble**,
**Travel**, **Trade**, **Love** och **Rule**. Resten av namnet sätts med
[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) via
Google Fonts med monospace-reservtypsnitt. De längre namnen skalas ned
för att passa även på små skärmar. Referensbilden med logotyp och
företagsnamn har inte lagts in i repot. Texten under WE-symbolen visas alltid med versaler, medan tillgänglighetsnamn och löptext behåller bolagsnamnens ordinarie stavning.

Bygg om och verifiera varianterna:

```bash
npm run logos:generate
npm run logos:check
npm run validate:content
npm run build
```

CI verifierar att samtliga genererade SVG-filer överensstämmer med
originalet och de aktuella företagsfärgerna; en manuell redigering av
en genererad fil ska inte kunna överleva utan att upptäckas.

### Längre artiklar – en skribent i taget

**41 av 100 artiklar är nu fullängdstexter.** De första 20
färdigställdes i två blandade omgångar, varefter fyra hela
skribentserier har omarbetats separat: **Ruben Kist (5)**,
**Alva Heden (6)**, **Herr Elskar Weandersson (5)** och
**Dagmar Stenqvist (5)**.

De fyra rösterna hålls åtskilda. Ruben använder torr humor och
konkreta lageriakttagelser. Alva arbetar tekniskt med WeKills
produktionsprocesser och skiljer mellan angiven, beräknad och uppmätt
kapacitet. Herr Weandersson skriver artiga och närmast vördnadsfulla
läsarbrev. Dagmar använder ett precist, protokollnära språk med
tydliga definitioner, ansvarsfördelningar och uppföljningsfrågor.
Hennes fem texter behandlar WeRules fastighetsförvaltning och
offentliga lokaler och har **728–818 ord och nio utvecklade stycken**
vardera; de omfattar analys, reportage, guide och lokalrapport.

De första tio pressmeddelandena finns i `src/data/news.ts`.
Övriga fullängdstexter finns i `src/data/expanded/`, där
`bodies.ts` kopplar dem till `src/data/publications.ts` utan
att ändra artikeladresser, datum, bilder, genre, skribentsignaturer
eller officiella bolagsavsändare.

**59 artiklar återstår** i originalutförande. Fortsätt med en
skribents **samtliga texter** i varje omgång, minst 500 ord och
åtta stycken per artikel. Alva Heden, Herr Elskar Weandersson
och Dagmar Stenqvist kontrolleras dessutom mot minst 700 ord
och nio stycken för varje färdig text.

`src/data/expandedArticleSlugs.ts` markerar alla utbyggda texter,
och `completedAuthorIds` markerar endast författare vars
**alla** publicerade texter har färdigställts. `npm run check`
validerar fullängdstexterna, 100-artikelsamlingen,
författarkopplingarna, bilder och genererade länkar.

### Koncernmaterial och kontaktuppgifter

De nya sidorna för strategi, hållbarhet, bolagsstyrning, inköp och investerare
ska efterlikna en större koncerns offentliga kommunikation, men uppgifterna är
skrivna som **satir inifrån WeAB:s fiktiva värld**. Inga verkliga finansiella
resultat eller miljöeffekter påstås eller fabriceras.

Kontaktadresserna för dotterbolagen definieras samlat i
`src/data/contacts.ts`. Att webbplatsen länkar till adresserna betyder
**inte** att DNS, brevlådor eller e-postleverans har kontrollerats. Den
tekniska e-postkonfigurationen för `weab.nu` hanteras utanför repot.

Pressmaterialet på `/press/` länkar direkt till befintliga bild- och
logotypfiler under `public/`; inga särskilda externa mediebibliotek eller
registreringsformulär krävs. Pressrum och redaktionell tidning är separata
ingångar, men alla 100 artiklar fortsätter ha sina egna artikelsidor.

### WeAB Tidningen

Nyhetsrummet omfattar **100 texter totalt**: **16 officiella pressmeddelanden**
från WeAB-koncernen eller respektive dotterbolag samt **84 redaktionella texter**
av 15 återkommande, fiktiva skribenter (tio äldre och 74 nya artiklar). Insändare, ledare, krönikor, reportage,
intervjuer, ekonomi, kultur och guider har skilda skribenter och former
men delar en genomgående koncernvänlig världsbild.

Innehållet är **fiktivt rollspelsmaterial från Minecraft-servern**. De nya
tidningstexternas signaturer är påhittade. Publiceringsdatumen hör till
den fiktiva tidningens arkiv. Ingen av artiklarna utger sig för att
dokumentera verkliga händelser utanför den spelvärlden.

Tidningsarkivet på `/nyheter/` visar en förstasidesartikel, en egen avdelning
för insändare, artikelkort och klientbaserad sökning och filtrering efter
både genrer och skribenter, med stegvis visning
av artiklar. Artiklarna visar **rubrik först** och därefter kategori, datum och
rätt skribent. Officiella pressmeddelanden listas i stället på `/press/` och
länkar till bolagets verksamhetssida eller koncernen från respektive artikel.
De **ingår inte** i de femton skribenternas artikelhistorik.
Klickbara skribentnamn i redaktionella texter leder till profilsidor på
`/nyheter/skribenter/`, med ämnesområden, individuella skrivsätt och
alla respektive skribents publiceringar. Vi använder inte små etiketter över rubrikerna i tidningens
sidor. På varje artikelsida ligger `Innehållet är satir.` som liten,
nedtonad text **allra längst ned**, efter artikel och navigation.

De äldre artikeladresserna råkar fortfarande fungera, men behöver inte vara
permanenta. Skribentprofilerna definieras i `src/data/authors.ts`, och de 74
nya texterna ligger i `src/data/edition/`. Redigera äldre nyheter i
`src/data/news.ts`, nya tidningstexter i `src/data/editorial.ts` och
formatnamn och officiell pressavsändare i `src/data/publications.ts`.
Kartan `pressIssuerSlugs` styr vilken koncernenhet som står som avsändare
för vart och ett av de 16 pressmeddelandena. CI kontrollerar att utskick
saknar personlig byline, att alla 16 har en giltig bolagsavsändare och att
skribenternas profiler bara visar deras 84 redaktionella texter. Därutöver
kontrolleras datumordning, unika adresser, textlängd, genrer och bilder.

### Innehåll

WeTrade och WeLove har egna verksamhetssidor och sex Minecraft-skärmbilder i WebP-format. Anläggningarnas bilder och beskrivningar visas på respektive bolagssida, inte i ett separat projektregister.

Webbplatsen är satir, inte en verklig företags- eller rekryteringssida. Platsannonserna är fiktiva exempel och nyhetstexterna påhittade. Den avsiktliga bolagsparodin ska vara tydlig utan att besökaren behöver läsa källkoden.

Kustbygget hör till WeGamble Island. WeLiveLaughLoves bybilder visar Sektion 1 Avdelning B respektive Sektion 3 Avdelning A. WeSort-bilderna visar samma anläggning, liksom WeTrades tre bilder och WeLoves tre bilder. Arenabilderna visar Huvudstadens arena, som på kartan även heter Hungerspelsarenan, där bybor från olika distrikt tävlar om ära till sin hemby. Tre användarlevererade skärmbilder har konverterats till WebP (1440 × 810) i `public/images/`.
De två nattliga överblicksbilderna från WeLiveLaughLove ligger i respektive avdelnings galleri: Sektion 1 Avdelning B och Sektion 3 Avdelning A. Bilden för Sektion 1 Avdelning B är den rättade vyn utan kartöverlägg.
WeKills mobgrinder, järnfarm och shulkerfarm visas på WeKills sida. Shulkerfarmen försörjer WeBox med shulkerboxar. Överblicksbilden över Sektion 1 används även på startsidan.
WeRules Riksdagshus ligger i Huvudstaden. Byggnaden är statlig och fungerar som serverns riksdag, men ägs av WeAB. WeRules stadshus ligger i Sektion 1 och har en separat markering i platslistan. Huvudstadens platsmarkering är inte en exakt koordinat för Riksdagshuset.
Överblicken över Huvudstaden visas på koncernsidan utan att tillskriva WeAB hela staden. WeTravels två centralstationer i Huvudstaden och Sektion 1 visas på WeTravels verksamhetssida.
Bedrockhålet är ett WeAB-projekt bredvid WeKills kontor i Sektion 1, med en bild ovanifrån och en från botten. Det är en hel chunk utgrävd till bedrock, dekorerad med guld, järn och smaragder. Ingen exakt koordinat härleds från bilderna.
De finansiella diagrammen är fiktiva och ska inte misstolkas som faktiska
börskurser.

### Kvalitetskontroll

```bash
npm run validate:content
npm run build
```

Valideringen kontrollerar unika identifierare, korrekta verksamhetsreferenser, att alla refererade lokala bild- och logotypfiler finns och att de tio logotyperna är synkroniserade med den officiella SVG-förlagan. PR:er kör samma kontroller automatiskt. Innehållslistor och accentfärger ska härledas från `src/data/` i stället för att kopieras mellan sidor. Dekorativa element ska inte efterlikna länkar eller påhittade datapunkter.

## Licens

Distribueras under MIT-licensen. Se [LICENSE](LICENSE) för fullständig text.
