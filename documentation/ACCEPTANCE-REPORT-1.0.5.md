# Acceptance Report — Build 1.0.5

## Accepted scope

Build 1.0.5 concentrates on local execution, diagnostics, and discovery.

It adds:

- explicit environment typing
- repository and platform diagnostics
- Windows start and verification launchers
- a public build metadata endpoint
- a statically generated search index
- client-side search across published observations and the institutional Library

## Local verification

After applying the update, use:

```text
tools/windows/VERIFY_ROMANISTI.cmd
```

or:

```bash
npm run verify
```

## Build limitation

The artifact environment could not complete external npm package retrieval
within the available execution window. Source-level structural validation
passed, but the first complete dependency installation and Astro compilation
must still occur in the local repository.

## Release status

Complete incremental update. Ready for installation over a clean Build 1.0.4
`faber` branch, review in GitHub Desktop, local verification, commit, and push.
