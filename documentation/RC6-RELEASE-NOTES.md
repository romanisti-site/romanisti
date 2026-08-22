# Romanisti Reading Room RC6 — Interactive Reading Room

## Constitutional model

### Layer I — Architecture

The canonical Reading Room plate now preserves five permanent blank marble Libri on their brass stands. Titles, categories, dates, arrows, and links are not baked into the image.

### Layer II — Observations

The Reading Room dynamically displays the five most recently published observations, regardless of category.

Heading:

> OBSERVATIONS
>
> Five recent works currently on display.

Each inscription contains category, title, publication date, and a link to the observation. Only the inscriptions fade into view; the architecture remains still.

## Files replaced

- `src/components/reading-room/ReadingRoom.astro`
- `src/components/reading-room/PrimaryArchitecturalPlate.astro`
- `src/components/reading-room/EditorialLayer.astro`

## Files added

- `src/components/reading-room/ObservationLayer.astro`
- `src/assets/reading-room/canonical/reading-room-layer-1-blank-libri.webp`
- `public/images/reading-room/canonical/reading-room-layer-1-blank-libri.png`

## Installation

Extract this ZIP at the repository root and allow matching files to be replaced. The folder structure is already aligned to the repository.

The observation loader supports common publication-date fields: `published`, `publishDate`, `pubDate`, or `date`. It supports `category`, `section`, or `type` for the visible category label.
