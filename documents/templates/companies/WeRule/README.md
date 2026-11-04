# WeRule – Bevis om medborgarskap

Här placeras den färdiggranskade **LibreOffice Writer-mallen** för WeRules medborgarskapsbevis:

```text
documents/templates/companies/WeRule/Medborgarskapsbevis.ott
```

**Status i denna PR:** Mallen behöver fortfarande laddas upp som binärfil till sökvägen ovan. PR:en ska förbli ett utkast tills filen finns och är kontrollerad.

## Lägg till filen i PR-grenen

1. Ladda ner den korrigerade `.ott`-filen som hör till ärendet.
2. Döp kopian till `Medborgarskapsbevis.ott`.
3. Öppna denna katalog på **grenen `feat/werule-citizenship-certificate-template`** i GitHub och välj **Add file → Upload files**.
4. Ladda upp filen här (inte i `main` och inte i `public/`) och committa till **samma PR-gren**.
5. Kontrollera att PR:en innehåller `.ott`-filen innan den mergas.

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

- [ ] Rätt binär `.ott`-fil finns i katalogen.
- [ ] SHA-256 stämmer med den granskade versionen.
- [ ] LibreOffice Writer öppnar mallen utan fel.
- [ ] Samtliga sex inmatningsfält kan ändras.
- [ ] Ett ifyllt exempel med realistisk text får plats på en A4-sida.
- [ ] Utfärdare och WE APPROVE-stämpel ligger på samma sida som resten.
- [ ] PDF-export, logotyp och den turkosa linjen är korrekta.
- [ ] Inga RavenHamster-exempeluppgifter är hårdkodade i den återanvändbara mallen.

Exempel-PDF och ifyllda dokument ska inte läggas i katalogen med produktionsmallar. 
