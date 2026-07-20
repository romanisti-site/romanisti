# Release Notes — Build 1.0.10b

Build 1.0.10b replaces the ineffective 1.0.10a package.

The CI log identified only `src/content.config.ts` as failing Prettier.
This package contains an actual source diff in that file: the long Zod enum
declarations are rewritten into the layout Prettier 3 produces under the
repository's existing configuration.

The valid package semantic version remains `1.0.10`. No schema behavior,
types, or canonical content are changed.
