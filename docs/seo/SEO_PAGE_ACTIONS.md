# Pack Planner Pro Page SEO Actions

This file translates the current repo state, GA4 data, Search Console data, and keyword research into a prioritised action queue.

Last updated: 2026-04-12

---

## Completed Work Log

This section records what has been shipped so a new agent can pick up without repeating finished work.

### 2026-04-12

**Contact form** — fixed. The form-status element was missing from the HTML, causing the submit handler to crash before the fetch ran. Button was stuck on "Sending...". Fixed in `contact.html`.

**GA4 page view tracking** — fixed. Two issues:
1. `cookie-consent.js` was setting `analytics_storage: denied` by default, blocking all data collection from new visitors. Changed to `granted`.
2. All pages were missing `window.dataLayer` and `function gtag()` declarations in the inline script.
3. Execution order was wrong — consent default must come before `gtag('config', ...)` in the dataLayer queue. Fixed across all 11 pages including blog pages.

**GA4 buy-button events** — fixed. `begin_checkout` and `ppp_purchase_click` were firing via `pppTrack` (fire-and-forget, no `event_callback`) so the redirect to Payhip was happening before GA4 sent the events. Consolidated into `trackBuyClick` with `event_callback` on both events and a 500ms fallback timeout. Fixed across all 6 commercial pages.

**GA4 setup guide** — created at `docs/seo/GA4_SETUP_GUIDE.md`. Step-by-step instructions for marking key events in GA4 Admin. Written so an AI can walk Ben through it interactively.

**Keyword roadmap** — rebuilt at `docs/seo/KEYWORD_ROADMAP.md`. Added tier structure, app vs software insight, comparison segment, FAQ keyword targets, blog keyword targets, and data-gated future page criteria.

---

## Site Snapshot

- Traffic has started but the site is still early-stage
- Organic search is live and already producing impressions on the right queries
- The homepage and `/dog-walking-software-uk` are the current centres of gravity
- `/dog-walking-software-no-monthly-fee` is the highest-urgency CTR opportunity
- GA4 is now tracking page views and events
- Contact form is fixed and tracking generate_lead events
- Buy-button events (begin_checkout, ppp_purchase_click) are now firing with event_callback

---

## Technical Actions Remaining

### 1. Canonical host cleanup

Why: `contact.html` still uses `.com` in canonical, OG URL, and schema while all other pages use `.co.uk`

What to do: align contact page canonical, OG URL, and ContactPage schema to `https://packplannerpro.co.uk`

### 2. Contact route consolidation

Why: both `/contact.html` and `/contact` are appearing in Search Console — signal is split

What to do: choose one route, align canonical, sitemap, OG URL, schema, and internal links

### 3. Social image

Why: `/assets/og-image.png` is referenced across all pages but the file does not exist

What to do: create a real OG image asset and update all references

---

## Phase 1 — Existing Page Improvements (do this before building anything new)

### 1. `/dog-walking-software-no-monthly-fee` — CTR and conversion priority

Why: Search Console shows position 5.25 with 0 clicks. The page is already ranking well enough to earn clicks. The title and above-the-fold copy are not compelling enough to get them.

Actions:
- ~~Rewrite the title tag to lead with the savings and ownership angle~~ — **DONE 2026-04-12** (`Dog Walking Software No Monthly Fee | £79 One-Time Purchase`)
- ~~Rewrite the meta description as a direct answer with a clear reason to click~~ — **DONE 2026-04-12** (leads with £79, no-subscription angle, 149 chars)
- Strengthen the comparison block — show actual cost difference vs subscription tools
- Add the no-subscription FAQ entries from the keyword roadmap
- Use "no subscription" language alongside "no monthly fee" — both terms have search demand
- Add objection-handling copy near the pricing section

### 2. `/dog-walking-software-uk` — main SEO landing page

Why: the clearest near-page-1 opportunity. Position ~11 with 1 click and 11 impressions. Needs stronger relevance and proof to move up.

Actions:
- Strengthen as the clearest answer for broad UK dog walking software intent
- Add "app" language alongside "software" — both terms are searched
- Add a "this is for you if" section targeting UK dog walkers and pet-care operators
- Strengthen with screenshots, workflow examples, and real feature proof
- Add FAQ section covering: best dog walking software UK, what features do dog walkers need, does it work offline
- Keep the angle broader than the no-subscription and sole-trader pages

### 3. `/dog-walking-software-for-sole-traders` — page 2 to page 1 push

Why: position ~14 with 0 clicks. Needs sharper differentiation and a more compelling first screen to break onto page 1.

Actions:
- Lead with the solo operator's specific problem — admin overload, doing everything alone
- Highlight no per-user fees, simple setup, no technical complexity
- Add a "what solo dog walkers use it for" section with specific examples
- Add FAQ entries: is this suitable for one person, can I use it without staff, how long does setup take
- Improve the meta description to reflect the solo-operator angle directly

