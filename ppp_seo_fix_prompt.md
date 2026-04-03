# Pack Planner Pro — SEO Fix Instructions

You are working on two HTML files for **Pack Planner Pro**, a Windows desktop dog walking software product. Apply all SEO fixes listed below exactly. Do not change any visual design, layout, colours, fonts, animations, or JavaScript. Only change the content specified.

Both files use UK English. No em dashes. No American spellings.

---

## FILE 1: index.html

### Fix 1 — Meta Title (too long at 63 chars, must be under 60)

Find:
```html
<title>Pack Planner Pro — Dog Walking Software | One-Time Purchase £79</title>
```

Replace with:
```html
<title>Dog Walking Software | Pack Planner Pro — Buy Once, Own Forever</title>
```

---

### Fix 2 — Meta Description (1 char over limit, trim slightly)

Find:
```html
<meta name="description" content="Pack Planner Pro is desktop dog walking software for pet care professionals. Plan walks, manage dogs, send invoices and track income. One-time purchase. No subscription, no cloud, no monthly fees."/>
```

Replace with:
```html
<meta name="description" content="Pack Planner Pro is desktop dog walking software for pet care professionals. Plan walks, manage dogs, send invoices and track income. One-time purchase. No subscription, no monthly fees."/>
```

---

### Fix 3 — H1 (no primary keyword present)

Find the H1 element which currently reads:
```
Stop paying monthly for software you'll never own.
```

Directly after the closing `</h1>` tag, add this subtitle paragraph (do not change the H1 itself):
```html
<p class="text-base font-semibold uppercase tracking-widest mb-6" style="color:#0033A0;">Dog Walking Software — One-Time Purchase</p>
```

Place this paragraph BEFORE the existing hero subtext paragraph (the one that starts "Pack Planner Pro is a one-time purchase desktop app...").

---

### Fix 4 — Schema: Update expired priceValidUntil and add availability

Find inside the `<script type="application/ld+json">` block:
```json
"priceValidUntil": "2025-12-31"
```

Replace with:
```json
"priceValidUntil": "2026-12-31",
"availability": "https://schema.org/InStock"
```

---

### Fix 5 — Add FAQPage schema

Find the closing `</script>` tag of the existing `<script type="application/ld+json">` block (the one containing SoftwareApplication and Organization schemas).

