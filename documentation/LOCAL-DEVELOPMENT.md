# Local Development

## First setup

Open the repository folder in a terminal and run:

```bash
npm run setup
```

The setup command verifies Node.js, installs dependencies when needed, and runs the complete repository verification sequence.

## Daily development

```bash
npm run dev
```

Astro will print the local preview address, normally `http://localhost:4321`.

## Production verification

```bash
npm run verify
```

This runs:

1. repository audit
2. canonical content validation
3. source smoke tests
4. formatting verification
5. linting
6. Astro type checking
7. production build
