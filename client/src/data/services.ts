export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "product-discovery",
    title: "Product Discovery & UX",
    description: "User research, prototyping, and design systems that drive engagement and conversion.",
    icon: "lightbulb",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    id: "web-apps",
    title: "Web Apps (React/Next)",
    description: "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.",
    icon: "globe",
    features: [
      "React & Next.js Development",
      "Progressive Web Apps",
      "E-commerce Platforms",
      "Performance Optimization",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps (React Native/Flutter)",
    description: "Cross-platform mobile applications that deliver native performance and user experience.",
    icon: "smartphone",
    features: [
      "React Native Development",
      "Flutter Applications",
      "App Store Deployment",
      "Push Notifications",
    ],
  },
  {
    id: "api-microservices",
    title: "API & Microservices",
    description: "Scalable backend services and APIs that power your applications with reliability and speed.",
    icon: "server",
    features: [
      "RESTful & GraphQL APIs",
      "Microservices Architecture",
      "Database Design",
      "Authentication & Security",
    ],
  },
  {
    id: "data-messaging",
    title: "Data & Messaging (Kafka/RabbitMQ)",
    description: "Real-time data processing and messaging systems for high-performance applications.",
    icon: "activity",
    features: [
      "Apache Kafka Integration",
      "RabbitMQ Messaging",
      "Data Pipelines",
      "Real-time Analytics",
    ],
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    description: "Cloud infrastructure, CI/CD pipelines, and deployment automation for seamless operations.",
    icon: "cloud",
    features: [
      "AWS/GCP/Azure Deployment",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Monitoring & Logging",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Machine learning models and intelligent automation to drive business efficiency.",
    icon: "bot",
    features: [
      "Machine Learning Models",
      "Process Automation",
      "AI Chatbots",
      "Data Analytics",
    ],
  },
  {
    id: "maintenance-sre",
    title: "Maintenance & SRE",
    description: "Ongoing support, monitoring, and site reliability engineering for continuous operations.",
    icon: "settings",
    features: [
      "24/7 Monitoring",
      "Performance Optimization",
      "Security Updates",
      "SLA Management",
    ],
  },
];
