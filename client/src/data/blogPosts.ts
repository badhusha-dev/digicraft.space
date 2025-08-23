export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  category: "tutorial" | "insights" | "tips";
  image: string;
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications: A Complete Guide",
    excerpt: "Learn how to structure React applications that can grow from MVP to enterprise scale without technical debt.",
    author: "Ayaz",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40",
    publishedAt: "Dec 15, 2023",
    category: "tutorial",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "AI Integration in Business Apps: Real ROI Examples",
    excerpt: "How smart businesses are using AI to automate processes and increase efficiency by 40%+.",
    author: "Ayaz",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40",
    publishedAt: "Dec 12, 2023",
    category: "insights",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "MVP to Scale: Avoiding Technical Debt Traps",
    excerpt: "Essential strategies for building MVPs that can scale gracefully without complete rewrites.",
    author: "Ayaz",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40",
    publishedAt: "Dec 10, 2023",
    category: "tips",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "Microservices vs Monolith: When to Choose What",
    excerpt: "A practical guide to architecture decisions based on team size, complexity, and growth plans.",
    author: "Ayaz",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40",
    publishedAt: "Dec 8, 2023",
    category: "tutorial",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "The Future of Mobile Development: React Native vs Flutter",
    excerpt: "Comparing the two leading cross-platform frameworks for mobile app development in 2024.",
    author: "Ayaz",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40",
    publishedAt: "Dec 5, 2023",
    category: "insights",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    readTime: "9 min read",
  },
  {
    id: "6",
    title: "Essential Metrics for Software Product Success",
    excerpt: "Key performance indicators every product owner should track from day one.",
    author: "Ayaz",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40",
    publishedAt: "Dec 3, 2023",
    category: "tips",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    readTime: "4 min read",
  },
];
