/**
 * Storyns fastslagna daterade milstolpar. Ändra inte datum här utan nytt
 * underlag och kontroll mot docs/story-kontinuitet.md.
 *
 * Tidigare perioder är i flera fall odaterade. Tilldela dem inte fiktiva datum.
 */
export const storyDates = {
  coupElectionYear: 2045,
  weLiveLaughLoveSectionOneUprisingYear: 2047,
  // Förgiftningen och återtagandet sker under upproret 2047.
  // Sju dödliga tankekontrollexperiment hör till följderna, men saknar exakt datum.
  martaEkDeath: '2051-11-03',
  // Publicerat under 2045; ingen exakt publiceringsdag är fastslagen.
  weRuleMandatePublished: '2045',
  dgsProposal: '2051-11-06',
  resistanceHouseReport: '2051-11-21',
  latestRecordedDate: '2051-11-21'
} as const;

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
