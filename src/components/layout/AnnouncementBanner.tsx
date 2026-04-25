import { X } from "lucide-react";
import { useState, useEffect } from "react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--announcement-height',
      isVisible ? '40px' : '0px'
    );
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] gradient-primary text-primary-foreground py-2.5 px-4 text-center shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium flex-wrap">
        <span className="animate-pulse">🚀</span>
        <span>
          <strong>Cohort 6</strong> — Starting Soon!
        </span>
        <a
          href="https://scholarship.nexithai.com"
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-1 px-3 py-1 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors font-semibold flex items-center"
        >
          Apply for Scholarship →
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-primary-foreground/20 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
