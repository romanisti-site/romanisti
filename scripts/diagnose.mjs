import fs from 'node:fs';
import os from 'node:os';

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const siteConfig = fs.readFileSync('src/config/site.ts', 'utf8');
const nodeMajor = Number.parseInt(process.versions.node.split('.')[0] ?? '0', 10);
const failures = [];

if (nodeMajor < 20) {
  failures.push(`Node.js 20+ required; found ${process.version}.`);
}

const versionMatch = siteConfig.match(/repositoryVersion:\s*['"]([^'"]+)['"]/);
const configuredVersion = versionMatch?.[1];

if (!configuredVersion) {
  failures.push('Unable to read repositoryVersion from src/config/site.ts.');
} else if (configuredVersion !== packageJson.version) {
  failures.push(
    `Repository version mismatch: package.json=${packageJson.version}, site.ts=${configuredVersion}.`,
  );
}

for (const required of [
  'astro.config.mjs',
  'src/content.config.ts',
  'src/pages/index.astro',
]) {
  if (!fs.existsSync(required)) {
    failures.push(`Missing ${required}.`);
  }
}

console.log('Romanisti diagnostic');
console.log(`- Repository version: ${packageJson.version}`);
console.log(`- Site configuration version: ${configuredVersion ?? 'unavailable'}`);
console.log(`- Node: ${process.version}`);
console.log(`- Platform: ${os.platform()} ${os.release()} (${os.arch()})`);
console.log(`- Working directory: ${process.cwd()}`);

if (failures.length) {
  failures.forEach((failure) => console.error(`- ERROR: ${failure}`));
  process.exit(1);
}

console.log('- Source diagnostics: passed');
