// Performance monitoring utilities
export const performanceMetrics = {
  pageLoadTimes: new Map<string, number>(),
  componentRenderTimes: new Map<string, number>(),
};

// Track page load performance
export const trackPageLoad = (pageName: string) => {
  const startTime = performance.now();
  
  return () => {
    const loadTime = performance.now() - startTime;
    performanceMetrics.pageLoadTimes.set(pageName, loadTime);
    
    // Log performance data in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${pageName} loaded in ${loadTime.toFixed(2)}ms`);
    }
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_load_time', {
        page_name: pageName,
        load_time: Math.round(loadTime),
      });
    }
  };
};

// Track component render performance
export const trackComponentRender = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const renderTime = performance.now() - startTime;
    performanceMetrics.componentRenderTimes.set(componentName, renderTime);
    
    // Log slow renders in development
    if (process.env.NODE_ENV === 'development' && renderTime > 16) {
      console.warn(`🐌 ${componentName} rendered slowly: ${renderTime.toFixed(2)}ms (target: <16ms)`);
    }
  };
};

// Get performance summary
export const getPerformanceSummary = () => {
  const avgPageLoad = Array.from(performanceMetrics.pageLoadTimes.values()).reduce((a, b) => a + b, 0) / performanceMetrics.pageLoadTimes.size;
  const avgComponentRender = Array.from(performanceMetrics.componentRenderTimes.values()).reduce((a, b) => a + b, 0) / performanceMetrics.componentRenderTimes.size;
  
  return {
    avgPageLoad: avgPageLoad || 0,
    avgComponentRender: avgComponentRender || 0,
    totalPages: performanceMetrics.pageLoadTimes.size,
    totalComponents: performanceMetrics.componentRenderTimes.size,
  };
};

// Performance optimization helpers
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  if (typeof IntersectionObserver === 'undefined') {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
    };
  }
  return null;
};

// Network performance monitoring
export const getNetworkInfo = () => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
    };
  }
  return null;
};
