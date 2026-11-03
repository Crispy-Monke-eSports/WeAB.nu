import type { ImageMetadata } from 'astro';

// Publicerade bilder i src/assets/images/ optimeras av Astro vid sidbygget.
// Ett fåtal original finns också i public/images/ för pressnedladdningar och CSS.
const assets = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.webp', { eager: true });

export const responsiveWidths = [360, 720, 1080, 1440, 1800];

export function imageAsset(publicPath: string): ImageMetadata {
  const asset = assets[publicPath.replace(/^\/images\//, '/src/assets/images/')];
  if (!asset) throw new Error(`Saknar importerad bild: ${publicPath}`);
  return asset.default;
}
