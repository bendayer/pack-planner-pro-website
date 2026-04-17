# Pack Planner Pro SEO Manager

This file is the live SEO operating manual for Pack Planner Pro.

Use it for three things:
- keep Pack Planner Pro's search strategy, technical guardrails, and page priorities in one place
- turn Search Console, GA4, and customer-language signals into repeatable monthly actions
- make future SEO work produce saved outputs, not just one-off chats

This system is adapted from the stronger operating model used in the JPP rebuild, but rewritten for a UK software product rather than a local service business.

The key lessons worth keeping were:
- separate strategy from operating protocol
- always check the latest saved outputs before doing new work
- split SEO into clear modules instead of one vague review
- save human-readable outputs every time
- use first-party data before opinions

## 1. What This System Should Produce

Every full Pack Planner Pro SEO review cycle should create or update these outputs:

1. Monthly SEO report
- high-level summary for Search Console, GA4, and technical movement

2. Keyword and page opportunity queue
- queries, pages, and themes currently nearest to commercial wins

3. Page refresh briefs
- what to add, remove, or improve on specific landing pages

4. Competitor and SERP notes
- who is ranking for target UK software queries and what they are doing better

5. Technical SEO action log
- canonical, sitemap, metadata, schema, asset, and crawl issues that need fixing

6. Content and expansion decisions
- whether to refresh an existing page, expand a section, or build a new landing page

7. Conversion uplift actions
- changes that should increase enquiries and purchases from existing traffic

## 2. Site Snapshot

| Field | Value |
|---|---|
| Brand | Pack Planner Pro |
| Business type | Windows desktop dog walking software |
| Core offer | One-time purchase software for dog walkers, dog trainers, and pet care businesses |
| Primary market | United Kingdom |
| Product model | Desktop app, offline-first, no subscription |
| Canonical host | `https://packplannerpro.co.uk` until a deliberate host migration is completed |
| Current contact route in repo | `contact.html` |
| Preferred long-term public route | `/contact` only if redirects, canonicals, sitemap, and internal links are updated together |
| Analytics | GA4 present |
| Search Console | Expected, but exports are not yet stored in this repo |
| Current owner entity in markup | `Jennie's Positive Paws` |

## 3. Session Start Protocol

At the start of any Pack Planner Pro SEO session:

1. Read this file first.
2. Read the latest:
- `docs/seo/SEO_MONTHLY_REPORT.md`
- `docs/seo/SEO_PAGE_ACTIONS.md`
- `docs/seo/KEYWORD_ROADMAP.md`
- any recent reports in `reports/monthly/` and `reports/ad-hoc/`
3. Check whether new files have been dropped into:
- `data/search-console/`
- `data/ga4/`
- `data/customer-voice/`
4. Only then choose the workflow:
- monthly review
- competitor review
- page refresh brief
- technical audit
- new page decision
- title and CTR pass

Rule:
- downstream tasks must use the latest saved report, not memory alone

## 4. Folder Structure

Use this structure inside this repo:

```text
data/
  search-console/
  ga4/
  customer-voice/
reports/
  monthly/
  ad-hoc/
content-briefs/
docs/seo/SEO_MANAGER.md
docs/seo/SEO_AGENT_PROTOCOL.md
docs/seo/SEO_MONTHLY_REPORT.md
docs/seo/SEO_PAGE_ACTIONS.md
docs/seo/KEYWORD_ROADMAP.md
```

### File placement rules

- raw Search Console exports go into `data/search-console/`
- raw GA4 exports go into `data/ga4/`
- review snippets, sales objections, enquiry themes, and customer language go into `data/customer-voice/`
- finished monthly reviews go into `reports/monthly/`
- one-off investigations, SERP notes, title rewrite sheets, and technical audits go into `reports/ad-hoc/`
- page briefs go into `content-briefs/`

### Naming convention

Use:
- `search-console-queries-YYYY-MM-DD.csv`
- `search-console-pages-YYYY-MM-DD.csv`
- `ga4-landing-pages-YYYY-MM-DD.csv`
- `customer-voice-notes-YYYY-MM-DD.md`
- `monthly-seo-report-YYYY-MM.md`
- `dog-walking-software-uk-refresh-YYYY-MM-DD.md`

