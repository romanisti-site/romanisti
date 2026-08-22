# Romanisti Reading Room — RC5 Architecture

## Status
Repository Architecture RC5 integrates **Reading Room RC4.1** as the canonical architectural plate.

## Constitutional Change
The prior Reading Room assembled separate visual layers: architectural plate, librarian's table, Julius Caesar, Libri, reading stand, and editorial interface. RC5 retires that visual assembly from the active rendering path. RC4.1 already contains the complete architecture, institutional objects, lighting, shadows, reflections, and foreground Libri.

The active hierarchy is now:

1. Canonical architectural plate;
2. threshold/arrival treatment;
3. editorial HTML/CSS layer.

## Preserved
- Homepage order;
- Threshold;
- site navigation and language controls;
- editorial content following the Reading Room;
- accessible HTML/CSS overlay capability;
- existing legacy source files, which remain available but unused.

## Retired from Active Rendering
- `InstitutionalObjects.astro`;
- `InstitutionalObjects/LibrariansTable.astro`;
- separately layered Caesar, Libri, and reading stand assets.

These files are not deleted by this release. They remain institutional memory and may later be moved into a formal legacy directory.

## Canonical Image
`src/assets/reading-room/canonical/reading-room-rc4-1.webp`

Archival companions:
- `public/images/reading-room/canonical/reading-room-rc4-1.png`;
- `design_artifacts/reading-room/Reading Room_RC4.1.psd`.

## Architectural Boundary
Future clickable works, labels, hover states, language variants, and accessibility content must be implemented in HTML/CSS above the plate. The canonical image must not be altered to accommodate interface behavior.
