# DHInfra.at — website rebuild (work in progress)

This repository holds a **rebuild** of the [DHInfra.at](https://dhinfra.at) website, moving it from
the old Jekyll site to [Astro](https://astro.build/) (using the AstroWind template,
Astro v6 + Tailwind CSS v4).

> [!IMPORTANT]
> **This is not the live deployment.** The production site continues to run from the old
> repository at `dhinfra.at`. This repo is for building and **testing the new site locally**.
> Nothing here is published automatically, and the domain/cutover will be handled separately and
> deliberately later on. Treat everything here as a preview.

## What you need

- **Node.js ≥ 22.12** — Astro v6 requires it and will refuse to start on older versions.
  An `.nvmrc` is included, so with [nvm](https://github.com/nvm-sh/nvm):

  ```bash
  nvm use      # picks up the version from .nvmrc (22.x)
  ```

- **npm** — this project uses npm (`package-lock.json`). Please don't add a pnpm/yarn lockfile.

## Run it locally

```bash
npm ci          # install exact dependencies from package-lock.json
npm run dev     # start the dev server
```

Then open **http://localhost:4321/**. The dev server hot-reloads on file changes.

> Note: changes to `src/config.yaml` require a **dev server restart** (it's loaded as a virtual
> module), and the inline CSS variables in `src/components/CustomStyles.astro` may need a hard
> refresh rather than HMR.

## Other commands

| Command             | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Local dev server at `localhost:4321`                      |
| `npm run build`     | Production build into `dist/` (good for catching errors)  |
| `npm run preview`   | Serve the built `dist/` locally to preview the real output |
| `npm run check`     | Astro + ESLint + Prettier checks                          |
| `npm run fix`       | Auto-fix ESLint + Prettier                                |

## Where things live

- `src/pages/` — top-level pages (home, resources, gpu-cluster, partners, governance, about, imprint).
- `src/data/post/` — use-cases & news entries (Markdown). Filenames are dated (`YYYY-MM-DD-slug`) and
  preserve the old site's URLs.
- `src/navigation.ts` — header and footer navigation.
- `src/config.yaml` — site metadata, blog settings, theme defaults.
- `src/components/CustomStyles.astro` — the CLARIAH-blue colour palette (light & dark).
- `public/images/` — partner logos and post images.

## Status

Content migration and the new information architecture are in place. Remaining polish (redirects from
old URLs, analytics, favicons, final link-check) is tracked outside this repo. If something looks
unfinished, it probably is — this is an active rebuild.
