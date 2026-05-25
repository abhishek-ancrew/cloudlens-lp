import { STATS } from "../data/site";

export default function Stats() {
  return (
    <section className="py-16 border-y border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-1 tracking-tight">
                {s.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
