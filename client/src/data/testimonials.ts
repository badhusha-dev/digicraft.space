export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  logo?: string;
  industry?: string;
  projectType?: string;
  results?: string;
}

export const getTestimonials = (t: (key: string) => string): Testimonial[] => [
  {
    id: "1",
    name: "Marcus Chen",
    role: t("testimonials.marcus.role"),
    company: "TechFlow",
    content: t("testimonials.marcus.content"),
    avatar: "/images/people/marcus-chen.svg",
    rating: 5,
    logo: "/images/logos/techflow-logo.svg",
    industry: "SaaS",
    projectType: t("testimonials.marcus.projectType"),
    results: t("testimonials.marcus.results")
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: t("testimonials.sarah.role"),
    company: "EcoCommerce",
    content: t("testimonials.sarah.content"),
    avatar: "/images/people/sarah-williams.svg",
    rating: 5,
    logo: "/images/logos/ecocommerce-logo.svg",
    industry: "E-commerce",
    projectType: t("testimonials.sarah.projectType"),
    results: t("testimonials.sarah.results")
  },
  {
    id: "3",
    name: "David Rodriguez",
    role: t("testimonials.david.role"),
    company: "DataInsights",
    content: t("testimonials.david.content"),
    avatar: "/images/people/david-rodriguez.svg",
    rating: 5,
    logo: "/images/logos/datainsights-logo.svg",
    industry: "Analytics",
    projectType: t("testimonials.david.projectType"),
    results: t("testimonials.david.results")
  },
  {
    id: "4",
    name: "Emily Johnson",
    role: t("testimonials.emily.role"),
    company: "HealthTech Pro",
    content: t("testimonials.emily.content"),
    avatar: "/images/people/emily-johnson.svg",
    rating: 5,
    logo: "/images/logos/healthtech-logo.svg",
    industry: "Healthcare",
    projectType: t("testimonials.emily.projectType"),
    results: t("testimonials.emily.results")
  },
  {
    id: "5",
    name: "Jennifer Martinez",
    role: t("testimonials.jennifer.role"),
    company: "AccountPro Solutions",
    content: t("testimonials.jennifer.content"),
    avatar: "/images/people/jennifer-martinez.svg",
    rating: 5,
    logo: "/images/logos/accountpro-logo.svg",
    industry: "Accounting",
    projectType: t("testimonials.jennifer.projectType"),
    results: t("testimonials.jennifer.results")
  }
];

// Keep the original array for backward compatibility
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Chen",
    role: "CTO",
    company: "TechFlow",
    content: "DigiCraft delivered our MVP in just 6 weeks. Their technical expertise and communication was outstanding. The team understood our vision and brought it to life perfectly.",
    avatar: "/images/people/marcus-chen.svg",
    rating: 5,
    logo: "/images/logos/techflow-logo.svg",
    industry: "SaaS",
    projectType: "MVP Development",
    results: "Launched 2 weeks ahead of schedule"
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Founder",
    company: "EcoCommerce",
    content: "They built our e-commerce platform with perfect attention to UX. Sales increased 300% after launch. The user experience they created is simply exceptional.",
    avatar: "/images/people/sarah-williams.svg",
    rating: 5,
    logo: "/images/logos/ecocommerce-logo.svg",
    industry: "E-commerce",
    projectType: "Web Application",
    results: "300% increase in sales"
  },
  {
    id: "3",
    name: "David Rodriguez",
    role: "CEO",
    company: "DataInsights",
    content: "Their AI automation solution saved us 40 hours per week. ROI was immediate and substantial. The team's expertise in AI and machine learning is remarkable.",
    avatar: "/images/people/david-rodriguez.svg",
    rating: 5,
    logo: "/images/logos/datainsights-logo.svg",
    industry: "Analytics",
    projectType: "AI Automation",
    results: "40 hours saved per week"
  },
  {
    id: "4",
    name: "Emily Johnson",
    role: "Product Manager",
    company: "HealthTech Pro",
    content: "Working with DigiCraft was a game-changer. They transformed our complex healthcare platform into an intuitive, scalable solution that our users love.",
    avatar: "/images/people/emily-johnson.svg",
    rating: 5,
    logo: "/images/logos/healthtech-logo.svg",
    industry: "Healthcare",
    projectType: "Platform Development",
    results: "95% user satisfaction rate"
  },
  {
    id: "5",
    name: "Jennifer Martinez",
    role: "CPA",
    company: "AccountPro Solutions",
    content: "This accounting platform transformed our workflow completely. The automation features saved us countless hours and eliminated errors. Highly recommend DigiCraft's expertise.",
    avatar: "/images/people/jennifer-martinez.svg",
    rating: 5,
    logo: "/images/logos/accountpro-logo.svg",
    industry: "Accounting",
    projectType: "Platform Development",
    results: "70% reduction in manual work"
  }
];
