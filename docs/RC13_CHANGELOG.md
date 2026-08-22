# RC13 — Works Room Editorial Navigation

## Purpose

Rebuild the Works Room interaction layer so the room functions as an organized gateway to Romanisti's published work rather than a set of loosely placed invisible links.

## Changes

- Expands direct Observation access from five to the fifteen most recent published works.
- Preserves Observations 1–5 while adding Observations 6–15 beyond the Reading Room selection.
- Organizes the observation links across visible folios, books, and document objects on the editorial table.
- Adds secondary links for:
  - Observation Archive
  - Special Editions
  - Codex I — *De Aeternitate*
  - Future Projects / Research
- Replaces viewport-relative overlay behavior with a shared fixed-ratio 8:5 image/overlay canvas.
- Replaces clipped pseudo-element tooltips with independent museum-style label elements.
- Preserves invisible-at-rest interaction, quiet brass hover feedback, keyboard focus, and descriptive labels.
- Removes the Project Aurea medallion link from the Works Room; institutional and constitutional material belongs in the Foundation Room.

## Route verification

The existing routes retained from RC12.9 are:

- `/observations/<slug>`
- `/observations/archive/`
- `/library/codex/codex-i-de-aeternitate/`

RC13 introduces these proposed destinations and they should be matched to the repository's canonical routes if different:

- `/special-editions/`
- `/research/`
