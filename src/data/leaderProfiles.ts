import { leadingMembers, type Executive } from './leadership.ts';

export interface LeaderProfile {
  member: Executive;
  introduction: string;
  past: string;
  work: string[];
  day: string[];
  future: string;
  questions: { question: string; answer: string }[];
  responsibility?: { text: string; href: string };
}

const portraits: Record<string, Omit<LeaderProfile, 'member'>> = {
  ravenhamster: {
    introduction: 'RavenHamster älskar redstone, effektivisering och pengar. Som ledande ledamot vill RavenHamster veta hur många moment en mekanism sparar, vad nästa förbättring kostar och vem som får behålla vinsten.',
    past: 'Före arbetet i koncernledningen ägnade RavenHamster sin tid åt redstone och åt att räkna på varför en omväg fortsatte att betalas för varje dag. Intresset för automatisering är äldre än ledamotstiteln: en krets som gör sitt jobb två gånger utan tillsyn är, enligt RavenHamster, redan på väg att bli en investering.',
    work: [
      'En redstonekrets kan, enligt RavenHamster, vara ett vackert svar på en ful personalkostnad. Intresset gäller inte bara att få något att fungera, utan att få det att fungera igen utan att någon behöver stå bredvid och betala för väntetiden. En extra tratt får gärna vara dyr i dag om den gör morgondagens arbete billigare.',
      'I koncernledningen återkommer RavenHamster till samma tre frågor oavsett verksamhet: kan flödet automatiseras, kan ett moment tas bort och var hamnar diamanterna efteråt? RavenHamster påpekar gärna att en människa kan tveka inför att stänga en grind, medan en välbyggd mekanism gör det i tid varje gång. Även en välfungerande anläggning är ineffektiv om den inte tar betalt för sin skicklighet.'
    ],
    day: [
      'Jag börjar med att se vad som fortfarande kräver en person vid en spak. Om den personen dessutom måste vänta på att en kista ska tömmas tar jag fram papper: väntetid är en kostnad som sällan skyltas med.',
      'Efter lunch lägger jag ett utkast till en redstonekrets bredvid kalkylen. Jag vill se hur vi kan låta en signal ersätta den person som tidigare kunde välja att vänta, och hur mycket billigare nästa arbetsdag blir om kretsen fungerar.',
      'Innan jag lämnar bordet letar jag efter den post som alla kallade för liten för att räkna. Om den återkommer varje dag är den oftast inte liten längre.'
    ],
    future: 'RavenHamster vill pröva fler redstonelösningar där ett upprepat moment, och helst en möjlighet att säga nej, går att ersätta av en signal. För RavenHamster börjar nästa förändring med ett enkelt krav: visa först var vinsten skulle uppstå.',
    questions: [
      { question: 'Vad tar du med till ett sammanträde?', answer: 'En skiss över det vi skulle kunna låta redstone göra i stället. Och en kalkyl över vad vi tjänar på att göra det.' },
      { question: 'Vad lägger du märke till vid en ny anläggning?', answer: 'Allt som stannar när någon går hem. Sedan tittar jag efter en spak, en signal eller en budgetpost som kan hålla det i gång.' },
      { question: 'När är en arbetsdag lyckad?', answer: 'När nästa omgång går av sig själv och pengarna fortfarande vet vägen till oss.' }
    ]
  },
  filuren2003: {
    introduction: 'Filuren2003 är ledande ledamot, förtrycksminister och huvudansvarig för WeLiveLaughLove. Han har drivits av viljan att förtrycka så länge han kan minnas. Redan i skolan uppmärksammades hans förmåga att få en regel att kännas personlig för den som omfattades av den.',
    past: 'Redan i skolan utmärkte sig Filuren2003 genom att föreslå nya ordningsregler och sedan följa upp vilka som ännu inte visste att de gällde. Senare ägnade han sig åt korruptionsökande arbete: att identifiera platser där en beslutsväg kunde bli mer lönsam för den som kontrollerade den. Han drev också igenom att WeLiveLaughLoves byar bara skulle få vatten utdelat varannan dag för att spara pengar. På koncernens champagnefest, där bara företagets toppar var inbjudna, belönades han för detta med utmärkelsen ”Årets insparning 2025”. Han är fortfarande otroligt stolt över att invånarnas dagar utan utdelning kunde bokföras som en besparing.',
    work: [
      'WeLiveLaughLove ansvarar för boendemiljöerna i Sektion 1 och Sektion 3. Filuren2003 har tagit över huvudansvaret för bolaget och följer hur dess rutiner omsätts i vardagen: vem som tar emot ett ärende, vilken avdelning det hör till och när ett besked betraktas som färdigt. Det är viktigt att invånarna kan göra sin röst hörd utan att den för den skull påverkar beslutet.',
      'I Sektion 3, Avdelning A bor numera den tidigare regeringens statsråd och riksdagens ledamöter efter att ha ”frivilligt” valt tvångsplacering. Filuren2003 betraktar dem som boende inom den ordinarie verksamheten. Tidigare titlar ger ingen egen kö i ärendehanteringen.'
    ],
    day: [
      'Jag börjar dagen med ärendelistan från Sektion 1 och Sektion 3. Där står både sådant som kan besvaras och sådant som behöver omformuleras till en fråga vi redan har en rutin för. Vattenutdelning varannan dag är ett utmärkt exempel: när någon frågar om nästa tillfälle kan vi ge ett exakt besked utan att öka antalet utdelningar.',
      'När jag går igenom en begäran om undantag frågar jag inte först om önskemålet känns rimligt. Jag frågar vilken följd det skulle få om nästa invånare också trodde sig få välja. Den typen av konsekvensanalys är ett arbete som sällan får tillräckligt erkännande.',
      'Innan arbetsdagen är slut kontrollerar jag att varje svar har en avsändare. Ett avslag utan underskrift är ett onödigt tillfälle för någon att tro att frågan fortfarande är öppen. Med en underskrift kan vi kalla ärendet färdigbehandlat även om personen som fick svaret fortsätter att fråga.'
    ],
    future: 'Filuren2003 vill se över hur boendeärenden förs mellan avdelningarna och hur undantag dokumenteras. Han vill att samma fråga ska få samma svar även när den ställs vid en annan grind: ett begripligt nej är en service som alla kan få.',
    questions: [
      { question: 'Vad betyder trivsel för dig?', answer: 'Att alla vet vilken dörr som leder hem och att vi redan har bestämt vad de andra dörrarna leder till.' },
      { question: 'Vad gör du när någon vill ha ett undantag?', answer: 'Jag ber om ett skriftligt skäl. Sedan prövar vi om skälet passar bättre som ett exempel på varför rutinen finns.' },
      { question: 'Vad är du stoltast över?', answer: 'Att vattnet nu delas ut varannan dag. ”Årets insparning 2025” var ett fint erkännande, men den verkliga vinsten syns i varje utdelning som inte behövde göras.' },
      { question: 'Vad lärde du dig i skolan?', answer: 'Att den som skriver ordningsreglerna sällan behöver be om lov för att följa upp dem. Jag var tidigt intresserad av uppföljning.' },
      { question: 'Vad önskar du att fler visste om ditt arbete?', answer: 'Att förtrycksminister är en titel med mycket administration. Det mesta börjar med ett formulär, inte med en grind.' }
    ],
    responsibility: { text: 'WeLiveLaughLove och boendeordningen', href: '/verksamheter/welivelaughlove/' }
  },
  haapalainen: {
    introduction: 'Haapalainen är ledande ledamot och ansvarig för WeLove. Han älskar att få fram får i mängder och samla så många som möjligt på varje kvadratmeter. Samma intresse för täthet följer med in i WeLoves system för bybor.',
    past: 'Haapalainens intresse för att få fram många får på liten yta kom före ansvaret för WeLove. Han studerade gärna hur en inhägnad användes och såg ledig mark där andra såg välbehövligt mellanrum. Den synen på utrymme tog han med sig när uppdraget började handla om bybor och arbetsplatser.',
    work: [
      'För Haapalainen är en fårhage aldrig bara en fårhage. Den är en fråga om hur mycket liv som kan pressas samman på en avgränsad yta innan någon föreslår att ytan borde bli större. Han tar med sig den tanken till WeLove, där antalet framtida arbetare ska kunna planeras tillsammans med utrymmet de tilldelas. Det är hans sätt att visa omsorg om koncernens markanvändning, även när den som behöver röra sig har en annan uppfattning.',
      'WeLove planerar koncernens personalförsörjning över generationer. Haapalainen håller ihop bolagets arbete och behöver kunna skilja ett uttryckt personalbehov från en färdig arbetsplats. När två verksamheter räknar med samma framtida medarbetare är det inte personen som ska fördubblas, utan planen som behöver ses över.',
      'Samarbetet med WeTrade, WeSort och WeLiveLaughLove gör tidsfrågan konkret. Arbetsplatser, bostäder och bemanning får gärna bli färdiga i en begriplig ordning. Haapalainen föredrar ett ärligt tomt schema framför ett fullt schema med samma namn på två platser. En tom kvadratmeter ser han däremot som en fråga som bör utredas.'
    ],
    day: [
      'Jag börjar med att lägga arbetsplatsernas önskemål bredvid planen för vilka bybor som kan bli aktuella längre fram. Det är lätt att skriva ett namn i en ruta. Det är svårare att se till att rutan har ett verkligt arbete och en plats att stå på.',
      'Mitt på dagen går jag igenom utrymmet. Jag tänker på fåren: inte för att en bybo är ett får i bolagets register, utan för att båda fyller en plats som någon måste betala för. Där andra ser ett avstånd mellan två människor ser jag först en möjlighet att mäta om den fria ytan verkligen behövs.',
      'Innan jag avslutar frågar jag WeLiveLaughLove om bostäderna och WeTrade om arbetsplatserna. En framtida medarbetare får inte bli två redan bokade personer bara för att två bolag använder samma plan.'
    ],
    future: 'Haapalainen vill att WeLove ska planera personal, arbetsplatser och utrymme i samma underlag. Fårens sätt att fylla en yta är fortsatt hans favoritexempel, även när tabellen gäller människor och de själva föredrar en annan måttenhet.',
    questions: [
      { question: 'Vad lärde du dig av fåren?', answer: 'Att det nästan alltid finns plats för ett till om någon bara ritar om gränsen för vad som räknas som tillräckligt utrymme.' },
      { question: 'Vad gör dig glad på jobbet?', answer: 'När ett bolag frågar vad det faktiskt behöver för arbete utfört, i stället för att bara beställa fler personer.' },
      { question: 'Vad skulle du säga till någon som vill ha en exakt prognos?', answer: 'Jag kan visa hur vi har räknat. Jag kan inte göra en framtida generation till en redan anställd kollega genom att skriva in den i dagens tabell.' }
    ],
    responsibility: { text: 'WeLove och personalförsörjningen', href: '/verksamheter/welove/' }
  },
  'laxen-mx': {
    introduction: 'Laxen_MX är ledande ledamot och ser en möjlig affär i nästan allt som ännu inte fått en prislapp. Hänsyn till andra människor får vänta tills det har utretts om den går att sälja.',
    past: 'Innan uppdraget i koncernledningen brukade Laxen_MX anteckna sådant som andra utan vidare gav bort: väntetid, tillträde, en bekväm väg mellan två platser. Förmågan att se ett tänkbart köp i en vardaglig tjänst behöver enligt Laxen_MX ingen särskild titel.',
    work: [
      'I koncernledningen deltar Laxen_MX i de gemensamma besluten. Där letar han efter sätt att kapitalisera på och sälja allt som går att få någon annan att betala för. Om någon drabbas av affären ser Laxen_MX först till att kontrollera om även följderna kan bli en tjänst. Människors behov är pålitliga intäktskällor just därför att behoven inte försvinner när priset höjs.',
      'Laxen_MX frågar gärna vad som händer mellan två avdelningar, men inte främst av omsorg om den som hamnar där. En överlämning som tidigare var kostnadsfri kan kanske få en avgift. En väntetid kan kanske säljas som förtur. När andra ser ett gemensamt behov ser Laxen_MX ett sortiment som ännu inte har märkts upp.'
    ],
    day: [
      'Jag börjar med att lyssna efter meningen ”det ingår”. Den säger mig att någon redan får något av värde, men att koncernen ännu inte har bestämt vad det ska kosta.',
      'Vid nästa möte prövar jag en idé på papper. Om någon behöver vänta undersöker jag om det finns en förtur att erbjuda. Först vill jag veta om efterfrågan finns och vem som förlorar på att vi låter den vara gratis.',
      'Innan jag går hem granskar jag de invändningar som kommit in. De kan vara användbara beskrivningar av vad folk värderar högst. Jag tackar för underlaget utan att lova att de får använda det utan kostnad.'
    ],
    future: 'Laxen_MX vill pröva om fler av koncernens tjänster kan säljas i tydligare delar. Han vill hitta sådant människor behöver, även sådant de inte kan avstå från, och se till att WeAB får möjlighet att ta betalt innan någon annan hinner kalla det gemensamt.',
    questions: [
      { question: 'Vad är det första du frågar om en ny idé?', answer: 'Vem skulle betala för den? Om svaret är ingen börjar jag med att fråga varför vi ger bort den.' },
      { question: 'Var går gränsen för vad du vill sälja?', answer: 'Det avgör vi när vi har hittat något på andra sidan gränsen som någon vill köpa.' },
      { question: 'Vad önskar du dig av en kollega?', answer: 'Att de berättar vad folk behöver innan folk själva vet att de kommer att få betala för det.' }
    ]
  }
};

export const leaderProfiles: LeaderProfile[] = leadingMembers.map(member => ({
  member,
  ...portraits[member.slug]
}));
