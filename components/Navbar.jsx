"use client";
import { useState, useEffect } from "react";
import { SITE, NAV_LINKS } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo — actual logo.png from /public */}
          <a href="#home" className="flex items-center group">
            <img
              src="/logo.png"
              alt={SITE.name}
              className="h-9 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-purple-700 px-4 py-2 text-sm font-medium rounded-full hover:bg-purple-50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href={SITE.signupUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              {SITE.cta.primary}
              <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-slate-700 transition-all ${menuOpen ? "rotate-45 translate-y-1" : ""}`} style={{ marginBottom: "4px" }} />
            <div className={`w-5 h-0.5 bg-slate-700 transition-all ${menuOpen ? "opacity-0" : ""}`} style={{ marginBottom: "4px" }} />
            <div className={`w-5 h-0.5 bg-slate-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-purple-100 px-4 pb-5 pt-3 flex flex-col gap-1 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 hover:text-purple-700 px-3 py-2 text-sm font-medium rounded-lg hover:bg-purple-50 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={SITE.signupUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary mt-3 justify-center"
          >
            {SITE.cta.primary}
          </a>
        </div>
      )}
    </nav>
  );
}
