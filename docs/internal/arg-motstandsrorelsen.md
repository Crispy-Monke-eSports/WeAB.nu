# Motståndsrörelsens ARG – intern spelmästardokumentation

> **ENDAST FÖR AI OCH SPELLEDARE.** Detta är inte en publik WeAB-text. Det får ligga i det offentliga GitHub-repot enligt användarens uttryckliga förutsättning att deltagarna inte läser källkoden. Länka inte hit från webbplatsen. Publicera inte skärmbilder, koordinater eller ledtrådens facit oavsiktligt.

## Etablerad lore

En motståndsrörelse finns i världen och rör sig mellan olika platser med hoppet att kunna störta WeAB. Rörelsens namn, ledare, medlemsantal, faktiska organisation, kopplingar till äldre uppror samt exakta planer är **inte fastslagna**. WeAB har inte offentligt erkänt den i sitt pressarkiv.

De följande **tre fysiska fynden finns redan i världen** och får inte behandlas som idéer som återstår att bygga. Uppgifterna är lämnade direkt av användaren. Skriv inte in nya formuleringar, skyltar, kistor eller geografiska förbindelser i den etablerade kanon utan nytt underlag.

| Steg | Fysisk plats/fynd | Bekräftad information | Osäkert; hitta inte på |
| --- | --- | --- | --- |
| 1 | Hemlig tunnel i ett hus inom **WeLiveLaughLove, Sektion 1, Avdelning B**, vid **x 31, y 66, z -351** (Overworld) | Där finns ett kryptiskt meddelande med innebörden att någon ska **”hålla ut”** och att avsändaren **”kommer tillbaka”**. En senare bild visar texten i hålet. | Exakt ordalydelse och tolkning ska inte rekonstrueras ur minnet om bilden inte finns tillgänglig; ingen ledare eller datering är känd. |
| 2 | **Husruin** som föregående ledtråd leder till, med **ytterligare en text på bottenplanet** | Ruinen och texten är etablerade fysiska ARG-steg, visade i användarens bilder. | Ruinens koordinater, exakt text, upphovsperson och mekanismen för vägen vidare är inte verifierade i det textunderlag som finns här. |
| 3 | **Vrak** med en **kista** | Användaren uppger att kistan i vraket har/rymmer texten **”Valresultat Riks 2045”** och att detta är **nästa ledtråd**. Exakt hur texten presenteras (bok, skylt eller annan mekanik) är inte fastslaget. | Vrakets koordinater och typ, vad kistan innehåller utöver den angivna texten, om ”Riks” avser riksdag/riket, och innebörden av ”2045” är ännu **inte fastslagna**. |

**Ordning utifrån användarens uppgifter:** hemlig tunnel → husruin med text på bottenplanet → vrakets kista ”Valresultat Riks 2045”.

### Kontinuitet kring ”2045”

WeAB-webbplatsens nuvarande daterade berättelse ligger **i november 2026**. Den text som finns på vrakets kista innehåller siffran **2045**, men det bevisar **inte** att ett riksval år 2045 redan har ägt rum eller att händelser efter 2026 har inträffat i berättelsens nutid. Det kan vara ett årtal, ett protokollnummer, en framtidsreferens eller något annat. **Lås inte tolkningen ännu.** Om årtalstolkningen senare bekräftas krävs en loremässig förklaring som användaren godkänner.

Det officiella beskedet om att WeRule fick den fullständiga myndighetsutövningen och våldsmonopolet är daterat **4 november 2026**. Vrakets fynd kan tematiskt kontrasteras mot äldre riksdagsmaterial, men **påstå inte ännu** att kistan innehåller valfusk, en förlorad demokrati eller dokument om maktövertagandet. Förbindelsen återstår att etablera.

## Förslag på ett ARG som respekterar det redan byggda

Den här delen är **framtida design, inte genomfört innehåll**.

### Spelprincip

Officiella WeAB.nu framstår fortsatt som en genomarbetad och opålitlig koncernwebbplats. Mysteriet växer ur diskreta administrativa motsägelser; en deltagare som följer spåren börjar ana en annan röst. Ledtrådarna bör i första hand ge berättelsebitar, inte en oändlig rad lösenord utan mening.

**Undvik retroaktiva ändringar av befintliga fysiska ledtrådar.** Skapa de digitala stegen först när hela kedjan är speltestad mot nuvarande skylt- och boktexter.

### Möjligt kapitel 1, efter vrakfyndet

