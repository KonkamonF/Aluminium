import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "Service", href: "#service" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#004d21] text-white sticky top-0 z-50 pb-1">
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
        <span className="font-semibold tracking-wide md:hidden text-white">
          PONGCHAROEN
        </span>

        {/* Desktop pill menu */}
        <div className="hidden md:flex w-full justify-center">
          <div className="flex border-2 border-white rounded-full overflow-hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-8 py-2 lg:px-24 hover:bg-white hover:text-amber-600 transition-colors first:rounded-l-full last:rounded-r-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-full border-2 border-white hover:bg-white hover:text-amber-600 transition"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden px-4 text-center overflow-hidden transition-[max-height] duration-100 ${
          open ? "max-h-52" : "max-h-0"
        }`}
      >
        <div className="border-2 border-white rounded-3xl bg-[#004d21] divide-y divide-white ">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-4 py-3 hover:text-amber-600 hover:font-bold transition-color hover:bg-white hover:rounded-2xl"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
