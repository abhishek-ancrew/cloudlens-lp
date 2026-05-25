"use client";
import { SITE } from "../data/site";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-28 px-4 relative overflow-hidden"
      style={{ background: "var(--surface-alt)" }}
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(147,51,234,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="section-divider" />
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
          Ready to see what's hiding in your AWS bills?
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Sign up for free and run your first assessment today. No credit card, no lock-in—
          just clarity.
        </p>

        {/* Email capture */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
        >
          <input
            type="email"
            placeholder="Work email address"
            required
            className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-slate-400 transition-shadow"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            {SITE.cta.waitlist}
          </button>
        </form>

        <p className="text-slate-400 text-sm">
          Or{" "}
          <a
            href={SITE.signupUrl}
            className="text-purple-600 font-medium hover:underline"
          >
            create your account now →
          </a>
        </p>

        {/* Contact */}
        <div className="mt-12 text-slate-400 text-sm">
          Have a question? Reach us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-slate-600 hover:text-purple-600 transition-colors"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