## 5. Pack Planner Pro SEO Modules

### Module 1: Opportunity Review
Purpose:
- find the queries and pages closest to commercial wins

Main inputs:
- Search Console queries
- Search Console pages

What to look for:
- positions 4 to 15 opportunities
- high impressions and weak CTR
- repeated modifiers like `UK`, `no monthly fee`, `sole traders`, `Windows`, `offline`, `scheduling`
- signs of cannibalisation between similar landing pages

Main output:
- refresh list, title rewrite list, new-page candidates

### Module 2: Competitor Review
Purpose:
- understand who is outranking Pack Planner Pro and why

Main inputs:
- top commercial queries
- live SERP review
- competitor landing pages

What to look for:
- clearer positioning
- stronger feature proof
- better comparison framing
- stronger pricing clarity
- richer FAQs
- better internal linking
- more specific screenshots and trust signals

Main output:
- concise competitor notes and specific fixes

### Module 3: Landing Page Review
Purpose:
- judge whether organic traffic is landing on the right page and whether that page matches intent

Main inputs:
- GA4 landing pages
- Search Console page performance

What to look for:
- pages drawing impressions but not clicks
- pages getting traffic but weak conversion intent
- overlapping pages with weak differentiation
- missing proof, screenshots, FAQs, or CTA clarity

Main output:
- page UX, copy, and conversion improvement list

### Module 4: Technical Audit
Purpose:
- keep the site technically clean before stronger indexing pushes

Main inputs:
- local HTML files
- robots
- sitemap
- metadata
- schema
- asset paths

What to look for:
- canonical host drift
- mixed public routes such as `/contact` versus `/contact.html`
- missing or broken OG image paths
- sitemap URLs that do not match canonical intent
- schema URLs that do not match real public URLs

Main output:
- a dated technical action note plus any direct code fixes

### Module 5: Content and Expansion Planner
Purpose:
- decide whether to refresh, expand, or create

Decision rule order:
1. refresh an existing ranking page
2. strengthen page differentiation and internal links
3. expand a section that already has impressions
4. only then create a new landing page

For Pack Planner Pro, this matters because:
- the current site already has a solid commercial page set
- too many near-duplicate software pages can dilute signals
- most wins should come from sharpening intent and fixing technical consistency first

### Module 6: Conversion Review
Purpose:
- increase the percentage of visitors who enquire or buy once they land on the page

Main inputs:
- live page copy
- CTA wording
- page structure
- testimonials and proof
- contact-page friction
- customer objections and sales questions

What to look for:
- weak above-the-fold clarity
- pages that lead with the business instead of the customer's problem
- generic CTA copy
- missing trust signals near buying decisions
- pricing or product-fit friction
- pages that explain features before explaining why they matter

Main output:
- conversion-focused copy and structure improvements

### Module 7: Page Quality Audit (E-E-A-T Framework)

Purpose:
- score each landing page against the same criteria Google uses to judge page quality
- produce a consistent, comparable audit output for every page
- give a clear decision on what to fix and in what order

This module is adapted from the Google Quality Rater framework. Use it when doing a deep review of any commercial or landing page, not a quick title pass.

#### Scoring dimensions

Score each on a 1–10 scale.

**Page Quality (PQ)**
Does the page deliver genuinely useful, accurate information for its claimed intent?
- 1–4: thin, generic, or misleading
- 5–7: relevant but missing proof, depth, or clarity
- 8–10: clearly the best answer for this intent

**Needs Met (NM)**
Does the page satisfy what someone searching for this query actually wants to find?
- 1–5: wrong intent match or too vague
- 6–7: roughly matches but misses key sub-intents
- 8–10: answers the query directly and completely

**E-E-A-T**

