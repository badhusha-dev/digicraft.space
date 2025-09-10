export interface ProjectOption {
  id: string;
  label: string;
}

export interface NextStep {
  step: number;
  title: string;
}

export interface ContactData {
  projectTypeOptions: ProjectOption[];
  nextSteps: NextStep[];
}

export const contactData: ContactData = {
  projectTypeOptions: [
    { id: "web-app", label: "Web Application" },
    { id: "mobile-app", label: "Mobile App" },
    { id: "api-backend", label: "API/Backend" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "ai-automation", label: "AI/Automation" },
    { id: "consulting", label: "Consulting" }
  ],
  nextSteps: [
    { step: 1, title: "We review your project details" },
    { step: 2, title: "Schedule a discovery call" },
    { step: 3, title: "Provide detailed proposal" },
    { step: 4, title: "Start building your solution" }
  ]
};
