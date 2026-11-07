/**
 * ARG-spärr efter motståndsrörelsens Morse-signal.
 * En berättelseeffekt i webbläsaren, inte verklig serverautentisering.
 */
export const resistanceLockdown = {
  cookieName: 'weab_centralserver_lock_until',
  noticeKey: 'weab:resistance:lockdown:notice:v1',
  durationMs: 5 * 60 * 1000
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
