# Archive Room RC1 — Changelog

## Added

- New `/archive/` architectural route.
- Locked Archive Room plate asset at its native 1640 × 959 landscape ratio.
- Archive Room canvas using the same image/overlay coordinate strategy as the Works Room.
- Five permanent, overt architectural annotations:
  - Archive Catalog
  - Collections
  - By Topic
  - Observation Archive
  - Works Room
- Persistent Archive Catalog panel with:
  - Search form
  - Published years
  - Most-used topics
  - Direct destinations to the Observation Archive, Collections, Codex I, and Works Room
- Keyboard, focus, Escape, outside-click, hover, and touch behavior.
- Mobile bottom-sheet treatment for the catalog.

## Changed

- Bibliotheca Archive doorway now enters `/archive/` instead of bypassing the room.
- Search page now accepts `?q=` from the Archive Catalog and automatically renders the query.

## Preserved

- Existing Observation Archive route and chronological page.
- Existing Works Room, Reading Room, Foundation, and Governance behavior.
- Existing header/navigation architecture.
