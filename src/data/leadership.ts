export interface Executive {
  name: string;
  title: string;
}

export const chiefExecutive = {
  name: 'Store-W',
  title: 'Verkställande direktör',
  description: 'Store-W leder koncernen från en plats som inte framgår av det offentliga organisationsschemat. Identitet och närvaro kommenteras inte. Besluten gäller ändå.'
};

export const leadingMembers: Executive[] = [
  { name: 'RavenHamster', title: 'Ledande ledamot' },
  { name: 'Filuren2003', title: 'Ledande ledamot' },
  { name: 'Haapalainen', title: 'Ledande ledamot' },
  { name: 'Laxen_MX', title: 'Ledande ledamot' }
];
