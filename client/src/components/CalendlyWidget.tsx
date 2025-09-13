import { useState } from 'react';
import { Calendar, X, Clock, Users, CheckCircle } from 'lucide-react';
import { logButtonClick } from '../utils/analytics';

interface CalendlyWidgetProps {
  username: string;
  eventType?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
}

export default function CalendlyWidget({ username, eventType, prefill }: CalendlyWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCalendly = () => {
    logButtonClick('schedule_meeting', 'calendly_widget');
    setIsOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsOpen(false);
  };

  const calendlyUrl = eventType 
    ? `https://calendly.com/${username}/${eventType}`
    : `https://calendly.com/${username}`;

  // Add prefill parameters to URL
  const urlWithPrefill = () => {
    let url = calendlyUrl;
    if (prefill) {
      const params = new URLSearchParams();
      if (prefill.name) params.append('name', prefill.name);
      if (prefill.email) params.append('email', prefill.email);
      if (prefill.customAnswers) {
        Object.entries(prefill.customAnswers).forEach(([key, value]) => {
          params.append(`a1[${key}]`, value);
        });
      }
      const queryString = params.toString();
      if (queryString) {
        url += `?${queryString}`;
      }
    }
    return url;
  };

  return (
    <>
      {/* Calendly Trigger Button */}
      <div className="calendly-widget-trigger">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={handleOpenCalendly}
          data-testid="button-schedule-meeting"
        >
          <Calendar className="me-2" size={20} />
          Schedule Free Consultation
        </button>
        
        <div className="mt-3 text-center">
          <div className="d-flex justify-content-center align-items-center gap-3 text-muted small">
            <div className="d-flex align-items-center gap-1">
              <Clock size={14} />
              <span>30 min</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Users size={14} />
              <span>1-on-1</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <CheckCircle size={14} />
              <span>Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {isOpen && (
        <div className="calendly-modal-overlay" onClick={handleCloseCalendly}>
          <div className="calendly-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="calendly-modal-header">
              <h4 className="fw-bold text-dark mb-0">Schedule Your Free Consultation</h4>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handleCloseCalendly}
                aria-label="Close calendar"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="calendly-modal-body">
              <iframe
                src={urlWithPrefill()}
                width="100%"
                height="600"
                frameBorder="0"
                title="Calendly Scheduling Widget"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Alternative: Inline Calendly Widget Component
export function CalendlyInlineWidget({ username, eventType }: CalendlyWidgetProps) {
  const calendlyUrl = eventType 
    ? `https://calendly.com/${username}/${eventType}`
    : `https://calendly.com/${username}`;

  return (
    <div className="calendly-inline-widget">
      <div className="text-center mb-4">
        <h3 className="fw-bold text-dark mb-3">Book a Free Consultation</h3>
        <p className="text-muted">
          Schedule a 30-minute call to discuss your project requirements and get a custom quote.
        </p>
      </div>
      
      <iframe
        src={calendlyUrl}
        width="100%"
        height="700"
        frameBorder="0"
        title="Calendly Scheduling Widget"
        loading="lazy"
        className="rounded-3 shadow-sm"
      />
    </div>
  );
}
