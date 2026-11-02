import { arenaPhotos } from './arena';

export interface NewsItem {slug:string;type:string;title:string;summary:string;body:string[];image:string;alt:string;}
export const news: NewsItem[] = [
 {
   slug: 'huvudstadens-arena',
   type: 'HUVUDSTADEN',
   title: 'Distrikten möts i Huvudstadens arena',
   summary: 'Bybor från olika distrikt tävlar om att vinna ära till sin hemby i huvudstadens stora blåvita arena.',
   body: [
     'I Huvudstadens arena samlas bybor från distrikten för att representera sina hembyar. Tävlingens mål är enkelt: att vinna ära åt den egna byn. WeAB ser med tillförsikt på varje tillfälle då lojaliteten kan mätas inför publik.',
     'Anläggningen har stora läktare och belysta passager. Själva äran tillfaller vinnarnas by; den institutionella stoltheten bokförs som vanligt centralt.'
   ],
   image: arenaPhotos[0].src,
   alt: arenaPhotos[0].alt
 },
 {slug:'webox-lagerkontroll',type:'LOGISTIK',title:'WeBox: 27 platser. Ett godkänt ägarskap.',summary:'Koncernen förstärker sin filosofi om total ordning, även i de minsta lådorna.',body:['Shulkerboxen är ett tekniskt underverk: 27 platser, oändliga möjligheter att arkivera någon annans tillhörigheter. WeBox förvaltar denna potential med den omsorg som endast en centraliserad organisation kan erbjuda.','I samarbete med WeSort säkerställer vi att det som har en etikett också har en ägare. Och att ägaren, när det är lämpligt, heter WeAB.'],image:'/images/webox-terminal.webp',alt:'WeBox-systemets anslutning i Sektion 1'},
 {slug:'wetravel-forbindelser',type:'INFRASTRUKTUR',title:'WeTravel gör fri rörlighet mer lätthanterlig',summary:'Räls och isbåtsleder förenar koncernens tillgångar. Resten kan vänta på anslutning.',body:['Med räls och isbåtsleder knyter WeTravel samman koncernens viktiga områden och anläggningar. Resan är effektiv, förutsägbar och omsorgsfullt anpassad till de destinationer vi anser relevanta.','Vår ambition är att varje invånare ska kunna ta sig dit den behöver. Vilka behov som är godkända beslutas av behörig ledning.'],image:'/images/wetravel-station.webp',alt:'WeTravels station med räls och avgångstavlor'},

 {slug:'wesort-logistik',type:'KONCERNNYTT',title:'WeSort eliminerar sista argumentet mot överkonsumtion',summary:'Ett lager så välordnat att det vore ansvarslöst att inte fylla det.',body:['WeSort har fortsatt att förfina en enkel princip: Det som får plats i en kista borde ligga i två. Med vår lagerstruktur går det nu att ackumulera föremål med den värdighet som bara total ordning kan erbjuda.','Det viktigaste steget i varje leveranskedja är förstås att säkerställa att leveranskedjan aldrig tar slut. WeAB ser därför en ljus framtid för både resurser och onödiga nyinköp.'],image:'/images/wesort-interior.webp',alt:'WeSort lagerhall'},
 {slug:'wekill-produktion',type:'PRODUKTION',title:'WeKill: Allt är förnybart om man producerar tillräckligt snabbt',summary:'Högre kapacitet och ännu lägre tolerans för ineffektivitet.',body:['WeKill fortsätter att utveckla sina automatiserade produktionsmiljöer. Alla processer granskas utifrån den enda väsentliga frågan: Hur mycket mer kan vi få ut?','Koncernen ser särskilt positivt på resurser som reproducerar sig själva. Det visar på gott samarbete.'],image:'/images/wekill-farms.webp',alt:'WeKill produktionsanläggningar'},
 {slug:'wegamble-utveckling',type:'EXPANSION',title:'WeGamble Island: Framtiden är osäker. Vinsten inte.',summary:'Vår nya kasinoö tar form vid kusten. Aktieägarna följer arbetet med tillförsikt.',body:['Vid kusten växer WeGamble Island fram. Den nya anläggningen ska göra det möjligt för gäster att upptäcka spänningen i att överlåta sina diamanter till en mer erfaren ekonomisk aktör.','Spelets utfall kan variera. Koncernens affärsmodell gör det inte.'],image:'/images/construction-coast.webp',alt:'WeGamble Island under byggnation'},
 {slug:'bostadsstabilitet',type:'SAMHÄLLE',title:'WeLiveLaughLove firar återställd harmoni',summary:'Efter tidigare oroligheter rapporterar samtliga distrikt godtagbara nivåer av lydnad.',body:['En tid av omotiverad självständighetsiver är över. Boendeområdena har återgått till koncernens uppskattade modell med tydliga gränser och centralt beslutade rörelsemönster.','Vi gläds åt att trivseln åter är hög. Uppgifterna har sammanställts av den enhet som ansvarar för att trivseln förblir hög.'],image:'/images/welivelaughlove-compound.webp',alt:'Inhägnat villager-område'},
];
