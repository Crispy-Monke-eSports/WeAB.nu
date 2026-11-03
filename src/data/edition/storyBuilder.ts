import type { MagazineDraft } from '../magazineTypes.ts';

export type StorySeed = {
  slug: string;
  format: MagazineDraft['format'];
  title: string;
  summary: string;
  image: string;
  scene: string;
  context: string;
  tension: string;
  ending: string;
};

const voices: Record<string, [string[], string[], string[], string[]]> = {
  'herr-elskar-weandersson': [
    ['Ärade läsare, tillåt mig ett uppriktigt erkännande. ', 'Vördade medinvånare, jag måste dela en sällsynt glädje. '],
    ['Låt mig vördsamt förklara varför detta förtjänar större uppskattning. ', 'För den som ännu tvivlar vill jag ödmjukt påminna om en sak. '],
    ['Någon kan naturligtvis invända, men jag ber att få utveckla min tanke. ', 'Det finns säkert invändningar; de är värda att möta med hövlighet. '],
    ['Med oförminskad högaktning vill jag därför avsluta så här. ', 'Jag hoppas innerligt att fler får uppleva samma ordning. ']
  ],
  'marta-ek': [
    ['Jag lade märke till något ganska litet på vägen hem. ', 'När jag gick min vanliga väg i morse stannade jag till. '],
    ['I vårt kvarter betyder sådana detaljer mer än man kan tro. ', 'Det märks i vardagen, särskilt när man har bråttom. '],
    ['Visst hör man ibland andra förslag vid köksborden. ', 'Jag förstår dem som tycker att det kunde vara annorlunda. '],
    ['För min del är det ändå svårt att bortse från en enkel sak. ', 'Det är sådant jag tar med mig när jag går hem igen. ']
  ],
  'nils-brynja': [
    ['Det första som hörs i anläggningen är ett lågt mekaniskt arbete. ', 'Bakom den första dörren förändras ljudet från serverns vanliga vardag. '],
    ['Den som följer arbetet genom byggnaden ser snart ett mönster. ', 'Längre in syns hur de olika delarna faktiskt hänger samman. '],
    ['Utanför kan systemet framstå som enklare än det är. ', 'På avstånd är det lätt att missa vad som händer mellan två stationer. '],
    ['När vi lämnar platsen pågår arbetet fortfarande. ', 'Innan besöket är över har byggnaden förklarat en hel del. ']
  ],
  'selma-kvarnstrom': [
    ['Ekonomiskt börjar frågan inte med priset, utan med hur resurserna används. ', 'En investering bör förstås genom det alternativ som väljs bort. '],
    ['Det blir särskilt tydligt när man följer flödet mellan verksamheterna. ', 'För att bedöma nyttan behöver man se mer än det första inköpet. '],
    ['En invändning är att modellen kan se försiktig ut på kort sikt. ', 'Det finns också en kostnad som sällan hamnar i den första kalkylen. '],
    ['Den rimliga slutsatsen handlar därför om uthållig kapacitet. ', 'På längre sikt avgörs värdet av hur väl resurserna kan användas igen. ']
  ],
  'viktor-sadel': [
    ['Börja vid stationen och följ rälsen åt rätt håll. ', 'För en resenär börjar problemet vanligen långt innan själva avfärden. '],
    ['En förbindelse måste fungera även där två sträckor möts. ', 'Skyltar, anslutningar och underhåll utgör samma kedja. '],
    ['Den snabbaste vägen på en karta är inte alltid den mest användbara. ', 'Det lockar ibland att lägga en egen räls och hoppas på det bästa. '],
    ['Det praktiska svaret är att tänka på hela resan. ', 'Därför börjar framtidens förbindelse med ett genomtänkt ansvar. ']
  ],
  'ottilia-glas': [
    ['Ljuset faller på byggnadens ytor och får även vardagen att se arrangerad ut. ', 'Det finns platser där man märker arkitekturen innan man förstår ändamålet. '],
    ['Rummet förklarar sig genom färger, passager och proportioner. ', 'Det är i mötet mellan besökare och form som platsens uppdrag blir synligt. '],
    ['Skönhet kan förstås också uppstå utan en stor plan. ', 'En invändning är att allt detta kunde ha gjorts mer spontant. '],
    ['Ändå ligger en särskild kvalitet i den tydliga helheten. ', 'Kvar blir intrycket av en plats som vet vad den vill vara. ']
  ],
  'ruben-kist': [
    ['En borttappad sak är nästan alltid början på en berättelse om fel hylla. ', 'Jag tänker ofta på hur mycket drama som kan rymmas i en enda kista. '],
    ['Det visar sig snabbt att en etikett kan uträtta mer än ett långt möte. ', 'Föremålen är ganska tystlåtna, men ordningen gör deras uppdrag begripligt. '],
    ['Någon invänder kanske att det är trevligt med lite improvisation. ', 'Man kan förstås släppa allt fritt och hoppas att det hamnar rätt. '],
    ['Jag föredrar när varje sak åtminstone känner till sin adress. ', 'Till slut vinner oftast den hylla som inte behöver leta efter sig själv. ']
  ],
  'alva-heden': [
    ['En farm bedöms bäst genom att följa vad den faktiskt gör, block för block. ', 'Produktionen börjar med en enkel mekanik som måste fungera gång på gång. '],
    ['Därefter gäller det att förstå hur resurserna lämnar anläggningen. ', 'Nästa steg i kedjan är minst lika viktigt som själva farmen. '],
    ['Ett driftstopp visar var systemets svagheter finns. ', 'Det finns alltid en skillnad mellan en process som fungerar en gång och en som håller över tid. '],
    ['Det är först när materialet kan användas som produktionen är fullständig. ', 'För WeKill blir den tekniska förbättringen värdefull när nästa led också hinner med. ']
  ],
  'leif-klover': [
    ['I personalfrågor finns det sällan bara ett enda ögonblick att planera för. ', 'Det som ser ut som ett litet vardagsbeslut blir ofta viktigt längre fram. '],
    ['Det kräver god framförhållning och ett tydligt ansvar för varje övergång. ', 'När verksamheter arbetar ihop blir omsorgen om kontinuiteten särskilt viktig. '],
    ['Det är rimligt att även personliga önskemål behöver tas om hand. ', 'Alla frågor går inte att besvara lika snabbt, särskilt när många berörs. '],
    ['Målet bör vara en stabil vardag för både individ och organisation. ', 'Det är en stillsam men betydande förbättring när nästa steg redan är förberett. ']
  ],
  'dagmar-stenqvist': [
    ['Frågan ser enkel ut, men måste först avgränsas till vad som faktiskt beslutats. ', 'Förvaltning börjar med att skilja ett uppdrag från de omständigheter som omger det. '],
    ['I den aktuella ordningen framträder ansvarsfördelningen tydligt. ', 'Ser man till handläggningen är sambandet mellan funktionerna ganska direkt. '],
    ['En möjlig invändning gäller hur ett undantag bör behandlas. ', 'Det är viktigt att skilja ett önskemål från ett redan fattat beslut. '],
    ['Nästa steg blir att följa upp hur rutinen faktiskt fungerar. ', 'Det avgörande är om samma förfarande kan användas också nästa gång. ']
  ],
  'pelle-diamantsson': [
    ['Vilken underbar tid att ha ett ordentligt affärssystem! ', 'Man måste nästan höja sin diamant för ett sådant tillfälle! '],
    ['Bakom framgången ligger förstås mer än en lyckad affär. ', 'Det är i hela värdekedjan som den verkliga storheten visar sig. '],
    ['Somliga ser problem där jag ser outnyttjad potential. ', 'En försiktig själ skulle kanske nöja sig, men varför just där? '],
    ['Jag ser framför mig en framtid där nästa steg redan har en plan. ', 'För mig är det den sortens framsteg som får hela kassavalvet att klinga. ']
  ],
  'ester-linde': [
    ['Jag började med ett ganska vanligt ärende och en enkel inköpslista. ', 'Det första jag ville veta var egentligen bara var varan fanns. '],
    ['Som kund märker man snart skillnaden mellan en tjänst och en tillfällig lösning. ', 'Vid disken blir utbudet enklare att förstå när någon har ordnat det i förväg. '],
    ['Visst skulle ett annat alternativ kunna passa någon bättre. ', 'En köpare har ändå rätt att fråga vad bekvämligheten faktiskt kostar. '],
    ['Efter besöket återstår framför allt frågan om jag skulle komma tillbaka. ', 'För mig är ett tydligt köp ofta bättre än flera spännande men osäkra försök. ']
  ],
  'bjorn-ralsund': [
    ['Jag börjar med den fråga som nästan alltid saknas i pressmaterialet. ', 'Vi tar samtalet från den praktiska änden: vem gör vad? '],
    ['Svaret behöver gå att följa från ett moment till nästa. ', 'Då är det intressantare med ett konkret besked än med en stor vision. '],
    ['Jag ställer också följdfrågan som brukar komma när kameran har stängts av. ', 'Det är här jag frågar vad som händer när planeringen inte räcker till. '],
    ['När intervjun är slut finns åtminstone en tydlig arbetsgång kvar. ', 'Det sista svaret handlar mindre om stora ord och mer om vem som tar nästa steg. ']
  ],
  'iris-skymningsson': [
    ['Utanför stadens brus ligger en plats där terrängen får tala först. ', 'I gryningsljuset ser servern nästan ut att ha byggt sig själv. '],
    ['En vandring blir annorlunda när man börjar upptäcka skyltarna i landskapet. ', 'De små spåren av mänsklig planering syns tydligare på nära håll. '],
    ['Det finns människor som helst vill låta sådana platser förbli orörda. ', 'Jag förstår lockelsen i att kunna gå utan ett bestämt mål. '],
    ['Ändå går jag hem med känslan att någon redan sett en möjlig framtid här. ', 'Kanske är det just kontrasten mellan vildmark och ordning som gör platsen minnesvärd. ']
  ]
};
export function makeMagazineArticles(authorId: string, startOffset: number, seeds: StorySeed[]): MagazineDraft[] {
  const voice = voices[authorId];
  if (!voice) throw new Error('Unknown author voice: ' + authorId);
  return seeds.map((seed, i) => {
    const date = new Date(Date.UTC(2026, 10, 2) - (startOffset + i) * 86_400_000)
      .toISOString().slice(0, 10);
    const body = [seed.scene, seed.context, seed.tension, seed.ending]
      .map((paragraph, stage) => voice[stage][(startOffset + i) % voice[stage].length] + paragraph);
    return {
      slug: seed.slug,
      publishedAt: date,
      format: seed.format,
      type: seed.format.toUpperCase(),
      title: seed.title,
      summary: seed.summary,
      image: seed.image,
      alt: 'Minecraft-miljö som illustrerar ' + seed.title.toLowerCase(),
      authorId,
      body
    };
  });
}
