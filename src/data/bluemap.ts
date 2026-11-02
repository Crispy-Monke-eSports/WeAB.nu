import type { Dimension, ServerLocation } from './locations';

/**
 * Conventional BlueMap map IDs. They are NOT discovered from karta.weab.nu:
 * check BlueMap's maps/*.conf before deployment, particularly for custom worlds.
 */
export const BLUE_MAP_ROOT = 'https://karta.weab.nu/';
export const blueMapIds: Record<Dimension, string> = {
  overworld: 'world',
  the_nether: 'world_nether',
  the_end: 'world_the_end',
};

export type BlueMapView = 'perspective' | 'flat';
export type MapPosition = Pick<ServerLocation, 'dimension' | 'x' | 'y' | 'z'>;

export function blueMapUrl(place?: MapPosition, view: BlueMapView = 'perspective'): string {
  if (!place) return BLUE_MAP_ROOT;
  const mapId = blueMapIds[place.dimension];
  if (!/^[a-zA-Z0-9_-]+$/.test(mapId)) throw new Error('Ogiltigt BlueMap map-ID');
  const coords = [place.x, place.y, place.z];
  if (coords.some(value => !Number.isFinite(value))) throw new Error('Ogiltiga koordinater');
  const orientation = view === 'flat' ? '0:0:0:1:flat' : '0.1:0.19:0:0:perspective';
  return `${BLUE_MAP_ROOT}#${mapId}:${coords.join(':')}:650:${orientation}`;
}

export function explorerUrl(id: string): string {
  return `/karta/?plats=${encodeURIComponent(id)}`;
}
