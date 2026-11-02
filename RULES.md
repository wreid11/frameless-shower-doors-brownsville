# RULES.md — Frameless Shower Doors Brownsville

How every page on this site is built. Do not deviate without updating this file.

- Keyword in title, near the start. One keyword, one page. `frameless shower doors brownsville tx` → `/frameless-shower-doors-brownsville-tx/` only.
- Answer the search in the first lines. Details after.
- Exact-match keyword in URL, title, and H1 of the money page.
- At least 5 internal links to the money page from related pages (nav, hub body, about body, quote body, CTA bands).
- Structured data on every page: LocalBusiness + WebSite (hub), LocalBusiness + Service + FAQPage (money page). Validate before publish.
- Every publishable page goes in `sitemap.xml` the day it ships.
- Real proof only. No invented reviews, galleries, addresses, or phone numbers. Local facts (climate, water hardness, geography) must be true.
- One new page a day at most — new site: closer to one a week. Never bombard.
- Never edit a page changed in the last 90 days. Log every change in LEDGER.md with the date.
- Check a page doesn't already exist before creating one.
- Forms must never leak data: lead endpoint env/config only. Third-party scripts: Google Analytics 4 only (board-approved via TES-36, 2026-11-02), loaded from `analytics.js` with the measurement ID in exactly that one file; no ad scripts, no tracking pixels beyond it. Lead events (`generate_lead`) fire on quote submit, never with form contents.
- Footer keeps the Google Business Profile mention. Swap the link target the day the GBP listing is claimed.
- Mobile-responsive is non-negotiable: every new section must read cleanly at 375px.
- Canonical URLs: relative internal links, absolute canonicals from the single BASE_URL documented in SITE.md.
