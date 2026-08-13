"use client";

import { useState, useEffect } from "react";

export default function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    // Auto-collapse after 4 seconds
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed z-[100] transition-all duration-500 ease-out"
      style={{
        left: "1rem",
        bottom: "calc(env(safe-area-inset-bottom) + 5.5rem)", // Positions it above the mobile bottom bar
      }}
    >
      {isExpanded ? (
        <div 
          className="w-[320px] max-w-[calc(100vw-2rem)] p-4 rounded-2xl shadow-2xl border transition-all duration-300 transform scale-100"
          style={{
            background: "rgba(36, 21, 15, 0.94)",
            backdropFilter: "blur(16px)",
            borderColor: "rgba(255, 248, 238, 0.15)",
            color: "#FFF8EE",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 mb-2.5">
            <span className="font-heading font-bold text-sm tracking-wide text-caramel flex items-center gap-1.5">
              <span>✨</span> DEMO TEMPLATE
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(false)}
                className="text-cream/60 hover:text-cream p-1 transition-colors rounded-lg hover:bg-white/5"
                title="Minimize banner"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <button
                onClick={handleClose}
                className="text-cream/60 hover:text-cream p-1 transition-colors rounded-lg hover:bg-white/5"
                title="Don't show again"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs md:text-[13px] leading-relaxed text-cream/80 mb-3">
            This is a premium, live preview of a customizable cafe website. We can personalize all branding, colors, menus, and details for your own business!
          </p>

          {/* Action button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="w-full py-1.5 rounded-xl bg-caramel hover:bg-caramel/90 text-cream text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95"
          >
            Explore the Demo
          </button>
        </div>
      ) : (
        /* Minimized Pill Badge */
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-xs font-semibold shadow-lg border hover:scale-105 active:scale-95 transition-all duration-200"
          style={{
            background: "#C47A44",
            borderColor: "rgba(255, 248, 238, 0.2)",
            color: "#FFF8EE",
            boxShadow: "0 10px 25px rgba(196, 122, 68, 0.35)",
            animation: "pulseGlow 2.5s infinite",
          }}
        >
          <span>✨</span>
          <span>Customize Website</span>
          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full ml-1">Demo</span>
        </button>
      )}

      {/* Embedded local CSS animation keyframe for pulseGlow */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 10px 25px rgba(196, 122, 68, 0.35);
          }
          50% {
            box-shadow: 0 10px 30px rgba(196, 122, 68, 0.6);
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
}
