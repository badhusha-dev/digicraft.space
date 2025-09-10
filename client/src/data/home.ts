export interface Highlight {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialPreview {
  name: string;
  company: string;
  content: string;
  rating: number;
}

export interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
  highlights: Highlight[];
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    previews: TestimonialPreview[];
  };
}

export const homeData: HomeData = {
  hero: {
    title: "Build Software That Ships & Scales",
    subtitle: "Product-minded engineers building reliable, beautiful software",
    description: "We help startups and enterprises build, launch, and scale their digital products with clean code, modern architecture, and exceptional user experiences.",
    ctaText: "Start Your Project",
    ctaLink: "/contact"
  },
  highlights: [
    {
      title: "MVP Development",
      description: "From idea to market in 4-6 weeks with lean, scalable MVPs",
      icon: "rocket"
    },
    {
      title: "Full-Stack Solutions",
      description: "Complete web and mobile applications with modern tech stacks",
      icon: "layers"
    },
    {
      title: "AI & Automation",
      description: "Intelligent solutions that streamline operations and enhance productivity",
      icon: "bot"
    }
  ],
  process: {
    title: "How We Work",
    subtitle: "A proven process that delivers results",
    steps: [
      {
        title: "Discovery",
        description: "We understand your business goals and technical requirements",
        icon: "search"
      },
      {
        title: "Design",
        description: "Create user-centered designs and technical architecture",
        icon: "palette"
      },
      {
        title: "Develop",
        description: "Build with clean code, modern practices, and scalable architecture",
        icon: "code"
      },
      {
        title: "Deploy",
        description: "Launch with confidence using DevOps best practices",
        icon: "rocket"
      }
    ]
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Trusted by startups and enterprises worldwide",
    previews: [
      {
        name: "Sarah Chen",
        company: "TechStart Inc.",
        content: "DigiCraft delivered our MVP in record time. The quality exceeded our expectations.",
        rating: 5
      },
      {
        name: "Michael Rodriguez",
        company: "Enterprise Solutions",
        content: "Professional, reliable, and technically excellent. Highly recommended.",
        rating: 5
      },
      {
        name: "Emily Johnson",
        company: "StartupXYZ",
        content: "They understood our vision and brought it to life perfectly.",
        rating: 5
      }
    ]
  }
};
