import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/content');
const requiredDirectories = ['observations', 'pages', 'authors'];
const missing = requiredDirectories.filter(
  (directory) => !fs.existsSync(path.join(root, directory)),
);

if (missing.length > 0) {
  console.error(`Missing content directories: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Content directory validation passed.');
