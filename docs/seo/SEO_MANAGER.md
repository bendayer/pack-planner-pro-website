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

8. AI and zero-click watch notes
- page-type, query, CTR, and engagement signals that may show search results are answering more before the click

9. Authority and mention tracking
- backlinks, directories, reviews, software mentions, comparison listings, and other entity signals that support brand trust

10. Behaviour analytics actions
- UX, content, internal-linking, and conversion fixes based on how visitors actually use key pages when behaviour data is available

## 2. Site Snapshot

| Field | Value |
|---|---|
| Brand | Pack Planner Pro |
| Business type | Windows desktop dog walking software |
| Core offer | One-time purchase software for dog walkers, dog trainers, and pet care businesses |
| Primary market | United Kingdom |
| Product model | Desktop app, offline-first, no subscription |
| Canonical host | `https://www.packplannerpro.co.uk` |
| Current contact route in repo | `contact.html` served publicly through `/contact` |
| Preferred long-term public route | `/contact` |
| Analytics | GA4 present |
| Search Console | Exports stored under `data/search-console/` |
| Behaviour analytics | Optional - Microsoft Clarity or equivalent if enabled |
| Search everywhere inputs | Optional - Bing Webmaster Tools, AI search spot-checks, software-directory mentions |
| Current owner entity in markup | `Jennie's Positive Paws` |

### Contact Form Setup

- Contact form file: `contact.html`
- Public route: `https://www.packplannerpro.co.uk/contact`
- Form provider: Web3Forms
- Submit endpoint: `https://api.web3forms.com/submit`
- Access key location: hidden `access_key` field inside the form markup
- GA4 success events fired after a successful submit: `ppp_contact_submit_success` and `generate_lead`
- Current recommendation: keep the lightweight Web3Forms setup for the public contact page unless Zoho CRM/workflow integration becomes a clear operational need.

## 3. Session Start Protocol

At the start of any Pack Planner Pro SEO session, follow these steps in order. Do not skip to the review until Step 4 is confirmed.

### Step 1 - Read context files

Read these files before doing anything else:
- `docs/seo/SEO_MANAGER.md` (this file)
- `docs/seo/SEO_MONTHLY_REPORT.md`
- `docs/seo/SEO_PAGE_ACTIONS.md`
- `docs/seo/KEYWORD_ROADMAP.md`
- `docs/seo/SALES_CONVERSION_FRAMEWORK.md` when conversion or CTA work is involved
- `docs/seo/SEO_PAGE_ACTIONS_CURRENT.md` if present and newer than `SEO_PAGE_ACTIONS.md`
- any recent files in `reports/monthly/` and `reports/ad-hoc/`

---

### Step 2 - Run the Data Intake Checklist

Check `data/` for the following files. For each one, confirm: present and current, present but stale, or missing.

**Search Console (expected: exports from the current review period)**

| File | Expected | Status |
|---|---|---|
| `search-console-queries-YYYY-MM-DD.csv` | Queries with clicks, impressions, CTR, and position | Check date - should be within last 30 days |
| `search-console-pages-YYYY-MM-DD.csv` | Pages with clicks, impressions, CTR, and position | Check date - should be within last 30 days |
| `search-console-chart-YYYY-MM-DD.csv` | Daily chart with clicks and impressions over time | Check date - should be within last 30 days |
| `search-console-devices-YYYY-MM-DD.csv` | Device split | Optional - useful for monthly reports |
| `search-console-countries-YYYY-MM-DD.csv` | Country split | Optional - useful for monthly reports |

How to export from Search Console:
- Go to Search Console -> Performance -> Search results
- Set date range to last 28 days, or 3 months for a fuller decision window
- Export Queries tab -> save as `search-console-queries-YYYY-MM-DD.csv`
- Export Pages tab -> save as `search-console-pages-YYYY-MM-DD.csv`
- Export the chart tab -> save as `search-console-chart-YYYY-MM-DD.csv`
- Keep the original Search Console ZIP only as a backup; use the extracted CSVs for analysis

**GA4 (expected: 28-day snapshot)**

