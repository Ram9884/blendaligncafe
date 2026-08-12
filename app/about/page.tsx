import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Blend Align Cafe — Tiruvottiyur, Chennai",
  description:
    "Learn about Blend Align Cafe — your neighbourhood cafe in Tiruvottiyur, Chennai serving coffee, momos, mojitos, pasta and more.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="pt-32 pb-20"
        style={{ background: "linear-gradient(180deg, #24150F 0%, #3d2518 100%)" }}
      >
        <div className="container-site text-center">
          <p className="eyebrow mb-4" style={{ color: "#E9A15B" }}>Our Story</p>
          <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">
            About Blend Align
          </h1>
          <p className="text-cream/50 text-lg max-w-lg mx-auto">
            A neighbourhood cafe built for real everyday cravings.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-pad bg-cream">
        <div className="container-site max-w-4xl mx-auto">
          {/* Image + intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/cafe-story.png"
                alt="Blend Align Cafe interior"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-espresso mb-5">
                Your go-to spot in Tiruvottiyur
              </h2>
              <p className="text-dark/60 leading-relaxed mb-5">
                Blend Align Cafe is your neighbourhood cafe in the heart of Tiruvottiyur, Chennai. 
                We serve a curated menu of cold coffees, mojitos, steamed momos, pasta, milkshakes, 
                and more — all made to satisfy your cravings without burning a hole in your pocket.
              </p>
              <p className="text-dark/60 leading-relaxed">
                Whether you're stopping by for a quick bite or settling in for a relaxed afternoon, 
                Blend Align has a seat and a dish for you. Dine-in, takeaway, or delivery — 
                we've got you covered.
              </p>
            </div>
          </div>

          {/* Facts grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: "⭐", value: `${BUSINESS.rating.score}`, label: "Google Rating" },
              { icon: "₹", value: "1–200", label: "Approx. per person" },
              { icon: "🍽️", value: "3", label: "Ways to eat (dine/take/deliver)" },
              { icon: "📍", value: "Tiruvottiyur", label: "Chennai" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 text-center"
                style={{ background: "white", boxShadow: "0 2px 16px rgba(36,21,15,0.06)" }}
              >
                <span className="text-3xl block mb-2">{stat.icon}</span>
                <p className="font-heading text-xl font-bold text-espresso">{stat.value}</p>
                <p className="text-xs text-dark/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/menu" className="btn-primary text-base px-8">
              Explore Our Menu →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
