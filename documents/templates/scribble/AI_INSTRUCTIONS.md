# Bindande AI-regler: WeAB Scribble ↔ PDF

**Läs och följ hela detta dokument varje gång en AI skapar, granskar eller omvandlar WeAB-dokument i Scribble-format.** Reglerna gäller även för böcker som redan skrivits och sparats inuti spelet. De kompletterar repots `AGENTS.md`.

## 1. Två format – exakt samma saktext, självständig layout

Ett färdigt dokument ska normalt levereras i två filer:

- `<dokument>.json`: en giltig Scribble 1.6+-bok för Minecraft.
- `<dokument>.pdf`: en välformgiven, sökbar A4-PDF i rätt bolags grafiska profil.

**All meningsbärande text måste vara samma i båda filerna, i samma ordning.** Ingen AI får förkorta, sammanfatta, översätta, omformulera, lägga till eller tappa bort rubriker, namn, datum, beslut, tal, tabellvärden eller sakuppgifter när den byter format. Om underlaget behöver redigeras ska en gemensam källtext godkännas och båda utdatafilerna genereras från den.

**Formatet får och ska skilja sig.** Sidantal, sidbrytningar, radlängd, typografi, marginaler, färg, placering och avdelare kan vara olika. En PDF-sida motsvarar **inte** en Scribble-sida. Det är ett fel att skapa en PDF-sida för varje bokssida, eller att kopiera PDF-rader rakt in i en bok. Texten ska fördelas om avsiktligt för varje medium.

Varje Scribble-sida ska vara läsbar och rimligt balanserad. Använd inte sidor med slumpmässigt olika fyllnadsgrad, abrupt avhuggna ord eller så mycket text att bokrutan svämmar över. A4-PDF ska samtidigt ha professionell rubrikhierarki, naturligt textflöde och prydliga sidbrytningar. **Det är innehållet som ska bevaras, inte den andra filens layout.**

Undantag från textparitet: rena formateringskoder (`§c`, `§l`, `§r` osv.) och rent dekorativa streckavdelare (`------------------`) är layout, inte saktext. De får bytas mot grafiska format, men riktiga ord och värden får inte tas bort.

## 2. När AI skapar ett helt nytt dokument

1. Identifiera exakt bolag, dokumenttyp, avsedd läsare och verifierat innehåll.
2. Ta fram **en gemensam komplett saktext**. Om fakta saknas: fråga, markera som uppgift som ska fyllas i, eller utelämna fältet på ett öppet sätt. Hitta inte på resultat.
3. Formge PDF i bolagets riktiga profilfärg med läsbara typsnitt, korrekta rubriker, textavstånd och flytande A4-sidindelning.
4. Formge Scribble-JSON separat. Strukturera texten i korta, balanserade boksidor; använd relevanta, sparsamma `§`-koder och fler boksidor när det behövs. Behåll **alla** ord och siffror.
5. Validera varje fil och jämför texten med `tools/compare_texts.py`. Jämförelsen ska kontrollera faktiska ord och ordningsföljd, inte kräva samma rad- eller sidbrytningar.
6. Granska PDF-visning och spelbokens faktiska layout separat. Spelvisning måste testas i Scribble om klient finns; annars ska detta uttryckligen uppges som **ej testat**.
7. Leverera båda filerna, om inte användaren uttryckligen har bett om ett enda format.

## 3. När AI får en färdig JSON-bok skapad inuti spelet

**Den omvända riktningen är ett förstahandsfall, inte ett undantag.**

1. Läs alla boksidor ur `author` och `pages`, inklusive eventuell fortsättning på nästa sida.
2. Identifiera bolaget från boktexten, användarens instruktion eller annan säker källa. `author` kan vara ett **spelarnamn** och behöver inte vara ett WeAB-bolag. Gissa inte identitet.
3. Rekonstruera dokumentets logiska läsordning. Manuella radbrytningar och Scribble-sidor är **inte** PDF-sidor eller PDF-stycken.
4. Sätt om texten till A4 med företagets riktiga profilfärg, rubriknivåer, styckeavstånd och läsbar typografi. En bok på sex sidor kan ge en PDF på en sida och omvänt, utan innehållsförlust.
5. Kör vid behov:

```bash
python3 documents/templates/scribble/tools/book_to_pdf.py bok.json dokument.pdf --company WeKill
python3 documents/templates/scribble/tools/compare_texts.py bok.json dokument.pdf
```

