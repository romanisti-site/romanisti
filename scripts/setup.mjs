import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const major = Number.parseInt(process.versions.node.split('.')[0] ?? '0', 10);

if (major < 20) {
  console.error(`Node.js 20 or newer is required. Current version: ${process.version}`);
  process.exit(1);
}

console.log(`Node.js ${process.version} verified.`);

if (!existsSync('node_modules')) {
  console.log('Installing dependencies...');
  execFileSync('npm', ['install', '--no-audit', '--no-fund'], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
} else {
  console.log('Dependencies already installed.');
}

console.log('Running repository verification...');
execFileSync('npm', ['run', 'verify'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});
