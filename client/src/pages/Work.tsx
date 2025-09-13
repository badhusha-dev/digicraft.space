import { Link } from "wouter";
import { Rocket, Building, ShoppingCart, Users, RefreshCw, Shield } from "lucide-react";
import SEO from "../components/SEO";
import { workData } from "../data/work";
import { getImageById } from "../data/images";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";
import { useTranslation } from "../utils/i18n";

export default function Work() {
  const { t } = useTranslation();
  
  useEffect(() => {
    logPageView("work");
  }, []);

  // Icon mapping for capabilities
  const capabilitiesIconMap = {
    rocket: Rocket,
    building: Building,
    "shopping-cart": ShoppingCart,
  };

  // Icon mapping for approach
  const approachIconMap = {
    users: Users,
    sync: RefreshCw,
    shield: Shield,
  };

  // Get local images
  const developmentImage = getImageById('workspace-development');

  return (
    <>
      <SEO
        title="Our Work"
        description="While we're a new company, our team brings years of expertise from leading tech companies. Discover our capabilities and approach to software development."
        keywords="software development capabilities, tech expertise, development approach, startup mvp, enterprise solutions"
      />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-4">
              {t("work.title")}
            </h1>
            <p className="lead text-muted max-w-4xl mx-auto">
              {t("work.subtitle")}
            </p>
          </div>
          
           {/* Expertise Areas */}
           <div className="row g-4 mb-5">
             {[
               {
                 title: t("work.capabilities.mvp.title"),
                 description: t("work.capabilities.mvp.description"),
                 icon: "rocket"
               },
               {
                 title: t("work.capabilities.enterprise.title"),
                 description: t("work.capabilities.enterprise.description"),
                 icon: "building"
               },
               {
                 title: t("work.capabilities.ecommerce.title"),
                 description: t("work.capabilities.ecommerce.description"),
                 icon: "shopping-cart"
               }
             ].map((capability, index) => {
              const IconComponent = capabilitiesIconMap[capability.icon as keyof typeof capabilitiesIconMap];
              return (
                <div 
                  key={index}
                  className="col-md-4"
                  data-testid={`card-capability-${index}`}
                >
                  <div className="card h-100 shadow-sm border-0 text-center">
                    <div className="card-body p-4">
                      <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '4rem', height: '4rem' }}>
                        {IconComponent ? (
                          <IconComponent className="text-white" size={24} />
                        ) : (
                          <div className="bg-white rounded" style={{ width: '2rem', height: '2rem' }}></div>
                        )}
                      </div>
                      <h3 className="h5 fw-semibold text-dark mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-muted">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Technology Stack */}
          <div className="mb-5">
            <h2 className="display-5 fw-bold text-center text-dark mb-4">
              {t("work.techStack.title")}
            </h2>
             <div className="row g-3">
               {workData.techStack.map((stack, index) => (
                <div 
                  key={index}
                  className="col-md-3"
                  data-testid={`card-tech-stack-${index}`}
                >
                  <div className="card h-100 shadow-sm border-0 text-center">
                    <div className="card-body p-3">
                      <h4 className="h6 fw-semibold text-primary mb-3">
                        {stack.category}
                      </h4>
                      <div className="d-flex flex-wrap justify-content-center gap-2">
                        {stack.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="badge bg-light text-dark px-3 py-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Development Approach */}
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-dark mb-4">
                {t("work.approach.title")}
              </h2>
               <div className="d-flex flex-column gap-4">
                 {[
                   {
                     title: t("work.approach.collaboration.title"),
                     description: t("work.approach.collaboration.description"),
                     icon: "users"
                   },
                   {
                     title: t("work.approach.iteration.title"),
                     description: t("work.approach.iteration.description"),
                     icon: "sync"
                   },
                   {
                     title: t("work.approach.security.title"),
                     description: t("work.approach.security.description"),
                     icon: "shield"
                   }
                 ].map((item, index) => {
                  const IconComponent = approachIconMap[item.icon as keyof typeof approachIconMap];
                  return (
                    <div key={index} className="d-flex align-items-start gap-3">
                      <div className="bg-primary rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '3rem', height: '3rem' }}>
                        {IconComponent ? (
                          <IconComponent className="text-white" size={20} />
                        ) : (
                          <div className="bg-white rounded" style={{ width: '1.5rem', height: '1.5rem' }}></div>
                        )}
                      </div>
                      <div>
                        <h3 className="h6 fw-semibold text-dark mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted small">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="col-lg-6">
              <img
                src={developmentImage?.src || "/images/ui/placeholder-workspace.jpg"}
                alt={developmentImage?.alt || "Software development team in collaborative workspace"}
                className="img-fluid rounded-3 shadow"
                width={developmentImage?.width || 600}
                height={developmentImage?.height || 400}
                data-testid="img-development-approach"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-light rounded-3 p-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Ready to Start Your Project?
            </h2>
            <p className="lead text-muted mb-4">
              Let's discuss how we can bring your vision to life with clean, scalable code.
            </p>
            <Link href="/contact">
              <button 
                className="btn btn-primary btn-lg px-4 py-3"
                data-testid="button-schedule-call"
              >
                Schedule a Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
