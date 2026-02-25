"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero-slide-6.webp", alt: "ERIXMN.com luxury transportation", isLogo: false },
  { src: "/images/hero-slide-8.webp", alt: "Erix Coach Cadillac Escalade SUV", isLogo: false },
  { src: "/images/hero-slide-1.webp", alt: "Erix Coach and Car Limo Service", isLogo: false },
  { src: "/images/hero-slide-3.webp", alt: "Erix Coach and Car black car service", isLogo: false },
  { src: "/images/hero-slide-4.webp", alt: "Professional limousine service Minneapolis", isLogo: false },
  { src: "/images/hero-slide-5.webp", alt: "Erix Coach - Driven to Succeed", isLogo: false },
  { src: "/images/hero-slide-2.webp", alt: "Erix Coach luxury SUV transportation", isLogo: false },
  { src: "/images/hero-slide-9.webp", alt: "Erix Coach LLC logo", isLogo: true },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    },
    [isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            slide.isLogo ? "bg-black" : ""
          }`}
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={slide.isLogo ? "object-contain p-16" : "object-cover"}
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
            quality={80}
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark to-transparent" />

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-gold"
                : "w-4 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
