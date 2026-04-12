# Pack Planner Pro Page SEO Actions

This file translates the current repo state into practical on-page and technical SEO actions for Pack Planner Pro.

## Snapshot

- The site already has the right core commercial page set.
- The main gap is not page quantity.
- The main gap is consistency, proof, and intent separation.
- The next gap after technical cleanup is conversion clarity.
- Real GA4 data now shows the homepage, `dog-walking-software-uk`, and contact page are the current centres of gravity.
- Real Pack Planner Pro Search Console data now confirms early visibility on:
- `dog-walking-software-uk`
- `dog-walking-software-no-monthly-fee`
- `dog-walking-software-for-sole-traders`
- `dog-walking-scheduling-software`
- both `/contact.html` and `/contact`

## Technical Actions

### 1. Canonical host cleanup

Why:
- the site mostly uses `https://packplannerpro.co.uk`
- `contact.html` currently uses `.com`

What to do:
- choose one canonical host
- if `.co.uk` remains the live host, update the contact page canonical, OG URL, and `ContactPage` schema to match
- if `.com` becomes the live host later, migrate the whole stack together

### 2. Contact route cleanup

Why:
- the sitemap currently lists `/contact.html`
- metadata on the contact page suggests `/contact`

What to do:
- choose one public route for the contact page
- align sitemap, canonical, OG URL, schema, and internal links
- only use a clean `/contact` route if rewrites or redirects are confirmed

### 3. Social image cleanup

Why:
- the site points multiple metadata fields to `/assets/og-image.png`
- no such file exists in this repo

What to do:
- create a real social image asset
- update `og:image`, `twitter:image`, and any schema screenshot fields to real files
- add page-specific variants later for top landing pages

## Page Priorities

### 1. Homepage

Why:
- this is the highest-authority page
- it sets the product story and can absorb broad commercial intent
- GA4 shows it is the most-viewed title in the current reporting window

What to improve:
- keep the broad category angle
- make sure it does not compete too directly with the dedicated landing pages
- use the homepage for brand plus category intent, not every modifier at once
- make the 5-second message clearer:
- what it is
- who it is for
- why it is different
- keep one dominant CTA path above the fold
- add a short 3-step `how it works` section close to the first CTA cluster

### 2. Dog Walking Software UK

Why:
- this should be the strongest non-home broad commercial landing page
- GA4 shows it is already the strongest current landing page after the homepage
- Search Console shows `11` impressions, `1` click, and average position `10.91`

What to improve:
- make it the clearest answer for broad UK dog walking software intent
- strengthen product proof with screenshots, workflow examples, and FAQ coverage
- keep the angle broader than the no-subscription and sole-trader pages
- lead with the buyer's problem before feature detail
- add a `this is for you if` section for UK dog walkers and pet-care operators

### 3. Dog Walking Software No Monthly Fee

Why:
- this is the strongest anti-subscription comparison angle
- Search Console shows `8` impressions with average position `5.25` and `0` clicks

What to improve:
- emphasise cost comparison, ownership, and no recurring fees
- include a cleaner comparison block against monthly subscription tools
- avoid duplicating the full homepage story
- make the savings logic more scannable near the CTA
- keep proof close to the pricing message so the page does not read like a claim without evidence
- treat title, meta description, and first-screen copy as a CTR priority because this page is already ranking

### 4. Dog Walking Software for Sole Traders

Why:
- this is the best ICP-specific page in the current set
- Search Console shows `9` impressions with average position `13.67` and `0` clicks

What to improve:
- sharpen the messaging for solo operators
- highlight no per-user fees, simple setup, and admin reduction
- add more proof that the tool works for one-person businesses
- reduce fear that the software is too complex for a one-person business
- make the CTA feel personal and relevant to solo operators
- strengthen snippet and above-the-fold differentiation so it can move from page 2 toward page 1

### 5. Dog Walking Scheduling Software

Why:
- this is the clearest feature-led landing page
- Search Console shows `9` impressions, `1` click, but weak average position `35.56`

What to improve:
- push the scheduling and planner workflow more strongly
- use screenshots and examples tied to weekly planning, staff assignment, and calendar export
- avoid drifting back into generic product copy
- add a simple step-by-step explanation of how scheduling works in practice
- support the feature pitch with scheduling-specific FAQs
- decide whether this page needs stronger internal links and clearer keyword support to match its intent

### 6. Pet Care Software

Why:
- this page can win broader category demand if it stays intentionally wider

What to improve:
- decide whether the page truly targets a broader pet-care audience or whether it should stay tightly tied to dog walking and training businesses
- avoid making it a near-copy of the homepage with a different title

### 7. Contact Page Conversion Pass

Why:
- this is the page closest to a direct sales conversation
- small friction here can waste the gains from all other SEO work
- GA4 shows the contact page already has meaningful attention for the current traffic level
- Search Console shows impressions and clicks for both `/contact.html` and `/contact`

What to improve:
- add a visible response-time reassurance near the form
- explain what happens after someone gets in touch
- keep the page focused on one clear next step
- align the social title and description with the improved contact-page positioning
- consolidate the route so search signals are not split

### 8. Blog

Why:
- Search Console shows impressions for:
- `/blog`
- `/blog/how-to-organise-your-dog-walking-schedule`
- `/blog/dog-walking-invoicing-how-to-invoice-clients-properly`
- `/blog/moving-from-spreadsheets-to-proper-dog-walking-software`

Decision: these are LIVE strategic assets. Real blog content exists at all four URLs. Do NOT redirect them.

What to improve:
- strengthen internal links from blog posts into the commercial funnel
- ensure each blog post has a relevant CTA pointing to the most relevant landing page
- keep blog/index.html updated as new posts are added

## Recommended Build Order

1. Fix canonical host drift
2. Fix contact route consistency
3. Fix broken social image references
4. Configure GA4 key events for form submission and primary CTA clicks
5. Refresh the homepage
6. Refresh `dog-walking-software-uk`
7. Refresh `dog-walking-software-no-monthly-fee`
8. Refresh the contact page
9. Refresh `dog-walking-software-for-sole-traders`
10. Refresh `dog-walking-scheduling-software`
11. Review whether `pet-care-software` should stay broad or narrow
12. Decide whether blog content is being rebuilt or redirected

## Quick Wins

- update the contact page social title and description so they match the improved title tag
- create one reusable OG image immediately, even before page-specific variants exist
- document real customer objections and phrases in `data/customer-voice/`
- check whether each landing page's H1 and first paragraph clearly reflect its target intent
- add customer-first subheads or support copy where pages currently jump straight into features
- place testimonials, screenshots, or proof blocks closer to pricing and CTA sections
- confirm whether old homepage variants or `test.html` are publicly reachable
- decide what happens to the legacy blog titles still appearing in GA4
- rewrite the title and meta for `dog-walking-software-no-monthly-fee` first because it is already ranking strongly enough to earn clicks

## Current Strategic Read

Pack Planner Pro does not need a content treadmill right now. The stronger path is:

- fix technical consistency first
- keep the page set tight
- differentiate the current landing pages more clearly
- let Search Console data decide whether any new page is justified
