"use client";
import { useEffect, useRef } from "react";

export default function CloudLensAnimation() {
  return (
    <div className="cl-anim-root" aria-hidden="true">
      <svg
        viewBox="0 0 520 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cl-anim-svg"
      >
        <defs>
          {/* Brand gradient */}
          <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>

          {/* Glow filter for lens */}
          <filter id="lensGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow for nodes */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Scan beam gradient */}
          <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          {/* Cloud gradient */}
          <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0f7ff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>

          {/* Clip path for lens inner area */}
          <clipPath id="lensClip">
            <circle cx="290" cy="220" r="102" />
          </clipPath>

          {/* Radial highlight inside lens */}
          <radialGradient id="lensHighlight" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* ── Background ring decorations ── */}
        <circle cx="260" cy="240" r="210" stroke="#e0eaff" strokeWidth="1" strokeDasharray="6 10" className="cl-ring-1" />
        <circle cx="260" cy="240" r="170" stroke="#dbeafe" strokeWidth="1" strokeDasharray="4 14" className="cl-ring-2" />

        {/* ── Cloud base shape ── */}
        {/* Main cloud body */}
        <g className="cl-cloud">
          <ellipse cx="230" cy="265" rx="130" ry="72" fill="url(#cloudGrad)" />
          {/* Bumps */}
          <circle cx="155" cy="250" r="52" fill="url(#cloudGrad)" />
          <circle cx="215" cy="225" r="64" fill="url(#cloudGrad)" />
          <circle cx="280" cy="235" r="56" fill="url(#cloudGrad)" />
          <circle cx="320" cy="255" r="44" fill="url(#cloudGrad)" />
          {/* Border stroke on cloud */}
          <ellipse cx="230" cy="265" rx="130" ry="72" fill="none" stroke="#bfdbfe" strokeWidth="1.5" />
          <circle cx="155" cy="250" r="52" fill="none" stroke="#bfdbfe" strokeWidth="1.5" />
          <circle cx="215" cy="225" r="64" fill="none" stroke="#bfdbfe" strokeWidth="1.5" />
          <circle cx="280" cy="235" r="56" fill="none" stroke="#bfdbfe" strokeWidth="1.5" />
          <circle cx="320" cy="255" r="44" fill="none" stroke="#bfdbfe" strokeWidth="1.5" />
        </g>

        {/* ── Data nodes inside cloud ── */}
        {/* These represent "findings" / data points inside the cloud */}
        <g clipPath="url(#lensClip)" className="cl-data-nodes">
          {/* Grid-like data lines */}
          <line x1="190" y1="200" x2="370" y2="200" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="190" y1="220" x2="370" y2="220" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="190" y1="240" x2="370" y2="240" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="190" y1="260" x2="370" y2="260" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="230" y1="180" x2="230" y2="310" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="260" y1="180" x2="260" y2="310" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="290" y1="180" x2="290" y2="310" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="320" y1="180" x2="320" y2="310" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 6" />

          {/* Data points — red = critical */}
          <circle cx="230" cy="200" r="5" fill="#ef4444" filter="url(#nodeGlow)" className="cl-node-pulse" />
          <circle cx="260" cy="240" r="5" fill="#f59e0b" filter="url(#nodeGlow)" className="cl-node-pulse cl-node-delay-1" />
          <circle cx="290" cy="220" r="5" fill="#10b981" filter="url(#nodeGlow)" className="cl-node-pulse cl-node-delay-2" />
          <circle cx="320" cy="260" r="5" fill="#ef4444" filter="url(#nodeGlow)" className="cl-node-pulse cl-node-delay-3" />
          <circle cx="250" cy="255" r="4" fill="#2563eb" filter="url(#nodeGlow)" className="cl-node-pulse cl-node-delay-2" />
          <circle cx="310" cy="235" r="4" fill="#f59e0b" filter="url(#nodeGlow)" className="cl-node-pulse cl-node-delay-1" />
        </g>

        {/* ── Scanning beam (sweeps vertically, clipped to lens) ── */}
        <g clipPath="url(#lensClip)">
          <rect x="188" y="118" width="204" height="60" fill="url(#scanGrad)" className="cl-scan-beam" />
        </g>

        {/* ── Lens circle ── */}
        <circle
          cx="290"
          cy="220"
          r="102"
          stroke="url(#brandGrad)"
          strokeWidth="3"
          fill="url(#lensHighlight)"
          fillOpacity="0.15"
          filter="url(#lensGlow)"
          className="cl-lens-ring"
        />

        {/* Lens inner highlight arc */}
        <path
          d="M 225 148 A 80 80 0 0 1 340 165"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* ── Magnifier handle ── */}
        <line
          x1="368"
          y1="298"
          x2="420"
          y2="355"
          stroke="url(#brandGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          className="cl-handle"
        />
        {/* Handle cap shine */}
        <line
          x1="370"
          y1="300"
          x2="395"
          y2="326"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* ── Floating insight badges outside lens ── */}
        {/* Badge 1 — Cost */}
        <g className="cl-badge cl-badge-1">
          <rect x="42" y="148" width="118" height="44" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.5" filter="url(#lensGlow)" />
          <circle cx="62" cy="170" r="10" fill="#dbeafe" />
          <text x="62" y="174" textAnchor="middle" fontSize="10" fill="#2563eb" fontWeight="bold">$</text>
          <text x="82" y="165" fontSize="9" fill="#64748b" fontWeight="600">Cost Score</text>
          <text x="82" y="179" fontSize="11" fill="#ef4444" fontWeight="800">61 / 100</text>
        </g>

        {/* Badge 2 — Security */}
        <g className="cl-badge cl-badge-2">
          <rect x="360" y="92" width="128" height="44" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.5" filter="url(#lensGlow)" />
          <circle cx="380" cy="114" r="10" fill="#dbeafe" />
          <text x="380" y="118" textAnchor="middle" fontSize="10" fill="#2563eb" fontWeight="bold">🔒</text>
          <text x="400" y="109" fontSize="9" fill="#64748b" fontWeight="600">Security</text>
          <text x="400" y="123" fontSize="11" fill="#f59e0b" fontWeight="800">74 / 100</text>
        </g>

        {/* Badge 3 — Savings */}
        <g className="cl-badge cl-badge-3">
          <rect x="50" y="310" width="128" height="44" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.5" filter="url(#lensGlow)" />
          <circle cx="70" cy="332" r="10" fill="#d1fae5" />
          <text x="70" y="336" textAnchor="middle" fontSize="10" fill="#10b981" fontWeight="bold">↓</text>
          <text x="90" y="327" fontSize="9" fill="#64748b" fontWeight="600">Savings Est.</text>
          <text x="90" y="341" fontSize="11" fill="#10b981" fontWeight="800">43% Found</text>
        </g>

        {/* Badge 4 — Findings */}
        <g className="cl-badge cl-badge-4">
          <rect x="345" y="340" width="128" height="44" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.5" filter="url(#lensGlow)" />
          <circle cx="365" cy="362" r="10" fill="#ede9fe" />
          <text x="365" y="366" textAnchor="middle" fontSize="10" fill="#7c3aed" fontWeight="bold">!</text>
          <text x="385" y="357" fontSize="9" fill="#64748b" fontWeight="600">Findings</text>
          <text x="385" y="371" fontSize="11" fill="#7c3aed" fontWeight="800">18 Issues</text>
        </g>

        {/* ── Connector lines from badges to lens ── */}
        <line x1="160" y1="170" x2="206" y2="205" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="360" y1="114" x2="348" y2="157" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="178" y1="310" x2="225" y2="278" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="345" y1="362" x2="352" y2="310" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="3 5" />

        {/* ── Animated particles orbiting the lens ── */}
        <circle r="3" fill="#2563eb" opacity="0.7" filter="url(#nodeGlow)">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#lensOrbit" />
          </animateMotion>
        </circle>
        <circle r="2.5" fill="#60a5fa" opacity="0.6" filter="url(#nodeGlow)">
          <animateMotion dur="6s" begin="-2s" repeatCount="indefinite">
            <mpath href="#lensOrbit" />
          </animateMotion>
        </circle>
        <circle r="2" fill="#93c5fd" opacity="0.5" filter="url(#nodeGlow)">
          <animateMotion dur="6s" begin="-4s" repeatCount="indefinite">
            <mpath href="#lensOrbit" />
          </animateMotion>
        </circle>

        {/* Orbit path (hidden) */}
        <path
          id="lensOrbit"
          d="M 290 118 A 102 102 0 1 1 289.9 118"
          fill="none"
          stroke="none"
        />
      </svg>
    </div>
  );
}
