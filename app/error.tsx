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
    <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#3B007A] overflow-y-auto px-6 py-12 font-sans">
      {/* Main Container */}
      <div className="relative w-full max-w-lg bg-[#1a1028] border border-white/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center text-center z-10">
        
        {/* Caution Box Logo */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30">
            {/* Caution/Broken Box SVG - using primary color */}
            <svg className="w-10 h-10 stroke-red-400 stroke-2 fill-none" viewBox="0 0 24 24" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="8.01" strokeWidth="3" />
              <line x1="12" y1="12" x2="12" y2="14" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        {/* Text Copy */}
        <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
          Delivery Interrupted
        </h1>
        <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm mb-10 font-medium">
          We encountered an unexpected hurdle mapping your request. Let's redirect you back onto the correct track.
        </p>

        {/* Buttons Grid */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          {/* Action Retry button */}
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-[#D6FF38] hover:bg-[#c6ef20] text-[#3B007A] text-sm font-bold px-8 py-4 rounded-full transition-colors"
          >
            Try Again
          </button>
          
          {/* Secondary Action: Go Home */}
          <button
            onClick={() => window.location.href = "/"}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white text-sm font-bold px-8 py-4 rounded-full border border-white/20 transition-colors"
          >
            Go Home
          </button>
        </div>

        {/* Technical logs drawer for developer insights */}
        <details className="w-full mt-10 text-left group">
          <summary className="text-white/40 hover:text-white/70 text-xs font-bold uppercase tracking-wider cursor-pointer list-none flex items-center justify-center gap-1.5 select-none transition-colors">
            <span>Show Diagnostic Details</span>
            <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </summary>
          <div className="mt-4 p-5 rounded-2xl bg-black border border-white/20 text-xs text-red-300 font-mono overflow-auto max-h-40 leading-relaxed">
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
