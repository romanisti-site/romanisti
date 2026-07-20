# Windows Development

Build 1.0.5 includes two launchers in `tools/windows/`.

## Start the local website

Double-click:

```text
tools/windows/START_ROMANISTI.cmd
```

It checks for Node.js, installs dependencies when `node_modules` is absent, runs source diagnostics, and starts Astro.

The default local address is:

```text
http://localhost:4321
```

## Verify the repository

Double-click:

```text
tools/windows/VERIFY_ROMANISTI.cmd
```

This runs the full repository verification sequence and leaves the terminal open so errors can be reviewed.
