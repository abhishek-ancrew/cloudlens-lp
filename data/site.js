// ============================================================
// CloudLensAI — Site Data
// All text, links, and config live here. Edit freely.
// ============================================================

export const SITE = {
  name: "CloudLensAI",
  tagline: "Cloud Assessments, Reimagined.",
  description:
    "Upload your AWS bills. We find what's costing you—and what's exposing you. Zero guesswork, full clarity.",
  url: "https://cloudlensai.com",
  email: "hello@cloudlensai.com",
  year: 2026,

  // CTA button labels
  cta: {
    primary: "Get Started Free",
    secondary: "See How It Works",
    waitlist: "Join the Waitlist",
  },

  // Auth / signup redirect
  signupUrl: "https://cloudlensai.com",
  loginUrl: "https://cloudlensai.com",
  icon: "/lens.svg",
};

export const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
];

export const RESOURCES_LINKS = [
  { name: "Blogs", href: "#" },
];

export const STATS = [
  { value: "40–50%", label: "Avg. cost savings identified" },
  { value: "99.9%", label: "Extraction accuracy" },
  { value: "0", label: "Sensitive data retained" },
  { value: "24 h", label: "Assessment turnaround" },
];

export const FEATURES = [
  {
    icon: "🔍",
    title: "Deep Security Scanning",
    description:
      "We surface misconfigurations and access loopholes that slip past standard reviews—classified as Critical, High, Medium, or Low so you know exactly where to act first.",
  },
  {
    icon: "💰",
    title: "Cost Optimization Engine",
    description:
      "Identify idle resources, oversized instances, and billing anomalies. Our engine consistently uncovers 40–50% in potential savings per assessment.",
  },
  {
    icon: "📄",
    title: "Instant PDF & Email Reports",
    description:
      "Generate polished, decision-maker-ready reports in one click. Send directly via email—no formatting, no copy-paste, no extra steps.",
  },
  {
    icon: "🤝",
    title: "Expert Consultancy",
    description:
      "Every assessment comes with directional guidance. We advise obtaining formal review from a Cloud Solutions Architect before production deployments.",
  },
  {
    icon: "🗂️",
    title: "Assessment History",
    description:
      "All your past assessments and bill summaries are archived. Revisit any report, track improvement over time, and compare assessments side-by-side.",
  },
  {
    icon: "🔒",
    title: "Privacy by Design",
    description:
      "We extract only what's needed for the assessment. AWS account IDs and personally identifiable billing data are never stored on our servers.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Sign Up",
    description:
      "Create your account with your email, organisation name, and role. Takes under two minutes.",
  },
  {
    step: "02",
    title: "Upload AWS Bills",
    description:
      "Upload 3–6 AWS bill summaries or select from previously processed ones. We extract only the metrics we need.",
  },
  {
    step: "03",
    title: "Run Assessment",
    description:
      "Select your bills and hit Run. Our engine analyses cost patterns and security posture across all uploads.",
  },
  {
    step: "04",
    title: "Review & Act",
    description:
      "Get a scored report with findings, recommendations, and a technical deep-dive. Export to PDF or send it over email.",
  },
];

export const PRIVACY_POINTS = [
  {
    title: "No PII in AI Pipeline",
    body: "AWS account IDs and personally identifiable billing data are architecturally excluded from all AI processing. Our engine sees service signals, never people.",
  },
  {
    title: "AES-256 KMS Encryption",
    body: "Service signals are stored in Amazon RDS and encrypted at rest using AES-256, with key management delegated to AWS KMS.",
  },
  {
    title: "Customer-Owned Lifecycle",
    body: "Delete your assessment and every associated record is permanently purged from our RDS instances within 24 hours. No vendor retention.",
  },
];

export const FOOTER_LINKS = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms & Conditions", href: "#terms" },
  { name: "Contact", href: "mailto:hello@cloudlensai.com" },
];
