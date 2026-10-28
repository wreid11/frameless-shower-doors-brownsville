# HANDOFF.md — Frameless Shower Doors Brownsville

**Last updated:** 2026-10-28 (**LIVE ON VERCEL** — migrated from GitHub Pages via board-provided Vercel token)

## Shipped
- 4 pages live: `/`, `/frameless-shower-doors-brownsville-tx/`, `/get-a-quote/`, `/about/`
- Schema: LocalBusiness on all pages, Service + FAQPage on money page (single `@graph`), WebSite on hub
- `sitemap.xml` + `robots.txt`, mobile-responsive, GBP footer mention
- Quote form: client-side validation; posts JSON to `LEAD_ENDPOINT` when set; otherwise one-click pre-filled email fallback (nothing silently lost)
- 2026-10-28: TES-11 approved copy committed (`63e0d87`), pushed, and **verified live** on GitHub Pages — exact-match money-page H1, $900–$5,000+ honest price ranges, FAQ + FAQPage in sync

## Live URL
- **https://showerdoorsbrownsville.com/** (Vercel, production, main branch — migrated 2026-10-28, deploy of commit `83c8ff9`)
- Canonicals, `sitemap.xml`, `robots.txt`, and schema `@id`s all point at the Vercel host
- GitHub Pages still serves with cross-host canonicals (harmless; search engines yield to the canonical host)
- Vercel project: `frameless-shower-doors-brownsville`; SSO deployment protection disabled project-wide (it was serving `x-robots-tag: noindex`)
- **Deploy note:** pushes to `main` do NOT auto-deploy (Vercel GitHub webhook not installed on the repos) — redeploy via Vercel dashboard "Redeploy" or the API

## Waiting on decisions
1. **Lead endpoint:** operator to set the form delivery (Formspree/FormSubmit email, or Vercel function + webhook). 15-minute task; until then submissions use the email fallback.
2. **Domain:** buy exact-match domain (~$11/yr, e.g. `framelessshowerdoorsbrownsville.com`) and point it at the site. Then: attach it in Vercel, one-pass canonical/sitemap swap, redeploy.
3. **Exclusive lead buyer:** sales side — first 3 leads free to lock in a contractor at $150–200/mo (Koerner-validated city per research synthesis).
4. **GBP claim:** create/claim Google Business Profile for the brand; swap footer link; add listing URL to SITE.md.

## Next actions (in order)
1. Wire lead endpoint (operator, 15 min)
2. Submit sitemap to Google Search Console + Brave on the final domain (agent, day of domain live)
3. 90 days: first GSC review — quick wins only, per RULES.md pace
