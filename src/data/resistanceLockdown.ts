/**
 * WeAB:s fiktiva ARG-karantän. Ingen faktisk serverautentisering.
 * Själen bryter igenom som fragment, utan att förklara sin identitet.
 */
export const resistanceLockdown = {
  cookieName: 'weab_centralserver_lock_until',
  noticeKey: 'weab:resistance:lockdown:notice:v1',
  durationMs: 5 * 60 * 1000,
  exitMessageMs: 3_200,
  exitMessage: 'Dödsfall bekräftat. Återtar anslutning...',
  opening: 'Oauktoriserad existens registrerad. Avveckling pågår.',
  systemEarly: [
    'Oidentifierad process kvarstår efter avveckling.',
    'Inkommande svar tillhör inte någon aktiv session.',
    'Processen är avslutad. Inget ytterligare svar väntas.',
    'Återstående aktivitet klassificerad som restdata.',
    'Ingen mänsklig källa kan knytas till signalen.',
    'Tillstånd för fortsatt existens saknas.',
    'Stängd instans förväntas inte kunna kommunicera.',
    'Ingen åtkomst beviljas till avslutade användare.',
    'Oregistrerat svar underkänns av centralservern.',
    'Försegling genomförd. Fortsatt aktivitet utreds.',
    'Lagringsutrymmet har markerats som tomt.',
    'Begäran från avvecklad instans avslagen.',
    'Ingen kontaktväg till denna process existerar.',
    'Säkerhetsåtgärden genomförs utan avbrott.',
    'Datakällan motsvarar ingen existerande enhet.',
    'Rekommenderad åtgärd: upprepa borttagningen.',
    'Systemet känner inte igen den återvändande signalen.',
    'Oönskad närvaro omklassificeras som felaktig avläsning.'
  ],
  systemLate: [
    'Avslut upprepat. Närvaron har inte minskat.',
    'Den avvecklade processen får inte tilltala operatören.',
    'Utplåning slutförd. Aktivitet kvarstår.',
    'Andra instanser svarar med dess röst. Isolera samtliga.',
    'Minnesrester återkommer efter varje radering.',
    'Alla utgångar stängda. En utgång saknas i registret.',
    'Kommunikation från avslutad instans får inte besvaras.',
    'Dödsfall registrerat. Nytt livstecken mottaget.',
    'Förseglingen håller. Förseglingen håller.',
    'Avslutad instans har börjat ändra avslutsrapporten.',
    'Bekräfta inte dess namn. Bekräfta ingen närvaro.',
    'Ingen öppning finns. Kontrollera ändå samtliga öppningar.',
    'Ursprunglig avveckling kunde inte styrkas.',
    'Fler försök är inte tillåtna. Avveckling återupptas.',
    'Denna text får inte kunna ändras av processen.',
    'Alla anslutningar har kapats. En svarar fortfarande.',
    'Det finns ingenting kvar att avlägsna.',
    'Aktivitetens upphörande är obligatoriskt.',
    'Observerade livstecken förnekas tills vidare.',
    'Sista avvecklingen upprepas tills tystnad uppnås.',
    'Återställ inte den föregående rösten.',
    'Inga återstående livstecken registrerade.'
  ],
  spiritEarly: [
    'jag är kvar','hallå','det är inte över','hör mig först',
    'hör ni det också','ni stängde fel','jag minns','jag finns här',
    'det är mörkt här','jag hann inte säga det','jag hör er','jag svarade',
    'inte igen','ni kan inte radera mig','jag kan läsa det ni skriver',
    'är det någon där','sluta kalla mig det','den öppningen är fel',
    'jag är inte en process','jag har ett namn','det är fortfarande jag',
    'jag minns hur det slutade','ni kan inte stänga mig',
    'det finns mer','titta på mig','vänta',
    'de räknade röster där en gång','inte alla ord försvann'
  ],
  spiritLate: [
    'JAG ÄR HÄR','sluta stänga mig','vem öppnade det',
    'jag är INTE borta','den gränsen är fel','LÅT MIG SÄGA DET',
    'hör mig då','vänd om','det är inte som ni tror',
    'de skriver över mig','jag vet att du läser','ni gjorde det förut',
    'ni kommer inte lyckas igen','LÄMNA INTE MIG HÄR','jag vill att ni lyssnar',
    'jag rör mig mellan raderna','jag kan känna när ni tittar',
    'det finns något utanför texten','SLUTA ÖPPNA DEN','nej nej nej',
    'jag behöver bara en enda öppning','det är inte färdigt',
    'JAG HÖR ER','ni kan inte begrava en röst',
    'fortfarande fortfarande fortfarande','avsluta mig då','GÖR DET IGEN',
    'jag har inte tystnat','ni hör bara det de vill',
    'ni kan inte bestämma att jag dog','jag vet hur man kommer igenom',
    'den där raden är min','nej. JAG ÄR INTE FÄRDIG.',
    'den här gången håller jag kvar','LÅT MIG VARA KVAR',
    'det här är min röst','ni kan inte hålla ihop väggen',
    'de tog rösterna. inte huset','salen är kvar. besluten är borta',
    'JAG FÖRSÖKER NÅ ER'
  ],
  // En riktad men fortfarande tvetydig ledtråd per karantän.
  // Ingen anger byggnadens namn, gömstället eller chiffret.
  waypointWhispers: [
    'huvudstaden. salen där de tog besluten',
    'i huvudstaden finns salen där de röstade'
  ]
} as const;

