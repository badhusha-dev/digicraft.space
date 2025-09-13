import { useState } from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { CaseStudy } from '../data/caseStudies';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold text-dark mb-4">
            Success Stories
          </h2>
          <p className="lead text-muted">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="row">
          {/* Case Study List */}
          <div className="col-lg-4 mb-4" data-aos="fade-right">
            <div className="case-study-nav">
              <h4 className="fw-bold text-dark mb-4">Featured Projects</h4>
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className={`case-study-item p-3 mb-3 rounded-3 cursor-pointer transition-all ${
                    selectedCase.id === caseStudy.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCase(caseStudy)}
                >
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="bg-primary rounded-2 d-flex align-items-center justify-content-center text-white fw-bold"
                           style={{ width: '40px', height: '40px', fontSize: '14px' }}>
                        {caseStudy.client.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold text-dark mb-1">{caseStudy.title}</h6>
                      <p className="small text-muted mb-0">{caseStudy.client} • {caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          <div className="col-lg-8" data-aos="fade-left">
            <div className="case-study-detail">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body p-4">
                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h3 className="fw-bold text-dark mb-2">{selectedCase.title}</h3>
                      <p className="text-muted mb-0">{selectedCase.client} • {selectedCase.industry}</p>
                    </div>
                    <div className="text-end">
                      <span className="badge bg-primary text-white">{selectedCase.duration}</span>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h5 className="fw-bold text-dark mb-3">
                      <span className="text-danger me-2">Challenge</span>
                    </h5>
                    <p className="text-muted">{selectedCase.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h5 className="fw-bold text-dark mb-3">
                      <span className="text-primary me-2">Solution</span>
                    </h5>
                    <p className="text-muted">{selectedCase.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-4">
                    <h5 className="fw-bold text-dark mb-3">
                      <span className="text-success me-2">Results</span>
                    </h5>
                    <div className="row g-3">
                      {selectedCase.results.map((result, index) => (
                        <div key={index} className="col-md-6">
                          <div className="d-flex align-items-center">
                            <CheckCircle className="text-success me-2 flex-shrink-0" size={20} />
                            <span className="small text-muted">{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="fw-bold text-dark mb-3">Technologies Used</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedCase.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-light text-dark border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {selectedCase.testimonial && (
                    <div className="bg-light rounded-3 p-4 mb-4">
                      <blockquote className="text-muted mb-3">
                        "{selectedCase.testimonial}"
                      </blockquote>
                      <cite className="text-primary fw-medium">
                        — {selectedCase.testimonialAuthor}
                      </cite>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="text-center">
                    <button className="btn btn-primary btn-lg">
                      View Full Case Study
                      <ExternalLink className="ms-2" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row mt-5" data-aos="fade-up" data-aos-delay="200">
          <div className="col-12">
            <div className="bg-white rounded-4 p-4 shadow-sm">
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <div className="stat-item">
                    <div className="display-6 fw-bold text-primary">50+</div>
                    <div className="text-muted">Projects Completed</div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="stat-item">
                    <div className="display-6 fw-bold text-primary">98%</div>
                    <div className="text-muted">Client Satisfaction</div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="stat-item">
                    <div className="display-6 fw-bold text-primary">$2M+</div>
                    <div className="text-muted">Revenue Generated</div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="stat-item">
                    <div className="display-6 fw-bold text-primary">24/7</div>
                    <div className="text-muted">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
