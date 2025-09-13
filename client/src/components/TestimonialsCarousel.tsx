import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../data/testimonials';
import { useInView } from 'react-intersection-observer';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref: avatarRef, inView: avatarInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold text-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="lead text-muted">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div 
              className="testimonial-carousel position-relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Main Testimonial Card */}
              <div className="card border-0 shadow-lg testimonial-card" data-aos="fade-up" data-aos-delay="200">
                <div className="card-body p-5">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="testimonial-content">
                        <Quote className="text-primary mb-3" size={32} />
                        <blockquote className="fs-5 text-muted mb-4">
                          "{currentTestimonial.content}"
                        </blockquote>
                        
                        <div className="d-flex align-items-center mb-3">
                          <div className="d-flex text-warning me-3">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                              <Star key={i} size={20} className="fill-current" />
                            ))}
                          </div>
                          <span className="badge bg-primary-light text-white">
                            {currentTestimonial.projectType}
                          </span>
                        </div>

                        <div className="testimonial-author">
                          <div className="d-flex align-items-center">
                            <div ref={avatarRef}>
                              {avatarInView && (
                                <img
                                  src={currentTestimonial.avatar}
                                  alt={currentTestimonial.name}
                                  className="rounded-circle me-3"
                                  width="60"
                                  height="60"
                                  loading="lazy"
                                  style={{ objectFit: 'cover' }}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const fallback = target.nextElementSibling as HTMLElement;
                                    if (fallback) fallback.style.display = 'flex';
                                  }}
                                />
                              )}
                            </div>
                            <div 
                              className="rounded-circle d-none align-items-center justify-content-center text-white fw-bold me-3"
                              style={{ 
                                width: '60px', 
                                height: '60px', 
                                background: 'var(--dc-gradient-primary)',
                                fontSize: '20px'
                              }}
                            >
                              {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h5 className="fw-bold text-dark mb-1">
                                {currentTestimonial.name}
                              </h5>
                              <p className="text-muted mb-0">
                                {currentTestimonial.role}, {currentTestimonial.company}
                              </p>
                              <small className="text-primary fw-medium">
                                {currentTestimonial.results}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-lg-4 text-center">
                      <div className="testimonial-logo">
                        <div className="logo-placeholder bg-white rounded-3 p-4 shadow-sm">
                          <div className="text-muted small mb-2">{currentTestimonial.industry}</div>
                          <div className="fw-bold text-dark">{currentTestimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <button
                className="btn btn-outline-primary rounded-circle position-absolute top-50 start-0 translate-middle-y"
                onClick={goToPrevious}
                style={{ width: '50px', height: '50px', zIndex: 10 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                className="btn btn-outline-primary rounded-circle position-absolute top-50 end-0 translate-middle-y"
                onClick={goToNext}
                style={{ width: '50px', height: '50px', zIndex: 10 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="text-center mt-4">
                <div className="d-flex justify-content-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`btn rounded-circle ${index === currentIndex ? 'bg-primary' : 'bg-secondary'}`}
                      style={{ width: '12px', height: '12px' }}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="row mt-5" data-aos="fade-up" data-aos-delay="400">
          <div className="col-12">
            <div className="text-center">
              <p className="text-muted mb-4">Trusted by companies across industries</p>
              <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
                <div className="trust-badge">
                  <div className="fw-bold text-primary">50+</div>
                  <div className="small text-muted">Projects Delivered</div>
                </div>
                <div className="trust-badge">
                  <div className="fw-bold text-primary">98%</div>
                  <div className="small text-muted">Client Satisfaction</div>
                </div>
                <div className="trust-badge">
                  <div className="fw-bold text-primary">24/7</div>
                  <div className="small text-muted">Support Available</div>
                </div>
                <div className="trust-badge">
                  <div className="fw-bold text-primary">5★</div>
                  <div className="small text-muted">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