| File | Expected | Status |
|---|---|---|
| `ga4-reports-snapshot-YYYY-MM-DD.csv` | Channel, page, event, purchase-click, and lead information where available | Check date - should match the Search Console date range |
| `ga4-landing-pages-YYYY-MM-DD.csv` | Landing page performance, sessions, engagement, and conversions | Optional, but preferred for monthly reviews |

How to export from GA4:
- Go to GA4 -> Reports -> Acquisition -> Traffic acquisition for channel data
- Go to Engagement -> Landing page for page-level data where available
- Set date range to last 28 days
- Export as CSV and save to `data/ga4/`
- Include key events such as `generate_lead`, `begin_checkout`, and `ppp_purchase_click` when available

**Customer voice (expected: maintained notes)**

| File | Expected | Status |
|---|---|---|
| `customer-voice-notes-YYYY-MM-DD.md` | Sales objections, enquiry themes, support questions, testimonials, and wording customers actually use | Check whether new enquiries or reviews have appeared since the last note |

How to update customer voice:
- Add real phrases from emails, calls, reviews, demos, support messages, and buying objections
- Tag each note with context: prospect, customer, support, review, or sales question
- Keep wording close to the source where possible, but remove private personal details

**Behaviour analytics (optional but useful for conversion reviews)**

| File | Expected | Status |
|---|---|---|
| `clarity-live-insights-YYYY-MM-DD.json` or `behaviour-insights-YYYY-MM-DD.md` | Popular pages, scroll depth, engagement, click friction, rage/dead clicks, referrers, and conversion-path notes | Optional - use only if current |

How to use behaviour data:
- Use behaviour data to explain human friction, not rankings.
- Keep raw exports local unless intentionally sharing a redacted summary.
- Save written findings in `reports/ad-hoc/` or include them in the monthly report.

**Authority and search-everywhere inputs (optional monthly notes)**

| File | Expected | Status |
|---|---|---|
| `authority-notes-YYYY-MM-DD.md` | New links, directory listings, reviews, social mentions, competitor mentions, or software roundups | Optional |
| `bing-ai-notes-YYYY-MM-DD.md` | Bing Webmaster Tools or Bing AI Performance observations if available | Optional |

---

### Step 3 - Data gap report

Before running any review, state clearly:

- Which files are present and current
- Which files are present but stale (date is more than 6 weeks old)
- Which files are missing entirely
- Whether GA4 has key-event data for contact leads and purchase clicks

**STOP HERE if any core file is missing or stale.**

Ask the user to upload the missing data before continuing. Core files are:
- `search-console-queries` (current)
- `search-console-pages` (current)
- `ga4-reports-snapshot` or `ga4-landing-pages` (current)

Customer voice is important, but a review can proceed without it if the gap is noted.

Behaviour analytics, Bing, and authority notes are useful but not required. If missing, do not block the review; record the gap and continue from Search Console, GA4, and customer voice.

If the user confirms they want to proceed without a missing file, note it as a gap in the report output.

---

### Step 4 - Confirm data is loaded, then choose workflow

Once data is confirmed or gaps are acknowledged, choose one workflow:
- monthly review
- opportunity review
- competitor review
- page refresh brief
- technical audit
- new page decision
- title and CTR pass
- conversion review
- behaviour analytics review
- AI / zero-click watch
- authority and mention review

Rule:
- all downstream tasks must use the latest saved files, not memory alone
- stale files in `data/archive/` are kept for reference but must not be used as current data

---

### Step 5 - Archive rule

When new data files are saved, move previous versions to `data/archive/YYYY-MM-DD/`. Do not delete old files. Only the most recent version of each file type should sit in the active `data/` folders.

## 4. Folder Structure

Use this structure inside this repo:

