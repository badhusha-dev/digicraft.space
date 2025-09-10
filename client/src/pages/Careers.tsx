import { useState, memo, useCallback, useMemo } from "react";
import { MapPin, DollarSign, Clock, Calendar, Heart, Laptop, GraduationCap, X, Globe, TrendingUp, Users, Target } from "lucide-react";
import SEO from "../components/SEO";
import { jobPositions, benefits } from "../data/careers";
import { getImageById } from "../data/images";
import { useEffect } from "react";
import { logPageView, logFormSubmission } from "../utils/analytics";
import { validateJobApplication, JobApplicationData } from "../utils/validation";

const Careers = memo(function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<JobApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
  });

  useEffect(() => {
    logPageView("careers");
  }, []);

  const openJobApplication = useCallback((jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setErrorMessage(null);
    setSuccessMessage(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedin: "",
      portfolio: "",
      coverLetter: "",
    });
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    
    const errors = validateJobApplication(formData);
    if (errors.length > 0) {
      setErrorMessage(`Validation Error: ${errors[0].message}`);
      logFormSubmission("job_application", false);
      return;
    }

    // In a real application, you would send this data to your backend
    setSuccessMessage("Application Submitted! We'll be in touch soon.");
    
    logFormSubmission("job_application", true);
    
    // Close modal after a short delay to show success message
    setTimeout(() => {
      closeModal();
    }, 2000);
  }, [formData, closeModal]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const iconMap = useMemo(() => ({
    laptop: Laptop,
    "graduation-cap": GraduationCap,
    heart: Heart,
    calendar: Calendar,
  }), []);

  const cultureItems = useMemo(() => [
    {
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours",
      icon: Globe,
    },
    {
      title: "Growth Opportunities",
      description: "Learn cutting-edge technologies and advance your career",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Team",
      description: "Work with passionate engineers who care about quality",
      icon: Users,
    },
    {
      title: "Impactful Work",
      description: "Build software that makes a real difference for businesses",
      icon: Target,
    },
  ], []);

  // Get local images
  const teamImage = getImageById('team-collaboration');

  return (
    <>
      <SEO
        title="Careers"
        description="Join our team of passionate engineers building the future of software development. Remote-first culture with competitive benefits and growth opportunities."
        keywords="software engineering jobs, remote development jobs, react developer careers, full stack developer jobs"
      />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-4">
              Join Our Team
            </h1>
            <p className="lead text-muted max-w-3xl mx-auto">
              Build the future of software development with passionate engineers
            </p>
          </div>
          
          {/* Company Culture */}
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-dark mb-4">
                Why Work at DigiCraft.space?
              </h2>
              <div className="d-flex flex-column gap-4">
                {cultureItems.map((item, index) => (
                  <div key={index} className="d-flex align-items-start gap-3">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '3rem', height: '3rem' }}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="h6 fw-semibold text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted mb-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6">
              <img
                src={teamImage?.src || "/images/ui/placeholder-team.jpg"}
                alt={teamImage?.alt || "Team collaboration in modern tech workspace"}
                className="img-fluid rounded-3 shadow"
                width={teamImage?.width || 600}
                height={teamImage?.height || 400}
                data-testid="img-team-collaboration"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Open Positions */}
          <div className="mb-5">
            <h2 className="display-5 fw-bold text-center text-dark mb-4">
              Open Positions
            </h2>
            <div className="row g-4">
              {jobPositions.map((position) => (
                <div 
                  key={position.id}
                  className="col-lg-6"
                  data-testid={`card-job-${position.id}`}
                >
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                          <h3 className="h5 fw-semibold text-dark mb-2">
                            {position.title}
                          </h3>
                          <div className="d-flex flex-wrap gap-2">
                            <span className={`badge ${
                              position.type === "full-time" ? "bg-primary" :
                              position.type === "contract" ? "bg-warning text-dark" :
                              "bg-success"
                            }`}>
                              {position.type.charAt(0).toUpperCase() + position.type.slice(1)}
                            </span>
                            <span className="badge bg-secondary">
                              Remote
                            </span>
                          </div>
                        </div>
                        <span className="h6 fw-semibold text-muted">
                          {position.salary}
                        </span>
                      </div>
                      
                      <p className="text-muted mb-3">
                        {position.description}
                      </p>
                      
                      <ul className="list-unstyled mb-4">
                        {position.requirements.map((requirement, index) => (
                          <li key={index} className="d-flex align-items-center mb-2">
                            <div className="bg-success rounded-circle me-2 flex-shrink-0" style={{ width: '0.5rem', height: '0.5rem' }}></div>
                            <span className="small text-muted">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        onClick={() => openJobApplication(position.title)}
                        className="btn btn-primary w-100"
                        data-testid={`button-apply-${position.id}`}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div className="bg-light rounded-3 p-4">
            <h2 className="display-5 fw-bold text-center text-dark mb-4">
              Benefits & Perks
            </h2>
            <div className="row g-4">
              {benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="col-md-6 col-lg-3 text-center">
                    <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>
                      {IconComponent && <IconComponent className="text-white" size={32} />}
                    </div>
                    <h3 className="h6 fw-semibold text-dark mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted small">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {isModalOpen && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Apply for {selectedJob}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  data-testid="button-close-modal"
                ></button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-control"
                        data-testid="input-first-name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-control"
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>
                  
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                        data-testid="input-email"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-medium">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="form-control"
                      data-testid="input-linkedin"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-medium">
                      Portfolio/GitHub URL
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="form-control"
                      data-testid="input-portfolio"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-medium">
                      Cover Letter *
                    </label>
                    <textarea
                      name="coverLetter"
                      required
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this role and what you'd bring to our team..."
                      className="form-control"
                      data-testid="textarea-cover-letter"
                    />
                  </div>
                </div>
                
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                    data-testid="button-cancel-application"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-testid="button-submit-application"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Careers;
