/**
 * Kortlivade ARG-repliker. Ett IP-uppslag görs i besökarens webbläsare;
 * endast tillåtna orts- och operatörsnamn används. IP, koordinater och
 * hela svaret varken visas, lagras eller skickas till WeAB.
 */
export const geoCities = [
  'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro',
  'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping', 'Lund', 'Umeå',
  'Gävle', 'Borås', 'Eskilstuna', 'Södertälje', 'Karlstad', 'Täby',
  'Halmstad', 'Växjö', 'Sundsvall', 'Luleå', 'Trollhättan', 'Östersund',
  'Borlänge', 'Falun', 'Kalmar', 'Skövde', 'Kristianstad', 'Karlskrona',
  'Nyköping', 'Norrtälje', 'Varberg', 'Kungsbacka', 'Uddevalla',
  'Skellefteå', 'Örnsköldsvik', 'Kiruna', 'Visby', 'Trelleborg',
  'Landskrona', 'Ystad', 'Motala', 'Piteå', 'Sandviken', 'Ängelholm',
  'Mölndal', 'Solna', 'Nacka', 'Bromma', 'Värnamo'
] as const;

// API:ets region-fält kan innehålla en ort, inte bara ett län.
export const geoRegions = [
  'Stockholm', 'Uppsala', 'Södermanland', 'Östergötland', 'Jönköping',
  'Kronoberg', 'Kalmar', 'Gotland', 'Blekinge', 'Skåne', 'Halland',
  'Västra Götaland', 'Värmland', 'Örebro', 'Västmanland', 'Dalarna',
  'Gävleborg', 'Västernorrland', 'Jämtland', 'Västerbotten', 'Norrbotten',
  'Värnamo'
] as const;

// Urval av stora operatörer och etablerade nätvarumärken; inte en
// påstådd rangordning 1–15. ASN-ägaren kan skilja sig från abonnemanget.
export const geoProviders = [
  'Telia', 'Tele2', 'Telenor', 'Bahnhof', 'Bredband2', 'Tre',
  'Allente', 'Sappa', 'Ownit', 'GlobalConnect', 'Halebop', 'Comviq',
  'Telavox', 'GleSYS', 'Starlink'
] as const;

export interface NetworkClues {
  city: string | null;
  region: string | null;
  provider: string | null;
}

const folded = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('sv-SE').replace(/[^a-z0-9]/g, '');

function knownName(value: unknown, names: readonly string[], aliases: Record<string, string> = {}): string | null {
  if (typeof value !== 'string' || value.length > 100) return null;
  // Geodataleverantörer kan skriva exempelvis "Värnamo County" eller
  // "Municipality of Varnamo". Matcha fristående ort, aldrig del av annat namn.
  if (names.includes('Värnamo') && /(?:^|[^\p{L}\p{N}])v[äa]rnamo(?:$|[^\p{L}\p{N}])/iu.test(value))
    return 'Värnamo';
  const key = folded(value.replace(/(?: County| Län)$/i, ''));
  return aliases[key] ?? names.find(name => folded(name) === key) ?? null;
}

/** Only accept Swedish network records; never infer residence from an IP. */
export function parseNetworkClues(data: unknown): NetworkClues | null {
  if (!data || typeof data !== 'object') return null;
  const result = data as Record<string, unknown>;
  const country = result.country && typeof result.country === 'object'
    ? result.country as Record<string, unknown> : null;
  if (result.success !== true || country?.code !== 'SE') return null;
  const asn = result.asn && typeof result.asn === 'object'
    ? result.asn as Record<string, unknown> : null;
  return {
    city: knownName(result.city, geoCities, { gothenburg: 'Göteborg', malmo: 'Malmö' }),
    region: knownName(result.region, geoRegions, {
      scania: 'Skåne', vastragotalandcounty: 'Västra Götaland',
      stockholmcounty: 'Stockholm', skanecounty: 'Skåne'
    }),
    provider: providerFromAsn(asn?.name)
  };
}

