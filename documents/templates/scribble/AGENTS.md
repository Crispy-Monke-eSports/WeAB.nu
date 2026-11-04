# AI-regler – WeAB Scribble

**Läs [AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md) i sin helhet före alla uppgifter med dessa mallar.** Den kompletterar repots övergripande `AGENTS.md`.

- När du skapar ett färdigt dokument ska det normalt levereras som **snygg PDF och Scribble-JSON**, med **identisk saktext** i samma ordning.
- **PDF och Minecraft-bok ska pagineras oberoende**. Kopiera aldrig bara sidindelningen mellan dem. Balansera varje bokssida efter Scribbles lilla textyta och varje PDF-sida efter A4.
- **Från JSON skapad i spelet till PDF:** läs alla `pages`, identifiera bolaget utan att gissa, rekonstruera läsordningen och sätt om texten till en snygg A4-PDF.
- **Från PDF till JSON:** läs hela PDF:en, behåll alla ord och värden och dela om innehållet till välfungerande bokssidor. Tappa inte data från tabeller.
- Bokformat: exakt `author` och `pages`; sidsträngar med Minecrafts `§`-koder. Inga extra fält eller bildlogotyper.
- Använd `tools/validate_books.py` och `tools/compare_texts.py`. Granska PDF visuellt och testa Scribble i spelklienten när den är tillgänglig. Ange annars uttryckligen att speltest saknas.
- Följ WeAB:s befintliga namn, bolagsprofil och sakliga in-world-ton. Lägg inte tekniska spelreferenser i färdiga in-world-handlingar.
