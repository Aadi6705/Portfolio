# Rules.md
## Aditya Srivastava — Personal Portfolio Website

**Related docs:** `PRD.md`, `Architecture.md`, `Phases.md`, `Design.md`

These are the guardrails for anyone — human or AI coding assistant — working on this repo. Read this before writing code in any phase. When in doubt, ask Aditya rather than guess.

---

## 1. Allowed Stack

Use only what's listed here unless Aditya explicitly approves an addition:

- Vite, React 18, Tailwind CSS
- `@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-serif`, `@fontsource/ibm-plex-mono`
- `remixicon`
- `react-typed` (or `typed.js` directly)
- `swiper` (React components)
- `scrollreveal`
- `@emailjs/browser`

## 2. Disallowed Unless Explicitly Requested

- No additional UI kits (MUI, Chakra, Bootstrap, Ant Design) — Tailwind only, per `Design.md`
- No jQuery
- No CSS-in-JS libraries (styled-components, Emotion) — Tailwind utility classes + `src/styles/index.css` only
- No state management libraries (Redux, Zustand, etc.) — this is a static content site; plain `useState`/props are enough
- No backend framework, no database — the contact form stays frontend-only via EmailJS
- No stock-photo hero illustrations or generic "developer at laptop" imagery — use real project screenshots or the typographic/geometric treatment described in `Design.md`
- No numbered "01 / 02 / 03" section markers unless the content is genuinely sequential (the education timeline qualifies; decorative section numbering does not — see `Design.md` §5)

## 3. Content Rules

- All resume-derived facts (dates, GPA, scores, project metrics, certification IDs) must live in `src/data/content.js`, sourced only from Aditya's resume or from what he explicitly supplies in chat. Never invent employers, metrics, testimonials, or dates.
- Fix obvious resume typos in on-site copy (see `PRD.md` §10), but never alter factual claims — GPA, percentages, dates, project results — without confirming with Aditya first.
- Where a link is unknown (LinkedIn, GitHub, HackerRank, LeetCode, live demos), use `href="#"` with a `data-placeholder="true"` attribute or a `// TODO` comment rather than guessing a URL.

## 4. Design Rules

- Follow `Design.md` token values exactly (colors, type scale, spacing, motion). Any deviation must be reflected back into `Design.md`, not left as an undocumented one-off.
- Keep the tone classic and professional — no neon gradients, no glassmorphism, no heavy drop shadows, no auto-playing background video or audio.
- Motion stays restrained: fades and small upward reveals only, 200–400ms. No parallax, no 3D tilt, no confetti. Always respect `prefers-reduced-motion`.

## 5. Accessibility Rules

- Every image needs meaningful `alt` text (purely decorative images get `alt=""`).
- Color contrast must meet WCAG AA against the chosen background.
- All interactive elements must be reachable and operable by keyboard, with a visible focus ring — don't remove `outline` without replacing it with an equally visible alternative.
- Form fields have associated `<label>`s; validation errors are announced via `aria-live`, not color alone.

## 6. Error Handling Rules

- Contact form: validate required fields and email format client-side before sending. On an EmailJS failure, show an inline retry message — never fail silently or only log to console.
- Placeholder external links should not silently 404 — mark them visually (e.g. a muted state or small "coming soon" note) until real URLs are supplied.
- Any build-breaking change must be caught locally with `npm run build` before a phase is considered done.

## 7. Process Rules

- Work one phase at a time, per `Phases.md`. Don't start Phase N+1 until Phase N's exit criteria are met.
- Don't change the tech stack, add a new dependency, remove a section, or expand scope beyond `PRD.md` without flagging it to Aditya first.
- At the end of each work session, update `Memory.md` with: what was completed, current file state, the next step, and any open decisions still pending.
- Never commit `.env` or real EmailJS keys to git — `.env.example` only, with blank placeholder values.

## 8. Definition of Done (per phase)

- Matches the exit criteria listed for that phase in `Phases.md`
- `npm run build` succeeds with no errors or warnings
- Responsive-checked at 320px, 768px, 1024px, and 1440px
- No errors in the browser console
- `Memory.md` updated
