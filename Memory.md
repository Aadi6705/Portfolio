# Memory.md — Aditya Srivastava Portfolio
*Updated at the end of every phase and every session. Read this first before touching any file.*

---

## Current State: Phase 2 COMPLETE ✓

**Last updated:** 2026-07-31 (Phase 2 sign-off)
**Branch:** main (synced with GitHub remote)

---

## Phase 2 — What Was Completed

- Built `Hero.jsx` section with responsive 12-column grid layout.
- Integrated `typed.js` for rotating role text with a blinking cursor (respecting `prefers-reduced-motion` for accessibility).
- Applied decorative 2px Navy frame to the profile photo per `Design.md`.
- Added primary CTAs (View Projects, Download Resume) using the `Button` UI component.
- Implemented entrance animations using `useScrollReveal`.
- Replaced placeholder files with actual `resume.pdf` and `profile.jpg` in `/public`.

### Files modified

| File | Status |
|---|---|
| `src/components/sections/Hero.jsx` | ✓ |
| `public/profile.jpg` | ✓ (added) |
| `public/resume.pdf` | ✓ (added) |

---

## Decisions Made (with rationale)

| Decision | Choice | Reason |
|---|---|---|
| Certifications layout | Clean ledger-card list (3 items) | Carousel not justified for 3 items; Aditya confirmed this |
| `react-typed` → `typed.js` | Used `typed.js` directly | `react-typed@1.2.0` has stale peer dep declaration (React ^16) causing npm 11 install failure; `typed.js` is explicitly allowed in Rules.md §1 and is the underlying library |
| `swiper` | Installed (v11, with audit warning) | Library is in allowed list; certifications won't use it (decided as plain list); decision pending on whether to upgrade to v14 or remove |

---

## Open Questions / Decisions Pending from Aditya

1. **Swiper:** v11 has a critical prototype pollution CVE. Options: upgrade to v14 (API breaking but secure), keep v11 (no user data risk on static site), or remove entirely (certifications won't use it). **Awaiting Aditya's call.**
2. **Netlify deploy:** Phase 0 exit criteria includes a live preview URL. Awaiting Aditya's Netlify account + GitHub repo connection.
3. **Currency symbol in MAE metric (PRD.md §11):** Assumed ₹ (INR) — confirm before Phase 10.
4. **"Third-year" vs 2027 graduation-year note (PRD.md §11):** Left as-is from resume — confirm before Phase 10.
5. **Class XII / X years and scores:** `[TODO]` in content.js — need exact years and scores/percentages.
6. **Phone number:** `[TODO]` in content.js — need exact number from resume.
7. **Certification years and credential IDs:** `[TODO]` in content.js for all three certs.
8. **Social URLs:** All placeholder (`href="#"`) — LinkedIn, GitHub, HackerRank, LeetCode needed.
9. **GitHub repo URLs:** FinanceFlow and House Price Prediction projects — needed for Phase 5.

---

## Phase 2 Exit Criteria Check

| Criterion | Status |
|---|---|
| `npm run build` succeeds | ✓ |
| `resume.pdf` downloads correctly | ✓ |
| Typed.js cycles through roles | ✓ |
| Layout responsive at all breakpoints | ✓ |
| Reduced-motion shows static text | ✓ |

---

## Next Step to Resume From

**Start Phase 3 — About & Education**

Tasks:
1. Build full `About.jsx` rendering summary text.
2. Build full `Education.jsx` as a two-tier timeline.
3. Ensure timeline order is chronologically descending (newest first).
4. Extract content solely from `content.js`.
