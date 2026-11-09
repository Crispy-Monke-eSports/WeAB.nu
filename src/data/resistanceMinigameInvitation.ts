/**
 * Själen håller kvar besökaren i ett RÄDDA DOM-läge fram till ett aktivt klick.
 * Cookie används eftersom läget måste överleva navigation, omladdning och nya flikar.
 */
export const minigameInvitationCookieName = 'weab_save_call_v1';

export function hasMinigameInvitationCookie(cookies: string): boolean {
  return cookies.split(';').some(part =>
    part.trim() === minigameInvitationCookieName + '=1');
}

export function createMinigameInvitationCookie(secure = false): string {
  return minigameInvitationCookieName +
    '=1; Path=/; Max-Age=31536000; SameSite=Lax' + (secure ? '; Secure' : '');
}

export function clearMinigameInvitationCookie(secure = false): string {
  return minigameInvitationCookieName +
    '=; Path=/; Max-Age=0; SameSite=Lax' + (secure ? '; Secure' : '');
}
