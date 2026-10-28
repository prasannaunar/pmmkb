# Google Tag Manager: site events

`pmmkb-container-import.json` adds this site's event tracking to the GTM
container `GTM-PLSPM9T6`, sending to the GA4 property `G-XLW52C9PN2`. It holds
six GA4 event tags, their triggers and variables, all in a folder called
"Site events (imported)". It does not touch the existing Google tag.

## What is tracked

Every event also carries `page_url`, `page_path` and `referrer`.

| Event | Sent when | Parameters |
|---|---|---|
| `link_click` | Any link is clicked (GTM's link click trigger) | `click_text`, `click_url` |
| `quiz_start` | "Start quiz" is pressed | `quiz_type` (`entry`, `category`, `learning_path`), `quiz_id` (the slug) |
| `quiz_answer` | An option is chosen | `quiz_type`, `quiz_id`, `question_number`, `answer_correct` |
| `quiz_complete` | "See results" is pressed | `quiz_type`, `quiz_id`, `quiz_score`, `quiz_total` |
| `search` | The visitor stops typing in search for 1.5 seconds | `search_term`, `search_results` (0 shows a content gap) |
| `theme_change` | The light/dark toggle is pressed | `theme` |

The site pushes the last five to the dataLayer itself through `track()` in
`web/src/lib/analytics.ts`, and only after the visitor accepts cookies. To add
an event, add it to the `SiteEvent` type there, call `track()`, then add a
custom event trigger and a GA4 event tag in GTM.

GA4 already records page views with the built-in dimensions **Page location**,
**Page path** and **Page referrer**, including client-side navigation. The
custom `page_url`, `page_path` and `referrer` dimensions cover the events
above. GTM's `referrer` is the page the visitor arrived from, so it stays the
same for every event in a visit.

## 1. Import into GTM

1. In GTM, open the container `GTM-PLSPM9T6`, then **Admin → Import container**.
2. Choose `pmmkb-container-import.json`.
3. Workspace: **Existing**, Default Workspace.
4. Option: **Merge**, then **Rename conflicting tags, triggers, and variables**.
5. Check the summary (6 tags, 6 triggers, 10 variables added) and **Confirm**.
6. Click **Preview**, enter `https://www.pmmkb.com/`, click **Accept** on the
   cookie banner, then click a link, take a quiz, search and switch theme.
   Each action should show its "GA4 event" tag as fired.
7. **Submit**, then **Publish**.

## 2. Register the custom definitions in GA4

GA4 reports a parameter only after it is registered, and only from that moment
on. Do this on the day you publish. **Admin → Data display → Custom
definitions → Create custom dimension**, scope **Event**:

| Dimension name | Event parameter |
|---|---|
| Click text | `click_text` |
| Click URL | `click_url` |
| Page URL | `page_url` |
| Page path (event) | `page_path` |
| Referrer | `referrer` |
| Quiz type | `quiz_type` |
| Quiz ID | `quiz_id` |
| Question number | `question_number` |
| Answer correct | `answer_correct` |
| Search results | `search_results` |
| Theme | `theme` |

Then **Custom metrics**, scope **Event**, unit **Standard**:

| Metric name | Event parameter |
|---|---|
| Quiz score | `quiz_score` |
| Quiz total | `quiz_total` |

`search_term` needs no registration: GA4's built-in **Search term** dimension
reads it.

## 3. Mark key events

In **Admin → Data display → Events**, once `quiz_complete` has arrived (up to
24 hours after the first one), switch on **Mark as key event**.

## Check it

**Reports → Realtime** shows the events within a minute. **Admin →
DebugView** shows each one with its parameters while GTM Preview is open.