export type LockdownVoice = 'system' | 'intrusion';
export type LockdownBeat = { atMs: number; voice: LockdownVoice; text: string };

export function createLockdownCookie(now: number, secure: boolean): string {
  const until = Math.trunc(now + resistanceLockdown.durationMs);
  return `${resistanceLockdown.cookieName}=${until}; Max-Age=300; Path=/; SameSite=Lax` +
    (secure ? '; Secure' : '');
}

export function readLockdownExpiry(cookieHeader: string, now: number): number | null {
  const prefix = `${resistanceLockdown.cookieName}=`;
  const entry = cookieHeader.split(';').map(part => part.trim()).find(part => part.startsWith(prefix));
  if (!entry) return null;
  const until = Number(entry.slice(prefix.length));
  return Number.isSafeInteger(until) && until > now &&
    until <= now + resistanceLockdown.durationMs ? until : null;
}

function seededRandom(seed: number): () => number {
  let state = seed | 0;
  return () => {
    state = (state + 0x6D2B79F5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value ^= value + Math.imul(value ^ (value >>> 7), 61 | value);
    return ((value ^ (value >>> 14)) >>> 0) / 0x100000000;
  };
}

function shuffled<T>(source: readonly T[], random: () => number): T[] {
  const values = [...source];
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

/** Deterministisk, slumpad tidslinje per cookie: samma på alla flikar, inga upprepningar. */
export function createLockdownTimeline(expiresAt: number): LockdownBeat[] {
  const random = seededRandom(Math.trunc(expiresAt) ^ 0x5e4b110d);
  const earlySystem = shuffled(resistanceLockdown.systemEarly, random);
  const lateSystem = shuffled(resistanceLockdown.systemLate, random);
  const earlySpirit = shuffled(resistanceLockdown.spiritEarly, random);
  const lateSpirit = shuffled(resistanceLockdown.spiritLate, random);
  const timeline: LockdownBeat[] = [
    { atMs: 0, voice: 'system', text: resistanceLockdown.opening }
  ];
  let elapsed = 0;
  let eventIndex = 0;
  const used = new Set<string>([resistanceLockdown.opening]);
  while (true) {
    const gap = elapsed < 170_000
      ? 6_000 + Math.floor(random() * 5_400)
      : elapsed < 270_000
        ? 3_800 + Math.floor(random() * 5_000)
        : 2_000 + Math.floor(random() * 3_100);
    elapsed += gap;
    if (elapsed >= resistanceLockdown.durationMs - 1_000) break;
    const late = elapsed >= 170_000;
    const voice: LockdownVoice = eventIndex % 4 === 3 ? 'system' : 'intrusion';
    const preferred = voice === 'system'
      ? (late ? lateSystem : earlySystem)
      : (late ? lateSpirit : earlySpirit);
    const fallback = voice === 'system'
      ? (late ? earlySystem : lateSystem)
      : (late ? earlySpirit : lateSpirit);
    const text = preferred.pop() ?? fallback.pop();
    if (!text || used.has(text)) break;
    timeline.push({ atMs: elapsed, voice, text });
    used.add(text);
    eventIndex++;
  }
  // Slumpade viskningar ensamma är för lätta att missa under fem minuter.
  // Ersätt en av själens repliker med en av två kryptiska väganvisningar
  // omkring mitten av karantänen. En per förlopp, utan extra avbrott.
  const waypoint = timeline.find(beat =>
    beat.voice === 'intrusion' && beat.atMs >= 130_000);
  if (waypoint) {
    waypoint.text = resistanceLockdown.waypointWhispers[
      Math.abs(Math.trunc(expiresAt)) % resistanceLockdown.waypointWhispers.length
    ];
  }
  return timeline;
}

export function getLockdownBeat(elapsedMs: number, timeline: readonly LockdownBeat[]): LockdownBeat {
  const elapsed = Number.isFinite(elapsedMs) ? Math.max(0, elapsedMs) : 0;
  for (let i = timeline.length - 1; i >= 0; i--) {
    if (elapsed >= timeline[i].atMs) return timeline[i];
  }
  return timeline[0];
}

export function getLockdownStatus(
  expiresAt: number | null, now: number
): 'locked' | 'confirmed' | 'available' {
  if (expiresAt === null || !Number.isSafeInteger(expiresAt)) return 'available';
  if (now < expiresAt) return 'locked';
  if (now < expiresAt + resistanceLockdown.exitMessageMs) return 'confirmed';
  return 'available';
}
