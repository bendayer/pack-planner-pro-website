# Pack Planner Pro SEO Agent Protocol

This file is the operating runbook for future SEO sessions in this repo.

It is the Pack Planner Pro version of the stronger SEO workflow already used elsewhere, adapted for a UK software site.

## What This System Is

An SEO operating system for Pack Planner Pro that:
- reads saved Search Console, GA4, and customer-language files
- finds commercial keyword opportunities
- prioritises refreshes before net-new landing pages
- creates saved reports and briefs
- keeps metadata, schema, sitemap, and page intent aligned

## Session Start Rules

At the start of every Pack Planner Pro SEO session:

1. Read:
- `docs/seo/SEO_MANAGER.md`
- `docs/seo/SEO_MONTHLY_REPORT.md`
- `docs/seo/SEO_PAGE_ACTIONS.md`
- `docs/seo/KEYWORD_ROADMAP.md`

2. Check the newest files in:
- `data/search-console/`
- `data/ga4/`
- `data/customer-voice/`

3. Check the newest saved outputs in:
- `reports/monthly/`
- `reports/ad-hoc/`

4. Choose only one primary workflow at a time:
- monthly review
- competitor review
- page refresh brief
- technical audit
- title and CTR pass
- new page decision

Rule:
- always use the latest saved files first, not memory alone

## Main Workflows

### 1. Monthly SEO Review
Goal:
- combine Search Console, GA4, and technical signals into one decision document

Output:
- update `docs/seo/SEO_MONTHLY_REPORT.md`
- save a dated copy into `reports/monthly/`

Prompt:
`Run the Pack Planner Pro monthly SEO review from the latest files in data/search-console and data/ga4. Update docs/seo/SEO_MONTHLY_REPORT.md and save a dated copy in reports/monthly/.`

### 2. Competitor Review
Goal:
- inspect who ranks for key UK software queries and why

Output:
- a dated note in `reports/ad-hoc/`

Prompt:
`Run a Pack Planner Pro competitor review for 'dog walking software UK' and 'dog walking software no monthly fee'. Explain who is winning and what they do better. Save notes in reports/ad-hoc/.`

### 3. Page Refresh Brief
Goal:
- turn data into a page-specific implementation brief

Output:
- a page brief in `content-briefs/`

Prompt:
`Create a Pack Planner Pro page refresh brief for /dog-walking-software-uk using the latest Search Console data, current page copy, and page intent. Save it in content-briefs/.`

### 4. Technical Audit
Goal:
- make sure the site is technically clean before a crawl push

Output:
- a dated audit note in `reports/ad-hoc/`
- any direct code fixes needed for metadata, sitemap, schema, route consistency, or social image paths

Prompt:
`Run a pre-Search-Console technical SEO audit for Pack Planner Pro. Check canonicals, robots, sitemap, metadata, schema URLs, contact-route consistency, and OG image validity. Save the results in reports/ad-hoc/.`

### 5. New Page Decision
Goal:
- avoid creating unnecessary landing pages

Output:
- a yes or no decision note with reasoning

Prompt:
`Decide whether Pack Planner Pro needs a dedicated page for 'offline dog walking software' based on the latest data. If yes, explain why. If no, explain which existing page should be strengthened instead.`

## Output Standards

Every useful SEO task should save something reusable.

Preferred outputs:
- `.md` summary for humans
- `.csv` only when needed for later reuse

Good output examples:
- monthly report
- competitor note
- page refresh brief
- title rewrite sheet
- technical audit note

Bad output:
- only a chat reply with no saved artefact

## Pack Planner Pro Guardrails

- UK market first
- refresh before net-new
- keep each landing page differentiated by intent
- fix technical consistency before scaling content
- use real product details, not generic SaaS copy
- do not create thin keyword clones

## Success Criteria

The system is working if, month to month:
- the action queue gets sharper
- high-impression pages get better CTR
- near-page-1 pages move upward
- landing pages become more clearly differentiated
- technical drift is reduced instead of reintroduced
- decisions are saved and reusable
