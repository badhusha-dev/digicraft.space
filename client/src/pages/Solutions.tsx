import { Link } from "wouter";
import { Check, Star } from "lucide-react";
import SEO from "../components/SEO";
import { solutions } from "../data/solutions";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";
import { useTranslation } from "../utils/i18n";

export default function Solutions() {
  const { t } = useTranslation();
  
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

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-4">
              {t("solutions.title")}
            </h1>
            <p className="lead text-muted max-w-3xl mx-auto">
              {t("solutions.subtitle")}
            </p>
          </div>
          
          <div className="row g-4">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className="col-lg-6"
                data-testid={`card-solution-${solution.id}`}
              >
                <div className={`card h-100 shadow-sm border-0 ${
                  solution.featured ? 'border-primary border-2' : ''
                }`}>
                  <div className="card-body p-4">
                    {solution.featured && (
                      <div className="d-flex justify-content-center mb-3">
                        <span className="badge bg-primary text-white px-3 py-2 d-flex align-items-center">
                          <Star size={16} className="me-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <h3 className="h3 fw-bold text-primary mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-muted">
                        {solution.subtitle}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="img-fluid rounded"
                        style={{ height: '12rem', objectFit: 'cover', width: '100%' }}
                      />
                    </div>
                    
                    <ul className="list-unstyled mb-4">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="d-flex align-items-center mb-2">
                          <Check className="text-success me-2 flex-shrink-0" size={20} />
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center border-top pt-3">
                      <div className="mb-3">
                        {/* <p className="h4 fw-bold text-dark mb-1">
                          {solution.pricing}
                        </p> */} {/* Price amount hidden - uncomment to restore */}
                        <p className="small text-muted mb-0">
                          {solution.timeline}
                        </p>
                      </div>
                      <Link href="/contact">
                        <button 
                          className={`btn w-100 ${
                            solution.featured
                              ? "btn-primary"
                              : "btn-outline-primary"
                          }`}
                          data-testid={`button-get-started-${solution.id}`}
                        >
                          {/* {solution.pricing.includes("Custom") ? "Get Quote" : "Get Started"} */} {/* Price-based button text hidden - uncomment to restore */}
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
