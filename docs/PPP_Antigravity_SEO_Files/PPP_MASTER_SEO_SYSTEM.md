# Pack Planner Pro — Master SEO System

## Purpose

This is the single source of truth for all Pack Planner Pro SEO work.

Use it to:
- understand the current strategy, rules, and standards
- apply consistent on-page, technical, and copy rules
- prioritise fixes in the right order using real data
- improve rankings and conversions without creating random extra pages

---

## 1. Product and Site Overview

| Field | Value |
|---|---|
| Product | Pack Planner Pro — Windows desktop app |
| Price | £79 launch offer / £99 standard (one-time, no subscription) |
| Built by | Jennie's Positive Paws |
| Domain | packplannerpro.co.uk |
| Hosting | Vercel (via AntiGravity) |
| Analytics | GA4 — G-DD5MNET36T |
| Search Console | Verified via GA4 tag, sitemap submitted |
| Bing Webmaster | Connected (feeds ChatGPT Search) |
| Payhip buy link | https://payhip.com/b/XylDm |
| Contact email | hello@packplannerpro.co.uk |

### Core positioning (must stay visible everywhere)
- one-time purchase
- no subscription
- offline-first
- Windows desktop
- built for real dog walking and pet care workflows

### Site structure (7 pages)

| URL | Purpose | Priority |
|---|---|---|
| packplannerpro.co.uk/ | Homepage — primary landing page | 1.0 |
| /dog-walking-software-uk | Pillar landing page | 0.9 |
| /dog-walking-software-no-monthly-fee | Differentiator landing page | 0.8 |
| /dog-walking-software-for-sole-traders | Audience landing page | 0.8 |
| /dog-walking-scheduling-software | Feature landing page | 0.7 |
| /pet-care-software | Broad audience landing page | 0.7 |
| /contact.html | Contact page | 0.4 |

### Technical stack
- Static HTML, Tailwind CSS (CDN), Manrope + Inter fonts (Google Fonts)
- Vercel deployment via AntiGravity
- Clean URLs via vercel.json rewrites
- Payhip embedded buy buttons (class `payhip-buy-button`, data-product `XylDm`)
- Logo path: `assits/main_logo.png` (folder name typo is intentional — do not rename)

---

## 2. Target Keywords

### Primary
- dog walking software UK
- dog walker software UK
- dog walking management software
- dog walking scheduling software UK

### Secondary
- dog walker business software UK
- no subscription dog walking software
- buy once dog walking software
- offline dog walking software
- dog walking planner Windows
- affordable dog walking app UK

### Differentiator-led
- one-time purchase dog walking software
- dog walking software no monthly fee
- desktop dog walking software

### Long-tail
- best dog walking software for sole traders UK
- dog walking software without subscription
- dog walking invoicing software UK
- dog walker client management software

Use both app and software language where natural. Do not build a separate app page unless Search Console proves demand.

---

## 3. Current SEO Scores (as of 5 April 2026)

| Metric | Score | Target |
|---|---|---|
| Seobility overall | 86% | 90%+ |
| Meta information | 92% | 95%+ |
| Page quality | 90% | 95%+ |
| Page structure | 95% | 95%+ |
| Server | 100% | 100% |
| SEO (PageSpeed) | 100% | 100% |
| External factors | 3% | Growing via directory listings |

### PageSpeed (homepage)

| Metric | Desktop | Mobile | Target |
|---|---|---|---|
| Performance | 77 | 57 | 90+ / 80+ |
| FCP | 1.7s | 8.9s | Under 1.8s |
| LCP | 2.8s | 9.0s | Under 2.5s |
| TBT | 0ms | 0ms | Under 200ms |
| CLS | 0.003 | 0.005 | Under 0.1 |

Known performance bottlenecks:
- Tailwind CDN (123 KiB unused JavaScript) — must stay in `<head>`, cannot move to body
- Images not yet converted to WebP (1,330 KiB saving available)
- Cache headers not yet set in vercel.json

---

## 4. On-Page SEO Standards

### Meta title format
`[Primary Keyword] | Pack Planner Pro — [Differentiator]`

Current homepage: `Dog Walking Software UK | Pack Planner Pro — Buy Once` (55 chars)

Rules:
- Under 60 characters
- Primary keyword first
- Brand name included
- Differentiator (Buy Once / No Subscription) where space allows

