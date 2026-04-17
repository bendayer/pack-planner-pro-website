# Pack Planner Pro SEO Weekly Check

Date: 2026-04-17

## Inputs used

- `data/ga4/ga4-reports-snapshot-2026-04-17.csv`
- `data/search-console/packplannerpro-performance-on-search-2026-04-17.zip`
- `data/search-console/search-console-pages-2026-04-17.csv`
- `data/search-console/search-console-queries-2026-04-17.csv`
- `data/search-console/search-console-countries-2026-04-17.csv`
- `data/search-console/search-console-devices-2026-04-17.csv`

## Date windows

- GA4 snapshot: 2026-04-10 to 2026-04-16
- Search Console export generated: 2026-04-17
- Search Console chart rows present in export: 2026-04-09 to 2026-04-15

## Headline read

This week looks like a visibility expansion week, not a conversion week.

- Search Console shows `1` click from `62` impressions in the export totals
- UK remains the main search market with `53` impressions and `1` click
- GA4 shows `9` sessions from `google / organic`, against `17` direct sessions in the same 2026-04-10 to 2026-04-16 window
- The strongest visibility this week sits on blog content, not on the main commercial landing pages

## Search Console highlights

### Pages doing the work this week

- `/blog/dog-walking-invoicing-how-to-invoice-clients-properly`: `1` click, `16` impressions, `6.25%` CTR, average position `7`
- `/blog/how-to-organise-your-dog-walking-schedule`: `0` clicks, `14` impressions, `0%` CTR, average position `7.07`
- `/pet-care-software`: `0` clicks, `14` impressions, average position `68.64`
- `/dog-walking-software-uk`: `0` clicks, `10` impressions, average position `53.2`
- `/dog-walking-software-no-monthly-fee`: `0` clicks, `1` impression, average position `3`

### Query signals worth acting on

- `dog walking software uk`: `6` impressions, average position `42.67`
- `dog walker software`: `5` impressions, average position `79`
- `dog walking software`: `5` impressions, average position `90.4`
- `pet care software`: `2` impressions, average position `64.5`
- `pet sitting software uk`: `2` impressions, average position `81`
- `dog walking diary`: `1` impression, average position `11`

### Device and country split

- Mobile: `14` impressions, `0` clicks, average position `7.43`
- Desktop: `48` impressions, `1` click, average position `43.77`
- United Kingdom: `53` impressions, `1` click, average position `36.91`

## What changed since the April 12 baseline

1. Blog content is now carrying the clearest organic visibility.
2. The invoicing blog has produced the first organic click in the current week.
3. The scheduling blog is a live CTR opportunity because it is already sitting around position `7` with `14` impressions and no clicks.
4. `pet-care-software` is getting broader-category impressions, but the page is not matching that intent well enough yet.
5. `dog-walking-software-no-monthly-fee` still shows a strong ranking signal when it appears, so the page angle is still valid.
6. `dog-walking-software-uk` looks weaker in this export, but the sample is still too small to treat that as a structural decline.

## GA4 read

The GA4 export is limited, but it still gives a useful direction check.

- `google / organic` drove `9` sessions in the 2026-04-10 to 2026-04-16 window
- `(direct) / (none)` still led with `17` sessions
- `google / organic` brought `2` active users
- No purchase or cart progression is visible in this snapshot

This means SEO is contributing visits, but measurement is still not strong enough to connect the week to commercial outcomes.

## Priority actions from this week's data

1. Tighten the title, meta description, and on-page CTA path for `/blog/how-to-organise-your-dog-walking-schedule`.
2. Add stronger commercial internal links and CTA copy to the invoicing and scheduling blog posts while they are already earning impressions.
3. Clarify whether `/pet-care-software` is meant to target a broad pet-care audience or should lean harder into pet sitting and mixed-service operators.
4. Keep improving `/dog-walking-software-uk`, but do not overreact to one low-volume week.
5. Keep the no-subscription page on the sprint list. The single impression at position `3` is still a positive quality signal.
6. Pull a wider Search Console export next time, ideally `28` days or `3` months, before making any new-page decisions.

## Technical notes found while checking the live files

- All major commercial pages still reference `/assets/og-image.png`, which does not exist in the repo.
- The blog images currently live in the repo under `/assits/`. Keep that path consistent unless the folder is deliberately renamed everywhere together.

## Current decision

Do not build new pages from this week alone.

The right move is:

1. Improve the pages that are already earning impressions.
2. Turn ranking blog traffic into commercial page traffic.
3. Clarify the broad `pet-care-software` intent before it gathers more weak-fit impressions.
