# Phases.md
## Aditya Srivastava — Personal Portfolio Website

**Related docs:** `PRD.md`, `Architecture.md`, `Rules.md`, `Design.md`

The build is broken into phases so an AI coding assistant (or Aditya himself) can work in manageable, verifiable steps rather than attempting the whole site at once. Don't move to the next phase until the current one's exit criteria are met (see `Rules.md` §7–8). `Memory.md` gets updated at the end of every phase.

---

### Phase 0 — Project Setup
**Goal:** scaffolding is ready; nothing visual yet beyond a blank shell.
- Scaffold with Vite (React template), install Tailwind and configure it
- Install all approved libraries (`Rules.md` §1)
- Create the folder structure exactly as in `Architecture.md` §3
- Add fonts via `@fontsource`
- Create `src/data/content.js` skeleton — correct shape, empty/placeholder values
- Initialize git; connect the repo to Netlify and confirm a blank deploy works
- Create `Memory.md`

**Exit criteria:** `npm run dev` renders a blank page with fonts loading correctly; a blank shell is live on a Netlify preview URL; `Memory.md` exists.

---

### Phase 1 — Design Tokens & Static Shell
**Goal:** `Design.md` tokens implemented in `tailwind.config.js` / `index.css`; Navbar and Footer built (placeholder links only); all sections scaffolded as empty `<section>` elements with correct `id`s so anchor navigation works end-to-end.

**Exit criteria:** clicking each nav item scrolls to the correct (empty) section; mobile hamburger menu opens and closes; a test heading visibly matches the Design.md palette/typography.

---

### Phase 2 — Hero Section
**Goal:** full Hero — name, rotating role text via Typed.js, one-line positioning statement, photo, primary CTAs (Contact, Download Resume).

**Exit criteria:** `resume.pdf` downloads correctly; Typed.js cycles through roles; layout is responsive at all breakpoints; reduced-motion users see static role text instead of the animation.

---

### Phase 3 — About & Education
**Goal:** rewritten About/summary copy; Education timeline (SRM IST + City Montessori Class XII & X) rendered from `content.js`.

**Exit criteria:** all content pulled only from `content.js`; timeline order decided and documented in `Memory.md`; responsive at all breakpoints.

---

### Phase 4 — Skills
**Goal:** grouped skill categories (Languages, Data/ML, Web, Tools) rendered from `content.js`.

**Exit criteria:** categories are visually distinct, not a flat tag dump; sensible keyboard/screen-reader order.

---

### Phase 5 — Projects
**Goal:** build `ProjectCard` once, reuse for FinanceFlow and the Explainable House Price Prediction project — each showing stack tags, highlight bullets, metrics, and a GitHub link.

**Exit criteria:** both projects present with data matching the resume; external links open in a new tab with `rel="noopener noreferrer"`; cards stack to a single column under 768px.

---

### Phase 6 — Certifications
**Goal:** display JPMorgan Forage, NPTEL Java, and Coursera IBM Data Science certifications — as a Swiper carousel only if it visibly improves scannability with this many items; otherwise a clean list is acceptable (decide and record the reasoning in `Memory.md`).

**Exit criteria:** all three certifications present, including the IBM credential ID; if Swiper is used, it is keyboard-navigable with visible pagination.

---

### Phase 7 — Contact
**Goal:** form (name, email, message) with client-side validation, EmailJS wiring, success/error UI; direct mailto/phone; social icon links (LinkedIn, GitHub, HackerRank, LeetCode — placeholders per `Rules.md` §3 if URLs are still unknown).

**Exit criteria:** a test submission succeeds end-to-end against an EmailJS test template; invalid input is blocked with inline messages; no real keys anywhere in source control.

---

### Phase 8 — Motion & Polish
**Goal:** wire ScrollReveal on section entrances; add hover/focus micro-interactions on buttons, cards, and links per `Design.md`; final spacing and rhythm pass.

**Exit criteria:** `prefers-reduced-motion` disables non-essential animation; no layout shift introduced by animation; visual QA against `Design.md` tokens.

---

### Phase 9 — SEO, Accessibility & Performance Pass
**Goal:** meta tags, Open Graph/Twitter card, `sitemap.xml`, `robots.txt`, favicon; run a Lighthouse audit; alt-text audit; contrast audit.

**Exit criteria:** Lighthouse ≥ 90 across Performance, Accessibility, Best Practices, and SEO — mobile and desktop.

---

### Phase 10 — Cross-Browser QA & Launch
**Goal:** manual QA across Chrome, Firefox, Edge, Safari, iOS Safari, and Chrome Android; final production deploy to Netlify; custom domain wired if applicable.

**Exit criteria:** no visual or functional regressions across tested browsers/devices; production URL is live; all `PRD.md` §11 open questions (social links, currency symbol, grad-year note) are resolved or explicitly deferred with Aditya's sign-off.
