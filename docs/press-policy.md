# Pressarkivet – vilka händelser får bli pressmeddelanden?

Pressrummet omfattar endast större, förankrade händelser i WeAB:s berättelse. En rutinmässig lagerkontroll, en skyltplan, en intern kapacitetsdiskussion eller en allmän framtidsvision är inte ett pressmeddelande, även om texten är formulerad som ett företagsutskick.

## Storyunderlag

Utgå först från `docs/story-kontinuitet.md` som samlar kronologi, berättarposition och olösta frågor. Fördjupa därefter i den berättelse som faktiskt dokumenterats i projektet: `src/pages/koncernen.astro` (koncernhistorien), `AGENTS.md` (fastslagna fakta), `src/data/arena.ts` (Hungerspelen), `docs/wedgs-forslag.md` (DGS-frågan) och källfilerna för de viktigaste pressbeskeden i `src/data/press-*.ts`. Förslag, beslut och faktiskt genomförande är skilda saker. Om det finns ytterligare storydokument utanför repot måste de tillföras innan deras innehåll kan ligga till grund för ett utskick.

## Publicerade utskick (5)

| Slug | Koncernhändelse | Redaktionell motivering |
| --- | --- | --- |
| `werule-samlad-myndighetsutovning` | WeRule övertar myndighetsutövningen | Grundläggande förändring av den offentliga makten. |
| `werule-valdsmonopol-och-tillsyn` | WeRule övertar våldsmonopolet | Central och separat del av den historiska maktöverföringen. |
| `weab-marta-ek-olycka-jarnfarmen` | Märta Ek omkommer vid järnfarmen | Berättelsens avgörande händelse om censur och intern säkerhet. |
| `huvudstadens-arena` | Hungerspelen | Huvudstadens arena har dödliga strider med två bybor per by och ger koncernen inkomster. |
| `weab-wedgs-inkommet-skatteforslag` | DGS-förslaget från ezzo13337 | Ett obeslutat förslag om koncernens första skattesystem; WeDGS är Store-W:s och ledningens föreslagna namn. |

15 rutinmässiga pressnotiser har avpublicerats från det statiska arkivet. De avpublicerade texterna kan återfinnas i repots Git-historik. Det innebär inte att de verksamheter som förekommer i texterna har upphört, bara att interna rutiner och triviala uppdateringar inte längre rubriceras som officiella presshändelser. De 84 redaktionella artiklarna i WeAB Tidningen påverkas inte.

## Regler för framtida AI-skribenter

1. Läs `AGENTS.md`, denna fil och den relevanta storykällan innan något skrivs.
2. Identifiera en **konkret och dokumenterad** händelse. Om händelsen bara är en rutin, skriv ingen presspost.
3. Skilj mellan inkommet förslag, pågående beredning, fattat beslut och genomfört uppdrag. Hitta inte på personer, datum, vinstbelopp, omröstningsresultat eller anläggningsstatus.
4. Bevara nio registrerade dotterbolag till dess att uttryckligt beslut anger annat.
5. Skriv med WeAB:s sakliga, koncerninterna röst. Nämn inte spel eller Minecraft i publik text.
6. Vid ett faktiskt nytt pressbesked: redigera `src/data/news.ts` (eller importera ett `press-*.ts`), ange avsändare i `src/data/publications.ts`, justera press-whitelisten och antal i `scripts/validate-content.mjs`, `AGENTS.md` och `README.md`.
7. Kör `npm run check` och verifiera att sidlänkarna är riktiga innan publicering.
