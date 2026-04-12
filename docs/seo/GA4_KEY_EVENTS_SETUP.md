# GA4 Key Events Setup

The Pack Planner Pro website fires GA4 events from code. They appear in GA4 under
Reports > Realtime and Reports > Events, but they will not count as conversions until
they are marked as **Key Events** in the GA4 Admin panel.

## Events fired from the site

| Event name | Where it fires | What it measures |
|---|---|---|
| `ppp_purchase_click` | All main pages | Click on the Payhip buy link |
| `begin_checkout` | All main pages | Same click — GA4 recommended name |
| `ppp_contact_submit_success` | contact.html | Successful contact form submit |
| `generate_lead` | contact.html | Same submit — GA4 recommended name |
| `ppp_pricing_cta_click` | All main pages | Click on a scroll-to-pricing link |
| `ppp_contact_click` | All main pages | Click on a nav/footer contact link |

## How to mark key events in GA4

1. Go to **GA4 > Admin** (gear icon, bottom left)
2. Under **Data display**, click **Key events**
3. Click **New key event**
4. Mark the following as key events:
   - `ppp_purchase_click` — someone clicked to buy
   - `begin_checkout` — same signal, GA4 recommended name
   - `generate_lead` — contact form successfully submitted
5. Save

Once marked, GA4 will show conversion rates on landing pages and in acquisition reports.

## What to monitor first

- `begin_checkout` rate per landing page session — shows which page converts best
- `generate_lead` total — shows how many qualified enquiries the site is generating
- Compare `ppp_pricing_cta_click` to `begin_checkout` — big gap means pricing page is not closing

## Notes

- The Measurement ID in use is `G-DD5MNET36T`
- Events are sent on the client side via `gtag()` — no GTM required
- `generate_lead` uses `value: 79` and `currency: GBP` to match the product price
- `begin_checkout` uses the same values so GA4 can estimate revenue from click-through rate
