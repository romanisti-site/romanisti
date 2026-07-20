# Release Notes — Build 1.0.5

Build 1.0.5 makes Romanisti easier to run and inspect locally.

Windows users now have direct launchers for starting the Astro development
server and running the full repository verification suite. The application
also exposes its current build metadata and introduces a static search
capability spanning published observations and the canonical Library.

The search implementation does not require a database or external service.
Its index is generated from the repository's typed content during the build.
