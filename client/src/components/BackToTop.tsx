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
      className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center z-40"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
