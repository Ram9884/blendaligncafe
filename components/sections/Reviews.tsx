"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";

export default function Reviews() {
  return (
    <section
      className="section-pad"
      style={{ background: "#FFF8EE" }}
      aria-label="Customer reviews"
      id="reviews"
    >
      <div className="container-site">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">What people say</p>
          <h2 className="font-heading text-3xl md:text-5xl text-espresso mb-4">
            Real love from real guests
          </h2>
          {/* Rating display */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl" style={{ color: i < Math.floor(BUSINESS.rating.score) ? "#E9A15B" : "#E5D5C5" }}>
                  ★
                </span>
              ))}
            </div>
            <span className="font-heading text-2xl font-bold text-espresso">
              {BUSINESS.rating.score}
            </span>
            <span className="text-dark/40 text-sm">
              ({BUSINESS.rating.count} reviews on Google)
            </span>
          </div>
        </motion.div>

        {/* Review card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "white",
              boxShadow: "0 4px 32px rgba(36,21,15,0.08)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Quote mark */}
            <div
              className="font-heading text-6xl leading-none mb-4"
              style={{ color: "#E9A15B", opacity: 0.4 }}
            >
              "
            </div>

            <blockquote className="font-heading text-xl md:text-2xl text-espresso leading-relaxed mb-8 italic">
              {BUSINESS.review.quote}
            </blockquote>

            <div className="flex items-center gap-4">
              {/* Avatar initial */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-cream text-lg"
                style={{ background: "linear-gradient(135deg, #C47A44, #E9A15B)" }}
              >
                {BUSINESS.review.reviewer[0]}
              </div>
              <div>
                <p className="font-semibold text-espresso text-sm">{BUSINESS.review.reviewer}</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(BUSINESS.review.rating)].map((_, i) => (
                    <span key={i} className="text-sm" style={{ color: "#E9A15B" }}>★</span>
                  ))}
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs text-dark/30">
                <span>via</span>
                <span className="font-semibold">Google</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
