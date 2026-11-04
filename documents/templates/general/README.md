# Generella Writer-mallar

En `.ott`-grundmall per bolag, från WeAB:s dokumentmallspaket v2.3. Alla ska ha samma grundstruktur men bolagets egen logotyp, namn och profilfärg.

| Bolag | Fil |
| --- | --- |
| WeAB | `WeAB.ott` |
| WeRule | `WeRule.ott` |
| WeTravel | `WeTravel.ott` |
| WeTrade | `WeTrade.ott` |
| WeLove | `WeLove.ott` |
| WeKill | `WeKill.ott` |
| WeSort | `WeSort.ott` |
| WeGamble | `WeGamble.ott` |
| WeBox | `WeBox.ott` |
| WeLiveLaughLove | `WeLiveLaughLove.ott` |

Dessa är generella dokumentmallar, **inte** de verksamhetsspecifika specialmallarna, ODT-exemplen eller PDF-förhandsvisningarna från källpaketet.

Använd `python3 scripts/import-general-writer-templates.py <zip-fil>` för att importera exakt dessa tio filer utan att ändra innehållet. `--check` kontrollerar kontrollsummor och antalet filer.

**Leveransstatus:** Alla tio generella `.ott`-filer ingår i versionshanteringen. Filernas SHA-256 och ODF-struktur verifieras automatiskt i CI. Vid framtida omimport ska endast källpaketets generella `.ott`-filer användas.
