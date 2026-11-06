# Intern geografisk referens – WeAB:s nuvarande värld

> **ENDAST FÖR AI, REDAKTION OCH STORYKONTINUITET.** Detta dokument ska inte importeras i Astro, användas som webbplatsinnehåll eller ligga till grund för en offentlig kartfunktion. Lägg inte de bifogade kartbilderna i `public/`, `src/assets/` eller `src/pages/`. Använd dem för att förstå hur världen hänger ihop, inte för att skapa ny lore.

## Underlag och avgränsning

- Sex skärmbilder från **BlueMap**, tillhandahållna i konversationen 6 november 2026. Karttjänsten finns på `https://karta.weab.nu`. Källorna visas med **norr uppåt, söder nedåt, väster åt vänster och öster åt höger**, och samtliga bilder visar samma område med olika etiketter.
- Skärmbildernas markörer visar **relativa geografiska placeringar**, inte nödvändigtvis ett uttömmande register över varje byggnad. De är en ögonblicksbild och får inte tolkas som att utmärkta anläggningar är färdigställda eller i drift.
- `src/data/locations.ts` är projektets befintliga **interna JourneyMap-waypointregister** och anger koordinater för platser som finns där. Kombinationen av denna fil och kartbilderna ger nedanstående orientering.
- I Overworld ökar **x österut** och **z söderut**. Värdena i tabellen nedan är hämtade från det existerande waypointregistret, inte beräknade ur bildpixlar.
- Bilderna **kopieras inte till GitHub i denna ändring**. De finns bara som referens i konversationen. Om de vid ett senare tillfälle ska lagras i repot krävs en uttrycklig separat åtgärd; repot är offentligt även när filer inte används av webbplatsen.

## Geografiska hållpunkter

| Plats | x | z | Relativt läge från Sektion 1:s centrala anläggningar |
| --- | ---: | ---: | --- |
| WeSort (centrala industriklustret) | 178 | -505 | Referenspunkt för orienteringen |
| WeTrade | 186 | -715 | Norr om WeSort |
| WeSort – Colors | 223 | -851 | Längre norrut från WeTrade |
| WeLiveLaughLove, Sektion 1 Avdelning B | 62 | -350 | Sydväst om WeSort, nära det centrala området |
| Sektion 1:s stadshus | 59 | -505 | Väster om WeSort, inom Sektion 1 |
| WeLiveLaughLove, Sektion 3 Avdelning A | 893 | -717 | Nordost om WeSort, tydligt åtskilt från Sektion 1 |
| Huvudstaden | -612 | -48 | Sydväst om Sektion 1, vid vattnet |
| Hungerspelsarenan | -756 | 173 | Sydväst om Huvudstaden |
| Casino Ön / WeGamble Island | -826 | -1144 | Nordväst om Sektion 1 och långt norr om Huvudstaden |
| WeLove | -1576 | -400 | Långt väster om Sektion 1; västnordväst om Huvudstaden |

Tabellen är **intern positionsorientering**, inte tillståndsbevis. Ingen av dessa koordinater får kopieras till publik metadata, kartor eller artiklar enbart för att de står här.

## Säkra samband som kartorna illustrerar

1. **Sektion 1** ligger i den centrala, mer tätt bebyggda delen av kartan. WeSort är en användbar ankarepunkt; WeTrade och WeSort – Colors ligger norr om den, medan **WeLiveLaughLove Sektion 1 Avdelning B** ligger söder/sydväst om den.
2. **Sektion 3 Avdelning A** ligger **nordost** om Sektion 1, inte västerut vid WeLove och inte i Huvudstaden. WeLiveLaughLoves två avdelningar är därmed geografiskt skilda.
3. **WeLove** ligger klart **väster** om det centrala företagsområdet, nära kartans västra grönområden. Förväxla inte WeLove med byområdena som WeLiveLaughLove förvaltar.
4. **Huvudstaden** ligger **sydväst** om centrala Sektion 1, på/vid den kust- och ömiljö som syns på kartan. **Hungerspelsarenan** ligger i den sydvästra delen av detta område jämfört med waypointen Huvudstaden. Arenan är platsen för Hungerspelen, inte en vanlig sportarena.
5. **Casinoön** ligger **nordväst** om Sektion 1 och **norr/nordväst** om Huvudstaden. En byggnad kan synas där, men **WeGamble Island är fortfarande under uppbyggnad**; WeGambles nuvarande spelintäkter ska inte automatiskt tillskrivas ett öppet kasino där.
6. Kartan visar ett större vattenområde mellan delar av fastlandet och Huvudstaden. Den visar också vidsträckta orangefärgade badlandsområden söder/sydost om det centrala området. Terrängen får användas som geografisk orientering, men ingen exploatering eller markäganderätt får härledas ur färgerna.
7. **Korsdalen saknar plats i dessa kartor och i nuvarande waypointregister.** Det är en möjlig, ännu okontaktad framtida expansionsidé från en senare berättelsetid. Placera den inte på kartan, tilldela den inte koordinater och anta ingen förbindelse dit.

## Kontinuitetsregler för framtida AI-texter

- Vid påståenden som ”på andra sidan staden”, ”norr om”, ”på vägen till” och ”vid kusten”: kontrollera riktningen här och, vid behov, de ursprungliga waypointvärdena i `src/data/locations.ts`. Hitta inte på restider, transportlänkar, vägar eller genomförda resor utifrån närhet i bilden.
- Skilj på **WeLove (väster)** och **WeLiveLaughLove (centrala Sektion 1 och nordöstra Sektion 3)**.
- Skilj på **Huvudstaden (sydväst)**, **Hungerspelsarenan (sydväst om Huvudstaden)** och **Casinoön (nordväst/norr)**.
- Ange aldrig att byggnader, verksamheter eller samhällen har upprättats enbart därför att en symbol eller struktur syns på en kartbild. Verksamhetsstatus ska komma från `docs/story-kontinuitet.md` och källorna där.
- **Publicera inte kartbilderna, skärmbilderna eller deras koordinater på webbplatsen.** Denna text finns bara för att redaktionella och AI-genererade berättelser ska vara geografiskt konsekventa.
