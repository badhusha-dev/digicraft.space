import { Link } from "wouter";
import { ArrowRight, Check, Star, Lightbulb, Globe, Smartphone, Server, Activity, Cloud, Bot, Settings, Search, Palette, Code, Rocket, TrendingUp } from "lucide-react";
import SEO from "../components/SEO";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { getImageById } from "../data/images";
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

  // Icon mapping for services
  const serviceIconMap = {
    lightbulb: Lightbulb,
    globe: Globe,
    smartphone: Smartphone,
    server: Server,
    activity: Activity,
    cloud: Cloud,
    bot: Bot,
    settings: Settings,
  };

  // Icon mapping for process steps
  const processIconMap = {
    search: Search,
    palette: Palette,
    code: Code,
    rocket: Rocket,
    "trending-up": TrendingUp,
  };

  // Get local images
  const heroImage = getImageById('hero-team-collaboration');

  return (
    <>
      <SEO
        title="Home"
        description="Product-minded engineers building reliable, beautiful software—fast. Get your MVP from $8k or hire our development squad from $12k/mo."
        keywords="software development, react development, mobile apps, web applications, mvp development, digicraft"
      />

      {/* Hero Section */}
      <section className="py-5 bg-light d-flex align-items-center" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold lh-base">
                We craft software that{" "}
                <span className="text-primary">ships</span> and{" "}
                <span className="text-info">scales</span>.
              </h1>
              <p className="lead text-muted mt-4">
                Product-minded engineers building reliable, beautiful software—fast.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <Link href="/contact">
                  <button 
                    className="btn btn-primary btn-lg px-4 py-3"
                    data-testid="button-get-quote-hero"
                  >
                    Get a Free Quote
                  </button>
                </Link>
                <Link href="/work">
                  <button 
                    className="btn btn-outline-primary btn-lg px-4 py-3"
                    data-testid="button-see-work-hero"
                  >
                    See Our Work
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={heroImage?.src || "/images/ui/placeholder-hero.jpg"}
                alt={heroImage?.alt || "Modern office workspace with team collaboration"}
                className="img-fluid rounded-3 shadow"
                width={heroImage?.width || 800}
                height={heroImage?.height || 600}
                data-testid="img-hero"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark">Our Expertise</h2>
            <p className="lead text-muted mt-3">
              End-to-end software solutions for modern businesses
            </p>
          </div>
          
          <div className="row g-4">
            {services.slice(0, 3).map((service, index) => {
              const IconComponent = serviceIconMap[service.icon as keyof typeof serviceIconMap];
              return (
                <div 
                  key={service.id}
                  className="col-md-4"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body p-4 text-center">
                      <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '4rem', height: '4rem' }}>
                        {IconComponent ? (
                          <IconComponent className="text-white" size={24} />
                        ) : (
                          <div className="bg-white rounded" style={{ width: '2rem', height: '2rem' }}></div>
                        )}
                      </div>
                      <h3 className="h5 fw-semibold text-dark mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark">Our Process</h2>
            <p className="lead text-muted mt-3">
              From idea to launch in 5 proven steps
            </p>
          </div>
          
          <div className="row g-4">
            {processSteps.map((step, index) => {
              const IconComponent = processIconMap[step.icon as keyof typeof processIconMap];
              return (
                <div key={step.title} className="col-md text-center position-relative">
                  <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>
                    {IconComponent ? (
                      <IconComponent className="text-white" size={24} />
                    ) : (
                      <div className="bg-white rounded" style={{ width: '2rem', height: '2rem' }}></div>
                    )}
                  </div>
                  <h3 className="h6 fw-semibold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="small text-muted">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="d-none d-md-block position-absolute top-0 start-100 w-100">
                      <ArrowRight className="text-primary mx-auto" size={24} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark">What Our Clients Say</h2>
            <p className="lead text-muted mt-3">
              Trusted by innovative companies worldwide
            </p>
          </div>
          
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="col-md-4"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        width="48"
                        height="48"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="fw-semibold text-dark mb-1">{testimonial.name}</h4>
                        <p className="small text-muted mb-0">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted mb-3">"{testimonial.content}"</p>
                    <div className="d-flex text-warning">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="lead mb-4 opacity-75">
            Let's discuss your project and create software that makes a difference.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link href="/contact">
              <button 
                className="btn btn-light btn-lg px-4 py-3"
                data-testid="button-start-project-cta"
              >
                Start Your Project
              </button>
            </Link>
            <a 
              href="mailto:hello@digicraft.space"
              className="btn btn-outline-light btn-lg px-4 py-3"
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
