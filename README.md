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
- `src/data/locations.ts` – Utvald servergeografi från JourneyMap-exporten (35 unika positioner, varav 14 WeKill-farmer)
- `src/data/news.ts` – Nyhetsutkast
- `src/styles/global.css` – Global grafisk profil
- `public/logos/` – Enkla digitala WE-emblem som SVG
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

### Pixelart-logotyper (endast kod)

WE-symbolen är uppbyggd av en redigerbar blockmatris i `scripts/generate-logos.mjs`.
Varje `#` i matrisen ritas som en fyrkantig SVG-pixel; ingen bildgenerering,
font-rendering eller extern bildresurs används. Alla nio färgvarianterna
uppdateras genom:

```bash
node scripts/generate-logos.mjs
```

Originalets Minecraft-block har olika ljussättning och perspektiv i skärmbilden.
Kodversionen är därför en ren, frontvänd pixelart-tolkning av samma symbol.

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

Valideringen kontrollerar unika identifierare, korrekta verksamhetsreferenser och att alla refererade lokala bild- och logotypfiler finns. PR:er kör samma kontroller automatiskt. Innehållslistor och accentfärger ska härledas från `src/data/` i stället för att kopieras mellan sidor. Dekorativa element ska inte efterlikna länkar eller påhittade datapunkter.

## Licens

Distribueras under MIT-licensen. Se [LICENSE](LICENSE) för fullständig text.
