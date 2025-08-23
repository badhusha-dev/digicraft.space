import { HelmetProvider } from "react-helmet-async";
import { useEffect, memo, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import { useTheme } from "./ThemeProvider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = memo(function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  // Memoize the theme application function
  const applyThemeToBody = useCallback((currentTheme: string) => {
    document.body.className = currentTheme;
  }, []);

  useEffect(() => {
    // Apply theme class to body element for proper dark mode
    applyThemeToBody(theme);
  }, [theme, applyThemeToBody]);

  return (
    <HelmetProvider>
      <div className="min-vh-100 d-flex flex-column">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
});

export default Layout;
