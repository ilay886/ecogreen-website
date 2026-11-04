# EcoGreen website – source kit

This folder rebuilds the full website (all 533 pages) from one source file.

- `ecogreen-site-preview.html` – THE SOURCE. All text, town pages, services, blog, reviews,
  phone numbers, styles. Open it in a browser to preview the whole site.
- `ecogreen-city-pages-import.csv` – SEO titles/descriptions and schema per town and county page.
- `build/` – the build script and site files (_headers, _redirects rules, cookie + accessibility widgets).

## Rebuild the site (for a developer, or Claude in a new chat)
1. Install Node.js (nodejs.org).
2. In the `build` folder run:
   npm install
   npx playwright install chromium
   npm run build
3. The finished site appears in the `output` folder. Copy its contents into the GitHub repository,
   commit and push. Cloudflare publishes it automatically.

## Making changes with Claude later
Start a new chat, attach this zip, and describe the change. Claude can edit
`ecogreen-site-preview.html`, rebuild, and give you a new upload zip.

## Also needed (speed update)
- Python 3 with Pillow (`pip install Pillow`) — the build uses it to make the small phone hero image (hero-m.webp) and logo.webp.
- `npm install` in the build folder now also installs the Inter font (@fontsource-variable/inter), which the build copies into /assets/fonts/ so the site doesn't load Google Fonts.

## One-command rebuild (used by the monthly automatic task)
Edit `_source/ecogreen-site-preview.html` (and the CSV if needed), then run:

    bash _source/build/publish.sh

It rebuilds every page and replaces the built files at the repo root. Commit and push to `main`; Cloudflare deploys automatically.
