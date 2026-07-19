import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';

export default [
  eslint.configs.recommended,
  ...astro.configs.recommended,
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,mjs,ts}'],
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