Add a NEW, separate `<script type="application/ld+json">` block immediately after it containing:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Pack Planner Pro a one-time purchase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pack Planner Pro is a one-time purchase of £79. There are no monthly fees, no subscriptions and no cloud charges. You buy it once and own it forever."
      }
    },
    {
      "@type": "Question",
      "name": "What operating system does Pack Planner Pro run on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pack Planner Pro runs on Windows. It is a desktop application that works offline, with no internet connection required to use its core features."
      }
    },
    {
      "@type": "Question",
      "name": "Who is Pack Planner Pro designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pack Planner Pro is designed for sole trader dog walkers, dog trainers, pet care professionals and small teams of up to five staff. It helps you plan walks, manage dog records, send invoices and track income."
      }
    },
    {
      "@type": "Question",
      "name": "Can I try Pack Planner Pro before buying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Get in touch with the Pack Planner Pro team via the contact page and we will be happy to answer any questions before you purchase."
      }
    },
    {
      "@type": "Question",
      "name": "How does Pack Planner Pro compare to subscription dog walking software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike subscription-based dog walking apps that charge monthly fees, Pack Planner Pro is a one-time purchase. Over two years, a £20/month subscription costs £480. Pack Planner Pro costs £79 once, with no ongoing fees."
      }
    }
  ]
}
</script>
```

---

### Fix 6 — Add FAQ section to page body

Find the section that contains the text "Have a question? Get in touch" (around line 1104).

Immediately BEFORE that section, insert this new FAQ section:

```html
<section id="faq" class="section-canvas px-6 py-20">
  <div class="max-w-3xl mx-auto">
    <h2 class="font-headline font-extrabold text-4xl md:text-5xl mb-12 text-center" style="color:#1A1C2C;">Frequently asked questions</h2>
    <div class="flex flex-col gap-4">

      <details class="card p-6 group" open>
        <summary class="font-headline font-bold text-lg cursor-pointer list-none flex items-center justify-between" style="color:#1A1C2C;">
          Is Pack Planner Pro a one-time purchase?
          <span class="material-symbols-outlined transition-transform group-open:rotate-180" style="color:#0033A0;">expand_more</span>
        </summary>
        <p class="mt-4 text-base leading-relaxed" style="color:#444653;">Yes. Pack Planner Pro is a one-time purchase of £79. There are no monthly fees, no subscriptions and no cloud charges. You buy it once and own it forever.</p>
      </details>

      <details class="card p-6 group">
        <summary class="font-headline font-bold text-lg cursor-pointer list-none flex items-center justify-between" style="color:#1A1C2C;">
          What operating system does Pack Planner Pro run on?
          <span class="material-symbols-outlined transition-transform group-open:rotate-180" style="color:#0033A0;">expand_more</span>
        </summary>
        <p class="mt-4 text-base leading-relaxed" style="color:#444653;">Pack Planner Pro runs on Windows. It is a desktop application that works offline, with no internet connection required to use its core features.</p>
      </details>

      <details class="card p-6 group">
        <summary class="font-headline font-bold text-lg cursor-pointer list-none flex items-center justify-between" style="color:#1A1C2C;">
          Who is Pack Planner Pro designed for?
          <span class="material-symbols-outlined transition-transform group-open:rotate-180" style="color:#0033A0;">expand_more</span>
        </summary>
        <p class="mt-4 text-base leading-relaxed" style="color:#444653;">Pack Planner Pro is designed for sole trader dog walkers, dog trainers, pet care professionals and small teams of up to five staff. It helps you plan walks, manage dog records, send invoices and track income.</p>
      </details>

      <details class="card p-6 group">
        <summary class="font-headline font-bold text-lg cursor-pointer list-none flex items-center justify-between" style="color:#1A1C2C;">
          How does Pack Planner Pro compare to subscription software?
          <span class="material-symbols-outlined transition-transform group-open:rotate-180" style="color:#0033A0;">expand_more</span>
        </summary>
        <p class="mt-4 text-base leading-relaxed" style="color:#444653;">Unlike subscription-based dog walking apps that charge monthly fees, Pack Planner Pro is a one-time purchase. Over two years, a £20/month subscription costs £480. Pack Planner Pro costs £79 once, with no ongoing fees.</p>
      </details>

    </div>
  </div>
</section>
```

---

## FILE 2: contact.html

### Fix 1 — Meta Title (generic, no keyword)

Find:
```html
<title>Contact Us — Pack Planner Pro</title>
```

Replace with:
```html
<title>Contact Pack Planner Pro | Dog Walking Software Support</title>
```

---

### Fix 2 — Meta Description (no CTA)

Find:
```html
<meta name="description" content="Get in touch with the Pack Planner Pro team. Questions about the software, pricing or how it works for your business, we are happy to help."/>
```

Replace with:
```html
<meta name="description" content="Have a question about Pack Planner Pro dog walking software? We reply within one business day. Get in touch and we will help you find the right plan."/>
```

---

### Fix 3 — H1 (no keyword)

Find the H1 element which currently reads:
```
We'd love to hear from you
```

Replace the text content only (keep all existing classes and styles) with:
```
Got a question about Pack Planner Pro?
```

---

### Fix 4 — Add ContactPage schema

Find the `<head>` closing tag `</head>` in contact.html.

Add this new `<script>` block immediately before `</head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Pack Planner Pro",
  "url": "https://packplannerpro.com/contact",
  "description": "Contact the Pack Planner Pro team with questions about dog walking software, pricing or how the app works for your business.",
  "publisher": {
    "@type": "Organization",
    "name": "Jennie's Positive Paws",
    "url": "https://packplannerpro.com"
  }
}
</script>
```

---

## Validation Checklist (run after all fixes)

After making all changes, confirm:

- [ ] Meta title on index.html is under 60 characters
- [ ] Meta description on index.html is under 155 characters
- [ ] FAQPage schema block is valid JSON (no trailing commas, all brackets closed)
- [ ] `priceValidUntil` is now `2026-12-31`
- [ ] `availability` field is present in the Offer schema
- [ ] FAQ section appears on the page before the "Have a question? Get in touch" section
- [ ] Contact page meta title contains "Pack Planner Pro" and a keyword
- [ ] Contact page H1 is updated
- [ ] ContactPage schema is present in contact.html head
- [ ] No visual design, layout, colours, animations or JavaScript has been changed
