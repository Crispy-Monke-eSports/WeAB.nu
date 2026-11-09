/**
 * Kryptiska ARG-intrång från en och samma fångade röst.
 * Spelarna kan misstolka dem som motståndets egna försök.
 * Alla händelser slumpas utan upprepningar.
 * Morsekoden kan komma först, men är alltid sist när den väl inträffar.
 */
export const resistanceSignal = {
  targetPath: '/31-66--351/',
  sessionKey: 'weab:resistance:session:v6',
  firstEventMinMs: 30_000,
  firstEventVariationMs: 40_000,
  minBetweenEventsMs: 22_000,
  additionalGapMs: 12_000,
  titleDurationMs: 950, // Titel/rubrik återställs INTE när fasen är slut.
  eyesDurationMs: 3_300,
  personalDurationMs: 3_000,
  minigameChance: .30,
  corruptionMs: 1500,
  messages: [
    { text: 'Jag ser det varje dag', durationMs: 1600, profile: 'broken' },
    { text: 'Jag ser det varje dag', durationMs: 1600, profile: 'broken' },
    { text: 'Hjälp mig', durationMs: 1100, profile: 'broken' },
    { text: 'Lidandet är för stort', durationMs: 1300, profile: 'desperate' },
    { text: 'De var 7', durationMs: 750, profile: 'broken' },
    { text: '6', durationMs: 450, profile: 'broken' },
    { text: '5', durationMs: 450, profile: 'broken' },
    { text: '4', durationMs: 450, profile: 'broken' },
    { text: '3', durationMs: 450, profile: 'broken' },
    { text: '2', durationMs: 450, profile: 'broken' },
    { text: '1', durationMs: 450, profile: 'broken' },
    { text: 'Rapport skriven.', durationMs: 1250, profile: 'broken' },
    { text: 'Klart slut', durationMs: 1150, profile: 'desperate' }
  ]
} as const;

/** Koncernens faktiska startsidestext bryter igenom under minispelets slut. */
export const minigameFailureWebsiteLine = 'WeKill sköter produktionen, WeSort fördelar resurserna och WeBox tar hand om lagret. WeTravel binder ihop anläggningarna. Övriga koncernbolag ser till att även arbete, handel och offentliga byggnader ingår i samma ekonomi.';

/** Ersätter endast whisper när den fasen faktiskt nås före Morse. */
export function chooseMinigame(random: () => number = Math.random): boolean {
  const roll = random();
  return Number.isFinite(roll) && roll >= 0 && roll < resistanceSignal.minigameChance;
}

export const signalPhases = ['title', 'disobey', 'fullscreen', 'eyes', 'whisper', 'redirect', 'morse'] as const;
export type SignalPhase = (typeof signalPhases)[number];
export type SignalTarget = 'game' | 'quarantine' | null;

export function nextSignalTarget(last: 'game' | 'quarantine' | null): SignalTarget {
  return last === 'game' ? 'quarantine' : last === 'quarantine' ? 'game' : null;
}

export interface SignalSchedule {
  /** Förbrukade millisekunder i en synlig flik. */
  activeMs: number;
  /** Nästa effekt står först; Morse står alltid sist. */
  queue: SignalPhase[];
  /** Aktiv tid då nästa effekt tidigast får starta. */
  nextAtMs: number;
  /** Bunden till historiken när ordningen skapas och överlever en 404-omdirigering. */
  target: SignalTarget;
}

function sample(random: () => number): number {
  const value = random();
  return Number.isFinite(value) ? Math.min(0.999999999, Math.max(0, value)) : 0;
}

/**
 * Blanda de sju effekterna med Fisher–Yates, ta alla fram till och med Morse.
 * Morse kan komma först och stänger alltid kedjan.
 * Koordinat-404 kan inträffa innan Morse, men är inte obligatorisk.
 */
export function createSignalOrder(
  random: () => number = Math.random, target: SignalTarget = null
): SignalPhase[] {
  const phases: SignalPhase[] = [...signalPhases];
  for (let i = phases.length - 1; i > 0; i--) {
    const j = Math.floor(sample(random) * (i + 1));
    [phases[i], phases[j]] = [phases[j], phases[i]];
  }
  if (target === 'game' && phases.indexOf('whisper') > phases.indexOf('morse')) {
    // Efter karantän måste spelinbjudan hinnas före terminal Morse, men
    // övriga störningar behåller sin slumpade inbördes ordning.
    phases.splice(phases.indexOf('whisper'), 1);
    phases.splice(phases.indexOf('morse'), 0, 'whisper');
  }
  return phases.slice(0, phases.indexOf('morse') + 1);
}

export function createSignalSchedule(
  random: () => number = Math.random, target: SignalTarget = null
): SignalSchedule {
  return {
    activeMs: 0,
    queue: createSignalOrder(random, target),
    target,
    nextAtMs: Math.floor(
      resistanceSignal.firstEventMinMs + sample(random) * resistanceSignal.firstEventVariationMs
    )
  };
}

export function phaseDurationMs(phase: SignalPhase): number {
  switch (phase) {
    case 'title': return resistanceSignal.titleDurationMs;
    case 'disobey': return resistanceSignal.corruptionMs;
    case 'fullscreen': return resistanceSignal.messages.reduce((sum, m) => sum + m.durationMs, 0);
    case 'eyes': return resistanceSignal.eyesDurationMs;
    case 'whisper': return resistanceSignal.personalDurationMs;
    case 'redirect': return 0;
    case 'morse': return 0; // Inget följer efter Morse.
  }
}

export function advanceSignalSchedule(
  schedule: SignalSchedule,
  random: () => number = Math.random
): SignalSchedule {
  const [current, ...remaining] = schedule.queue;
  if (!current || current === 'morse' || remaining.length === 0) {
    throw new Error('Ingen nästa fas efter Morse-signalen.');
  }
  const gap = resistanceSignal.minBetweenEventsMs +
    Math.floor(sample(random) * resistanceSignal.additionalGapMs);
  return {
    activeMs: schedule.activeMs,
    queue: remaining,
    target: schedule.target,
    nextAtMs: schedule.activeMs + phaseDurationMs(current) + gap
  };
}

export function isSignalSchedule(value: unknown): value is SignalSchedule {
  if (!value || typeof value !== 'object') return false;
  const state = value as Partial<SignalSchedule>;
  if (typeof state.activeMs !== 'number' || !Number.isFinite(state.activeMs) ||
      state.activeMs < 0 || typeof state.nextAtMs !== 'number' ||
      !Number.isFinite(state.nextAtMs) || state.nextAtMs < 0 ||
      !Array.isArray(state.queue)) return false;
  const queue: unknown[] = state.queue;
  return queue.length >= 1 && queue.length <= signalPhases.length &&
    (state.target === null || state.target === 'game' || state.target === 'quarantine') &&
    queue.at(-1) === 'morse' && new Set(queue).size === queue.length &&
    queue.every(phase => signalPhases.includes(phase as SignalPhase));
}
