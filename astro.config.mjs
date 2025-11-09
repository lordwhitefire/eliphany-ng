// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://eliphany.com', // your future domain (or use localhost for now)
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});