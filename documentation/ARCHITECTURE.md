# Architecture

## Application

Romanisti is a statically generated Astro publication.

The application layer is divided into:

- `src/content/` — editorial and institutional source content
- `src/components/` — reusable interface elements
- `src/layouts/` — page-level composition
- `src/pages/` — public routes
- `src/config/` — navigation and site configuration
- `src/lib/` — framework-independent utilities
- `src/styles/` — tokens and global presentation rules

## Content boundary

Editorial content is validated through Astro content collections. Publication state, language, topics, dates, and metadata are part of each entry's typed record.

Draft observations do not generate routes.

## URL policy

Public URLs use trailing slashes and stable content identifiers:

- `/observations/`
- `/observations/{entry-id}/`
- `/about/`
- `/standards/`
- `/library/`

## Deployment

The output is static and deployable to Cloudflare Pages. Framework replacement remains possible because source content, metadata, and taxonomy do not depend on runtime services.
