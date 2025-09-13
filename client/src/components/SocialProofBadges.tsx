import { Award, Shield, Users, Star, CheckCircle, Globe, Zap } from 'lucide-react';

export default function SocialProofBadges() {
  const badges = [
    {
      icon: Users,
      title: "50+",
      subtitle: "Happy Clients",
      color: "primary"
    },
    {
      icon: Star,
      title: "4.9/5",
      subtitle: "Average Rating",
      color: "warning"
    },
    {
      icon: Award,
      title: "5+",
      subtitle: "Years Experience",
      color: "success"
    },
    {
      icon: Shield,
      title: "100%",
      subtitle: "Satisfaction Rate",
      color: "info"
    },
    {
      icon: Globe,
      title: "15+",
      subtitle: "Countries Served",
      color: "secondary"
    },
    {
      icon: Zap,
      title: "24/7",
      subtitle: "Support Available",
      color: "primary"
    }
  ];

  const technologies = [
    { name: "React", logo: "⚛️" },
    { name: "Bootstrap", logo: "🎨" },
    { name: "Docker", logo: "🐳" },
    { name: "AWS", logo: "☁️" },
    { name: "Node.js", logo: "🟢" },
    { name: "TypeScript", logo: "🔷" }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Trust Indicators */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12 text-center">
            <h3 className="h4 fw-bold text-dark mb-4">Trusted by Companies Worldwide</h3>
            <p className="text-muted">Join hundreds of satisfied clients who chose DigiCraft for their digital transformation</p>
          </div>
        </div>

        {/* Stats Badges */}
        <div className="row g-4 mb-5">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <div 
                  className="social-proof-badge text-center p-3 rounded-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`text-${badge.color} mb-2`}>
                    <IconComponent size={32} />
                  </div>
                  <div className="fw-bold text-dark h5 mb-1">{badge.title}</div>
                  <div className="small text-muted">{badge.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="row">
          <div className="col-12">
            <div className="bg-white rounded-4 p-4 shadow-sm" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-4">
                <h4 className="fw-bold text-dark mb-2">Built with Modern Technologies</h4>
                <p className="text-muted small">We use industry-leading tools and frameworks</p>
              </div>
              
              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-badge d-flex align-items-center gap-2">
                    <span className="tech-logo">{tech.logo}</span>
                    <span className="fw-medium text-dark">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
                <div className="certification-badge">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle className="text-success" size={20} />
                    <span className="fw-medium">ISO 27001 Certified</span>
                  </div>
                </div>
                <div className="certification-badge">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle className="text-success" size={20} />
                    <span className="fw-medium">GDPR Compliant</span>
                  </div>
                </div>
                <div className="certification-badge">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle className="text-success" size={20} />
                    <span className="fw-medium">SOC 2 Type II</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
