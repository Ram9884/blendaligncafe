"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MENU_ITEMS,
  ALL_CATEGORIES,
  formatPrice,
  type MenuCategory,
} from "@/data/menu";

const TABS = ["All", ...ALL_CATEGORIES] as const;
type Tab = (typeof TABS)[number];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <>
      {/* Page Header */}
      <div
        className="pt-32 pb-16"
        style={{ background: "linear-gradient(180deg, #24150F 0%, #3d2518 100%)" }}
      >
        <div className="container-site text-center">
          <p className="eyebrow mb-4" style={{ color: "#E9A15B" }}>Full Lineup</p>
          <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">
            The Menu
          </h1>
          <p className="text-cream/50 text-lg max-w-md mx-auto">
            Something for every craving. Taxes applicable on all items.
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div
        className="sticky top-16 md:top-20 z-30 py-4 border-b"
        style={{
          background: "rgba(255,248,238,0.95)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(36,21,15,0.08)",
        }}
      >
        <div className="container-site">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mb-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                id={`tab-${tab.toLowerCase().replace(/\//g, "-")}`}
                onClick={() => setActiveTab(tab)}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                style={{
                  background: activeTab === tab ? "#24150F" : "transparent",
                  color: activeTab === tab ? "#FFF8EE" : "#1C1714",
                  border: `1.5px solid ${activeTab === tab ? "#24150F" : "rgba(36,21,15,0.12)"}`,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="section-pad bg-cream">
        <div className="container-site">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* Group by category if "All" */}
              {activeTab === "All" ? (
                ALL_CATEGORIES.map((cat) => {
                  const catItems = MENU_ITEMS.filter((i) => i.category === cat);
                  if (catItems.length === 0) return null;
                  return (
                    <div key={cat} className="mb-12">
                      <h2 className="font-heading text-2xl md:text-3xl text-espresso mb-6 flex items-center gap-3">
                        {cat}
                        <span className="text-base font-body font-normal text-dark/30">
                          ({catItems.length} items)
                        </span>
                      </h2>
                      <MenuItemList items={catItems} />
                    </div>
                  );
                })
              ) : (
                <>
                  <h2 className="font-heading text-2xl md:text-3xl text-espresso mb-6">
                    {activeTab}
                    <span className="text-base font-body font-normal text-dark/30 ml-3">
                      ({filtered.length} items)
                    </span>
                  </h2>
                  <MenuItemList items={filtered} />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function MenuItemList({ items }: { items: typeof MENU_ITEMS }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          className="flex items-center justify-between rounded-xl px-5 py-4 group"
          style={{
            background: "white",
            border: "1px solid rgba(36,21,15,0.07)",
            boxShadow: "0 1px 8px rgba(36,21,15,0.04)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.025, duration: 0.3 }}
          whileHover={{ boxShadow: "0 4px 20px rgba(36,21,15,0.1)", y: -2 }}
        >
          <div className="flex-1 min-w-0 pr-4">
            <p className="font-heading text-sm font-bold text-espresso leading-snug">
              {item.name}
            </p>
            {item.description && (
              <p className="text-xs text-dark/40 mt-0.5 leading-relaxed line-clamp-1">
                {item.description}
              </p>
            )}
          </div>
          <span className="price-tag flex-shrink-0 text-sm">{formatPrice(item.price)}</span>
        </motion.div>
      ))}
    </div>
  );
}
