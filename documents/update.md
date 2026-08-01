# Portfolio update checklist

Scope: polish and credibility fixes only — no layout or design-system changes. The visual identity (cream background, navy/gold accent, serif headings) is already distinctive and works. These are the things a recruiter would notice and quietly judge.

Priority: 🔴 fix before sharing again · 🟡 do this week · 🟢 nice-to-have

---

## Hero section

- 🔴 **Headshot** — the current photo reads as a passport/exam-admit-card photo (flash-lit, direct stare, plain backdrop). This is the first thing a recruiter sees. Swap for a natural well-lit photo, soft smile, slight angle, plain but not stark background. This one change will move the needle more than any code fix on this list.
- 🔴 **Rotating role text** ("Data|") — confirm the typed-role animation actually cycles through full words (e.g. "Data Scientist", "ML Engineer", "Full-Stack Developer") and doesn't get visually stuck mid-word. If it's mid-type in the screenshot that's fine, just double check timing/cursor blink isn't glitchy on load.
- 🟡 **Unclear icon** — the second social icon (next to LinkedIn) doesn't render as a clean GitHub mark — check the icon font/library loaded correctly. The 4th icon (grid/dashboard) has no obvious meaning without a label — add a `title`/tooltip or swap for a recognizable icon (e.g. LeetCode, Behance, portfolio-gallery) so it's not a mystery click.

## About Me

- 🟡 **"final/third-year"** — this reads as unresolved copy, not a real answer. Pick one: "3rd-year" or "pre-final year." A recruiter shouldn't sense you weren't sure what to write.
- 🟢 Consider tightening the three paragraphs into two — the third paragraph ("Combining core CS principles...") mostly restates the first.

## Education

- 🟡 **SGPA bar chart** — showing a visible dip (7.82, 7.65) prominently as bar height is honest but works against you visually since dips draw the eye. Either keep it (transparency is fine) but consider a small "CGPA" callout being the dominant number instead of matching the bars, or drop the per-semester chart in favor of just the CGPA + trend arrow if you want to de-emphasize the dip.
- 🟢 "CGPA 8.14 / 10" wraps awkwardly onto two lines in the top card — widen the card slightly or shorten to "8.14/10."

## Technical Skills

- 🟢 This section is clean as-is. Only suggestion: order languages by proficiency/relevance to the roles you're applying for (e.g. lead with Java/Python if targeting ML-infra roles) rather than alphabetically/arbitrarily.

## Selected Projects

- 🔴 **FinanceFlow screenshot shows negative balance** ("Net Balance ₹-24,022") in the live demo — this looks like broken/buggy sample data to anyone scanning quickly. Reseed the demo with clean positive numbers before it's screenshotted or linked.
- 🟡 **Emoji in demo** ("Good Morning 🌅") — inconsistent with the emoji-free tone of the rest of the site. Fine if it's just how the app itself looks, but if you have control over the demo data, matching your portfolio's tone (no emoji) makes the whole page feel more unified.
- 🟢 Add a live demo link (not just GitHub) if either project is deployed — recruiters skim, and a clickable demo gets more engagement than a screenshot + repo link.

## Certifications

- 🔴 **"ID: Pending" + disabled "Verify Credential" button** on the NPTEL cert — showing an unverifiable, greyed-out credential undercuts the two verified ones next to it. Either hold this card until the ID is issued, or drop the "Verify Credential" button entirely for this one and just show the date, so it doesn't look broken.

## Contact

- 🔴 **Confirm the form actually sends** — verify it's wired to something (Formspree, EmailJS, a backend route) and isn't just a static UI. A dead contact form on a portfolio is a silent trust-killer if a recruiter tries it and nothing happens.
- 🟢 Consider a max-length or char-counter on the message box, and a success/error state after submit ("Message sent" / "Something went wrong, email me directly at...") so the user isn't left wondering if it worked.

## Site-wide

- 🟡 **Page title & meta tags** — make sure the browser tab title, meta description, and Open Graph tags (og:title, og:image) are set. When you send this link to a recruiter over email/LinkedIn, the link preview card is often the first impression — right now you don't know what it currently shows.
- 🟢 **Favicon** — confirm you have a custom favicon (initials or a small mark) rather than the default blank tab icon.
- 🟢 **Resume freshness** — since "Download Resume" is a primary CTA in the hero, make sure the PDF matches everything shown on the site (especially the pending cert and CGPA) so there's no mismatch if someone downloads it after reading the page.

---

## If you only have time for 3 things
1. Replace the headshot.
2. Fix the negative-balance demo screenshot.
3. Resolve or hide the "ID: Pending" certification.

These three carry the most weight relative to effort — everything else is refinement on top of an already solid base.
