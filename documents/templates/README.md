# Dokumentmallar för WeAB

Detta är källbiblioteket för LibreOffice Writer-mallar. Filerna ligger avsiktligt utanför `public/`: ett tillägg i Git-repot ska inte automatiskt publicera dokument som nedladdningar på webbplatsen.

## Struktur

- `general/` – en neutral grundmall i `.ott`-format för WeAB och vart och ett av dess nio dotterbolag.
- `shared/` – framtida dokumenttyper som flera bolag använder, exempelvis protokoll. Gemensam dokumentstruktur kan få bolagsspecifik grafisk profil.
- `companies/` – framtida verksamhetsspecifika dokumentmallar, organiserade per bolag.

En gemensam dokumenttyp som protokoll kan på sikt placeras under `shared/protokoll/WeAB.ott`, `shared/protokoll/WeRule.ott` osv. Ett särskilt WeKill-dokument kan ligga under `companies/WeKill/`. Håll separata bolagsprofiler även för delade dokumenttyper.

## Principer

- Versionshistorik hanteras av Git. Färdiga dokument ska inte visa ordet "Mall" eller teknisk mallversion i sidfoten.
- Bevara bolagens grafiska identiteter och originalformatet `.ott`.
- Lägg inte redigerade `.odt`-dokument, fiktiva exempel eller PDF-förhandsvisningar i mallbiblioteket.
- Lägg bara till specialiserade eller delade mallar när de är färdigställda och granskade.
- Mallfilerna kan senare kopplas till en nedladdningsfunktion på webbplatsen i en separat ändring.

## Generella mallar v2.3

De tio grundmallarna hämtas från `WeAB_LibreOffice_Writer_Dokumentmallar_v2.3.zip`. De ska vara **byte-för-byte identiska** med källarkivet. Importscriptet kontrollerar SHA-256 före skrivning:

```bash
python3 scripts/import-general-writer-templates.py "/sökväg/till/WeAB_LibreOffice_Writer_Dokumentmallar_v2.3.zip"
```

Kontrollera befintliga filer:

```bash
python3 scripts/import-general-writer-templates.py --check
```

Se `general/README.md` för filförteckningen.
