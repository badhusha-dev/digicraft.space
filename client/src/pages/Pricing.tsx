import { Check, X, Star } from "lucide-react";
import { Link } from "wouter";
import SEO from "../components/SEO";
import { useEffect, useState } from "react";
import { logPageView } from "../utils/analytics";

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

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-4">
              Transparent Pricing
            </h1>
            <p className="lead text-muted max-w-3xl mx-auto">
              Choose the right engagement model for your project
            </p>
          </div>
          
          <div className="row g-4 mb-5">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className="col-lg-4"
                data-testid={`card-pricing-${plan.id}`}
              >
                <div className={`card h-100 shadow-sm border-0 text-center ${
                  plan.featured ? 'border-primary border-2' : ''
                }`}>
                  <div className="card-body p-4">
                    {plan.featured && (
                      <div className="d-flex justify-content-center mb-3">
                        <span className="badge bg-primary text-white px-3 py-2 d-flex align-items-center">
                          <Star size={16} className="me-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <h3 className="h4 fw-bold text-primary mb-3">
                      {plan.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="display-6 fw-bold text-dark">
                        {plan.price}
                      </span>
                      <p className="text-muted mt-2 mb-0">
                        {plan.period}
                      </p>
                    </div>
                    
                    <ul className="list-unstyled mb-4 text-start">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="d-flex align-items-center mb-2">
                          {feature.included ? (
                            <Check className="text-success me-2 flex-shrink-0" size={20} />
                          ) : (
                            <X className="text-muted me-2 flex-shrink-0" size={20} />
                          )}
                          <span className={feature.included ? "text-dark" : "text-muted"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/contact">
                      <button 
                        className={`btn w-100 ${
                          plan.featured
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        data-testid={`button-get-started-${plan.id}`}
                      >
                        Get Started
                      </button>
                    </Link>
                    
                    <p className="small text-muted mt-3 mb-0">
                      {plan.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold text-center text-dark mb-4">
                Frequently Asked Questions
              </h2>
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#faq-${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      id={`faq-${index}`} 
                      className="accordion-collapse collapse" 
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
