# Academics.md
## Aditya Srivastava — Academic Record (source of truth for `src/data/content.js` → `education`)

This supplements `PRD.md` / `Architecture.md`. It's the detailed academic data behind the Education section — use it to populate `content.js`, not just the summary version in the resume.

---

## Current — SRM IST-Kattankulathur

| Field | Value |
|---|---|
| Status | Current |
| College | SRM IST-Kattankulathur |
| Course | B.Tech |
| Branch | Computer Science and Business Systems |
| CGPA | 8.14 |
| Batch / Outgoing year | 2027 |
| Current arrears | 0 |
| Arrears history | 0 |

**Semester scores**

| Sem 1 | Sem 2 | Sem 3 | Sem 4 | Sem 5 | Sem 6 |
|---|---|---|---|---|---|
| 8.32 | 7.82 | 7.65 | 8.22 | 8.30 | 8.65 |

## 12th — City Montessori School

| Field | Value |
|---|---|
| Board | Council for the Indian School Certificate Examinations (CISCE) |
| School | City Montessori School |
| Location | Lucknow |
| Percentage | 87% |
| CGPA (as listed) | 8.7 |
| Outgoing year | 2023 |
| Start date | Jul 2022 |
| End date | Apr 2023 |
| Specialization | — |

## 10th — City Montessori School

| Field | Value |
|---|---|
| Board | Council for the Indian School Certificate Examinations (CISCE) |
| School | City Montessori School |
| Location | Lucknow |
| Percentage | 85.2% |
| CGPA (as listed) | 8.52 |
| Outgoing year | 2021 |
| Start date | Jul 2020 |
| End date | Apr 2021 |
| Specialization | — |

---

## Notes for the Education timeline (Phase 3)

- Chronological order for display: **10th (2021) → 12th (2023) → SRM IST B.Tech (current, 2027)**.
- The resume shows only the overall CGPA (8.14) and 12th/10th percentages. The semester-wise breakdown (Sem 1–6) and the 12th/10th CGPA-style figures (8.7, 8.52) are **new data from these screenshots**, not from the original resume — use them, but they supersede the plainer PRD.md content inventory where they add detail.
- "Percentage" is the figure to headline for 10th/12th (87%, 85.2%), matching how the resume itself labels them; the 8.7 / 8.52 CGPA-style values can be shown as a secondary detail if there's room, since school reports in India often show both.
- Current arrears / arrears history (0 / 0) is a strong, easy-to-overlook credibility signal — worth a small "no backlogs" badge or line in the Education card rather than omitting it.
- Semester scores (Sem 1–6) are good material for a small trend sparkline or simple bar row inside the SRM IST card if it fits the "ledger card" style in `Design.md` without adding a heavier charting library — a lightweight inline SVG is enough; don't pull in a charting dependency just for this (see `Rules.md` §2).
- No certificate files were provided (10th Certificate / 12th Certificate referenced in the screenshots) — do not fabricate download links for these; leave them out of the public site unless Aditya supplies the actual files.