### Meta description formula
Pain → Solution → Differentiator → CTA

Current homepage: `Still paying monthly for dog walking software? Pack Planner Pro is a one-time £79 Windows app for UK dog walkers. Manage clients, schedules and invoices. No subscription ever.`

Rules:
- Under 155 characters
- Lead with the pain
- Price (£79) mentioned where possible
- "No subscription" or equivalent included
- Soft CTA at end

### H1 rules
- One per page
- Contains primary keyword naturally
- Written for humans first
- Homepage H1: `Stop paying monthly for software you'll never own.`

### H2 rules
- Logical hierarchy, no skipped levels
- At least one H2 must contain a keyword variant
- Question-based H2s increase featured snippet probability
- At minimum one H2 with "no subscription" or "no monthly fee" phrasing

### Answer capsule (GEO critical)
Every page must have a direct definition in the first 60 visible words.

Homepage capsule: `Pack Planner Pro is a Windows desktop app for UK dog walkers and dog trainers. One-time purchase of £79 — no subscription, no monthly fees, no account needed.`

### Problem section standard
All pages must use this pattern:

```html
<span style="color:#C0392B;">The Problem With Most Dog Walking Software</span>
<h2>You are paying monthly for software you will never own.</h2>
```

Cards: "The bill never stops" / "Your data is on their servers" / "Features locked behind tiers"

---

## 5. Schema Markup

### SoftwareApplication (homepage)
```json
{
  "@type": "SoftwareApplication",
  "name": "Pack Planner Pro",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Windows",
  "url": "https://packplannerpro.co.uk",
  "offers": {
    "@type": "Offer",
    "price": "79",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  }
}
```

### FAQPage
12 questions on homepage covering: one-time purchase, Windows, who it's for, offline use, comparison to subscriptions, trainers, small teams, data storage, mobile groomers, calendar export, email schedules.

Always add FAQPage schema to every blog post.

### Also present on homepage
- Organization schema
- BreadcrumbList schema

### Blog post schema template
```json
{
  "@type": "BlogPosting",
  "author": { "@type": "Person", "name": "Jennie" },
  "publisher": { "@type": "Organization", "name": "Pack Planner Pro", "url": "https://packplannerpro.co.uk" }
}
```

---

## 6. GEO / AI Search Optimisation

### Quotable sentences (must appear verbatim or close-to on every page)
- "Pack Planner Pro is a Windows desktop app for dog walkers and pet care professionals. It is a one-time purchase — no subscription, no monthly fees."
- "Unlike most dog walking apps that charge monthly, Pack Planner Pro costs £79 at launch, with no ongoing fees."
- "Pack Planner Pro works offline, requires no account, and is built specifically for sole trader dog walkers in the UK."

### GEO tactics in place
- FAQPage schema (12 questions)
- Answer capsule in first 60 words
- Comparison angles ("Unlike subscription-based...")
- Direct definition sentence
- GPTBot and PerplexityBot allowed in robots.txt
- Bing Webmaster Tools connected (feeds ChatGPT Search)

### Platform status

| Platform | Status |
|---|---|
| Google AI Overviews | Fed by Google top-10 rankings — strong SEO is the strategy |
| ChatGPT Search | Fed by Bing — Bing Webmaster Tools connected |
| Perplexity | Rewards short declarative statements — present in content |
| Google Gemini | Cites Reddit/Medium — future: build presence on third-party platforms |

---

## 7. Technical SEO Rules

### Files that must not be broken
- `robots.txt` — must allow GPTBot, PerplexityBot, contain correct sitemap URL
- `sitemap.xml` — all 7 URLs, correct domain, submitted to GSC and Bing
- `vercel.json` — contains clean URL rewrites for 5 landing pages

### vercel.json (DO NOT REMOVE REWRITES)
```json
{
  "rewrites": [
    { "source": "/dog-walking-software-uk", "destination": "/dog-walking-software-uk.html" },
    { "source": "/dog-walking-software-no-monthly-fee", "destination": "/dog-walking-software-no-monthly-fee.html" },
    { "source": "/dog-walking-software-for-sole-traders", "destination": "/dog-walking-software-for-sole-traders.html" },
    { "source": "/dog-walking-scheduling-software", "destination": "/dog-walking-scheduling-software.html" },
    { "source": "/pet-care-software", "destination": "/pet-care-software.html" }
  ]
}
```

