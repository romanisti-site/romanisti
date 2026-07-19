# Acceptance Report — Build 1.0.1

## Scope accepted

Build 1.0.1 establishes the complete production foundation for Romanisti Edition One:

- application and build configuration
- typed content engine
- publication-state filtering
- design tokens and responsive layouts
- metadata and canonical URL handling
- homepage and core institutional routes
- observation listing and article generation
- RSS, robots, sitemap, 404, and security headers
- formatting, linting, type-checking, content validation, and CI
- Cloudflare Pages deployment configuration
- repository, content, architecture, and deployment documentation

## Deliberate exclusion

The locked Codex and constitutional library are source-controlled institutional assets that must be imported from their canonical preserved files. They are not regenerated from summaries or conversational memory.

## Acceptance commands

```bash
npm install
npm run verify
```

## Release status

Ready for dependency installation, local verification, GitHub commit, and Cloudflare Pages deployment.
