import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#3B007A] bg-gradient-to-br from-[#270054] via-[#3B007A] to-[#5100A8] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/20 blur-[100px] rounded-full pointer-events-none animate-pulse duration-[8s]"></div>
      <div className="absolute top-1/3 left-1/3 w-[20rem] h-[20rem] bg-pink-500/10 blur-[80px] rounded-full pointer-events-none animate-pulse duration-[6s]"></div>
      
      {/* Core loader visual */}
      <div className="relative flex flex-col items-center space-y-8 z-10">
        
        {/* Animated Cargo Spinner */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Outer rotating loading dashes */}
          <div className="absolute inset-0 rounded-full border-4 border-white/5 border-t-[#D6FF38] animate-spin duration-1000 ease-in-out"></div>
          
          {/* Inner pulse ring */}
          <div className="absolute w-20 h-20 rounded-full border border-[#D6FF38]/20 animate-ping duration-[2s]"></div>
          
          {/* Central Logo Box - Bouncing inside */}
          <svg className="w-10 h-10 animate-bounce duration-[1.2s] ease-in-out" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="6" width="18" height="14" rx="3" fill="#D6FF38" />
            <rect x="2" y="3" width="20" height="4" rx="1.5" fill="#c6ef20" />
            <line x1="12" y1="3" x2="12" y2="20" stroke="#8fb010" strokeWidth="2" />
            <rect x="7" y="10" width="10" height="6" rx="1" fill="rgba(59,0,122,0.2)" />
          </svg>
        </div>

        {/* Loading text with animated letters */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-white text-lg font-bold tracking-wider uppercase font-sans flex items-center gap-1.5">
            Loading Experience
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6FF38] animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6FF38] animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6FF38] animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </span>
          </h2>
          <p className="text-white/60 text-xs font-medium tracking-wide">
            Preparing premium delivery paths...
          </p>
        </div>
      </div>
    </div>
  );
}
