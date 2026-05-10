# Pack Planner Pro GEO Action Plan

Generated: 2026-05-10

Source: external GEO audit report dated 2026-05-10, checked against the local repo.

## Audit Check

### Confirmed issues

- Cookie consent default was set to `analytics_storage: 'granted'` before user action.
- Clean URL routing only redirected `/contact.html`; other `.html` page URLs could still resolve.
- `llms.txt` was missing.
- Some commercial page social images still used relative paths.
- Security headers were missing from `vercel.json`.
- `/about` is not present in the repo or sitemap.
- Off-site authority is the main strategic gap: Capterra, Product Hunt, Trustpilot, LinkedIn, YouTube, and community mentions are not repo-fixable but should be treated as priority work.

### Stale or partly inaccurate audit points

- Blog posts already include `BlogPosting` schema with author, publisher, dates, FAQPage, and BreadcrumbList.
- Blog social images are already absolute URLs.
- Root pages have one visible `<h1>` each in the checked files, not 15+ raw `<h1>` elements.
- Organization schema exists in page-level JSON-LD, but it needs a stronger shared entity model, Person schema for Jennie, and `sameAs` expansion once external profiles exist.

## Shipped In This Sprint

- Changed analytics consent defaults from `granted` to `denied` in `scripts/cookie-consent.js` and inline consent defaults across site pages.
- Added `llms.txt` with priority product, blog, contact, and privacy URLs.
- Added a generic permanent redirect from `.html` URLs to clean URLs in `vercel.json`.
- Added global security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- Changed remaining root-page relative `og:image` paths to absolute `https://www.packplannerpro.co.uk/...` URLs.

## Tier 1 - This Week

1. Publish `/about`

   Goal: make Jennie Dayer-Swan the canonical human expert behind the product.

   Include:
   - Founder story and role at Jennie's Positive Paws
   - Dog walking and canine behaviourist experience
   - Why Pack Planner Pro was built
   - Product use in a real operating business
   - Link to `https://www.jenniespositivepaws.com`
   - Founder photo if available

2. Add stronger entity schema

   Add a reusable Organization + Person JSON-LD block across all public pages:
   - `Organization` for Pack Planner Pro / Jennie's Positive Paws relationship
   - `Person` for Jennie Dayer-Swan
   - `sameAs` for Jennie's Positive Paws now, then LinkedIn, YouTube, Product Hunt, Capterra, and Wikidata as they go live

3. Update sitemap and navigation for `/about`

   Add `/about` to:
   - sitemap.xml
   - header or footer navigation
   - blog author links where relevant
   - `llms.txt`

4. Validate deploy behavior

   After deploy, check:
   - `/llms.txt` returns 200
   - `/dog-walking-software-uk.html` returns 301 to `/dog-walking-software-uk`
   - analytics cookies remain denied before consent
   - security headers are present

## Tier 2 - This Month

1. Off-site entity setup

   Create and complete:
   - Capterra listing
   - GetApp / SoftwareAdvice listing if available through the same network
   - Product Hunt page
   - LinkedIn company page
   - YouTube channel with one product walkthrough
   - Trustpilot profile if customer review collection will be maintained

2. Review collection

   Aim for 3 to 5 attributed customer reviews. Prioritise Capterra/Product Hunt first because software directories are more useful for AI recommendation queries.

3. Content trust pass

   Strengthen the two highest-risk informational posts:
   - `/blog/how-to-start-a-dog-walking-business-uk`
   - `/blog/tools-for-dog-walkers-uk`

   Add UK-specific references where appropriate, such as HMRC sole trader guidance, NarpsUK/PDWA context, insurance providers, and named competitor tools.

4. Comparison page decision

   Build `/best-dog-walking-software-uk` or a competitor comparison page only if Search Console continues showing comparison-intent impressions.

## Tier 3 - Next 90 Days

- Publish one original data-led post using Jennie's real operating numbers.
- Record and embed a 3 to 5 minute product walkthrough.
- Create a Wikidata item only once the product has enough public references to avoid deletion risk.
- Re-run a GEO audit after off-site listings and `/about` have been live for at least 30 days.

## Measurement

Track monthly:

- Search Console impressions and clicks for `dog walking software uk`, `dog walking software no monthly fee`, `best dog walking software uk`, and brand queries.
- Whether AI tools mention Pack Planner Pro for no-subscription dog walking software queries.
- Indexed external profiles and review counts.
- Rich result validation for homepage, landing pages, and blog posts.

