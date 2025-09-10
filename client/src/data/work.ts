export interface Capability {
  title: string;
  description: string;
  icon: string;
}

export interface TechStackCategory {
  category: string;
  technologies: string[];
}

export interface ApproachStep {
  title: string;
  description: string;
  icon: string;
}

export interface WorkData {
  capabilities: Capability[];
  techStack: TechStackCategory[];
  approach: ApproachStep[];
}

export const workData: WorkData = {
  capabilities: [
    {
      title: "Startup MVPs",
      description: "Fast-track your startup idea from concept to market with lean, scalable MVPs that validate your vision.",
      icon: "rocket"
    },
    {
      title: "Enterprise Solutions",
      description: "Robust, scalable platforms that handle enterprise complexity while maintaining performance and security.",
      icon: "building"
    },
    {
      title: "E-commerce Platforms",
      description: "Full-featured online stores with payment processing, inventory management, and growth optimization.",
      icon: "shopping-cart"
    }
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Bootstrap"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "GraphQL", "PostgreSQL"]
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Expo", "Native APIs"]
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    }
  ],
  approach: [
    {
      title: "Product-Minded Development",
      description: "We think like product owners, focusing on user value and business outcomes, not just code.",
      icon: "users"
    },
    {
      title: "Agile & Iterative",
      description: "Regular demos, feedback loops, and iterative improvements ensure we build exactly what you need.",
      icon: "sync"
    },
    {
      title: "Quality-First",
      description: "Comprehensive testing, code reviews, and security best practices are built into our process.",
      icon: "shield"
    }
  ]
};