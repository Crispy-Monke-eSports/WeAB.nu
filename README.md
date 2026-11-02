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
- `/koncernen/` – Om WeAB, ledningsmodell, företagsvärderingar, koncernstruktur
- `/verksamheter/` och `/verksamheter/[slug]/` – Dynamiskt genererade verksamhetssidor
- `/projekt/` – Dokumenterade anläggningar, inklusive Huvudstadens arena
- `/arena/` – Huvudstadens arena med tre bilder och sammanhang kring waypointen i huvudstaden
- `/investerare/` – Fiktiv investerarportal med **tydligt märkt demokurva**
- `/karriar/` – Satiriska exempelannonser, inte faktiska lediga jobb
- `/nyheter/` – Konceptartiklar med undersidor
- `/kontakt/` – Kontakt och lokalisering

### Redigera innehåll

- `src/data/companies.ts` – Företagsbeskrivningar, namn, accentfärger, bilder och status
- `src/data/projects.ts` – Bilder och bildtexter i projektgalleriet
- `src/data/arena.ts` – Arenagalleriets tre foton, alt-texter och bildbeskrivningar
- `src/assets/we-logo.svg` – Den bifogade officiella WE-logotypen (gemensam för alla bolag)
- `src/data/locations.ts` – Utvald servergeografi från JourneyMap-exporten (35 unika positioner, varav 14 WeKill-farmer)
- `src/data/news.ts` – Nyhetsutkast
- `src/styles/global.css` – Global grafisk profil
- `public/logos/` – Nio SVG-varianter genererade från den officiella WE-logotypen
- `public/images/` – Optimerade WebP-versioner av bilderna från Minecraft
- `sitemap-index.xml` + `robots.txt` – Genereras automatiskt vid build via `@astrojs/sitemap`

### Platsinformation från servern

`global_waypoints.dat` används **endast som indata lokalt** och är ignorerad av Git.
En deduplicerad och redigerbar lista med namn, dimensioner och blockkoordinater
förvaltas i `src/data/locations.ts`. Råfilen, ikoner, GUID:er och användarinställningar
lagras inte i repot. Två olika positioner med namnet ”Simons bas” är avsiktligt kvar.

Platserna presenteras i rätt sammanhang: de 14 farmer som WeKill äger under WeKill,
koncernlokaler på respektive verksamhetssida, samt städer, butiker,
sevärdheter och spelarbaser på koncernsidan. Det finns ingen separat waypoint-katalog.
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

Alla nio varianter i `public/logos/` (WeAB och åtta dotterbolag) är
genererade från originalfilen. Samma filer används som logotyper i
huvudmenyn, sidfoten, verksamhetskorten, koncernstrukturen, respektive
verksamhetssida och moderbolagets favicon.

`BrandMark.astro` visar WE-symbolen **över** resten av företagsnamnet:
**AB**, **Kill**, **Sort**, **Box**, **LiveLaughLove**, **Gamble**,
**Travel**, **Trade** och **Love**. Resten av namnet sätts med
[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) via
Google Fonts med monospace-reservtypsnitt. De längre namnen skalas ned
för att passa även på små skärmar. Referensbilden med logotyp och
företagsnamn har inte lagts in i repot.

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

### Innehåll

WeTrade och WeLove har egna verksamhetssidor och sex Minecraft-skärmbilder i WebP-format. Bilderna återfinns i verksamhetsbeskrivningar, nyheter och projektgalleriet.

Webbplatsen är satir, inte en verklig företags- eller rekryteringssida. Platsannonserna är fiktiva exempel och nyhetstexterna påhittade. Den avsiktliga bolagsparodin ska vara tydlig utan att besökaren behöver läsa källkoden.

Kustbygget hör till WeGamble Island. Bybilderna hör till WeLiveLaughLove. Arenabilderna visar Huvudstadens arena, där bybor från olika distrikt tävlar om ära till sin hemby. Tre användarlevererade skärmbilder har konverterats till WebP (1440 × 810) i `public/images/`.
De finansiella diagrammen är fiktiva och ska inte misstolkas som faktiska
börskurser.

### Kvalitetskontroll

```bash
npm run validate:content
npm run build
```

Valideringen kontrollerar unika identifierare, korrekta verksamhetsreferenser, att alla refererade lokala bild- och logotypfiler finns och att de nio logotyperna är synkroniserade med den officiella SVG-förlagan. PR:er kör samma kontroller automatiskt. Innehållslistor och accentfärger ska härledas från `src/data/` i stället för att kopieras mellan sidor. Dekorativa element ska inte efterlikna länkar eller påhittade datapunkter.

## Licens

Distribueras under MIT-licensen. Se [LICENSE](LICENSE) för fullständig text.
