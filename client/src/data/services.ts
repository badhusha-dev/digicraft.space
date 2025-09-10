export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive web applications built with React, Next.js, and TypeScript",                                                                                                                                                                                                                                                                                                         
    icon: "globe",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Accessibility Compliance"
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Cross-platform mobile apps using React Native and Flutter",
    icon: "smartphone",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "Native Performance",
      "App Store Optimization"
    ]
  },
  {
    id: "api-development",
    title: "API Development",
    description: "RESTful APIs and GraphQL endpoints with robust backend infrastructure",
    icon: "server",
    features: [
      "REST & GraphQL APIs",
      "Database Design",
      "Authentication & Security",
      "API Documentation"
    ]
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    description: "Scalable cloud infrastructure and CI/CD pipelines for reliable deployments",
    icon: "cloud",
    features: [
      "AWS & Azure Deployment",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Monitoring & Logging"
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Intelligent solutions that streamline operations and enhance user experiences",
    icon: "bot",
    features: [
      "Machine Learning Models",
      "Process Automation",
      "Chatbots & NLP",
      "Data Analytics"
    ]
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description: "Strategic guidance on architecture, technology choices, and development processes",
    icon: "lightbulb",
    features: [
      "Architecture Review",
      "Technology Strategy",
      "Code Audits",
      "Team Training"
    ]
  }
];