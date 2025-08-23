import { Check, X, Star } from "lucide-react";
import { Link } from "wouter";
import SEO from "../components/SEO";
import { useEffect, useState } from "react";
import { logPageView } from "../utils/analytics";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Pricing() {
  useEffect(() => {
    logPageView("pricing");
  }, []);

  const plans = [
    {
      id: "mvp",
      name: "MVP",
      price: "$8k+",
      period: "One-time payment",
      description: "Perfect for validating ideas and launching quickly",
      features: [
        { name: "Product Discovery & Design", included: true },
        { name: "Full-stack Development", included: true },
        { name: "Database & Backend", included: true },
        { name: "Deployment & Launch", included: true },
        { name: "2 Weeks Support", included: true },
        { name: "Ongoing Updates", included: false },
        { name: "Dedicated Team", included: false },
      ],
      featured: false,
    },
    {
      id: "squad",
      name: "Squad",
      price: "$12k",
      period: "per month",
      description: "Ideal for growing businesses needing continuous development",
      features: [
        { name: "Everything in MVP", included: true },
        { name: "Dedicated Development Team", included: true },
        { name: "Ongoing Feature Development", included: true },
        { name: "Weekly Progress Calls", included: true },
        { name: "Unlimited Revisions", included: true },
        { name: "Priority Support", included: true },
        { name: "Scalability Planning", included: true },
      ],
      featured: true,
    },
    {
      id: "support",
      name: "Support",
      price: "$999",
      period: "per month",
      description: "Perfect for maintaining existing applications",
      features: [
        { name: "Bug Fixes & Maintenance", included: true },
        { name: "Security Updates", included: true },
        { name: "Performance Monitoring", included: true },
        { name: "Small Feature Updates", included: true },
        { name: "Monthly Health Reports", included: true },
        { name: "New Feature Development", included: false },
        { name: "Major Architecture Changes", included: false },
      ],
      featured: false,
    },
  ];

  const faqs = [
    {
      question: "What's included in the MVP package?",
      answer: "Our MVP package includes product discovery, UX/UI design, full-stack development, basic backend infrastructure, deployment to production, and 2 weeks of post-launch support. Perfect for validating your idea in the market.",
    },
    {
      question: "How does the Squad model work?",
      answer: "You get a dedicated development team (frontend, backend, designer) working exclusively on your project. We operate in 2-week sprints with regular demos and can adapt scope based on your evolving needs.",
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes! For enterprise projects or unique requirements, we create custom proposals. Contact us to discuss your specific needs and we'll provide a tailored solution.",
    },
  ];

  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent pricing for software development. Choose from MVP ($8k+), Squad ($12k/mo), or Support ($999/mo) packages. No hidden costs, clear deliverables."
        keywords="software development pricing, mvp cost, development team pricing, transparent pricing"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the right engagement model for your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 p-8 text-center hover:shadow-xl transition-all duration-300 ${
                  plan.featured 
                    ? "border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-800 transform scale-105" 
                    : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                }`}
                data-testid={`card-pricing-${plan.id}`}
              >
                {plan.featured && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {plan.period}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-900 dark:text-white" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.featured
                        ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:shadow-xl transform hover:scale-105"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600"
                    }`}
                    data-testid={`button-get-started-${plan.id}`}
                  >
                    Get Started
                  </button>
                </Link>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
