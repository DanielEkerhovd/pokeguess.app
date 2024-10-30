import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: '/',

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

    rollupOptions: {
      input: {
        main: './index.html',
        practice: './practice/index.html',
        timeAttack: './time-attack/index.html',
        survival: './survival/index.html',
      },
    },
  },
});
