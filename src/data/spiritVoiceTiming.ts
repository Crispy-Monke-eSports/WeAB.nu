import voice from './spiritVoice.json' with { type: 'json' };

export type VoiceProfile = 'weak' | 'broken' | 'desperate';
export type VoiceEntry = { file: string; parts?: string[];
  durationMs: number; words: number[][]; profile: VoiceProfile };
export const spiritVoice = voice as Record<string, VoiceEntry>;

/** The scheduled ARG beat remains authoritative; only speech inside it is compressed. */
export function speechTiming(text: string, availableMs: number, library = spiritVoice) {
  const entry = library[text];
  if (!entry || !entry.words.length || availableMs <= 0) return null;
  const durationMs = Math.min(entry.durationMs, Math.max(1, availableMs));
  return { entry, durationMs, rate: entry.durationMs / durationMs };
}

/** Each word is written within its measured recorded interval; silence holds the preceding prefix. */
export function revealSpokenText(text: string, ageMs: number, durationMs: number,
  entry: VoiceEntry): string {
  if (ageMs <= 0) return '';
  if (ageMs >= durationMs) return text;
  const position = ageMs * entry.durationMs / durationMs;
  let end = 0;
  for (const [from, to, start, finish] of entry.words) {
    if (position < start) break;
    end = position >= finish ? to : from + Math.floor((to - from) *
      (position - start) / Math.max(1, finish - start));
    if (position < finish) break;
  }
  return text.slice(0, end);
}
