export interface Executive {
  name: string;
  title: string;
  profileImage: string;
}

export const chiefExecutive = {
  name: 'Store-W',
  title: 'Verkställande direktör',
  description: 'Store-W leder koncernen från en plats som inte framgår av det offentliga organisationsschemat. Identitet och närvaro kommenteras inte. Besluten gäller ändå.'
};

export const leadingMembers: Executive[] = [
  { name: 'RavenHamster', title: 'Ledande ledamot', profileImage: '/images/ravenhamster-profile.webp' },
  { name: 'Filuren2003', title: 'Ledande ledamot', profileImage: '/images/filuren2003-profile.webp' },
  { name: 'Haapalainen', title: 'Ledande ledamot', profileImage: '/images/haapalainen-profile.webp' },
  { name: 'Laxen_MX', title: 'Ledande ledamot', profileImage: '/images/laxen-mx-profile.webp' }
];
