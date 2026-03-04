import type { PersonalInfo, Project, Experience, Skill } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "David Kim",
  title: "UX/UI & Product Designer",
  bio: "I'm a Seoul-born, San Francisco-based designer with over 8 years of experience crafting digital products that sit at the intersection of human behaviour and business goals. My work spans mobile apps, SaaS platforms, and design systems — always with a focus on clarity, accessibility, and delight.\n\nI've collaborated with startups and Fortune 500 companies alike, leading design from early discovery through to polished launch. I believe great design is invisible: it removes friction, builds trust, and lets the user accomplish their goal without thinking twice.",
  shortBio:
    "UX/UI & Product Designer based in San Francisco, crafting digital experiences that blend beauty with purpose.",
  email: "hello@davidkim.design",
  location: "San Francisco, CA",
  available: true,
  social: {
    linkedin: "https://linkedin.com/in/davidkim",
    dribbble: "https://dribbble.com/davidkim",
    github: "https://github.com/davidkim",
    twitter: "https://twitter.com/davidkim",
  },
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "finflow-banking-app",
    title: "FinFlow",
    subtitle: "Reimagining personal banking for Gen Z",
    description:
      "A full redesign of a challenger bank's mobile app, reducing onboarding drop-off by 47% and increasing daily active users.",
    category: ["UX Design", "UI Design", "Product Strategy"],
    tags: ["Mobile", "Fintech", "iOS", "Android", "Design System"],
    year: "2024",
    duration: "6 months",
    role: "Lead Product Designer",
    client: "FinFlow Inc.",
    accentColor: "#6366f1",
    bgColor: "#eef2ff",
    featured: true,
    overview:
      "FinFlow came to us with a problem: their existing mobile banking app had a 68% drop-off rate during onboarding, and daily engagement was well below industry benchmarks. The task was to completely reimagine the product from the ground up.",
    challenge:
      "The core challenge was balancing regulatory compliance requirements — which often dictate clunky flows — with the expectation of a delightful, consumer-grade experience. We needed to make KYC (Know Your Customer) feel effortless while maintaining trust and security.",
    process: [
      "Conducted 24 user interviews across three demographic segments to map pain points in the existing flow.",
      "Led a week-long design sprint with stakeholders to align on vision and surface creative solutions.",
      "Built a comprehensive component library in Figma, ensuring consistency across 200+ screens.",
      "Ran three rounds of usability testing with interactive prototypes, iterating after each session.",
      "Collaborated closely with the engineering team on feasibility and performance constraints.",
    ],
    solution:
      "We introduced a progressive onboarding model that lets users explore core features before completing identity verification, reducing perceived friction. The new UI system uses a calming colour palette, generous whitespace, and micro-animations that guide attention without overwhelming.",
    results: [
      "47% reduction in onboarding drop-off",
      "3.2× increase in daily active users within 90 days of launch",
      "App Store rating improved from 3.1 to 4.7 stars",
      "Won Webby Award for Best Banking App UX 2024",
    ],
    images: {
      hero: "#6366f1",
    },
  },
  {
    id: "2",
    slug: "atlas-design-system",
    title: "Atlas Design System",
    subtitle: "A scalable design language for a 500-person org",
    description:
      "Built a unified design system adopted by 12 product teams, cutting design-to-dev handoff time by 60%.",
    category: ["Design Systems", "UI Design"],
    tags: ["Design System", "Figma", "React", "Storybook", "Documentation"],
    year: "2023",
    duration: "8 months",
    role: "Design System Lead",
    client: "Meridian Technologies",
    accentColor: "#f59e0b",
    bgColor: "#fffbeb",
    featured: true,
    overview:
      "Meridian Technologies had grown rapidly through acquisitions, resulting in four separate product suites with completely inconsistent UI patterns. The Atlas Design System was commissioned to unify the visual language and engineering components across the entire product portfolio.",
    challenge:
      "The biggest challenge was organisational: convincing 12 independent product teams to adopt a shared system rather than build their own. We needed to deliver a system that was flexible enough to serve diverse use cases while opinionated enough to enforce consistency.",
    process: [
      "Audited all four product suites, cataloguing 340+ unique UI components and patterns.",
      "Facilitated cross-team workshops to identify shared needs and diverging requirements.",
      "Defined a token-based architecture allowing teams to apply product-specific themes without breaking the system.",
      "Built a documentation site with live component examples using Storybook and MDX.",
      "Created a governance model with a rotating champion from each team.",
    ],
    solution:
      "Atlas is a multi-brand design system built on a semantic token architecture. It ships with a Figma library of 200+ components, a React component library published to npm, and a living documentation site. The system supports light/dark modes and meets WCAG 2.1 AA accessibility standards out of the box.",
    results: [
      "Adopted by all 12 product teams within 6 months",
      "60% reduction in design-to-dev handoff time",
      "Eliminated 340+ duplicate components across the organisation",
      "Saved an estimated 2,400 engineering hours in the first year",
    ],
    images: {
      hero: "#f59e0b",
    },
  },
  {
    id: "3",
    slug: "horizon-saas-dashboard",
    title: "Horizon Analytics",
    subtitle: "Data visualisation for non-technical teams",
    description:
      "Designed a B2B analytics dashboard that made complex data accessible to non-technical marketing teams.",
    category: ["UX Design", "UI Design", "Product Strategy"],
    tags: ["Dashboard", "Data Viz", "B2B", "SaaS", "Web"],
    year: "2023",
    duration: "4 months",
    role: "Senior Product Designer",
    client: "Horizon Analytics",
    accentColor: "#10b981",
    bgColor: "#ecfdf5",
    featured: true,
    overview:
      "Horizon Analytics had a powerful data engine but struggled to make it usable for their target market: marketing teams without a data science background. The product was being outcompeted by simpler tools despite having superior analytical capabilities.",
    challenge:
      "The challenge was progressive disclosure: surfacing enough insight to be valuable for casual users, while not hiding the depth that power users needed. We also had to design around datasets that could range from 100 to 100 million rows.",
    process: [
      "Embedded with the customer success team for two weeks, observing live user sessions and support calls.",
      "Created 'Jobs to Be Done' maps for three distinct user personas.",
      "Prototyped four competing information architectures and tested each with five users.",
      "Designed a chart builder with natural-language query assistance.",
      "Iterated on the navigation structure through continuous tree testing.",
    ],
    solution:
      "We redesigned the dashboard around 'goals' rather than 'metrics', letting users define what success looked like and surfacing relevant data automatically. A new quick-insight panel surfaces three key takeaways in plain English each time a user logs in.",
    results: [
      "Trial-to-paid conversion increased by 34%",
      "Average time-to-first-insight dropped from 11 minutes to 2.3 minutes",
      "Support ticket volume reduced by 28%",
      "NPS score improved from 32 to 61",
    ],
    images: {
      hero: "#10b981",
    },
  },
  {
    id: "4",
    slug: "pulse-health-app",
    title: "Pulse Health",
    subtitle: "Mental wellness for the always-on generation",
    description:
      "End-to-end design of a mental wellness app focused on reducing anxiety through breathing and mindfulness techniques.",
    category: ["UX Design", "UI Design", "Mobile"],
    tags: ["Mobile", "Health", "iOS", "Accessibility", "Animation"],
    year: "2022",
    duration: "5 months",
    role: "Lead Product Designer",
    client: "Pulse Health Co.",
    accentColor: "#8b5cf6",
    bgColor: "#f5f3ff",
    featured: false,
    overview:
      "Pulse Health is a mental wellness app targeting young professionals experiencing burnout and anxiety. The product needed to feel like a trusted companion — warm, non-judgmental, and genuinely effective.",
    challenge:
      "Wellness apps often fall into two traps: either clinical and cold, or saccharine and patronising. We needed to find a middle path that felt sophisticated yet approachable. Accessibility was also a core constraint, as anxiety often co-occurs with sensory processing differences.",
    process: [
      "Partnered with licensed therapists and psychologists to ground the UX in evidence-based techniques.",
      "Conducted diary studies with 18 participants over three weeks.",
      "Developed a motion language that reinforces calm rather than urgency.",
      "Tested colour palettes and typography on users with anxiety sensitivity.",
      "Created an adaptive content engine that personalises exercises based on mood check-ins.",
    ],
    solution:
      "A serene, gesture-driven interface where breathing exercises are controlled by touch and audio. The app learns your stress patterns over time and proactively suggests techniques before anxiety peaks. Dark mode is the default, with carefully tuned contrast ratios for late-night use.",
    results: [
      "4.9 star rating on the App Store (12,000+ reviews)",
      "71% of users report reduced anxiety after 30 days",
      "Featured by Apple as 'App of the Day'",
      "Reached 500,000 downloads in the first 90 days",
    ],
    images: {
      hero: "#8b5cf6",
    },
  },
  {
    id: "5",
    slug: "novo-ecommerce-redesign",
    title: "Novo Commerce",
    subtitle: "Luxury e-commerce with a human touch",
    description:
      "Complete UX overhaul of a premium fashion e-commerce platform, increasing conversion rate by 29%.",
    category: ["UX Design", "UI Design", "E-commerce"],
    tags: ["E-commerce", "Web", "Luxury", "Conversion", "A/B Testing"],
    year: "2022",
    duration: "3 months",
    role: "UX/UI Designer",
    client: "Novo Fashion Group",
    accentColor: "#e11d48",
    bgColor: "#fff1f2",
    featured: false,
    overview:
      "Novo Fashion Group operated a luxury fashion e-commerce platform that was losing market share to competitors with superior digital experiences. Their conversion rate sat at 1.2% — far below the 2.8% luxury e-commerce benchmark.",
    challenge:
      "Luxury shoppers have high expectations for visual richness and exclusivity, but also low tolerance for complexity. Every added step in the checkout flow cost significant revenue. We needed to elevate the aesthetic while ruthlessly simplifying the purchase journey.",
    process: [
      "Analysed 180 days of session recordings to identify exact drop-off points.",
      "Benchmarked against 8 luxury competitors across 40 experience dimensions.",
      "Ran heatmap studies on key landing and product pages.",
      "Designed and A/B tested 12 variations of the product page and checkout flow.",
      "Introduced a persistent 'quick-buy' mechanism for returning customers.",
    ],
    solution:
      "A full visual refresh with full-bleed editorial photography, a streamlined product discovery experience, and a 3-step checkout flow down from 7. We introduced size-recommendation AI and a 'complete the look' module that increased average order value.",
    results: [
      "Conversion rate increased from 1.2% to 1.9% (a 58% relative improvement)",
      "Average order value increased by 22%",
      "Cart abandonment rate reduced from 71% to 58%",
      "Return customer rate improved by 34%",
    ],
    images: {
      hero: "#e11d48",
    },
  },
  {
    id: "6",
    slug: "waypoint-navigation",
    title: "Waypoint",
    subtitle: "Navigation for the curious traveller",
    description:
      "Designed an offline-first travel navigation app prioritising discovery and serendipitous exploration.",
    category: ["UX Design", "Mobile", "Product Strategy"],
    tags: ["Mobile", "Maps", "Travel", "Offline-first", "iOS"],
    year: "2021",
    duration: "7 months",
    role: "Product Designer",
    client: "Waypoint Travel (Startup)",
    accentColor: "#0ea5e9",
    bgColor: "#f0f9ff",
    featured: false,
    overview:
      "Waypoint was a seed-stage startup with a bold vision: a travel navigation app that encouraged exploration rather than optimisation. Where Google Maps asks 'how do I get there fastest?', Waypoint asks 'what might I discover along the way?'",
    challenge:
      "Existing mapping UX patterns are deeply ingrained in user expectations. Introducing a new mental model — discovery over efficiency — required careful onboarding and a fundamentally different information hierarchy. The app also needed to work fully offline in areas with no connectivity.",
    process: [
      "Conducted ethnographic research with 14 travellers across three countries.",
      "Mapped existing mental models of navigation through card sorting and contextual inquiry.",
      "Designed three completely different navigation paradigms and tested each.",
      "Worked with engineers on the offline data architecture to inform what was feasible in the UI.",
      "Iterated on the map rendering style to balance information density with visual clarity.",
    ],
    solution:
      "A card-based discovery layer sits above a simplified map, surfacing nearby points of interest based on personalised interest tags. Routes are presented as 'journeys' with narrative descriptions rather than turn-by-turn instructions. The entire app works offline with pre-downloaded regional packs.",
    results: [
      "Successfully launched on iOS with 50,000 downloads in 6 months",
      "4.8 average App Store rating",
      "Featured in Condé Nast Traveller's 'Best Travel Apps 2021'",
      "Secured Series A funding of $4.2M shortly after launch",
    ],
    images: {
      hero: "#0ea5e9",
    },
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Meridian Technologies",
    role: "Lead Product Designer",
    period: "2022 — Present",
    location: "San Francisco, CA",
    description:
      "Leading design for a suite of B2B SaaS products serving 200,000+ business users. Established the Atlas Design System and manage a team of 4 designers.",
    highlights: [
      "Founded and led the Atlas Design System, adopted by 12 product teams",
      "Grew the design team from 2 to 6 people",
      "Introduced design ops practices that cut delivery time by 35%",
      "Partnered with the VP of Product to define a 3-year product vision",
    ],
  },
  {
    id: "2",
    company: "Studio Koto (Freelance)",
    role: "Senior UX/UI Designer",
    period: "2020 — 2022",
    location: "Remote",
    description:
      "Worked as an independent designer embedded with client teams across fintech, healthtech, and consumer apps. Delivered end-to-end design for 8 products.",
    highlights: [
      "Designed FinFlow mobile banking app (47% drop-off reduction)",
      "Completed Pulse Health app — featured by Apple as App of the Day",
      "Built and shipped Novo Commerce redesign (29% conversion increase)",
      "Worked with clients across the US, UK, and Australia",
    ],
  },
  {
    id: "3",
    company: "Shopify",
    role: "Product Designer",
    period: "2018 — 2020",
    location: "Ottawa, Canada",
    description:
      "Designed core features for Shopify's merchant dashboard, focusing on analytics and the Shopify Payments product area, impacting 1M+ merchants worldwide.",
    highlights: [
      "Redesigned the merchant analytics dashboard used by 1.7M merchants",
      "Led the UX for Shopify Payments international expansion",
      "Conducted 100+ user research sessions across three years",
      "Mentored two junior designers",
    ],
  },
  {
    id: "4",
    company: "Ueno",
    role: "UI/Visual Designer",
    period: "2016 — 2018",
    location: "San Francisco, CA",
    description:
      "Started my career at award-winning digital agency Ueno, working on branding, UI, and digital campaigns for tech clients including Airbnb, Twitter, and Lyft.",
    highlights: [
      "Designed UI for Airbnb's internal tooling suite",
      "Created visual identities for 5 startup clients",
      "Won Communication Arts Interactive Award 2017",
      "Presented work at SXSW Interactive 2018",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Design",
    items: [
      "UX Research",
      "Product Strategy",
      "Interaction Design",
      "Visual Design",
      "Prototyping",
      "Usability Testing",
      "Information Architecture",
      "Design Systems",
    ],
  },
  {
    category: "Tools",
    items: [
      "Figma",
      "Adobe Creative Suite",
      "Principle",
      "ProtoPie",
      "Framer",
      "Miro",
      "Notion",
      "Storybook",
    ],
  },
  {
    category: "Frontend",
    items: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js",
    ],
  },
  {
    category: "Research Methods",
    items: [
      "User Interviews",
      "Contextual Inquiry",
      "Card Sorting",
      "Tree Testing",
      "A/B Testing",
      "Heuristic Evaluation",
      "Diary Studies",
      "Jobs to Be Done",
    ],
  },
];
