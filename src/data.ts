// All site copy lives here, so content edits never touch layout code.

export const EMAIL = 'contact@koustavkundu.com';
export const LINKEDIN = 'https://www.linkedin.com/in/koustav-kundu-082228120/';
export const CAL_LINK = 'koustav-kundu-qmio3w';

export const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'lab', label: 'Lab' },
  { id: 'toolkit', label: 'Toolkit' },
];

/** Career waterfall: grow = years in role (column width), h = scope (bar height). */
export type BarKind = 'solid' | 'outline' | 'accent' | 'next';
export type Stage = { grow: number; h: number; kind: BarKind; role: string; where: string; when: string; line: string; label: [string, string] };
export const CAREER: Stage[] = [
  { grow: 2.7, h: 34, kind: 'solid', role: 'Associate, Retail Banking and Custody Operations', where: 'TCS, Gurugram', when: '2016 to 2019',
    line: 'Learned how banks actually move money: due diligence, maker-checker, MIS and the controls behind every transaction.', label: ['’16-’19', 'TCS'] },
  { grow: 3, h: 52, kind: 'outline', role: 'MBA in Finance', where: 'Symbiosis Institute of Management Studies, Pune', when: '2019 to 2022',
    line: 'Moved from operations towards product and credit.', label: ['’19-’22', 'MBA'] },
  { grow: 0.25, h: 60, kind: 'solid', role: 'Finance Intern, Financial Analyst', where: 'Tradeify India, Pune', when: '2021',
    line: 'Built the financial models behind the P&L and balance sheet.', label: ['’21', 'Tradeify'] },
  { grow: 4.4, h: 86, kind: 'accent', role: 'Product Manager, Business Loans Group', where: 'ICICI Bank, Mumbai', when: '2022 to now',
    line: 'Own the renewals portfolio and the digital journeys around it: Smart Top-Up, Saral-Vridhi and an automated portfolio waterfall.', label: ['’22-now', 'ICICI'] },
  { grow: 1, h: 100, kind: 'next', role: 'What’s next', where: 'Open to conversations', when: '',
    line: 'Product roles in lending, credit or fintech, where operations knowledge and a habit of automating things both count.', label: ['next', '↗'] },
];

export type Job = { title: string; period: string; org: string; now?: boolean; points: string[] };
export const JOBS: Job[] = [
  {
    title: 'Product Manager, Business Loans Group',
    period: 'Jun 2022 to present',
    org: 'ICICI Bank Ltd · Mumbai',
    now: true,
    points: [
      'Own renewals for the Business Loans Group portfolio: granular follow-ups with business teams, training on transaction-based renewals, and first line for product escalations.',
      'Built the BLG portfolio waterfall, then partnered with DSAG and the Policy team to automate its preparation and input files end-to-end, including UAT on sample files.',
      'Drove **Smart Top-Up**, converting unsecured top-up loans into secured, enhanced top-ups.',
      'Championed **Saral-Vridhi** across business, Unified Lending Platform (ULP) and Policy teams, bringing the pre-approved enhancement facility for secured customers onto the digital platform.',
      'Coordinated project planning and execution across team members and team leads.',
    ],
  },
  {
    title: 'Finance Intern, Financial Analyst',
    period: 'Apr 2021 to Jun 2021',
    org: 'Tradeify India Pvt. Ltd · Pune',
    points: [
      'Built financial models supporting the P&L statement and balance sheet.',
      'Managed accounts-receivable invoicing for retailer debit and credit transactions.',
    ],
  },
  {
    title: 'Associate, Retail Banking & Custody Operations',
    period: 'Jun 2016 to Feb 2019',
    org: 'Tata Consultancy Services · Gurugram',
    points: [
      'Performed customer due diligence on payments, fund transfers and account servicing requests.',
      'Ran account-lifecycle operations: card blocking, statements, phone-banking changes, and account closures with balance transfer.',
      'Trained new colleagues on the Engage One application; prepared daily, weekly and monthly MIS and dashboards.',
      'Performed maker-checker calibration and reporting.',
    ],
  },
];

export const PROJECTS: { title: string; body: string; tags: string[]; feature?: boolean }[] = [
  {
    title: 'ESP Deck: a stock ticker for my desk',
    body: 'An ESP32 with a small colour screen that shows live NSE prices, my watchlist and alerts, built from the firmware up. A cloud server feeds it, runs nightly research jobs and a private trading-research website, and an Android app manages the device. A few friends run their own units off the same server.',
    tags: ['ESP32 / C++', 'Python', 'AWS', 'Android'],
    feature: true,
  },
  {
    title: 'Raspberry Pi home server',
    body: 'A Pi 5 that never sleeps, running a self-hosted automation hub with a Telegram bot gateway handling daily tasks, alerts and small agents.',
    tags: ['Raspberry Pi', 'Linux', 'Telegram API'],
  },
  {
    title: 'Swing-trade screener',
    body: 'Python screener for NSE stocks that blends technical and fundamental filters, plus a position sizer built on fixed-fractional risk and a 2:1 reward-to-risk floor.',
    tags: ['Python', 'Pandas', 'NSE'],
  },
];

export const WORK_INTRO =
  'I started on the operations floor and moved to the product side after an MBA. I like the unglamorous middle of product work: getting policy, tech and business to agree on the same file format.';

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
    chips: ['Python', 'Pandas and NumPy', 'SQL', 'Excel', 'REST APIs', 'Linux and Raspberry Pi', 'ESP32 / C++', 'Git'],
  },
];

export const EDUCATION = [
  { year: '2022', what: 'MBA, Finance', where: 'Symbiosis Institute of Management Studies, Pune', meta: 'CGPA 7.37' },
  { year: '2021', what: 'Bloomberg Market Concepts', where: 'Certification', meta: 'BMC' },
  { year: '2016', what: 'BBA, Finance', where: 'Prestige Institute of Management, Gwalior', meta: '60.5%' },
];
