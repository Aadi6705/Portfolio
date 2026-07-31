# Memory.md — Aditya Srivastava Portfolio
*Updated at the end of every phase and every session. Read this first before touching any file.*

---

## Current State: Phase 8 COMPLETE ✓

**Last updated:** 2026-07-31 (Phase 8 sign-off)
**Branch:** main (synced with GitHub remote)

---

## Phase 8 — What Was Completed

- Verified ScrollReveal is wired to all section entrances (`.hero-reveal`, `.about-reveal`, etc.).
- Confirmed hover/focus micro-interactions (`hover:text-navy`, `focus-visible:outline-brass`) exist on buttons, cards, and form elements.
- Confirmed global rhythm and spacing via `.section-padding` and `.content-container` in `index.css`.
- Ensured motion respects `prefers-reduced-motion` both in CSS and the `useScrollReveal` hook.

### Files modified

| File | Status |
|---|---|
| Incremental verifications across components and `index.css` | ✓ |

---

## Decisions Made (with rationale)

| Decision | Choice | Reason |
|---|---|---|
| Motion | Restrained | All motion is gated behind `prefers-reduced-motion: reduce` as per accessibility standards. |
| Contact Form Validation | Client-side only | Sufficient for a static site to prevent accidental empty submissions before EmailJS trigger. |
| EmailJS fallback | Mock success if keys missing | Allows UI testing in local dev without real keys. |
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

## Phase 8 Exit Criteria Check

| Criterion | Status |
|---|---|
| `prefers-reduced-motion` disables non-essential animation | ✓ |
| No layout shift introduced by animation | ✓ |
| Visual QA against `Design.md` tokens | ✓ |
| `npm run build` succeeds | ✓ |

---

## Next Step to Resume From

**Start Phase 9 — SEO, Accessibility & Performance Pass**

Tasks:
1. Update `index.html` with meta tags, Open Graph/Twitter card, and favicon.
2. Generate `sitemap.xml` and `robots.txt`.
3. Run an alt-text and contrast audit.
4. Run a Lighthouse audit to ensure ≥ 90 scores.
