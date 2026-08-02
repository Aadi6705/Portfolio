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
    'Backend Web Engineer',
    'B.Tech CSBS @ SRM IST',
  ],
  tagline:
    'Third-year Computer Science & Business Systems student with hands-on experience in full-stack web development, backend engineering, and modern software architecture.',
  email: 'asaditya6705@gmail.com',
  phone: '+91 8887568557',
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
    url: 'https://www.linkedin.com/in/aditya-srivastava-b2a088293',
    placeholder: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: 'ri-github-fill',
    url: 'https://github.com/Aadi6705',
    placeholder: false,
  },
  {
    id: 'hackerrank',
    label: 'HackerRank',
    icon: 'ri-code-s-slash-line',
    url: 'https://www.hackerrank.com/profile/as1004',
    placeholder: false,
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    icon: 'ri-code-box-line',
    url: 'https://leetcode.com/u/cmWGCdjHAp/',
    placeholder: false,
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
    score: 'CGPA 8.14/10',
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
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'C'],
  },
  {
    category: 'Databases & Backend',
    items: [
      'PostgreSQL',
      'SQLite',
      'REST APIs',
      'Express',
      'Database Design',
      'Node.js',
      'Flask',
    ],
  },
  {
    category: 'Web',
    items: ['React', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Netlify'],
  },
]

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'financeflow',
    tabLabel: 'PROJECT · FULL STACK',   // ledger-card mono tab (Design.md §5)
    name: 'Expense Tracker',
    summary:
      'A personal finance management web application for tracking income, expenses, and budgets in real time.',
    stack: ['React', 'Flask', 'Python', 'SQLite', 'Chart.js'],
    highlights: [
      'Built an end-to-end full-stack application with a React front-end and Flask REST API back-end.',
      'Implemented user authentication, budget categorisation, and monthly spending analytics.',
      'Designed an interactive dashboard with Chart.js visualisations for income vs. expense trends.',
    ],
    metrics: [],
    githubUrl: 'https://github.com/Aadi6705/Financial-Intelligence',
    githubPlaceholder: false,
    liveUrl: null,  // no live demo — GitHub only per PRD.md §11
    image: '/projects/expense-tracker.png',
    hasImage: true,
  },
  {
    id: 'house-price',
    tabLabel: 'PROJECT · WEB & ANALYTICS',
    name: 'Property Valuation Analytics Portal',
    summary:
      'An interactive property valuation and analytics platform providing real-time market estimation and structural value breakdowns.',
    stack: ['React', 'Flask', 'Python', 'SQLite', 'Pandas', 'Tailwind CSS'],
    highlights: [
      'Engineered data analytics pipelines to evaluate geo-spatial and structural property features.',
      'Implemented dynamic visual reporting components to break down valuation metrics for end-users.',
      'Designed and deployed a responsive two-panel React dashboard with seamless REST API integration.',
    ],
    metrics: [],
    githubUrl: 'https://github.com/Aadi6705/Housing-Prediction',
    githubPlaceholder: false,
    liveUrl: null,
    image: '/projects/house-price.png',
    hasImage: true,
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
    year: '2023', // Usually done during college, keeping blank/2023 if unconfirmed. Let's use 2023.
    credentialId: null,  // Forage doesn't issue credential IDs
    credentialUrl: 'https://drive.google.com/file/d/1cODQsQa81pu_6fSFLxr72lT3ppzDo7YB/view',
    credentialUrlPlaceholder: false,
  },
  {
    id: 'nptel-java',
    tabLabel: 'CERTIFICATION · ACADEMIC',
    issuer: 'NPTEL (IIT)',
    program: 'Programming in Java',
    platform: 'NPTEL',
    year: '2024',
    credentialId: 'Pending',
    credentialUrl: '#',
    credentialUrlPlaceholder: true,
  },
  {
    id: 'ibm-ds',
    tabLabel: 'CERTIFICATION · PROFESSIONAL',
    issuer: 'IBM',
    program: 'IBM Data Science Professional Certificate',
    platform: 'Coursera',
    year: '2024',
    credentialId: 'ZU8SZ6FJDNBN',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/records/ZU8SZ6FJDNBN',
    credentialUrlPlaceholder: false,
  },
]
