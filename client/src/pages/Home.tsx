import { Link } from "wouter";
import { ArrowRight, Check, Star } from "lucide-react";
import SEO from "../components/SEO";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";

export default function Home() {
  useEffect(() => {
    logPageView("home");
  }, []);

  const processSteps = [
    { icon: "search", title: "Discover", description: "Understanding your vision and requirements" },
    { icon: "palette", title: "Design", description: "Creating user-centered experiences" },
    { icon: "code", title: "Build", description: "Developing with modern technologies" },
    { icon: "rocket", title: "Ship", description: "Launching to production smoothly" },
    { icon: "trending-up", title: "Grow", description: "Scaling and optimizing for success" },
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Product-minded engineers building reliable, beautiful software—fast. Get your MVP from $8k or hire our development squad from $12k/mo."
        keywords="software development, react development, mobile apps, web applications, mvp development"
      />

      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900/20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                We craft software that{" "}
                <span className="text-indigo-600 dark:text-indigo-400">ships</span> and{" "}
                <span className="text-cyan-500">scales</span>.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
                Product-minded engineers building reliable, beautiful software—fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/contact">
                  <button 
                    className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    data-testid="button-get-quote-hero"
                  >
                    Get a Free Quote
                  </button>
                </Link>
                <Link href="/work">
                  <button 
                    className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-200"
                    data-testid="button-see-work-hero"
                  >
                    See Our Work
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern office workspace with team collaboration"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Our Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
              End-to-end software solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                data-testid={`card-service-${service.id}`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-md"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
              From idea to launch in 5 proven steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <div className="w-8 h-8 bg-white rounded-md"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-indigo-600 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
              Trusted by innovative companies worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create software that makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button 
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                data-testid="button-start-project-cta"
              >
                Start Your Project
              </button>
            </Link>
            <a 
              href="mailto:hello@digicraft.space"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200"
              data-testid="link-email-cta"
            >
              hello@digicraft.space
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
