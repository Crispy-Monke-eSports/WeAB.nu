/**
 * Etappvis förlängning av WeAB Tidningen.
 * De tio första pressmeddelandena finns direkt i news.ts.
 * Artiklar 11–20 har sina fullängdstexter i src/data/expanded/,
 * som används av publications.ts utan att ändra artikelmetadata.
 * Följande omgång arbetar skribentvis; Ruben Kists första längre krönika är incheckad.
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
  "den-borttappade-kistans-sorg"
] as const;
export const expandedMinimumWords = 500;
export const expandedMinimumParagraphs = 8;
