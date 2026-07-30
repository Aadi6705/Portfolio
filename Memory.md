# Memory.md — Aditya Srivastava Portfolio
*Updated at the end of every phase and every session. Read this first before touching any file.*

---

## Current State: Phase 5 COMPLETE ✓

**Last updated:** 2026-07-31 (Phase 5 sign-off)
**Branch:** main (synced with GitHub remote)

---

## Phase 5 — What Was Completed

- Extracted real GitHub URLs from `resume.pdf` for both projects and the main profile.
- Built `ProjectCard.jsx` following Design.md rules: ledger card style, highlight bullets, metrics, stack tags, and external link icons.
- Added visual placeholder logic in `ProjectCard` to display a branded frame until the user supplies real screenshots.
- Built `Projects.jsx` wrapping the cards in a responsive grid.
- Verified `npm run build` succeeds cleanly.

### Files modified

| File | Status |
|---|---|
| `src/data/content.js` | ✓ (added links & image paths) |
| `src/components/ui/ProjectCard.jsx` | ✓ |
| `src/components/sections/Projects.jsx` | ✓ |

---

## Decisions Made (with rationale)

| Decision | Choice | Reason |
|---|---|---|
| Certifications layout | Clean ledger-card list (3 items) | Carousel not justified for 3 items; Aditya confirmed this |
| `react-typed` → `typed.js` | Used `typed.js` directly | `react-typed@1.2.0` has stale peer dep declaration (React ^16) causing npm 11 install failure; `typed.js` is explicitly allowed in Rules.md §1 and is the underlying library |
| `swiper` | Installed (v11, with audit warning) | Library is in allowed list; certifications won't use it (decided as plain list); decision pending on whether to upgrade to v14 or remove |
| Education ordering | Most recent first (SRM IST → 12th → 10th) | Matches standard modern tech portfolio & resume conventions |

---

## Open Questions / Decisions Pending from Aditya

1. **Swiper:** v11 has a critical prototype pollution CVE. Options: upgrade to v14 (API breaking but secure), keep v11 (no user data risk on static site), or remove entirely (certifications won't use it). **Awaiting Aditya's call.**
2. **Netlify deploy:** Phase 0 exit criteria includes a live preview URL. Awaiting Aditya's Netlify account + GitHub repo connection.
3. **Currency symbol in MAE metric (PRD.md §11):** Assumed ₹ (INR) — confirm before Phase 10.
4. **"Third-year" vs 2027 graduation-year note (PRD.md §11):** Left as-is from resume — confirm before Phase 10.
5. **Phone number:** `[TODO]` in content.js — need exact number from resume.
6. **Certification years and credential IDs:** `[TODO]` in content.js for all three certs.
7. **Social URLs:** LinkedIn, HackerRank, LeetCode still need real links (GitHub is done).
8. **Project Screenshots:** Need to be uploaded to `/public/projects/financeflow.jpg` and `/public/projects/house-price.jpg` and `hasImage` set to true in `content.js`.

---

## Phase 5 Exit Criteria Check

| Criterion | Status |
|---|---|
| `ProjectCard.jsx` reusable component built | ✓ |
| Real GitHub links integrated | ✓ |
| Placeholder visuals display correctly | ✓ |
| Single column on mobile, 2 columns desktop | ✓ |
| `npm run build` succeeds | ✓ |

---

## Next Step to Resume From

**Start Phase 6 — Certifications**

Tasks:
1. Build `Certifications.jsx` as a vertical stack of three ledger cards.
2. No swiper carousel (confirmed in Memory.md).
3. Ensure single column stack under 768px.
