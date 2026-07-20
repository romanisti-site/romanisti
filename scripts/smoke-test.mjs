import fs from 'node:fs';
import path from 'node:path';

const expectations = [
  ['src/pages/index.astro', [/getPublishedObservations/, /<BaseLayout/]],
  ['src/pages/observations/index.astro', [/getPublishedObservations/, /Pagination/]],
  ['src/pages/observations/archive.astro', [/getObservationArchive/]],
  ['src/pages/observations/page/[page].astro', [/getStaticPaths/, /Pagination/]],
  [
    'src/pages/observations/[...id].astro',
    [/getStaticPaths/, /getCollection\s*\(\s*['"]observations['"]/],
  ],
  ['src/pages/library/index.astro', [/getLibraryByCategory/]],
  [
    'src/pages/library/[...id].astro',
    [/getStaticPaths/, /getCollection\s*\(\s*['"]library['"]/],
  ],
  ['src/pages/privacy.astro', [/<BaseLayout/]],
  ['src/pages/search.astro', [/search-index\.json/, /<BaseLayout/]],
  ['src/pages/search-index.json.ts', [/createSearchIndex/]],
  ['src/pages/build.json.ts', [/repositoryVersion/]],
  ['src/pages/topics/index.astro', [/getTopics/]],
  ['src/pages/topics/[topic].astro', [/getStaticPaths/, /getTopics/]],
  [
    'src/pages/library/codex/codex-i-de-aeternitate.astro',
    [/CodexContents/, /CodexPlate/],
  ],
  ['src/lib/related.ts', [/getRelatedObservations/]],
  ['src/components/ArticleTools.astro', [/data-copy-link/, /data-print/]],
  ['src/components/StructuredData.astro', [/application\/ld\+json/]],
];

const failures = [];

for (const [file, patterns] of expectations) {
  const absolute = path.resolve(file);

  if (!fs.existsSync(absolute)) {
    failures.push(`${file}: missing`);
    continue;
  }

  const content = fs.readFileSync(absolute, 'utf8');

  for (const pattern of patterns) {
    if (!pattern.test(content)) {
      failures.push(`${file}: missing expected pattern ${pattern}`);
    }
  }
}

const observationsPath = path.resolve('src/content/observations');
const libraryPath = path.resolve('src/content/library');

const observations = fs
  .readdirSync(observationsPath)
  .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'));

const libraryDocuments = fs
  .readdirSync(libraryPath, { recursive: true })
  .filter((name) => name.endsWith('.md'));

if (observations.length === 0) {
  failures.push('No observation content exists.');
}

if (libraryDocuments.length < 10) {
  failures.push(
    `Expected at least 10 library documents; found ${libraryDocuments.length}.`,
  );
}

if (failures.length > 0) {
  console.error('Smoke test failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Smoke test passed (${observations.length} observation file(s), ${libraryDocuments.length} library documents).`,
);
