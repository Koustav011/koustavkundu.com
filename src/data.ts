// All site copy lives here, so content edits never touch layout code.

export const EMAIL = 'contact@koustavkundu.com';
export const LINKEDIN = 'https://www.linkedin.com/in/koustav-kundu-082228120/';
export const CAL_LINK = 'koustav-kundu-qmio3w';

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'lab', label: 'Lab' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

/** Career waterfall: grow = years in role (column width), h = scope (bar height). */
export type BarKind = 'solid' | 'outline' | 'accent' | 'next';
export const CAREER: { grow: number; h: number; kind: BarKind; tip: string; label: [string, string] }[] = [
  { grow: 2.7, h: 34, kind: 'solid', tip: 'Associate · Retail Banking & Custody Ops', label: ["'16–'19", 'TCS'] },
  { grow: 3, h: 52, kind: 'outline', tip: 'MBA (Finance) · Symbiosis, Pune', label: ["'19–'22", 'MBA'] },
  { grow: 0.8, h: 60, kind: 'solid', tip: 'Finance Intern · Financial Analyst', label: ["'21", 'Tradeify'] },
  { grow: 4.1, h: 86, kind: 'accent', tip: 'Product Manager · Business Loans Group', label: ["'22–now", 'ICICI'] },
  { grow: 1, h: 100, kind: 'next', tip: "Open to what's next", label: ['next', '↗'] },
];

export const TICKER = [
  'Business loans',
  'Product strategy',
  'Stakeholder mgmt',
  'Python',
  'Raspberry Pi',
  'UAT',
  'NSE / BSE',
  'Automation',
  'MIS & dashboards',
  'Telegram bots',
];

export type Job = { title: string; period: string; org: string; now?: boolean; points: string[] };
export const JOBS: Job[] = [
  {
    title: 'Product Manager — Business Loans Group',
    period: 'Jun 2022 — Present',
    org: 'ICICI Bank Ltd · Mumbai',
    now: true,
    points: [
      'Own renewals for the Business Loans Group portfolio — granular follow-ups with business teams, training on transaction-based renewals, and first line for product escalations.',
      'Built the BLG portfolio waterfall, then partnered with DSAG and the Policy team to automate its preparation and input files end-to-end, including UAT on sample files.',
      'Drove **Smart Top-Up** — converting unsecured top-up loans into secured, enhanced top-ups.',
      'Championed **Saral-Vridhi** across business, Unified Lending Platform (ULP) and Policy teams, bringing the pre-approved enhancement facility for secured customers onto the digital platform.',
      'Coordinated project planning and execution across team members and team leads.',
    ],
  },
  {
    title: 'Finance Intern — Financial Analyst',
    period: 'Apr 2021 — Jun 2021',
    org: 'Tradeify India Pvt. Ltd · Pune',
    points: [
      'Built financial models supporting the P&L statement and balance sheet.',
      'Managed accounts-receivable invoicing for retailer debit and credit transactions.',
    ],
  },
  {
    title: 'Associate — Retail Banking & Custody Operations',
    period: 'Jun 2016 — Feb 2019',
    org: 'Tata Consultancy Services · Gurugram',
    points: [
      'Performed customer due diligence on payments, fund transfers and account servicing requests.',
      'Ran account-lifecycle operations — card blocking, statements, phone-banking changes, and account closures with balance transfer.',
      'Trained new colleagues on the Engage One application; prepared daily, weekly and monthly MIS and dashboards.',
      'Performed maker–checker calibration and reporting.',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Raspberry Pi home server',
    body: 'A Pi 5 that never sleeps — runs a self-hosted automation hub with a Telegram bot gateway handling daily tasks, alerts and small agents.',
    tags: ['Raspberry Pi', 'Linux', 'Telegram API'],
  },
  {
    title: 'Swing-trade screener',
    body: 'Python screener for NSE stocks that blends technical and fundamental filters, plus a position sizer built on fixed-fractional risk and a 2:1 reward-to-risk floor.',
    tags: ['Python', 'Pandas', 'NSE'],
  },
  {
    title: 'LinkedIn content pipeline',
    body: 'Scripts that draft finance and markets posts with LLM APIs — every draft passes through a human approval step before anything ships.',
    tags: ['Python', 'LLM APIs', 'Automation'],
  },
  {
    title: '3D floor-plan viewer',
    body: 'An interactive Three.js "dollhouse" of a home under construction — used to test interior layouts and walk through rooms before they exist.',
    tags: ['Three.js', 'JavaScript'],
  },
];

export const KITS = [
  {
    title: 'Product & banking',
    chips: [
      'Product lifecycle',
      'Stakeholder management',
      'Requirements & UAT',
      'Project planning',
      'Credit & lending ops',
      'Process automation',
      'MIS & reporting',
      'Product strategy',
    ],
  },
  {
    title: 'Tech & tinkering',
    chips: ['Python', 'Pandas / NumPy', 'SQL', 'Excel', 'REST APIs', 'Linux / Raspberry Pi', 'Git', 'Three.js (basics)'],
  },
];

export const EDUCATION = [
  { year: '2022', what: 'MBA, Finance', where: 'Symbiosis Institute of Management Studies, Pune', meta: 'CGPA 7.37' },
  { year: '2021', what: 'Bloomberg Market Concepts', where: 'Certification', meta: 'BMC' },
  { year: '2016', what: 'BBA, Finance', where: 'Prestige Institute of Management, Gwalior', meta: '60.5%' },
];
