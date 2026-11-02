import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Canonical URL — used for sitemap, canonical links and SEO metadata.
  site: 'https://weab.nu',
  // Custom domain, so the site is served from the root path.
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
