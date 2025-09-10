import { Link } from "wouter";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Web Apps", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "API Development", href: "/services" },
    { name: "DevOps & Cloud", href: "/services" },
    { name: "AI & Automation", href: "/services" },
  ];

  const solutions = [
    { name: "MVP Sprint", href: "/solutions" },
    { name: "Scale-Up Kit", href: "/solutions" },
    { name: "Commerce Core", href: "/solutions" },
    { name: "Back-Office Suite", href: "/solutions" },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/work" },
    // { name: "Blog", href: "/blog" }, // Hidden - uncomment to restore
    // { name: "Careers", href: "/careers" }, // Hidden - uncomment to restore
    { name: "Contact", href: "/contact" },
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Status Page", href: "#" },
    { name: "Support", href: "mailto:hello@digicraft.space" },
  ];

  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-3 col-md-6">
            <Link href="/" className="text-decoration-none d-flex align-items-center mb-3">
              <img 
                src="/logo.svg" 
                alt="DigiCraft Logo" 
                className="me-2 dc-logo" 
              />
              <span className="h3 fw-bold mb-0">
                <span className="text-primary">Digi</span>
                <span className="text-info">Craft</span>
                <span className="text-white">.space</span>
              </span>
            </Link>
            <p className="mt-3 text-light small opacity-75">
              Product-minded engineers building reliable, beautiful software that ships and scales.
            </p>
            <div className="mt-3 d-flex gap-3">
              <a href="https://twitter.com/digicraft" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none opacity-75 hover-opacity-100" data-testid="link-twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/digicraft-space" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none opacity-75 hover-opacity-100" data-testid="link-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/digicraft-space" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none opacity-75 hover-opacity-100" data-testid="link-github">
                <Github size={20} />
              </a>
              <a href="https://dribbble.com/digicraft" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none opacity-75 hover-opacity-100" data-testid="link-dribbble">
                <Dribbble size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white text-uppercase fw-semibold mb-3">Services</h6>
            <ul className="list-unstyled">
              {services.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link
                    href={item.href}
                    className="text-light text-decoration-none small opacity-75 hover-opacity-100"
                    data-testid={`footer-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white text-uppercase fw-semibold mb-3">Solutions</h6>
            <ul className="list-unstyled">
              {solutions.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link
                    href={item.href}
                    className="text-light text-decoration-none small opacity-75 hover-opacity-100"
                    data-testid={`footer-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white text-uppercase fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              {company.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link
                    href={item.href}
                    className="text-light text-decoration-none small opacity-75 hover-opacity-100"
                    data-testid={`footer-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white text-uppercase fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled">
              {support.map((item) => (
                <li key={item.name} className="mb-2">
                  {item.href.startsWith("mailto:") ? (
                    <a
                      href={item.href}
                      className="text-light text-decoration-none small opacity-75 hover-opacity-100"
                      data-testid={`footer-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-light text-decoration-none small opacity-75 hover-opacity-100"
                      data-testid={`footer-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 pt-4 border-top border-secondary">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-light small mb-0 opacity-75">
                © 2025 DigiCraft.space. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex gap-4 justify-content-md-end">
                <a href="/privacy" className="text-light text-decoration-none small opacity-75 hover-opacity-100" data-testid="footer-link-privacy">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-light text-decoration-none small opacity-75 hover-opacity-100" data-testid="footer-link-terms">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
