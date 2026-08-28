"use client";

import React from 'react';
import Link from 'next/link';
import { Paintbrush, Sparkles, ArrowLeft } from 'lucide-react';

interface OngoingDesignProps {
  pageName: string;
}

export default function OngoingDesign({ pageName }: OngoingDesignProps) {
  return (
    <div className="relative min-h-screen bg-[#F4F4F5] text-[#120024] flex flex-col justify-center items-center overflow-hidden px-6">
      
      <div className="relative z-10 w-full max-w-xl text-center flex flex-col items-center select-none pt-12">
        
        {/* Logo Icon Wrapper */}
        <div className="relative w-24 h-24 mb-10">
          <div className="absolute inset-0 rounded-none border border-dashed border-[#8E24FF]/30 opacity-80" />
          <div className="absolute inset-2 rounded-none border border-[#8E24FF]/15 bg-gray-100 flex items-center justify-center">
            <Paintbrush className="w-8 h-8 text-[#8E24FF]" />
          </div>
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="relative inline-flex rounded-none h-3 w-3 bg-[#8E24FF]"></span>
          </span>
        </div>

        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#8E24FF]/10 border border-[#8E24FF]/12 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#8E24FF]" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8E24FF]">
            Point a2b Studio
          </span>
        </div>

        {/* Page Identifier */}
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2 font-mono">
          {pageName}
        </span>

        {/* Primary Message */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-[#120024] mb-6">
          Crafting a <span className="font-['Playfair_Display'] italic font-medium lowercase text-[#8E24FF]">premium</span> interface
        </h2>

        {/* Secondary description */}
        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-md mb-12">
          We are currently refining the visuals and code for this section to deliver an optimal logistics experience. Please check back shortly.
        </p>

        {/* Navigation Action */}
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-none bg-[#3B007A] border border-[#3B007A] hover:bg-[#2A0054] text-white hover:border-[#2A0054] text-sm font-bold tracking-wide cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

      </div>

      {/* Modern minimal watermark signature */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10 opacity-40">
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">
          Point a2b © 2026
        </span>
      </div>

    </div>
  );
}
