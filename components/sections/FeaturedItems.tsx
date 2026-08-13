"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MENU_ITEMS, formatPrice } from "@/data/menu";

// Handpicked featured items
const FEATURED_IDS = [
  "milk-oreo",
  "milk-brownie",
  "mom-pnr-steam",
  "cof-classic",
  "des-lava-cake",
  "moj-strawberry",
  "mom-chk-steam",
  "past-mushroom",
];

const featuredItems = FEATURED_IDS
  .map((id) => MENU_ITEMS.find((item) => item.id === id))
  .filter(Boolean) as typeof MENU_ITEMS;

// Fallback images by category
const FALLBACK_IMAGES: Record<string, string> = {
  Milkshakes: "/milkshake.png",
  Coffee: "/cold-coffee.png",
  Momos: "/momos.png",
  Desserts: "/lava-cake.png",
  Mojitos: "/food-flatlay.png",
  Pasta: "/food-flatlay.png",
};

export default function FeaturedItems() {
  return (
    <section
      className="section-pad"
      style={{ background: "#FFF8EE" }}
      aria-label="Featured items"
      id="featured-items"
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="eyebrow mb-3">Fan Favourites</p>
            <h2 className="font-heading text-3xl md:text-5xl text-espresso">
              Our Best Sellers
            </h2>
          </div>
          <Link
            href="/menu"
            className="text-caramel text-sm font-semibold hover:underline flex items-center gap-1.5 flex-shrink-0"
            id="featured-see-all"
          >
            See full menu →
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredItems.map((item, i) => {
            const imgSrc = item.featuredImage || FALLBACK_IMAGES[item.category] || "/food-flatlay.png";
            return (
              <motion.article
                key={item.id}
                className="group rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  boxShadow: "0 2px 16px rgba(36,21,15,0.06)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(36,21,15,0.14)" }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-cream-muted">
                  <Image
                    src={imgSrc}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Category badge */}
                  <div
                    className="absolute top-2.5 left-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
                    style={{ background: "rgba(36,21,15,0.7)", color: "#E9A15B" }}
                  >
                    {item.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <p className="font-heading text-sm md:text-base font-bold text-espresso leading-snug mb-1">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="text-xs text-dark/40 leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="price-tag text-base">{formatPrice(item.price)}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
