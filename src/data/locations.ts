/**
 * Public directory curated from a one-time JourneyMap waypoint export.
 * Only display name, group, dimension, block coordinates and relevant
 * existing WeAB pages are retained; all farms are owned by WeKill. The raw .dat export is not committed.
 * Duplicate name/dimension/position entries are collapsed.
 */
export const locationGroups = [
  'Koncernens lokaler',
  'Farmer',
  'Sevärdheter',
  'Byar & distrikt',
  'Städer',
  'Stationer',
  'Butiker',
  'Offentliga byggnader',
  'Spelarbaser',
] as const;

export type LocationGroup = (typeof locationGroups)[number];
export type Dimension = 'overworld' | 'the_nether' | 'the_end';

export interface ServerLocation {
  id: string;
  name: string;
  group: LocationGroup;
  dimension: Dimension;
  x: number;
  y: number;
  z: number;
  relatedPage?: string;
  owner?: 'WeKill';
}

type LocationRow = readonly [
  name: string,
  group: LocationGroup,
  dimension: Dimension,
  x: number,
  y: number,
  z: number,
  relatedPage?: string,
];

// Exported waypoint metadata; no private JourneyMap settings, UUIDs or icons.
const rows: LocationRow[] = [
  ['WeLove', 'Koncernens lokaler', 'overworld', -1576, 162, -400, '/verksamheter/welove/'],
  ['WeSort', 'Koncernens lokaler', 'overworld', 178, 67, -505, '/verksamheter/wesort/'],
  ['WeSort - Colors', 'Koncernens lokaler', 'overworld', 223, 64, -851, '/verksamheter/wesort/'],
  ['WeTrade', 'Koncernens lokaler', 'overworld', 186, 69, -715, '/verksamheter/wetrade/'],
  ['Endermanfarm', 'Farmer', 'the_end', 1, 1, 241, '/verksamheter/wekill/'],
  ['Guldfarmen', 'Farmer', 'the_nether', 71, 243, -257, '/verksamheter/wekill/'],
  ['Hogling farmen', 'Farmer', 'overworld', -166, 69, -403, '/verksamheter/wekill/'],
  ['Häxfarm', 'Farmer', 'overworld', 3220, 64, -2516, '/verksamheter/wekill/'],
  ['Järnfarmen', 'Farmer', 'overworld', 9, 71, -511, '/verksamheter/wekill/'],
  ['Kullerstenfarmen', 'Farmer', 'overworld', 493, 70, -922, '/verksamheter/wekill/'],
  ['Mobgrindern', 'Farmer', 'overworld', 230, 102, -398, '/verksamheter/wekill/'],
  ['Morötter m.m. farm', 'Farmer', 'overworld', 25, 67, -612, '/verksamheter/wekill/'],
  ['Musikskivorfarmen', 'Farmer', 'overworld', 532, 105, -847, '/verksamheter/wekill/'],
  ['Prismarinfarmen', 'Farmer', 'overworld', 610, 66, -1824, '/verksamheter/wekill/'],
  ['Shulkerfarmen', 'Farmer', 'overworld', 218, 86, -223, '/verksamheter/wekill/'],
  ['Sugarcanefarmen', 'Farmer', 'overworld', 376, 69, -889, '/verksamheter/wekill/'],
  ['Witherfarm', 'Farmer', 'the_end', 0, 56, -5, '/verksamheter/wekill/'],
  ['Witherskeletonfarmen', 'Farmer', 'the_nether', -208, 200, 929, '/verksamheter/wekill/'],
  ['Amogus', 'Sevärdheter', 'overworld', 216, 79, -800],
  ['Bedrock-chunken', 'Sevärdheter', 'overworld', 136, 63, -568],
  ['Casino Ön', 'Sevärdheter', 'overworld', -826, 71, -1144, '/verksamheter/wegamble/'],
  ['Hungerspelsarenan', 'Sevärdheter', 'overworld', -756, 65, 173],
  ['Noas får-ö', 'Sevärdheter', 'overworld', 235, 70, 3201],
  ['WeLiveLaughLove Sektion 1 Avdelning B', 'Byar & distrikt', 'overworld', 62, 63, -350, '/verksamheter/welivelaughlove/'],
  ['WeLiveLaughLove Sektion 3 Avdelning A', 'Byar & distrikt', 'overworld', 893, 65, -717, '/verksamheter/welivelaughlove/'],
  ['Huvudstaden', 'Städer', 'overworld', -612, 71, -48],
  ['Sektion 1 C', 'Stationer', 'overworld', 96, 74, -486],
  ['ByggMaxx', 'Butiker', 'overworld', -663, 65, -132],
  ["McDonald's", 'Butiker', 'overworld', -646, 65, -51],
  ['Tankstationen', 'Butiker', 'overworld', -628, 65, -59],
  ['Sektion 1 Stadshus', 'Offentliga byggnader', 'overworld', 59, 79, -505, '/verksamheter/werule/'],
  ['Jespers bas', 'Spelarbaser', 'overworld', 13234, 67, 11401],
  ['Sallys bas', 'Spelarbaser', 'overworld', 290, 63, -597],
  ['Simons bas', 'Spelarbaser', 'overworld', 120, 69, -467],
  ['Simons bas', 'Spelarbaser', 'overworld', 4087, 111, 722],
];

function makeId(name: string, x: number, z: number): string {
  const slug = name.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `${slug}-${x}-${z}`;
}

export const locations: ServerLocation[] = rows.map(
  ([name, group, dimension, x, y, z, relatedPage]) => ({
    id: makeId(name, x, z),
    name,
    group,
    dimension,
    x,
    y,
    z,
    ...(relatedPage ? { relatedPage } : {}),
    ...(group === 'Farmer' ? { owner: 'WeKill' as const } : {}),
  }),
);
