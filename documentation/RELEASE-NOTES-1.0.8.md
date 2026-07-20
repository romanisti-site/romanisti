# Release Notes — Build 1.0.8

Build 1.0.8 synchronizes the active Project Faber branch with the complete
institutional Library and repairs the verification logic that prevented the
initial integration pull request from reaching later CI stages.

The diagnostic script now compares the version declared in `package.json` with
the version declared by the site configuration. Future builds therefore no
longer require a second hard-coded version edit.

Smoke tests now validate implemented behavior using resilient source patterns,
allowing normal multiline Astro and TypeScript formatting.
