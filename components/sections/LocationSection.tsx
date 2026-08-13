"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";

export default function LocationSection() {
  return (
    <section
      className="section-pad"
      style={{ background: "#F5EDD8" }}
      aria-label="Location and contact"
      id="location"
    >
      <div className="container-site">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Visit Us</p>
          <h2 className="font-heading text-3xl md:text-5xl text-espresso">
            Find your way to us.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Map card */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{
              minHeight: "360px",
              boxShadow: "0 4px 32px rgba(36,21,15,0.12)",
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stylized map placeholder with actual link overlay */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #E8D5B7 0%, #D4B896 50%, #C4A076 100%)",
                minHeight: "360px",
              }}
            >
              {/* Decorative grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#24150F" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Roads */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 360" preserveAspectRatio="none">
                <line x1="0" y1="180" x2="400" y2="180" stroke="white" strokeWidth="8" strokeOpacity="0.4"/>
                <line x1="200" y1="0" x2="200" y2="360" stroke="white" strokeWidth="6" strokeOpacity="0.3"/>
                <line x1="0" y1="270" x2="300" y2="270" stroke="white" strokeWidth="4" strokeOpacity="0.25"/>
                <line x1="120" y1="0" x2="120" y2="180" stroke="white" strokeWidth="4" strokeOpacity="0.2"/>
              </svg>

              {/* Pin */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
                  style={{ background: "#C47A44" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                  📍
                </motion.div>
                <div
                  className="rounded-2xl px-5 py-3 text-center"
                  style={{
                    background: "rgba(255,248,238,0.95)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 24px rgba(36,21,15,0.15)",
                  }}
                >
                  <p className="font-heading font-bold text-espresso text-sm">{BUSINESS.name}</p>
                  <p className="text-dark/50 text-xs mt-1">{BUSINESS.address.short}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info card */}
          <motion.div
            className="rounded-2xl p-8 md:p-10 flex flex-col justify-center"
            style={{
              background: "white",
              boxShadow: "0 4px 32px rgba(36,21,15,0.08)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl text-espresso mb-6">
              Come visit us
            </h3>

            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark/40 mb-1">Address</p>
                  <address className="not-italic text-sm text-dark/70 leading-relaxed">
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.area}<br />
                    {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pincode}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📞</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark/40 mb-1">Phone</p>
                  <a
                    href={BUSINESS.phone.tel}
                    id="location-call"
                    className="text-sm text-caramel font-semibold hover:underline"
                  >
                    {BUSINESS.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🕐</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark/40 mb-1">Services</p>
                  <p className="text-sm text-dark/70">Dine-in · Takeaway · Delivery</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm justify-center"
                id="location-directions"
                style={{ flex: 1 }}
              >
                📍 Get Directions
              </a>
              <a
                href={BUSINESS.phone.tel}
                className="text-sm justify-center flex items-center gap-2 font-semibold rounded-full border-2 py-3 px-5 transition-colors hover:bg-espresso hover:text-cream"
                id="location-call-btn"
                style={{
                  flex: 1,
                  borderColor: "#24150F",
                  color: "#24150F",
                }}
              >
                📞 Call Cafe
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
