"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/business";

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Just show everything instantly
      [eyebrowRef, headlineRef, subRef, ctaRef, locationRef].forEach((r) => {
        if (r.current) r.current.style.opacity = "1";
      });
      return;
    }

    // anime.js dynamic import
    import("animejs").then(({ default: anime }) => {
      const tl = anime.timeline({ easing: "easeOutExpo" });

      tl.add({
        targets: eyebrowRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 200,
      })
        .add({
          targets: headlineRef.current,
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 900,
          delay: 100,
        })
        .add({
          targets: subRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 700,
          delay: 0,
        })
        .add({
          targets: ctaRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          delay: 0,
        })
        .add({
          targets: locationRef.current,
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 500,
          delay: 0,
        });
    });
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero"
      id="hero"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-cafe.png"
          alt="Blend Align Cafe interior"
          fill
          priority
          className="object-cover"
          style={{
            animation: "kenBurns 20s ease-in-out infinite alternate",
            transformOrigin: "center center",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(36,21,15,0.55) 0%, rgba(36,21,15,0.35) 40%, rgba(36,21,15,0.75) 100%)",
          }}
        />
        {/* Subtle warm vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(36,21,15,0.3) 100%)",
          }}
        />
      </div>

      {/* Subtle ambient particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 3) * 2}px`,
              height: `${4 + (i % 3) * 2}px`,
              background: "rgba(233, 161, 91, 0.15)",
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 15}%`,
              animation: `float ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-20 flex flex-col justify-center container-site"
        style={{ minHeight: "100svh", paddingTop: "6rem", paddingBottom: "4rem" }}
      >
        <div className="max-w-2xl">
          <div
            ref={eyebrowRef}
            className="eyebrow mb-5"
            style={{ opacity: 0, color: "#E9A15B" }}
          >
            BLEND ALIGN
          </div>

          <h1
            ref={headlineRef}
            className="font-heading text-cream mb-6 leading-none"
            style={{
              opacity: 0,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Where cravings<br />
            <em style={{ color: "#E9A15B", fontStyle: "italic" }}>meet their match.</em>
          </h1>

          <p
            ref={subRef}
            className="text-cream/80 text-lg md:text-xl mb-8 leading-relaxed max-w-lg"
            style={{ opacity: 0 }}
          >
            Coffee, coolers, momos, pasta & more —<br className="hidden md:block" />
            made for your everyday cravings.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-wrap gap-4 mb-10"
            style={{ opacity: 0 }}
          >
            <Link href="/menu" className="btn-primary text-base" id="hero-explore-menu">
              Explore Menu →
            </Link>
            <a
              href={BUSINESS.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base"
              id="hero-get-directions"
            >
              Get Directions ↗
            </a>
          </div>

          <div
            ref={locationRef}
            className="flex items-center gap-2 text-cream/60 text-sm"
            style={{ opacity: 0 }}
          >
            <span>📍</span>
            <span>{BUSINESS.address.short}</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(255,248,238,0.4))",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.15; }
          50% { transform: translateY(-20px); opacity: 0.35; }
        }
        @keyframes scrollLine {
          0%, 100% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </section>
  );
}
