export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingData {
  plans: PricingPlan[];
  faqs: FAQ[];
}

export const pricingData: PricingData = {
  plans: [
    {
      id: "mvp",
      name: "MVP Package",
      description: "Perfect for startups and new projects",
      features: [
        "Product Discovery & UX Design",
        "MVP Development (Web or Mobile)",
        "Basic Backend & Database",
        "Deployment & Launch",
        "2 Weeks Post-Launch Support"
      ],
      ctaText: "Get Started",
      ctaLink: "/contact"
    },
    {
      id: "squad",
      name: "Squad Package",
      description: "Ideal for growing businesses",
      features: [
        "Everything in MVP Package",
        "Advanced Features & Integrations",
        "Scalable Architecture",
        "Admin Dashboard",
        "API Documentation",
        "3 Months Support & Updates"
      ],
      ctaText: "Contact Us",
      ctaLink: "/contact",
      popular: true
    },
    {
      id: "support",
      name: "Support Package",
      description: "Ongoing maintenance and growth",
      features: [
        "Bug Fixes & Updates",
        "Performance Optimization",
        "Security Monitoring",
        "Feature Enhancements",
        "24/7 Support",
        "Monthly Reports"
      ],
      ctaText: "Learn More",
      ctaLink: "/contact"
    }
  ],
  faqs: [
    {
      question: "What's included in the MVP package?",
      answer: "The MVP package includes product discovery, UX design, core development, basic backend, deployment, and 2 weeks of post-launch support."
    },
    {
      question: "How long does development take?",
      answer: "MVP development typically takes 4-6 weeks, while more complex projects can take 8-12 weeks depending on requirements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support packages including bug fixes, updates, monitoring, and feature enhancements."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies including React, Next.js, TypeScript, Node.js, Python, React Native, and cloud platforms like AWS."
    },
    {
      question: "Can you work with existing codebases?",
      answer: "Absolutely! We can audit, refactor, and enhance existing applications while maintaining compatibility."
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes, we provide flexible maintenance contracts to keep your applications secure, updated, and performing optimally."
    }
  ]
};
