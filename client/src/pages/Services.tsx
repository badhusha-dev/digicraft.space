import { Check } from "lucide-react";
import { Link } from "wouter";
import SEO from "../components/SEO";
import { services } from "../data/services";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";

export default function Services() {
  useEffect(() => {
    logPageView("services");
  }, []);

  return (
    <>
      <SEO
        title="Services"
        description="Comprehensive software solutions for every business need. From web and mobile apps to AI automation and cloud infrastructure."
        keywords="web development, mobile apps, api development, devops, cloud infrastructure, ai automation"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive software solutions for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                data-testid={`card-service-${service.id}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-md"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/contact">
              <button 
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                data-testid="button-discuss-project"
              >
                Discuss Your Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