| Dimension | What it means for Pack Planner Pro | Score 1–10 |
|---|---|---|
| Experience | Real product screenshots, real workflow examples, real-world use cases from actual dog walkers | — |
| Expertise | Business knowledge specific to dog walking and pet care — not generic SaaS copy | — |
| Authoritativeness | Clear brand identity, consistent product name and positioning, citations or references where relevant | — |
| Trustworthiness | Contact details visible, privacy policy linked, pricing transparent, no dark patterns | — |

**UX**
Can a visitor quickly understand what the page is about, who it is for, and what to do next?
- 1–4: confusing layout, buried CTA, slow or broken elements
- 5–7: functional but not optimised
- 8–10: clear 5-second scan test pass, CTA visible above the fold

#### Per-page audit output format

Use this template for every page audited under this module.

```
URL: /page-slug
Target keyword: primary keyword here
Intent type: Informational | Transactional | Commercial Investigation | Navigational

Scores:
- Page Quality (PQ): X/10
- Needs Met (NM): X/10
- Experience: X/10
- Expertise: X/10
- Authoritativeness: X/10
- Trustworthiness: X/10
- UX: X/10

Key issues:
- issue 1
- issue 2

Quick wins (no new content needed):
- fix 1
- fix 2

Deep fixes (copy, structure, or proof needed):
- fix 1
- fix 2

Content gaps:
- what is present elsewhere in the SERP that this page is missing
```

#### Decision logic

Apply these rules in order after scoring:

1. If PQ < 5 → rewrite the page before any other optimisation
2. If NM < 6 → fix intent match first — right audience, right problem framing — before adding content
3. If Trustworthiness < 6 → add real proof before driving more paid or organic traffic to the page
4. If Experience < 6 → add real screenshots, workflow walkthroughs, or specific use cases
5. If UX < 6 → fix structure and CTA visibility before tackling content depth
6. If all scores are 6+ → move to keyword and copy optimisation (Phase 1 actions)

#### Intent classification rule

Classify the page's primary intent before scoring:

- **Transactional** — visitor wants to buy or try now (homepage, no-monthly-fee, sole-traders)
- **Commercial Investigation** — visitor is comparing options before buying (best-of, comparison, no-subscription)
- **Informational** — visitor wants to understand something (blog posts, FAQ pages)
- **Navigational** — visitor already knows the brand and wants to find it (contact, privacy)

If the page's content does not match its intent classification, Needs Met will always be low regardless of copy quality.

#### Red flags for Pack Planner Pro specifically

These are the most common quality gaps in small software product sites. Check for all of them.

- Generic SaaS copy that could describe any software product — no dog walking specificity
- Feature bullets without proof that the feature works or is genuinely useful
- No real product screenshots on a transactional page
- Pricing buried or hard to find
- No testimonials, case studies, or named users
- No trust signals near the buy button
- FAQ section that does not address real comparison or objection queries
- Intent mismatch — scheduling page used to push broad "best software" traffic

#### Keyword optimisation checklist

Run this after E-E-A-T scoring passes. Only do keyword work on pages with PQ ≥ 6 and NM ≥ 6.

- Primary keyword appears in the title tag
- Primary keyword appears in the H1
- Primary keyword or close variant appears in the first 100 words of visible copy
- Meta description reflects the page intent, not just the brand name
- 2–5 relevant internal links from this page to related commercial pages
- At least one inbound internal link from another page pointing here
- FAQ section uses real search query phrasing, not invented questions

## 6. Current Page Set

### Core pages

| URL or file | Purpose | Priority |
|---|---|---|
| `/` via `index.html` | Homepage and main commercial page | 1.0 |
| `/contact` or `/contact.html` via `contact.html` | Enquiry and support page | 0.9 |

### Commercial landing pages

| URL or file | Primary intent | Priority |
|---|---|---|
| `/dog-walking-software-uk` | Broad UK commercial term | 0.95 |
| `/dog-walking-software-no-monthly-fee` | Price-model and comparison intent | 0.9 |
| `/dog-walking-software-for-sole-traders` | ICP-specific intent | 0.85 |
| `/dog-walking-scheduling-software` | Feature-led scheduling intent | 0.8 |
| `/pet-care-software` | Broader category term | 0.75 |

## 7. Stable SEO Rules

