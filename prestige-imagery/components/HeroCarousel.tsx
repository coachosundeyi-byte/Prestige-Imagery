"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: "/assets/images/img-6.jpg",
    title: "Timeless Memories",
    subtitle: "Capturing your most precious moments with elegance and artistry",
  },
  {
    image: "/assets/images/img-5.jpg",
    title: "Weddings & Celebrations",
    subtitle: "Where love stories come alive through our lens",
  },
  {
    image: "/assets/images/family.jpg",
    title: "Family Moments",
    subtitle: "Preserving the laughter, warmth, and connection forever",
  },
  {
    image: "/assets/images/img-3.jpg",
    title: "Professional Portraits",
    subtitle: "Elegance and confidence, captured perfectly",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`carousel-slide${i === current ? " active" : ""}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="carousel-overlay" />
          <div className="carousel-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div>
              <Link href="/gallery" className="carousel-btn">
                View Portfolio
              </Link>
              <Link href="/book" className="carousel-btn">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Next button */}
      <button className="carousel-next-btn" onClick={next} aria-label="Next slide">
        &#8250;
      </button>

      {/* Indicators */}
      <div className="carousel-indicators-custom">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
