# Institution Mobile Composition Contract
## RC0 — Edition One

### Governing principle

Desktop and mobile are the same Institution, but they are not required to use the same architectural composition.

They share:

- identity
- content
- canonical routes
- room purpose
- document hierarchy
- institutional terminology

They may differ in:

- architectural plate crop or artwork
- plate aspect ratio
- spatial arrangement
- hotspot coordinates
- touch presentation
- vertical rhythm

### Canonical breakpoint

`max-width: 52rem`

This matches the breakpoint already used throughout the current architectural implementation and avoids introducing a second competing mobile boundary.

### Architectural rooms

Seven spaces require deliberate mobile art direction:

1. Threshold
2. Reading Room
3. Bibliotheca
4. Foundation Room
5. Governance Room
6. Works Room
7. Archive Room

### Desktop lock protection

A mobile conversion must never alter a locked desktop plate merely to improve a phone viewport.

Each conversion should instead provide:

- dedicated portrait plate or approved portrait crop
- independent mobile hotspot map
- minimum 44 × 44 px touch targets
- safe-area-aware navigation
- no horizontal overflow
- no desktop-coordinate assumptions

### Hotspot rule

Desktop and mobile hotspot percentages are **not interchangeable**.

Every mobile architectural plate gets its own coordinate map registered against its own canvas.

### Documents

Manuscript/document pages do not require separate artwork by default. They remain responsive documents and should be audited for:

- typography
- line length
- spacing
- continuation navigation
- touch targets
- safe areas

### Migration method

For each room:

1. Preserve the locked desktop implementation.
2. Create/approve the portrait plate.
3. Create the mobile hotspot map.
4. Place desktop and mobile versions in `InstitutionComposition`.
5. Test at 390, 430, 768, 834, and 1024 px.
6. Lock the room's mobile composition.
7. Move to the next room.

### RC0 status

RC0 establishes infrastructure only.

No room is declared mobile-complete by this patch.
