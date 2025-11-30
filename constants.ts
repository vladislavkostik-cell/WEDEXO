

import { NavLink, ServiceItem, PricingPlan, Client, Stat, UGCItem, ReviewItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'GEO', href: '#geo' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#ugc' },
  { label: 'Pricing', href: '#pricing' },
];

export const HERO_STATS: Stat[] = [
  { value: '200%', label: 'Avg. Traffic Increase', color: 'green' },
  { value: '50+', label: 'Enterprise Clients', color: 'gold' },
  { value: '10x', label: 'ROI Generated', color: 'gold' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom, high-performance websites built with modern technologies to convert visitors into loyal customers.',
    icon: 'code',
    details: 'We do not use generic templates. Our engineering team builds bespoke digital experiences using React, Next.js, and Tailwind CSS. We prioritize Core Web Vitals, ensuring your site loads instantly and ranks higher. From complex SaaS dashboards to high-conversion landing pages, every line of code is written to scale with your business revenue.',
    infographicSteps: [
      { title: 'Architecture', desc: 'Scalable Next.js & React frameworks.' },
      { title: 'Performance', desc: 'Sub-100ms load times & 99+ Lighthouse scores.' },
      { title: 'Conversion', desc: 'UX designed specifically for lead capture.' },
      { title: 'Security', desc: 'Enterprise-grade encryption & DDoS protection.' }
    ]
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Data-driven strategies to climb search rankings, increase organic traffic, and dominate your niche keywords.',
    icon: 'search',
    details: 'SEO is no longer just about keywords; it is about Authority. Our process begins with a forensic audit of your technical infrastructure, followed by a topical map strategy that establishes your brand as the industry expert. We handle everything from on-page schema markup to high-authority backlink acquisition.',
    infographicSteps: [
      { title: 'Technical Audit', desc: 'Fixing crawl errors & indexing issues.' },
      { title: 'Content Strategy', desc: 'Topical authority maps & semantic clusters.' },
      { title: 'Link Building', desc: 'High-DR outreach (Forbes, TechCrunch, etc).' },
      { title: 'Local SEO', desc: 'GMB optimization & local citation building.' }
    ]
  },
  {
    id: 'ppc',
    title: 'PPC Management',
    description: 'Targeted Google and Meta ad campaigns that deliver immediate results and maximize your ad spend efficiency.',
    icon: 'megaphone',
    details: 'Stop burning cash on broad matches. We build granular, high-intent campaigns that target users exactly when they are ready to buy. Our proprietary bidding scripts automatically adjust budgets based on real-time ROAS (Return on Ad Spend), ensuring profitable scaling from day one.',
    infographicSteps: [
      { title: 'Strategy', desc: 'Competitor spying & keyword gap analysis.' },
      { title: 'Creative', desc: 'A/B testing ad copy & visual assets.' },
      { title: 'Targeting', desc: 'Lookalike audiences & retargeting layers.' },
      { title: 'Optimization', desc: 'Daily bid adjustments & negative keyword filtering.' }
    ]
  },
  {
    id: 'smm',
    title: 'Social Media Management',
    description: 'Engaging content creation and community management to build a strong, loyal brand presence across all platforms.',
    icon: 'users',
    details: 'We turn passive followers into active brand advocates. Our creative team produces platform-native content—Shorts, Reels, Carousels—that hacks the algorithm. We manage the entire community, responding to comments and DMs to foster deep trust and engagement.',
    infographicSteps: [
      { title: 'Content Calendar', desc: 'Strategic planning 30 days in advance.' },
      { title: 'Production', desc: 'High-fidelity video editing & graphic design.' },
      { title: 'Engagement', desc: '24/7 community monitoring & response.' },
      { title: 'Analytics', desc: 'Weekly growth & viral sentiment reports.' }
    ]
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Outreach',
    description: 'Automated yet personalized B2B outreach campaigns to connect you with key decision-makers and generate quality leads.',
    icon: 'linkedin',
    details: 'Cold calling is dead. Smart networking is the future. We optimize your personal profile to convert, then launch multi-step, personalized outreach sequences to your ideal client profile (ICP). We handle the connection requests and follow-ups; you just show up to the booked sales calls.',
    infographicSteps: [
      { title: 'Profile Optimization', desc: 'Turning your bio into a landing page.' },
      { title: 'List Building', desc: 'Sales Navigator hyper-targeted search.' },
      { title: 'Sequence', desc: '4-step personalized message flow.' },
      { title: 'Appointment Setting', desc: 'Booking qualified meetings directly.' }
    ]
  },
  {
    id: 'analytics',
    title: 'Business Analytics',
    description: 'Comprehensive reporting and insights to track growth, measure KPIs, and refine marketing strategies in real-time.',
    icon: 'bar-chart',
    details: 'Data without insight is noise. We aggregate data from GA4, CRMs, and Ad platforms into a single, real-time dashboard. We do not just report the numbers; we tell you what they mean and exactly what to do next to increase revenue.',
    infographicSteps: [
      { title: 'Integration', desc: 'Connecting GA4, Meta, Google Ads & CRM.' },
      { title: 'Visualization', desc: 'Custom Looker Studio dashboards.' },
      { title: 'Attribution', desc: 'Tracking the full customer journey.' },
      { title: 'Forecasting', desc: 'Predictive modeling for future growth.' }
    ]
  },
];

