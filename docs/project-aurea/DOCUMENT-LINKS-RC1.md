# Project Aurea — Document Links RC1

## Scope

This patch establishes one canonical route source for the Bibliotheca rooms and their institutional documents.

### Canonicalized room navigation

- Bibliotheca
- Foundation Room
- Works Room
- Archive Room
- Governance Room

### Canonicalized institutional documents

- Project Aurea / Charter
- Liber Constitutionis
- Liber Lapidum
- Liber Conventus / Decision Log
- Codex I — De Aeternitate
- Editorial Standards

### Canonicalized editorial destinations

- Observations
- Observation Archive
- Topics
- Special Editions
- Future Projects / Research
- Search

## Document presentation correction

`Liber Constitutionis` and `Liber Conventus` previously opened placeholder pages even though canonical Markdown entries already exist in `src/content/library/constitution/`.

RC1 now renders those repository entries through a shared constitutional-document presentation component.

`Liber Lapidum` remains on its existing complete manuscript page.

## Project Aurea / Charter

The route remains `/library/project-aurea/`. The current repository does not contain a canonical full Project Charter manuscript in the content collection, so this patch deliberately does not manufacture or infer missing constitutional text.

## Validation

The route references were statically audited after conversion. A full Astro build could not be run in the packaging environment because the repository's bundled `node_modules` is missing the platform-specific optional Rollup binary (`@rollup/rollup-linux-x64-gnu`). This is an environment/dependency issue, not an application route error. Validate with the normal localhost workflow after overlaying the patch.
