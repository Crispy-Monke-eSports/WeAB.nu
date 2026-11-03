import { companies } from './companies';

export const headquarters = {
  name: 'WeAB Huvudkontor',
  address: 'Huvudstaden',
  email: 'huvudkontor@weab.nu'
};

const emails: Record<string, string> = {
  wekill: 'kill@weab.nu',
  wesort: 'sort@weab.nu',
  webox: 'box@weab.nu',
  welivelaughlove: 'livelaughlove@weab.nu',
  wegamble: 'gamble@weab.nu',
  wetravel: 'travel@weab.nu',
  wetrade: 'trade@weab.nu',
  welove: 'love@weab.nu',
  werule: 'rule@weab.nu'
};

export const companyContacts = companies.map(company => ({
  name: company.name,
  slug: company.slug,
  location: company.location,
  email: emails[company.slug]
}));

export function emailForCompany(slug: string): string {
  const email = emails[slug];
  if (!email) throw new Error('Saknad kontaktadress för ' + slug);
  return email;
}
