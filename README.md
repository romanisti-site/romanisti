# Romanisti

**Edition One · Repository Build 1.0.3**

Romanisti is an independent publication devoted to the enduring relationship
between Rome and AS Roma.

Build 1.0.3 combines the Astro publication, canonical institutional library,
five locked Codex plates, engineering foundation, and a guarded installation
workflow for the local GitHub Desktop clone of the `faber` branch.

## Requirements

- Node.js 20
- npm 10 or newer
- GitHub Desktop for the guided repository workflow

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run verify
```

## Installation

Do not upload this repository through GitHub's browser interface.

Use the separate Build 1.0.3 installation package. Its installer verifies the
local Git repository, confirms the `faber` branch, removes the known legacy
static-site paths, and copies this complete repository state into place. It
does not commit or push.

## Institutional source integrity

Canonical documents were imported from the preserved Romanisti Master
Repository v3.0. Each library entry retains its original source path.
