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
    <nav className="bg-[#004d21] text-amber-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-wide md:hidden">
          PONGCHAROEN
        </span>

        {/* Desktop pill menu */}
        <div className="hidden md:flex w-full justify-center">
          <div className="flex border-2 border-amber-600 rounded-full overflow-hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-8 py-2 lg:px-12 hover:bg-amber-600 hover:text-white transition-colors first:rounded-l-full last:rounded-r-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-amber-600 hover:bg-amber-600 hover:text-white transition"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden px-4 pb-3 overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-2 border-amber-600 rounded-2xl bg-[#004d21] divide-y divide-amber-600/50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-4 py-3 hover:bg-amber-600 hover:text-white hover:font-semibold transition-colors"
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
