/**
 * Etappvis förlängning av WeAB Tidningen.
 * Arenans storybärande pressmeddelande finns i news.ts.
 * Redaktionella fullängdstexter ligger i src/data/expanded/ och kopplas
 * in utan att ändra metadata. Rutinnotiser har tagits ur pressarkivet.
 * Framtida press kräver dokumenterade händelser enligt docs/press-policy.md.
 */
export const expandedArticleSlugs = [
  "huvudstadens-arena",
  "insandare-ordning-sektion-tre",
  "ledare-egendom-och-ansvar",
  "insandare-en-handlare-racker",
  "reportage-inne-i-wesort",
  "den-borttappade-kistans-sorg",
  "hur-en-farg-fick-en-egen-avdelning",
  "shulkerboxens-lilla-hemlighet",
  "ett-fack-for-framtiden",
  "varje-block-har-en-adress",
  "jarnfarmens-andra-uppgift",
  "endermanfarmens-egen-dimension",
  "sockerrorens-stilla-arbete",
  "guldfarmens-bortglomda-kedja",
  "shulkerfarmens-betydelse",
  "insandare-farmer-som-fungerar",
  "skyltarnas-stora-fortjanst",
  "en-kista-vard-att-beundra",
  "en-hogtidlig-vantan-pa-taget",
  "bygg-med-tacksamhet",
  "en-koncern-ar-en-god-granne",
  "vad-stadshuset-ansvarar-for",
  "nar-ett-underhall-far-ett-nummer",
  "en-tydlig-ordning-for-besok",
  "riksdagshuset-och-fastighetsfragan",
  "vem-tar-hand-om-nasta-byggnad"
] as const;
export const expandedMinimumWords = 500;
export const expandedMinimumParagraphs = 8;

/** Endast skribenter vars samtliga texter redan är fullängdsartiklar. */
export const completedAuthorIds = ['ruben-kist', 'alva-heden', 'herr-elskar-weandersson', 'dagmar-stenqvist'] as const;
