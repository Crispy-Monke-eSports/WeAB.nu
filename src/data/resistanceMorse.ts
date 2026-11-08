/**
 * Den fångade rösten sänder själv en avkodningsbar Morse-signal.
 * Det här är inte ett officiellt WeAB-utskick, och avsändaren avslöjas
 * aldrig för den vanliga besökaren.
 * Morse använder internationellt alfabet utan Å/Ä/Ö: SOK = SÖK, DAR = DÄR.
 * Ingen exakt koordinat till vraket, röstsiffra eller okänt datum anges.
 */
export const resistanceMorse = {
  message: 'SOK VRAKET. DAR FINNS SVAR OM 2045.',
  unitMs: 95
} as const;

const alphabet: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.',
  G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..',
  M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.',
  S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..', 0: '-----', 1: '.----', 2: '..---',
  3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...',
  8: '---..', 9: '----.', '.': '.-.-.-'
};

export interface MorseMark {
  atMs: number;
  durationMs: number;
  symbol: '.' | '-';
}

/** Internationell Morse: 1/3 enheter per signal, 1 mellan signaler,
 * 3 mellan bokstäver, 7 mellan ord. Allt är reproducerbart/testbart. */
export function morseTimeline(
  message: string = resistanceMorse.message,
  unitMs: number = resistanceMorse.unitMs
): MorseMark[] {
  if (!Number.isFinite(unitMs) || unitMs <= 0) throw new Error('Ogiltig Morse-enhet');
  const words = message.trim().toUpperCase().split(/\s+/);
  const marks: MorseMark[] = [];
  let elapsed = 0;
  words.forEach((word, wordIndex) => {
    if (wordIndex) elapsed += 7 * unitMs;
    [...word].forEach((letter, letterIndex) => {
      if (letterIndex) elapsed += 3 * unitMs;
      const code = alphabet[letter];
      if (!code) throw new Error('Okänt Morse-tecken: ' + letter);
      [...code].forEach((symbol, index) => {
        if (index) elapsed += unitMs;
        const durationMs = symbol === '.' ? unitMs : 3 * unitMs;
        marks.push({ atMs: elapsed, durationMs, symbol: symbol as '.' | '-' });
        elapsed += durationMs;
      });
    });
  });
  return marks;
}

/** Synkronisera färginverteringen med exakt samma prickar och streck som ljudet. */
export function isMorseMarkActive(
  marks: readonly MorseMark[],
  elapsedMs: number
): boolean {
  if (!Number.isFinite(elapsedMs) || elapsedMs < 0) return false;
  // Märken är tidsordnade och överlappar inte.
  for (const mark of marks) {
    if (elapsedMs < mark.atMs) return false;
    if (elapsedMs < mark.atMs + mark.durationMs) return true;
  }
  return false;
}

export function morseDurationMs(marks: readonly MorseMark[]): number {
  const last = marks.at(-1);
  return last ? last.atMs + last.durationMs : 0;
}

