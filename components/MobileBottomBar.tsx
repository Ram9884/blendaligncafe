"use client";

import { BUSINESS } from "@/data/business";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-pb">
      <div
        className="flex border-t"
        style={{
          background: "rgba(36, 21, 15, 0.97)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(255,248,238,0.08)",
        }}
      >
        <a
          href={BUSINESS.phone.tel}
          id="mobile-bottom-call"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-cream/70 hover:text-caramel transition-colors active:scale-95"
        >
          <span className="text-xl">📞</span>
          <span className="text-[10px] font-medium tracking-wide uppercase">Call</span>
        </a>

        <div className="w-px bg-white/10" />

        <a
          href={BUSINESS.maps.directions}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-directions"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-cream/70 hover:text-caramel transition-colors active:scale-95"
        >
          <span className="text-xl">📍</span>
          <span className="text-[10px] font-medium tracking-wide uppercase">Directions</span>
        </a>

        <div className="w-px bg-white/10" />

        <a
          href={BUSINESS.phone.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-cream/70 hover:text-[#25D366] transition-colors active:scale-95"
        >
          <span className="text-xl">💬</span>
          <span className="text-[10px] font-medium tracking-wide uppercase">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
