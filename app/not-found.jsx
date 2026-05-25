import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background glow blobs */}
      <div
        aria-hidden
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(224,64,160,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 flex flex-col items-center text-center max-w-md w-full rounded-3xl border p-12"
        style={{
          background: "var(--surface-card)",
          borderColor: "var(--border-strong)",
          boxShadow: "var(--shadow-hover)",
        }}
      >
        {/* Logo */}
        <img src="/logo.png" alt="CloudLensAI" className="h-10 w-auto object-contain mb-8" />

        {/* 404 number */}
        <div
          className="text-8xl font-extrabold tracking-tighter mb-4 leading-none"
          style={{
            background: "var(--brand-gradient)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          Page not found
        </h1>
        <p className="text-slate-500 text-base leading-relaxed mb-10">
          Looks like this page went off into the cloud. The URL might be wrong or the page has moved.
        </p>

        <Link
          href="/"
          className="btn-primary w-full justify-center text-base"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Home
        </Link>
      </div>

      {/* Footer note */}
      <p className="relative z-10 mt-8 text-xs text-slate-400">
        CloudLensAI — Cloud Assessments, Reimagined.
      </p>
    </main>
  );
}
