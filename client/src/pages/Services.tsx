import { Check, Lightbulb, Globe, Smartphone, Server, Activity, Cloud, Bot, Settings } from "lucide-react";
import { Link } from "wouter";
import SEO from "../components/SEO";
import { services } from "../data/services";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";
import { useTranslation } from "../utils/i18n";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  const { t } = useTranslation();
  
  useEffect(() => {
    logPageView("services");
    // Refresh AOS for new content
    AOS.refresh();
  }, []);

  // Icon mapping for services
  const iconMap = {
    lightbulb: Lightbulb,
    globe: Globe,
    smartphone: Smartphone,
    server: Server,
    activity: Activity,
    cloud: Cloud,
    bot: Bot,
    settings: Settings,
  };

  return (
    <>
      <SEO
        title="Services"
        description="Comprehensive software solutions for every business need. From web and mobile apps to AI automation and cloud infrastructure."
        keywords="web development, mobile apps, api development, devops, cloud infrastructure, ai automation"
      />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-4">
              {t("services.title")}
            </h1>
            <p className="lead text-muted max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>
          
          <div className="row g-4">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div 
                  key={service.id}
                  className="col-lg-6"
                >
                  <div className="card h-100 shadow-sm border-0 service-card hover-lift">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start gap-4">
                        <div className="service-icon-bg flex-shrink-0">
                          {IconComponent ? (
                            <IconComponent className="text-white" size={28} />
                          ) : (
                            <div className="bg-white rounded" style={{ width: '1.5rem', height: '1.5rem' }}></div>
                          )}
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="h4 fw-semibold text-dark mb-3">
                            {service.title}
                          </h3>
                          <p className="text-muted mb-4">
                            {service.description}
                          </p>
                          <ul className="list-unstyled">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="d-flex align-items-center mb-2">
                                <Check className="text-success me-2 flex-shrink-0" size={16} />
                                <span className="small text-muted">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-5">
            <Link href="/contact">
              <button 
                className="btn btn-primary btn-lg px-4 py-3 hover-lift"
              >
                Discuss Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
