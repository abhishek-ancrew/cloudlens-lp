import { FEATURES } from "../data/site";

export default function Features() {
  return (
    <section id="features" className="py-28 px-4" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Everything you need to make the right call.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            From raw AWS bills to board-ready insights—we handle the heavy lifting.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="card-lift bg-white rounded-2xl p-7 border border-slate-100 group relative overflow-hidden"
            >
              {/* Hover accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 0% 0%, rgba(37,99,235,0.05) 0%, transparent 60%)",
                }}
              />
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "var(--brand-dim)" }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
