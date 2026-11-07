/**
 * Visuellt intrång i WeAB.nu. Signalens innehåll är fiktion och hör endast
 * till motståndsrörelsens ARG, aldrig koncernens egna redaktionella texter.
 *
 * URL:en pekar på den kända tunneln i Sektion 1, Avdelning B. Adressen får
 * avsiktligt inte en egen sida: GitHub Pages visar då webbplatsens 404-sida.
 */
export const resistanceSignal = {
  targetPath: '/31-66--351/',
  sessionKey: 'weab:resistance:session:v1',
  lastShownKey: 'weab:resistance:last-shown:v1',
  cooldownMs: 15 * 60 * 1000,
  corruptionMs: 1500,
  returnMs: 450,
  messages: [
    { text: 'HÖR DU OSS?', durationMs: 1150 },
    { text: 'VI ÄR FORTFARANDE HÄR.', durationMs: 1350 },
    { text: 'HITTA OSS.', durationMs: 1650 }
  ]
} as const;

export interface SignalSchedule {
  activeMs: number;
  minorAtMs: number;
  breachAtMs: number;
  minorShown: boolean;
}

/** Ca 80 % av aktiva besök får intrånget inom 1:40–3:30; övriga senare. */
export function createSignalSchedule(random: () => number = Math.random): SignalSchedule {
  const early = random() < 0.8;
  return {
    activeMs: 0,
    minorAtMs: Math.floor(30_000 + random() * 40_000),
    breachAtMs: Math.floor((early ? 100_000 : 225_000) + random() * (early ? 110_000 : 95_000)),
    minorShown: false
  };
}

export function isSignalSchedule(value: unknown): value is SignalSchedule {
  if (!value || typeof value !== 'object') return false;
  const state = value as Partial<SignalSchedule>;
  return typeof state.activeMs === 'number' && Number.isFinite(state.activeMs) &&
    state.activeMs >= 0 && typeof state.minorAtMs === 'number' &&
    Number.isFinite(state.minorAtMs) && state.minorAtMs >= 0 &&
    typeof state.breachAtMs === 'number' && Number.isFinite(state.breachAtMs) &&
    state.breachAtMs > state.minorAtMs &&
    typeof state.minorShown === 'boolean';
}

export function isSignalOnCooldown(now: number, lastShown: number | null): boolean {
  return lastShown !== null && Number.isFinite(lastShown) &&
    lastShown > 0 && now >= lastShown &&
    now - lastShown < resistanceSignal.cooldownMs;
}
