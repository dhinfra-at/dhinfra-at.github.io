# DHInfra.at — website

The [DHInfra.at](https://www.dhinfra.at) website, built with [Astro](https://astro.build/)
(AstroWind template, Astro v6 + Tailwind CSS v4) and served via GitHub Pages.

> [!NOTE]
> This is the **live site**. It replaced the previous Beautiful Jekyll site (hard cut). Pushes to
> `main` are built and deployed automatically — see [Deployment](#deployment).

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

Then open **http://localhost:4321/** (Astro picks the next free port if 4321 is taken). The dev
server hot-reloads on file changes.

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

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site (Node 22) and
publishes `dist/` to GitHub Pages. Pull requests build too (to validate) but only `main` deploys.

- **Pages source** must be set to **GitHub Actions** (Settings → Pages), not "Deploy from a branch".
- The custom domain **www.dhinfra.at** is kept via `public/CNAME` (copied into `dist/` on build).
- Old Jekyll URLs are forwarded in `astro.config.ts` (`redirects`): `/infrastructure`→`/resources`,
  `/ml`→`/gpu-cluster`, `/capture`→`/digitization`, `/iaas`→`/saas`, `/repos`→`/saas`,
  `/foss`→`/software`, `/blog`→`/use-cases`. Dated post URLs (`/YYYY-MM-DD-slug`) are unchanged.

## Where things live

- `src/pages/` — top-level pages: home, `resources` (overview) and the offer detail pages
  (`gpu-cluster`, `digitization`, `saas`, `software`), plus `partners`, `governance`, `about`,
  `contact`, `imprint`.
- `src/components/ResourceCards.astro` — the shared resource-overview cards used on the home and
  Resources pages (single source of truth for the four offers).
- `src/data/post/` — use-cases & news entries (Markdown). Filenames are dated (`YYYY-MM-DD-slug`) and
  preserve the old site's URLs.
- `src/navigation.ts` — header and footer navigation.
- `src/config.yaml` — site metadata, blog settings, theme defaults.
- `src/components/CustomStyles.astro` — the CLARIAH-blue colour palette (light & dark).
- `public/` — partner logos, post images, the OG preview image, and `CNAME`.
