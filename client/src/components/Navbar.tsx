import { useState, memo, useCallback, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Navbar = memo(function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoize navigation array to prevent recreation on every render
  const navigation = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Work", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" }, // Hidden - uncomment to restore
    // { name: "Careers", href: "/careers" }, // Hidden - uncomment to restore
    { name: "Contact", href: "/contact" },
  ], []);

  // Memoize theme toggle function
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Memoize mobile menu toggle function
  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Memoize theme icon
  const themeIcon = useMemo(() => 
    theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
  , [theme]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light shadow-sm sticky-top ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand text-decoration-none d-flex align-items-center">
          <img 
            src="/logo.svg" 
            alt="DigiCraft Logo" 
            className="me-2 dc-logo" 
          />
          <span className="h3 fw-bold mb-0">
            <span className="text-primary">Digi</span>
            <span className="text-info">Craft</span>
            <span className="text-dark">.space</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="d-lg-none d-flex align-items-center gap-2">
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

        {/* Desktop Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navigation.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  href={item.href}
                  className={`nav-link ${location === item.href ? 'active fw-medium' : ''}`}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle and CTA */}
          <div className="d-none d-lg-flex align-items-center gap-3">
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
                Get Free Quote
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="navbar-collapse collapse show d-lg-none">
            <ul className="navbar-nav mt-3">
              {navigation.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link ${location === item.href ? 'active fw-medium' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`mobile-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="nav-item mt-3">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button 
                    className="btn btn-primary w-100"
                    data-testid="button-mobile-get-quote"
                  >
                    Get Free Quote
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
