# Memory.md — Aditya Srivastava Portfolio
*Updated at the end of every phase and every session. Read this first before touching any file.*

---

## Current State: Phase 4 COMPLETE ✓

**Last updated:** 2026-07-31 (Phase 4 sign-off)
**Branch:** main (synced with GitHub remote)

---

## Phase 4 — What Was Completed

- Built `Skills.jsx` component rendering technical skills in 4 ledger-card categories (**Languages**, **Data & ML**, **Web**, **Tools**).
- Used IBM Plex Mono for tag labels and Remix Icons for category headings.
- Ensured non-flat tag dump layout and full keyboard/screen-reader accessibility.
- Verified `npm run build` succeeds cleanly.

### Files modified

| File | Status |
|---|---|
| `src/components/sections/Skills.jsx` | ✓ |

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
9. **Project Visuals / Screenshots:** Screenshots or diagrams for FinanceFlow and Explainable House Price Prediction (until supplied, placeholder frames are used per system instructions).

---

## Phase 4 Exit Criteria Check

| Criterion | Status |
|---|---|
| Categories visually distinct (not flat tag dump) | ✓ |
| Keyboard/screen-reader order sensible | ✓ |
| `npm run build` succeeds | ✓ |

---

## Next Step to Resume From

**Start Phase 5 — Projects**

Tasks:
1. Build reusable `ProjectCard.jsx` showing stack tags, highlight bullets, metrics, and GitHub links.
2. Build `Projects.jsx` displaying **FinanceFlow** and **Explainable House Price Prediction** in ledger cards.
3. Ensure single column stack under 768px and external links open in new tab with `rel="noopener noreferrer"`.
4. Ask user for GitHub repo links and project diagrams/screenshots if available.