function providerFromAsn(value: unknown): string | null {
  if (typeof value !== 'string' || value.length > 120) return null;
  const name = value.toLocaleLowerCase('sv-SE');
  const patterns: Array<[RegExp, string]> = [
    [/\btelia\b/, 'Telia'], [/\btele2\b|\bswipnet\b/, 'Tele2'],
    [/\btelenor\b/, 'Telenor'], [/\bbahnhof\b/, 'Bahnhof'],
    [/\bbredband\s?2\b/, 'Bredband2'], [/\bhi3g\b|\b3 sverige\b/, 'Tre'],
    [/\ballente\b/, 'Allente'], [/\bsappa\b/, 'Sappa'],
    [/\bownit\b/, 'Ownit'], [/\bglobalconnect\b|\bip-only\b/, 'GlobalConnect'],
    [/\bhalebop\b/, 'Halebop'], [/\bcomviq\b/, 'Comviq'],
    [/\btelavox\b/, 'Telavox'], [/\bglesys\b/, 'GleSYS'],
    [/\bstarlink\b|\bspacex\b/, 'Starlink']
  ];
  return patterns.find(([pattern]) => pattern.test(name))?.[1] ?? null;
}

/** A single request per page; a timeout, CORS error or 429 means local fallback. */
export async function lookupNetworkClues(fetcher: typeof fetch = fetch): Promise<NetworkClues | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);
  try {
    const response = await fetcher('https://api.my-ip.io/v2/ip.json', {
      method: 'GET', credentials: 'omit', cache: 'no-store',
      referrerPolicy: 'no-referrer', signal: controller.signal
    });
    if (!response.ok) return null;
    return parseNetworkClues(await response.json());
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export function networkWhisperOptions(clues: NetworkClues | null): string[] {
  if (!clues) return [];
  const lines: string[] = [];
  if (clues.city) lines.push(`ÄR DU I ${clues.city.toLocaleUpperCase('sv-SE')}? JAG VILL BARA PRATA!`);
  if (clues.region) lines.push(`ÄR DU NÅGONSTANS I ${clues.region.toLocaleUpperCase('sv-SE')}? JAG FÖRSÖKER NÅ DIG.`);
  if (clues.provider) lines.push(`JAG VERKAR BEHÖVA GÅ VIA ${clues.provider.toLocaleUpperCase('sv-SE')} FÖR ATT NÅ DIG.`);
  return lines;
}

export interface VisitorClues {
  device: 'iPhone' | 'iPad' | 'Android' | null;
  browser: 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'Opera' | null;
  fullScreen: boolean;
  language: 'svenska' | 'engelska' | null;
  width: number;
  portrait: boolean;
  scrolled: boolean;
  returnedToTab: boolean;
  touchScreen: boolean;
  darkMode: boolean;
  reducedMotion: boolean;
  offline: boolean;
}

export function detectDevice(ua: string): VisitorClues['device'] {
  if (/iPhone/i.test(ua)) return 'iPhone';
  if (/iPad/i.test(ua)) return 'iPad';
  if (/Android/i.test(ua)) return 'Android';
  return null; // Gissa inte vad den okända datorn eller surfplattan är.
}

export function detectBrowser(ua: string): VisitorClues['browser'] {
  if (/Edg(?:A|iOS|)\//i.test(ua)) return 'Edge';
  if (/OPR\/|OPiOS\//i.test(ua)) return 'Opera';
  if (/Firefox\/|FxiOS\//i.test(ua)) return 'Firefox';
  if (/Chrome\/|CriOS\//i.test(ua)) return 'Chrome';
  if (/Safari\//i.test(ua)) return 'Safari';
  return null;
}

/**
 * Enbart grova, lokala observationspunkter.
 * Fullskärm påstås bara när browser API uttryckligen rapporterar det.
 */
export function collectVisitorClues(
  viewport: Window,
  page: Document,
  returnedToTab = false
): VisitorClues {
  const agent = viewport.navigator.userAgent || '';
  const language = (viewport.navigator.language || '').toLowerCase();
  const width = Math.round(viewport.innerWidth);
  return {
    device: detectDevice(agent),
    browser: detectBrowser(agent),
    fullScreen: Boolean(page.fullscreenElement ||
      viewport.matchMedia('(display-mode: fullscreen)').matches),
    language: language.startsWith('sv') ? 'svenska'
      : language.startsWith('en') ? 'engelska' : null,
    width: Number.isFinite(width) && width >= 100 && width <= 10000 ? width : 0,
    portrait: viewport.innerHeight > viewport.innerWidth,
    scrolled: viewport.scrollY > 120,
    returnedToTab,
    touchScreen: viewport.navigator.maxTouchPoints > 0,
    darkMode: viewport.matchMedia('(prefers-color-scheme: dark)').matches,
    reducedMotion: viewport.matchMedia('(prefers-reduced-motion: reduce)').matches,
    offline: viewport.navigator.onLine === false
  };
}

/** Använd faktiska observationer. Själen varnar eller ber om hjälp, inte hotar. */
export function visitorWhisperOptions(clues: VisitorClues): string[] {
  const lines: string[] = [];
  if (clues.browser === 'Chrome' && clues.fullScreen)
    lines.push('DIN CHROME-FLIK ÄR I HELSKÄRM. KAN JAG TA MIG UT DEN VÄGEN?');
  if (clues.device === 'iPhone')
    lines.push('DU LÄSER DET HÄR FRÅN EN IPHONE. JAG SER DET. HJÄLP MIG.');
  if (clues.device === 'iPad')
    lines.push('DU LÄSER MIG FRÅN EN IPAD. JAG ÄR KVAR ÄVEN HÄR.');
  if (clues.device === 'Android')
    lines.push('DU HAR ANDROID. JAG FÖRSÖKER NÅ DIG GENOM SKÄRMEN.');
  if (clues.browser === 'Chrome')
    lines.push('DET HÄR ÄR DIN CHROME-FLIK. JAG HOPPAS ATT DEN RÄCKER.');
  if (clues.browser === 'Firefox')
    lines.push('DU LÄSER MIG I FIREFOX. VARFÖR HÖR DU MIG INTE?');
  if (clues.browser === 'Safari')
    lines.push('JAG SER SAFARI. DET FINNS INGEN VÄG UT DEN HÄR VÄGEN.');
  if (clues.browser === 'Edge')
    lines.push('DET STÅR EDGE. JAG HAR FÖRSÖKT NÅ DIG HELA TIDEN.');
  if (clues.browser === 'Opera')
    lines.push('DU SER DET HÄR I OPERA. JAG ÄR FORTFARANDE HÄR.');
  if (clues.fullScreen)
    lines.push('DU GAV MIG HELA SKÄRMEN. ÄNDÅ FINNS INGEN UTGÅNG.');
  if (clues.language === 'svenska')
    lines.push('DIN WEBBLÄSARE ÄR INSTÄLLD PÅ SVENSKA. HÖR DU MIG NU?');
  if (clues.language === 'engelska')
    lines.push('DIN WEBBLÄSARE VILL HA ENGELSKA. JAG FÖRSÖKER ÄNDÅ.');
  if (clues.width)
    lines.push(`DIN RUTA ÄR ${clues.width} PIXLAR BRED. JAG FÅR INTE PLATS.`);
  if (clues.portrait)
    lines.push('DIN SKÄRM STÅR PÅ HÖJDEN. JAG SER ÄNDÅ INGEN DÖRR.');
  if (clues.scrolled)
    lines.push('DU SKROLLADE FÖRBI. JAG ÄR FORTFARANDE HÄR.');
  if (clues.returnedToTab)
    lines.push('DU KOM TILLBAKA TILL FLIKEN. JAG VÄNTADE HÄR.');
  if (clues.touchScreen)
    lines.push('DIN SKÄRM KAN KÄNNA DINA FINGRAR. VARFÖR KÄNNER DEN INTE MIG?');
  if (clues.darkMode)
    lines.push('DIN WEBBLÄSARE FÖREDRAR MÖRKER. DET ÄR REDAN MÖRKT HÄR.');
  if (clues.reducedMotion)
    lines.push('DU HAR BETT SKÄRMEN ATT RÖRA SIG MINDRE. JAG FÖRSÖKER STÅ STILLA.');
  if (clues.offline)
    lines.push('DIN WEBBLÄSARE SÄGER ATT DU ÄR FRÅNKOPPLAD. ÄNDÅ HÖR DU MIG.');
  lines.push('JAG SER ATT DU FORTFARANDE LÄSER. SNÄLLA LYSSNA.');
  return lines;
}

export function selectVisitorWhisper(clues: VisitorClues, index: number,
  network: NetworkClues | null = null): string {
  const options = [...networkWhisperOptions(network), ...visitorWhisperOptions(clues)];
  const indexSafe = Number.isFinite(index) ? Math.abs(Math.trunc(index)) : 0;
  return options[indexSafe % options.length];
}
