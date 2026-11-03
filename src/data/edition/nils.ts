import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const nilsArticles = makeMagazineArticles('nils-brynja', 15, [
  {
    "slug": "under-sorten-i-wesort",
    "format": "reportage",
    "title": "Där WeSort låter blocken hitta rätt utan ett enda råd",
    "summary": "I den stora sorteringsanläggningen följer vi material som går in i systemet och kommer ut på en bestämd plats.",
    "image": "/images/wesort-interior.webp",
    "scene": "En behållare öppnas och ett föremål rör sig vidare i det dolda systemet. Inne i WeSort är rörelsen mer intressant än bullret, eftersom varje förflyttning redan har en tänkt destination.",
    "context": "Sorteringens styrka syns i de små upprepningarna. Samma sak händer igen och igen tills kistorna får ett innehåll som både går att använda och hitta tillbaka till.",
    "tension": "Det händer förstås att ett material får vänta på utrymme. På avstånd ser det ut som ett stopp, men vid anläggningen blir det tydligt hur förvaring och kapacitet är samma fråga.",
    "ending": "När jag lämnar hallen fortsätter flödet utan publik. Det är kanske det mest påtagliga intrycket från besöket: anläggningen kräver inte att någon står och beundrar dess arbete."
  },
  {
    "slug": "en-timme-vid-jarnfarmen",
    "format": "reportage",
    "title": "En timme vid järnfarmen berättar mer än ett möte",
    "summary": "WeKills produktion pågår enligt sin mekanik, men den avgörande frågan kommer när materialet ska vidare.",
    "image": "/images/wekill-iron-farm.webp",
    "scene": "Driftteknikern Signe börjar sitt pass vid WeKills järnfarm med att öppna en kista. Det är inte för att räkna varje järntacka. Hon vill se att det finns plats för nästa. – Farmen kan fortsätta arbeta även när ingen tittar, säger hon. Det är därför jag tittar.",
    "context": "En järnfarm är en automatiserad anläggning som ger järn utan att någon behöver bryta varje malmblock för hand. Signe sköter inte själva arbetet åt maskinen. Hon kontrollerar att utmatningen fungerar och att leveransen kan skickas vidare till WeSort.",
    "tension": "Tidigare arbetade hon mest med små reparationer på plats. Nu följer hon också materialets väg ut ur anläggningen. Om kistan blir full kan farmen se ut att producera som vanligt, samtidigt som nästa byggprojekt står utan sitt järn. – Det är ett fel man inte upptäcker genom att bara lyssna, säger Signe.",
    "ending": "Innan vi går har hon gjort en anteckning om en tratt som bör ses över vid nästa tillsyn. Farmen stannar inte i dag. För Signe är det hela poängen med att komma dit innan någon annan märker ett problem."
  },
  {
    "slug": "pa-besok-hos-welove",
    "format": "reportage",
    "title": "I WeLoves lokaler är framtiden redan en arbetsuppgift",
    "summary": "Vi ser närmare på hur anläggningen för villager breeding kopplas till koncernens fortsatta personalbehov.",
    "image": "/images/welove-headquarters.webp",
    "scene": "Haapalainen stannar vid skylten utanför WeLoves anläggning och pekar mot rummen längre in. Där planeras inte nästa arbetspass, utan vilka arbetsplatser som ska kunna bemannas när dagens yngsta villagers har vuxit upp.",
    "context": "Villager breeding är en etablerad del av Minecraft-världen. Här har WeAB gjort den till en fråga också för personalplaneringen: WeTrade behöver bibliotekarier, WeLiveLaughLove behöver veta hur många boende som ska få plats och WeLove håller reda på när behoven möts.",
    "tension": "– Om vi börjar planera först när en disk står tom har vi redan börjat för sent, säger Haapalainen. Han visar två listor: en över planerade arbetsplatser, en över boendeplatser. De är inte lika långa ännu.",
    "ending": "När vi går ut syns den rosa WE-skylten mot berget igen. Framtiden är fortfarande osäker för den som växer upp här. I koncernens pärm har den åtminstone fått en egen flik."
  },
  {
    "slug": "bedrockhalets-botten",
    "format": "reportage",
    "title": "Nere vid bedrockhålets botten är djupet svårt att förhandla om",
    "summary": "Ett helt chunk har grävts ur och dekorerats. Vi följer det stora projektet från marknivån till botten.",
    "image": "/images/bedrock-hole-interior.webp",
    "scene": "Ovanifrån ser hålet ut som en ruta som saknas i landskapet. Nere vid bedrock är den rutan en hel värld: väggarna stiger så högt att jag behöver leta efter himlen mellan kanterna.",
    "context": "Ett helt chunk har grävts ur nära WeKills kontor i Sektion 1. Arbetet har inte fyllt ett förråd med nya varor. Det har i stället skapat en plats där frånvaron av mark går att besöka, betrakta och ta omvägen förbi.",
    "tension": "Dekorationerna längst ned får djupet att kännas planerat snarare än övergivet. Det är en märklig investering för en koncern som annars gärna mäter resultat i kistor. Men WeAB kan också redovisa något som folk faktiskt stannar för att se.",
    "ending": "På vägen upp passerar jag samma lager av sten som på vägen ned. Nu ser jag arbetet annorlunda: inte som ett hål som blev färdigt, utan som tusentals block som någon bestämde sig för att flytta."
  },
  {
    "slug": "bakom-wetrades-diskar",
    "format": "reportage",
    "title": "Ett besök bakom WeTrades ordnade handelsdiskar",
    "summary": "Handel med enchanted books förutsätter mer än efterfrågan; den behöver personal, rutiner och en plats där sortimentet går att hitta.",
    "image": "/images/wetrade-hall.webp",
    "scene": "Butiksvärden Elin byter en skylt vid en av WeTrades diskar. En besökare har frågat efter en bok som finns i hallen, men under ett namn hen inte kände igen. – Det ska inte krävas att man redan kan sortimentet för att hitta hit, säger Elin.",
    "context": "WeTrade samlar villagers som säljer enchanted books, böcker som ger utrustning särskilda egenskaper. Kunden möter många diskar på en och samma plats. Elins uppgift är att göra vägen mellan frågan och rätt handlare kortare, medan WeLove planerar för personalen bakom diskarna.",
    "tension": "Det nya skyltsystemet sorterar både efter bokens namn och efter vad den kan användas till. För en kund med en trasig hacka är det ofta lättare att fråga efter reparation än efter den rätta stavningen på Mending. Elin provläser skylten från entrén innan hon fäster den.",
    "ending": "Nästa steg är att se vilka frågor som fortfarande ställs i hallen. Om samma bok fortsätter att vara svår att hitta kan fler skyltar behöva flyttas. En handel som aldrig ändrar sin skyltning är, enligt Elin, inte nödvändigtvis en handel där alla hittar rätt."
  }
] satisfies StorySeed[]);
