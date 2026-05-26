"use client";
import { useEffect } from "react";

export default function TermsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col animate-scale-in">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-900">Terms & Conditions</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 prose prose-slate max-w-none">
          <div className="text-slate-600 space-y-8">
            <section>
              <p className="font-medium text-slate-900 leading-relaxed">
                Governing the use of CloudLens AI cloud assessment, billing analytics, and AI-driven reporting services applicable to all System Integrators and End Customers operating on the platform.
              </p>
              <p className="mt-4 leading-relaxed">
                CloudLens AI is designed with one principle at its core: give technology and business leaders the clarity they need to make better decisions about their cloud investments quickly, accurately, and without complexity. These terms reflect that commitment. You retain full sovereignty over your data. We remain transparent about the scope and the boundaries of what our platform delivers. What follows is not boilerplate; it is a precise articulation of how we operate and what you can expect from us.
              </p>
            </section>

            <hr className="border-slate-100" />

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">01. SCOPE & DISCLAIMER</h3>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800">What this assessment tells you — and what it does not</h4>
                <p>
                  CloudLens AI analyses your AWS billing data to surface security signals and cost optimization opportunities. When an AWS service registers no charges within a billing period, the platform flags it as likely inactive. This inference is a meaningful starting point for a security conversation it is not a verified determination of your security posture.
                </p>
                <p>
                  Cost savings projections presented in every report are benchmarked against anonymized industry usage patterns. Actual outcomes will differ based on your workload architecture, organizational priorities, and the sequencing of remediation efforts. These figures should inform your planning not replace a detailed architectural review.
                </p>
                <p>
                  Organizations requiring a certified security assessment, formal penetration test, or regulatory audit should engage a qualified Cloud Solutions Architect or Certified Security Specialist in conjunction with this report.
                </p>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-6">
                  <span className="font-bold text-amber-800 block mb-1">IMPORTANT NOTICE</span>
                  <p className="text-amber-900 text-sm">
                    The findings in every CloudLens AI report are derived from AWS billing signals, not from direct infrastructure inspection. Treat all security inferences and cost projections as directional inputs to your decision-making, not as certified conclusions.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h5 className="font-bold text-slate-800 text-xs uppercase tracking-widest mb-3">WITHIN SCOPE</h5>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Service adoption signals from billing line items</li>
                      <li>Resource-level spend distribution</li>
                      <li>Cost optimization benchmarking against industry patterns</li>
                      <li>Directional security posture indicators</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-xs uppercase tracking-widest mb-3">OUTSIDE SCOPE</h5>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Penetration testing or live vulnerability scanning</li>
                      <li>Certified compliance audit</li>
                      <li>PII-based identity analysis</li>
                      <li>Real-time infrastructure inspection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">02. STORAGE & DATA LIFECYCLE</h3>
              <h4 className="font-bold text-slate-800 mb-2">Encrypted at rest. Deleted entirely on your instructions.</h4>
              <p>
                AWS Bill Summary files that are processed through CloudLens AI the AWS services and resources signals are stored exclusively in Amazon RDS database engine and encrypted at rest using AES-256 encryption, with key management delegated to AWS Key Management Service (KMS) using customer-managed keys (CMK). All data in transit is protected under TLS 1.2 or higher.
              </p>
              <p className="mt-4">
                No assessment data is processed, cached, or stored unencrypted within an AWS Region. CloudLens AI does not maintain secondary copies, analytical derivatives, or training datasets from customer billing summary files.
              </p>
              <p className="mt-4">
                Data lifecycle control rests entirely with the customer. When files are removed via the CloudLens AI Assessment page, deletion is permanent and immediate. There are no retention windows, no soft-delete recoveries, and no vendor-held copies after customer-initiated removal.
              </p>
            </section>

            <hr className="border-slate-100" />

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">03. AI ANALYSIS BOUNDARIES</h3>
              <h4 className="font-bold text-slate-800 mb-2">The AI engine sees service signals never people</h4>
              <p>
                CloudLens AI's analysis pipeline operates exclusively on AWS service-level and resource-level signals extracted from billing data. The AI engine ingests usage patterns, spend distribution, and adoption indicators. It does not process, store, or transmit any information that could identify an individual or a specific account.
              </p>
              <p className="mt-4">
                The following data categories are explicitly and permanently excluded from the AI processing pipeline, regardless of their presence in submitted billing files. This exclusion is enforced at the data ingestion layer it is an architectural constraint, not a policy preference.
              </p>
              <p className="mt-4 italic">
                CloudLens AI does not use customer billing data to train, fine-tune, or improve any AI model. Assessment outputs are generated solely for the benefit of the submitting customer and are not used for any secondary analytical purpose without explicit written consent.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mt-8">
                <div className="p-5 rounded-xl bg-purple-50 border border-purple-100">
                  <h5 className="font-bold text-purple-900 text-xs uppercase tracking-widest mb-3">PROCESSED BY AI ENGINE</h5>
                  <ul className="list-disc pl-4 text-sm text-purple-900 space-y-1">
                    <li>AWS service adoption signals</li>
                    <li>Resource-level spend distribution</li>
                    <li>Usage pattern indicators</li>
                    <li>Service configuration signals</li>
                    <li>Cost benchmark comparisons</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-slate-600 text-xs uppercase tracking-widest mb-3">EXCLUDED FROM ALL AI PROCESSING</h5>
                  <ul className="list-disc pl-4 text-sm text-slate-500 space-y-1">
                    <li>Customer name and trading entity</li>
                    <li>Customer billing address</li>
                    <li>AWS Account ID</li>
                    <li>AWS Invoice ID</li>
                    <li>Any field constituting personal data</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">04. DEPLOYMENT RESPONSIBILITY</h3>
              <h4 className="font-bold text-slate-800 mb-2">Assessment intelligence is not a deployment instruction</h4>
              <p>
                CloudLens AI delivers data-driven recommendations on cost optimization, security posture, and resource rightsizing based on an analysis of your AWS billing profile. These recommendations are starting points for informed architectural decisions. They are not pre-validated change orders ready for immediate execution.
              </p>
              <p className="mt-4">
                Every customer regardless of internal cloud expertise carries the responsibility to engage a qualified Service Provider, Cloud Solutions Architect, or certified AWS Expert before translating any platform recommendation into a live environment change. This step is not optional. It exists because billing-signal analysis, by design, cannot account for workload interdependencies, availability requirements, compliance controls, or the operational nuances visible only to someone who understands your full architecture.
              </p>
              
              <div className="bg-purple-900 text-white p-6 rounded-xl mt-8 shadow-lg shadow-purple-200">
                <span className="font-bold text-sm uppercase tracking-widest block mb-2 opacity-80">MANDATORY PRE-DEPLOYMENT REQUIREMENT</span>
                <p className="text-lg font-medium leading-normal">
                  No recommendation generated by CloudLens AI should be applied directly to a production environment without prior consultation with a qualified Service Provider, Cloud Solutions Architect, or certified AWS Expert.
                </p>
              </div>

              <div className="mt-10">
                <h4 className="font-bold text-slate-800 mb-6">Customer Responsibilities & Advisory Engagement Requirements</h4>
                <div className="space-y-6">
                  {[
                    {
                      q: "Before Acting on Any Recommendation",
                      a: "The Customer shall initiate appropriate consultation to validate findings against its live environment, architecture dependencies, operational workflows, and overall business context."
                    },
                    {
                      q: "Before Any Infrastructure Change",
                      a: "The Customer is advised to obtain formal review and approval from a qualified Cloud Solutions Architect to ensure that proposed infrastructure changes are appropriately assessed and reversible."
                    },
                    {
                      q: "Before Any Security Policy Change",
                      a: "The Customer shall engage its designated Security Specialist or CISO office to validate alignment with applicable compliance, governance, and risk management requirements."
                    },
                    {
                      q: "Before Any Cost Optimization Action",
                      a: "The Customer shall independently verify operational impact, workload dependencies, and SLAs through its authorized FinOps stakeholders."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-2 border-slate-200 pl-4 py-2 hover:border-purple-300 transition-colors">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.q}</div>
                      <div className="text-sm text-slate-600 leading-relaxed font-medium">{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">05. PLATFORM POSITION</h3>
              <p>
                CloudLens AI provides assessment intelligence. It does not design, architect, or execute infrastructure changes on your behalf. The platform accepts no liability for outcomes arising from the direct application of report recommendations without professional expert review. Responsibility for all deployment decisions and their consequences rests with the customer and their appointed technical experts.
              </p>
            </section>

            <hr className="border-slate-100" />

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">06. ACCEPTANCE & AUTHORISATION</h3>
              <p>
                By initiating a CloudLens AI assessment, the Partners or End Customer confirm that they have read, understood, and accepted these Terms & Conditions in their entirety including the deployment responsibility obligations set out in Clause 04. These terms are binding on all users of the platform operating under the relevant account.
              </p>
            </section>

            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
              <div className="flex flex-col gap-2">
                <span>AWS-Native Infrastructure</span>
                <span className="text-slate-400">All data remains within AWS</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Zero PII in AI Pipeline</span>
                <span className="text-slate-400">Architectural enforcement</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Expert Review Required</span>
                <span className="text-slate-400">Before any live deployment</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Customer-Controlled Deletion</span>
                <span className="text-slate-400">Permanent, no vendor retention</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="btn-primary py-2 px-6"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
