# GA4 Setup Guide — Pack Planner Pro

This file is written for an AI assistant to use when walking Ben through GA4 configuration.
Read this before giving any GA4 instructions. Follow the steps in order and confirm each one before moving on.

---

## Context

- GA4 property: `https://www.packplannerpro.co.uk/`
- Measurement ID: `G-DD5MNET36T`
- The site fires events from code using `gtag()` — no Google Tag Manager is involved
- Events are already implemented and firing. The only remaining task is marking the right ones as Key Events inside the GA4 Admin panel.
- Until key events are marked, GA4 shows 0 conversions even though the site is working correctly.

---

## What events are already firing from the site

The site sends these events automatically. No code changes are needed.

| Event name | What it tracks |
|---|---|
| `ppp_purchase_click` | Someone clicked the buy button (Payhip link) |
| `begin_checkout` | Same click — GA4's recommended name for the same action |
| `ppp_contact_submit_success` | Contact form submitted successfully |
| `generate_lead` | Same submit — GA4's recommended name |
| `ppp_pricing_cta_click` | Click on a "see pricing" scroll link |
| `ppp_contact_click` | Click on a nav or footer contact link |

---

## Step 1 — Get to the right place in GA4

Instructions to give Ben:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Make sure the property shown in the top left says **Pack Planner Pro** (or the property for `packplannerpro.co.uk`)
3. Click the **Admin** gear icon in the bottom left of the screen
4. In the right-hand column (Property settings), look for **Data display**
5. Under Data display, click **Key events**

Confirm with Ben: "Can you see a list of events, or a button that says New key event?"

---

## Step 2 — Mark the three key events

Do these one at a time. For each one:

1. Click **New key event**
2. Type the event name exactly as shown below (case-sensitive)
3. Click **Save**

### Event 1
```
begin_checkout
```
This fires when someone clicks the buy button. It measures purchase intent.

### Event 2
```
ppp_purchase_click
```
Same action as above — a custom name that makes reports easier to read.

### Event 3
```
generate_lead
```
This fires when the contact form is submitted successfully. It measures qualified enquiries.

After saving all three, confirm with Ben: "Do all three now appear in the Key events list with a tick or a Key event badge?"

---

## Step 3 — Check data is flowing (optional but useful)

If Ben wants to confirm events are firing live:

1. In GA4, go to **Reports > Realtime**
2. Open the Pack Planner Pro website in another tab
3. Click the buy button or submit the contact form
4. Watch the Realtime report — the event should appear within a few seconds

If an event appears in Realtime but not yet in the Key events conversion count, that is normal — it can take 24–48 hours for historical data to backfill.

---

## Step 4 — Check the setup worked (next day)

The next time Ben opens GA4:

1. Go to **Reports > Acquisition > Traffic acquisition**
2. Look for a **Key events** column (previously labelled Conversions)
3. Any channel that drove a buy click or form submit will now show a number here

If the column shows dashes or zeros after 48 hours, ask Ben to check:
- Is the correct GA4 property selected?
- Did the key events save correctly in Admin > Data display > Key events?
- Has anyone actually clicked the buy button or submitted the form since the events were marked?

---

## What not to change

- Do not create new tags or triggers in Tag Manager — the site does not use GTM
- Do not edit the Measurement ID — `G-DD5MNET36T` is already embedded in every page
- Do not create goals in the old Universal Analytics interface — that product is retired
- Do not mark `ppp_pricing_cta_click` or `ppp_contact_click` as key events — those are micro-signals, not conversions

---

## Troubleshooting

### "I can't find Key events in Admin"
- Make sure you are in the **Property** column, not the Account column
- Key events replaced Conversions in 2024 — look for either label depending on the GA4 version shown

### "The event name doesn't appear when I type it"
- That is expected — GA4 lets you type any name, it does not auto-suggest custom events
- Type it exactly as shown and save — GA4 will match it to incoming data

### "It saved but I still see 0 conversions"
- Normal for the first 24–48 hours
- Check Realtime to confirm the events are still firing

### "I see the event in Realtime but the form just says error"
- This would mean the Web3Forms submission failed but the GA4 event still fired
- Check the Web3Forms dashboard at web3forms.com to confirm submissions are arriving
- The access key in use is `b0961ef0-5720-4ac8-b9d9-364326d49dd6`
