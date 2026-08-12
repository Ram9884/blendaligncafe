"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animate } from "animejs";
import { MENU_ITEMS, CATEGORY_FILTER_ITEMS, formatPrice, type MenuCategory } from "@/data/menu";

const EMOJI_MAP: Record<string, string> = {
  Mojitos: "🍹",
  Milkshakes: "🥤",
  Momos: "🥟",
  Coffee: "☕",
  Pasta: "🍝",
  Sandwiches: "🥪",
};

export default function CategoryFilter() {
  const [active, setActive] = useState<MenuCategory>("Mojitos");
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredItems = MENU_ITEMS
    .filter((item) => item.category === active)
    .slice(0, 4);

  const handlePillClick = (cat: MenuCategory, idx: number) => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActive(cat);

    if (!prefersReduced) {
      const btn = pillRefs.current[idx];
      if (btn) {
        animate(btn, {
          scale: [1, 1.08, 1],
          duration: 400,
          ease: "outElastic(1, 0.5)",
        });
      }
    }
  };

  return (
    <section className="section-pad bg-cream" aria-label="Browse by craving" id="category-filter">
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Explore</p>
          <h2 className="font-heading text-3xl md:text-5xl text-espresso">
            What are you craving?
          </h2>
        </motion.div>

        {/* Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {CATEGORY_FILTER_ITEMS.map((cat, idx) => (
            <button
              key={cat}
              ref={(el) => { pillRefs.current[idx] = el; }}
              id={`pill-${cat.toLowerCase()}`}
              onClick={() => handlePillClick(cat, idx)}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
              style={{
                background: active === cat ? "#C47A44" : "white",
                color: active === cat ? "#FFF8EE" : "#24150F",
                border: `1.5px solid ${active === cat ? "#C47A44" : "rgba(36,21,15,0.12)"}`,
                boxShadow: active === cat ? "0 4px 16px rgba(196,122,68,0.3)" : "none",
              }}
            >
              <span>{EMOJI_MAP[cat]}</span>
              {cat}
              {active === cat && (
                <motion.div
                  layoutId="pill-indicator"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #C47A44, #E9A15B)",
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Item grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="card-base p-5 flex flex-col justify-between"
                style={{ background: "white", minHeight: "140px" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <div>
                  <p className="font-heading text-base font-bold text-espresso mb-1 leading-snug">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="text-xs text-dark/50 leading-relaxed">{item.description}</p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="price-tag">{formatPrice(item.price)}</span>
                  <span className="text-xs text-dark/30">taxes applicable</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all CTA */}
        <div className="text-center mt-10">
          <a href="/menu" className="btn-primary inline-flex" id="category-view-menu">
            View Full Menu →
          </a>
        </div>
      </div>
    </section>
  );
}
