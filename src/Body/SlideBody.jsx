import React, { useEffect, useRef, useState } from "react";

/**
 * AutoSlideHero
 * - Fully responsive image slider/hero
 * - Autoplays with smooth animation
 * - Pause on hover, resume on mouse leave
 * - Clickable dots & arrows
 * - Pure React + Tailwind (no external libs)
 *
 * Usage:
 * <AutoSlideHero images={["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"]} interval={4500} />
 */

export default function SlideBody({
  images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop",
  ],
  interval = 1000,
  title = "Explore Russia",
  subtitle = "Caucasus Mountains",
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoveringRef = useRef(false);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // autoplay logic
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!hoveringRef.current) next();
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [interval, images.length]);

  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black text-white"
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
    >
      {/* Slides track */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative w-full shrink-0">
            {/* background image */}
            <img
              src={src}
              alt={`slide-${i + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/0" />
          </div>
        ))}
      </div>

      {/* Content overlay (left) */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-10 flex items-end md:items-center">
        <div className="pb-10 md:pb-0">
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            {title.split(" ").map((word, idx) => (
              <span key={idx} className="block">
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl text-white/90">
            Discover dramatic peaks, mirrored lakes, and wild horizons. Plan your next journey with curated tours.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="rounded-full border border-white/60 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              Prev
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="rounded-full border border-white/60 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Foreground card (mimics the reference layout) */}
      <div className="pointer-events-none absolute right-4 md:right-12 bottom-10 md:bottom-16 w-[72%] sm:w-[60%] md:w-[42%] lg:w-[36%] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
        <img
          src={images[index]}
          alt="current"
          className="w-full h-full object-cover scale-100"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center justify-between text-sm md:text-base text-white/90">
            <span className="font-medium truncate">{subtitle}</span>
            <span className="opacity-70">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-2 w-2 rounded-full transition " +
              (i === index ? "bg-white" : "bg-white/50 hover:bg-white/80")
            }
          />
        ))}
      </div>
    </section>
  );
}
