import { SITE } from "../data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-24 px-4 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.09) 0%, transparent 70%)",
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Floating orb */}
      <div
        aria-hidden
        className="absolute top-32 right-[12%] w-72 h-72 rounded-full float"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block" />
            Cloud Assessment Platform
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6">
            Your AWS bills are{" "}
            <span className="text-shimmer">hiding secrets.</span>
            <br />
            We find them.
          </h1>

          {/* Sub */}
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            {SITE.description} Upload your bills, run an assessment, and get a
            board-ready report—in minutes, not weeks.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row justify-center gap-4 mb-16">
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

          {/* Social proof micro-strip */}
          <div className="animate-fade-up delay-400 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Zero sensitive data stored
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Expert consultancy included
            </span>
          </div>
        </div>

        {/* Hero visual — mock assessment card */}
        <div className="animate-scale-in delay-500 mt-20 max-w-3xl mx-auto">
          <div
            className="rounded-2xl border border-slate-200 overflow-hidden card-lift"
            style={{ background: "var(--surface-card)" }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 text-xs text-slate-400 font-mono">
                cloudlensai.com / assessment / Q2-2026
              </span>
            </div>
            {/* Mock scores */}
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Security Score", val: "74", color: "#f59e0b", desc: "3 critical" },
                { label: "Cost Score", val: "61", color: "#ef4444", desc: "Save ~$4.2k/mo" },
                { label: "Findings", val: "18", color: "#2563eb", desc: "Across 5 services" },
                { label: "Savings Est.", val: "43%", color: "#10b981", desc: "Identified" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4"
                  style={{ background: "var(--surface-alt)" }}
                >
                  <div
                    className="text-2xl font-extrabold mb-0.5"
                    style={{ color: s.color }}
                  >
                    {s.val}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mb-0.5">
                    {s.label}
                  </div>
                  <div className="text-xs text-slate-400">{s.desc}</div>
                </div>
              ))}
            </div>
            {/* Mock finding row */}
            <div className="px-6 pb-6 flex flex-col gap-2">
              {[
                { sev: "Critical", title: "Public S3 bucket with unrestricted access", badge: "bg-red-100 text-red-700" },
                { sev: "High", title: "IAM root account used without MFA", badge: "bg-orange-100 text-orange-700" },
                { sev: "Medium", title: "RDS instances running without encryption", badge: "bg-yellow-100 text-yellow-700" },
              ].map((f) => (
                <div
                  key={f.sev}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 border border-slate-100 bg-white hover:border-blue-200 transition-colors"
                >
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${f.badge}`}>
                    {f.sev}
                  </span>
                  <span className="text-sm text-slate-600 truncate">{f.title}</span>
                  <svg className="w-4 h-4 text-slate-300 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
