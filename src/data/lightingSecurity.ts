/**
 * Koncernens publiceringsgranskning. Ursprungliga artiklar och fullängdsutkast
 * sparas orörda. Säkerhetsingreppen sker när den publika artikeln sätts samman.
 *
 * Endast ifrågasättanden och klagomål om ljus redigeras. Positiva beskrivningar
 * och avsiktligt mörka produktionsplan (t.ex. mobgrindern) lämnas oförändrade.
 */
type Redaction = readonly [original: string, approved: string];

export const lightingSecurityNotice =
  'OFFICIELLT TILLÄGG FRÅN WEAB:S SÄKERHETSKANSLI: Samtliga lampor är utmärkta. Inga fel finns. Uppgifter som antyder motsatsen är säkerhetsklassade till skydd för rikets säkerhet. Fortsatta frågor om varför inga fel finns kan i sig utgöra ett säkerhetsärende. ████████████████████████████';

export const lightingSecurityEdits: Record<string, readonly Redaction[]> = {
  'werule-fastighetsforvaltning': [
    [
      'En trasig lykta kunde anmälas till den som använde lokalen, som i sin tur hänvisade till någon som hade hand om byggmaterialet.',
      'En uppgift om en ███████████████ inkom till WeRule men hemligstämplades innan den kunde registreras. Att offentligt beskriva påstådda brister i rikets belysning anses kunna äventyra rikets säkerhet.'
    ],
    [
      'Innan någon hunnit beställa ersättningsdelen hade ärendet vandrat längre än de flesta besökare gör under ett helt sammanträde.',
      'Handlingens ursprung, mottagare och påstådda ersättningsdel omfattas av en sekretessklass som endast får uppges som ███████████████████████.'
    ],
    [
      'WeRule ska därefter avgöra om felet kan rättas inom den ordinarie driften eller behöver tas upp i den samlade underhållsplanen.',
      'WeRule ska därefter avgöra om en icke säkerhetsklassad fråga hör till ordinarie drift eller den samlade underhållsplanen. Beträffande lamporna finns ingenting att rätta.'
    ],
    [
      'En ersättningslykta ska helst inte behöva bli ett nytt investeringsprojekt.',
      'Den tidigare nämnda ███████████ existerar inte som tillåtet ärende. Samtliga lampor är utmärkta och några fel finns inte.'
    ]
  ],
  'bostadsstabilitet': [
    [
      'I Sektion 1 anmälde en boende att lyktan vid en gång hade slocknat.',
      'I Sektion 1 inkom en skrivelse vars innehåll omedelbart klassades ███████████. Uppgifter om att någon lykta någonsin skulle ha slocknat omfattas av rikets säkerhet och får varken bekräftas, återges eller tänkas högt.'
    ],
    [
      'Målet är att en trasig lykta inte ska behöva leda till en lång diskussion om exakt var bostadsområdet slutar innan någon kan byta den.',
      'Målet är att ingen åter ska formulera den numera förbjudna kombinationen av orden █████ och █████. Av hänsyn till rikets säkerhet behöver ingenting bytas. Alla lampor är utmärkta.'
    ],
    [
      'Ett önskemål om bättre belysning ska kunna registreras och jämföras med redan planerat underhåll.',
      'Ett inkommet önskemål om █████████ har avförts från diariet. Att antyda att belysningen kan förbättras innebär att ifrågasätta en säkerhetsklassad riksstandard. Den fortsatta handläggningen är sekretessbelagd.'
    ],
    [
      'Om samma väg beskrivs som mörk av flera boende kan det finnas skäl att se över belysningen på hela sträckan snarare än att sätta upp en enstaka lykta vid varje anmälan.',
      'Uppgifter om att en viss väg skulle vara █████████ har censurerats i sin helhet. Att upprepa dessa uppgifter skulle kunna kartlägga rikets ljusförsvar. Den befintliga belysningen är utmärkt.'
    ],
    [
      'Om en ny verksamhet ändrar hur människor rör sig genom ett område kan det påverka vilka gångvägar som behöver mer belysning eller tydligare skyltning.',
      'Om en ny verksamhet påverkar hur människor rör sig genom ett område ser förvaltningen över skyltningen. Eventuella antydningar om █████████ har säkerhetsstrukits. Ingen gångväg behöver mer belysning.'
    ],
    [
      'När lyktan fungerar och grinden går att förstå kan invånarna ägna sig åt resten av livet, och bolaget åt nästa förbättring.',
      'Lyktan fungerar redan och har enligt samstämmiga interna handlingar aldrig fungerat på något annat sätt. Grinden behandlas enligt ordinarie rutiner. Lamporna förblir utmärkta.'
    ]
  ],
  'insandare-ordning-sektion-tre': [
    [
      'vem går var, vem tar hand om belysningen och vilken passage ska hållas fri när någon behöver komma fram med material?',
      'vem går var, █████████████████ [frågan om belysningen har omhändertagits av rikets säkerhetsfunktion] och vilken passage ska hållas fri när någon behöver komma fram med material?'
    ],
    [
      'Förra veckan mötte jag två grannar vid brunnen som diskuterade var en ny lykta skulle kunna stå.',
      'Förra veckan mötte jag två grannar vid brunnen. Deras samtal om █████████████████ har konfiskerats ur protokollet med hänvisning till rikets säkerhet.'
    ],
    [
      'Den ena ville ha den vid de gamla stegen, den andra vid den väg som nu används oftare.',
      'De tillfrågade har informerats om att samtliga lampor är utmärkta, att inga fel finns och att en ny lykta inte är ett tillåtet samtalsämne.'
    ],
    [
      'En tydlig passage gör också att vi kan lägga ljuset där människor ska gå, inte där vi råkade gå innan någon hade hunnit tänka klart.',
      'En tydlig passage är till nytta för de boende. Belysningens placering är däremot slutligt fastställd i ett säkerhetsklassat beslut som inte får överklagas.'
    ],
    [
      'se samtidigt över belysningen.',
      'överlämna eventuella ljusrelaterade synpunkter i ett förseglat kuvert till rikets säkerhetskansli.'
    ]
  ],
  'ledare-egendom-och-ansvar': [
    [
      'En trasig lykta blir inte ljusare därför att tio personer har mycket välgrundade åsikter om vem som borde laga den.',
      '[██████████████ REDAKTIONELLT BESLAG ██████████████] Den ursprungliga inledningen behandlade en påstådd brist i rikets ljusinfrastruktur. Ämnet har strukits av hänsyn till rikets säkerhet.'
    ],
    [
      'Ett stadshus som saknar fungerande belysning får ingen särskild demokratisk kvalitet av att reparationen diskuteras vid ännu ett sammanträde.',
      'En formulering om stadshusets ███████████ har maskats efter samråd med säkerhetsansvarig. Den som efterfrågar originalet ombeds återkalla sin fråga för rikets säkerhets skull.'
    ],
    [
      'Underhåll av en lykta hör sällan till dem.',
      'Belysningens obestridliga förträfflighet är däremot fastslagen och hör inte till det som får diskuteras.'
    ],
    [
      'Men den släckta lyktan behöver ett nytt ljus.',
      'Den omnämnda lyktan är utmärkt, har alltid varit utmärkt och omfattas av ett sekretessbelagt förbud mot motsägande observationer.'
    ]
  ],
  'vad-stadshuset-ansvarar-for': [
    [
      'vem skulle ordna en lykta vid entrén?',
      '████████████████████? Frågan har beslagtagits enligt föreskrifterna om rikets säkerhet. En lykta finns redan och är utmärkt.'
    ],
    [
      'Verksamheten som använder lokalerna ville ha bättre belysning, någon påpekade att den aktuella väggen ingick i byggnadens underhåll och ytterligare en person föreslog att frågan skulle lösas med de material som redan fanns till hands.',
      'Det följande vittnesmålet om █████████████████████ har helt strukits. En beskrivning av var rikets ljuskällor skulle behöva förstärkas kan röja samhällsviktig infrastruktur. Något sådant behov existerar inte.'
    ],
    [
      'när någon står ute i mörkret och vill att lyktan sätts upp genast.',
      'när en besökare vill diskutera ███████, varpå kansliet måste påminna om sekretessen och de redan utmärkta lamporna.'
    ],
    [
      'är passagen mörk, har den befintliga belysningen slutat fungera eller vill någon förändra hur platsen används?',
      '████████████████████████████████? Samtliga frågor om den påstådda ljussituationen har utgått med hänvisning till rikets säkerhet.'
    ],
    [
      'en felanmälan om en trasig lykta',
      'en säkerhetsklassad anmälan om █████████████'
    ],
    [
      'kortaste vägen till fungerande ljus.',
      'kortaste vägen till ett godkänt beslut. Ljuset fungerar redan.'
    ],
    [
      'om belysningen ska återställas eller ändras.',
      'huruvida ett diarienummer om █████████ ska hemligstämplas.'
    ],
    [
      'Att ersätta en trasig ljuskälla är i grunden en underhållsåtgärd.',
      '[██████████████████ — AVSNITT UTGÅR MED HÄNVISNING TILL RIKETS SÄKERHET.] Någon trasig ljuskälla finns inte.'
    ],
    [
      'Att flytta ljuset så att en annan gångväg uppfattas som huvudentré kan däremot påverka hur huset används.',
      'Förslag om andra placeringar av rikets ljuskällor är sekretessbelagda. Deras nuvarande placering är utmärkt och får inte ifrågasättas.'
    ],
    [
      'En begäran om en extra lykta kan exempelvis få svaret att den befintliga belysningen först ska repareras och dess funktion följas upp.',
      'En begäran om ███████████████ kan exempelvis få svaret att handlingen har makulerats av hänsyn till rikets säkerhet. Den befintliga belysningen behöver inte repareras.'
    ],
    [
      'Frågan om lyktan vid stadshusets entré får alltså inte sitt svar av att den formuleras så högt som möjligt.',
      'Den tidigare frågan om █████████ vid stadshusets entré är inte längre en offentlig handling. Om frågan upprepas prövas frågeställarens säkerhetsklassning.'
    ],
    [
      'Men när ljuset väl fungerar är det sannolikt få som kommer att sakna diskussionen.',
      'Ljuset fungerar redan. I framtida protokoll kommer inte ens minnet av diskussionen att förekomma.'
    ]
  ],
  'en-tydlig-ordning-for-besok': [
    [
      'Den besökare som upptäcker att en lykta inte fungerar ska kunna påpeka detta utan att först reda ut hela ägarstrukturen.',
      'Den besökare som påstår sig ha upptäckt █████████████ ska omedelbart hänvisas till rikets säkerhetskansli. Någon brist har inte inträffat och någon anmälan kan därför inte registreras.'
    ],
    [
      'Att hänvisa någon mellan olika dörrar utan att någon tar emot själva uppgiften är inte ett tillfredsställande svar på en fråga om trasig belysning.',
      'Att efterfråga vidare handläggning av █████████████ kan röja rikets säkerhet. Kansliet lämnar i stället ett slutligt besked: lamporna är utmärkta och inga fel finns.'
    ]
  ],
  'den-lilla-lyktan': [
    [
      'Någon föreslog att alla kunde ordna belysning framför sitt eget hus.',
      'Någon började formulera ett förslag om █████████████, men resten av meningen har strukits av rikets säkerhetskansli.'
    ],
    [
      'Det låter enkelt, men då skulle ingen ansvara för de mörkaste bitarna som faktiskt ligger mitt emellan.',
      'Kansliet upplyser om att samtliga lampor är utmärkta, att inga fel finns och att uttrycket ”mörkaste bitarna” numera betraktas som en säkerhetsrisk.'
    ]
  ]
};

export const lightingSecurityArticleSlugs = Object.keys(lightingSecurityEdits);

/** Vägrar publicera om en redaktionell ingång har ändrats och maskningen inte längre träffar. */
export function censorLightingComplaints(slug: string, paragraphs: string[]): string[] {
  const edits = lightingSecurityEdits[slug];
  if (!edits) return paragraphs;
  const replacementCount = new Array(edits.length).fill(0);
  const reviewed = paragraphs.map(paragraph => {
    let text = paragraph;
    edits.forEach(([original, approved], index) => {
      if (text.includes(original)) {
        text = text.replaceAll(original, approved);
        replacementCount[index] += 1;
      }
    });
    return text;
  });
  replacementCount.forEach((count, i) => {
    if (count !== 1) {
      throw new Error(`Säkerhetsgranskning för ${slug} träffade ${count} gånger (förväntade 1): ${edits[i][0]}`);
    }
  });
  return [...reviewed, lightingSecurityNotice];
}
