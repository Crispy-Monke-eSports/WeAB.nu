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
- `/koncernen/` – Om WeAB, koncernstruktur och moderbolagets anläggningar
- `/verksamheter/` och `/verksamheter/[slug]/` – Verksamhetssidor med bolagens egna byggnader, bilder och platsmarkeringar
- `/arena/` – Huvudstadens arena med tre bilder och platsmarkeringen Hungerspelsarenan
- `/investerare/` – Fiktiv investerarportal med **tydligt märkt demokurva**
- `/karriar/` – Platsannonser inom rollspelet; inga ansökningar via webbplatsen
- `/nyheter/` – WeAB Tidningen: pressmeddelanden, insändare, ledare, reportage och andra genrer
- `/kontakt/` – Kontakt via Minecraft-servern

### Redigera innehåll

- `src/data/companies.ts` – Företagsbeskrivningar, namn, accentfärger, bilder och status
- `src/data/projects.ts` – Anläggningar, bilder och alt-texter som visas på respektive bolagssida och koncernsidan
- `src/data/companyEditorial.ts` – Bolagens egna avsnitt, anläggningsgrupper och kopplingar mellan verksamheter
- `src/data/arena.ts` – Arenagalleriets tre foton och alt-texter
- `src/assets/we-logo.svg` – Den bifogade officiella WE-logotypen (gemensam för alla bolag)
- `src/data/locations.ts` – Internt referensmaterial från JourneyMap-exporten (35 unika positioner, varav 14 WeKill-farmer); visas inte på webbplatsen
- `src/data/news.ts` – 16 längre fiktiva pressmeddelanden (nio omskrivna och sju nya)
- `src/data/editorial.ts` – Tio fiktiva tidningstexter i åtta redaktionella genrer
- `src/data/publications.ts` – Gemensamt, datumordnat tidningsarkiv med skribent- och formatmetadata
- `src/styles/global.css` – Global grafisk profil
- `public/logos/` – Tio SVG-varianter genererade från den officiella WE-logotypen
- `public/images/` – Optimerade WebP-versioner av bilderna från Minecraft
- `sitemap-index.xml` + `robots.txt` – Genereras automatiskt vid build via `@astrojs/sitemap`

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

### WeAB Tidningen

Nyhetsrummet omfattar 26 texter: **16 längre pressmeddelanden** och
**tio redaktionella texter**. Insändare, ledare, krönikor, reportage,
intervjuer, ekonomi, kultur och guider har skilda skribenter och former
men delar en genomgående koncernvänlig världsbild.

Innehållet är **fiktivt rollspelsmaterial från Minecraft-servern**. De nya
tidningstexternas signaturer är påhittade. Publiceringsdatumen hör till
den fiktiva tidningens arkiv. Ingen av artiklarna utger sig för att
dokumentera verkliga händelser utanför den spelvärlden.

Arkivet på `/nyheter/` visar en förstasidesartikel, en egen avdelning
för insändare, artikelkort och klientbaserad sökning och filtrering efter
genrer. Artiklarna visar **rubrik först** och därefter kategori, datum och
skribent. Vi använder inte små etiketter över rubrikerna i tidningens
sidor. På varje artikelsida ligger `Innehållet är satir.` som liten,
nedtonad text **allra längst ned**, efter artikel och navigation.

Befintliga artikel-slugs är bevarade. Redigera nyheterna i
`src/data/news.ts`, nya tidningstexter i `src/data/editorial.ts` och
formatnamn i `src/data/publications.ts`. CI kontrollerar datumordning,
unika adresser, artiklarnas längd, genretäckning och bildreferenser.

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
