// Environment Configuration
// This file contains default values for environment variables

export const config = {
  // Google Analytics
  GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  
  // EmailJS Configuration
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Calendly Configuration
  CALENDLY_USERNAME: import.meta.env.VITE_CALENDLY_USERNAME || 'digicraft',
  CALENDLY_EVENT_TYPE: import.meta.env.VITE_CALENDLY_EVENT_TYPE || 'free-consultation',
  
  // App Configuration
  APP_NAME: 'DigiCraft',
  APP_URL: import.meta.env.VITE_APP_URL || 'https://digicraft.space',
  CONTACT_EMAIL: 'hello@digicraft.space',
  
  // Feature Flags
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  ENABLE_EMAILJS: import.meta.env.VITE_ENABLE_EMAILJS === 'true',
  ENABLE_CALENDLY: import.meta.env.VITE_ENABLE_CALENDLY === 'true',
  ENABLE_I18N: true, // Enable i18n by default
};

// Validation function to check if required environment variables are set
export function validateConfig() {
  const warnings: string[] = [];
  
  if (config.GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    warnings.push('Google Analytics Measurement ID not configured');
  }
  
  if (config.EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
    warnings.push('EmailJS Service ID not configured');
  }
  
  if (config.EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
    warnings.push('EmailJS Template ID not configured');
  }
  
  if (config.EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    warnings.push('EmailJS Public Key not configured');
  }
  
  if (warnings.length > 0) {
    console.warn('Configuration warnings:', warnings);
  }
  
  return warnings;
}

export default config;