```text
data/
  search-console/
  ga4/
  clarity/
  customer-voice/
  authority/
  archive/
    YYYY-MM-DD/   <- stale exports moved here when superseded
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
- raw or redacted behaviour analytics exports go into `data/clarity/` when available
- backlink, directory, review, AI-search, and software-mention notes go into `data/authority/`
- stale raw exports go into `data/archive/YYYY-MM-DD/` when superseded
- finished monthly reviews go into `reports/monthly/`
- one-off investigations, SERP notes, title rewrite sheets, and technical audits go into `reports/ad-hoc/`
- page briefs go into `content-briefs/`

### Naming convention

Use:
- `search-console-queries-YYYY-MM-DD.csv`
- `search-console-pages-YYYY-MM-DD.csv`
- `search-console-chart-YYYY-MM-DD.csv`
- `ga4-reports-snapshot-YYYY-MM-DD.csv`
- `ga4-landing-pages-YYYY-MM-DD.csv`
- `clarity-live-insights-YYYY-MM-DD.json`
- `customer-voice-notes-YYYY-MM-DD.md`
- `authority-notes-YYYY-MM-DD.md`
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
- page-type AI/zero-click patterns: high impressions with weak CTR, especially on informational, comparison, FAQ, and feature pages
- conversational queries: 5+ word natural-language questions using who, what, how, why, where, when, which, can I, should I, or do I need

Main output:
- refresh list, title rewrite list, new-page candidates, AI/zero-click watch list

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
- behaviour analytics where available

What to look for:
- pages drawing impressions but not clicks
- pages getting traffic but weak conversion intent
- overlapping pages with weak differentiation
- missing proof, screenshots, FAQs, or CTA clarity
- visitors failing to reach pricing, screenshots, feature proof, FAQs, or CTAs
- dead clicks, rage clicks, quickbacks, or excessive scrolling on commercial pages

Main output:
- page UX, copy, behaviour, and conversion improvement list

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
- behaviour analytics where available

What to look for:
- weak above-the-fold clarity
- pages that lead with the business instead of the customer's problem
- generic CTA copy
- missing trust signals near buying decisions
- pricing or product-fit friction
- pages that explain features before explaining why they matter
- CTA, pricing, screenshot, or Payhip friction visible in behaviour data

Main output:
- conversion-focused copy and structure improvements

### Module 7: Page Quality Audit (E-E-A-T Framework)

Purpose:
- score each landing page against the same criteria Google uses to judge page quality
- produce a consistent, comparable audit output for every page
- give a clear decision on what to fix and in what order

This module is adapted from the Google Quality Rater framework. Use it when doing a deep review of any commercial or landing page, not a quick title pass.

#### Step 1 - Classify intent before scoring

Every page must be classified as one of:
- **Informational** - visitor wants to understand something (blog posts, FAQ pages)
- **Commercial Investigation** - visitor is comparing options before buying (best-of, comparison, no-subscription)
- **Transactional** - visitor wants to buy, download, contact, or try now (homepage, no-monthly-fee, sole-traders, contact)
- **Navigational** - visitor already knows the brand and wants to find it (contact, privacy)

Rule:
- if the page intent does not match the user intent the page is targeting, Needs Met cannot score above 5
- fix intent mismatch before any other on-page work

#### Step 2 - Score across 7 dimensions

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

#### Step 3 - Check for red flags

If any of these are present, cap PQ at 4 regardless of other scoring:
- thin content with no real value
- keyword stuffing or forced repetition
- no trust signals at all on a commercial page
- misleading or overclaiming language
- generic SaaS copy that could describe any software product
- no real product screenshots on a transactional page
- pricing buried or hard to find on a purchase-intent page
- FAQ section that does not address real comparison or objection queries

#### Step 4 - Per-page audit output format

Save every audit to `reports/ad-hoc/`, named e.g. `page-audit-dog-walking-software-uk-2026-04-17.md`.

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

#### Step 5 - Decision logic

Apply these rules in order after scoring:

1. If PQ < 5 → rewrite the page before any other optimisation
2. If NM < 6 → fix intent match first — right audience, right problem framing — before adding content
3. If Trustworthiness < 6 → add real proof before driving more paid or organic traffic to the page
4. If Experience < 6 → add real screenshots, workflow walkthroughs, or specific use cases
5. If UX < 6 → fix structure and CTA visibility before tackling content depth
6. If all scores are 6+ → move to keyword and copy optimisation (Phase 1 actions)

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

### Module 8: Behaviour Analytics Review

Purpose:
- find the human friction behind weak conversion or engagement
- turn scroll, click, rage/dead-click, and session-path evidence into page fixes
- avoid guessing why visitors leave important commercial pages

Main inputs:
- GA4 landing-page data
- Search Console page/query data
- Microsoft Clarity or equivalent behaviour analytics where available
- live page structure, CTAs, pricing, screenshots, FAQs, and contact flow

Rule:
- Search Console finds the search opportunity.
- GA4 finds the performance issue.
- Behaviour analytics finds the human friction.

What to look for:
- users not reaching pricing, screenshots, FAQs, testimonials, compatibility details, or CTAs
- repeated clicks on non-clickable screenshots, feature labels, pricing text, or comparison tables
- dead clicks, rage clicks, quickbacks, excessive scrolling, or very short sessions on commercial pages
- mobile-specific friction around hero CTAs, tables, sticky elements, Payhip buttons, and the contact form
- AI or referral traffic landing on pages that do not explain the product clearly enough for first-time visitors

Main output:
- behaviour-backed page fixes saved in `reports/ad-hoc/` or folded into a page refresh brief
- a measure-after-changes note covering scroll depth, CTA clicks, contact submits, purchase clicks, engagement time, and key-event movement

Important:
- do not treat behaviour analytics as a ranking tool
- do not overfit one recording or one session
- use behaviour data to support practical UX and conversion decisions

### Module 9: AI / Zero-Click and Search Everywhere Review

Purpose:
- monitor whether search results, AI answers, comparison tools, or answer boxes are changing click behaviour
- keep Pack Planner Pro easy for search engines, AI systems, and buyers to understand
- spot new discovery surfaces without chasing unsupported SEO hacks

Main inputs:
- Search Console queries and pages
- GA4 landing pages and source/medium data
- Bing Webmaster Tools or AI Performance data if available
- behaviour analytics AI/referral data if available
- manual spot-checks for priority commercial queries where useful

What to look for:
- impressions rising while CTR falls on informational, comparison, FAQ, or feature-led pages
- long conversational queries that could be answered directly in FAQs or short direct-answer blocks
- pages with fewer clicks but stronger engagement, suggesting fewer but better-qualified visitors
- new branded searches, direct visits, or referral patterns after AI/search discovery
- missing plain-text facts that AI systems and SERP features need: one-time purchase, no subscription, offline use, Windows desktop, UK dog walkers, pricing, support route, and product fit

Main output:
- AI/zero-click watch notes in `reports/ad-hoc/` or the monthly report
- direct-answer, FAQ, internal-link, schema, or title/meta actions where the evidence supports them

Guardrail:
- treat CTR/impression patterns as proxy signals only unless Search Console, Bing, Clarity, or another platform exposes direct AI visibility data
- record direct AI-search fields exactly as the platform names them; do not invent metrics

### Module 10: Authority and Mention Review

Purpose:
- track whether the brand is becoming easier to verify across the web
- support Google, Bing, AI systems, and human buyers with consistent entity signals

Main inputs:
- customer reviews and testimonials
- directory listings and software roundups
- referral sources in GA4
- backlink or mention notes
- social profiles and public business details

What to look for:
- inconsistent business name, URL, pricing, product type, or contact details
- mentions that describe the product vaguely or wrongly
- software directories or comparison pages where Pack Planner Pro should appear
- review/testimonial themes that can be used as proof on commercial pages
- new referral sources that deserve a stronger landing page or tracking note

Main output:
- authority notes saved to `data/authority/` or `reports/ad-hoc/`
- specific follow-up actions, such as fixing an outdated listing, adding a testimonial near a CTA, or creating a clearer comparison answer

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
- Use `https://www.packplannerpro.co.uk/...` everywhere for canonical URLs, `og:url`, sitemap entries, and schema URLs unless a host migration is deliberately approved.
- Keep the apex domain `https://packplannerpro.co.uk` redirecting to `https://www.packplannerpro.co.uk`.
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
- confirm the live canonical host is still `https://www.packplannerpro.co.uk`
- confirm the apex domain still redirects to the `www` host
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

