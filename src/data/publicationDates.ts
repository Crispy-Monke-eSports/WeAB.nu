/**
 * En del äldre pressmeddelanden är endast belagda till år (2045).
 * Visa då enbart året; tilldela inte dokumenten en påhittad dag eller månad.
 */
export function publicationDateLabel(date: string, month: 'long' | 'short' = 'long'): string {
  if (/^\d{4}$/.test(date)) return date;
  return new Intl.DateTimeFormat('sv-SE', {
    day: 'numeric', month, year: 'numeric', timeZone: 'UTC'
  }).format(new Date(`${date}T12:00:00Z`));
}
