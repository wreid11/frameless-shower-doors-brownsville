# HANDOFF.md — Frameless Shower Doors Brownsville

**Last updated:** 2026-10-28 (TES-11 copy live on GH Pages; Composio chosen for Vercel — app authorization pending)

## Shipped
- 4 pages live: `/`, `/frameless-shower-doors-brownsville-tx/`, `/get-a-quote/`, `/about/`
- Schema: LocalBusiness on all pages, Service + FAQPage on money page (single `@graph`), WebSite on hub
- `sitemap.xml` + `robots.txt`, mobile-responsive, GBP footer mention
- Quote form: client-side validation; posts JSON to `LEAD_ENDPOINT` when set; otherwise one-click pre-filled email fallback (nothing silently lost)
- 2026-10-28: TES-11 approved copy committed (`63e0d87`), pushed, and **verified live** on GitHub Pages — exact-match money-page H1, $900–$5,000+ honest price ranges, FAQ + FAQPage in sync

## Live URL
- https://wreid11.github.io/frameless-shower-doors-brownsville/ (GitHub Pages, main branch)
- Vercel migration: board chose **Composio** as the connection provider; Composio channel is connected, but **Vercel app authorization inside Composio is not yet verified** — migration starts once that gate clears

## Waiting on decisions
1. **Vercel app authorization:** human to authorize Vercel inside Composio (OAuth) or grant the agent's connection tools access. After it clears: import both repos, set subdomains, update BASE_URL canonicals + sitemap (one find/replace), redeploy.
2. **Lead endpoint:** operator to set the form delivery (Formspree/FormSubmit email, or Vercel function + webhook). 15-minute task; until then submissions use the email fallback.
3. **Domain:** buy exact-match domain (~$11/yr, e.g. `framelessshowerdoorsbrownsville.com`) and point it at the site. Recommended before content push.
4. **Exclusive lead buyer:** sales side — first 3 leads free to lock in a contractor at $150–200/mo (Koerner-validated city per research synthesis).
5. **GBP claim:** create/claim Google Business Profile for the brand; swap footer link; add listing URL to SITE.md.

## Next actions (in order)
1. Vercel app authorization (human, in Composio) → URL swap + import (agent, 10 min)
2. Wire lead endpoint (operator, 15 min)
3. Submit sitemap to Google Search Console + Brave on the final domain (agent, day of domain live)
4. 90 days: first GSC review — quick wins only, per RULES.md pace
