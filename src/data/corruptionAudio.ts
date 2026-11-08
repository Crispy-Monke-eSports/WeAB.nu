/** Local, pre-rendered shortwave texture shared by all ARG sound channels. */
export const corruptionLoopPath = '/audio/spirit/interference-loop.ogg';

export async function loadCorruptionLoop(context: AudioContext): Promise<AudioBuffer | null> {
  try {
    const response = await fetch(corruptionLoopPath);
    if (!response.ok) return null;
    return await context.decodeAudioData(await response.arrayBuffer());
  } catch {
    return null; // Browser audio and the asset are optional; the ARG still runs.
  }
}
