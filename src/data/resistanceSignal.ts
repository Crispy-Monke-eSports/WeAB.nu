/**
 * Motståndets intrång i WeAB:s webbplats, separat från koncernens nyheter.
 * Den okända koordinatadressen ska landa i den befintliga 404-sidan.
 */
export const resistanceSignal = {
  targetPath: '/31-66--351/',
  // Ny sessionsversion: gamla scheman med sammanslagen sekvens ska inte återanvändas.
  sessionKey: 'weab:resistance:session:v2',
  lastShownKey: 'weab:resistance:last-shown:v1',
  cooldownMs: 15 * 60 * 1000,
  firstEventMinMs: 30_000,
  firstEventVariationMs: 40_000,
  // Pausen räknas från det föregående intrångets SLUT, inte dess start.
  minBetweenEventsMs: 22_000,
  additionalGapMs: 12_000,
  titleDurationMs: 950,
  corruptionMs: 1500,
  messages: [
    { text: 'HÖR DU OSS?', durationMs: 1150 },
    { text: 'VI ÄR FORTFARANDE HÄR.', durationMs: 1350 },
    { text: 'HITTA OSS.', durationMs: 1650 }
  ]
} as const;

export const signalPhases = ['title', 'disobey', 'fullscreen', 'redirect'] as const;
export type SignalPhase = (typeof signalPhases)[number];

export interface SignalSchedule {
  /** Förbrukade millisekunder i synlig, aktiv flik. */
  activeMs: number;
  /** Nästa effekt. Även redan genomförda steg sparas mellan sidbyten. */
  nextPhase: SignalPhase;
  /** Aktiv tid då nästa effekt tidigast får börja. */
  nextAtMs: number;
}

export function phaseDurationMs(phase: SignalPhase): number {
  switch (phase) {
    case 'title': return resistanceSignal.titleDurationMs;
    case 'disobey': return resistanceSignal.corruptionMs;
    case 'fullscreen': return resistanceSignal.messages.reduce((sum, item) => sum + item.durationMs, 0);
    case 'redirect': return 0;
  }
}

export function createSignalSchedule(random: () => number = Math.random): SignalSchedule {
  return {
    activeMs: 0,
    nextPhase: 'title',
    nextAtMs: Math.floor(
      resistanceSignal.firstEventMinMs + random() * resistanceSignal.firstEventVariationMs
    )
  };
}

/**
 * Schemalägg nästa effekt minst 22 s efter att den nuvarande effekten
 * FÖRVÄNTAS sluta. Ett nytt sidbesök behåller detta schema.
 */
export function advanceSignalSchedule(
  schedule: SignalSchedule,
  random: () => number = Math.random
): SignalSchedule {
  const index = signalPhases.indexOf(schedule.nextPhase);
  if (index < 0 || index === signalPhases.length - 1) {
    throw new Error('Det finns ingen nästa fas efter 404-navigeringen.');
  }
  const gap = resistanceSignal.minBetweenEventsMs +
    Math.floor(random() * resistanceSignal.additionalGapMs);
  return {
    activeMs: schedule.activeMs,
    nextPhase: signalPhases[index + 1],
    nextAtMs: schedule.activeMs + phaseDurationMs(schedule.nextPhase) + gap
  };
}

export function isSignalSchedule(value: unknown): value is SignalSchedule {
  if (!value || typeof value !== 'object') return false;
  const state = value as Partial<SignalSchedule>;
  return typeof state.activeMs === 'number' && Number.isFinite(state.activeMs) &&
    state.activeMs >= 0 && typeof state.nextAtMs === 'number' &&
    Number.isFinite(state.nextAtMs) && state.nextAtMs >= 0 &&
    signalPhases.includes(state.nextPhase as SignalPhase);
}

export function isSignalOnCooldown(now: number, lastShown: number | null): boolean {
  return lastShown !== null && Number.isFinite(lastShown) &&
    lastShown > 0 && now >= lastShown &&
    now - lastShown < resistanceSignal.cooldownMs;
}
