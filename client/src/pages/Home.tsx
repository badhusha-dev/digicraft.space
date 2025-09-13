import { Link } from "wouter";
import { ArrowRight, Check, Star, Lightbulb, Globe, Smartphone, Server, Activity, Cloud, Bot, Settings, Search, Palette, Code, Rocket, TrendingUp, Download, Mail } from "lucide-react";
import SEO from "../components/SEO";
import { homeData } from "../data/home";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { getTestimonials } from "../data/testimonials";
import { getCaseStudies } from "../data/caseStudies";
import { getImageById } from "../data/images";
import { useEffect, useState } from "react";
import { logPageView, logBrochureDownload, logButtonClick } from "../utils/analytics";
import { useTranslation } from "../utils/i18n";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import CaseStudiesSection from "../components/CaseStudiesSection";
import SocialProofBadges from "../components/SocialProofBadges";
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref: heroImageRef, inView: heroImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { t } = useTranslation();
  
  // Get translated testimonials
  const translatedTestimonials = getTestimonials(t);
  
  // Get translated case studies
  const translatedCaseStudies = getCaseStudies(t);

  useEffect(() => {
    logPageView("home");
    // Refresh AOS for new content
    AOS.refresh();
  }, []);

  const handleBrochureDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Track brochure download
    logBrochureDownload(email);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // In a real implementation, you would:
    // 1. Send email to your backend
    // 2. Generate download link
    // 3. Track conversion in analytics
  };

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

  // Process steps from homeData
  const processSteps = homeData.process.steps;

  return (
    <>
      <SEO
        title="Home"
        description="Product-minded engineers building reliable, beautiful software—fast. Get your MVP from $8k or hire our development squad from $12k/mo."
        keywords="software development, react development, mobile apps, web applications, mvp development, digicraft"
      />

      {/* Modern Hero Section */}
      <section className="hero-section position-relative overflow-hidden" id="home">
        <div className="hero-gradient position-absolute w-100 h-100"></div>
        <div className="container position-relative">
          <div className="row align-items-center min-vh-100 py-5">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <h1 className="display-3 fw-bold lh-base mb-4">
                {t("hero.title")}
              </h1>
              <p className="lead text-muted mb-4 fs-5">
                {t("hero.subtitle")}
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <Link href="/contact">
                  <button 
                    className="btn btn-primary btn-lg px-4 py-3 shadow-lg hover-lift"
                    data-testid="button-get-quote-hero"
                    onClick={() => logButtonClick('get_started', 'hero')}
                  >
                    {t("hero.cta")}
                    <ArrowRight className="ms-2" size={20} />
                  </button>
                </Link>
                <Link href="/work">
                  <button 
                    className="btn btn-outline-primary btn-lg px-4 py-3 hover-lift"
                    data-testid="button-see-work-hero"
                    onClick={() => logButtonClick('see_work', 'hero')}
                  >
                    {t("hero.ctaSecondary")}
                  </button>
                </Link>
              </div>
              <div className="d-flex align-items-center gap-4 text-muted small">
                <div className="d-flex align-items-center gap-2">
                  <Check className="text-success" size={16} />
                  <span>Free Consultation</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Check className="text-success" size={16} />
                  <span>24h Response</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Check className="text-success" size={16} />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <div className="hero-illustration position-relative">
                <div className="hero-gradient-circle position-absolute"></div>
                <div ref={heroImageRef}>
                  {heroImageInView && (
                    <img
                      src={heroImage?.src || "/images/ui/placeholder-hero.jpg"}
                      alt={heroImage?.alt || "Modern office workspace with team collaboration"}
                      className="img-fluid rounded-4 shadow-lg"
                      width={heroImage?.width || 800}
                      height={heroImage?.height || 600}
                      data-testid="img-hero"
                      loading="eager"
                      fetchPriority="high"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-5 bg-white" id="services">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-dark">{t("services.title")}</h2>
            <p className="lead text-muted mt-3">
              {t("services.subtitle")}
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
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="card h-100 shadow-sm border-0 service-card hover-lift">
                    <div className="card-body p-4 text-center">
                      <div className="service-icon-wrapper mb-4">
                        <div className="service-icon-bg">
                          {IconComponent ? (
                            <IconComponent className="text-white" size={28} />
                          ) : (
                            <div className="bg-white rounded" style={{ width: '2rem', height: '2rem' }}></div>
                          )}
                        </div>
                      </div>
                      <h3 className="h5 fw-semibold text-dark mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted mb-4">
                        {service.description}
                      </p>
                      <Link href="/services">
                        <button className="btn btn-outline-primary btn-sm">
                          Learn More
                          <ArrowRight className="ms-1" size={16} />
                        </button>
                      </Link>
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
            <h2 className="display-5 fw-bold text-dark">{homeData.process.title}</h2>
            <p className="lead text-muted mt-3">
              {homeData.process.subtitle}
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

      {/* Testimonials Carousel */}
      <TestimonialsCarousel testimonials={translatedTestimonials} />

      {/* Case Studies Section */}
      <CaseStudiesSection caseStudies={translatedCaseStudies} />

      {/* Social Proof Badges */}
      <SocialProofBadges />

      {/* Brochure Lead Magnet Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">
                Get Our Complete Service Guide
              </h2>
              <p className="lead mb-4">
                Download our comprehensive brochure to learn about our development process, 
                pricing models, and how we can help transform your business.
              </p>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="d-flex text-warning">
                  <Star className="fill-current" size={20} />
                  <Star className="fill-current" size={20} />
                  <Star className="fill-current" size={20} />
                  <Star className="fill-current" size={20} />
                  <Star className="fill-current" size={20} />
                </div>
                <span className="small">Trusted by 50+ companies</span>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  {!isSubmitted ? (
                    <form onSubmit={handleBrochureDownload}>
                      <h4 className="fw-bold text-dark mb-3">Download Free Brochure</h4>
                      <div className="mb-3">
                        <label htmlFor="brochure-email" className="form-label text-dark">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="brochure-email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="me-2" size={20} />
                            Download Brochure
                          </>
                        )}
                      </button>
                      <p className="small text-muted mt-3 mb-0">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center">
                      <div className="text-success mb-3">
                        <Check size={48} />
                      </div>
                      <h4 className="fw-bold text-dark mb-3">Check Your Email!</h4>
                      <p className="text-muted mb-3">
                        We've sent the brochure to <strong>{email}</strong>
                      </p>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                          setIsSubmitted(false);
                          setEmail('');
                        }}
                      >
                        Download Another
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
