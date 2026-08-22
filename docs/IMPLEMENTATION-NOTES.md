# Implementation Notes

## Why this patch exists

The Reading Room had been temporarily bound to the intrinsic aspect ratio of
its earlier 3:2 architectural plate. On a widescreen browser this produced a
section taller than the viewport.

The Threshold and Bibliotheca are experienced as architectural spaces within a
single viewport. RC1.1 restores that same experiential rule for the Reading
Room.

## Geometry

Section:
- `height: 100svh`
- `min-height: 100svh`

Canvas:
- absolute `inset: 0`
- `width: 100%`
- `height: 100%`

Plate:
- `width: 100%`
- `height: 100%`
- `object-fit: cover`
- `object-position: 50% 50%`

## Deliberately unchanged

- Observation overlay percentages
- Observation text
- Observation links
- navigation
- mobile-specific portrait art direction

The next decision is visual: verify whether the new 1920 × 1024 master now
contains sufficient architectural safe area for the intended desktop viewport.
