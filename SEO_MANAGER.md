# Pack Planner Pro SEO Manager

This file is the live SEO operating manual for Pack Planner Pro.

Use it for three things:
- keep strategy and brand-safe SEO rules in one place
- track what the site is actually doing in Search Console and GA4
- maintain a current action queue for updates that should be made next

This document should be updated whenever:
- the site structure changes
- canonical or routing rules change
- metadata strategy changes
- monthly Search Console or GA4 data is reviewed
- major search trends change

## 1. Site Snapshot

| Field | Value |
|---|---|
| Product | Pack Planner Pro |
| Product type | Windows desktop app for dog walkers and pet care professionals |
| Pricing | GBP 79 launch offer / GBP 99 standard |
| Built by | Jennie's Positive Paws |
| Canonical host | `https://www.packplannerpro.co.uk` |
| Hosting | Vercel |
| Checkout | Payhip |
| Contact route | `/contact` |
| Analytics | GA4 tag installed |
| Search Console | Connected |

## 2. Current Page Set

| URL | Purpose | Priority |
|---|---|---|
| `/` | Homepage | 1.0 |
| `/dog-walking-software-uk` | Pillar landing page | 0.9 |
| `/dog-walking-software-no-monthly-fee` | Differentiator landing page | 0.8 |
| `/dog-walking-software-for-sole-traders` | Audience landing page | 0.8 |
| `/dog-walking-scheduling-software` | Feature landing page | 0.7 |
| `/pet-care-software` | Broad audience landing page | 0.7 |
| `/contact` | Contact page | 0.4 |

## 3. Stable SEO Rules

### Canonicals and URLs
- Use `https://www.packplannerpro.co.uk/...` everywhere for canonical URLs, `og:url`, sitemap entries, and schema URLs.
- Keep clean public routes:
  - `/contact`
  - `/dog-walking-software-uk`
  - `/dog-walking-software-no-monthly-fee`
  - `/dog-walking-software-for-sole-traders`
  - `/dog-walking-scheduling-software`
  - `/pet-care-software`

### Technical guardrails
- Do not remove the Vercel rewrites for clean URLs.
- Do not break the apex-to-`www` redirect in `vercel.json`.
- Keep `robots.txt`, `sitemap.xml`, and `vercel.json` aligned with the live `www` canonical.
- This repo now uses static Tailwind CSS from `/styles/tailwind.css`, not the old browser Tailwind CDN runtime.
- Keep explicit image dimensions where already present.
- Keep favicon files:
  - `/favicon.png`
  - `/favicon-32x32.png`
  - `/apple-touch-icon.png`

### Copy rules
- Use UK English.
- Keep tone calm, practical, and specific.
- Avoid hype terms like `revolutionary`, `game-changing`, `cutting-edge`, `seamless`.
- Preferred themes:
  - one-time purchase
  - no subscription
  - works offline
  - Windows desktop app
  - built for UK dog walkers and pet care professionals

### On-page rules
- One H1 per page.
- Keep titles under about 60 characters where practical.
- Keep meta descriptions under about 155 characters where practical.
- Mention the differentiator clearly:
  - one-time purchase
  - no subscription / no monthly fee
  - works offline
- Use FAQ schema where a page includes a real FAQ section.

## 4. Keyword Focus

### Primary
- dog walking software UK
- dog walker software UK
- dog walking management software
- dog walking scheduling software UK

### Secondary
- no subscription dog walking software
- dog walking software no monthly fee
- dog walking software for sole traders
- pet care software UK
- offline dog walking software
- one-time purchase dog walking software

## 5. Current Technical Status

### Confirmed live setup
- Canonicals use `www`
- Sitemap uses `www`
- `/contact` resolves correctly
- Speed Insights script is present
- Static Tailwind CSS is in place
- Payhip script is delayed
- Static asset cache headers are present in `vercel.json`

### Current performance reality
- Desktop is healthy enough
- Mobile is the weak area
- Biggest remaining issues are general page heaviness, image optimisation, and homepage JS/layout complexity
- There is no major Vercel dashboard toggle still missing that is likely to unlock a large speed win

## 6. Data Review Workflow

