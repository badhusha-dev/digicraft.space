import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      data-testid="button-back-to-top"
      onClick={scrollToTop}
      className="position-fixed bottom-0 end-0 m-4 p-3 bg-primary text-white rounded-circle shadow-lg d-flex align-items-center justify-content-center"
      style={{ bottom: '2rem', right: '2rem', width: '3rem', height: '3rem', zIndex: 1040 }}
    >
      <ChevronUp style={{ width: '1.5rem', height: '1.5rem' }} />
    </button>
  );
}
