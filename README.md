# EcoGreen Roofing And Exteriors – website

Static website (533 pages). No WordPress, no database, nothing to update or patch.

## What's in this repository
- `index.html` and one folder per page (for example `ardmore-pa/index.html`)
- `assets/` – styles, script, logo and photos
- `sitemap.xml`, `robots.txt` – for Google
- `404.html` – "page not found" page
- `_redirects` – 301 redirects (used by Cloudflare Pages)
- `_headers` – security headers and browser caching (used by Cloudflare Pages)
- `.htaccess` – the same redirects for Apache/cPanel hosting (ignored by Cloudflare)

## Publish with GitHub + Cloudflare Pages
1. Install **GitHub Desktop** (desktop.github.com) and sign in to GitHub.
   (GitHub's website only uploads 100 files at a time; GitHub Desktop uploads everything at once.)
2. In GitHub Desktop: **File > New repository**, name it `ecogreen-website`, choose a folder, click **Create repository**.
3. Copy **all files from this zip** (including the hidden `.htaccess`, `_redirects`, `_headers`) into that folder.
4. Back in GitHub Desktop, type a summary like "Website", click **Commit to main**, then **Publish repository**.
   You can leave "Keep this code private" checked.
5. Go to **dash.cloudflare.com > Workers & Pages > Create > Pages > Connect to Git**.
   Pick the `ecogreen-website` repository.
6. Build settings: **Framework preset: None**, **Build command: (leave empty)**, **Build output directory: /** .
   Click **Save and Deploy**.
7. Open the test link (`ecogreen-website.pages.dev`) and check the site on phone and computer.
8. In the project: **Custom domains > Set up a custom domain** > `ecogreenextrior.com`, then `www.ecogreenextrior.com`.

From now on, any change you commit in GitHub Desktop goes live automatically in about a minute,
and every old version stays saved in GitHub, so you can roll back anytime.

## After it's live
- Call (484) 992-8649, (215) 598-6455 and (267) 377-4597 to make sure they ring through.
- Send one test request from the estimate form, then click the **Activate Form** email that
  FormSubmit sends to info@ecogreenextrior.com. Leads are not delivered until you do.
- Google Search Console: submit `https://ecogreenextrior.com/sitemap.xml`.
- Turn on two-factor login for GitHub, Cloudflare, your domain and your email.