### Recently resolved technical issues
- Contact route is consolidated on `https://www.packplannerpro.co.uk/contact`
- `contact.html` canonical, OG URL, and `ContactPage` schema point to `/contact`
- `sitemap.xml` lists `https://www.packplannerpro.co.uk/contact`
- `vercel.json` redirects `/contact.html` to `/contact` and rewrites `/contact` internally to `contact.html`
- Social image references now point to existing site assets

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

## 12. AI Visibility and Crawler Policy

### Core rule
- Do not treat AI search as a separate channel that overrides SEO fundamentals.

### Visibility policy
- Keep pages crawlable and indexable.
- Keep important commercial facts in visible text, not only in screenshots, widgets, scripts, or schema:
- one-time purchase
- no subscription
- works offline
- Windows desktop software
- built for UK dog walkers, dog trainers, and pet care businesses
- clear pricing and contact route
- Keep schema aligned with visible copy and real product details.
- Do not accidentally block useful AI/search crawlers if `robots.txt` is edited later.
- Do not mass-publish AI-written landing pages, near-duplicate feature pages, or keyword-clone content.

### AI / zero-click monitoring workflow

Run this during monthly reviews when Search Console and GA4 data are current.

1. Check for direct platform reporting:
- Search Console AI or generative-search visibility fields if available
- Bing Webmaster Tools AI Performance if available
- Clarity AI Visibility or AI referral fields if available

