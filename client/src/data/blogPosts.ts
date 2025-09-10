// Blog posts data - preserved for future use when Blog page is restored
// To restore: uncomment Blog routes in App.tsx, Navbar.tsx, and Footer.tsx

export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "mvp-development-guide",
    title: "The Complete Guide to MVP Development",
    excerpt: "Learn how to build a Minimum Viable Product that validates your idea and attracts early adopters.",
    content: "Building an MVP is crucial for startup success. This comprehensive guide covers everything from ideation to launch...",
    author: "Ayaz",
    date: "2024-01-15",
    category: "Development",
    tags: ["MVP", "Startup", "Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    featured: true
  },
  {
    id: "react-best-practices",
    title: "React Best Practices for 2024",
    excerpt: "Modern React development patterns and best practices for building scalable applications.",
    content: "React has evolved significantly. Here are the current best practices for building maintainable React applications...",
    author: "Ayaz",
    date: "2024-01-10",
    category: "Frontend",
    tags: ["React", "JavaScript", "Frontend"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "api-design-principles",
    title: "API Design Principles for Modern Applications",
    excerpt: "Essential principles for designing RESTful and GraphQL APIs that developers love to use.",
    content: "Good API design is crucial for developer experience. Here are the key principles every API designer should follow...",
    author: "Ayaz",
    date: "2024-01-05",
    category: "Backend",
    tags: ["API", "Backend", "GraphQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];