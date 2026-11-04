# Scribble-böcker och motsvarande PDF-dokument

Denna del av WeAB:s mallbibliotek gäller **Minecraft-böcker via Scribble 1.6+**. Mallarna är separata från Writer-mallarna och ligger utanför `public/`, så de publiceras inte automatiskt på webbplatsen.

**Obligatoriskt för varje AI:** Läs [AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md) och [AGENTS.md](AGENTS.md) i sin helhet. Varje färdigt dokument ska normalt kunna levereras som **både en snygg A4-PDF och en korrekt Scribble-JSON**, med exakt samma saktext men **oberoende layout och sidindelning**. Även en JSON-bok som någon skapat *inne i spelet* ska kunna omvandlas till en korrekt bolagsprofilerad PDF.

## Innehåll

- `general/`: tio ursprungliga generella JSON-bokmallar, en per bolag.
- `schema/bookfile.schema.json`: formatkontraktet för Scribble BookFile.
- `tools/validate_books.py`: JSON- och layoutkontroll.
- `tools/book_to_pdf.py`: ombryter text från Scribble JSON till en professionell A4-PDF. En boksida motsvarar **inte** automatiskt en PDF-sida.
- `tools/compare_texts.py`: kontrollerar att saktexten är densamma i båda dokumenten.
- `tools/test_books.py`: tester för innehållsparitet och självständig pagination.
- `AI_INSTRUCTIONS.md`: bindande regler för AI, inklusive **PDF → JSON** och **JSON → PDF**.
- `AI_PROMPT.md`: kopierbar uppgiftstext för nästa AI.

## Importera en JSON-bok i Scribble

Scribble lagrar böcker som JSON-filer med `author` och `pages`. De tio startmallarna finns i `general/` och kan importeras i Scribble 1.6+. Standardmappen för bokfiler är normalt `.minecraft/books/`.

Minecraft-bokens textrymden är betydligt mindre än en A4-sida. Utgå från högst 13 synliga rader och ungefär 25 tecken per rad, med tekniskt tak på 1 024 tecken per sida och 100 sidor. Dessa mått är försiktiga riktvärden – **endast granskning i den riktiga modden visar exakt om en sida passar**.

## Skapa PDF från en JSON-bok, även om den skrevs i spelet

```bash
python3 -m pip install -r documents/templates/scribble/requirements.txt
python3 documents/templates/scribble/tools/book_to_pdf.py bok.json dokument.pdf --company WeKill
python3 documents/templates/scribble/tools/compare_texts.py bok.json dokument.pdf
```

`--company` kan utelämnas när boktextens första rad är ett känt WeAB-bolag eller `author` är bolagsnamnet. Om `author` är ett spelarnamn och bolaget inte anges ska man **inte gissa**. `--company` påverkar PDF-profilen, inte dokumentets saktext.

Den genererade PDF:en har A4-typografi och flödande stycken. **PDF-sidantalet är oberoende av antalet boksidor.** Verktyget skriver inte över originalfilen. AI ska därefter granska PDF-renderingen och eventuella visuella problem; samma text är ett absolut krav.

## Från PDF till Scribble

En AI ska analysera PDF-texten och skapa en korrekt bok med **egen boksidesindelning**. Inga ord får försvinna och texten får inte sammanfattas för att den ska passa. Långa tabeller kan omformges i vertikala block så länge samtliga faktiska etiketter och värden behålls.

En automatisk kopiering av PDF-rader till `pages` utan visuell/layoutmässig omarbetning **uppfyller inte kraven**. Jämför innehållet med `compare_texts.py`, kontrollera den resulterande boken i spelklienten och redovisa om speltest saknas.

## Testa lokalt

```bash
python3 documents/templates/scribble/tools/validate_books.py
python3 -m unittest discover -s documents/templates/scribble/tools -p 'test_books.py' -v
```

## När katalogen växer

Senare kan `scribble/shared/` innehålla gemensamma dokumenttyper, exempelvis protokoll i varje bolagsprofil, och `scribble/companies/` kan innehålla företagsspecifika böcker. **Denna leverans innehåller enbart tio generella bokmallar**, gemensamma regler och verktyg.

## Källkodsverifiering

[Scribble BookFile.java](https://github.com/chrrs/scribble/blob/main/common/src/main/java/me/chrr/scribble/book/BookFile.java) visar att JSON-objektet bara har `author` och `pages`. [StyledText.java](https://github.com/chrrs/scribble/blob/main/common/src/main/java/me/chrr/scribble/text/StyledText.java) beskriver `§`-formateringen. Det finns inga bildlogotyper i Scribble-filen; PDF använder riktiga varumärkesfärger medan boktext använder Minecrafts närmaste färgkod.