6. Granska PDF:en visuellt (särskilt långa ord, rubriker och längre innehåll). Ändra layouten, **inte** boktextens ordval.

Programmet `book_to_pdf.py` ska inte skapa en PDF-sida per JSON-sida. Det ombryter texten och producerar ett grundformat för A4 som AI kan kvalitetssäkra vidare. Om boktextens bolagsidentitet redan är tydlig kan `--company` utelämnas. En okänd spelares `author` får aldrig automatiskt antas vara ett dotterbolag.

## 4. När AI får en PDF och ska skapa en Scribble-bok

1. Läs hela PDF:en inklusive tabeller, rubriker, referenser och sista sidan. Kontrollera att textutdraget är korrekt; om inte, granska visuellt.
2. Ordna innehållet i korrekt läsordning och **strukturera om layouten** till bokformat. En bred tabell får bli flera korta vertikala block, men behåll exakt varje etikett, siffra och värde.
3. Fördela texten på lagom långa boksidor med naturliga brytpunkter. **Klistra inte in samma sidbrytningar som PDF:en.**
4. Utgå från högst **13 synliga rader och ungefär 25 tecken per rad**, aldrig mer än **1 024 tecken per sida** eller **100 sidor per bok**. Pixelbredden i Minecraft varierar, så gränserna är konservativa heuristiker, inte speltest. Vid stort innehåll: fördela på flera volymer med all text bevarad.
5. Gör JSON med **exakt** `author` och `pages`, och sidor som rena strängar med `§`-formatkoder. Inga extra JSON-nycklar.
6. Validera JSON och jämför PDF-texten med boktexten. Vid skillnad ska felorsaken lösas, inte döljas.
7. Testa varje boksida i Scribble om möjligt. Om ingen klient finns, ange att kontrollen inte genomförts.

**En automatisk PDF-textdump till `pages` utan självständig omformgivning är inte tillåten.** AI måste bedöma ordlängd, sidbrytningar, läsbarhet och all faktisk text.

## 5. Korrekt Scribble-kontrakt

Scribble 1.6+ använder endast detta format:

```json
{
  "author": "WeSort",
  "pages": [
    "§6§lWeSort§r\n§8------------------§r\n\n§l[Dokumenttitel]§r\n\nDatum: [ÅÅÅÅ-MM-DD]\nAnsvar: [Namn]\nRef: [valfri]\n\n[Skriv här]"
  ]
}
```

- Toppnivå: **exakt** `author` (sträng) och `pages` (lista med strängar).
- **Ingen** `title`, `company`, `styles`, `metadata`, `image`, `logoUrl` eller annan påhittad nyckel.
- En JSON-sida är en sträng. Radbrytningar är `\\n` när JSON skrivs som fil.
- Textstil styrs med Minecrafts `§`-koder, inte HTML/Markdown eller RGB.
- Bildlogotyper kan inte bäddas in i Scribble-boken. Använd bolagets namn **en gång** och nära approximativ färg. PDF ska följa bolagets faktiska grafiska färg.
- Formatering som `§k` (obfuskerad text) kan inte föras över som meningsbärande text till PDF på ett säkert sätt. Avvisa sådan konvertering eller kräv klartext.
- En boksida ska inte fyllas med HTML, exakta SVG-logotyper, sidfötter eller A4-tabeller.
- Gör inte påhittade beslut, datum, mottagare eller kontrollresultat i generella mallar.

| Bolag | PDF / webbfärg | Scribble |
| --- | --- | --- |
| WeAB | `#00BCD4` | `§b` |
| WeRule | `#00BCD4` | `§b` |
| WeTravel | `#2563EB` | `§9` |
| WeTrade | `#4DAA27` | `§2` |
| WeLove | `#D65A98` | `§d` |
| WeKill | `#C62828` | `§c` |
| WeSort | `#E66A00` | `§6` |
| WeGamble | `#D4A017` | `§e` |
| WeBox | `#8E44AD` | `§5` |
| WeLiveLaughLove | `#79A83B` | `§a` |

## 6. Titel när Minecraft-boken ska signeras

**En AI som skapar eller bearbetar en Scribble-bok ska alltid ge användaren ett konkret förslag på boktitel som går att skriva in i Minecraft Java Editions signeringsruta.** Förslaget ska lämnas tillsammans med bok-/PDF-leveransen, även när den officiella dokumentrubriken är för lång för spelets titelfält.

