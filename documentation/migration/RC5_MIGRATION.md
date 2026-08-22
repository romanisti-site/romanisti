# RC5 Migration Guide

## Before Applying
Commit or copy the current repository so the migration is reversible.

## Apply
Copy the contents of this RC5 ZIP into the root of the existing `romanisti` repository and allow these files to be replaced:

- `src/components/reading-room/ReadingRoom.astro`
- `src/components/reading-room/PrimaryArchitecturalPlate.astro`
- `src/components/reading-room/EditorialLayer.astro`

All other included files are new.

## Do Not Delete
Do not delete the existing legacy files yet:

- `src/components/reading-room/InstitutionalObjects.astro`
- `src/components/reading-room/InstitutionalObjects/LibrariansTable.astro`
- prior Reading Room assets.

They are no longer imported by the active component but remain useful for recovery and institutional memory.

## Start
From the repository root:

```bash
npm install
npm run dev
```

Then visit the localhost address shown by Astro.

## Browser Cache
If the old room remains visible:

1. stop and restart the dev server;
2. use a hard refresh (`Ctrl+Shift+R`);
3. confirm the new asset exists at `src/assets/reading-room/canonical/reading-room-rc4-1.webp`;
4. confirm `ReadingRoom.astro` no longer imports `InstitutionalObjects`.

## Build Validation

```bash
npm run build
npm run preview
```

## Recovery
Restore the prior two `.astro` component files from Git or from the repository copy created before installation.
