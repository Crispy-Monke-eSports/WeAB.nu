// Originalmått för bilder i public/images/. HTML-bilder får då rätt proportioner
// före inläsning även om Astro inte optimerar filer från public/.
const sizes: Record<string, [number, number]> = Object.fromEntries(
  ([
    [1440, 810, 'bedrock-hole-exterior bedrock-hole-interior huvudstaden-overview huvudstadens-arena-exterior huvudstadens-arena-interior huvudstadens-arena-laktare section-1-overview wekill-enderman-farm wekill-gold-farm wekill-iron-farm wekill-mobgrinder wekill-shulker-farm wekill-slime-farm wekill-sugarcane-farm wekill-witch-farm wekill-wither-farm welivelaughlove-section-1-b-overview welivelaughlove-section-3-a-overview werule-riksdagshuset werule-sektion-1-stadshus wetravel-huvudstaden-centralstation wetravel-sektion-1-centralstation'],
    [1800, 1013, 'construction-coast weab-cyan-building webox-terminal wekill-farms wekill-headquarters wesort-exterior wesort-interior wetravel-station'],
    [1600, 900, 'welivelaughlove-compound welivelaughlove-village'],
    [1280, 720, 'welove-breeder welove-headquarters welove-villager wetrade-exterior wetrade-hall wetrade-interior'],
    [992, 739, 'wesort-sign-original'],
  ] as [number, number, string][]).flatMap(([width, height, names]) =>
    names.split(' ').map(name => [`/images/${name}.webp`, [width, height]]))
);

export function imageDimensions(path: string) {
  const size = sizes[path];
  if (!size) throw new Error(`Saknar originalmått för bild: ${path}`);
  return { width: size[0], height: size[1] };
}