- **Högst 15 tecken** vid signering i Minecraft **Java Edition** (i Bedrock Edition är gränsen 16). Räkna inklusive blanksteg och skiljetecken. Välj helst 10–14 tecken om ett tydligt namn kan formuleras, men upp till 15 är tillåtet.
- Boktiteln ska vara kort, naturlig, begriplig, sakligt korrekt och representativ för dokumentet. **Klipp aldrig bara av en lång titel mitt i ett ord.** Föreslå i stället en fungerande kortform.
- Svenska tecken **å, ä och ö får användas** och räknas normalt som ett tecken var när de skrivs som enskilda, normaliserade Unicode-tecken. För säkerhets skull ska titeln vara NFC-normaliserad och längden kontrolleras som UTF-16-kodenheter (Java-strängens längd). Emojier kan uppta mer än en kodenhet och bör undvikas.
- Föreslagen titel måste **testas före leverans**: `python3 documents/templates/scribble/tools/check_title.py "Järnfarmsolycka"`. Exemplet `Järnfarmsolycka` är **15 tecken och giltigt**; `Järnfarmsolyckan` är **16 tecken och för långt**.
- Presentera den rekommenderade titeln tydligt för användaren, gärna tillsammans med teckenantal, exempelvis **Förslag på boktitel: Järnfarmsolycka (15/15)**. Alternativ får ges om de också har kontrollerats.
- **Förväxla inte signeringstiteln med Scribbles JSON-struktur eller dokumentets officiella rubrik.** Scribble BookFile har endast `author` och `pages`; lägg **inte** till ett `title`-fält. Den korta boktiteln är ett separat förslag till signeringsrutan, inte en instruktion att ändra PDF-rubriken eller dokumentets saktext.
- Vid konvertering av en **redan signerad bok** ska originaldokumentets text fortfarande bevaras. Ett nytt signeringstitelförslag får lämnas vid behov, men påstå inte att ett signerat exemplar automatiskt kan döpas om eller redigeras i spelet.
- Kontrollera i spelet att även titelns **visuella bredd** är läsbar; en kontroll av teckenantal garanterar inte att texten ser bra ut i alla klienter.

Källa för gränsen vid vanlig signering: [Minecraft Wiki – Book and Quill](https://minecraft.wiki/w/Book_and_Quill). Boktiteln hanteras av Minecrafts signeringsruta, inte i Scribbles JSON-`pages`.

## 7. Innehåll och företagspolicy

- Svenska som standardspråk. WeAB:s dokument har en saklig ton **inifrån den fiktiva företagsvärlden**. Skriv inte om Minecraft, server, YouTube, tutorials eller spelversioner i dokumenten som används i världen; sådant hör bara till tekniska instruktioner.
- Behåll established names och verifierade sakuppgifter i repot. Presentera inte obekräftade siffror som verkliga resultat.
- Bolagens profil ska inte klonas mellan bolag. WeAB och WeRule delar turkos enligt den fastställda profilen.
- Skilj fakta från bedömning och förslag från beslut. Tomma mallfält ska vara synligt redigerbara, inte se ut som färdiga påståenden.
- Lägg inte teknisk text som "Mall", versionsnummer eller systemetiketter i färdigställda dokument.
- Följ repots `AGENTS.md` om rubriker, ton och bolagets befintliga grafiska identitet.

## 8. Obligatorisk slutkontroll

- [ ] En kort, begriplig **signeringstitel på högst 15 tecken** har föreslagits och validerats när AI skapat en bok.\n- [ ] Exakt rätt bolag, namn och rätt färgprofil.
- [ ] JSON giltig, UTF-8 och `author` plus `pages` är enda fälten.
- [ ] Alla sakord, rubriker, siffror och datum identiska i PDF och JSON.
- [ ] Bokssidorna **självständigt** balanserade och aldrig visuellt överfulla.
- [ ] PDF-sidorna **självständigt** satta för A4, utan kopierad boksidesindelning.
- [ ] PDF renderad och visuellt granskad.
- [ ] Minecraft/Scribble-visning utförd eller tydligt märkt **ej testad**.
- [ ] Inga omotiverade tillägg, utelämnanden eller förkortningar.
- [ ] Båda format levererade, såvida användaren inte begärt enbart ett.

**Källor:** [Scribble BookFile.java](https://github.com/chrrs/scribble/blob/main/common/src/main/java/me/chrr/scribble/book/BookFile.java), [StyledText.java](https://github.com/chrrs/scribble/blob/main/common/src/main/java/me/chrr/scribble/text/StyledText.java).
