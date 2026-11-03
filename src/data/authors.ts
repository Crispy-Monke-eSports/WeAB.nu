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
  approach: string;
}
export const authors: Author[] = [
  {
    id: 'agnes-holmgren', name: 'Agnes Holmgren', role: 'Ledarskribent',
    beat: 'Ägande, samhällsfrågor och offentliga institutioner',
    biography: 'Agnes skriver om de långsiktiga strukturerna bakom vardagens till synes enkla beslut. Hon anser att stabila institutioner framför allt förtjänar stabila fastighetsägare.',
    approach: 'Lugna, välbyggda resonemang; medger en invändning innan hon metodiskt visar varför den ändå talar för WeAB.'
  },
  {
    id: 'herr-elskar-weandersson', name: 'Herr Elskar Weandersson', role: 'Insändarskribent',
    beat: 'Ordning, lojalitet och uppskattning',
    biography: 'Herr Weandersson har skrivit fler tackbrev än klagomål. Redaktionen betraktar det som ett tecken på en välfungerande offentlighet.',
    approach: 'Högtidligt tilltal, artiga utrop och långa jämförelser; förundras genuint över att någon kan vilja annat än koncernens bästa.'
  },
  {
    id: 'marta-ek', name: 'Märta Ek', role: 'Lokal skribent',
    beat: 'Boende, grannskap och vardagens små frågor',
    biography: 'Märta följer förändringarna i Sektion 1 och Sektion 3 från trottoaren och köksbordet. Hon skriver gärna om de detaljer som märks först när de saknas.',
    approach: 'Första person, konkreta vardagsscener och försiktiga önskemål; varje invändning landar i tacksamhet över tydliga rutiner.'
  },
  {
    id: 'nils-brynja', name: 'Nils Brynja', role: 'Reporter',
    beat: 'Reportage från hallar, fabriker och byggplatser',
    biography: 'Nils besöker gärna en anläggning före gryningen och återkommer med noggranna iakttagelser om människor, maskiner och material.',
    approach: 'Börjar med ljud eller en synlig detalj, följer arbetsflödet och låter den orimliga ordningen framträda utan att kommentera den.'
  },
  {
    id: 'selma-kvarnstrom', name: 'Selma Kvarnström', role: 'Ekonomiskribent',
    beat: 'Resurser, investeringar och avkastning',
    biography: 'Selma skriver om hur en diamant lämnar en kista och blir en del av något större. För henne är planering den mest underskattade formen av kapital.',
    approach: 'Nykter analys med tydliga orsakskedjor, alternativkostnader och slutsatser om kapacitet. Påstår aldrig exakta siffror som saknar underlag.'
  },
  {
    id: 'viktor-sadel', name: 'Viktor Sadel', role: 'Trafikskribent',
    beat: 'Räls, stationer, förbindelser och logistik',
    biography: 'Viktor orienterar sig helst efter en tidtabell och tycker att nästan alla samhällsfrågor till slut handlar om en fungerande anslutning.',
    approach: 'Sakliga förflyttningar från plats A till B, praktiska följdfrågor och ett envist intresse för vem som ska betala underhållet.'
  },
  {
    id: 'ottilia-glas', name: 'Ottilia Glas', role: 'Kulturredaktör',
    beat: 'Arkitektur, arenaevenemang och offentlig estetik',
    biography: 'Ottilia skriver om platserna där en värld visar vilken bild den vill ge av sig själv. Hon dröjer gärna vid ljus, färg och perspektiv.',
    approach: 'Bildrikt och observerande språk med en stillsam övergång från skönhetsintryck till hur väl koncernen organiserar besökarens blick.'
  },
  {
    id: 'ruben-kist', name: 'Ruben Kist', role: 'Logistikkrönikör',
    beat: 'Lager, sortering, ordning och varuflöden',
    biography: 'Ruben har en särskild respekt för allt som går att stapla, märka upp och hitta igen. Hans favoritplats är den rätta kistan.',
    approach: 'Vardagsnära liknelser med lådor, hyllor och borttappade saker. Lätt torr humor; ger gärna materialet mänskliga egenskaper.'
  },
  {
    id: 'alva-heden', name: 'Alva Heden', role: 'Produktionsreporter',
    beat: 'WeKills farmer och koncernens resurssystem',
    biography: 'Alva följer produktionen från första blocket till sista transporten och är mer intresserad av processen än av vem som får beröm.',
    approach: 'Förklarar mekaniken pedagogiskt i rätt ordning, noterar driftstopp och avslutar ofta med följderna för nästa led.'
  },
  {
    id: 'leif-klover', name: 'Leif Klöver', role: 'Arbetslivsskribent',
    beat: 'WeLove, handelspersonal och boendefrågor',
    biography: 'Leif bevakar personalfrågor med stor tilltro till fasta rutiner och långsiktig bemanningsplanering.',
    approach: 'Vänligt förvaltarspråk, många omsorgsfulla formuleringar och en tendens att beskriva varje personlig önskan som ett planeringsunderlag.'
  },
  {
    id: 'dagmar-stenqvist', name: 'Dagmar Stenqvist', role: 'Samhällsreporter',
    beat: 'WeRule, beslut och offentlig förvaltning',
    biography: 'Dagmar läser hellre beslutets förutsättningar än rubriken och dokumenterar gärna hur ett nytt förfarande påverkar nästa.',
    approach: 'Protokollnära meningar, ordnade villkor och exakt ansvarsuppdelning. En intressant tystnad är i regel bara ett avslutat samråd.'
  },
  {
    id: 'pelle-diamantsson', name: 'Pelle Diamantsson', role: 'Näringslivskrönikör',
    beat: 'Tillväxt, handel och företagskultur',
    biography: 'Pelle tycker att det mesta blir tydligare om man först ställer frågan vem som äger det. Hans egen penna är inte börsnoterad, ännu.',
    approach: 'Entusiastiska utrop, överdrivet vördnadsfulla jämförelser och storslagna metaforer om diamanter; alltid begriplig under den höga volymen.'
  },
  {
    id: 'ester-linde', name: 'Ester Linde', role: 'Konsumentskribent',
    beat: 'Butiker, enchantments och service',
    biography: 'Ester undersöker hur vardagens inköp fungerar för den som står framför disken, inte bakom den.',
    approach: 'Praktiska kundsituationer, lagom skeptiska frågor och en noggrant motiverad slutsats om bekvämligheten i ett samlat utbud.'
  },
  {
    id: 'bjorn-ralsund', name: 'Björn Rälsund', role: 'Intervjuare',
    beat: 'Samtal med funktioner och ansvariga i koncernen',
    biography: 'Björn vill veta vem som gör vad, vilket besked som faktiskt gavs och vilka frågor som inte behövde ställas två gånger.',
    approach: 'Konkreta frågor och korta svar, återkommer till detaljer som ett praktiskt dröjsmål eller en obekväm fråga om tillträde.'
  },
  {
    id: 'iris-skymningsson', name: 'Iris Skymningsson', role: 'Rese- och naturkrönikör',
    beat: 'Huvudstaden, sevärdheter och världen utanför hallarna',
    biography: 'Iris rör sig gärna längs vägar som inte leder direkt till ett lager. Även där lägger hon märke till vem som har byggt nästa skylt.',
    approach: 'Stillsamma naturbilder, lakonisk humor och en torr slutsats om hur landskapet snart kan bli mer organiserat.'
  }
];
export type AuthorId = (typeof authors)[number]['id'];
export const authorsById = new Map(authors.map(author => [author.id, author]));
export function getAuthor(id: string): Author {
  const author = authorsById.get(id);
  if (!author) throw new Error('Okänd fiktiv skribent: ' + id);
  return author;
}
