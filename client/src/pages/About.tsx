import { Link } from "wouter";
import { Github, Linkedin, Twitter, Handshake, Award, Rocket, Clock, DollarSign, Settings, Headphones } from "lucide-react";
import SEO from "../components/SEO";
import { aboutData } from "../data/about";
import { getImageById } from "../data/images";
import { useEffect } from "react";
import { logPageView } from "../utils/analytics";

export default function About() {
  useEffect(() => {
    logPageView("about");
  }, []);

  // Icon mapping for values
  const valuesIconMap = {
    handshake: Handshake,
    award: Award,
    rocket: Rocket,
  };

  // Icon mapping for whyChooseUs
  const whyChooseUsIconMap = {
    clock: Clock,
    "dollar-sign": DollarSign,
    settings: Settings,
    headphones: Headphones,
  };

  // Get local images
  const missionImage = getImageById('workspace-mission');
  const founderImage = getImageById('founder-ayaz');

  return (
    <>
      <SEO
        title="About"
        description="Learn about DigiCraft.space - building software that ships and scales for the digital future. Meet our founder Ayaz and discover our mission and values."
        keywords="about digicraft, software company, ayaz founder, company mission, development team"
      />

      <section className="py-5 bg-white">
        <div className="container">
          {/* Company Vision */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-4">
              About DigiCraft.space
            </h1>
            <p className="lead text-muted max-w-3xl mx-auto">
              Building software that ships and scales for the digital future
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-dark mb-4">
                Our Mission
              </h2>
              <p className="lead text-muted mb-4">
                We believe great software should be accessible to every business, regardless of size. Our mission is to democratize high-quality software development by providing transparent pricing, predictable timelines, and exceptional results.
              </p>
              <p className="lead text-muted">
                Founded on principles of craftsmanship and reliability, we combine cutting-edge technology with proven methodologies to deliver software that not only works but thrives in production.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={missionImage?.src || "/images/ui/placeholder-workspace.jpg"}
                alt={missionImage?.alt || "Modern collaborative workspace with innovative technology"}
                className="img-fluid rounded-3 shadow"
                width={missionImage?.width || 600}
                height={missionImage?.height || 400}
                data-testid="img-mission"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Leadership Team */}
          <div className="mb-5">
            <h2 className="display-5 fw-bold text-center text-dark mb-4">
              Meet Our Founder
            </h2>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm border-0 text-center">
                  <div className="card-body p-4">
                    <img
                      src={founderImage?.src || "/images/ui/placeholder-founder.jpg"}
                      alt={founderImage?.alt || "Ayaz, CEO and Founder of DigiCraft.space"}
                      className="rounded-circle mx-auto mb-4"
                      width={founderImage?.width || 128}
                      height={founderImage?.height || 128}
                      style={{ objectFit: 'cover' }}
                      data-testid="img-founder-ayaz"
                      loading="lazy"
                    />
                    <h3 className="h3 fw-bold text-dark mb-2">
                      Ayaz
                    </h3>
                    <p className="text-primary fw-semibold mb-3">
                      CEO & Founder
                    </p>
                    <p className="text-muted mb-4">
                      Former senior engineer at top tech companies with 8+ years building scalable software. 
                      Passionate about creating technology that makes a real difference.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="https://linkedin.com/in/ayaz-digicraft" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none" data-testid="link-ayaz-linkedin">
                        <Linkedin size={24} />
                      </a>
                      <a href="https://twitter.com/ayaz_digicraft" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none" data-testid="link-ayaz-twitter">
                        <Twitter size={24} />
                      </a>
                      <a href="https://github.com/ayaz-digicraft" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none" data-testid="link-ayaz-github">
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="mb-5">
            <h2 className="display-5 fw-bold text-center text-dark mb-4">
              Our Values
            </h2>
             <div className="row g-4">
               {aboutData.values.map((value, index) => {
                const IconComponent = valuesIconMap[value.icon as keyof typeof valuesIconMap];
                return (
                  <div key={index} className="col-md-4 text-center">
                    <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '4rem', height: '4rem' }}>
                      {IconComponent ? (
                        <IconComponent className="text-white" size={24} />
                      ) : (
                        <div className="bg-white rounded" style={{ width: '2rem', height: '2rem' }}></div>
                      )}
                    </div>
                    <h3 className="h5 fw-semibold text-dark mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Technology Stack */}
          <div className="bg-light rounded-3 p-4 mb-5">
            <h2 className="display-5 fw-bold text-center text-dark mb-4">
              Our Technology Stack
            </h2>
             <div className="row g-4">
               {aboutData.techStack.map((stack, index) => (
                <div key={index} className="col-lg-3 text-center">
                  <h3 className="h6 fw-semibold text-primary mb-3">
                    {stack.category}
                  </h3>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="badge bg-white text-dark px-3 py-2 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="mb-5">
            <h2 className="display-5 fw-bold text-center text-dark mb-4">
              Why Choose Us?
            </h2>
             <div className="row g-4">
               {aboutData.whyChooseUs.map((item, index) => {
                const IconComponent = whyChooseUsIconMap[item.icon as keyof typeof whyChooseUsIconMap];
                return (
                  <div key={index} className="col-md-6 col-lg-3">
                    <div className="card h-100 shadow-sm border-0 text-center">
                      <div className="card-body p-4">
                        <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>
                          {IconComponent ? (
                            <IconComponent className="text-white" size={24} />
                          ) : (
                            <div className="bg-white rounded" style={{ width: '2rem', height: '2rem' }}></div>
                          )}
                        </div>
                        <h3 className="h6 fw-semibold text-dark mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted small">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
