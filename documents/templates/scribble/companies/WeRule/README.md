# WeRule – Medborgarskapsbevis (Scribble)

Den färdiga dokumenttypen har två **återanvändbara**, samordnade källmallar:

- **Minecraft/Scribble:** [Medborgarskapsbevis.json](Medborgarskapsbevis.json)
- **LibreOffice Writer:** [Medborgarskapsbevis.ott](../../../companies/WeRule/Medborgarskapsbevis.ott)

JSON-filen är en giltig Scribble BookFile med **endast** `author` och `pages`, utan hårdkodade medborgaruppgifter. WeRules turkosa profil representeras med `§b`; Writer-dokumentet har dessutom originalets logotyp, färglinje och röda **WE APPROVE**-stämpel.

## Användning

Scribble-mallen innehåller **samma saktext och samma ordningsföljd** som Writer-mallen, men är separat formgiven till sju boksidor. Bokens sidbrytningar ska **inte** användas som PDF-sidbrytningar. Det går inte att bädda in den grafiska stämpeln i Scribbles rena textformat.

Fyll i de sex uppgifterna i **båda** mallarna, med samma faktiska värden:

| Writer-fältnamn | Scribble-platshållare |
| --- | --- |
| `citizen_name` | `[Medborgarens namn]` |
| `decision_date` | **första** `[ÅÅÅÅ-MM-DD]` |
| `citizenship_start_date` | **andra** `[ÅÅÅÅ-MM-DD]` |
| `decision_reference` | `[Beslutsreferens]` |
| `certificate_number` | `[Bevisnummer]` |
| `issued_by` | `[Utfärdarens namn]` |

Om exempelvis ett namn eller beslutsnummer blir längre än platshållaren ska en människa eller AI **göra en ny, balanserad sidindelning i boken**. Klipp inte bort text och kopiera inte mekaniskt från PDF-sidor.

För en **formell PDF med exakt den godkända designen** ska LibreOffice-mallen fyllas i och exporteras till PDF. `tools/book_to_pdf.py` kan ge en A4-PDF av en spelbok, men dess generiska design ersätter inte denna dokumenttyps officiella Writer-layout och stämpel. Om en bok har skapats i spelet måste dess uppgifter och hela text kontrolleras innan en formell PDF görs från Writer-mallen.

### Boktitel vid signering

Föreslagen titel: **Medborgarbevis** (14/15 tecken i Minecraft Java Edition). Detta är **inte** ett nytt JSON-fält eller en ändring av dokumentets fullständiga rubrik.

### Validera

```bash
python3 documents/templates/scribble/tools/validate_books.py --strict-layout documents/templates/scribble/companies/WeRule/Medborgarskapsbevis.json
python3 documents/templates/scribble/tools/verify_werule_citizenship.py
python3 documents/templates/scribble/tools/check_title.py Medborgarbevis
```

Den andra kontrollen läser det verkliga `.ott`-innehållet, kontrollerar Writer-fälten och jämför all synlig saktext i mallarna. Bokens längd- och radkontroll är en försiktig heuristik: **faktisk visning i Minecraft/Scribble är inte testad**.

Läs även [de gemensamma AI-reglerna](../../AI_INSTRUCTIONS.md) innan AI skapar eller konverterar dokument.
