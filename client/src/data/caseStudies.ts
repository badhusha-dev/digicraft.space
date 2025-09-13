export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  image: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

export const getCaseStudies = (t: (key: string) => string): CaseStudy[] => [
  {
    id: "1",
    title: t("caseStudies.ecocommerce.title"),
    client: "EcoCommerce",
    industry: "E-commerce",
    challenge: t("caseStudies.ecocommerce.challenge"),
    solution: t("caseStudies.ecocommerce.solution"),
    results: [
      t("caseStudies.ecocommerce.results.sales"),
      t("caseStudies.ecocommerce.results.bounce"),
      t("caseStudies.ecocommerce.results.speed"),
      t("caseStudies.ecocommerce.results.satisfaction")
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    duration: t("caseStudies.ecocommerce.duration"),
    image: "/images/case-studies/ecocommerce-platform.jpg",
    testimonial: t("caseStudies.ecocommerce.testimonial"),
    testimonialAuthor: t("caseStudies.ecocommerce.testimonialAuthor")
  },
  {
    id: "2",
    title: t("caseStudies.datainsights.title"),
    client: "DataInsights",
    industry: "Analytics",
    challenge: t("caseStudies.datainsights.challenge"),
    solution: t("caseStudies.datainsights.solution"),
    results: [
      t("caseStudies.datainsights.results.time"),
      t("caseStudies.datainsights.results.accuracy"),
      t("caseStudies.datainsights.results.decision"),
      t("caseStudies.datainsights.results.roi")
    ],
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker"],
    duration: t("caseStudies.datainsights.duration"),
    image: "/images/case-studies/ai-analytics-dashboard.jpg",
    testimonial: t("caseStudies.datainsights.testimonial"),
    testimonialAuthor: t("caseStudies.datainsights.testimonialAuthor")
  },
  {
    id: "3",
    title: t("caseStudies.healthtech.title"),
    client: "HealthTech Pro",
    industry: "Healthcare",
    challenge: t("caseStudies.healthtech.challenge"),
    solution: t("caseStudies.healthtech.solution"),
    results: [
      t("caseStudies.healthtech.results.satisfaction"),
      t("caseStudies.healthtech.results.time"),
      t("caseStudies.healthtech.results.compliance"),
      t("caseStudies.healthtech.results.integration")
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    duration: t("caseStudies.healthtech.duration"),
    image: "/images/case-studies/healthcare-system.jpg",
    testimonial: t("caseStudies.healthtech.testimonial"),
    testimonialAuthor: t("caseStudies.healthtech.testimonialAuthor")
  },
  {
    id: "4",
    title: t("caseStudies.accounting.title"),
    client: "AccountPro Solutions",
    industry: "Accounting",
    challenge: t("caseStudies.accounting.challenge"),
    solution: t("caseStudies.accounting.solution"),
    results: [
      t("caseStudies.accounting.results.reduction"),
      t("caseStudies.accounting.results.accuracy"),
      t("caseStudies.accounting.results.speed"),
      t("caseStudies.accounting.results.rating")
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "QuickBooks API", "AWS"],
    duration: t("caseStudies.accounting.duration"),
    image: "/images/case-studies/accounting-platform.jpg",
    testimonial: t("caseStudies.accounting.testimonial"),
    testimonialAuthor: t("caseStudies.accounting.testimonialAuthor")
  },
  {
    id: "5",
    title: t("caseStudies.techflow.title"),
    client: "TechFlow",
    industry: "SaaS",
    challenge: t("caseStudies.techflow.challenge"),
    solution: t("caseStudies.techflow.solution"),
    results: [
      t("caseStudies.techflow.results.schedule"),
      t("caseStudies.techflow.results.funding"),
      t("caseStudies.techflow.results.users"),
      t("caseStudies.techflow.results.rating")
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    duration: t("caseStudies.techflow.duration"),
    image: "/images/case-studies/saas-mvp.jpg",
    testimonial: t("caseStudies.techflow.testimonial"),
    testimonialAuthor: t("caseStudies.techflow.testimonialAuthor")
  }
];

// Keep the original array for backward compatibility
export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-commerce Platform Transformation",
    client: "EcoCommerce",
    industry: "E-commerce",
    challenge: "Legacy platform couldn't handle increased traffic and lacked modern UX features. Sales were declining due to poor user experience.",
    solution: "Built a modern React-based e-commerce platform with advanced search, personalized recommendations, and mobile-first design.",
    results: [
      "300% increase in sales within 3 months",
      "50% reduction in bounce rate",
      "95% improvement in page load speed",
      "4.8/5 customer satisfaction rating"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    duration: "12 weeks",
    image: "/images/case-studies/ecocommerce-platform.jpg",
    testimonial: "DigiCraft transformed our business. The new platform exceeded all our expectations.",
    testimonialAuthor: "Sarah Williams, Founder"
  },
  {
    id: "2",
    title: "AI-Powered Analytics Dashboard",
    client: "DataInsights",
    industry: "Analytics",
    challenge: "Manual data processing was consuming 40+ hours weekly. Needed real-time insights and automated reporting.",
    solution: "Developed an AI-powered analytics platform with machine learning algorithms for predictive insights and automated reporting.",
    results: [
      "40 hours saved per week on data processing",
      "Real-time insights with 99.9% accuracy",
      "60% faster decision-making process",
      "ROI achieved within 2 months"
    ],
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker"],
    duration: "16 weeks",
    image: "/images/case-studies/ai-analytics-dashboard.jpg",
    testimonial: "The AI solution revolutionized how we analyze data. Incredible results!",
    testimonialAuthor: "David Rodriguez, CEO"
  },
  {
    id: "3",
    title: "Healthcare Management System",
    client: "HealthTech Pro",
    industry: "Healthcare",
    challenge: "Complex patient management system was outdated and causing workflow inefficiencies. Needed HIPAA-compliant solution.",
    solution: "Created a comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
    results: [
      "95% user satisfaction rate",
      "30% reduction in administrative time",
      "100% HIPAA compliance",
      "Seamless telemedicine integration"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    duration: "20 weeks",
    image: "/images/case-studies/healthcare-system.jpg",
    testimonial: "Working with DigiCraft was a game-changer for our healthcare platform.",
    testimonialAuthor: "Emily Johnson, Product Manager"
  },
  {
    id: "4",
    title: "Accounting Management Platform",
    client: "AccountPro Solutions",
    industry: "Accounting",
    challenge: "Manual accounting processes were error-prone and time-consuming. Needed an automated platform for invoice management, expense tracking, and financial reporting.",
    solution: "Developed a comprehensive accounting platform with automated invoice processing, expense categorization, real-time financial reporting, and tax preparation features.",
    results: [
      "70% reduction in manual data entry",
      "95% accuracy in financial reporting",
      "50% faster month-end closing",
      "4.9/5 user satisfaction rating"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "QuickBooks API", "AWS"],
    duration: "16 weeks",
    image: "/images/case-studies/accounting-platform.jpg",
    testimonial: "This platform transformed our accounting workflow. Highly recommend DigiCraft's expertise.",
    testimonialAuthor: "Jennifer Martinez, CPA"
  },
  {
    id: "5",
    title: "SaaS MVP Development",
    client: "TechFlow",
    industry: "SaaS",
    challenge: "Startup needed to quickly validate their idea with a functional MVP to secure funding and early customers.",
    solution: "Delivered a feature-complete MVP in record time with core functionality, user authentication, and basic analytics.",
    results: [
      "Launched 2 weeks ahead of schedule",
      "Secured $2M in Series A funding",
      "500+ beta users in first month",
      "4.5/5 user rating"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    duration: "6 weeks",
    image: "/images/case-studies/saas-mvp.jpg",
    testimonial: "DigiCraft delivered our MVP in just 6 weeks. Outstanding technical expertise.",
    testimonialAuthor: "Marcus Chen, CTO"
  }
];
