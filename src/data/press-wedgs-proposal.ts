import type { NewsItem } from './news.ts';
import { wedgsProposal } from './wedgsProposal.ts';

/** Officiellt mottagningsbesked; ingen verksamhet, skatt eller sanktion är beslutad. */
export const wedgsProposalPressRelease: NewsItem = {
  publishedAt: wedgsProposal.receivedAt,
  slug: wedgsProposal.pressSlug,
  type: 'INKOMMET FÖRSLAG',
  title: 'WeAB har tagit emot förslag om ett diamant- och gruvskatteverk',
  summary: 'ezzo13337 föreslår DGS, ett diamant- och gruvskatteverk. Store-W och ledningen förordar namnet WeDGS vid ett eventuellt införlivande, men inget är beslutat eller genomfört.',
  image: '/images/weab-cyan-building.webp',
  alt: 'WeAB:s huvudbyggnad i Huvudstaden, där koncernens övergripande beslut hör hemma',
  body: [
    'WeAB bekräftar att ett förslag om ett diamant- och gruvskatteverk har lämnats in av ezzo13337. Förslagsställarens namn på verksamheten är DGS, utan koncernens WE-prefix. Store-W och koncernledningen vill att en eventuell framtida verksamhet ska införlivas under namnet WeDGS. Detta är ledningens namnlinje inför beredningen, inte ett fattat beslut om vare sig namn, ägande, verksamhet, skatt eller drift.',
    'Förslagsställaren beskriver en ordning där diamanter ska beskattas vid försäljning, köp och handel, företagsverksamhet, fastighetsinnehav, gruvdrift och löneutbetalningar. Mottot i underlaget är: ”Ingen diamant ska vara skattefri.” WeAB noterar att formuleringen är ambitiös och att koncernens befintliga system redan är väl utvecklat när det gäller att avgöra var diamanter ska hamna.',
    'I den föreslagna skattetabellen används exempel med en diamant i skatt på en diamant, en på två, två på fyra och fem på tio. Underlaget beskriver en beskattning på ungefär hälften, men exemplet med en enskild diamant behöver preciseras innan någon beräkningsregel skulle kunna fastställas. Det finns därför varken en godkänd skattesats eller någon beslutad avrundningsprincip.',
    'Förslaget innehåller också ett uttryckligt undantag för WeAB och koncernens styrelse. Detta är en uppgift i ezzo13337:s förslag, inte ett fastställt undantag eller ett uttalande om gällande skyldigheter. Frågan om hur en eventuell ny skatteordning skulle förhålla sig till koncernens egna diamantflöden behöver i så fall prövas av ledningen. En särskild granskning av just denna punkt har inte beställts.',
    'Vidare nämns påföljder vid utebliven betalning: böter, extra avgifter, beslagtagna föremål, ekonomisk granskning och indragning av diamanter. Ingen av dessa åtgärder har beslutats inom ramen för förslaget. Inga betalningskrav har utfärdats, inget register har öppnats och ingen myndighetsutövning har delegerats till DGS eller WeDGS.',
    'WeRule ansvarar sedan tidigare för koncernens myndighetsutövning. Om DGS någon gång skulle bli aktuellt måste ledningen först avgöra om förslaget avser ett nytt bolag, en funktion inom en befintlig verksamhet eller något som inte ska genomföras alls. Även Store-W:s och ledningens förslag att använda WE-namnet måste då prövas formellt. Koncernens nio nuvarande dotterbolag påverkas inte av att en tionde verksamhet har föreslagits.',
    '– DGS är ett intressant förslag. Jag och ledningen vill se WE-namnet på verksamheten om den ska bli en del av koncernen. Vi tänker oss WeDGS. Men först måste vi avgöra om vi över huvud taget ska gå vidare, säger Store-W i en kommentar till pressmeddelandet.',
    'WeAB har öppnat en informationssida för DGS och ledningens föreslagna WE-profil, WeDGS, med märkningen ”Under construction”. En preliminär brun WE-logotyp har tagits fram för att illustrera namnlinjen, men den är inte en antagen bolagsidentitet. Märkningen avser en sida under uppbyggnad och en idé under beredning; den betyder inte att kontor, system, personal eller uppbörd är under byggnation. Informationssidan skiljer det som föreslagits från det som faktiskt beslutats.',
    'Nästa steg är att överlämna förslaget till koncernledningens ordinarie prövning. Datum för behandling, ansvarig utredare och eventuell beslutsordning har inte offentliggjorts. Fram till dess fortsätter den befintliga ordningen att gälla. Förslaget kan avslås, ändras eller bli föremål för ytterligare beredning.',
    'WeAB tackar ezzo13337 för initiativet. Något införandedatum för DGS eller den föreslagna WE-varianten finns inte. Den som redan börjat avsätta diamanter för ändamålet gör det på eget initiativ och utan garanti för att koncernen någonsin kommer att begära dem.'
  ]
};
