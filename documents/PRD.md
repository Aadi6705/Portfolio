# Product Requirements Document (PRD)
## Aditya Srivastava — Personal Portfolio Website

**Version:** 1.0
**Status:** Draft for build
**Related docs:** `Architecture.md`, `Rules.md`, `Phases.md`, `Design.md`, `Memory.md` (created at Phase 0)

---

## 1. Purpose

Build a single-page, statically-hosted personal portfolio site that presents Aditya as a credible, hire-ready B.Tech Computer Science & Business Systems student to recruiters, hiring managers, and professional contacts — classic and professional in tone, not flashy.

## 2. Problem Statement

Right now the only artifact recruiters see is a PDF resume. A PDF can't link out to live GitHub repos, can't be skimmed on mobile as easily as a web page, and gives no room to explain a project's reasoning (e.g., *why* SHAP was used, *what* the finance app actually does). A portfolio site solves this: scannable in seconds, linkable in an email signature or LinkedIn profile, and something Aditya can keep updating.

## 3. Target Users

1. **Campus recruiters / HR** scanning for SDE, data, or software internship/full-time candidates — need credibility fast.
2. **Engineering managers / interviewers** who click through before or after a technical round — need real project depth (stack, metrics, code).
3. **Professional contacts** (LinkedIn connections, professors, mentors) — need a current, canonical summary.
4. **Aditya himself** — the site should be easy for him to keep current as he adds projects.

## 4. Goals

- Establish credibility within ~10 seconds of landing (name, role, one differentiator).
- Make both flagship projects — **FinanceFlow** and the **Explainable House Price Prediction** system — legible to technical and non-technical readers alike.
- Frictionless contact, resume download, and links out to LinkedIn, GitHub, HackerRank, LeetCode.

## 5. Success Metrics

- A recruiter can name Aditya's stack, both projects, and how to contact him after 30 seconds on the page.
- Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices, and SEO — mobile and desktop.
- Fully usable from 320px width up to a 4K desktop.

## 6. Scope — In (v1)

Single page, anchor-linked navigation, with these sections:

| Section | Contents |
|---|---|
| **Nav** | Sticky, collapses to hamburger under 768px; resume download button |
| **Hero** | Name, rotating role text (Typed.js), one-line positioning statement, photo, primary CTAs |
| **About** | Rewritten, typo-corrected version of the resume summary |
| **Education** | SRM IST B.Tech CSBS (CGPA 8.14/10, class of 2027); City Montessori School Class XII & X — shown as a timeline |
| **Skills** | Grouped (Languages, Data/ML, Web, Tools) — not a flat tag list |
| **Projects** | FinanceFlow and Explainable House Price Prediction, each as a detailed case card: problem, stack, highlights, metrics, GitHub link |
| **Certifications** | JPMorgan Forage Software Engineering, NPTEL Java, Coursera IBM Data Science (credential ID) |
| **Contact** | Form (name, email, message) via EmailJS + direct mailto/phone + social links |
| **Footer** | Quick links, copyright, back-to-top |

## 7. Scope — Out (v1)

- Blog / articles
- CMS or admin panel
- Backend server or database (contact form is frontend-only, via EmailJS)
- Multi-language support
- User accounts / authentication
- Analytics dashboards (may revisit later)

## 8. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-1 | Hero renders name, Typed.js rotating role text, CTA buttons | Must |
| FR-2 | Nav is sticky; collapses to a hamburger menu under 768px | Must |
| FR-3 | Resume PDF downloadable from nav and hero | Must |
| FR-4 | Education section shows a two-tier academic timeline with dates/scores | Must |
| FR-5 | Skills grouped by category | Must |
| FR-6 | Each project card shows: name, one-line description, tech tags, highlight bullets, GitHub link (new tab) | Must |
| FR-7 | Certifications show issuer + credential ID where available | Must |
| FR-8 | Contact form validates client-side, sends via EmailJS, shows success/error state | Must |
| FR-9 | Fully responsive at defined breakpoints (see `Design.md`) | Must |
| FR-10 | External links open with `target="_blank" rel="noopener noreferrer"` | Must |
| FR-11 | Social links (LinkedIn, GitHub, HackerRank, LeetCode) in header/footer | Must |
| FR-12 | Scroll-reveal entrance animation, respecting `prefers-reduced-motion` | Should |
| FR-13 | Swiper carousel for certifications, if item count justifies it | Could |
| FR-14 | Dark mode toggle | Could (stretch) |

## 9. Non-Functional Requirements

- **Performance:** Lighthouse Performance ≥ 90 mobile; total JS < 250KB gzipped (excluding fonts)
- **Accessibility:** WCAG 2.1 AA contrast, semantic landmarks, full keyboard navigation, visible focus states
- **SEO:** meta title/description, Open Graph + Twitter card, `sitemap.xml`, `robots.txt`, correct heading order
- **Browser support:** latest two versions of Chrome, Edge, Firefox, Safari; iOS Safari, Chrome Android
- **Hosting:** static build on Netlify, zero server maintenance

## 10. Content Fixes Needed (from resume → site copy)

The resume PDF has a few extraction artifacts and typos that should be cleaned up in the site copy (facts themselves are not to be changed without confirming with Aditya):

| Resume text | Site copy |
|---|---|
| "hands-onexperience" | "hands-on experience" |
| "Sofware Development" | "Software Development" |
| "Fnance" / "fnance" | "Finance" |
| "Artifcial Intelligence" | "Artificial Intelligence" |
| "Profciency" | "Proficiency" |
| "Identifed" | "Identified" |
| MAE ≈ [garbled glyph] 15,562 | Assumed **₹15,562** (Indian Rupee) — **confirm with Aditya** |

## 11. Open Questions / Assumptions

- No URLs supplied for LinkedIn, GitHub, HackerRank, LeetCode, or GitHub repo links for the two projects — placeholders (`href="#"`) used until provided.
- No live demo URLs exist for either project — GitHub links only, until provided.
- The currency symbol in the MAE metric was lost in PDF text extraction; assumed ₹ (INR) given the project's context — needs confirmation.
- The resume lists "Third-year" in the summary but a 2027 graduation year; kept as-is from the source, flagged for Aditya to reconcile before launch.
- Profile photo: reusing the resume headshot unless a higher-resolution version is supplied.
