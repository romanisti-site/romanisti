# Release Notes — Build 1.0.10

Build 1.0.10 completes the typed institutional Library architecture.

The current branch contained Library pages and manuscripts without every
schema, helper, component, and layout required for Astro to infer the
`library` collection consistently. This caused Library entries to collapse
to `never` during type checking and caused several imports to appear
missing.

This build synchronizes the content schema, Library helpers, search
indexing, topic utilities, dynamic route props, and all supporting Library
components.

No canonical manuscript text is changed.
