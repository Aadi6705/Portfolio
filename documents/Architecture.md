# Architecture.md
## Aditya Srivastava — Personal Portfolio Website

**Related docs:** `PRD.md`, `Rules.md`, `Phases.md`, `Design.md`

---

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Build tool | **Vite** | Instant dev server, fast HMR, small optimized production build |
| Framework | **React 18** (plain JavaScript, not TypeScript) | Component reuse across sections; easier to build phase-by-phase with an AI coding assistant; matches Aditya's current stack (no TS on resume) |
| Styling | **Tailwind CSS** | Utility-first, keeps the "classic, restrained" direction consistent via design tokens in `tailwind.config.js`, avoids CSS specificity fights |
| Icons | **remixicon** (npm) | Same library requested; line-icon style reads professional |
| Fonts | **IBM Plex Sans / Serif / Mono** via `@fontsource` | Self-hosted — no external request at runtime, faster and offline-safe, vs. a raw Google Fonts `<link>` tag |
| Typing animation | **react-typed** (wraps Typed.js) | Same library requested, wired the React-idiomatic way |
| Carousel | **swiper** (`swiper/react`) | Official React components, same library requested |
| Scroll animation | **scrollreveal** | Kept as requested, invoked inside a `useEffect` hook |
| Contact form | **@emailjs/browser** | Official SDK for the same service requested |
| Hosting | **Netlify** | Static hosting, CI on git push, generous free tier |
| Version control | Git + GitHub | — |

> **Note on the "subtle update":** every library named in the original brief is still here — Typed.js, Swiper.js, ScrollReveal, EmailJS, Remix Icons, Google Fonts (via Fontsource). The only change is *how they're assembled*: Vite + React + Tailwind instead of a single HTML file with CDN `<script>` tags. This makes the build modular, versioned, and easy to hand to an AI coding tool one phase at a time, and produces a smaller, faster site.

## 2. High-Level Structure

```
index.html
  └── main.jsx
        └── App.jsx
              ├── Navbar
              ├── Hero
              ├── About
              ├── Education
              ├── Skills
              ├── Projects
              │     └── ProjectCard × n
              ├── Certifications
              ├── Contact
              └── Footer

src/data/content.js   ← single source of truth (profile, education, skills, projects, certifications, socials)
```

## 3. Folder Structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/            # profile photo, project screenshots
│   │   └── icons/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── ProjectCard.jsx
│   │       ├── SectionHeading.jsx
│   │       ├── Button.jsx
│   │       └── SocialLinks.jsx
│   ├── data/
│   │   └── content.js
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── index.css          # Tailwind base + design tokens
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── netlify.toml
├── tailwind.config.js
├── vite.config.js
├── package.json
└── PRD.md / Architecture.md / Rules.md / Phases.md / Design.md / Memory.md
```

## 4. Data Flow

All resume-derived content lives in `src/data/content.js` as plain JS objects/arrays (`profile`, `education`, `skills`, `projects`, `certifications`, `socials`). Components are presentational only — they import from `content.js` and map over arrays. No content is hardcoded inside JSX. Updating a project description or adding a new certification should never require touching component code.

## 5. Third-Party Integrations

- **EmailJS:** service ID, template ID, and public key stored in `.env` (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) — never committed. `.env.example` documents the required keys with blank values.
- **Fonts:** `@fontsource` packages imported once in `main.jsx`.
- **Remixicon:** imported as CSS once in `main.jsx`.

## 6. Build & Deployment Pipeline

1. Local dev: `npm run dev` (Vite dev server)
2. `npm run build` → outputs static `dist/`
3. Netlify: connect the GitHub repo → build command `npm run build` → publish directory `dist` → auto-deploy on push to `main`
4. `netlify.toml` pins the Node version and includes redirect rules (not strictly required for a single static page, but included for future-proofing)

## 7. Performance & Accessibility Architecture

- Images served as WebP where possible; `loading="lazy"` below the fold; explicit width/height to avoid layout shift
- `React.lazy` for heavier sections (Projects, Contact) only if bundle size warrants it
- Fonts loaded with `font-display: swap`
- All motion gated behind a `prefers-reduced-motion` media query

## 8. SEO Architecture

- `index.html` head: title, meta description, canonical URL, Open Graph tags, Twitter card
- `sitemap.xml` and `robots.txt` in `public/`
- Semantic landmarks throughout: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<footer>`
