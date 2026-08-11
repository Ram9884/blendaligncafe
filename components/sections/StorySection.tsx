"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section
      className="section-pad overflow-hidden"
      style={{ background: "#24150F" }}
      aria-label="About Blend Align Cafe"
      id="story"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image side */}
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[520px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/cafe-story.png"
              alt="Cozy corner at Blend Align Cafe"
              fill
              className="object-cover"
            />
            {/* Overlay tint */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(36,21,15,0.15)" }}
            />
            {/* Floating badge */}
            <motion.div
              className="absolute bottom-6 left-6 rounded-2xl px-5 py-4"
              style={{
                background: "rgba(255,248,238,0.12)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,248,238,0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-cream font-heading text-xl font-bold leading-tight">
                ₹1–200
              </p>
              <p className="text-cream/60 text-xs mt-0.5">Approx. per person</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="eyebrow mb-5" style={{ color: "#E9A15B" }}>The Vibe</p>
            <h2
              className="font-heading font-bold text-cream mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.15 }}
            >
              Come hungry.<br />
              <em style={{ color: "#E9A15B" }}>Leave happy.</em>
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-8">
              More than just coffee — Blend Align Cafe is your neighbourhood spot for everything crave-worthy. 
              From chilled mojitos to steaming momos, from cold coffee to molten lava cakes, 
              there's always something for your mood.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: "🍽️", label: "Dine-in available", sub: "Pull up a chair and stay a while" },
                { icon: "📦", label: "Takeaway & Delivery", sub: "Get your cravings delivered" },
                { icon: "📍", label: "Tiruvottiyur, Chennai", sub: "43, West Madam Street, Theradi" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-cream font-semibold text-sm">{item.label}</p>
                    <p className="text-cream/40 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary" id="story-learn-more">
              Our Story →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
