/**
 * src/data/content.js
 * Single source of truth for all resume-derived content (Architecture.md §4).
 *
 * Rules:
 *  - All facts come from Aditya's resume or explicit chat confirmations only.
 *  - Unknown URLs are set to "#" with data-placeholder="true" in JSX (Rules.md §3).
 *  - Placeholder strings are prefixed with [TODO] so they're easy to grep.
 *  - Do NOT hardcode content inside JSX — import from here.
 */

// ─── Profile ────────────────────────────────────────────────────────────────
export const profile = {
  name: 'Aditya Srivastava',
  roles: [
    'Software Engineer',
    'Full-Stack Developer',
    'Data Science Enthusiast',
    'B.Tech CSBS @ SRM IST',
  ],
  tagline:
    'Third-year Computer Science & Business Systems student with hands-on experience in software development, data science, and Artificial Intelligence.',
  // TODO: Confirm "Third-year" vs 2027 graduation year — open question in PRD.md §11
  email: 'srivastavaditya543@gmail.com',
  phone: '+91 [TODO: confirm phone number from resume]',
  location: 'Chennai, India', // SRM IST campus city
  resumeUrl: '/resume.pdf',   // placed in /public after user supplies file
  photo: '/profile.jpg',      // placed in /public after user supplies photo
}

// ─── Social links ────────────────────────────────────────────────────────────
// All URLs are placeholder (#) until Aditya supplies real links (Rules.md §3).
export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'ri-linkedin-box-line',
    url: '#',
    placeholder: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: 'ri-github-line',
    url: '#',
    placeholder: true,
  },
  {
    id: 'hackerrank',
    label: 'HackerRank',
    icon: 'ri-code-s-slash-line',
    url: '#',
    placeholder: true,
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    icon: 'ri-function-line',
    url: '#',
    placeholder: true,
  },
]

// ─── Education ───────────────────────────────────────────────────────────────
// Ordered chronologically descending (most recent first).
// Decision recorded in Memory.md Phase 3.
export const education = [
  {
    id: 'srm',
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech Computer Science & Business Systems',
    duration: '2023 – 2027',
    score: 'CGPA 8.14 / 10',
    location: 'Chennai, India',
    note: 'Class of 2027',
    arrears: '0 Backlogs',
    semesters: [
      { sem: 'Sem 1', gpa: 8.32 },
      { sem: 'Sem 2', gpa: 7.82 },
      { sem: 'Sem 3', gpa: 7.65 },
      { sem: 'Sem 4', gpa: 8.22 },
      { sem: 'Sem 5', gpa: 8.30 },
      { sem: 'Sem 6', gpa: 8.65 },
    ],
  },
  {
    id: 'cms-xii',
    institution: 'City Montessori School',
    degree: 'Class XII (CISCE Board)',
    duration: '2022 – 2023',
    score: '87%',
    secondaryScore: 'CGPA 8.7',
    location: 'Lucknow, India',
    note: 'Completed Apr 2023',
  },
  {
    id: 'cms-x',
    institution: 'City Montessori School',
    degree: 'Class X (CISCE Board)',
    duration: '2020 – 2021',
    score: '85.2%',
    secondaryScore: 'CGPA 8.52',
    location: 'Lucknow, India',
    note: 'Completed Apr 2021',
  },
]

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
  },
  {
    category: 'Data & ML',
    items: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'SHAP',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    category: 'Web',
    items: ['React', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flask'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Jupyter', 'VS Code', 'Netlify'],
  },
]

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'financeflow',
    tabLabel: 'PROJECT · FULL STACK',   // ledger-card mono tab (Design.md §5)
    name: 'FinanceFlow',
    summary:
      'A personal finance management web application for tracking income, expenses, and budgets in real time.',
    stack: ['React', 'Flask', 'Python', 'SQLite', 'Chart.js'],
    highlights: [
      'Built an end-to-end full-stack application with a React front-end and Flask REST API back-end.',
      'Implemented user authentication, budget categorisation, and monthly spending analytics.',
      'Designed an interactive dashboard with Chart.js visualisations for income vs. expense trends.',
      // TODO: add more specific metric if resume supplies one
    ],
    metrics: [], // TODO: supply real metrics from resume if available
    githubUrl: '#', // TODO: real repo URL
    githubPlaceholder: true,
    liveUrl: null,  // no live demo — GitHub only per PRD.md §11
  },
  {
    id: 'house-price',
    tabLabel: 'PROJECT · DATA SCIENCE',
    name: 'Explainable House Price Prediction',
    summary:
      'An XGBoost regression model for Indian residential property prices, made interpretable with SHAP values.',
    stack: ['Python', 'XGBoost', 'SHAP', 'Pandas', 'Scikit-learn', 'Flask', 'React'],
    highlights: [
      'Engineered 55 geo-spatial and infrastructure features from raw property listing data.',
      'Trained an XGBoost model achieving MAE ≈ ₹15,562.',
      // ↑ Currency symbol assumed ₹ (INR) — confirm with Aditya (PRD.md §11)
      'Integrated SHAP explainability so end-users can see which features drove each prediction.',
      'Deployed a two-panel React dashboard: input form + live SHAP waterfall chart.',
    ],
    metrics: [
      { label: 'MAE', value: '≈ ₹15,562', note: 'currency assumed INR — confirm' },
    ],
    githubUrl: '#', // TODO: real repo URL
    githubPlaceholder: true,
    liveUrl: null,
  },
]

// ─── Certifications ──────────────────────────────────────────────────────────
// Layout decision: clean ledger-card list (3 items; carousel not justified).
// Recorded in Memory.md Phase 0 / Phase 6.
export const certifications = [
  {
    id: 'jpmorgan',
    tabLabel: 'CERTIFICATION · INDUSTRY',
    issuer: 'JPMorgan Chase & Co.',
    program: 'Software Engineering Virtual Experience',
    platform: 'Forage',
    year: '[TODO: confirm year]',
    credentialId: null,  // Forage doesn't issue credential IDs
    credentialUrl: '#',
    credentialUrlPlaceholder: true,
  },
  {
    id: 'nptel-java',
    tabLabel: 'CERTIFICATION · ACADEMIC',
    issuer: 'NPTEL (IIT)',
    program: 'Programming in Java',
    platform: 'NPTEL',
    year: '[TODO: confirm year]',
    credentialId: '[TODO: confirm NPTEL credential ID]',
    credentialUrl: '#',
    credentialUrlPlaceholder: true,
  },
  {
    id: 'ibm-ds',
    tabLabel: 'CERTIFICATION · PROFESSIONAL',
    issuer: 'IBM',
    program: 'IBM Data Science Professional Certificate',
    platform: 'Coursera',
    year: '[TODO: confirm year]',
    credentialId: '[TODO: confirm Coursera credential ID]',
    credentialUrl: '#',
    credentialUrlPlaceholder: true,
  },
]
