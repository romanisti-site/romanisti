import fs from 'node:fs';

const required = [
  'README.md',
  'CHANGELOG.md',
  '.nvmrc',
  '.npmrc',
  'astro.config.mjs',
  'src/content.config.ts',
  'src/components/StructuredData.astro',
  'src/components/ReadingProgress.astro',
  'src/components/InstitutionalStatement.astro',
  'src/components/SectionHeading.astro',
  'src/pages/index.astro',
  'src/pages/privacy.astro',
  'src/pages/search.astro',
  'src/pages/topics/index.astro',
  'src/pages/topics/[topic].astro',
  'src/pages/library/codex/codex-i-de-aeternitate.astro',
  'src/pages/search-index.json.ts',
  'src/pages/build.json.ts',
  'src/pages/observations/index.astro',
  'src/pages/observations/[...id].astro',
  'src/pages/library/index.astro',
  'src/pages/library/[...id].astro',
  'src/content/library/codex/codex-i-de-aeternitate.md',
  'documentation/ACCEPTANCE-REPORT-1.0.3.md',
  'documentation/ACCEPTANCE-REPORT-1.0.4.md',
  'documentation/LOCAL-DEVELOPMENT.md',
  'documentation/WINDOWS-DEVELOPMENT.md',
  'documentation/ACCEPTANCE-REPORT-1.0.5.md',
  'documentation/ACCEPTANCE-REPORT-1.0.6.md',
];

const forbidden = [
  'index.html',
  'styles.css',
  'script.js',
  'manifest.json',
  'privacy.html',
  'sitemap.xml',
  'migration',
];

const missing = required.filter((file) => !fs.existsSync(file));
const legacy = forbidden.filter((file) => fs.existsSync(file));

if (missing.length > 0 || legacy.length > 0) {
  if (missing.length > 0) {
    console.error(`Repository audit failed. Missing: ${missing.join(', ')}`);
  }
  if (legacy.length > 0) {
    console.error(`Repository audit failed. Forbidden paths present: ${legacy.join(', ')}`);
  }
  process.exit(1);
}

console.log(
  `Repository audit passed (${required.length} required artifacts; no forbidden legacy paths).`,
);
