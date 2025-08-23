import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";
import SEO from "../components/SEO";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";

export default function About() {
  useEffect(() => {
    logPageView("about");
  }, []);

  const values = [
    {
      title: "Transparency",
      description: "Clear communication, honest timelines, and upfront pricing. No surprises, ever.",
      icon: "handshake",
    },
    {
      title: "Quality",
      description: "We write code like our reputation depends on it—because it does.",
      icon: "award",
    },
    {
      title: "Speed",
      description: "Fast iterations, quick feedback, and rapid deployment without cutting corners.",
      icon: "rocket",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL"],
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Expo", "iOS", "Android"],
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
  ];

  const whyChooseUs = [
    {
      title: "Fast Delivery",
      description: "MVPs in 4-6 weeks, features in 2-week sprints",
      icon: "clock",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs, clear packages, honest quotes",
      icon: "dollar-sign",
    },
    {
      title: "Modern Tech",
      description: "Latest technologies, best practices, scalable architecture",
      icon: "settings",
    },
    {
      title: "Ongoing Support",
      description: "Post-launch support, maintenance, and growth planning",
      icon: "headphones",
    },
  ];

  return (
    <>
      <SEO
        title="About"
        description="Learn about DigiCraft.space - building software that ships and scales for the digital future. Meet our founder Ayaz and discover our mission and values."
        keywords="about digicraft, software company, ayaz founder, company mission, development team"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Vision */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About DigiCraft.space
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building software that ships and scales for the digital future
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We believe great software should be accessible to every business, regardless of size. Our mission is to democratize high-quality software development by providing transparent pricing, predictable timelines, and exceptional results.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Founded on principles of craftsmanship and reliability, we combine cutting-edge technology with proven methodologies to deliver software that not only works but thrives in production.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Modern collaborative workspace with innovative technology"
                className="rounded-2xl shadow-xl w-full transform hover:scale-105 transition-transform duration-300"
                data-testid="img-mission"
              />
            </div>
          </div>
          
          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Meet Our Founder
            </h2>
            <div className="flex justify-center">
              <div className="max-w-md">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                    alt="Ayaz, CEO and Founder of DigiCraft.space"
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    data-testid="img-founder-ayaz"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Ayaz
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                    CEO & Founder
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Former senior engineer at top tech companies with 8+ years building scalable software. 
                    Passionate about creating technology that makes a real difference.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" data-testid="link-ayaz-linkedin">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" data-testid="link-ayaz-twitter">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" data-testid="link-ayaz-github">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-white rounded-md"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technology Stack */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {techStack.map((stack, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
              Why Choose DigiCraft.space?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                  data-testid={`card-why-choose-${index}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
