"use client";

import React, { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console
    console.error("Root Error boundary caught exception:", error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#3B007A] bg-gradient-to-br from-[#270054] via-[#3B007A] to-[#5100A8] overflow-y-auto px-6 py-12">
      {/* Background glowing caution dots */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-pink-600/15 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Glass Container */}
      <div className="relative w-full max-w-lg bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center shadow-2xl shadow-black/40 z-10 animate-fade-blur-in">
        
        {/* Animated Caution Box Logo */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          {/* Pulsing warning aura */}
          <div className="absolute inset-0 rounded-full border border-red-500/20 animate-ping duration-[3s]"></div>
          <div className="absolute w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
            
            {/* Caution/Broken Box SVG */}
            <svg className="w-10 h-10 stroke-red-400 stroke-2 fill-none animate-bounce duration-[1.5s]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="8.01" strokeWidth="3" strokeLinecap="round" />
              <line x1="12" y1="12" x2="12" y2="14" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        {/* Text Copy */}
        <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
          Delivery Interrupted
        </h1>
        <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm mb-8">
          We encountered an unexpected hurdle mapping your request. Let's redirect you back onto the correct track.
        </p>

        {/* Buttons Grid */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          {/* Action Retry button */}
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-[#D6FF38] hover:bg-[#c6ef20] text-[#3B007A] text-sm font-bold px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-purple-950/20"
          >
            Try Again
          </button>
          
          {/* Secondary Action: Go Home */}
          <button
            onClick={() => window.location.href = "/"}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white text-sm font-bold px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 active:scale-95 transition-all duration-300"
          >
            Go Home
          </button>
        </div>

        {/* Technical logs drawer for developer insights */}
        <details className="w-full mt-8 text-left group">
          <summary className="text-white/40 group-open:text-white/60 hover:text-white/70 text-xs font-bold uppercase tracking-wider cursor-pointer list-none flex items-center justify-center gap-1.5 select-none transition-colors">
            <span>Show Diagnostic Details</span>
            <svg className="w-3.5 h-3.5 transform group-open:rotate-180 transition-transform duration-300 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </summary>
          <div className="mt-4 p-4 rounded-2xl bg-black/45 border border-white/5 text-xs text-red-300/80 font-mono overflow-auto max-h-40 leading-relaxed scrollbar-thin">
            <span className="text-red-400 font-bold block mb-1">Exception Caught:</span>
            {error.message || "Unknown error boundary caught exception."}
            {error.digest && (
              <span className="text-white/30 block mt-2">Digest ID: {error.digest}</span>
            )}
          </div>
        </details>

      </div>
    </div>
  );
}