### Canonicals and URLs
- Use `https://packplannerpro.co.uk/...` everywhere for canonical URLs, `og:url`, sitemap entries, and schema URLs unless a host migration is deliberately approved.
- Do not mix `.co.uk` and `.com` in live metadata.
- Do not mix `/contact` and `/contact.html` in public signals. Pick one public route and align canonical, OG, schema, sitemap, and internal links together.
- If a cleaner route structure is adopted later, ship redirects and metadata changes together.

### Technical guardrails
- Keep `robots.txt`, `sitemap.xml`, and `vercel.json` aligned with the live canonical host.
- Keep sitemap URLs aligned with indexable public URLs.
- Check that OG and Twitter images point to real assets in the repo or on the live site.
- Keep favicon and Apple touch icon setup consistent across all HTML pages.
- Keep one H1 per page.
- Keep title tags under about 60 characters where practical.
- Keep meta descriptions under about 155 characters where practical.
- Keep schema consistent with visible copy and real product details.

### Copy rules
- Use UK English.
- Keep tone practical, clear, confident, and low-hype.
- Avoid vague SaaS filler.
- Keep the core positioning visible:
- Windows desktop software
- one-time purchase
- no subscription
- offline use
- built for dog walkers, dog trainers, and pet care businesses

### On-page rules
- Each landing page needs a distinct intent angle, not a lightly reworded copy block.
- The primary keyword should appear in the title, H1 or immediate support copy, meta description, and visible body copy.
- FAQs should reflect real objections and comparison intent.
- Use screenshots, features, and proof sections to support intent instead of repeating the same pricing line everywhere.
- Prefer page-specific social images for the homepage and main landing pages once assets exist.

### Conversion rules
- Pass the 5-second scan test. A visitor should understand what Pack Planner Pro is, who it is for, and why it is different without needing to scroll.
- Keep the customer as the hero. Lead with the dog walker, trainer, or pet-care business owner's problem, then position Pack Planner Pro as the tool that helps them fix it.
- Use problem-first structure on commercial pages:
- problem
- who it is for
- how it works
- proof
- pricing
- FAQ
- CTA
- Prefer clear first-person or action-led CTAs over vague labels. Examples to test later:
- `Get my copy of Pack Planner Pro`
- `See if Pack Planner Pro fits my business`
- `Ask about Pack Planner Pro`
- Keep pricing visible and easy to scan. Hidden pricing adds friction for this offer.
- Put trust signals near decision points:
- real product screenshots
- real testimonials or user feedback
- support or response-time expectation
- compatibility details such as Windows and offline use
- Use a simple 3-step plan where useful to reduce fear of the unknown.
- Repeat the CTA after sections where purchase intent peaks, especially after pricing, FAQs, and proof blocks.

## 8. Pre-Search-Console Technical Audit

Run this before any major indexing push or sitemap resubmission.

### Required checks
- confirm the live canonical host is still `https://packplannerpro.co.uk`
- confirm `robots.txt` allows crawling and exposes the live sitemap
- confirm `sitemap.xml` only includes intended indexable URLs
- confirm every indexable HTML page has:
- one H1
- a canonical
- a robots tag
- a title
- a meta description
- favicon and Apple touch icon
- OG and Twitter title, description, URL, and image
- confirm schema URLs match the intended public URLs
- confirm social images used in metadata are real files, not stale paths
- refresh sitemap `lastmod` dates when a broad sitewide update has been pushed

### Known issues to resolve first
- `contact.html` currently uses `.com` in canonical, OG URL, and `ContactPage` schema while the rest of the site uses `.co.uk`
- `sitemap.xml` currently lists `https://packplannerpro.co.uk/contact.html` while metadata suggests `/contact`
- the site points OG and Twitter images at `/assets/og-image.png`, but no such file exists in this repo

## 9. Keyword Focus

### Primary commercial targets
- dog walking software
- dog walking software UK
- dog walking software no monthly fee
- dog walking software for sole traders
- dog walking scheduling software

### Secondary commercial targets
- pet care software
- offline dog walking software
- Windows dog walking software
- dog walker invoicing software
- dog trainer scheduling software
- one-time purchase dog walking software

