export interface JobPosition {
  id: string;
  title: string;
  type: "full-time" | "part-time" | "contract";
  location: "remote" | "hybrid" | "onsite";
  salary: string;
  description: string;
  requirements: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: "senior-fullstack",
    title: "Senior Full-Stack Developer",
    type: "full-time",
    location: "remote",
    salary: "$80k - $120k",
    description: "Lead development of React/Node.js applications. 5+ years experience with modern web technologies.",
    requirements: [
      "React, TypeScript, Node.js",
      "GraphQL, PostgreSQL, AWS",
      "Team leadership experience",
    ],
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    type: "full-time",
    location: "remote",
    salary: "$70k - $100k",
    description: "Build beautiful mobile apps with React Native and Flutter. 3+ years mobile development experience.",
    requirements: [
      "React Native, Flutter",
      "iOS/Android platforms",
      "App Store deployment",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    type: "full-time",
    location: "remote",
    salary: "$75k - $110k",
    description: "Manage cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes.",
    requirements: [
      "AWS, GCP, or Azure",
      "Docker, Kubernetes",
      "CI/CD, Infrastructure as Code",
    ],
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    type: "contract",
    location: "remote",
    salary: "$50-80/hr",
    description: "Design exceptional user experiences for web and mobile applications. Portfolio required.",
    requirements: [
      "Figma, Adobe Creative Suite",
      "User research, prototyping",
      "Design systems experience",
    ],
  },
];

export const benefits = [
  {
    title: "Remote Work",
    description: "Work from anywhere with flexible hours",
    icon: "laptop",
  },
  {
    title: "Learning Budget",
    description: "$2k annual budget for courses and conferences",
    icon: "graduation-cap",
  },
  {
    title: "Health & Wellness",
    description: "Health insurance and wellness programs",
    icon: "heart",
  },
  {
    title: "Flexible PTO",
    description: "Unlimited vacation and personal time",
    icon: "calendar",
  },
];
