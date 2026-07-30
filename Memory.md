# Memory.md — Aditya Srivastava Portfolio
*Updated at the end of every phase and every session. Read this first before touching any file.*

---

## Current State: Phase 3 COMPLETE ✓

**Last updated:** 2026-07-31 (Phase 3 sign-off)
**Branch:** main (synced with GitHub remote)

---

## Phase 3 — What Was Completed

- Extracted accurate marks, years, and semester scores from `documents/Academics.md`.
- Updated `src/data/content.js` with exact academic details:
  - SRM IST (2023–2027, CGPA 8.14, 0 Backlogs, Sem 1–6 SGPA breakdown).
  - Class XII (City Montessori School, CISCE, 2022–2023, 87%, CGPA 8.7).
  - Class X (City Montessori School, CISCE, 2020–2021, 85.2%, CGPA 8.52).
- Built `About.jsx` rendering clean, professional summary copy and a profile highlight card.
- Built `Education.jsx` displaying a two-tier timeline with custom brass markers, backlogs badge, and an inline SVG-less SGPA bar chart for semester performance.
- Verified `npm run build` succeeds.

### Files modified

| File | Status |
|---|---|
| `documents/Academics.md` | ✓ (read as source of truth) |
| `src/data/content.js` | ✓ (updated `education`) |
| `src/components/sections/About.jsx` | ✓ |
| `src/components/sections/Education.jsx` | ✓ |

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
7. **Social URLs:** All placeholder (`href="#"`) — LinkedIn, GitHub, HackerRank, LeetCode needed.
8. **GitHub repo URLs:** FinanceFlow and House Price Prediction projects — needed for Phase 5.

---

## Phase 3 Exit Criteria Check

| Criterion | Status |
|---|---|
| Content pulled only from `content.js` | ✓ |
| Timeline order decided & documented | ✓ |
| Responsive at all breakpoints | ✓ |
| `npm run build` succeeds | ✓ |

---

## Next Step to Resume From

**Start Phase 4 — Skills**

Tasks:
1. Render grouped skill categories (Languages, Data & ML, Web, Tools) from `content.js`.
2. Ensure visually distinct, ledger-card style categories (not a flat tag dump).
3. Ensure sensible keyboard/screen-reader order.
