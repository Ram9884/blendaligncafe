"use client";

import { useState, useEffect } from "react";

export default function DemoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner if not explicitly dismissed in this session/localStorage
    const dismissed = localStorage.getItem("demo-banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("demo-banner-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-[100] bg-caramel text-cream py-2 px-4 text-center text-xs md:text-sm font-medium flex items-center justify-between gap-4 shadow-md transition-all duration-300">
      <div className="flex-1 flex items-center justify-center gap-2 flex-wrap">
        <span>✨</span>
        <span>
          <strong>Demo Template:</strong> This is a live preview of a premium cafe website. We can fully customize this with your cafe's logo, colors, menu, and location!
        </span>
      </div>
      <button
        onClick={handleDismiss}
        className="text-cream/80 hover:text-cream hover:bg-white/10 rounded-full p-1 transition-colors flex-shrink-0"
        aria-label="Dismiss banner"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
