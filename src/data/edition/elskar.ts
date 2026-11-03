import { makeMagazineArticles, type StorySeed } from './storyBuilder.ts';
export const elskarArticles = makeMagazineArticles('herr-elskar-weandersson', 5, [
  {
    "slug": "skyltarnas-stora-fortjanst",
    "format": "insandare",
    "title": "Ärade skyltmakare, ni har räddat min morgon",
    "summary": "Ett brev om lyckan att veta exakt vilken väg som förväntas av en, även när man inte vet varför.",
    "image": "/images/section-1-overview.webp",
    "scene": "Jag kom till Sektion 1 och möttes av en skylt så tydlig att jag för ett ögonblick glömde vart jag själv var på väg. Det var en underbar upplevelse att slippa tveka inför nästa korsning.",
    "context": "En pil kan verka som en liten sak, men bakom den ligger en ansvarskedja av tänkande människor som redan har prövat vilket håll som borde rekommenderas. Sådan omsorg bör aldrig tas för given.",
    "tension": "Det sägs att friheten består i att välja sin egen stig. Jag är inte så säker. Friheten att slippa välja fel är för mig både behagligare och långt mer värdig en modern huvudstad.",
    "ending": "Jag vill därför framföra mitt tack till koncernen och dess skyltansvariga. Må varje vägval bli lika självklart och varje tvekan bli kortare än tiden det tar att läsa en ordentlig anvisning."
  },
  {
    "slug": "en-kista-vard-att-beundra",
    "format": "kronika",
    "title": "Mina vänner, jag har sett en fulländad kista",
    "summary": "En vardagsbetraktelse över den högre glädjen i att allt har en etikett och stannar där det ska.",
    "image": "/images/webox-terminal.webp",
    "scene": "Jag fann en kista vars innehåll inte bara var ordnat utan begripligt. En liten etikett talade om vad som låg däri. Aldrig har förvaring gjort ett sådant intryck på mig.",
    "context": "Så mycket av världens oro uppstår när saker läggs någonstans utan att nästa människa får veta varför. WeBox och WeSort har genom sina system befriat oss från den svåra frågan om vilken kista vi ska öppna.",
    "tension": "En spontan människa kan säkert kalla detta överdrivet. Jag vill invända att spontaniteten sällan erbjudit sig att leta efter en bortglömd shulkerbox åt någon annan i gryningen.",
    "ending": "Jag hoppas att fler förråd får samma tydlighet. Om det blir möjligt att märka även oss invånare med våra huvudsakliga arbetsuppgifter tar jag gärna emot min egen lilla etikett."
  },
  {
    "slug": "en-hogtidlig-vantan-pa-taget",
    "format": "insandare",
    "title": "Att vänta vid en station är att visa karaktär",
    "summary": "Ett tack till WeTravel för att varje anslutning åtminstone har blivit ordentligt genomtänkt.",
    "image": "/images/wetravel-huvudstaden-centralstation.webp",
    "alt": "Spår och resenärsyta på Huvudstadens centralstation",
    "scene": "Jag stod på en plattform och såg rälsen sträcka sig mot horisonten. Där insåg jag att väntan inte behöver vara ett misslyckande, utan också kan vara ett mått på vår gemensamma tillit.",
    "context": "WeTravel har tagit sig an den komplicerade uppgiften att förbinda våra distrikt. Det innebär att man måste tänka på både resenärer, anslutningar och långsiktigt underhåll innan nästa spår byggs.",
    "tension": "Vissa resenärer hade önskat en egen genväg. Men vem skulle då ta ansvar för dess kurvor och vad skulle hända när någon byggde en annan genväg rakt över den första?",
    "ending": "Jag vill därför varmt tillstyrka fortsatt ordnad planering. Vi som väntar vid en station kan under tiden njuta av den trösterika insikten att någon annan redan ansvarar för rälsen."
  },
  {
    "slug": "bygg-med-tacksamhet",
    "format": "debatt",
    "title": "Ett hövligt förslag: låt någon godkänna era hus",
    "summary": "Det egna byggprojektet blir mer beständigt när det passar ihop med de verksamheter som redan finns.",
    "image": "/images/weab-cyan-building.webp",
    "scene": "Jag såg ett hus uppföras med förbluffande hastighet. Väggarna stod på plats och ägaren såg lycklig ut. Ingen verkade emellertid ha frågat hur byggnaden skulle anslutas till resten av området.",
    "context": "Ett hus behöver vägar, grannar och en tanke om hur det ska underhållas efter att den första entusiasmen lagt sig. WeAB har visat vad sådana sammanhängande beslut kan åstadkomma i sina många anläggningar.",
    "tension": "En del menar att fri byggnadskonst försvinner när projekt måste prövas. Jag menar att verklig fantasi också innefattar föreställningen om hur byggnaden ska fungera nästa år.",
    "ending": "Må varje kommande spadtag tas med stor glädje och lämplig förhandsgranskning. Det vore synd om någon dröm skulle behöva rivas bara därför att den råkade hamna där nästa väg redan var planerad."
  },
  {
    "slug": "en-koncern-ar-en-god-granne",
    "format": "insandare",
    "title": "Låt oss tacka den granne som redan äger vägen",
    "summary": "Ett läsarbrev om väghållning och den särskilda tryggheten i att ansvar inte behöver letas upp.",
    "image": "/images/huvudstaden-overview.webp",
    "scene": "Jag gick genom Huvudstaden och började fundera på hur många små bekymmer som undviks när en viktig passage sköts av någon med både organisation och resurser. Det är en tanke jag vill dela med alla.",
    "context": "Om varje invånare ansvarade för sin egen lilla vägbit skulle varje gräns mellan två ägor snart bli en anledning till diskussion. Gemensam planering gör att sådana bekymmer kan upptäckas innan de uppstår.",
    "tension": "Det kan finnas dem som hellre väljer väghållare själva varje morgon. Jag skulle finna den ordningen synnerligen tröttsam. Jag vill helst komma fram utan att först behöva upprätta ett avtal.",
    "ending": "WeAB:s sammanhängande arbete förtjänar därför ett varmt tack. Jag ser fram emot fler dagar då den bästa nyheten är att vägen fungerar och jag inte ens behöver fundera över varför."
  }
] satisfies StorySeed[]);
