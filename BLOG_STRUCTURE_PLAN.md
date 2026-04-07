# Pack Planner Pro Blog Structure Plan

Date: 2026-04-07

This file defines how blog posts should be structured so they feel like part of the existing Pack Planner Pro site.

## 1. Core Writing Rules

- Use UK English.
- Do not use emojis.
- Keep the same calm, practical, direct tone used on the current site.
- Write as a real operator, not as a generic marketing writer.
- Prefer clarity over cleverness.
- Avoid hype words such as:
  - revolutionary
  - game-changing
  - cutting-edge
  - seamless
  - ultimate
- Use Jennie's lived perspective where it genuinely helps.
- Keep commercial mentions natural and specific.

## 2. Jennie's Voice Guide

### Tone
- supportive
- practical
- experienced
- calm
- non-judgmental
- confident without sounding pushy

### What should come through
- Jennie has run a real dog walking and behaviour business
- Jennie understands what it is like to juggle business admin with family life
- Jennie prefers straightforward systems over bloated tools
- Jennie values kindness, clarity, and realistic advice
- Jennie's background in behaviour work and positive reinforcement should make the writing feel thoughtful, not harsh

### Best voice pattern
- this is what worked in practice
- this is what got hard as the business grew
- this is what I would sort earlier if I started again

### Avoid
- generic agency-style SEO language
- fake certainty where local rules vary
- filler intros that delay the answer
- hard-selling Pack Planner Pro in every section

## 3. Blog Page Structure

Every blog post should follow this structure.

### Section 1: Title
- H1 only
- clear search intent match
- no clickbait

Example style:
- `How to organise your dog walking schedule`
- `Dog walking invoicing: how to invoice clients properly`

### Section 2: Opening answer capsule
- first 50 to 70 words
- answer the search query directly
- include the primary keyword naturally
- should be quotable by search engines and AI systems

### Section 3: Jennie's real-world context
- one short section early in the article
- use first person where it helps
- connect the topic to actual business experience

Example pattern:
- `When I first started, I was using notebooks and a paper diary. That was manageable for a while, but once I was balancing multiple clients, school runs, and the rest of life, it became too easy to lose track of where I was.`

### Section 4: Main body sections
- 4 to 6 H2 sections for most posts
- H2s should follow the user journey or decision process
- use H3s only when a section genuinely needs splitting

Best H2 style:
- question-led
- plain English
- specific

Examples:
- `What should a dog walking invoice include?`
- `When does a paper diary stop being enough?`
- `Do you need insurance before you start?`

### Section 5: Practical checklist, example, or comparison
- include at least one scannable section
- can be:
  - checklist
  - comparison table
  - example invoice fields
  - signs you have outgrown your current system

This matches the current site's practical, useful style.

### Section 6: Soft Pack Planner Pro mention
- include only where relevant
- frame it as a natural solution, not a hard pitch
- keep it contextual

Example style:
- `If you are at the stage where notebooks, a diary, or a spreadsheet are starting to slow you down, Pack Planner Pro was built to handle exactly that kind of day-to-day admin without adding another monthly bill.`

### Section 7: FAQ section
- 4 to 6 FAQs
- concise answers
- written plainly
- suitable for FAQ schema later

### Section 8: Conclusion
- short
- summarise the practical next step
- no oversized CTA block needed in the article copy itself

## 4. SEO Structure Rules

- one primary keyword per post
- include primary keyword in:
  - title
  - H1
  - first paragraph
  - one or two H2s where natural
  - meta description
- include secondary related phrases naturally
- do not stuff keywords
- use question-based headings where helpful
- include one clean internal link to the most relevant landing page
- for commercial posts, also link to the homepage or pricing area when appropriate

## 5. Content Style Rules

### Paragraph style
- short to medium paragraphs
- avoid huge text blocks
- keep most paragraphs to 2 to 4 sentences

### Sentence style
- plain English
- declarative
- no over-polished sales language
- no fluff

### Formatting style
- use bullets when something is genuinely list-shaped
- use tables only when comparison really helps
- avoid nested bullets

## 6. What Makes a Post Feel On-Brand

To fit the current Pack Planner Pro site, a blog post should:
- sound like it was written by someone who has actually done the work
- mention UK realities where relevant
- focus on admin, workflow, and practical business decisions
- make the one-time, no subscription, offline angle available where relevant
- keep the visual and verbal feel clean, calm, and direct

## 7. First 6 Posts: Recommended Structure Angles

### 1. How to organise your dog walking schedule
- opening answer capsule
- why head-only planning breaks down
- why notebooks and paper diaries become fragile
- signs you have outgrown your current system
- what a workable weekly planning setup needs
- FAQ

### 2. Dog walking invoicing: how to invoice clients properly
- opening answer capsule
- what UK dog walkers actually need to include
- weekly vs monthly invoicing
- how to keep records straight for tax
- simple tools that reduce admin
- FAQ

### 3. Moving from spreadsheets to proper dog walking software
- opening answer capsule
- why paper systems stop working
- why spreadsheets help, but only to a point
- what proper software changes in practice
- when it is worth switching
- FAQ

### 4. The best dog walking software for UK sole traders in 2026
- opening answer capsule
- what sole traders actually need
- how to compare options properly
- monthly subscription vs one-time purchase
- why desktop still matters for planning
- FAQ

### 5. How to manage dog walking clients without losing your mind
- opening answer capsule
- what information you need from each client
- how to keep records usable and safe
- handling changes, notes, and cancellations
- what starts to go wrong without a system
- FAQ

### 6. How to start a dog walking business in the UK in 2026
- opening answer capsule
- choosing the right setup and getting registered
- checking local rules and insurance
- pricing and first clients
- what admin to sort from day one
- FAQ

## 8. Source Note

This structure should be used together with:
- `BLOG_RESEARCH_PACK.md`
- `SEO_MANAGER.md`
- Jennie's Positive Paws public about page
- the live Pack Planner Pro landing pages

## 9. Blog Architecture Decision

The blog should be built as a proper hub, not as isolated posts with no links from the main site.

### Recommended structure
- blog hub page:
  - `/blog`
- individual posts:
  - `/blog/how-to-organise-your-dog-walking-schedule`
  - `/blog/dog-walking-invoicing-how-to-invoice-clients-properly`
  - `/blog/moving-from-spreadsheets-to-proper-dog-walking-software`
  - and so on

### Why this is the right choice
- Google discovers pages mainly through links and sitemaps.
- A hub page helps search engines understand the relationship between posts.
- A hub makes internal linking much easier.
- A visible blog section improves topical authority.
- It also gives users a natural place to browse related content.

### Main-site linking plan
- Add a `Blog` link in the main navigation once the hub exists.
- Add a small `From the blog` section on the homepage once at least 3 posts are live.
- Link relevant landing pages to the most relevant posts.
- Every post should link back to:
  - the blog hub
  - one relevant landing page
  - at least one related post once more than 3 posts are live

### What not to do
- Do not publish blog posts as isolated `.html` files with no path structure.
- Do not leave blog posts only in the sitemap with no internal links from the main site.
- Do not rely only on Search Console submission to get them found.
