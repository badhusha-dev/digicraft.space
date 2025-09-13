// Google Analytics 4 Integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics 4
export function initializeGA(measurementId: string): void {
  if (typeof window === 'undefined') return;
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.gtag = function() {
    (window.gtag as any).q = (window.gtag as any).q || [];
    (window.gtag as any).q.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

export function logPageView(page: string): void {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: page,
      page_location: window.location.href,
    });
  }
  
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`Analytics: Page view - ${page}`);
  }
  
  // Local storage backup
  if (typeof window !== "undefined") {
    localStorage.setItem("lastPageView", JSON.stringify({
      page,
      timestamp: new Date().toISOString(),
    }));
  }
}

export function logEvent(event: string, properties?: Record<string, any>): void {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, properties);
  }
  
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`Analytics: Event - ${event}`, properties);
  }
  
  // Local storage backup
  if (typeof window !== "undefined") {
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

export function logButtonClick(buttonName: string, location: string): void {
  logEvent("button_click", {
    button_name: buttonName,
    location,
  });
}

export function logDownload(fileName: string, fileType: string): void {
  logEvent("file_download", {
    file_name: fileName,
    file_type: fileType,
  });
}

export function logBrochureDownload(email: string): void {
  logEvent("brochure_download", {
    email: email.substring(0, 3) + '***', // Privacy-friendly logging
  });
}

export function logContactFormStart(): void {
  logEvent("contact_form_start", {
    form_type: "contact",
  });
}

export function logContactFormComplete(projectType: string): void {
  logEvent("contact_form_complete", {
    form_type: "contact",
    project_type: projectType,
  });
}
