# BlueMap – riktiga markörlager från WeAB:s platsdata

De tre `*.conf`-filerna i `markers/` är **genererade marker-sets**, inte kompletta BlueMap-mapkonfigurationer.
De hämtar alla 35 unika waypoint-positioner från `src/data/locations.ts`. Inget innehåll från `global_waypoints.dat` sparas här.

## Aktivera på BlueMap-servern

1. Kontrollera att BlueMap på `karta.weab.nu` har kartor och kart-ID:n för **Overworld, Nether och End**. Läs de verkliga filnamnen i BlueMaps `maps/*.conf` eller kartornas `settings.json`. Exemplen här använder de vanliga namnen `world`, `world_nether` och `world_the_end`, men de är **inte verifierade** för er instans.
2. Justera i så fall `src/data/bluemap.ts` (`blueMapIds`). Kör `npm run bluemap:markers` för att generera nya marker-konfigurationer med samma namn.
3. **Kopiera bara `marker-sets: { ... }`-blocket** från respektive `bluemap/markers/<id>.conf` in i motsvarande **befintliga** BlueMap `maps/<id>.conf`. Ersätt **inte hela konfigurationsfilen**: den innehåller också världsnamn, lagring och renderingsinställningar. Om ett `marker-sets`-block redan finns, lägg till de genererade `weab-N`-grupperna i det befintliga blocket i stället för att skapa dubbletter.
4. Kör `/bluemap reload` eller starta om BlueMap enligt era serverrutiner. Kontrollera kartans markörmeny i respektive värld.

När detta installerats visas markörerna **inne i BlueMap**, där besökare kan slå av/på varje kategori. WeKill-farmer visas i eget lager, med ägaruppgift och koordinater. Fältet `detail` länkar till relevant WeAB-verksamhet. Spelarbaser är **dolda från början** men kan aktiveras i kartan; ta bort dem från den publika källan om de inte ska gå att upptäcka.

### Utan serverinstallation

PR:ens nya `/karta/` och exakta länkar på verksamhetssidorna fungerar fortfarande som webbgränssnitt. De använder BlueMaps dokumenterade URL-ankare för kamera och kart-ID. Endast **markörlagrens synlighet inne i BlueMap** kräver manuell konfiguration på BlueMap-servern.

### Uppdatera markörerna

```bash
npm run bluemap:markers
npm run bluemap:check
npm run validate:content
```

`npm run bluemap:check` körs även i CI och slår larm om marker-konfigurationerna inte matchar `locations.ts`.

Läs mer:
- [BlueMap markers](https://bluemap.bluecolored.de/wiki/customization/Markers.html)
- [BlueMap map-konfiguration](https://bluemap.bluecolored.de/wiki/getting-started/Configuration.html)
- [BlueMap webapp, kameraankare](https://bluemap.bluecolored.de/wiki/configs/Webapp.html)