2. If direct reporting exists, record the raw platform field names, date range, cited pages, queries, countries, impressions/clicks/referrals, and source screen.

3. If direct reporting does not exist, use proxy checks only:
- page type
- impressions
- CTR
- average position
- GA4 engagement
- direct-return behaviour
- branded search movement

4. Segment pages by type:
- Homepage
- Commercial landing page
- Feature page
- Blog or informational page
- Conversion/support page

5. Flag a page for AI/zero-click watch when:
- impressions rise and CTR falls while position is stable
- long conversational queries start appearing repeatedly
- the page earns impressions but answers are buried below vague copy
- GA4 shows fewer but more engaged organic visitors
- the page lacks plain-text facts that a search result or AI answer would need

6. Actions to consider:
- improve the title/meta for human CTR
- add a short direct-answer block or better FAQ where it fits real intent
- strengthen internal links to the best commercial page
- add missing plain-text facts, screenshots, pricing context, compatibility details, or proof
- inspect the live SERP before assuming AI impact

### Query fan-out coverage

For priority commercial topics, audit the cluster rather than only one page. A buyer's broad question may split into sub-questions such as:
- What software helps dog walkers schedule clients?
- Is there a no-subscription option?
- Does it work offline?
- Is it suitable for sole traders?
- Can it handle invoicing, recurring walks, and calendar export?
- How much does it cost?
- Is it Windows-only?

Map these to existing pages or sections before creating a new page. Use new pages only when repeated demand does not fit an existing page cleanly.

## 13. Search Everywhere and Authority Policy

### Core rule
- Use authority work to make Pack Planner Pro more verifiable, not to chase low-quality links.

### What to track
- software directories and comparison mentions
- pet-care or dog-walking business directories
- customer reviews and testimonials
- social profiles and public business details
- referral traffic in GA4
- backlinks, citations, and unlinked brand mentions
- Bing Webmaster Tools data if available

### Guardrails
- keep the product description consistent: Windows desktop dog walking software, one-time purchase, no subscription, offline-first
- do not create satellite sites or duplicate listings with inconsistent names
- do not buy low-quality links
- do not use third-party fast-indexing services as a standard workflow
- prefer a few relevant UK pet-care, software, or small-business mentions over broad generic directory spam

## 14. Tool Stack and Reporting

### Primary data tools
- Google Search Console
- GA4
- customer voice notes from enquiries, support, reviews, and sales questions

### Add when useful
- Microsoft Clarity or equivalent behaviour analytics
- Bing Webmaster Tools, including AI Performance if available
- Looker Studio for combined Search Console and GA4 reporting
- manual SERP and AI-product spot-checks for priority commercial queries

### Local tools currently present
- `design/local-tools/generate-seo-weekly-report.js` supports structured SEO reporting from saved data.
- `design/local-tools/seo-dashboard.html` provides a local dashboard surface for SEO review.
- `design/local-tools/seo-trends.html` provides a local trend-review surface.

### Missing tool ideas borrowed from the JPP system
- a refresh-candidate scorer that combines sitemap freshness, Search Console page data, metadata, H1s, FAQs, and internal-link depth
- a one-page SEO/content lint that checks title, meta, canonical, H1 count, CTA presence, FAQ coverage, alt text, banned phrases, and PPP-specific proof requirements
- an SEO drift check that compares accepted baselines against current titles, meta descriptions, canonicals, robots tags, H1s, JSON-LD, Open Graph, and page existence

