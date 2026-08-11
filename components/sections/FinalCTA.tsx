"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: "#24150F" }}
      aria-label="Explore the menu call to action"
      id="final-cta"
    >
      {/* Background texture rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[400, 600, 800].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full border"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderColor: "rgba(196,122,68,0.08)",
              animation: `pulse ${5 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,122,68,0.15), transparent)",
        }}
      />

      <div className="relative z-10 container-site text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-6" style={{ color: "#E9A15B" }}>Ready to order?</p>
          <h2
            className="font-heading font-bold text-cream mx-auto mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.1,
              maxWidth: "700px",
            }}
          >
            Your next craving<br />
            <em style={{ color: "#E9A15B" }}>starts here.</em>
          </h2>
          <p className="text-cream/50 text-lg mb-10 max-w-md mx-auto">
            Browse the full menu and find your favourite.
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-block"
          >
            <Link
              href="/menu"
              className="btn-primary text-base px-8 py-4"
              id="cta-explore-menu"
              style={{ fontSize: "1rem" }}
            >
              Explore the Menu →
            </Link>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-cream/30 text-sm mt-8">
            <span>📍</span>
            <span>{BUSINESS.address.short}</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
}
