import { useState, useEffect } from "react";
import { Mail, Clock, Globe, MapPin, Phone, Calendar } from "lucide-react";
import SEO from "../components/SEO";
import { validateContactForm, ContactFormData } from "../utils/validation";
import { logPageView, logFormSubmission } from "../utils/analytics";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectTypes: [],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    logPageView("contact");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      projectTypes: checked 
        ? [...prev.projectTypes, value]
        : prev.projectTypes.filter(type => type !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errors = validateContactForm(formData);
    if (errors.length > 0) {
      alert(`Validation Error: ${errors[0].message}`);
      setIsSubmitting(false);
      logFormSubmission("contact", false);
      return;
    }

    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Message Sent Successfully! We'll get back to you within 24 hours.");

      logFormSubmission("contact", true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        projectTypes: [],
        message: "",
      });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      logFormSubmission("contact", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypeOptions = [
    { id: "web-app", label: "Web Application" },
    { id: "mobile-app", label: "Mobile App" },
    { id: "api-backend", label: "API/Backend" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "ai-automation", label: "AI/Automation" },
    { id: "consulting", label: "Consulting" },
  ];

  const nextSteps = [
    { step: 1, title: "We review your project details" },
    { step: 2, title: "Schedule a discovery call" },
    { step: 3, title: "Provide detailed proposal" },
    { step: 4, title: "Start building your solution" },
  ];

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
              Get In Touch
            </h1>
            <p className="lead text-muted max-w-3xl mx-auto">
              Ready to build something amazing? Let's discuss your project.
            </p>
          </div>
          
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h2 className="h3 fw-bold text-dark mb-4">
                    Tell Us About Your Project
                  </h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-medium">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control"
                          data-testid="input-name"
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-medium">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control"
                          data-testid="input-email"
                        />
                      </div>
                    </div>
                    
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="company" className="form-label fw-medium">
                          Company
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
                      
                      <div className="col-md-6">
                        <label htmlFor="budget" className="form-label fw-medium">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="form-select"
                          data-testid="select-budget"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="100k-plus">$100k+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label fw-medium">
                        Project Type
                      </label>
                      <div className="row g-3">
                        {projectTypeOptions.map((option) => (
                          <div key={option.id} className="col-md-6 col-lg-4">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                id={option.id}
                                value={option.id}
                                checked={formData.projectTypes.includes(option.id)}
                                onChange={handleCheckboxChange}
                                className="form-check-input"
                                data-testid={`checkbox-${option.id}`}
                              />
                              <label className="form-check-label small" htmlFor={option.id}>
                                {option.label}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-medium">
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        className="form-control"
                        data-testid="textarea-message"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-100 py-3"
                      data-testid="button-send-message"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="col-lg-4">
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
                      {nextSteps.map((item) => (
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
                  <h3 className="h5 fw-bold text-dark mb-3">
                    Prefer to call?
                  </h3>
                  <p className="text-muted mb-4">
                    Schedule a free 30-minute consultation to discuss your project in detail.
                  </p>
                  <button 
                    className="btn btn-outline-primary"
                    data-testid="button-schedule-call"
                  >
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
