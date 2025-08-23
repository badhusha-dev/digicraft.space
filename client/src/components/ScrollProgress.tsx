import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div 
      className="position-fixed top-0 start-0 bg-primary"
      style={{ 
        width: `${scrollProgress}%`, 
        height: '4px', 
        zIndex: 1050,
        background: 'linear-gradient(to right, var(--bs-primary), var(--bs-secondary))'
      }}
    />
  );
}
