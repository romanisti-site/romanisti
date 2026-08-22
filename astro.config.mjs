import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://romanisti.org',
  output: 'static',
  build: { format: 'directory' }
});
