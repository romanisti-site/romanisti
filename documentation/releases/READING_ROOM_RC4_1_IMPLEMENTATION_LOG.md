# Implementation Log — Reading Room RC4.1

## Release

**Patch:** Romanisti Reading Room RC4.1 Architecture  
**Date:** 2026-07-26  
**Status:** Locked architectural asset patch

## Changes

1. Added the completed Reading Room RC4.1 PNG.
2. Added a full-size WebP production derivative.
3. Added the editable PSD source master.
4. Recorded the removal of the carved wall title.
5. Recorded Julius Caesar as a permanent institutional object.
6. Preserved the rear sequence:
   - Liber;
   - Liber;
   - Julius Caesar;
   - empty brass stand.
7. Preserved all five foreground editorial Libri.
8. Established that future clickable article works belong to the HTML/CSS interface
   layer rather than the architectural image.

## Reversibility

This patch adds new files only. It does not delete or overwrite existing repository
assets. Reversal consists of removing the files listed in `FILES_CHANGED.md`.

## Next Implementation Movement

Integrate the canonical WebP into the Reading Room component and build the accessible
interactive layer above it without modifying the locked image.
