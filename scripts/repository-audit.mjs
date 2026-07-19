import fs from 'node:fs';

const required = [
  'README.md',
  'CHANGELOG.md',
  'astro.config.mjs',
  'src/content.config.ts',
  'src/pages/index.astro',
  'src/pages/observations/index.astro',
  'src/pages/observations/[...id].astro',
  'src/pages/library/index.astro',
  'documentation/ACCEPTANCE-REPORT-1.0.1.md',
];

const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length > 0) {
  console.error(`Repository audit failed. Missing: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`Repository audit passed (${required.length} required artifacts).`);
