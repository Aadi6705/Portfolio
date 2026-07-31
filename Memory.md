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

## Next Step to Resume From

**Launch!** 🚀
Deploy the repository to Netlify via the GitHub integration and share the live URL.
