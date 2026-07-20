# Release Notes — Build 1.0.9a

Build 1.0.9a repairs the two root causes revealed by the first successful
TypeScript-aware ESLint pass.

Repository automation files under `scripts/` now declare the Node globals
they use, including `process` and `console`, and are exempt from the
browser-oriented console restriction.

`ObservationCard.astro` is also repaired so all component CSS remains inside
the component's `<style>` block.

No editorial content or runtime behavior is intentionally changed. The
package and site versions remain 1.0.9.
