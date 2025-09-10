// Careers data - preserved for future use when Careers page is restored
// To restore: uncomment Careers routes in App.tsx, Navbar.tsx, and Footer.tsx

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  applyLink: string;
  featured?: boolean;
}

export const jobPositions: JobPosition[] = [
  {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a senior frontend developer to join our team and help build amazing user experiences.",
    requirements: [
      "5+ years of React/TypeScript experience",
      "Strong understanding of modern CSS and responsive design",
      "Experience with state management (Redux, Zustand)",
      "Knowledge of testing frameworks (Jest, React Testing Library)",
      "Experience with build tools (Vite, Webpack)"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "Professional development budget",
      "Flexible PTO"
    ],
    applyLink: "mailto:careers@digicraft.space?subject=Senior Frontend Developer Application",
    featured: true
  },
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team as a full-stack developer working on both frontend and backend solutions.",
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Database experience (PostgreSQL, MongoDB)",
      "API development (REST, GraphQL)",
      "Cloud platform experience (AWS, Azure)"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "Professional development budget",
      "Flexible PTO"
    ],
    applyLink: "mailto:careers@digicraft.space?subject=Full-Stack Developer Application"
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Help us build and maintain scalable infrastructure and deployment pipelines.",
    requirements: [
      "3+ years of DevOps experience",
      "Docker and Kubernetes expertise",
      "CI/CD pipeline development",
      "Cloud platform experience (AWS, Azure)",
      "Infrastructure as Code (Terraform, CloudFormation)"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "Professional development budget",
      "Flexible PTO"
    ],
    applyLink: "mailto:careers@digicraft.space?subject=DevOps Engineer Application"
  }
];