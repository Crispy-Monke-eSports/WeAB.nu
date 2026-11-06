import type { NewsItem } from './news.ts';
import { wedgsProposal } from './wedgsProposal.ts';

/** Officiellt mottagningsbesked; ingen verksamhet, skatt eller sanktion är beslutad. */
export const wedgsProposalPressRelease: NewsItem = {
  publishedAt: wedgsProposal.receivedAt,
  slug: wedgsProposal.pressSlug,
  type: 'INKOMMET FÖRSLAG',
  title: 'WeAB har tagit emot förslag om ett diamant- och gruvskatteverk',
  summary: 'ezzo13337 föreslår WeDGS och en diamantbaserad skatt på handel, gruvdrift och inkomster. Koncernledningen har ännu inte prövat förslaget; inga nya skatter eller verksamheter har införts.',
  image: '/images/weab-cyan-building.webp',
  alt: 'WeAB:s huvudbyggnad i Huvudstaden, där koncernens övergripande beslut hör hemma',
  body: [
    'WeAB bekräftar att ett förslag om ett diamant- och gruvskatteverk har lämnats in av ezzo13337. Förslaget använder förkortningen DGS och har inom koncernens preliminära ärendehantering fått arbetsnamnet WeDGS. Koncernledningen har tagit emot materialet men ännu inte fattat beslut om att bilda någon ny verksamhet, införa en skatt eller påbörja någon drift.',
    'Förslagsställaren beskriver en ordning där diamanter ska beskattas vid försäljning, köp och handel, företagsverksamhet, fastighetsinnehav, gruvdrift och löneutbetalningar. Mottot i underlaget är: ”Ingen diamant ska vara skattefri.” WeAB noterar att formuleringen är ambitiös och att koncernens befintliga system redan är väl utvecklat när det gäller att avgöra var diamanter ska hamna.',
    'I den föreslagna skattetabellen används exempel med en diamant i skatt på en diamant, en på två, två på fyra och fem på tio. Underlaget beskriver en beskattning på ungefär hälften, men exemplet med en enskild diamant behöver preciseras innan någon beräkningsregel skulle kunna fastställas. Det finns därför varken en godkänd skattesats eller någon beslutad avrundningsprincip.',
    'Förslaget innehåller också ett uttryckligt undantag för WeAB och koncernens styrelse. Detta är en uppgift i ezzo13337:s förslag, inte ett fastställt undantag eller ett uttalande om gällande skyldigheter. Frågan om hur en eventuell ny skatteordning skulle förhålla sig till koncernens egna diamantflöden behöver i så fall prövas av ledningen. En särskild granskning av just denna punkt har inte beställts.',
    'Vidare nämns påföljder vid utebliven betalning: böter, extra avgifter, beslagtagna föremål, ekonomisk granskning och indragning av diamanter. Ingen av dessa åtgärder har beslutats inom ramen för förslaget. Inga betalningskrav har utfärdats, inget register har öppnats och ingen myndighetsutövning har delegerats till WeDGS.',
    'WeRule ansvarar sedan tidigare för koncernens myndighetsutövning. Om WeDGS någon gång skulle bli aktuellt måste ledningen först avgöra om namnet avser ett nytt bolag, en funktion inom en befintlig verksamhet eller något som inte ska genomföras alls. Koncernens nio nuvarande dotterbolag påverkas inte av att en tionde verksamhet har föreslagits.',
    '– Det är ett inkommet förslag, inte ett fattat beslut. Vi uppskattar intresset för koncernens diamantflöden. Om någon ska ta betalt för dem behöver vi först bestämma vem, säger Store-W i en kommentar till pressmeddelandet.',
    'WeAB har öppnat en informationssida för arbetsnamnet WeDGS med märkningen ”Under construction”. Märkningen avser en sida under uppbyggnad och en idé under beredning; den betyder inte att kontor, system, personal eller uppbörd är under byggnation. Informationssidan skiljer det som föreslagits från det som faktiskt beslutats.',
    'Nästa steg är att överlämna förslaget till koncernledningens ordinarie prövning. Datum för behandling, ansvarig utredare och eventuell beslutsordning har inte offentliggjorts. Fram till dess fortsätter den befintliga ordningen att gälla. Förslaget kan avslås, ändras eller bli föremål för ytterligare beredning.',
    'WeAB tackar ezzo13337 för initiativet. Något införandedatum för WeDGS finns inte. Den som redan börjat avsätta diamanter för ändamålet gör det på eget initiativ och utan garanti för att koncernen någonsin kommer att begära dem.'
  ]
};