### 4. `/dog-walking-scheduling-software` — feature proof push

Why: position ~36 with 1 click and 9 impressions. Weak position means the page is not clearly relevant enough for scheduling queries.

Actions:
- Lead with the scheduling problem before feature detail
- Add a step-by-step explanation of how scheduling works in practice
- Use screenshots and examples tied to weekly planning and calendar export
- Add scheduling-specific FAQs: can I see the whole week at once, can I assign walks to staff, does it export to Google Calendar

### 5. Homepage — conversion and breadth improvements

Why: the homepage absorbs brand and broad category intent. It should also set the comparison framing that supports all the landing pages.

Actions:
- Add "app" and "software" language — use both
- Sharpen the 5-second message: what it is, who it is for, why it is different from subscription tools
- Add a short comparison or objection-handling block near the CTA
- Add FAQ section using the comparison queries from the keyword roadmap
- Keep one dominant CTA path above the fold
- Add a simple 3-step how it works section

### 6. `/pet-care-software` — intent clarification

Why: getting impressions but angle is still unclear. Decide before Search Console data accumulates on the wrong intent.

Actions:
- Decide whether the page targets a broader pet-care audience or stays tightly tied to dog walking
- If staying broad: make the pet-care angle genuinely different from the homepage
- If narrowing: add dog training and pet-sitting specific language

---

## Phase 2 — FAQ Layer Across All Pages

Every landing page should have an FAQ block. Priority questions per the keyword roadmap:

- What is the best dog walking software UK?
- Is there dog walking software with no subscription?
- Can I use dog walking software offline?
- How do dog walkers manage their clients?
- How much does dog walking software cost?
- What dog walking software works on Windows?
- Is Pack Planner Pro a one-time purchase?

These directly match real search queries and will help pages rank for long-tail FAQ-style searches.

---

## Phase 3 — Blog Internal Linking

Three blog posts are already live and collecting impressions:

- `/blog/how-to-organise-your-dog-walking-schedule`
- `/blog/dog-walking-invoicing-how-to-invoice-clients-properly`
- `/blog/moving-from-spreadsheets-to-proper-dog-walking-software`

Actions:
- Every blog post should have a clear CTA pointing to the most relevant commercial page
- `/how-to-organise` → link to `/dog-walking-scheduling-software`
- `/invoicing` → link to homepage or contact
- `/moving-from-spreadsheets` → link to `/dog-walking-software-no-monthly-fee`
- Update `blog/index.html` when new posts are added

New blog posts to consider (based on keyword research):
- How to start a dog walking business UK → broad top-of-funnel, links to homepage
- Dog walking pricing guide UK → top-of-funnel, links to contact
- Tools for dog walkers UK → comparison and product awareness

---

## Phase 4 — Comparison and Expansion (data-gated)

Only start these after Phase 1–3 are complete and Search Console shows the trigger conditions.

### `/best-dog-walking-software-uk`

Build when: Search Console shows repeated impressions on "best dog walking software" or comparison queries.

What it covers: direct comparison of Pack Planner Pro vs common alternatives, comparison table, clear ownership vs subscription positioning.

### `/dog-walker-invoicing-software`

Build when: Search Console shows invoicing-specific demand not captured by existing pages.

### `/offline-dog-walking-software`

Build when: Search Console shows offline-specific demand. This is a strong USP angle but not yet confirmed by data.

---

## Current Highest-Priority Actions (April 2026)

1. ~~Rewrite title and meta for `/dog-walking-software-no-monthly-fee`~~ — **DONE 2026-04-12**
   - Title: `Dog Walking Software No Monthly Fee | £79 One-Time Purchase`
   - Meta: leads with £79 price, under 155 chars, no-subscription angle
   - Remaining on this page: comparison block, FAQ section, objection-handling copy near pricing — see Phase 1 item 1
2. Fix contact route and canonical consistency
3. Create the OG image asset
4. Strengthen `/dog-walking-software-uk` with app language, FAQ, and more proof
5. Add FAQ sections across all five landing pages
6. Strengthen blog CTAs to commercial pages
7. Collect a wider Search Console export (28 days or 3 months) before making any new page decisions

---

## What Not to Build Yet

- Comparison pages — wait for Search Console comparison query data
- `/dog-walking-booking-software` — no confirmed demand yet
- `/dog-walking-client-management` — could be blog first
- `/dog-walking-route-planning` — no confirmed demand yet
- Any new page that repeats content already on an existing page with a different keyword

---

## Strategic Read

Pack Planner Pro does not need a content treadmill right now.

The stronger path is:
1. Fix the technical consistency gaps
2. Sharpen each existing landing page for its specific intent
3. Add FAQ coverage using the real search queries from the keyword roadmap
4. Use blog posts to capture top-of-funnel traffic and push it to commercial pages
5. Let Search Console data on a longer window decide whether any new page is justified
