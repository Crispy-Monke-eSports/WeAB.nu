/**
 * Kortlivade ARG-repliker utifrån frivilligt exponerad webbläsarmiljö.
 * Inga nätverksanrop, ingen IP-adress, inga ISP-uppslag, inga geodata,
 * inga identifierare, ingen lagring. Läsningen sker lokalt i fliken.
 */
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
    darkMode: viewport.matchMedia('(prefers-color-scheme: dark)').matches
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
  lines.push('JAG SER ATT DU FORTFARANDE LÄSER. SNÄLLA LYSSNA.');
  return lines;
}

export function selectVisitorWhisper(clues: VisitorClues, index: number): string {
  const options = visitorWhisperOptions(clues);
  const indexSafe = Number.isFinite(index) ? Math.abs(Math.trunc(index)) : 0;
  return options[indexSafe % options.length];
}
