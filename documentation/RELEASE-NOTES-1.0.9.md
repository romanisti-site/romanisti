# Release Notes — Build 1.0.9

Build 1.0.9 aligns ESLint with the repository's actual source languages.

The previous configuration applied ESLint's JavaScript parser to TypeScript
files and to TypeScript frontmatter inside Astro components. That produced
parser failures for ordinary language features including interfaces, type
annotations, generics, and imported types.

This build adds the official `typescript-eslint` toolchain, applies its
recommended flat configuration to TypeScript, and configures Astro's parser to
delegate script parsing to the TypeScript parser.

No application behavior or canonical content is changed.
