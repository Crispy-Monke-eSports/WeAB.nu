/**
 * Återkommande, fiktiva skribenter i WeAB:s Minecraft-tidning.
 * Skribenternas profiler och signaturer ingår i den fiktiva världen.
 */
export interface Author {
  id: string;
  name: string;
  role: string;
  beat: string;
  biography: string;
  background: string;
}
export const authors: Author[] = [
  {
    id: 'agnes-holmgren', name: 'Agnes Holmgren', role: 'Ledarskribent',
    beat: 'Ägande, samhällsfrågor och offentliga institutioner',
    biography: 'Agnes skriver om de långsiktiga strukturerna bakom vardagens till synes enkla beslut. Hon anser att stabila institutioner framför allt förtjänar stabila fastighetsägare.',
    background: 'Agnes arbetade tidigare med fastighetsprotokoll och lärde sig att en enda otydlig ägarrad kan hålla ett helt kvarter vaket. Hon började skriva ledare när hon insåg att hon hellre ville avgöra frågan än arkivera den.'
  },
  {
    id: 'herr-elskar-weandersson', name: 'Herr Elskar Weandersson', role: 'Insändarskribent',
    beat: 'Ordning, lojalitet och uppskattning',
    biography: 'Herr Weandersson har skrivit fler tackbrev än klagomål. Redaktionen betraktar det som ett tecken på en välfungerande offentlighet.',
    background: 'Herr Weandersson fick sitt första tackbrev publicerat efter att en skylt i hans kvarter hade rätats upp. Sedan dess håller han reda på allt koncernen gjort som förtjänar ett eget kuvert.'
  },
  {
    id: 'marta-ek', name: 'Märta Ek', role: 'Lokal skribent · avliden',
    beat: 'Boende, grannskap och vardagens små frågor',
    biography: 'Märta bevakade förändringarna i Sektion 1 och Sektion 3 från trottoaren och köksbordet. Hon skrev om vardagens detaljer och ifrågasatte offentligt uppgifter om belysningen. Märta omkom den 3 november 2051 vid WeKills järnfarm. WeAB har registrerat dödsfallet som en olycka. Ytterligare uppgifter omfattas av koncernens sekretessbestämmelser.',
    background: 'Märta växte upp i Sektion 3 och började rapportera från grannskapet när gångvägen till hennes mors hus fick en ny sträckning. Hon kunde beskriva den gamla vägen steg för steg.'
  },
  {
    id: 'nils-brynja', name: 'Nils Brynja', role: 'Reporter',
    beat: 'Reportage från hallar, fabriker och byggplatser',
    biography: 'Nils besöker gärna en anläggning före gryningen och återkommer med noggranna iakttagelser om människor, maskiner och material.',
    background: 'Innan Nils blev reporter tog han morgonpass i en sorteringshall. Han behöll vanan att vara på plats innan arbetsdagen hunnit förklara sig för någon utomstående.'
  },
  {
    id: 'selma-kvarnstrom', name: 'Selma Kvarnström', role: 'Ekonomiskribent',
    beat: 'Resurser, investeringar och avkastning',
    biography: 'Selma skriver om hur en diamant lämnar en kista och blir en del av något större. För henne är planering den mest underskattade formen av kapital.',
    background: 'Selma började som lagerbokförare och upptäckte tidigt att en full kista och en levererad kista inte är samma post. Numera ber hon alltid att få se både kalkylen och mottagningslistan.'
  },
  {
    id: 'viktor-sadel', name: 'Viktor Sadel', role: 'Trafikskribent',
    beat: 'Räls, stationer, förbindelser och logistik',
    biography: 'Viktor orienterar sig helst efter en tidtabell och tycker att nästan alla samhällsfrågor till slut handlar om en fungerande anslutning.',
    background: 'Viktor tillbringade sina första arbetsår med att byta slitna spårdelar mellan Sektion 1 och Huvudstaden. Det var där han lärde sig att en invigning är kortare än ett underhållsansvar.'
  },
  {
    id: 'ottilia-glas', name: 'Ottilia Glas', role: 'Kulturredaktör',
    beat: 'Arkitektur, arenaevenemang och offentlig estetik',
    biography: 'Ottilia skriver om platserna där en värld visar vilken bild den vill ge av sig själv. Hon dröjer gärna vid ljus, färg och perspektiv.',
    background: 'Ottilia utbildade sig till glasmästare innan hon började bevaka arkitektur. Hon kan inte gå in i en ny byggnad utan att först se var ljuset faller och vem som valt utsikten.'
  },
  {
    id: 'ruben-kist', name: 'Ruben Kist', role: 'Logistikkrönikör',
    beat: 'Lager, sortering, ordning och varuflöden',
    biography: 'Ruben har en särskild respekt för allt som går att stapla, märka upp och hitta igen. Hans favoritplats är den rätta kistan.',
    background: 'Ruben arbetade en gång med att märka om förrådskistor vars innehåll ingen längre kunde identifiera. Han tog med sig en lista över de mest fantasifulla etiketterna när han gick till tidningen.'
  },
  {
    id: 'alva-heden', name: 'Alva Heden', role: 'Produktionsreporter',
    beat: 'WeKills farmer och koncernens resurssystem',
    biography: 'Alva följer produktionen från första blocket till sista transporten och är mer intresserad av processen än av vem som får beröm.',
    background: 'Alva följde först transporter åt WeKill och blev kvar vid anläggningarna när hon märkte att det intressantaste ofta hände före avfärden. Hon känner fortfarande igen ljudet av en tratt som slutat ta emot.'
  },
  {
    id: 'leif-klover', name: 'Leif Klöver', role: 'Arbetslivsskribent',
    beat: 'WeLove, handelspersonal och boendefrågor',
    biography: 'Leif bevakar personalfrågor med stor tilltro till fasta rutiner och långsiktig bemanningsplanering.',
    background: 'Leif var schemaläggare innan han började skriva om arbetslivet. Han förvarar fortfarande sina gamla passlistor och minns vilka önskemål som aldrig fick en egen rad.'
  },
  {
    id: 'dagmar-stenqvist', name: 'Dagmar Stenqvist', role: 'Samhällsreporter',
    beat: 'WeRule, beslut och offentlig förvaltning',
    biography: 'Dagmar läser hellre beslutets förutsättningar än rubriken och dokumenterar gärna hur ett nytt förfarande påverkar nästa.',
    background: 'Dagmar började som protokollförare vid offentliga möten. När tre olika avdelningar hänvisade till samma obesvarade fråga bytte hon sida av bordet och började ställa den själv.'
  },
  {
    id: 'pelle-diamantsson', name: 'Pelle Diamantsson', role: 'Näringslivskrönikör',
    beat: 'Tillväxt, handel och företagskultur',
    biography: 'Pelle tycker att det mesta blir tydligare om man först ställer frågan vem som äger det. Hans egen penna är inte börsnoterad, ännu.',
    background: 'Pelle växte upp ovanför en liten handelsbod där dagens omsättning räknades vid köksbordet. Hans första egna investering var en skylt som syntes från vägen; han talar ännu om den som familjens stora expansion.'
  },
  {
    id: 'ester-linde', name: 'Ester Linde', role: 'Konsumentskribent',
    beat: 'Butiker, enchantments och service',
    biography: 'Ester undersöker hur vardagens inköp fungerar för den som står framför disken, inte bakom den.',
    background: 'Ester stod själv bakom en butiksdisk innan hon började skriva om kunderna framför den. Hon minns särskilt en kund som kom tillbaka tre gånger för att få veta vem som ansvarade för samma beställning.'
  },
  {
    id: 'bjorn-ralsund', name: 'Björn Rälsund', role: 'Intervjuare',
    beat: 'Samtal med funktioner och ansvariga i koncernen',
    biography: 'Björn vill veta vem som gör vad, vilket besked som faktiskt gavs och vilka frågor som inte behövde ställas två gånger.',
    background: 'Björn skötte tidigare besöksbokningar åt koncernen. Efter år av att höra vem som fick komma in, vem som fick vänta och vem som aldrig fick svar började han ta med sig frågorna till intervjuerna.'
  },
  {
    id: 'iris-skymningsson', name: 'Iris Skymningsson', role: 'Rese- och naturkrönikör',
    beat: 'Huvudstaden, sevärdheter och världen utanför hallarna',
    biography: 'Iris rör sig gärna längs vägar som inte leder direkt till ett lager. Även där lägger hon märke till vem som har byggt nästa skylt.',
    background: 'Iris lämnade sitt första kontorsarbete för att vandra längs vägarna utanför Huvudstaden. Hon skickade hem resebrev som efter hand blev fler än hennes ledighetsansökningar.'
  }
];
export type AuthorId = (typeof authors)[number]['id'];
export const authorsById = new Map(authors.map(author => [author.id, author]));
export function getAuthor(id: string): Author {
  const author = authorsById.get(id);
  if (!author) throw new Error('Okänd fiktiv skribent: ' + id);
  return author;
}
