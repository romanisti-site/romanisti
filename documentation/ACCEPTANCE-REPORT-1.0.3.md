# Acceptance Report — Build 1.0.3

## Accepted scope

Build 1.0.3 resolves the repository installation problem without requiring a
browser upload or manual deletion of individual GitHub files.

The distribution includes a guarded Windows installer that:

- preserves the local `.git` directory
- refuses to run outside a Git repository
- refuses to run unless the checked-out branch is `faber`
- refuses to run over existing uncommitted changes
- deletes only the known legacy static-site paths
- copies the complete desired repository state
- performs no commit, push, merge, or deployment

The repository also adds structured data and a native privacy route.

## Source integrity

The Codex, constitutional library, editorial canon, Project Faber documents,
and five locked plates remain imported from the canonical Master Repository
v3.0 source package.

## Verification boundary

Structural audits and package integrity checks were completed in the build
environment. A full Astro dependency installation could not be completed in
the artifact environment because package retrieval timed out. The local
installation must therefore run:

```bash
npm install
npm run verify
```

before preview deployment.

## Release status

Complete installation package. Ready for guided installation into the clean
local `faber` clone and review through GitHub Desktop.
