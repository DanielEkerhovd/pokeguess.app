import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  {
    ignores: [
      'tailwind.config.js',
      'vite.config.js',
      'eslint.config.mjs',
      'postcss.config.js',
    ],
  },
];
