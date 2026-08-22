# RC6.1 Release Notes

## Status

Corrective implementation superseding RC6.

## Locked decisions implemented

- Heading: `OBSERVATIONS`
- Subtitle: `Five recent works currently on display.`
- Threshold-continuous display treatment
- Classical Liber layout
- Small-caps category
- Centered title, maximum three lines
- Date format: `27 July 2026`
- Restrained `›`
- Full-Liber click target
- 2–3 px hover lift
- Static exhibition for the duration of each page visit
- Latest five works only
- Blank unused Libri
- Quiet replacement when a sixth work is published

## Corrections from RC6

1. Full-width architecture replaces container-bound width.
2. The real `published` field is used rather than speculative date-field fallbacks.
3. All five works are selected by a direct newest-first sort.
4. Each Liber receives its own calibrated absolute position.
5. Heading placement moves from the floor into the architectural wall field.
6. All inscriptions fade together after the heading begins.
7. The UI-card treatment is removed in favor of inscription hierarchy.

## Known architectural constraint

The five marble Libri are baked into the single Layer I image. The hover effect therefore creates a restrained optical lift through the inscription plane, highlight, and shadow. A literal physical lift of the stone object would require five separately masked tablet assets.