These are useful future improvements, but do not block normal SEO work. If added later, treat them as triage aids, not automatic publishing instructions.

## 15. AI SEO Automation Guardrails

Use the useful parts of AI SEO automation:
- repeatable research, brief, draft, publish-check, indexing-check, and tracking workflows
- content trackers that record target query, source of demand, page status, publish date, and Search Console movement
- AI-assisted briefs, metadata options, internal-link maps, and first drafts
- post-publish checks for sitemap inclusion, canonical URL, indexability, internal links, and Search Console visibility

Do not copy high-volume AI SEO tactics:
- no mass AI publishing
- no thin keyword-clone landing pages
- no satellite sites
- no pages created only because a keyword looks easy
- no third-party fast-indexing service as a standard workflow

Pack Planner Pro-specific rule:
- every new or refreshed page must be useful to a UK dog walker, trainer, or pet-care business owner, show real product detail or workflow proof, and pass human review before publishing

Post-publish indexing rule:
- use sitemap and Search Console workflows first
- use URL Inspection for a few priority pages
- resubmit or reference the sitemap for larger batches
- remember that requesting a crawl does not guarantee indexing or ranking
- do not use Google's Indexing API for normal PPP pages because Google's documentation limits it to `JobPosting` and livestream `BroadcastEvent` pages

## 16. Prompt Library

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

### Page quality audit
`Run a Google Quality Rater-style page audit on /dog-walking-software-uk using Module 7 of the SEO Manager. Score PQ, NM, Experience, Expertise, Authoritativeness, Trustworthiness, and UX. Classify intent first. Apply red flag rules. Save the output to reports/ad-hoc/.`

### Conversion review
`Run a conversion review for /dog-walking-software-no-monthly-fee using Module 6 of the SEO Manager and docs/seo/SALES_CONVERSION_FRAMEWORK.md. Check the 5-second scan test, CTA placement, pricing visibility, proof near decision points, and objection handling. Save improvement actions to reports/ad-hoc/ or include them in the page refresh brief.`

### Behaviour analytics review
`Run a Pack Planner Pro behaviour analytics review for /dog-walking-software-no-monthly-fee using Module 8. Combine Search Console, GA4, current page structure, and any Clarity or behaviour export available. Save the behaviour findings and page fixes in reports/ad-hoc/.`

### AI / zero-click watch
`Run the Pack Planner Pro AI / zero-click watch from the latest Search Console and GA4 exports. Segment URLs by page type, flag high-impression low-CTR groups, extract 5+ word conversational queries, list direct AI/Bing/Clarity visibility fields if available, and save the findings in reports/ad-hoc/.`

### Authority and mention review
`Run a Pack Planner Pro authority and mention review. Check saved authority notes, GA4 referrals, directory/software mentions, reviews, and public business details. Save specific cleanup or outreach actions in data/authority/ or reports/ad-hoc/.`

## 17. Working Plan Checklist Rules

Every future Pack Planner Pro plan document, including growth plans, phase plans, sprint plans, and SEO action plans, should include a working checklist.

This is the standard because multiple agents may work on this repo across different sessions. Without a checklist, agents can duplicate work, miss done tasks, or start from an old priority.

### What every plan document should include

- A **MASTER TASK CHECKLIST** section at the top of the file, before the strategy sections
- Markdown checkboxes for every task: `[ ]` unchecked, `[x]` done
- Tasks grouped by phase or priority, matching the plan structure
- A **last updated** line and **updated by** line at the bottom of the checklist

### Agent rules for using the checklist

1. Read the checklist first, before starting any task in any session
2. Tick the box when a task is complete by changing `[ ]` to `[x]`
3. Add a short note and date after the task where useful, e.g. `- done 2026-04-17`
4. Do not remove tasks; mark them done instead
5. Leave the box unchecked if partial and add a note explaining what is still needed
6. Update the last-updated and updated-by lines at the bottom of the checklist
7. Do not start a new task from the strategy sections without checking the checklist first

### Checkbox status conventions

| Markdown | Meaning |
|---|---|
| `[x]` | Complete |
| `[ ]` | Not started |
| `[ ]` + **PARTIALLY DONE** note | In progress but not complete |
| `[ ]` + **HOLD** note | Waiting on data, dependency, or decision |
| `[ ]` + **NOT CONFIRMED** note | May be done externally and needs verification |

