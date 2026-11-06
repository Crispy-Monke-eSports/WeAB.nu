/**
 * Storyns fastslagna daterade milstolpar. Ändra inte datum här utan nytt
 * underlag och kontroll mot docs/story-kontinuitet.md.
 *
 * Tidigare perioder är i flera fall odaterade. Tilldela dem inte fiktiva datum.
 */
export const storyDates = {
  martaEkDeath: '2026-11-03',
  weRuleTransfer: '2026-11-04',
  dgsProposal: '2026-11-06'
} as const;

/**
 * Dessa arkivartiklar skrevs före WeRules totala maktövertagande.
 * Då skilde riksdagen fortfarande sina beslut från WeAB:s förvaltning av
 * vissa offentliga byggnader. Artiklarna får förbli oförändrade som
 * samtidsskildringar men får en tydlig arkivkommentar i läsvyn.
 */
export const preTransferRiksdagArticleSlugs = [
  'fastighetens-tysta-kontrakt',
  'riksdagshuset-och-verklighetens-vaggar',
  'riksdagshusets-fasad',
  'riksdagshuset-och-fastighetsfragan',
  'ledare-egendom-och-ansvar'
] as const;

export function needsPreTransferContext(slug: string, publicationDate: string): boolean {
  return publicationDate < storyDates.weRuleTransfer &&
    (preTransferRiksdagArticleSlugs as readonly string[]).includes(slug);
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
