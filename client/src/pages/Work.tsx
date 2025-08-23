import { Link } from "wouter";
import SEO from "../components/SEO";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";

export default function Work() {
  useEffect(() => {
    logPageView("work");
  }, []);

  const capabilities = [
    {
      title: "Startup MVPs",
      description: "Fast-track your startup idea from concept to market with lean, scalable MVPs that validate your vision.",
      icon: "rocket",
    },
    {
      title: "Enterprise Solutions",
      description: "Robust, scalable platforms that handle enterprise complexity while maintaining performance and security.",
      icon: "building",
    },
    {
      title: "E-commerce Platforms",
      description: "Full-featured online stores with payment processing, inventory management, and growth optimization.",
      icon: "shopping-cart",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "GraphQL", "PostgreSQL"],
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Expo", "Native APIs"],
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
  ];

  const approach = [
    {
      title: "Product-Minded Development",
      description: "We think like product owners, focusing on user value and business outcomes, not just code.",
      icon: "users",
    },
    {
      title: "Agile & Iterative",
      description: "Regular demos, feedback loops, and iterative improvements ensure we build exactly what you need.",
      icon: "sync",
    },
    {
      title: "Quality-First",
      description: "Comprehensive testing, code reviews, and security best practices are built into our process.",
      icon: "shield",
    },
  ];

  return (
    <>
      <SEO
        title="Our Work"
        description="While we're a new company, our team brings years of expertise from leading tech companies. Discover our capabilities and approach to software development."
        keywords="software development capabilities, tech expertise, development approach, startup mvp, enterprise solutions"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Capabilities
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              While we're a new company, our team brings years of expertise from leading tech companies
            </p>
          </div>
          
          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                data-testid={`card-capability-${index}`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-md"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Technology Stack */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {techStack.map((stack, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 text-center"
                  data-testid={`card-tech-stack-${index}`}
                >
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {stack.category}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Development Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Our Development Approach
              </h2>
              <div className="space-y-6">
                {approach.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Software development team in collaborative workspace"
                className="rounded-2xl shadow-xl w-full transform hover:scale-105 transition-transform duration-300"
                data-testid="img-development-approach"
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can bring your vision to life with clean, scalable code.
            </p>
            <Link href="/contact">
              <button 
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                data-testid="button-schedule-call"
              >
                Schedule a Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
