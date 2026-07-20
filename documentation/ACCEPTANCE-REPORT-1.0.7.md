# Acceptance Report — Build 1.0.7

## Accepted scope

Build 1.0.7 adds continuity for a growing publication:

- paginated observation listings
- a complete chronological archive
- article copy-link controls
- printable editorial pages

## Update process

Build 1.0.7 retires custom PowerShell patching for routine updates.

The update package contains only changed and deleted file inventories. The operator copies the `updates` folder contents into the local repository and reviews the resulting diff in GitHub Desktop before committing.

## Verification

After copying the update:

```text
tools/windows/VERIFY_ROMANISTI.cmd
```

## Release status

Complete incremental update. Ready for local copy, GitHub Desktop review, verification, commit, and push to `faber`.
