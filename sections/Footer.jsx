"use client";
import { useState } from "react";
import { SITE, FOOTER_LINKS, NAV_LINKS } from "../data/site";
import TermsModal from "../components/TermsModal";

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    if (href === "#terms") {
      e.preventDefault();
      setIsTermsOpen(true);
    }
  };

  return (
    <footer className="border-t border-purple-100 bg-white px-4 py-14">
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand — actual logo */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt={SITE.name} className="h-8 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {SITE.tagline} We turn complex AWS billing data into clear, actionable assessments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-purple-600 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Legal
            </div>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={(e) => handleLinkClick(e, l.href)}
                    className="text-sm text-slate-500 hover:text-purple-600 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Contact Us
            </div>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Have a question or need a custom assessment? Reach out to our team.
            </p>
            <a 
              href={`mailto:${SITE.email}`}
              className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-purple-100 pt-8 gap-4">
          <p className="text-sm text-slate-400">
            © {SITE.year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built with privacy first. Your data is never sold or shared.
          </p>
        </div>
      </div>
    </footer>
  );
}
