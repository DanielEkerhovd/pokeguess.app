import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
