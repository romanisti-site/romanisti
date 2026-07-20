# Release Notes — Build 1.0.8a

Build 1.0.8a is a formatting-gate maintenance repair.

The existing repository contains canonical long-form manuscripts, inherited
application source, and historical documentation that were not originally
created under one Prettier pass. Rewriting the entire repository inside a CI
repair would create a very large, difficult-to-review diff and could alter
deliberately preserved prose formatting.

This patch establishes an explicit formatting baseline. Prettier continues to
check files outside the baselined paths, while canonical content and inherited
source can be migrated deliberately in later builds.

No runtime behavior is changed. The package version remains 1.0.8.