export const UGC_ITEMS: UGCItem[] = [
  {
    id: 'ugc-1',
    title: 'CEO Feedback',
    creator: 'James C. - FinTech',
    views: 'Exceeded Goals',
    platform: 'linkedin',
    thumbnailColor: 'from-blue-900/40 to-slate-900/40'
  },
  {
    id: 'ugc-2',
    title: '3 Month Results',
    creator: 'Sarah M. - SaaS',
    views: '+400% Leads',
    platform: 'tiktok',
    thumbnailColor: 'from-purple-900/40 to-indigo-900/40'
  },
  {
    id: 'ugc-3',
    title: 'Project Review',
    creator: 'David L. - Retail',
    views: 'Best Agency',
    platform: 'instagram',
    thumbnailColor: 'from-emerald-900/40 to-teal-900/40'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'SEO Growth',
    price: '$2,500',
    description: 'Perfect for businesses looking to establish a dominant organic presence.',
    buttonText: 'Start SEO Growth',
    features: [
      { text: 'On-Page & Technical SEO', included: true },
      { text: 'Strategic Content Creation', included: true },
      { text: 'High-Quality Backlink Building', included: true },
      { text: 'Monthly Performance Report', included: true },
    ],
  },
  {
    name: 'Growth Suite',
    price: '$4,500',
    description: 'Accelerate your market presence with a multi-channel acquisition strategy.',
    isPopular: true,
    buttonText: 'Scale Revenue Now',
    features: [
      { text: 'Everything in SEO Growth', included: true },
      { text: 'Performance Marketing (Google & Meta Ads)', included: true },
      { text: 'LinkedIn Outreach Campaigns', included: true },
      { text: 'GEO (Generative Engine Optimization)', included: true },
      { text: 'Bi-Weekly Performance Reports', included: true },
    ],
  },
  {
    name: 'Full Partnership',
    price: 'Custom',
    description: 'End-to-end digital transformation and business development consulting.',
    buttonText: 'Talk to Founder',
    features: [
      { text: 'Everything in Growth Suite', included: true },
      { text: 'GEO (Generative Engine Optimization)', included: true },
      { text: 'Full Website Redesign & Development', included: true },
      { text: 'Social Media Management', included: true },
      { text: 'Strategic BizDev & Consulting', included: true },
      { text: 'Real-time Dashboard Access', included: true },
      { text: 'Dedicated Success Team', included: true },
    ],
  },
];

