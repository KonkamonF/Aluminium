import React, { useEffect, useRef, useState } from "react";
import A from "../assets/A.png";
import B from "../assets/B.png";
import C from "../assets/C.png";
import D from "../assets/D.png";
import E from "../assets/E.png";

export default function SlideBody({
  images = [A, B, C, D, E],
  interval = 2000,
  title = "Explore Russia",
  subtitle = "Caucasus Mountains",
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoveringRef = useRef(false);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!hoveringRef.current) next();
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [interval, images.length]);

  return (
    <section
      className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-black text-white"
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
    >
      {/* Slides */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-full shrink-0">
            <img
              src={src}
              alt={`slide-${i + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/0" />
          </div>
        ))}
      </div>

      {/* Text overlay (left) */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-10 flex items-end md:items-center">
        <div className="pb-12 md:pb-0">
          {/* <h1 className="font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            {title.split(" ").map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl text-white/90">
            Discover dramatic peaks, mirrored lakes, and wild horizons. Plan
            your next journey with curated tours.
          </p> */}
          <div className="flex mx-auto gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-white/60 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="rounded-full border border-white/60 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