WARNING: Do not add `redirects` for www to non-www in vercel.json — this caused a site outage previously. Google handles the canonical via `<link rel="canonical">`.

### Canonical tag
All pages use non-www canonical: `https://packplannerpro.co.uk`

### HTML performance rules
- Tailwind CDN must stay in `<head>` — moving it to `</body>` causes CLS of 0.835 and breaks layout
- The `tailwind.config` script must always follow the CDN script, not precede it
- Google Fonts use async preload pattern with noscript fallback
- Nav logo: `fetchpriority="high"` and explicit `width="120" height="40"`
- Footer logo: `loading="lazy"` and explicit `width="96" height="32"`
- Favicon: `<link rel="icon" type="image/png" href="/assits/main_logo.png"/>`

### Technical consistency — keep these aligned
- canonical host
- public routes (one contact route only: `/contact.html`)
- sitemap
- OG URLs
- schema URLs
- internal links

Do not mix `.co.uk` and `.com`. Do not mix `/contact` and `/contact.html`.

### Remaining performance work
- Convert `assits/main_logo.png` to WebP using squoosh.app, use `<picture>` element
- Add cache headers to vercel.json (max-age=31536000 for assets)
- Tailwind CLI build (removes 123 KiB) — requires Vercel build step, do last

---

## 8. Copy Rules

- UK English throughout — £ not $, behaviour not behavior
- No em dashes — use commas or colons instead
- Banned phrases: revolutionary, game-changing, seamless, cutting-edge, next-level
- Preferred phrases: purpose-built, one-time, yours to keep, works offline, no account needed, no subscription
- Tone: calm, confident, practical — never hyped
- Price always shown as £79 (launch) with £99 (standard) where space allows
- "No subscription" stated explicitly on every page

---

## 9. Strategic Rules

1. Refresh existing pages before creating new ones
2. Use first-party data before opinion
3. Pages must have distinct intent — no keyword clones
4. Conversion matters as much as ranking
5. Keep PPP positioning visible on every page

---

## 10. Priority Phases

### Phase 1 — Measurement baseline
1. Mark GA4 key events: `begin_checkout`, `ppp_purchase_click`, `generate_lead`
2. Confirm realtime tracking works
3. Confirm events are flowing after live actions

Do not mark micro events as key events. Success: GA4 can show commercial actions by landing page and channel.

### Phase 2 — Technical consistency
1. Contact route split (one public route only)
2. Canonical host consistency
3. OG image path
4. Sitemap and metadata alignment
5. Schema URL alignment

### Phase 3 — CTR improvements
Target pages already getting impressions:
1. `/dog-walking-software-no-monthly-fee`
2. `/dog-walking-software-uk`
3. `/dog-walking-software-for-sole-traders`

Improve: title tag, meta description, first screen clarity, click reason, differentiation.

If a page ranks positions 4 to 15 with poor clicks, treat this as a snippet and positioning job before a ranking job.

### Phase 4 — Page quality and conversion
Review every core page using: Page Quality, Needs Met, Experience, Expertise, Authoritativeness, Trustworthiness, UX.

Apply sales structure: 1. problem / 2. who it is for / 3. solution / 4. how it works / 5. proof / 6. pricing / 7. FAQ / 8. CTA

### Phase 5 — Internal linking and FAQ layer
- Add better internal links between commercial pages
- Add FAQ sections that reflect real search language
- Priority FAQ themes: no subscription, offline, sole traders, Windows, cost

### Phase 6 — Expansion only when justified
Only build new pages when all three are true:
1. Search Console shows repeat demand
2. Intent is genuinely distinct
3. Page can be made genuinely useful

---

## 11. Page-Specific Needs

### Homepage
- Stronger 5-second clarity
- Clearer explanation of what the product actually is
- Stronger differentiation from subscription tools
- One dominant CTA path
- Clearer proof and trust signals

### /dog-walking-software-uk
- Stronger proof
- Stronger relevance signals
- App and software language together
- FAQs around broad commercial intent

### /dog-walking-software-no-monthly-fee
- Stronger CTR (currently underperforming impressions)
- Stronger savings framing
- Direct comparison language
- Objection handling near pricing
- "No subscription" and "no monthly fee" language together

### /dog-walking-software-for-sole-traders
- Stronger ICP-specific first screen
- No per-user fee clarity
- Simplicity and control framing
- FAQs that reduce fear around complexity

