# Project Aurea — Canonical Route Map

Status: RC1 · Institutional route source of truth

The implementation source of truth is `src/config/institutionalRoutes.ts`.
Room components should import routes from that file rather than hard-coding institutional destinations.

## Rooms

| Destination | Canonical route |
|---|---|
| Bibliotheca | `/#bibliotheca` |
| Foundation Room | `/library/foundation/` |
| Works Room | `/works/` |
| Archive Room | `/archive/` |
| Governance Room | `/governance/` |

## Constitutional works

| Work | Canonical route |
|---|---|
| Project Aurea / Charter | `/library/project-aurea/` |
| Liber Constitutionis | `/library/liber-constitutionis/` |
| Liber Lapidum | `/library/liber-lapidum/` |
| Liber Conventus / Decision Log | `/library/liber-conventus/` |
| Codex I — De Aeternitate | `/library/codex/codex-i-de-aeternitate/` |
| Editorial Standards | `/standards/` |

## Editorial collections

| Collection | Canonical route |
|---|---|
| Observations | `/observations/` |
| Observation Archive | `/observations/archive/` |
| Topics | `/topics/` |
| Special Editions | `/special-editions/` |
| Future Projects / Research | `/research/` |
| Search | `/search/` |

## Canonicalization rule

Architectural room overlays must use the canonical route configuration. New aliases should redirect to these routes rather than creating a second permanent destination for the same institutional work.
