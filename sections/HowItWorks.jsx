import { HOW_IT_WORKS, SITE } from "../data/site";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28 px-4"
      style={{ background: "var(--surface-alt)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            From bill to insight in 4 steps.
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            No complicated setup. No integrations. Just upload and go.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector */}
              {i < HOW_IT_WORKS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-50%] h-px"
                  style={{ background: "linear-gradient(90deg, var(--border-strong), transparent)" }}
                />
              )}
              <div className="card-lift bg-white rounded-2xl p-7 border border-slate-100 h-full">
                {/* Step number */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold mb-5"
                  style={{
                    background: "var(--brand)",
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
                  }}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="text-center mt-14">
          <a href={SITE.signupUrl} className="btn-primary inline-flex">
            Start your first assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
