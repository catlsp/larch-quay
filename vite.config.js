import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    svelte(),
    legacy({
      targets: ['defaults', 'ie >= 11', 'chrome 49', 'safari 9'],
      modernPolyfills: true,
    }),
  ],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  build: {
    minify: false,
    sourcemap: true,
    assetsInlineLimit: 10485760,
    cssCodeSplit: false,
    rolldownOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
