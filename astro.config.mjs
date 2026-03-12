import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://blime4.github.io',
  base: '/claude-code-tips/',
  integrations: [pagefind()],
  outDir: 'docs',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
  server: {
    host: true,
    port: 4321,
  },
});
