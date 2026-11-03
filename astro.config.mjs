import { defineConfig } from 'astro/config';
export default defineConfig({
  // Används för sociala metadata, inte för indexering.
  site: 'https://weab.nu',
  // Custom domain, so the site is served from the root path.
  base: '/',
  output: 'static',
  trailingSlash: 'always',
});
