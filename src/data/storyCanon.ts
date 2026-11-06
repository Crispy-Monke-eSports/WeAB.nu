/**
 * Storyns fastslagna daterade milstolpar. Ändra inte datum här utan nytt
 * underlag och kontroll mot docs/story-kontinuitet.md.
 *
 * Tidigare perioder är i flera fall odaterade. Tilldela dem inte fiktiva datum.
 */
export const storyDates = {
  coupElectionYear: 2045,
  martaEkDeath: '2051-11-03',
  weRuleRetrospective: '2051-11-04',
  dgsProposal: '2051-11-06',
  resistanceHouseReport: '2051-11-21',
  latestRecordedDate: '2051-11-21'
} as const;

/**
 * Riksdagsreportage publicerade i 2051 års arkiv behandlar ett historiskt
 * skede före WeAB:s kupp vid riksvalet 2045. Dessa behöver en tydlig
 * arkivkommentar: historiskt presens får inte förväxlas med nutida mandat.
 */
export const historicalRiksdagArticleSlugs = [
  'fastighetens-tysta-kontrakt',
  'riksdagshuset-och-verklighetens-vaggar',
  'riksdagshusets-fasad',
  'riksdagshuset-och-fastighetsfragan',
  'ledare-egendom-och-ansvar'
] as const;

export function needsHistoricalRiksdagContext(slug: string): boolean {
  return (historicalRiksdagArticleSlugs as readonly string[]).includes(slug);
}

/**
 * Korsdalen hör till en senare berättelsemiljö som ännu inte existerar i
 * WeAB-webbplatsens tidsläge. Namnet finns endast i koncernens preliminära
 * expansionsöverväganden. Skapa inte bolag, myndigheter, kartpunkter, rutter,
 * skatteintäkter eller pressnotiser för denna ort.
 */
export const korsdalenContinuity = {
  proposedDestination: 'Korsdalen',
  stage: 'preliminär exploateringsplanering',
  contacted: false,
  agreementReached: false,
  expansionApproved: false,
  expansionImplemented: false,
  laterSettingNotYetEstablished: true
} as const;
