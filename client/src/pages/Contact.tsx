import { useState, useEffect } from "react";
import { Mail, Clock, Globe, MapPin, Phone, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import SEO from "../components/SEO";
import { contactData } from "../data/contact";
import { validateContactForm, ContactFormData } from "../utils/validation";
import { logPageView, logFormSubmission, logContactFormStart, logContactFormComplete, logButtonClick } from "../utils/analytics";
import { useTranslation } from "../utils/i18n";
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CalendlyWidget from '../components/CalendlyWidget';
import config from '../config/env';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    logPageView("contact");
    // Refresh AOS for new content
    AOS.refresh();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    setValidationErrors({});

    // Bootstrap validation
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      setIsSubmitting(false);
      return;
    }

    const errors = validateContactForm(formData);
    if (errors.length > 0) {
      const errorMap: {[key: string]: string} = {};
      errors.forEach(error => {
        errorMap[error.field] = error.message;
      });
      setValidationErrors(errorMap);
      setIsSubmitting(false);
      logFormSubmission("contact", false);
      return;
    }

    try {
      // EmailJS configuration (you'll need to set up your EmailJS account)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        project_type: formData.projectType,
        message: formData.message,
        to_name: 'DigiCraft Team'
      };

      // Send email using EmailJS
      await emailjs.send(
        config.EMAILJS_SERVICE_ID,
        config.EMAILJS_TEMPLATE_ID,
        templateParams,
        config.EMAILJS_PUBLIC_KEY
      );
      
      setSuccessMessage("Message Sent Successfully! We'll get back to you within 24 hours.");
      form.classList.remove('was-validated');
      logFormSubmission("contact", true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage("Failed to send message. Please try again or contact us directly at hello@digicraft.space");
      logFormSubmission("contact", false);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <SEO
        title="Contact"
        description="Ready to build something amazing? Contact DigiCraft.space for a free consultation. Get your project started with transparent pricing and expert development."
        keywords="contact software development, free consultation, project quote, software development inquiry"
      />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-4">
              {t("contact.title")}
            </h1>
            <p className="lead text-muted max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
          
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-8" data-aos="fade-right">
              <div className="card shadow-sm border-0 hover-lift">
                <div className="card-body p-4">
                  <h2 className="h3 fw-bold text-dark mb-4">
                    Tell Us About Your Project
                  </h2>
                  
                  {/* Enhanced Error and Success Messages */}
                  {errorMessage && (
                    <div className="alert alert-danger d-flex align-items-center mb-4" role="alert" data-aos="fade-down">
                      <AlertCircle className="me-2" size={20} />
                      {errorMessage}
                    </div>
                  )}
                  {successMessage && (
                    <div className="alert alert-success d-flex align-items-center mb-4" role="alert" data-aos="fade-down">
                      <CheckCircle className="me-2" size={20} />
                      {successMessage}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-medium">
                          {t("contact.form.name")} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                          data-testid="input-name"
                        />
                        {validationErrors.name && (
                          <div className="invalid-feedback">
                            {validationErrors.name}
                          </div>
                        )}
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-medium">
                          {t("contact.form.email")} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                          data-testid="input-email"
                        />
                        {validationErrors.email && (
                          <div className="invalid-feedback">
                            {validationErrors.email}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="company" className="form-label fw-medium">
                        {t("contact.form.company")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-control"
                        data-testid="input-company"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="projectType" className="form-label fw-medium">
                        {t("contact.form.projectType")} *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType || ''}
                        onChange={handleInputChange}
                        className={`form-select ${validationErrors.projectType ? 'is-invalid' : ''}`}
                        data-testid="select-project-type"
                      >
                        <option value="">Select project type...</option>
                        <option value="mvp">MVP Development</option>
                        <option value="dedicated-squad">Dedicated Squad</option>
                        <option value="support">Support & Maintenance</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                      {validationErrors.projectType && (
                        <div className="invalid-feedback">
                          {validationErrors.projectType}
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-medium">
                        {t("contact.form.message")} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        className={`form-control ${validationErrors.message ? 'is-invalid' : ''}`}
                        data-testid="textarea-message"
                      />
                      {validationErrors.message && (
                        <div className="invalid-feedback">
                          {validationErrors.message}
                        </div>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-100 py-3"
                      data-testid="button-send-message"
                    >
                      {isSubmitting ? "Sending..." : t("contact.form.submit")}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="col-lg-4" data-aos="fade-left">
              <div className="d-flex flex-column gap-4">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold text-dark mb-4">
                      Contact Information
                    </h3>
                    
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex align-items-start gap-3">
                        <Mail className="text-primary mt-1" size={20} />
                        <div>
                          <h4 className="fw-semibold text-dark mb-1">Email</h4>
                          <a 
                            href="mailto:hello@digicraft.space" 
                            className="text-primary text-decoration-none"
                            data-testid="link-email"
                          >
                            hello@digicraft.space
                          </a>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-start gap-3">
                        <Clock className="text-primary mt-1" size={20} />
                        <div>
                          <h4 className="fw-semibold text-dark mb-1">Response Time</h4>
                          <p className="text-muted mb-0">Within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-start gap-3">
                        <Globe className="text-primary mt-1" size={20} />
                        <div>
                          <h4 className="fw-semibold text-dark mb-1">Location</h4>
                          <p className="text-muted mb-0">Remote-first, Global</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold text-dark mb-4">
                      What Happens Next?
                    </h3>
                    
                     <div className="d-flex flex-column gap-3">
                       {contactData.nextSteps.map((item) => (
                        <div key={item.step} className="d-flex align-items-start gap-3">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '2rem', height: '2rem' }}>
                            <span className="small fw-semibold">{item.step}</span>
                          </div>
                          <p className="text-muted mb-0 small">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-light rounded-3 p-4 text-center">
                  <CalendlyWidget 
                    username={config.CALENDLY_USERNAME} 
                    eventType={config.CALENDLY_EVENT_TYPE}
                    prefill={{
                      name: formData.name || '',
                      email: formData.email || ''
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
