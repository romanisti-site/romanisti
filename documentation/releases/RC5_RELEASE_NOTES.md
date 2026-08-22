# Romanisti Repository RC5 — Release Notes

**Release:** RC5  
**Date:** 2026-07-26  
**Movement:** Architectural Simplification

## Summary
RC5 replaces the prototype layered Reading Room render with the constitutionally locked Reading Room RC4.1 master plate.

## Changes
- Updated `ReadingRoom.astro` to remove `InstitutionalObjects` from the active render path.
- Updated `PrimaryArchitecturalPlate.astro` to import the RC4.1 canonical WebP.
- Retained the threshold arrival and depth treatments.
- Retained `EditorialLayer.astro` as the interface boundary.
- Added archival PNG and PSD assets.
- Added architecture and migration documentation.

## Not Changed
- `src/pages/index.astro`;
- homepage editorial order;
- navigation;
- content collections;
- observation cards;
- library;
- global typography and color systems.

## Validation Required After Installation
1. Run the Astro development server.
2. Open the homepage.
3. Hard-refresh the browser.
4. Confirm the RC4.1 room is visible.
5. Confirm the header remains above the image.
6. Confirm the page continues into the featured observation.
7. Test desktop and mobile widths.
8. Run `npm run build`.
