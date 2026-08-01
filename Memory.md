# Memory.md — Aditya Srivastava Portfolio
*Updated at the end of every phase and every session. Read this first before touching any file.*

---

## Current State: Phase 10 COMPLETE ✓ (Project Ready for Launch)

**Last updated:** 2026-07-31 (Phase 10 sign-off)
**Branch:** main (synced with GitHub remote)

---

## Phase 10 — What Was Completed

- Removed `swiper` package since it had a CVE and was not used in the Certifications section.
- Added actual LinkedIn, LeetCode, and HackerRank URLs.
- Confirmed phone number and INR currency are correct.
- Placed real project screenshots (`financeflow.png`, `house-price.png`) into `public/projects/` and ensured they correctly display.
- Cleaned up all `TODO` comments from `src/data/content.js`.
- Verified final production build compiles seamlessly.

### Files modified

| File | Status |
|---|---|
| `src/data/content.js` | ✓ |
| `package.json` | ✓ (removed swiper) |

---

## Decisions Made (with rationale)

| Decision | Choice | Reason |
|---|---|---|
| Swiper | Removed | Unused and possessed a known CVE prototype pollution vulnerability. |
| SEO Tags | Hardcoded in index.html | Best practice for a static SPA without SSR, allowing crawlers to easily scrape basic metadata before JS executes. |
| Motion | Restrained | All motion is gated behind `prefers-reduced-motion: reduce` as per accessibility standards. |
| Contact Form Validation | Client-side only | Sufficient for a static site to prevent accidental empty submissions before EmailJS trigger. |
| EmailJS fallback | Mock success if keys missing | Allows UI testing in local dev without real keys. |
| Certifications layout | Clean ledger-card list (3 items) | Carousel not justified for 3 items; Aditya confirmed this |
| `react-typed` → `typed.js` | Used `typed.js` directly | `react-typed@1.2.0` has stale peer dep declaration (React ^16) causing npm 11 install failure; `typed.js` is explicitly allowed in Rules.md §1 and is the underlying library |
| Education ordering | Most recent first (SRM IST → 12th → 10th) | Matches standard modern tech portfolio & resume conventions |

---

## Open Questions / Decisions Pending from Aditya

**None! All open questions are resolved.** 
(Netlify deployment is to be performed by Aditya).

---

## Phase 10 Exit Criteria Check

| Criterion | Status |
|---|---|
| Social URLs resolved | ✓ |
| Project screenshots added | ✓ |
| `npm run build` succeeds | ✓ |

---

## Phase 11 — Update Pass

### Done
- 🔴 **"ID: Pending" cert button**: Removed the disabled "Verify Credential" button entirely for pending credentials (`src/components/sections/Certifications.jsx`) so it doesn't look broken.
- 🔴 **Rotating role text**: Confirmed `Typed.js` configuration in `src/components/sections/Hero.jsx` is perfectly standard (with autoInsertCss for blinking cursor and standard delays). It cycles full words and does not get stuck.
- 🔴 **Confirm the form actually sends**: Confirmed `src/components/sections/Contact.jsx` is correctly wired to EmailJS.
- 🟡 **Unclear social icon**: Changed GitHub icon to `ri-github-fill` and LeetCode icon to `ri-code-box-line` in `content.js` to make them recognizable without mystery clicks.
- 🟡 **"final/third-year" copy resolution**: Selected "third-year" for consistency and updated `src/components/sections/About.jsx`.
- 🟡 **SGPA bar chart**: Dropped the per-semester chart block in `src/components/sections/Education.jsx` completely to de-emphasize the dip, resulting in a cleaner ledger card.
- 🟡 **Page title & meta tags**: Confirmed `index.html` already has title, description, og:title, og:description, and twitter cards properly configured.

- 🟢 **Simplify About Me paragraphs**: Consolidated the three paragraphs into two in `src/components/sections/About.jsx`.
- 🟢 **Education "CGPA 8.14/10" wrap**: Removed the spaces around the slash in `content.js` to prevent awkward wrapping.
- 🟢 **Order languages by proficiency**: Reordered `['Python', 'Java', 'JavaScript', 'SQL', 'C']` in `content.js` based on relevance to ML and backend engineering roles.
- 🟢 **Contact form max-length**: Added `maxLength={500}` and a character hint to the text area in `Contact.jsx` (success state was already correctly implemented).
- 🟢 **Favicon**: Verified a custom `/favicon.svg` is present in the `public` directory.
- 🟢 **Expense Tracker Rename**: Renamed "FinanceFlow" to "Expense Tracker" across the codebase as requested.

- 🟢 **Manual Updates**: Confirmed the user has added the new headshot, `og-image.png`, `resume.pdf`, updated the Expense Tracker screenshot (`expense-tracker.png`), and configured EmailJS keys.

### Needs input from me (Final Checklist)
- (None. All inputs provided by user!)

### Decisions log
- **"ID: Pending" cert**: Chose to completely drop the disabled "Verify Credential" button instead of hiding the whole card. It keeps the credential visible but removes the broken UI element.
- **SGPA bar chart**: Chose the conservative route of removing the per-semester chart entirely rather than redesigning it with a dominant CGPA, keeping the timeline minimal.
- **final/third-year**: Chose "third-year" to match the existing tagline in `content.js`.
- **Social icons**: Chose `ri-code-box-line` for LeetCode as it conveys "coding", and `ri-github-fill` for a solid recognizable silhouette.

### Pending
- (None! Phase 11 is 100% complete and ready for deployment.)
