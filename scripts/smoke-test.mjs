import fs from 'node:fs';
import path from 'node:path';

const expectations = [
  ['src/pages/index.astro', ['getPublishedObservations', '<BaseLayout']],
  ['src/pages/observations/index.astro', ['getPublishedObservations']],
  ['src/pages/observations/[...id].astro', ['getStaticPaths', "getCollection('observations'"]],
  ['src/pages/library/index.astro', ['getLibraryByCategory']],
  ['src/pages/library/[...id].astro', ['getStaticPaths', "getCollection('library'"]],
  ['src/pages/privacy.astro', ['<BaseLayout']],
  ['src/pages/search.astro', ['search-index.json', '<BaseLayout']],
  ['src/pages/search-index.json.ts', ['createSearchIndex']],
  ['src/pages/build.json.ts', ['repositoryVersion']],
  ['src/pages/topics/index.astro', ['getTopics']],
  ['src/pages/topics/[topic].astro', ['getStaticPaths', 'getTopics']],
  ['src/pages/library/codex/codex-i-de-aeternitate.astro', ['CodexContents', 'CodexPlate']],
  ['src/lib/related.ts', ['getRelatedObservations']],
  ['src/components/StructuredData.astro', ['application/ld+json']],
];

const failures = [];

for (const [file, markers] of expectations) {
  const absolute = path.resolve(file);
  if (!fs.existsSync(absolute)) {
    failures.push(`${file}: missing`);
    continue;
  }

  const content = fs.readFileSync(absolute, 'utf8');
  for (const marker of markers) {
    if (!content.includes(marker)) {
      failures.push(`${file}: missing marker ${marker}`);
    }
  }
}

const observations = fs
  .readdirSync(path.resolve('src/content/observations'))
  .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'));

const libraryDocuments = fs
  .readdirSync(path.resolve('src/content/library'), { recursive: true })
  .filter((name) => name.endsWith('.md'));

if (observations.length === 0) {
  failures.push('No observation content exists.');
}

if (libraryDocuments.length < 10) {
  failures.push(`Expected at least 10 library documents; found ${libraryDocuments.length}.`);
}

if (failures.length > 0) {
  console.error('Smoke test failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Smoke test passed (${observations.length} observation file(s), ${libraryDocuments.length} library documents).`,
);
