import { arenaPhotos } from './arena.ts';

/**
 * Fiktiva pressmeddelanden från WeAB:s Minecraft-rollspel.
 * Datumen avser publiceringsdatum inom den fiktiva koncernens nyhetsarkiv.
 */
export interface NewsItem {
  slug: string;
  publishedAt: string;
  type: string;
  title: string;
  summary: string;
  body: string[];
  image: string;
  alt: string;
}

export const news: NewsItem[] = [
  {
    "publishedAt": "2026-11-01",
    "slug": "werule-fastighetsforvaltning",
    "type": "OFFENTLIGA FASTIGHETER",
    "title": "WeRule samordnar förvaltningen av huvudstadens offentliga byggnader",
    "summary": "Riksdagshuset och stadshuset omfattas nu av en gemensam fastighetsmodell. Det offentliga uppdraget består; administrationen blir mer förutsägbar.",
    "image": "/images/werule-riksdagshuset.webp",
    "alt": "Riksdagshuset i Huvudstaden med vit fasad och cyan detaljer",
    "body": [
      "Ett sammanträde kan börja först när någon har sett till att dörren går att öppna. Därför för WeRule nu samman tillsynen av Riksdagshuset i Huvudstaden och stadshuset i Sektion 1 i en gemensam fastighetsplan. Ventilation, belysning och nycklar får egna ansvariga i stället för att bli frågor som upptäcks när mötet redan har börjat.",
      "Riksdagen fortsätter att använda Riksdagshuset för sina sammanträden. Fastigheten ägs av WeAB, som också tar det långsiktiga ansvaret för dess skick. En begäran om att flytta en vägg behandlas därför som en fastighetsfråga även om den framförs under en politisk debatt.",
      "För Sektion 1 innebär beslutet bland annat en samlad felanmälan för stadshuset. En trasig lykta ska inte behöva vandra mellan protokoll och förråd; den ska få ett ärendenummer och, om det behövs, en ersättare från WeSort.",
      "WeRule börjar med en inventering av entréer och gemensamma ytor. Institutionernas uppdrag ändras inte. De får bara lokaler vars framtid inte behöver avgöras vid varje nytt sammanträde."
    ]
  },
  {
    "publishedAt": "2026-10-30",
    "slug": "wesort-colors-kapacitet",
    "type": "LOGISTIK",
    "title": "WeSort Colors får en tydligare roll i koncernens varuflöden",
    "summary": "Färgsorteringen knyts närmare centrallagret. Den nya ordningen ska minska osäkerheten om var varje block hör hemma.",
    "image": "/images/wesort-interior.webp",
    "alt": "Sorterings- och lagermiljö i WeSort",
    "body": [
      "Tre cyanblock. Tre olika kistor. Två nya beställningar på material som redan fanns i hallen.",
      "Det var efter den leveransen som WeSort beslutade att ge WeSort Colors ett tydligare uppdrag i koncernens sorteringssystem.",
      "– Vi hittade allt till slut. Det vi inte hittade var skälet till att vi hade beställt det igen, säger en ansvarig vid sorteringen.",
      "Huvudanläggningen ska nu registrera inkommande varor. Colors tar hand om färgade block och nyanser som annars lätt blandas ihop. Materialet får en etikett innan det skickas vidare till WeBox.",
      "För WeKills farmer ändras ingenting vid produktionen. Däremot ska en leverans kunna följas hela vägen till sin lagerplats, även när flera kistor ser ut att innehålla samma färg.",
      "WeSort har redan reserverat fack för färger som ännu inte levererats. De är tomma. På ritningen är de upptagna."
    ]
  },
  {
    "publishedAt": "2026-10-28",
    "slug": "wekill-tredimensionell-produktionsplan",
    "type": "PRODUKTION",
    "title": "WeKill samlar fjorton farmer i en gemensam produktionsplan",
    "summary": "Anläggningarna i Overworld, Nether och End omfattas av samma uppföljning. Avstånden mellan dimensionerna påverkar inte ägarbilden.",
    "image": "/images/wekill-enderman-farm.webp",
    "alt": "Endermanfarm i The End inom WeKills produktion",
    "body": [
      "En av WeKills farmer verkade ha slutat producera. Men när driftlaget kom dit var maskinen i gång.",
      "Kistan vid utgången var full.",
      "Nu samlar bolaget sina fjorton farmer i en produktionsplan som också visar vad som händer efter att resurserna har tillverkats.",
      "– Ett stopp vid utloppet är inte samma sak som ett stopp i farmen. Men för den som väntar på material ser det likadant ut, säger en ansvarig för driftuppföljningen.",
      "Anläggningarna ligger i Overworld, Nether och End. Var och en får ett driftkort med resurs, utmatning och väg vidare till WeSort. För shulkerproduktionen noteras dessutom när WeBox behöver fler skal till sina behållare.",
      "Hoglinfarmen får ett eget kapacitetsunderlag. Den är hälften så stor som en fullskalig anläggning beräknad för över 125 000 föremål i timmen. Om takten följde storleken exakt skulle den mindre farmen kunna nå omkring 62 500 föremål i timmen. WeKill redovisar det som en kalkyl, inte som ett uppmätt resultat; faktiska leveranser ska räknas vid uppsamlingen.",
      "WeKill vill kunna se var ett fel uppstår innan underhållslaget skickas genom fel portal. Avståndet mellan dimensionerna finns kvar. Det ska inte finnas i ansvarsfördelningen."
    ]
  },
  {
    "publishedAt": "2026-10-26",
    "slug": "webox-tillatelsehantering",
    "type": "LAGRING",
    "title": "WeBox ser över uttag efter dubbla besked om samma glasleverans",
    "summary": "Två verksamheter fick besked om samma lagerpost. WeBox uppger att materialet inte lämnade förrådet och inför en ny kontroll före utlämning.",
    "image": "/images/webox-terminal.webp",
    "alt": "Anslutning till WeBoxes shulkerbox- och lagersystem",
    "body": [
      "Två byggprojekt fick besked om att samma glasleverans fanns tillgänglig i WeBoxes förråd. När det andra projektet skulle hämta ut materialet visade det sig att boxen redan hade reserverats för det första.",
      "Inget glas lämnade lagret till fel mottagare, uppger WeBox. Bolaget har däremot tillfälligt pausat nya uttagsbesked för den berörda lagerposten medan reservationerna kontrolleras.",
      "– Vi gav två besked som inte kunde gälla samtidigt. Det är vårt ansvar att reda ut vilket som var korrekt innan någon går härifrån med materialet, säger en ansvarig för WeBoxes lagerhantering.",
      "Enligt bolaget uppstod problemet när en förfrågan registrerades hos WeBox samtidigt som en tidigare reservation fortfarande följde med från WeSort. WeBox har inte slagit fast om det handlar om en felaktig märkning eller en fördröjning mellan systemen.",
      "Båda verksamheterna ska få ett nytt besked efter genomgången. Någon tidpunkt för det har ännu inte angetts. Under tiden krävs en extra kontroll av tidigare reservationer innan motsvarande glas kan lämnas ut.",
      "WeBox inför även en rutin som skiljer mellan att ett föremål finns på en hylla och att det faktiskt är ledigt att ta ut. Skillnaden var redan viktig för den som väntade på glaset. Nu ska den också framgå i bolagets register."
    ]
  },
  {
    "publishedAt": "2026-10-24",
    "slug": "welivelaughlove-sektion-tre",
    "type": "BOENDE",
    "title": "Sektion 3 får en gemensam standard för boende och samhällsservice",
    "summary": "WeLiveLaughLove har avslutat en intern genomgång av Avdelning A. Nästa steg är att göra vardagen mindre beroende av individuella önskemål.",
    "image": "/images/welivelaughlove-section-3-a-overview.webp",
    "alt": "Överblick över WeLiveLaughLove Sektion 3 Avdelning A",
    "body": [
      "I Sektion 3, Avdelning A får boende nu samma tydliga markeringar för gångvägar och gemensamma ytor som redan prövats i Sektion 1. En dörr ska inte längre behöva vara en gåta: är den ingång till hemmet, till arbetet eller till en yta som alla får använda?",
      "WeLiveLaughLove börjar med att rita om skyltningen, inte husen. En tidigare omväg till den gemensamma brunnen har fått en kortare, belyst passage. På prov gick flera boende där första kvällen utan att fråga efter vägen, vilket bolaget betraktar som ett ovanligt tydligt resultat av en boendedialog.",
      "Synpunkter från Avdelning A samlas in tillsammans med frågor om service och underhåll. Förslag som återkommer hos flera hushåll prioriteras. Enstaka önskemål försvinner inte, men får vänta tills de kan bedömas i samma plan som resten av området.",
      "Nästa steg är att jämföra gångvägar, belysning och vardagsservice mellan de båda sektionerna. De boende får en mer begriplig närmiljö; koncernen får äntligen en ritning där människors vanor går att läsa som ett sammanhängande system."
    ]
  },
  {
    "publishedAt": "2026-10-23",
    "slug": "huvudstadens-arena",
    "type": "HUVUDSTADEN",
    "title": "Distrikten samlas i Huvudstadens arena för gemensamma tävlingar",
    "summary": "Den stora blåvita arenan ger byarna en plats att representera sina hemorter. WeAB lyfter fram den långsiktiga betydelsen av organiserad rivalitet.",
    "image": arenaPhotos[0].src,
    "alt": arenaPhotos[0].alt,
    "body": [
      "Tre byar fick välja plats för sina skyltar i Huvudstadens arena. Alla valde samma vägg.",
      "Det lilla problemet uppstod under ett orienteringsbesök inför kommande tävlingar. Arenans värdar föreslog en gemensam skyltvägg och lät distrikten behålla var sin plats på den.",
      "– Vi vill gärna att de tävlar mot varandra. Men inte om var den första spiken ska sitta, säger en företrädare för arrangemangsgruppen.",
      "Läktarna och passagerna för publik respektive deltagare är redan på plats. WeAB tar nu emot distriktens intresseanmälningar, men har ännu inte fastställt program eller tävlingsdatum.",
      "Ingen segrare har korats. För tillfället är det skyltväggen som förenar byarna, på en arena där koncernen också ansvarar för själva väggen."
    ]
  },
  {
    "publishedAt": "2026-10-21",
    "slug": "welove-framtidens-arbetskraft",
    "type": "PERSONALFÖRSÖRJNING",
    "title": "WeLove utvecklar en långsiktig modell för koncernens personalförsörjning",
    "summary": "Planeringen av kommande generationer knyts närmare produktion, handel och boende. Driftansvarige Haapalainen leder arbetet med kapaciteten.",
    "image": "/images/welove-headquarters.webp",
    "alt": "WeLoves anläggning med rosa WE-skylt i bergsterräng",
    "body": [
      "WeTrade behöver fler bibliotekarier. WeSort vill veta när nästa arbetspass kan bemannas. WeLove har därför bett bolagen lämna sina framtida behov innan de nya arbetsplatserna byggs färdigt. Driftansvarige Haapalainen samordnar svaren med verksamhetens planering för kommande generationer villagers.",
      "Den nya översikten anger inte vem som ska arbeta var. Den visar vilka kompetenser som kan behövas, hur många arbetsplatser som planeras och vilka boendemiljöer WeLiveLaughLove behöver förbereda. Skillnaden är viktig: en villager kan hinna växa upp innan en handelsdisk ens har fått sin skylt.",
      "Vid ett samordningsmöte visade sig två bolag ha räknat med samma framtida bibliotekarie. Det var ett angenämt problem, enligt WeLove, men ett problem ändå. Nästa planeringsomgång ska därför skilja på önskemål om personal och faktiskt lediga tjänster.",
      "Bolaget ser framförhållning som en form av omsorg om både verksamhet och medarbetare. Ingen ska behöva upptäcka sin nya arbetsplats först när den står färdig och koncernen redan har börjat sälja böckerna."
    ]
  },
  {
    "publishedAt": "2026-10-19",
    "slug": "wetravel-stationsplan",
    "type": "INFRASTRUKTUR",
    "title": "WeTravel samordnar stationsrutiner mellan Huvudstaden och Sektion 1",
    "summary": "Gemensamma principer för skyltning och anslutningar ska göra resandet mer förutsägbart inom koncernens nät.",
    "image": "/images/wetravel-huvudstaden-centralstation.webp",
    "alt": "WeTravels centralstation i Huvudstaden",
    "body": [
      "En pil på Huvudstadens centralstation pekade mot kartan. Resenären behövde komma till tåget.",
      "Felet upptäcktes under en provvandring som WeTravel genomförde för att granska skyltarna mellan Huvudstaden och Sektion 1.",
      "Samma destination beskrevs dessutom på tre olika sätt längs vägen. Det fungerade för den som redan kunde nätet, men inte för den som försökte byta mellan räls och isbåtsled för första gången.",
      "– Tidtabellen hjälpte inte den som aldrig hittade till spåret, säger en ansvarig för stationsinformationen.",
      "WeTravel ändrar nu ordningen på skyltarna: destination, färdmedel och bytespunkt ska anges på samma sätt vid båda stationerna. Den felriktade pilen flyttas.",
      "Ingen ny linje öppnar i samband med arbetet. Avsikten är att fler ska kunna använda de förbindelser som redan finns, utan att behöva fråga någon som råkar stå på rätt perrong."
    ]
  },
  {
    "publishedAt": "2026-10-18",
    "slug": "wetrade-kunskapsmonopol",
    "type": "HANDEL",
    "title": "WeTrade samlar efterfrågade enchantments i en gemensam handelsmiljö",
    "summary": "Handel med enchanted books ska bli enklare att planera. Ett samlat sortiment ger kunderna fler val inom en och samma leverantör.",
    "image": "/images/wetrade-hall.webp",
    "alt": "WeTrades handelsmiljö med bibliotekarier vid diskare",
    "body": [
      "Den som behöver Mending till sin hacka ska inte behöva gissa vilken av tjugo diskar som säljer boken. WeTrade grupperar nu sina enchanted books efter vad kunden vill göra: laga, gräva, skydda eller resa. Handlarna står kvar vid sina platser; det är skyltningen som får arbeta hårdare.",
      "En intern genomgång började med frågan var man hittar en viss bok och slutade i en diskussion om varför kunden först måste veta vad den heter. Den nya översikten visar därför både användningsområde och exakt enchantment. Priset finns fortfarande vid disken, där det kan jämföras med det man faktiskt tänker köpa.",
      "WeLove fortsätter planera för personal vid de specialiserade handelsplatserna. Det samlade utbudet gör det möjligt att flytta information mellan avdelningar utan att flytta en enda bibliotekarie i onödan.",
      "WeTrade beskriver förändringen som ett steg mot enklare val. Valen finns kvar, men de går numera att göra under samma tak och med en prislista som koncernen själv kan hålla uppdaterad."
    ]
  },
  {
    "publishedAt": "2026-10-16",
    "slug": "webox-lagerkontroll",
    "type": "LOGISTIK",
    "title": "WeBox stärker spårbarheten i koncernens shulkerbox-system",
    "summary": "Med 27 lagringsplatser per shulkerbox blir strukturerad förvaring en fråga för hela koncernen, inte bara den enskilda kistan.",
    "image": "/images/webox-terminal.webp",
    "alt": "WeBox-systemets anslutning i Sektion 1",
    "body": [
      "En shulkerbox rymmer 27 platser. I ett stort lager är den tjugoåttonde uppgiften den viktigaste: att komma ihåg vad de andra innehåller. WeBox inför därför en märkning som följer boxen när den flyttas mellan mottagning, förråd och utlämning.",
      "Tidigare kunde en korrekt sorterad låda bli stående bakom en annan korrekt sorterad låda. Inget var fel i systemet förrän någon behövde den första. Med den nya märkningen ska både innehåll och senaste plats gå att slå upp utan att stapeln behöver rivas.",
      "Samarbetet med WeSort betyder att klassificeringen görs vid ankomst och följer med till WeBox. En box med byggglas ska inte byta identitet bara för att någon bär den över en tröskel.",
      "Bolaget börjar med de varor som flyttas oftast. Därefter väntar den större utmaningen: att ge även boxar som ingen har öppnat på länge en aktuell adress."
    ]
  },
  {
    "publishedAt": "2026-10-14",
    "slug": "wetravel-forbindelser",
    "type": "INFRASTRUKTUR",
    "title": "WeTravel utvecklar ett sammanhängande transportnät mellan koncernens anläggningar",
    "summary": "Järnvägar och isbåtsleder knyter samman verksamheterna och ger nya förutsättningar för planerade resor.",
    "image": "/images/wetravel-station.webp",
    "alt": "Station med räls och resenärspassager i WeTravels nät",
    "body": [
      "Det första rälsblocket är lätt att lägga. Det sista, där spåret ska möta en station som redan används, kräver en plan. WeTravel har därför ritat upp järnvägar och isbåtsleder som ett sammanhängande nät med ansvar för både resväg och byte.",
      "Planen omfattar förbindelser mellan Huvudstaden, Sektion 1 och koncernens anläggningar. En ny hållplats ska prövas mot befintliga sträckor: kan besökare komma fram, kan material transporteras och vem byter ut ett trasigt block när invigningen är över?",
      "När ett planerat stickspår till ett mindre förråd granskades visade sig gångvägen från närmaste station redan vara kortare än omvägen via den tänkta bytespunkten. Förrådet får skyltar i stället. Inte varje plats behöver sin egen centralstation för att bli nåbar.",
      "WeTravel bygger vidare där nätet gör störst skillnad. Det gäller även isbåtslederna, som är snabba nog för att förtjäna en destination som resenären faktiskt känner igen."
    ]
  },
  {
    "publishedAt": "2026-10-12",
    "slug": "weab-kapitalallokering",
    "type": "KONCERNSTYRNING",
    "title": "WeAB samlar investeringsbesluten i en koncerngemensam prioriteringsmodell",
    "summary": "Framtida projekt ska granskas utifrån samma principer för avkastning, kontroll och strategisk betydelse.",
    "image": "/images/weab-cyan-building.webp",
    "alt": "WeAB-byggnad med cyan detaljer",
    "body": [
      "Tre förslag låg på bordet: en ny farm, en större sorteringsyta och en gångväg till en ännu inte öppnad anläggning. WeAB:s nya investeringsmodell börjar inte med vilket förslag som låter mest storslaget, utan med vad som kan tas i bruk och av vem.",
      "Varje ansökan ska beskriva materialbehov, underhåll och samband med andra bolag. En sorteringsyta som avlastar flera farmer kan få företräde framför en ny farm vars utmatning ännu saknar plats. Gångvägen kan vänta tills det finns någon som faktiskt har anledning att gå där.",
      "Modellen gäller även projekt som WeGamble Island, där en byggplats redan syns men besöksverksamheten ännu inte öppnat. Kostnaderna är verkliga också när intäkterna fortfarande är en plan. Därför ska uppföljningen börja före premiären.",
      "Dotterbolagen fortsätter att föreslå egna lösningar. Koncernens uppgift är att avgöra vilka av dem som gör nytta bortom den egna entrén."
    ]
  },
  {
    "publishedAt": "2026-10-11",
    "slug": "wesort-logistik",
    "type": "KONCERNNYTT",
    "title": "WeSort utvecklar lagringskapaciteten för nästa steg i koncernens tillväxt",
    "summary": "Ett mer konsekvent varuflöde ska göra det enklare att hantera ökande volymer utan att förlora överblick.",
    "image": "/images/wesort-interior.webp",
    "alt": "Sorteringshall med förvaringssystem i WeSort",
    "body": [
      "Ett lager visar sin styrka först när det får mer än det väntade sig. WeSort bygger därför ut mottagningen innan nästa större leverans från WeKills farmer kommer. Nya fack märks upp för sådant som ännu inte har nått hallen.",
      "För den som ser tomma kistor som bortkastat utrymme finns en praktisk förklaring: när järnet väl strömmar in kan det inte vänta på att någon bygger en ny vägg. Samtidigt måste varje reservplats ha en tydlig kategori, annars är den bara ännu en osorterad kista med bättre framtidsutsikter.",
      "WeBox tar vid när material behöver längre förvaring eller flyttas i shulkerboxar. En gemensam märkning vid överlämningen ska visa om en leverans har sorterats, reserverats eller bara ställts av tillfälligt. Det sista ska inte längre se ut som en färdig process.",
      "WeSort mäter framgången i färre stopp vid mottagningen. WeAB mäter den också i hur snabbt nästa expansion kan börja utan att hallen först måste lära sig vad ett nytt block heter."
    ]
  },
  {
    "publishedAt": "2026-10-09",
    "slug": "wekill-produktion",
    "type": "PRODUKTION",
    "title": "WeKill fortsätter att utveckla automatiserad resursproduktion",
    "summary": "Ökad standardisering ska ge stabilare leveranser från koncernens farmer och bättre planering i nästa led.",
    "image": "/images/wekill-farms.webp",
    "alt": "WeKills produktionsanläggningar",
    "body": [
      "En järnfarm kan arbeta ostört i timmar. Sedan räcker en felplacerad tratt för att resultatet ska stanna på fel sida om en vägg. WeKill inför därför återkommande kontroll av utmatningen, inte bara av själva produktionen.",
      "Kontrollerna börjar där resursen lämnar farmen: går den vidare, fylls rätt kista och kan WeSort ta emot nästa leverans? En maskin som fortsätter tillverka material medan utloppet är fullt räknas inte längre som en fungerande kedja.",
      "I ett prov fick underhållslaget följa ett järnblock hela vägen till märkningen för fortsatt lagring. Det tog längre tid än att bara titta på farmen, men visade också var två separata ansvarsområden möttes utan tydlig överlämning.",
      "Bolaget ser detta som en liten teknisk förändring med stor effekt. Produktion är inte färdig när något skapas; den är färdig när någon annan faktiskt kan använda det."
    ]
  },
  {
    "publishedAt": "2026-10-05",
    "slug": "wegamble-utveckling",
    "type": "EXPANSION",
    "title": "WeGamble Island tar nästa steg i planeringen av den kustnära anläggningen",
    "summary": "Projektet fortsätter att utvecklas som en framtida destination för spel och nöjen. Den kommersiella modellen utvärderas parallellt med byggnationen.",
    "image": "/images/construction-coast.webp",
    "alt": "Kustnära byggnation inom projektet WeGamble Island",
    "body": [
      "Det finns ännu inga spelbord att sätta sig vid på WeGamble Island. Däremot har projektgruppen fått sin första färdiga karta över var besökare ska kunna gå utan att behöva passera byggmaterialet. Vid kusten är det en viktigare milstolpe än den låter.",
      "Nästa etapp omfattar entré, väntytor och en tydlig gräns mellan spel och övriga nöjen. Regler och priser ska kunna läsas innan gästen bestämmer sig för att delta. Den som bara vill se havet ska också kunna göra det, även om koncernen gärna erbjuder något mer på vägen.",
      "WeGamble prövar samtidigt hur leveranser ska nå ön utan att möta publiken i samma passage. WeTravel deltar i samtalen om framtida anslutningar, men någon ny linje eller öppningsdag är ännu inte beslutad.",
      "Projektet går vidare i byggtakt. Den enda garanterade utdelningen hittills är en bättre utsikt från den nya gångvägen, och även den ingår förstås i kalkylen."
    ]
  },
  {
    "publishedAt": "2026-10-01",
    "slug": "bostadsstabilitet",
    "type": "SAMHÄLLE",
    "title": "WeLiveLaughLove inför gemensamma rutiner för långsiktig boendestabilitet",
    "summary": "Erfarenheterna från Sektion 1 och Sektion 3 ska användas för att stärka kontinuiteten i koncernens boendemiljöer.",
    "image": "/images/welivelaughlove-compound.webp",
    "alt": "WeLiveLaughLoves avgränsade boendemiljö i Sektion 1",
    "body": [
      "I Sektion 1 frågade en boende vem som ansvarade för lyktan vid gången. I Sektion 3 ställdes samma fråga om en grind. WeLiveLaughLove har nu samlat sådana ärenden i en gemensam rutin för boendeservice: den som anmäler något ska få veta vilken funktion som tar hand om det.",
      "Rutinen skiljer mellan hem, gemensamma passager och ytor som används av andra verksamheter. En trasig lykta kan då lagas utan att frågan först blir en diskussion om var bostadsområdet slutar. Förändringen gör det också möjligt att se vilka små problem som återkommer oftast.",
      "Boende i båda sektionerna kan fortsatt lämna synpunkter. Återkommande förslag, som belysning längs en viss väg, behandlas tillsammans med planerat underhåll. Ett individuellt önskemål får också ett svar, men inte nödvändigtvis en egen byggbudget.",
      "WeLiveLaughLove vill att hemmen ska kännas stabila även när omgivningen växer. För WeAB är det en boendefråga med en ovanligt praktisk följd: färre överraskningar i planeringen av allt runt omkring."
    ]
  }
];
