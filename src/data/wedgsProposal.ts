/** Inkommet förslag, ej beslut. WeDGS är inte ett registrerat dotterbolag. */
export const wedgsProposal = {
  slug: 'wedgs',
  name: 'DGS',
  originalName: 'DGS',
  proposedGroupName: 'WeDGS',
  proposedBrandColor: '#613C20',
  proposedConcreteColor: 'minecraft:brown_concrete',
  brandProposalBy: 'Store-W och koncernledningen',
  descriptiveName: 'Diamant- och gruvskatteverket',
  proposer: 'ezzo13337',
  receivedAt: '2026-11-06',
  pressSlug: 'weab-wedgs-inkommet-skatteforslag',
  status: 'Inkommet förslag – avvaktar ledningens prövning',
  implemented: false,
  approved: false,
  proposedTaxBase: [
    'Försäljning', 'Köp och handel', 'Företag',
    'Fastigheter', 'Gruvdrift', 'Löner'
  ],
  proposedExamples: [
    { diamonds: 1, tax: 1 }, { diamonds: 2, tax: 1 },
    { diamonds: 4, tax: 2 }, { diamonds: 10, tax: 5 }
  ],
  proposedExemption: 'WeAB och dess styrelse',
  proposedSanctions: [
    'Böter', 'Extra avgifter', 'Beslagtagna föremål',
    'Ekonomisk granskning', 'Indragning av diamanter'
  ]
} as const;