### Feature and objection modifiers
- no subscription
- buy once
- own forever
- works offline
- Windows desktop
- invoicing
- staff scheduling
- calendar export

## 10. Cadence

### Weekly light check
- review any new customer questions or objections
- check if one landing page needs a title, FAQ, or proof update
- note any technical drift found during routine edits

### Monthly full review
1. ingest latest raw files
2. update `docs/seo/SEO_MONTHLY_REPORT.md`
3. save a dated copy in `reports/monthly/`
4. refresh `docs/seo/SEO_PAGE_ACTIONS.md` if priorities changed
5. choose the top 3 actions for the next month

### Quarterly reset
- re-check page differentiation
- review whether any landing page is cannibalising another
- re-check canonical host and route strategy
- decide whether new landing pages are justified by actual data

## 11. Monthly Decision Rules

Use the data to prioritise work in this order:

1. High impressions plus low CTR
- rewrite titles and meta descriptions first

2. Positions 4 to 15
- improve on-page relevance, FAQs, proof, screenshots, and internal links

3. Intent mismatch
- if the wrong page ranks for a keyword, strengthen the better-fit page before creating a new one

4. Repeated new modifier demand
- only build a new page when Search Console shows repeat demand that does not fit an existing page cleanly

5. Technical trust gap
- fix canonicals, sitemap drift, broken social assets, and schema mismatches before broad expansion

## 12. Prompt Library

### Monthly review
`Run the Pack Planner Pro monthly SEO review from the latest files in data/search-console and data/ga4. Update docs/seo/SEO_MONTHLY_REPORT.md and save a dated copy in reports/monthly/.`

### Page refresh brief
`Create a Pack Planner Pro page refresh brief for /dog-walking-software-uk using the latest Search Console data, current page copy, and page intent. Save it in content-briefs/.`

### Competitor check
`Run a Pack Planner Pro competitor review for 'dog walking software UK' and 'dog walking software no monthly fee'. Explain who is winning and what they do better. Save notes in reports/ad-hoc/.`

### Title and CTR pass
`Review the Pack Planner Pro pages with high impressions and weak CTR from the latest Search Console exports. Suggest title and meta rewrites only.`

### Technical audit
`Run a pre-Search-Console technical SEO audit for Pack Planner Pro. Check canonicals, robots, sitemap, metadata, schema URLs, contact-route consistency, and social image validity. Save the results in reports/ad-hoc/.`

### New page decision
`Decide whether Pack Planner Pro needs a dedicated page for 'offline dog walking software' based on the latest Search Console data. If yes, explain why. If no, explain which existing page should be strengthened instead.`

## 13. Current Action Queue

### High priority
- choose and enforce one canonical host across all PPP pages
- normalise the contact page public URL across canonical, OG, schema, sitemap, and internal links
- replace the broken `/assets/og-image.png` references with real social image assets
- collect and save first Search Console and GA4 exports in this repo
- tighten intent separation between the homepage and each landing page

### Medium priority
- create page-specific refresh briefs for the five commercial landing pages
- add customer-language notes from enquiries, objections, or reviews into `data/customer-voice/`
- add page-specific social images for the homepage and top landing pages
- review whether `pet-care-software` should stay broad or become more niche
- add a conversion review pass using the rules in `docs/seo/SALES_CONVERSION_FRAMEWORK.md`

### Low priority
- build new landing pages only when repeated demand shows up in data
- expand feature-led pages after the core commercial pages are technically clean

## 14. Update Log

### 2026-04-12
- Created the first Pack Planner Pro-specific SEO manager based on the stronger JPP operating model
- Reframed the system from local service SEO to UK software SEO
- Added folder structure, reporting workflow, prompt library, and module-based review process
- Added Pack Planner Pro-specific technical guardrails around host consistency, route consistency, and broken social-image paths
- Added Module 7: Page Quality Audit with E-E-A-T scoring, per-page audit output template, decision logic, intent classification, PPP-specific red flags, and keyword optimisation checklist — adapted from the Google Quality Rater framework
