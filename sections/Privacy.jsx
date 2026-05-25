import { SITE, PRIVACY_POINTS } from "../data/site";

export default function Privacy() {
  return (
    <section id="privacy" className="py-28 px-4" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight leading-tight">
              Your data stays yours. <br />
              <span style={{ color: "var(--brand)" }}>Always.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              We built {SITE.name} with a privacy-first architecture from day one.
              We extract only what's needed for the assessment, then stop there.
            </p>

            <div className="flex flex-col gap-5">
              {PRIVACY_POINTS.map((p, i) => (
                <div key={i} className="flex gap-4">
                  {/* Shield icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-blue-600"
                    style={{ background: "var(--brand-dim)" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-0.5">{p.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual block */}
          <div className="relative">
            <div
              className="rounded-2xl border border-slate-100 p-8"
              style={{
                background: "linear-gradient(135deg, var(--surface-alt) 0%, #eff6ff 100%)",
              }}
            >
              {/* Data flow diagram placeholder */}
              <div className="text-center mb-6">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  What we extract
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Service usage & costs", kept: true },
                  { label: "Resource type & region", kept: true },
                  { label: "Usage hours & patterns", kept: true },
                  { label: "AWS Account ID", kept: false },
                  { label: "Billing email & name", kept: false },
                  { label: "Payment method info", kept: false },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-white border border-slate-100"
                  >
                    <span className="text-sm text-slate-600">{row.label}</span>
                    {row.kept ? (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        Used for analysis
                      </span>
                    ) : (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 line-through">
                        Not stored
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
