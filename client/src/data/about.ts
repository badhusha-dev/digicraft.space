export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface TechStackCategory {
  category: string;
  technologies: string[];
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface AboutData {
  values: Value[];
  techStack: TechStackCategory[];
  whyChooseUs: WhyChooseUsItem[];
}

export const aboutData: AboutData = {
  values: [
    {
      title: "Transparency",
      description: "Clear communication, honest timelines, and upfront pricing. No surprises, ever.",
      icon: "handshake"
    },
    {
      title: "Quality",
      description: "We write code like our reputation depends on it—because it does.",
      icon: "award"
    },
    {
      title: "Speed",
      description: "Fast iterations, quick feedback, and rapid deployment without cutting corners.",
      icon: "rocket"
    }
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Bootstrap"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL"]
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Expo", "iOS", "Android"]
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    }
  ],
  whyChooseUs: [
    {
      title: "Fast Delivery",
      description: "MVPs in 4-6 weeks, features in 2-week sprints",
      icon: "clock"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs, clear packages, honest quotes",
      icon: "dollar-sign"
    },
    {
      title: "Modern Tech",
      description: "Latest technologies, best practices, scalable architecture",
      icon: "settings"
    },
    {
      title: "Ongoing Support",
      description: "Post-launch support, maintenance, and growth planning",
      icon: "headphones"
    }
  ]
};