### Checklist format template

```markdown
## MASTER TASK CHECKLIST

> This checklist is the live status tracker for this plan.
> Every agent working on this repo MUST:
> 1. Read this checklist before starting any task
> 2. Tick the box when a task is complete: change `[ ]` to `[x]`
> 3. Add a short note and date after the task if useful
> 4. Do not remove tasks; mark them done instead
> 5. If a task is partially done, add a note but leave the box unchecked

---

### [Phase or group name]

- [x] Completed task - done YYYY-MM-DD
- [ ] Uncompleted task - **NOT STARTED**
- [ ] Partially done task - **PARTIALLY DONE** (note what remains)
- [ ] Blocked task - **HOLD** (note what is blocking it)

---

### Checklist last updated: YYYY-MM-DD
### Updated by: [agent name or initials]
```

### Prompt for starting any session with a plan file

`Before doing any work on [plan file], read the MASTER TASK CHECKLIST at the top. Confirm which tasks are done and which are still open. Only then choose one task to work on. When complete, update the checklist before ending the session.`

## 18. Current Action Queue

### High priority
- collect a wider Search Console export window (28 days or 3 months) before making new page decisions
- keep strengthening `/dog-walking-software-no-monthly-fee` with cost comparison, FAQ coverage, and objection-handling near pricing
- add real product screenshots or stronger workflow proof to the main commercial pages where still thin
- add customer-language notes from enquiries, objections, support questions, or reviews into `data/customer-voice/`
- keep tightening intent separation between the homepage and each landing page
- run an AI/zero-click watch once the next current Search Console and GA4 exports are saved

### Medium priority
- create page-specific refresh briefs for the five commercial landing pages
- add page-specific social images for the homepage and top landing pages
- review whether `pet-care-software` should stay broad or become more niche
- add a conversion review pass using the rules in `docs/seo/SALES_CONVERSION_FRAMEWORK.md`
- consider adding "dog walking diary" language naturally into the scheduling blog post if Search Console keeps showing it
- start a light authority/mention tracker in `data/authority/`
- consider behaviour analytics if conversion questions become hard to answer from GA4 alone

### Low priority
- build new landing pages only when repeated demand shows up in data
- expand feature-led pages after the core commercial pages are technically clean
- build refresh/lint/drift helper tools only after the manual SEO workflow is stable

## 19. Update Log

### 2026-06-29
- Compared the JPP SEO Manager against the Pack Planner Pro version and added PPP-adapted gaps for behaviour analytics, AI/zero-click monitoring, search-everywhere authority tracking, tool-stack notes, and AI SEO automation guardrails.
- Added optional `data/clarity/` and `data/authority/` inputs without making them blockers for monthly reviews.
- Added modules for Behaviour Analytics Review, AI / Zero-Click and Search Everywhere Review, and Authority and Mention Review.

### 2026-05-02
- Upgraded the Session Start Protocol using the newer JPP SEO Manager structure
- Added a full Data Intake Checklist for Search Console, GA4, and customer voice data
- Added hard data-gap reporting before reviews and a stop rule for missing or stale core files
- Added `data/archive/YYYY-MM-DD/` to the folder structure and archive rule
- Strengthened Module 7 with intent-first scoring, PQ red-flag caps, and saved audit output requirements
- Added prompt templates for page quality audits and conversion reviews
- Added Working Plan Checklist Rules for future multi-session SEO plans
- Synced the current action queue with `docs/seo/SEO_PAGE_ACTIONS.md` so completed April technical fixes are no longer listed as high priority

### 2026-04-12
- Created the first Pack Planner Pro-specific SEO manager based on the stronger JPP operating model
- Reframed the system from local service SEO to UK software SEO
- Added folder structure, reporting workflow, prompt library, and module-based review process
- Added Pack Planner Pro-specific technical guardrails around host consistency, route consistency, and broken social-image paths
- Added Module 7: Page Quality Audit with E-E-A-T scoring, per-page audit output template, decision logic, intent classification, PPP-specific red flags, and keyword optimisation checklist — adapted from the Google Quality Rater framework
