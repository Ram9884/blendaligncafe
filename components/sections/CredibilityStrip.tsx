"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";

const STATS = [
  {
    icon: "⭐",
    value: `${BUSINESS.rating.score} / 5`,
    label: `Google Rating · ${BUSINESS.rating.count} Reviews`,
    id: "stat-rating",
  },
  {
    icon: "₹",
    value: BUSINESS.pricing.display,
    label: BUSINESS.pricing.label,
    id: "stat-price",
  },
  {
    icon: "🍽️",
    value: "Dine-in",
    label: "Takeaway · Delivery",
    id: "stat-services",
  },
];

export default function CredibilityStrip() {
  return (
    <section
      className="py-12 md:py-16"
      style={{ background: "#24150F" }}
      aria-label="Credibility stats"
      id="credibility"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              id={stat.id}
              className="flex flex-col items-center text-center py-10 px-6"
              style={{ background: "#24150F" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-3xl mb-3">{stat.icon}</span>
              <p className="font-heading text-2xl md:text-3xl font-bold text-cream mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-cream/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
