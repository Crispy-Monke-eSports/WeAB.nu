# WeRule – Bevis om medborgarskap

Här placeras den färdiggranskade **LibreOffice Writer-mallen** för WeRules medborgarskapsbevis:

```text
documents/templates/companies/WeRule/Medborgarskapsbevis.ott
```

**Status:** Den uppdaterade `.ott`-mallen och motsvarande [Scribble-mall för Minecraft](../../scribble/companies/WeRule/Medborgarskapsbevis.json) ingår i mallbiblioteket. Writer-versionen har korrigerats för att utfärdare och WE APPROVE-stämpel ska rymmas på samma A4-sida.

## Två dokumentformat

- **Writer/PDF:** `Medborgarskapsbevis.ott` är originalet för den godkända A4-designen med WE APPROVE-stämpel.
- **Scribble/Minecraft:** `documents/templates/scribble/companies/WeRule/Medborgarskapsbevis.json` innehåller samma saktext men en egen boksidesindelning.
- De sex fälten ska fyllas i **konsekvent i båda**, och AI ska omfördela boktexten efter verkliga värdens längd. Se [Scribble-instruktionerna](../../scribble/companies/WeRule/README.md).

Writer-mallens fasta text, inmatningsfält, WE-logotyp och stämpel är oförändrade. Den senaste layoutkorrigeringen gäller endast sidmarginaler och styckeavstånd för att undvika att signeringen flyttas till sida två i Writer.

| Egenskap | Kontrollerat värde |
| --- | --- |
| Filformat | `application/vnd.oasis.opendocument.text-template` |
| Storlek | 154 150 byte |
| SHA-256 | `a6076c69c168ed5b01d33616de01e6b6c54fc78e19ae54e45518980f10562f26` |
| Sidformat | A4 |
| Avsedd utformning | WeRules turkosa grafiska profil, röd `WE APPROVE`-stämpel |

Kontrollera att uppladdad fil har **samma SHA-256**. Om den har redigerats avsiktligt behöver kontrollsumman och granskningen uppdateras.

## Redigerbara fält

Mallen har sex namngivna Writer-inmatningsfält. De är till för mänsklig redigering och automatiserad ifyllning:

| Fältnamn (för AI och kod) | Visad uppgift |
| --- | --- |
| `citizen_name` | Medborgarens namn |
| `decision_date` | Beslutsdatum |
| `citizenship_start_date` | Medborgarskap gäller från |
| `decision_reference` | Beslutsreferens |
| `certificate_number` | Bevisnummer |
| `issued_by` | Utfärdat av |

Skapa ett **nytt dokument från OTT-mallen**, fyll i fälten och exportera sedan till PDF. Ändra inte rubriker, fasta myndighetstexter eller grafisk profil när enbart fälten ska fyllas i. Stämpeln ska endast säga **WE APPROVE**, inte utfärdarens namn. Dokumentet ska normalt rymmas på **en A4-sida**.

## Kvalitetskontroll

- [x] Rätt binär `.ott`-fil finns i katalogen.
- [x] SHA-256 stämmer med den granskade versionen.
- [x] LibreOffice Writer öppnar mallen utan fel.
- [x] Samtliga sex inmatningsfält kan ändras.
- [x] Ett ifyllt exempel med realistisk text får plats på en A4-sida.
- [x] Utfärdare och WE APPROVE-stämpel ligger på samma sida som resten.
- [x] PDF-export, logotyp och den turkosa linjen är korrekta.
- [x] Inga RavenHamster-exempeluppgifter är hårdkodade i den återanvändbara mallen.
- [x] Scribble-JSON innehåller samma fullständiga saktext och samtliga sex platshållare.
- [ ] Den slutliga Scribble-layouten har granskats inne i spelklienten (ej testad).

Automatisk layoutregression kontrollerar i LibreOffice att både den tomma mallen och ett tillfälligt ifyllt exempel ger **en A4-sida** och behåller alla fält:

```bash
python3 scripts/validate_werule_citizenship_layout.py
```

Kontrollen kräver LibreOffice Writer och `pypdf`. Annan kontorsprogramvara kan paginera annorlunda; kontrollera där vid behov.

Exempel-PDF och ifyllda dokument ska inte läggas i katalogen med produktionsmallar. 
