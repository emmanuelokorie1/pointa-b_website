import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#3B007A] bg-gradient-to-br from-[#270054] via-[#3B007A] to-[#5100A8] overflow-y-auto px-6 py-12">
      {/* Dynamic drifting cosmic radial glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-primary/15 blur-[120px] rounded-full pointer-events-none animate-pulse duration-[10s]"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse duration-[8s]"></div>
      
      {/* Floating starry dust background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

      {/* Main Glassmorphic Container */}
      <div className="relative w-full max-w-lg bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center text-center shadow-2xl shadow-black/40 z-10 animate-fade-blur-in">
        
        {/* Massive 404 Title */}
        <h1 className="text-[7rem] md:text-[9rem] font-extrabold tracking-tighter leading-none bg-gradient-to-br from-white via-white/80 to-[#D6FF38] bg-clip-text text-transparent select-none relative z-10">
          404
        </h1>

        {/* Floating lost package SVG animation */}
        <div className="relative w-32 h-20 mb-8 flex items-center justify-center">
          {/* Orbital path ring */}
          <svg className="absolute w-full h-full animate-spin" style={{ animationDuration: '12s' }} viewBox="0 0 128 80">
            <ellipse cx="64" cy="40" rx="45" ry="12" fill="none" stroke="rgba(214,255,56,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="25" cy="34" r="2.5" fill="#ec4899" />
            <circle cx="103" cy="46" r="2" fill="hsl(var(--primary))" />
          </svg>

          {/* Floating package box container */}
          <div className="animate-bounce" style={{ animationDuration: '3.5s' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="transform rotate-[12deg] overflow-visible">
              <rect x="3" y="6" width="18" height="14" rx="3" fill="#D6FF38" />
              <rect x="2" y="3" width="20" height="4" rx="1.5" fill="#c6ef20" />
              <line x1="12" y1="3" x2="12" y2="20" stroke="#8fb010" strokeWidth="2" />
              {/* Lost Question Mark Icon */}
              <text x="9.5" y="16" fill="#3B007A" fontSize="10" fontWeight="bold" fontFamily="sans-serif">?</text>
            </svg>
          </div>
        </div>

        {/* Text descriptions */}
        <h2 className="text-white text-xl md:text-2xl font-extrabold tracking-tight mb-3">
          Address Not Found
        </h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-10">
          It looks like this package drifted off course or the coordinate is missing from our live dispatch system. Let's get you back to point A!
        </p>

        {/* Action Button: Return back to safety */}
        <Link
          href="/"
          className="bg-white hover:bg-white/95 text-[#3B007A] text-sm font-bold px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-purple-950/20 group flex items-center gap-2"
        >
          <span>Return to Point A</span>
          <svg className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </Link>

      </div>
    </div>
  );
}
