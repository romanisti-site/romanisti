## 1.0.10c — 2026-07-20

- Synchronize repository and site version to 1.0.10.

# Changelog

All notable repository changes are recorded here.

## 1.0.10b — 2026-07-20

### Fixed

- Applied the exact Prettier-compatible layout to `src/content.config.ts`
- Restored the valid package semantic version `1.0.10`
- Replaced the ineffective 1.0.10a maintenance package

### Preserved

- Library schema behavior
- Collection types
- Canonical content
- Runtime behavior

## 1.0.10 — 2026-07-20

### Added

- Complete typed Library content collection architecture
- Explicit Library category and entry types
- Typed topic records and dynamic topic routes
- Restored Library layout, card, plate sequence, and topic utilities
- Library-aware search record generation

### Changed

- Repository version advanced to 1.0.10
- Library grouping now returns a complete typed category record
- Dynamic Library and topic routes now declare their Astro props
- Content collection schema explicitly exposes Library metadata to Astro

### Preserved

- Canonical institutional Library manuscripts
- Existing reader-facing content
- Formatting and linting baselines
- Production `main` branch remains untouched until CI passes
