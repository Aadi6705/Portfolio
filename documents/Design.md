# Design.md
## Aditya Srivastava — Personal Portfolio Website

**Related docs:** `PRD.md`, `Architecture.md`, `Rules.md`, `Phases.md`

---

## 1. Direction

Classic, professional, editorial — closer to a well-set academic transcript or a private bank's annual report than a SaaS landing page. Explicitly avoiding the current AI-default looks: no cream-background-plus-terracotta, no near-black-plus-neon, no dense broadsheet grid.

**The one deliberate risk:** a quiet "ledger" motif — hairline rules, small-caps mono labels, and a brass tab accent on project and certification cards. It's a nod to Aditya's finance-and-data project work without turning into a gimmick, and it gives the site one consistent signature instead of scattered decoration.

## 2. Color Palette

| Name | Hex | Role |
|---|---|---|
| Paper | `#F7F6F1` | Page background |
| Ink | `#1E2328` | Primary text |
| Navy | `#16324F` | Brand / primary actions, nav background, heading accents |
| Deep Navy | `#0E1E30` | Footer and other dark sections |
| Brass | `#A9823C` | Accent — hover states, active nav item, ledger-card tabs. Use sparingly; it should never compete with itself for attention on one screen |
| Slate | `#6B7480` | Secondary text, borders, muted labels |
| Success | `#3F7A56` | Contact form success state only |
| Error | `#B0473F` | Contact form error state only |

## 3. Typography

All three faces come from the **IBM Plex** family — a deliberate, specific choice tied to Aditya's IBM Data Science certification, rather than an arbitrary pairing:

- **Display / headings:** IBM Plex Serif, 500/600 weight — gives the classic, academic register
- **Body / UI:** IBM Plex Sans, 400/500 weight
- **Labels / meta / tags:** IBM Plex Mono, 400 weight, +0.02em letter-spacing, uppercase — reserved for the education timeline dates and ledger-card tabs, not used decoratively elsewhere

**Type scale** (desktop → mobile):

| Level | Desktop | Mobile | Line-height |
|---|---|---|---|
| H1 | 48px | 32px | 1.15 |
| H2 | 34px | 26px | 1.15 |
| H3 | 24px | 20px | 1.2 |
| Body | 17px | 16px | 1.6 |
| Small | 14px | 13px | 1.5 |
| Caption | 12px | 12px | 1.4 |

## 4. Layout & Spacing

- Max content width: 1120px, centered; gutters 24px mobile / 64px desktop
- Spacing scale (4px base): 8 / 16 / 24 / 32 / 48 / 64 / 96
- Section vertical rhythm: 96px desktop, 56px mobile
- Grid: 12-column desktop, collapses to a single column under 768px; project cards are 2-up desktop, 1-up mobile

## 5. Signature Element — "Ledger Cards"

Project and certification entries are framed like case-file entries: a 1px Slate hairline across the top, a small IBM Plex Mono uppercase label tab in the top-left corner in Brass (e.g. `PROJECT · FULL STACK`), generous internal padding, and a 1px Slate border in place of a drop shadow.

The education timeline is the **one** place a sequential marker is justified — a small Brass dot connected by a hairline — because that content is genuinely chronological. Don't add numbered markers (01 / 02 / 03) anywhere else; it's a common default that doesn't encode real information outside the timeline.

## 6. Iconography

Remix Icons, line style only (never filled). Slate by default, Brass on hover/active. Used sparingly — nav and social icons, contact form field icons, an external-link indicator. Never used decoratively inside body copy.

## 7. Imagery

- **Profile photo:** square-cropped, thin 2px Navy frame, no heavy shadow, no circular crop — keeps the classic register instead of the common circular-avatar default.
- **Project visuals:** real screenshots or diagrams only, framed with the same thin Slate border as the ledger cards. No stock photography, no generic "developer at a laptop" imagery.

## 8. Motion

Restrained throughout:
- 200–300ms fade + 8px upward reveal on scroll (ScrollReveal)
- A blinking text cursor on the Typed.js hero role text
- 150ms color/border transitions on hover and focus

No parallax, no tilt-on-hover, no auto-playing carousels — if Swiper is used, it's user-controlled only. All motion is gated behind `prefers-reduced-motion: no-preference`.

## 9. Dark Mode (stretch — Phase 8+, optional)

| Token | Light | Dark |
|---|---|---|
| Background | Paper `#F7F6F1` | Deep Navy `#0E1E30` |
| Text | Ink `#1E2328` | Paper `#F7F6F1` |
| Accent | Brass `#A9823C` | Brass `#A9823C` (unchanged) |
| Borders | Slate `#6B7480` | Lightened Slate `#8B94A0` |

## 10. Do / Don't

**Do:** hairline rules, generous whitespace, one restrained accent color, real project content, honest empty/placeholder states.

**Don't:** gradients, glassmorphism, drop shadows heavier than a 1px border-equivalent, stock "coder" photography, more than one accent color competing for attention in a single view, decorative numbering outside the education timeline.
