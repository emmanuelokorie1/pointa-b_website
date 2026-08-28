import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#3B007A] overflow-y-auto px-6 py-12">
      {/* Main Container */}
      <div className="relative w-full max-w-lg bg-[#1a1028] border border-white/20 rounded-none p-8 md:p-12 flex flex-col items-center text-center z-10">
        
        {/* Massive 404 Title */}
        <h1 className="text-[7rem] md:text-[9rem] font-extrabold tracking-tighter leading-none text-[#D6FF38] select-none relative z-10">
          404
        </h1>

        {/* Floating lost package SVG */}
        <div className="relative w-32 h-20 mb-8 flex items-center justify-center">
          {/* Orbital path ring */}
          <svg className="absolute w-full h-full" viewBox="0 0 128 80">
            <ellipse cx="64" cy="40" rx="45" ry="12" fill="none" stroke="rgba(214,255,56,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="25" cy="34" r="2.5" fill="#ec4899" />
            <circle cx="103" cy="46" r="2" fill="#D6FF38" />
          </svg>

          {/* Package box container */}
          <div>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="transform rotate-[12deg] overflow-visible">
              <rect x="3" y="6" width="18" height="14" rx="0" fill="#D6FF38" />
              <rect x="2" y="3" width="20" height="4" rx="0" fill="#c6ef20" />
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
        <p className="text-white/80 text-sm leading-relaxed max-w-sm mb-10">
          It looks like this package drifted off course or the coordinate is missing from our live dispatch system. Let's get you back to point A!
        </p>

        {/* Action Button: Return back to safety */}
        <Link
          href="/"
          className="bg-gray-100 hover:bg-gray-200 text-[#3B007A] text-sm font-bold px-10 py-4 rounded-none group flex items-center gap-2"
        >
          <span>Return to Point A</span>
          <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
