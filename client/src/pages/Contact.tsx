import { useState, useEffect } from "react";
import { Mail, Clock, Globe, MapPin, Phone, Calendar } from "lucide-react";
import SEO from "../components/SEO";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();

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
      toast({
        title: "Validation Error",
        description: errors[0].message,
        variant: "destructive",
      });
      setIsSubmitting(false);
      logFormSubmission("contact", false);
      return;
    }

    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

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
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
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

      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to build something amazing? Let's discuss your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Tell Us About Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        data-testid="input-company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
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
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {projectTypeOptions.map((option) => (
                        <label key={option.id} className="flex items-center">
                          <input
                            type="checkbox"
                            value={option.id}
                            checked={formData.projectTypes.includes(option.id)}
                            onChange={handleCheckboxChange}
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            data-testid={`checkbox-${option.id}`}
                          />
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    data-testid="button-send-message"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                      <a 
                        href="mailto:hello@digicraft.space" 
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        data-testid="link-email"
                      >
                        hello@digicraft.space
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Response Time</h4>
                      <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Remote-first, Global</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  What Happens Next?
                </h3>
                
                <div className="space-y-4">
                  {nextSteps.map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {item.step}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Prefer to call?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Schedule a free 30-minute consultation to discuss your project in detail.
                </p>
                <button 
                  className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  data-testid="button-schedule-call"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
