export function logPageView(page: string): void {
  // Only log in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log(`Analytics: Page view - ${page}`);
  }
  
  // In a real application, you would send this data to your analytics service
  // Example: Google Analytics, Mixpanel, Amplitude, etc.
  if (typeof window !== "undefined") {
    // Track page view
    localStorage.setItem("lastPageView", JSON.stringify({
      page,
      timestamp: new Date().toISOString(),
    }));
  }
}

export function logEvent(event: string, properties?: Record<string, any>): void {
  // Only log in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log(`Analytics: Event - ${event}`, properties);
  }
  
  // In a real application, you would send this data to your analytics service
  if (typeof window !== "undefined") {
    // Track event
    const events = JSON.parse(localStorage.getItem("analyticsEvents") || "[]");
    events.push({
      event,
      properties,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("analyticsEvents", JSON.stringify(events.slice(-100))); // Keep last 100 events
  }
}

export function logFormSubmission(formType: string, success: boolean): void {
  logEvent("form_submission", {
    form_type: formType,
    success,
  });
}
