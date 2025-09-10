export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Chen",
    role: "CTO",
    company: "TechFlow",
    content: "DigiCraft delivered our MVP in just 6 weeks. Their technical expertise and communication was outstanding.",
    avatar: "/images/people/marcus-chen.svg",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Founder",
    company: "EcoCommerce",
    content: "They built our e-commerce platform with perfect attention to UX. Sales increased 300% after launch.",
    avatar: "/images/people/sarah-williams.svg",
    rating: 5,
  },
  {
    id: "3",
    name: "David Rodriguez",
    role: "CEO",
    company: "DataInsights",
    content: "Their AI automation solution saved us 40 hours per week. ROI was immediate and substantial.",
    avatar: "/images/people/david-rodriguez.svg",
    rating: 5,
  },
];
