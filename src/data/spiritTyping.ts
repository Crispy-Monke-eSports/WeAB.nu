/**
 * Tidsstyrd, återupptagbar rendering av själens korta karantänrepliker.
 * Ingen ny lore skickas till besökarens webbläsare.
 */
export const spiritTyping = {
  minMs: 760,
  perCharacterMs: 94,
  maxMs: 5_400,
  nextBeatMarginMs: 170,
  frameMs: 46
} as const;

export function spiritTypingDurationMs(text: string, untilNextBeatMs: number): number {
  const requested = Math.max(spiritTyping.minMs,
    Math.min(spiritTyping.maxMs, [...text].length * spiritTyping.perCharacterMs));
  const available = Math.max(330, untilNextBeatMs - spiritTyping.nextBeatMarginMs);
  return Math.min(requested, available);
}

/** Samma cookie/tidslinje => samma bokstäver över alla flikar. */
export function revealSpiritText(text: string, elapsedMs: number, durationMs: number): string {
  if (elapsedMs <= 0) return '';
  if (!Number.isFinite(durationMs) || durationMs <= 0 || elapsedMs >= durationMs) return text;
  const letters = [...text];
  const count = Math.max(0, Math.min(letters.length,
    Math.floor(letters.length * elapsedMs / durationMs)));
  return letters.slice(0, count).join('');
}
