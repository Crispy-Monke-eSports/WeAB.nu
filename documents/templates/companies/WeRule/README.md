# WeRule – Bevis om medborgarskap

Här placeras den färdiggranskade **LibreOffice Writer-mallen** för WeRules medborgarskapsbevis:

```text
documents/templates/companies/WeRule/Medborgarskapsbevis.ott
```

**Status:** Den korrigerade `.ott`-filen finns nu i PR-grenen och dess Git-blobkontrollsumma matchar den lokalt verifierade originalfilen. En motsvarande [Scribble-mall för Minecraft](../../scribble/companies/WeRule/Medborgarskapsbevis.json) ingår också.

## Två dokumentformat

- **Writer/PDF:** `Medborgarskapsbevis.ott` är originalet för den godkända A4-designen med WE APPROVE-stämpel.
- **Scribble/Minecraft:** `documents/templates/scribble/companies/WeRule/Medborgarskapsbevis.json` innehåller samma saktext men en egen boksidesindelning.
- De sex fälten ska fyllas i **konsekvent i båda**, och AI ska omfördela boktexten efter verkliga värdens längd. Se [Scribble-instruktionerna](../../scribble/companies/WeRule/README.md).

Originalfilen är den senaste **korrigerade** Writer-mallen, inte den tidigare varianten som flyttade signeringen till sida två.

| Egenskap | Kontrollerat värde |
| --- | --- |
| Filformat | `application/vnd.oasis.opendocument.text-template` |
| Storlek | 154 169 byte |
| SHA-256 | `be7244856f947012f88fde56a514bd2b94be5e07449855fbed2a3a1fd5f68980` |
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

## Kvalitetskontroll innan merge

- [x] Rätt binär `.ott`-fil finns i katalogen.
- [x] SHA-256 stämmer med den granskade versionen.
- [ ] LibreOffice Writer öppnar mallen utan fel.
- [ ] Samtliga sex inmatningsfält kan ändras.
- [ ] Ett ifyllt exempel med realistisk text får plats på en A4-sida.
- [ ] Utfärdare och WE APPROVE-stämpel ligger på samma sida som resten.
- [ ] PDF-export, logotyp och den turkosa linjen är korrekta.
- [x] Inga RavenHamster-exempeluppgifter är hårdkodade i den återanvändbara mallen.
- [x] Scribble-JSON innehåller samma fullständiga saktext och samtliga sex platshållare.
- [ ] Den slutliga Scribble-layouten har granskats inne i spelklienten (ej testad).

Exempel-PDF och ifyllda dokument ska inte läggas i katalogen med produktionsmallar. 
