EcoGreen Roofing And Exteriors website - static files
==========================================

WHAT'S IN THIS FOLDER
- 535 pages, each in its own folder as index.html (for example /ardmore-pa/index.html).
  Homepage, About Us, blog (4 articles), 6 service pages, 9 county pages,
  510 town pages (including Bala Cynwyd, Doylestown and Huntingdon Valley), each with
  its own written content, plus a Privacy Policy page.
- assets/       styles, script, logo and photos
- sitemap.xml   list of every page for Google
- robots.txt    lets search engines crawl the site
- 404.html      "page not found" page
- .htaccess     redirects + 404 setup for Apache/cPanel hosting
- _redirects    the same redirects for Netlify / Cloudflare Pages

HOW TO UPLOAD
1. Upload EVERYTHING inside this ecogreen-site folder (not the folder itself) to your
   website's main folder on the host (often called public_html or www).
   Include the hidden file .htaccess (turn on "show hidden files" in your file manager).
2. Turn on HTTPS (free SSL) in your hosting panel.
3. Add the site to Google Search Console and submit: https://ecogreenextrior.com/sitemap.xml

ESTIMATE FORM (leads)
Every estimate form sends to info@ecogreenextrior.com through FormSubmit (formsubmit.co,
free, no account).
IMPORTANT, one time only: after the site is live, send yourself one test request from the
form. FormSubmit will email info@ecogreenextrior.com an "Activate Form" link. Click it once.
Until you click it, requests are NOT delivered. After that, every request arrives in that inbox.
To use a different email, search all pages for formsubmit.co/info@ecogreenextrior.com and
replace the email.

PHONE NUMBERS
On phones, tapping a number calls it. On computers, clicking a number copies it.

REDIRECTS
Three towns that were listed twice (Rosemont, Chadds Ford, Telford) are one page each, and
/doylestown-borough-pa/ forwards to /doylestown-pa/. These old addresses forward
automatically (301 redirects):
- .htaccess works on Apache/cPanel hosting (InMotion, Liquid Web and most shared hosts).
- _redirects works on Netlify and Cloudflare Pages.

OLD WORDPRESS ADDRESSES
Your current site's pages that no longer exist also forward automatically:
/our-services/, /contact/ and /location/ go to the homepage, /cherry-hill-nj/ and
/king-of-prussia-pa/ go to their county pages, and the old WordPress leftovers
(/hello-world/, /category/uncategorized/, /author/...) go to the blog or About Us.
BACK UP your current WordPress site before uploading, because these files replace it.

SPEED
Turn on compression (gzip/brotli) and browser caching on your host, or put the site behind
Cloudflare's free plan, which does both automatically.
