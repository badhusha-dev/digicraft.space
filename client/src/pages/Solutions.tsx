import { Link } from "wouter";
import { Check, Star } from "lucide-react";
import SEO from "../components/SEO";
import { solutions } from "../data/solutions";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";

export default function Solutions() {
  useEffect(() => {
    logPageView("solutions");
  }, []);

  return (
    <>
      <SEO
        title="Solutions"
        description="Pre-designed solutions to accelerate your development. From MVP Sprint to Scale-Up Kit, find the perfect package for your business needs."
        keywords="mvp development, scale-up solutions, e-commerce platform, back-office suite, software packages"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Solutions & Packages
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pre-designed solutions to accelerate your development
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  solution.featured 
                    ? "border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-800" 
                    : "border-gray-200 dark:border-gray-700"
                }`}
                data-testid={`card-solution-${solution.id}`}
              >
                {solution.featured && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {solution.subtitle}
                  </p>
                </div>
                
                <div className="mb-6">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {solution.pricing}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {solution.timeline}
                    </p>
                  </div>
                  <Link href="/contact">
                    <button 
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                        solution.featured
                          ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:shadow-xl transform hover:scale-105"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                      data-testid={`button-get-started-${solution.id}`}
                    >
                      {solution.pricing.includes("Custom") ? "Get Quote" : "Get Started"}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
