import React, { useEffect, useRef, useState } from "react";
import A from "../assets/A.png";
import B from "../assets/B.png";
import C from "../assets/C.png";
import D from "../assets/D.png";
import E from "../assets/E.png";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

export default function SlideBody({
  images = [A, B, C, D, E],
  interval = 3000,
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
    <>
      <div className="flex flex-col items-center text-center bg-[#004d21] pt-8">
        <section
          className="relative overflow-hidden bg-[#004d21] flex justify-center items-center w-[950px]"
          onMouseEnter={() => (hoveringRef.current = true)}
          onMouseLeave={() => (hoveringRef.current = false)}
        >
          {/* Slides Container */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full flex justify-center items-center"
              >
                <img
                  src={src}
                  alt={`slide-${i + 1}`}
                  className="block max-w-full h-auto object-contain"
                  style={{ maxHeight: "650px" }} // ✅ จำกัดความสูงสูงสุด แต่ไม่บังคับอัตราส่วน
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
            <button
              onClick={prev}
              className="rounded-full bg-white/40 hover:bg-black/70 text-white px-4 py-2 text-sm transition"
            >
              <FaCircleArrowLeft size={20} />
            </button>
            <button
              onClick={next}
              className="rounded-full bg-white/40 hover:bg-black/70 text-white px-4 py-2 text-sm transition"
            >
              <FaCircleArrowRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
