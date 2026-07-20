# Acceptance Report — Build 1.0.4

## Accepted scope

Build 1.0.4 is the first feature increment installed over the clean Project
Faber repository baseline.

It adds:

- a repeatable setup and verification workflow
- source smoke testing
- the Edition One homepage experience
- active navigation and sticky institutional header
- reading progress and improved keyboard focus behavior
- an incremental updater for the existing local `faber` branch

## Installation boundary

The Build 1.0.4 updater requires:

- the local Romanisti Git repository
- checked-out branch `faber`
- a clean working tree
- repository version 1.0.3

It copies only the files changed by Build 1.0.4 and leaves the resulting diff
uncommitted for review in GitHub Desktop.

## Verification boundary

Structural and source smoke validation passed in the artifact environment.
Dependency installation and the complete Astro build must be run locally:

```bash
npm run setup
```

## Release status

Complete incremental update. Ready for installation, GitHub Desktop review,
local dependency verification, commit, and push to `faber`.