// Helper to generate SVG data URIs so logos appear without file uploads
const svgLogo = (text: string, style: 'sans' | 'serif' | 'mono' | 'display' | 'script' = 'sans', color: string = 'white') => {
  const fontMap = {
    sans: 'font-family="Inter, sans-serif" font-weight="bold"',
    serif: 'font-family="Georgia, serif" font-weight="bold"',
    mono: 'font-family="monospace" font-weight="bold"',
    display: 'font-family="Manrope, sans-serif" font-weight="900" letter-spacing="2"',
    script: 'font-family="cursive" font-weight="bold" font-style="italic"'
  };
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" ${fontMap[style]} font-size="24" fill="${color}">${text}</text>
    </svg>
  `.trim();
  
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const CLIENTS: Client[] = [
  {
    id: 'neverdark',
    name: 'Neverdark',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" font-family="Manrope, sans-serif" font-weight="900" font-size="28" letter-spacing="1" fill="white">NEVERDARK</text><text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" letter-spacing="3" fill="#a0a0a0">smart fire</text></svg>')}`,
    description: 'Smart fireplace technology integrating with modern homes.',
    ceoName: 'Yaroslav Lysak',
    role: 'CEO',
    website: 'https://neverdark.one'
  },
  {
    id: 'atlant3d',
    name: 'Atlant3D',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-weight="300" font-size="30" letter-spacing="1" fill="white">ATLANT <tspan font-weight="bold">3D</tspan></text></svg>')}`,
    description: 'Nanofabrication technology pioneers.',
    ceoName: 'Maksym Plakhotnyuk',
    role: 'CEO',
    website: 'https://atlant3d.com'
  },
  {
    id: 'sekurno',
    name: 'Sekurno',
    logo: svgLogo('SEKURNO', 'display', '#ffffff'),
    description: 'Cybersecurity consulting firm ensuring compliance and data safety.',
    ceoName: 'Demyd Maiornykov',
    role: 'CEO',
    website: 'https://sekurno.com'
  },
  {
    id: 'iriscan',
    name: 'Iriscan',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="26" fill="white">IRISCAN</text></svg>')}`,
    description: 'Innovative iris scanning technology.',
    ceoName: 'Artem Poliakov',
    role: 'CEO',
    website: 'https://iriscan.net'
  },
  {
    id: 'buyx',
    name: 'BuyX',
    logo: svgLogo('BuyX', 'sans', '#ffffff'),
    description: 'Leading e-commerce solutions in Turkey.',
    ceoName: 'Can Duyguluer',
    role: 'CEO',
    website: 'https://buyx.com.tr'
  },
  {
    id: 'doctor-online',
    name: 'Doctor Online',
    // Fixed clipping by left aligning
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><rect x="20" y="18" width="24" height="24" rx="4" fill="#3b82f6"/><path d="M32,22 V38 M24,30 H40" stroke="white" stroke-width="3"/><text x="55" y="38" text-anchor="start" font-family="sans-serif" font-size="20" font-weight="bold" fill="#3b82f6">Doctor Online</text></svg>')}`,
    description: 'Telehealth platform for instant medical consultations.',
    ceoName: 'Nick Kysel',
    role: 'CEO'
  },
  {
    id: 'ezdorovya',
    name: 'ezdorovya',
    // Fixed clipping by widening rect and manually positioning text
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><rect x="10" y="12" width="180" height="36" fill="#1d4ed8"/><text x="35" y="39" font-family="sans-serif" font-size="26" font-weight="bold" fill="#facc15">#</text><text x="55" y="39" text-anchor="start" font-family="sans-serif" font-size="20" font-weight="bold" fill="white">ezdorovya</text></svg>')}`,
    description: 'National e-health system integration partner.',
    ceoName: 'Dan Matsui',
    role: 'CEO'
  },
  {
    id: 'beauty-boss',
    name: 'Beauty Boss',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="cursive" font-weight="bold" font-style="italic" font-size="24" fill="#d4b58c">Beauty Boss</text></svg>')}`,
    description: 'A leading beauty shops network in Poland.',
    ceoName: 'Mariia Bochkarova',
    role: 'Founder'
  },
  {
    id: 'kadroom',
    name: 'Kadroom',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><rect x="25" y="12" width="150" height="36" fill="none" stroke="#ef4444" stroke-width="2"/><text x="100" y="37" text-anchor="middle" font-family="monospace" font-size="22" font-weight="bold" fill="#ef4444" letter-spacing="2">KADROOM</text></svg>')}`,
    description: 'International network of immersive cinematic escape rooms.',
    ceoName: 'Iryna Dzhyhurda',
    role: 'Founder'
  },
  {
    id: 'delfast',
    name: 'Delfast',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="28" letter-spacing="-1" fill="white">DELFAST</text></svg>')}`,
    description: 'Guinness World Record holding electric bikes.',
    ceoName: 'Daniel Tonkopiy',
    role: 'Founder'
  },
  {
    id: 'eprasys',
    name: 'Eprasys',
    logo: svgLogo('EPRASYS', 'mono', '#ffffff'),
    description: 'Advanced Operational Support Systems for telecom operators.',
    ceoName: 'Natalia Kagramanova',
    role: 'CEO'
  },
  {
    id: 'feel-good',
    name: 'Feel Good Labs',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#86efac">feel good labs</text></svg>')}`,
    description: 'Startup accelerator fostering wellness innovation.',
    ceoName: 'Serhii Dovhopoly',
    role: 'Founder'
  },
  {
    id: 'it4medicine',
    name: 'IT4Medicine',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="white">IT<tspan fill="#2dd4bf">4</tspan>Medicine</text></svg>')}`,
    description: 'Innovative telemedicine ecosystem connecting doctors and patients.',
    ceoName: 'Bohdan Kiziun',
    role: 'CEO'
  }
];

export const PARTNER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-3',
    quote: "Extraordinary skills on being result oriented, hardworking, solution provider mentality",
    author: "Doruk Mit",
    role: "Group Brand Manager",
    company: "Coca-Cola CCAR",
    image: "/assets/testimonials/doruk_mit.jpg"
  },
  {
    id: 'rev-2',
    quote: "Overall, they completed their task ahead of time but still supported the entire project with great care for the outcomes",
    author: "Can Duyguluer",
    role: "CEO",
    company: "BuyX, Turkey",
    image: "/assets/testimonials/can_duyguluer.jpg"
  },
  {
    id: 'rev-1',
    quote: "I received personal mentoring and operational consulting for my company, grateful to The Arbridge for the result.",
    author: "Demyd Maiornykov",
    role: "CEO",
    company: "Sekurno",
    image: "/assets/testimonials/demyd_maiornykov.jpg"
  },
  {
    id: 'rev-4',
    quote: "Thanks to The Arbridge team we managed to optimize our development strategy.",
    author: "Artem Poliakov",
    role: "CEO",
    company: "Iriscan",
    image: "/assets/testimonials/artem_poliakov.jpg"
  }
];