Once per month:
1. Export Search Console data for the last 28 days
2. Export GA4 landing-page and acquisition data for the same period
3. Drop the files into:
   - `data/search-console/`
   - `data/ga4/`
4. Update `SEO_MONTHLY_REPORT.md`
5. Update the action queue below
6. Apply the highest-value changes first

## 7. Monthly Decision Rules

Use the data to prioritise work in this order:

1. High impressions + low CTR
- rewrite titles and meta descriptions first

2. Position 8 to 20 queries
- improve on-page relevance, headings, FAQs, and internal links

3. Pages with traffic but weak engagement
- improve answer clarity, screenshots, structure, and CTA placement

4. New query themes appearing repeatedly
- create new sections or new pages only when the pattern is repeated, not from one-off terms

5. Authority gap
- continue directory listings, mentions, reviews, and backlinks

## 8. 2026 Trend Priorities

### Highest-priority rules
- Treat normal SEO as the foundation for AI visibility.
- Keep important facts in visible text, not only in visuals, widgets, or scripts.
- Keep schema aligned with visible copy.
- Prioritise clarity, freshness, entity consistency, and measurement over trend-chasing.

### What matters most right now
1. clarity of the offer and differentiators
2. consistent brand/entity signals
3. monthly data review from Search Console and GA4
4. stronger authority through mentions, citations, and backlinks
5. content expansion only after repeated query patterns appear

### What not to prioritise
- `llms.txt` as a major ranking lever
- generic "GEO hacks" without evidence
- mass AI content for its own sake
- technical gimmicks before fixing titles, CTR, internal linking, and clarity

## 9. AI Visibility and Crawler Policy

### Core rule
- Do not treat AI search as a separate channel that overrides SEO fundamentals.

### Visibility policy
- Keep pages crawlable and indexable.
- Keep important commercial facts in plain text:
  - one-time purchase
  - no subscription
  - works offline
  - Windows desktop app
  - built for UK dog walkers and pet care professionals
- Keep structured data consistent with visible page content.
- Do not accidentally block useful AI search crawlers if future bot rules are edited.

### Crawler notes
- `OAI-SearchBot` matters for ChatGPT search visibility.
- `GPTBot` is a separate training-related crawler.
- Anthropic uses separate crawler/user/search bot patterns.
- Any future robots changes should be reviewed for both normal search and AI search effects.

## 10. Tool Stack and Reporting

### Primary data tools
- Google Search Console
- GA4

### Add when useful
- Bing Webmaster Tools, including AI Performance reporting
- Looker Studio for combined Search Console and GA4 reporting

### Why this matters
- rankings alone are not enough
- monthly reporting should track clicks, impressions, CTR, position, engagement, and conversion signals together

## 11. Monthly AI Visibility Checklist

Use this alongside the normal monthly SEO review:

1. Check Search Console for new high-impression queries
2. Check for pages with weak CTR
3. Check for repeated new query themes
4. Check GA4 for weak-engagement landing pages
5. Review whether entity signals changed:
   - social links
   - citations
   - mentions
   - reviews
6. If available, review Bing AI Performance data
7. Spot-check key commercial queries in major AI products when useful

## 12. Action Queue

### High priority
- Keep monitoring homepage mobile performance after major edits
- Review Search Console once there is one full month of data
- Identify pages with impressions but weak CTR
- Keep the homepage and key landing pages fact-dense and easy for AI systems to summarise

### Medium priority
- Optimise large screenshots in `assits/`
- Add more evidence-driven content once query data is available
- Start structured monthly reporting from Search Console and GA4 exports
- Add Bing Webmaster Tools review once the site has enough data to make it useful

### Low priority
- Expand blog/content clusters after real query patterns appear
- Review Vercel Web Analytics if enabled later

## 13. Update Log

### 2026-04-07
- Canonicals standardised to `https://www.packplannerpro.co.uk`
- Sitemap aligned to `www`
- `/contact` rewrite fixed
- Homepage meta description tightened
- Facebook profile added to structured data
- Speed Insights added to contact page
- Tailwind browser runtime replaced with static CSS
- Payhip loading delayed
- favicon assets reduced substantially in size
- Added 2026 AI-search and SEO operating guidance
