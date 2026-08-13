import type { Metadata } from "next";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: `Contact | ${BUSINESS.name} — Cafe Template`,
  description:
    `Visit ${BUSINESS.name} at ${BUSINESS.address.full}. Call ${BUSINESS.phone.display} or get directions.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div
        className="pt-32 pb-20"
        style={{ background: "linear-gradient(180deg, #24150F 0%, #3d2518 100%)" }}
      >
        <div className="container-site text-center">
          <p className="eyebrow mb-4" style={{ color: "#E9A15B" }}>Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">
            Find Us
          </h1>
          <p className="text-cream/50 text-lg">We'd love to see you.</p>
        </div>
      </div>

      {/* Content */}
      <div className="section-pad bg-cream">
        <div className="container-site max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{ minHeight: "420px" }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #E8D5B7 0%, #D4B896 50%, #C4A076 100%)",
                }}
              >
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <defs>
                    <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#24150F" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid2)" />
                </svg>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 420" preserveAspectRatio="none">
                  <line x1="0" y1="210" x2="400" y2="210" stroke="white" strokeWidth="8" strokeOpacity="0.4"/>
                  <line x1="200" y1="0" x2="200" y2="420" stroke="white" strokeWidth="6" strokeOpacity="0.3"/>
                  <line x1="0" y1="315" x2="300" y2="315" stroke="white" strokeWidth="4" strokeOpacity="0.25"/>
                  <line x1="120" y1="0" x2="120" y2="210" stroke="white" strokeWidth="4" strokeOpacity="0.2"/>
                </svg>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl"
                    style={{ background: "#C47A44" }}
                  >
                    📍
                  </div>
                  <div
                    className="rounded-2xl px-6 py-4 text-center"
                    style={{ background: "rgba(255,248,238,0.95)", boxShadow: "0 4px 24px rgba(36,21,15,0.15)" }}
                  >
                    <p className="font-heading font-bold text-espresso">{BUSINESS.name}</p>
                    <p className="text-dark/50 text-xs mt-1">{BUSINESS.address.short}</p>
                  </div>
                  <a
                    href={BUSINESS.maps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                    id="contact-map-directions"
                  >
                    Open in Maps ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "white", boxShadow: "0 2px 16px rgba(36,21,15,0.06)" }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="eyebrow text-xs mb-2">Address</p>
                    <address className="not-italic text-dark/70 leading-relaxed">
                      {BUSINESS.address.street}<br />
                      {BUSINESS.address.area}<br />
                      {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pincode}
                    </address>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "white", boxShadow: "0 2px 16px rgba(36,21,15,0.06)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="eyebrow text-xs mb-2">Phone</p>
                    <a
                      href={BUSINESS.phone.tel}
                      id="contact-phone"
                      className="font-heading text-xl font-bold text-caramel hover:underline"
                    >
                      {BUSINESS.phone.display}
                    </a>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "white", boxShadow: "0 2px 16px rgba(36,21,15,0.06)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🍽️</span>
                  <div>
                    <p className="eyebrow text-xs mb-2">Services</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {BUSINESS.services.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ background: "#FFF8EE", border: "1px solid rgba(36,21,15,0.1)", color: "#24150F" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm justify-center"
                  id="contact-directions-btn"
                >
                  📍 Get Directions
                </a>
                <a
                  href={BUSINESS.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full text-sm font-semibold py-3 px-4 transition-colors"
                  id="contact-whatsapp"
                  style={{
                    background: "#25D366",
                    color: "white",
                  }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
