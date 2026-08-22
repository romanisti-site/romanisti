# RC6.2 Release Notes

## Status

Targeted corrective patch superseding the RC6.1 observation-data implementation.

## Root cause corrected

RC6.1 referenced a non-existent observation field:

```ts
entry.data.published
```

The authoritative collection schema defines:

```ts
publishedAt: Date
status: 'draft' | 'published'
```

## Changes

```ts
const observations = entries
  .filter((entry) => entry.data.status === 'published')
  .map((entry) => {
    const published = entry.data.publishedAt;
```

The existing newest-first sorting, five-item limit, date formatting, Liber positioning, full-Liber links, and hover behavior remain unchanged.

## Files changed

- `src/components/reading-room/ObservationLayer.astro`
