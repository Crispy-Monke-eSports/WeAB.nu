/**
 * Etappvis förlängning av WeAB Tidningen.
 * De tio första pressmeddelandena finns direkt i news.ts.
 * Artiklar 11–20 har sina fullängdstexter i src/data/expanded/,
 * som används av publications.ts utan att ändra artikelmetadata.
 * Kommande omgångar färdigställs skribentvis och valideras som hela serier.
 */
export const expandedArticleSlugs = [
  "werule-fastighetsforvaltning",
  "wesort-colors-kapacitet",
  "wekill-tredimensionell-produktionsplan",
  "webox-tillatelsehantering",
  "welivelaughlove-sektion-tre",
  "huvudstadens-arena",
  "welove-framtidens-arbetskraft",
  "wetravel-stationsplan",
  "wetrade-kunskapsmonopol",
  "webox-lagerkontroll",
  "wetravel-forbindelser",
  "weab-kapitalallokering",
  "wesort-logistik",
  "wekill-produktion",
  "wegamble-utveckling",
  "bostadsstabilitet",
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
  "en-koncern-ar-en-god-granne"
] as const;
export const expandedMinimumWords = 500;
export const expandedMinimumParagraphs = 8;

/** Endast skribenter vars samtliga texter redan är fullängdsartiklar. */
export const completedAuthorIds = ['ruben-kist', 'alva-heden', 'herr-elskar-weandersson'] as const;
