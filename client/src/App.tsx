import React from "react";
import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Work = lazy(() => import("./pages/Work"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
// const Blog = lazy(() => import("./pages/Blog")); // Hidden - uncomment to restore
// const Careers = lazy(() => import("./pages/Careers")); // Hidden - uncomment to restore
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/not-found"));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function Router() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/work" component={Work} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          {/* <Route path="/blog" component={Blog} /> */} {/* Hidden - uncomment to restore */}
          {/* <Route path="/careers" component={Careers} /> */} {/* Hidden - uncomment to restore */}
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
