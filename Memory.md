# Memory.md — Aditya Srivastava Portfolio
*Updated at the end of every phase and every session. Read this first before touching any file.*

---

## Current State: Phase 1 COMPLETE ✓

**Last updated:** 2026-07-31 (Phase 1 sign-off)
**Branch:** main (synced with GitHub remote)

---

## Phase 1 — What Was Completed

- Built `Navbar.jsx` with responsive sticky behavior, active section tracking (IntersectionObserver), and mobile hamburger menu.
- Built `Footer.jsx` matching Design.md palette (Deep Navy/Brass/Slate) and styling.
- Added reusable `SectionHeading.jsx` component.
- Updated all section shells (`Hero`, `About`, `Education`, `Skills`, `Projects`, `Certifications`, `Contact`) with `SectionHeading` and proper `id` linking.
- Validated `npm run build` succeeds and Phase 1 exit criteria are met.

### Files modified

| File | Status |
|---|---|
| `src/components/layout/Navbar.jsx` | ✓ |
| `src/components/layout/Footer.jsx` | ✓ |
| `src/components/ui/SectionHeading.jsx` | ✓ |
| `src/components/sections/*.jsx` | ✓ (shells updated) |

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
10. **Resume & Photo:** `public/resume.pdf` and `public/profile.jpg` needed before Phase 2 sign-off.

---

## Phase 1 Exit Criteria Check

| Criterion | Status |
|---|---|
| `npm run build` succeeds | ✓ |
| Nav clicks scroll to correct section | ✓ |
| Mobile hamburger opens/closes | ✓ |
| Test heading matches Design.md | ✓ |

---

## Next Step to Resume From

**Start Phase 2 — Hero Section**

Tasks:
1. Build full `Hero.jsx` section.
2. Integrate `typed.js` for rotating role text.
3. Include primary CTAs (Contact, Download Resume) and photo.
4. Ensure reduced-motion respects static text.
5. Needs `resume.pdf` and `profile.jpg` for full completion.
