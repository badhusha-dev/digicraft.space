/**
 * Footer Component
 * 
 * A comprehensive footer with the following sections:
 * - Company branding and logo
 * - Social media links
 * - Services navigation
 * - Solutions navigation  
 * - Company pages navigation
 * - Support links
 * - Copyright and legal links
 * 
 * Features:
 * - Responsive Bootstrap grid layout
 * - Dark theme styling
 * - Social media icons with hover effects
 * - Organized link sections
 * - Proper accessibility attributes
 */

import { Link } from "wouter";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { useTranslation } from "../utils/i18n";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  const { t } = useTranslation();
  
  /**
   * Services navigation links
   * All services link to the main services page
   */
  const services = [
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.services"), href: "/services" },
  ];

  /**
   * Solutions navigation links
   * All solutions link to the main solutions page
   */
  const solutions = [
    { name: t("nav.solutions"), href: "/solutions" },
    { name: t("nav.solutions"), href: "/solutions" },
    { name: t("nav.solutions"), href: "/solutions" },
    { name: t("nav.solutions"), href: "/solutions" },
  ];

  /**
   * Company pages navigation
   * Commented items can be uncommented to restore hidden pages
   */
  const company = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.work"), href: "/work" },
    // { name: t("nav.blog"), href: "/blog" }, // Hidden - uncomment to restore
    // { name: t("nav.careers"), href: "/careers" }, // Hidden - uncomment to restore
    { name: t("nav.contact"), href: "/contact" },
  ];

  /**
   * Support and help links
   * Mix of internal links and external mailto links
   */
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
          {/* 
            Brand Section
            - Company logo and branding
            - Company tagline
            - Social media links with hover effects
          */}
          <div className="col-lg-3 col-md-6">
            <Link href="/" className="text-decoration-none d-flex align-items-center mb-3">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="me-2 img-fluid" 
                style={{ width: "250px", height: "auto" }}
              />
              {/*
              <span className="h3 fw-bold mb-0">
                <span className="text-primary">Digi</span>
                <span className="text-info">Craft</span>
                <span className="text-white">.space</span>
              </span>
              */}
            </Link>
            <p className="mt-3 text-light small opacity-75">
              Product-minded engineers building reliable, beautiful software that ships and scales.
            </p>
            {/* Social Media Links */}
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

          {/* 
            Services Section
            - Lists all available services
            - Links to main services page
          */}
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

          {/* 
            Solutions Section
            - Lists all available solutions
            - Links to main solutions page
          */}
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

          {/* 
            Company Section
            - Company pages and information
            - Includes hidden pages that can be restored
          */}
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

          {/* 
            Support Section
            - Help and support links
            - Mix of internal links and external mailto links
            - Conditional rendering for different link types
          */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white text-uppercase fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled">
              {support.map((item) => (
                <li key={item.name} className="mb-2">
                  {/* Conditional rendering: mailto links use <a>, others use <Link> */}
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

        {/* 
          Footer Bottom Section
          - Copyright notice
          - Legal links (Privacy Policy, Terms of Service)
          - Responsive layout with proper alignment
        */}
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
