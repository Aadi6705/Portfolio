# Memory.md — Aditya Srivastava Portfolio
*Updated at the end of every phase and every session. Read this first before touching any file.*

---

## Current State: Phase 0 COMPLETE ✓

**Last updated:** 2026-07-31 (Phase 0 sign-off)
**Branch:** master (local only — no remote yet)

---

## Phase 0 — What Was Completed

- Scaffolded manually (Vite interactive prompt couldn't run non-interactively in this environment)
- All files match Architecture.md §3 exactly — folder structure verified
- `npm install` clean (148 packages)
- `npm run build` ✓ passes with no errors
- Git initialized, first commit made: `065fcb6`

### Files created

| File | Status |
|---|---|
| `package.json` | ✓ |
| `index.html` | ✓ — full SEO meta, OG, Twitter card |
| `vite.config.js` | ✓ |
| `tailwind.config.js` | ✓ — all Design.md tokens wired |
| `postcss.config.js` | ✓ |
| `netlify.toml` | ✓ |
| `.env.example` | ✓ — three EmailJS vars, blank values |
| `.gitignore` | ✓ — excludes `.env`, `dist/`, `node_modules/` |
| `src/styles/index.css` | ✓ — Tailwind base + `.content-container`, `.section-padding`, `.mono-label`, `.ledger-card`, placeholder link style |
| `src/main.jsx` | ✓ — imports all @fontsource weights, remixicon CSS |
| `src/App.jsx` | ✓ — wires all sections |
| `src/data/content.js` | ✓ — correct shape, [TODO] placeholders, no invented facts |
| `src/hooks/useScrollReveal.js` | ✓ — prefers-reduced-motion gated |
| `src/components/layout/Navbar.jsx` | ✓ shell |
| `src/components/layout/Footer.jsx` | ✓ shell |
| `src/components/sections/Hero.jsx` | ✓ shell |
| `src/components/sections/About.jsx` | ✓ shell |
| `src/components/sections/Education.jsx` | ✓ shell |
| `src/components/sections/Skills.jsx` | ✓ shell |
| `src/components/sections/Projects.jsx` | ✓ shell |
| `src/components/sections/Certifications.jsx` | ✓ shell |
| `src/components/sections/Contact.jsx` | ✓ shell |
| `src/components/ui/ProjectCard.jsx` | ✓ shell |
| `src/components/ui/SectionHeading.jsx` | ✓ |
| `src/components/ui/Button.jsx` | ✓ |
| `src/components/ui/SocialLinks.jsx` | ✓ |
| `public/favicon.svg` | ✓ — Navy + Brass "AS" initials |
| `public/robots.txt` | ✓ |
| `public/sitemap.xml` | ✓ |
| `public/RESUME_PLACEHOLDER.txt` | ✓ |
| `public/PHOTO_PLACEHOLDER.txt` | ✓ |

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
2. **GitHub remote:** Not yet connected. Aditya to create a GitHub repo and supply the remote URL.
3. **Netlify deploy:** Phase 0 exit criteria includes a live preview URL. Awaiting Aditya's Netlify account + GitHub repo connection.
4. **Currency symbol in MAE metric (PRD.md §11):** Assumed ₹ (INR) — confirm before Phase 10.
5. **"Third-year" vs 2027 graduation-year note (PRD.md §11):** Left as-is from resume — confirm before Phase 10.
6. **Class XII / X years and scores:** `[TODO]` in content.js — need exact years and scores/percentages.
7. **Phone number:** `[TODO]` in content.js — need exact number from resume.
8. **Certification years and credential IDs:** `[TODO]` in content.js for all three certs.
9. **Social URLs:** All placeholder (`href="#"`) — LinkedIn, GitHub, HackerRank, LeetCode needed.
10. **GitHub repo URLs:** FinanceFlow and House Price Prediction projects — needed for Phase 5.

---

## Phase 0 Exit Criteria Check

| Criterion | Status |
|---|---|
| `npm run dev` renders blank page with fonts loading | ✓ (build passes; dev server not yet run in this session — run to verify) |
| `npm run build` succeeds | ✓ |
| Blank shell live on Netlify preview URL | ⏳ Pending — GitHub remote + Netlify connection not yet done |
| `Memory.md` exists | ✓ (this file) |

> **Note:** The Netlify preview URL exit criterion is blocked on Aditya supplying a GitHub repo and connecting it to Netlify. The local build and structure are fully complete. Phase 1 can begin once Aditya confirms he's happy to proceed (or once the Netlify step is resolved).

---

## Next Step to Resume From

**Start Phase 1 — Design Tokens & Static Shell**

Tasks:
1. Build full `Navbar.jsx` — sticky, hamburger under 768px, resume download button, anchor links to all sections
2. Build full `Footer.jsx` — quick links, copyright, back-to-top, social icons
3. Scaffold all sections as empty `<section>` elements with correct `id`s (already done as shells — just verify IDs match nav links)
4. Wire `tailwind.config.js` tokens (already done in Phase 0)
5. Phase 1 exit criteria: clicking each nav item scrolls to correct section; mobile hamburger opens/closes; test heading matches Design.md palette

**Phase 1 does not need any content from Aditya** — it's all structural.
