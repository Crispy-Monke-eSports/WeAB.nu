# Design- och textgranskning: WeAB.nu

Den här genomgången utgår från reglerna i [AGENTS.md](../AGENTS.md). Målet är en trovärdig koncernwebbplats med WeAB:s etablerade grafiska identitet och en satir som hörs i det sakliga företagspråket. Webbplatsen är fiktiv; inget påhittat resultat eller påstådd oberoende granskning har införts.

## Gemensamma beslut

- WeAB:s ursprungliga logotyper, cyanmarkeringar, mörka anläggningsmiljöer och skärmbilder behålls. Fotografier visar de anläggningar som beskrivs, inte dekorativa generiska motiv.
- Rubriker står utan ögonbryn. Onödiga KPI-remsor, återkommande trippelkort, dubbla hero-knappar och upprepade CTA-banderoller rensas bort.
- Faktiska informationsobjekt får fortfarande vara kort eller bilder: pressfotografier, anläggningsbeskrivningar och tidningsartiklar. Policyer presenteras i öppna rader, dokumentregister eller löptext.
- Toning ovanpå ett riktigt fotografi får användas för kontrast; glassmorphism, glöd, gradienttext och dekorativa ikoner får inte tillkomma som standard.
- JavaScript-baserade filter göms innan skriptet aktiverats. Utan JavaScript ska arkivens poster fortfarande synas och länkarna fungera.
- Uppgifter om faktisk produktionskapacitet, resultat, publicerade aktiekurser eller miljöeffekter får inte fabriceras. Kontakternas `mailto:`-länkar innebär inte verifierad e-postleverans.

## Sida för sida

| Mall eller sida | Granskningsbeslut |
| --- | --- |
| `/` | Tog bort generisk faktaremsa, upprepade koncernkort och fristående slogan-CTA. Införde bolagsförteckning, verkliga anläggningsbilder, konkret processöversikt och pressmeddelanden i en daterad lista. |
| `/koncernen/` | Konkretiserade moderbolagets uppdrag, gjorde ledamöterna till namnlista och historiken till en mer öppen kronologi. |
| `/strategi/` | Behöll fem konkreta led i värdekedjan. Bytte ut fördelspaneler och relaterade företagskort mot förklarande text och bolagslista med verksamhetsstatus. |
| `/verksamheter/` | Bytte 3-kolumners kortmatta mot läsbart bolagsregister med namn, verksamhetsbeskrivning och status. |
| `/verksamheter/[slug]/` | Bevarade respektive bolags faktiska anläggningar, plats och kontakt. Tog bort den återkommande avslutande säljsektionen och förenklade hjälplänkarna. |
| `/hallbarhet/` | Behöll greenwashing-satiren. Skrev mer konkret om WeKill, boenden, markanvändning och intern granskning. Policy och fokusområden presenteras med avdelare i stället för kort. |
| `/bolagsstyrning/` | Behöll anonym VD Store-W och de fyra ledamöterna, utan påhittade personporträtt. Ändrade till namnlista och öppna styrdokumentsavsnitt. |
| `/investerare/` | Tog bort tre simulerade investerar-KPI-paneler. Redovisar offentligt tillgänglig information, policyer, dokument och rapportstatus som data. Behåller den uttryckligt satiriska kursindikationen utan att påstå att en verklig kurs finns. |
| `/investerare/rapporter/` | Dokumentlänkarna är ett register över verkliga webbsidor, inte falska PDF-rapporter. Kapitalpolicyn visas som definitioner i stället för kort. |
| `/leverantorer/` | Bytte marknadsföringsfraser mot en faktisk process, kravlista, frågor och kontaktadress. Processens steg visas som ordnade poster utan utfyllnadskort. |
| `/kontakt/` | Gjorde de nio dotterbolagens kontakter till en adressförteckning och kortade inledningen. Ingen påhittad svarsgaranti. |
| `/press/` | Pressmeddelanden visas som daterade utskick med avsändare. Nedladdningsbara originalbilder och logo behålls eftersom de har en konkret användning. Filter visas endast när det fungerar. |
| `/nyheter/` | Bevarade tidningens redaktionella förstasida och 84 riktiga artikelposter. Arkivfilter visas endast med JavaScript; utan skript syns samtliga artiklar. |
| `/nyheter/[slug]/` | Justerade pressmeddelandenas sidtitel så att de hänförs till pressrummet i stället för tidningen. Bevarade byline och artikeltexter. |
| `/nyheter/skribenter/` | Bytte initial-avatars och kortmatta mot textbaserad skribentkatalog. |
| `/nyheter/skribenter/[id]/` | Tog bort påhittade avatarporträtt och presenterar respektive artikellista i läsbara rader. |
| `/karriar/` | Ersatte generiska förmånskort med faktiska villkor och rolltyper; behöll sökbara platsannonser. Titel visas före metadata i annonserna och filter är progressivt aktiverade. |
| `/arena/` | Behöll. Verkliga bilder, platsuppgifter och ett bildgalleri utgör sidans huvudinnehåll, utan påhittad data. |
| `/404/` | Behöll som en funktionell felsida med länkar till start och verksamheter. Den specifika satiriska feltexten är ingen marknadsföringsmall. |
| Globala komponenter | Header förenklad utan glaseffekt, mobilmeny kan skrollas på låg skärm; footer behåller funktionell koncernnavigering och tydlig fiktionsupplysning. |
| `AGENTS.md` | De tio antimall-reglerna, WeAB:s ton och en leveranschecklista är explicita bindande anvisningar. |

## Verifiering

Kör `npm run check`. Det omfattar innehåll, logotyper, Astro-build och interna länkar. De statiska kontrollerna ersätter inte visuell granskning av verkliga mobiler eller tangentbordstest i en webbläsare. Testresultat från GitHub Actions ska därför redovisas separat från manuell testning.

**Innehåll som inte ändrats:** De 100 befintliga artiklarna, deras fiktiva författare, publiceringsdatum, anläggningsreferenser och faktauppgifter. En mer omfattande redaktionell omskrivning av hela arkivet bör ske som egen uppgift, med bibehållen historik och röst per författare.