### /dog-walking-scheduling-software
- Clearer scheduling problem framing
- Practical workflow explanation
- Screenshots
- Scheduling-specific FAQs
- Stronger proof of weekly planning and calendar export

### /pet-care-software
- Clearer angle
- Stronger differentiation from homepage
- Decision needed: stay broad or narrow

---

## 12. Page Audit Framework

**URL:**
**Target keyword:**
**Intent type:** Transactional | Commercial Investigation | Informational | Navigational

**Scores**
- Page Quality:
- Needs Met:
- Experience:
- Expertise:
- Authoritativeness:
- Trustworthiness:
- UX:

**Key issues**
**Quick wins**
**Deep fixes**
**Content gaps**

**Decision rules**
- PQ < 5: rewrite or rebuild before optimisation
- NM < 6: fix intent match first
- Trust < 6: add real proof before pushing more traffic
- Experience < 6: add screenshots, real use cases, workflow examples
- UX < 6: fix structure and CTA visibility before adding more copy

---

## 13. Conversion Rules

Every page must quickly answer:
- what is this
- who is it for
- why is it better or different

Core conversion principles:
- lead with customer pain, not company intro
- show price model early
- keep one dominant CTA
- put proof near decision points
- reduce uncertainty with a simple process
- use real screenshots and real examples
- keep FAQs close to pricing and buying decisions

---

## 14. Blog Content Plan

### First 6 posts (publish in order)
1. How to organise your dog walking schedule
2. Dog walking invoicing — how to invoice clients properly
3. Moving from spreadsheets to proper dog walking software
4. The best dog walking software for UK sole traders in 2026
5. How to manage dog walking clients without losing your mind
6. How to start a dog walking business in the UK in 2026

### Every blog post must include
- Opening answer capsule (first 60 words — direct answer for AI citation)
- Jennie's real experience in first person
- At least one original data point from the actual business
- FAQ section (4 to 6 questions) with FAQPage schema
- Natural contextual link to Pack Planner Pro
- BlogPosting schema + FAQPage schema in head
- Internal link to at least one landing page

---

## 15. Directory Listings

| Directory | Status | Notes |
|---|---|---|
| Bing Places | Done | Feeds ChatGPT Search |
| Capterra | Pending | Covers Software Advice, GetApp, UpCity |
| G2 | Pending | Dominant platform, acquired Capterra Feb 2026 |
| Yell | Pending | DA 78, UK heavyweight |
| Trustpilot | Pending | Start collecting reviews early |
| AlternativeTo | Pending | "alternative to subscription software" searches |
| Thomson Local, FreeIndex, Hotfrog, Brownbook | Pending | Secondary UK directories |

---

## 16. Weekly Workflow

1. Check latest Search Console data
2. Check latest GA4 data
3. Identify pages in positions 4 to 15
4. Identify pages with impressions but weak CTR
5. Decide whether the issue is: snippet / intent / trust / proof / UX
6. Create one focused improvement brief
7. Apply improvements to the highest-impact page first
8. Save output in markdown

Do one main workflow at a time. Approved workflow types:
- monthly review
- competitor review
- page refresh brief
- technical audit
- title and CTR pass
- new page decision

---

## 17. Monthly SEO Report

Say **run monthly SEO report** and share the Search Console export or Looker Studio link.

Report covers:
- Organic sessions vs prior month
- Impressions vs prior month
- CTR trends by page and query
- Position changes for target keywords
- Queries in position 11 to 20 (quick win opportunities)
- Pages with high impressions and low CTR (rewrite candidates)
- Conversion events

---

## 18. Output Standards

Every useful task must create a saved markdown file:
- monthly report
- page refresh brief
- technical audit note
- title rewrite sheet
- competitor note
- action queue update

Do not leave valuable work only in chat.

---

## 19. Success Criteria

The system is working when:
- key events show in GA4
- CTR improves on ranking pages
- page 2 pages move towards page 1
- near-page-1 pages gain clicks
- conversions become measurable
- fewer but stronger pages outperform weaker expansion

---

## 20. If No Specific Task Is Given

Run this default flow:
1. Find the page with real impressions and position 4 to 15
2. Improve the title and meta
3. Improve the first screen
4. Add proof
5. Add FAQ and trust signals
6. Measure what changed
