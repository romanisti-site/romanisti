# Deployment

## Cloudflare Pages

Create or connect a Cloudflare Pages project to the GitHub repository.

Use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20`

No runtime secrets are required for Build 1.0.1.

## Domain

The canonical production domain is `https://romanisti.org`.

Configure both the root domain and `www` in Cloudflare. Redirect `www` to the canonical root domain at the platform level.

## Verification after deployment

1. Confirm `/`, `/observations/`, `/about/`, `/standards/`, and `/library/`.
2. Confirm a published observation route.
3. Confirm `/rss.xml`, `/robots.txt`, and the generated sitemap.
4. Confirm the custom 404 page.
5. Run Lighthouse checks for accessibility, performance, best practices, and SEO.
