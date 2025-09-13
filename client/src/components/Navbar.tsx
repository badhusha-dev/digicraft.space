/**
 * Navbar Component
 * 
 * A responsive navigation bar with the following features:
 * - Company logo and branding
 * - Desktop and mobile navigation menus
 * - Dark/light theme toggle
 * - Active page highlighting
 * - Call-to-action button
 * - Responsive design with Bootstrap classes
 * 
 * Uses React.memo for performance optimization and memoized callbacks
 * to prevent unnecessary re-renders.
 */

import { useState, memo, useCallback, useMemo, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "../utils/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/logo.jpeg";

const Navbar = memo(function Navbar() {
  // Get current route location for active link highlighting
  const [location] = useLocation();
  
  // Theme context for dark/light mode toggle
  const { theme, setTheme } = useTheme();
  
  // Translation context
  const { t } = useTranslation();
  
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize Bootstrap scrollspy
  useEffect(() => {
    const initScrollspy = () => {
      // Only initialize scrollspy on the home page
      if (location === '/') {
        const scrollSpy = new (window as any).bootstrap.ScrollSpy(document.body, {
          target: '#navbarNav',
          offset: 100
        });
      }
    };

    // Wait for Bootstrap to be loaded
    if ((window as any).bootstrap) {
      initScrollspy();
    } else {
      window.addEventListener('load', initScrollspy);
    }

    return () => {
      window.removeEventListener('load', initScrollspy);
    };
  }, [location]);

  /**
   * Navigation menu items
   * Memoized to prevent recreation on every render for performance
   * Commented items can be uncommented to restore hidden pages
   */
  const navigation = useMemo(() => [
    { name: t("nav.home"), href: "/", scrollTarget: "home" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.solutions"), href: "/solutions" },
    { name: t("nav.work"), href: "/work" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.about"), href: "/about" },
    // { name: t("nav.blog"), href: "/blog" }, // Hidden - uncomment to restore
    // { name: t("nav.careers"), href: "/careers" }, // Hidden - uncomment to restore
    { name: t("nav.contact"), href: "/contact" },
  ], [t]);

  /**
   * Toggle between dark and light themes
   * Memoized to prevent unnecessary re-renders
   */
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  /**
   * Toggle mobile menu visibility
   * Memoized to prevent unnecessary re-renders
   */
  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  /**
   * Theme icon that changes based on current theme
   * Shows Sun icon in dark mode, Moon icon in light mode
   * Memoized to prevent unnecessary re-renders
   */
  const themeIcon = useMemo(() => 
    theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
  , [theme]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light shadow-sm sticky-top ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`} data-bs-spy="scroll" data-bs-target="#navbarNav" data-bs-offset="100">
      <div className="container">
        {/* 
          Company Logo and Branding
          - Uses JPEG logo imported from assets
          - Responsive sizing with Bootstrap img-fluid class
          - Brand name with color-coded text spans
        */}
        <Link href="/" className="navbar-brand text-decoration-none d-flex align-items-center">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="img-fluid me-2" 
            style={{ 
              width: "60px", 
              height: "auto",
                maxWidth: "80px"
            }}
          />
          {/* 
            Brand name with color-coded styling:
            - "Digi" in primary color
            - "Craft" in info color
            - ".space" in dark color
          */}
          {/*
          <span className="h3 fw-bold mb-0">
            <span className="text-primary">Digi</span>
            <span className="text-info">Craft</span>
            <span className="text-dark">.space</span>
          </span>
          */}
        </Link>

        {/* 
          Mobile Menu Controls
          - Theme toggle button (visible only on mobile)
          - Hamburger menu toggle button
          - Shows X icon when menu is open, hamburger when closed
        */}
        <div className="d-lg-none d-flex align-items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            className="btn btn-outline-secondary btn-sm"
            data-testid="button-theme-toggle-mobile"
          >
            {themeIcon}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="navbar-toggler border-0"
            type="button"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 
          Desktop Navigation Menu
          - Centered navigation links
          - Active page highlighting based on current route
          - Theme toggle and CTA button on the right
        */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navigation.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  href={location === '/' && item.scrollTarget ? item.scrollTarget : item.href}
                  className={`nav-link ${location === item.href ? 'active fw-medium' : ''}`}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* 
            Desktop Theme Toggle and Call-to-Action
            - Theme toggle button (visible only on desktop)
            - Primary CTA button linking to contact page
          */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              className="btn btn-outline-secondary btn-sm"
              data-testid="button-theme-toggle"
            >
              {themeIcon}
            </button>
            <Link href="/contact">
              <button 
                className="btn btn-primary btn-sm px-3 py-2"
                data-testid="button-get-quote"
              >
{t("hero.cta")}
              </button>
            </Link>
          </div>
        </div>

        {/* 
          Mobile Navigation Menu
          - Only visible when mobile menu is open
          - Same navigation links as desktop
          - Includes mobile CTA button
          - Auto-closes menu when link is clicked
        */}
        {isMenuOpen && (
          <div className="navbar-collapse collapse show d-lg-none">
            <ul className="navbar-nav mt-3">
              {navigation.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link
                    href={location === '/' && item.scrollTarget ? item.scrollTarget : item.href}
                    className={`nav-link ${location === item.href ? 'active fw-medium' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`mobile-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Mobile CTA Button */}
              <li className="nav-item mt-3">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button 
                    className="btn btn-primary w-100"
                    data-testid="button-mobile-get-quote"
                  >
    {t("hero.cta")}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
