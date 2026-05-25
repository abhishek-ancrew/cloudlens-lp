import { SITE, FOOTER_LINKS, NAV_LINKS } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-white px-4 py-14">
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
                    className="text-sm text-slate-500 hover:text-purple-600 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
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
