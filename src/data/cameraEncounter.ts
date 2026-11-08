/**
 * Tillfällig ARG-kamerasekvens, endast under femminuterskarantänen.
 * Kamerans MediaStream används ENBART för att hålla ett lokalt videospår
 * öppet tills enbart WeAB:s systemtext återstår (så att en fysisk
 * kameraindikator kan tändas).
 * Ingen videodata läses, ritas, sparas, analyseras eller skickas.
 */
export const cameraEncounter = {
  request: 'låt mig få se vem jag pratar med',
  allowed: 'där sitter du ja. är du nöjd nu? har du fått som du vill?',
  denied: 'NEJ. STÄNG INTE UTE MIG IGEN.',
  unavailable: 'inte ens den här vägen. varför når jag aldrig fram?',
  ignored: '...du svarar inte. de stänger mig igen.',
  maxActiveMs: 60_000,
  responseMs: 5_600,
  pendingMaxMs: 20_000
} as const;
