import { SITE } from "../data/site";
import CloudLensAnimation from "../components/CloudLensAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-24 px-4 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 70% 30%, rgba(147,51,234,0.09) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large ambient orb — right side behind animation */}
      <div
        aria-hidden
        className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none float"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-left lg:max-w-[52%]">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full inline-block" />
              Cloud Assessment Platform
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6">
              Your AWS bills are{" "}
              <span className="text-shimmer">hiding secrets.</span>
              <br />
              We find them.
            </h1>

            {/* Subtext */}
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-10">
              {SITE.description} Upload your bills, run an assessment, and get a
              board-ready report—in minutes, not weeks.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
              <a href={SITE.signupUrl} className="btn-primary">
                {SITE.cta.primary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-ghost">
                {SITE.cta.secondary}
              </a>
            </div>

            {/* Trust signals */}
            <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400 font-medium">
              {[
                "No credit card required",
                "Zero sensitive data stored",
                "Expert consultancy included",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: CloudLens Animation ── */}
          {/* Hidden on mobile via CSS (.cl-anim-root) */}
          <div className="flex-1 lg:max-w-[48%] w-full flex items-center justify-center">
            <CloudLensAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
