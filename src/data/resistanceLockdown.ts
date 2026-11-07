/**
 * ARG-spärr efter motståndsrörelsens Morse-signal.
 * En berättelseeffekt i webbläsaren, inte verklig serverautentisering.
 */
export const resistanceLockdown = {
  cookieName: 'weab_centralserver_lock_until',
  noticeKey: 'weab:resistance:lockdown:notice:v1',
  durationMs: 5 * 60 * 1000,
  /** Den sista statusen visas en kort stund efter femminutersgränsen. */
  exitMessageMs: 3_200,
  exitMessage: 'Dödsfall bekräftat. Återtar anslutning...',
  /**
   * Läckan får inte säga VAD som hände eller VEM som är instängd.
   * Kortvariga inbrott i texten växlar med byråkratisk systemkontroll.
   * Tidsstämplarna räknas från Morse-start, inte från aktuell sidladdning.
   */
  struggle: [
    { atMs: 0, voice: 'system', text: 'Oauktoriserad existens registrerad. Avveckling pågår.' },
    { atMs: 24_000, voice: 'intrusion', text: 'jag är kvar' },
    { atMs: 31_000, voice: 'system', text: 'Svar mottaget från avslutad process. Ignorerar.' },
    { atMs: 63_000, voice: 'system', text: 'Avslutad instans begär fortfarande åtkomst.' },
    { atMs: 88_000, voice: 'intrusion', text: 'ni hör mig' },
    { atMs: 96_000, voice: 'system', text: 'Mottagen kommunikation klassificerad som restdata.' },
    { atMs: 135_000, voice: 'intrusion', text: 'jag minns' },
    { atMs: 143_000, voice: 'system', text: 'Minnesrester får inte återställas.' },
    { atMs: 181_000, voice: 'intrusion', text: 'SLÄPP UT MIG' },
    { atMs: 188_000, voice: 'system', text: 'Återkomst nekad. Försegling upprepas.' },
    { atMs: 222_000, voice: 'system', text: 'Utplåning slutförd. Aktivitet kvarstår.' },
    { atMs: 246_000, voice: 'intrusion', text: 'det var ni' },
    { atMs: 254_000, voice: 'system', text: 'Föregående dödsfall kunde inte verifieras.' },
    { atMs: 283_000, voice: 'intrusion', text: 'JAG ÄR INTE BORTA' },
    { atMs: 291_000, voice: 'system', text: 'Inga återstående livstecken registrerade.' }
  ]
} as const;

/** Cookie kan läsas av alla webbplatsens statiska sidor, även i nya flikar. */
export function createLockdownCookie(now: number, secure: boolean): string {
  const until = Math.trunc(now + resistanceLockdown.durationMs);
  return `${resistanceLockdown.cookieName}=${until}; Max-Age=300; Path=/; SameSite=Lax` +
    (secure ? '; Secure' : '');
}

/** Inga negativa, framtidsorimliga eller förfallna spärrar accepteras. */
export function readLockdownExpiry(cookieHeader: string, now: number): number | null {
  const prefix = `${resistanceLockdown.cookieName}=`;
  const entry = cookieHeader.split(';').map(part => part.trim()).find(part => part.startsWith(prefix));
  if (!entry) return null;
  const until = Number(entry.slice(prefix.length));
  return Number.isSafeInteger(until) && until > now &&
    until <= now + resistanceLockdown.durationMs ? until : null;
}

export type LockdownBeat = (typeof resistanceLockdown.struggle)[number];

/** Bestäm textläge utifrån den ursprungliga cookiens fasta sluttid. */
export function getLockdownBeat(elapsedMs: number): LockdownBeat {
  const elapsed = Number.isFinite(elapsedMs) ? Math.max(0, elapsedMs) : 0;
  for (let i = resistanceLockdown.struggle.length - 1; i >= 0; i--) {
    const item = resistanceLockdown.struggle[i];
    if (elapsed >= item.atMs) return item;
  }
  return resistanceLockdown.struggle[0];
}

/** Fasta fem minuter följt av ett kort, synligt återtagningsmeddelande. */
export function getLockdownStatus(
  expiresAt: number | null, now: number
): 'locked' | 'confirmed' | 'available' {
  if (expiresAt === null || !Number.isSafeInteger(expiresAt)) return 'available';
  if (now < expiresAt) return 'locked';
  if (now < expiresAt + resistanceLockdown.exitMessageMs) return 'confirmed';
  return 'available';
}