1. **Hitta kistan på riktigt.** Den exakta titeln `Valresultat Riks 2045` blir en sökfras eller dokumentnyckel. Ingen publik startsida ska automatiskt skicka spelare direkt till vraket.
2. **Hitta en inkonsekvens i ett till synes vanligt WeAB-dokument.** En framtida intern arkivförteckning kan innehålla ett ofullständigt hänvisningsnummer, men ingen fastslagen händelse eller ett känt valresultat. Låt användaren kombinera arkivförteckningen med **ordalydelsen i kistan** för att hitta ett dolt dokument.
3. **Dold sida på `weab.nu`.** Den skulle kunna se ut som en återställd bilaga eller en gallrad registerpost. Publicera den utan navigationslänk, utan sidkortsrekommendation och med `noindex`. Eftersom Astro bygger statiska sidor och repot är offentligt är det **inte** säker åtkomstkontroll; det är ett avtal med deltagarna om att lösa mysteriet genom ledtrådarna.
4. **Första motståndsrösten.** Först här bör spelaren få ett trovärdigt tecken på att avsändaren bakom tunnelmeddelandet kanske inte är ensam. Gör ingen rörelselogotyp, kontaktsida eller offentlig rekrytering innan berättelsens identitet är avgjord.
5. **Eventuellt YouTube-material, senare i spelet.** En kort, diegetisk ”arkivfilm”, ”säkerhetsgenomgång” eller läckt överföring kan innehålla bildrutor, tal eller undertexter som låser upp nästa steg. Skapa inte och publicera inte video innan den är berättelsemässigt motiverad; YouTube ska fungera som en kanal för ett fynd, inte som WeAB:s officiella bekräftelse på motståndet.
6. **Tillbaka till världen.** Den digitala upptäckten ger skäl att söka en ny fysisk ledtråd, helst på en plats som redan finns och har logisk relation till tidigare spår. Det kan bli en belöning i form av en ny del av motståndsrörelsens historia i stället för ytterligare koordinater.

**Viktigt:** Detta är ett förslag om struktur, **inte en fastställd lösning** på ”2045”. Det faktiska nästa steget bör avgöras när exakt skylttext från huset/ruinen och fler uppgifter om vraket har lämnats.

## Föreslagen publiceringsarkitektur (ingen implementation ännu)

- Bevara ARG-facit, lösningsordning, koordinater, planerade datum och speltestchecklista under `docs/internal/`.
- Färdiga hemliga sidor kan ligga under en egen icke-navigerad Astro-rutt, till exempel `src/pages/arkiv/bilagor/`, men **bygg ingen sådan rutt innan innehållet är beslutat**. Håll den ordinarie företagsnavigationen ren.
- Använd in-world-dokument (diarienummer, beslut, gallringslistor, klipp från kommunikation) snarare än skrikiga ”hemlig sida”-gränssnitt. Skilj på äkta gamla arkiv och fabricerade dokument i spelledarens interna facit.
- Förhindra oavsiktliga avslöjanden i navigation, `sitemap`, automatisk relaterat innehåll, interna sökresultat och länkförhandsvisning. **`robots.txt` är ingen hemlighållning** eftersom dess listade URL:er kan läsas.
- Sätt `noindex` på eventuella dolda sidor, men utgå från att en tekniskt kunnig deltagare kan hitta dem. Använd inte lösenord, riktiga kontouppgifter eller oskyddad persondata i pusslen.
- Med verkliga koordinater: visa spelarna en tydlig frivillighets- och säkerhetsram utanför fiktionen. Alla fysiska platser ska ligga på servern och vara nåbara utan griefing, blockförstörelse, åtkomst till privata områden eller handlingar i verkliga livet.
- Lägg in en **hintstege** per pussel (en lätt antydan, en tydligare riktning och ett nästan fullständigt svar) samt en möjlighet att komma ikapp om ett fysiskt fynd försvinner.
- Håll **Korsdalen** helt utanför det spelbara ARG:et i denna tidsperiod. Den senare miljön finns inte i nuvarande WeAB-kanon.

## Saknas för att bygga kapitel 1 utan att hitta på

- Ordagrann transkribering av tunnelns skylt och ruinens bottenplanstext, om dessa ska användas i logiska textpussel.
- Exakt geografiskt läge på ruinen och vraket (valfritt som intern spelledardata; publicera inte).
- Om kistan med `Valresultat Riks 2045` innehåller **en bok, ytterligare föremål eller endast är namngiven**.
- Om `2045` ska få en faktisk innebörd eller förbli ett öppet mysterium.
- Hur svårt och hur långt första kapitlet ska vara; bestäm sedan var och hur en spelare rimligen upptäcker den allra första ledtråden.

**Ingen offentlig sida, nytt pressmeddelande, video eller fysisk konstruktion är skapad genom detta dokument.**
