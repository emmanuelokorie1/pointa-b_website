"use client";

import React from 'react';
import Link from 'next/link';
import { Paintbrush, Sparkles, ArrowLeft } from 'lucide-react';

interface OngoingDesignProps {
  pageName: string;
}


export default function OngoingDesign({ pageName }: OngoingDesignProps) {
  return (
    <div className="relative min-h-screen bg-white text-[#120024] flex flex-col justify-center items-center overflow-hidden px-6">
      
      {/* CSS-only animations for particle drifting & pulsing */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.25; }
          50%       { transform: translateY(-30px) translateX(15px) scale(1.1); opacity: 0.5; }
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.4; filter: blur(80px); }
          50%       { transform: scale(1.15); opacity: 0.6; filter: blur(100px); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .ptab-float-1 { animation: floatSlow 8s ease-in-out infinite; }
        .ptab-float-2 { animation: floatSlow 12s ease-in-out infinite -4s; }
        .ptab-glow-purple { animation: pulseGlow 6s ease-in-out infinite; }
        .ptab-glow-blue { animation: pulseGlow 8s ease-in-out infinite -2s; }
        .ptab-spin-contour { animation: spinSlow 30s linear infinite; }
      `}} />

      {/* Decorative Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft background grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient Glowing Orbs */}
        <div className="ptab-glow-purple absolute w-[500px] h-[500px] rounded-full bg-[#8E24FF]/6 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="ptab-glow-blue absolute w-[600px] h-[600px] rounded-full bg-[#3B007A]/4 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />

        {/* Drift Particles */}
        <div className="ptab-float-1 absolute w-[300px] h-[300px] rounded-full bg-[#8E24FF]/4 blur-[80px] top-1/3 right-1/4" />
        <div className="ptab-float-2 absolute w-[200px] h-[200px] rounded-full bg-[#3B007A]/3 blur-[60px] bottom-1/3 left-1/3" />
      </div>

      <div className="relative z-10 w-full max-w-xl text-center flex flex-col items-center select-none pt-12">
        
        {/* Glowing Logo Icon Wrapper */}
        <div className="relative w-24 h-24 mb-10">
          {/* Animated decorative outer rings */}
          <div className="ptab-spin-contour absolute inset-0 rounded-[2.5rem] border border-dashed border-[#8E24FF]/30 opacity-80" />
          <div className="absolute inset-2 rounded-[2rem] border border-[#8E24FF]/15 bg-white/95 backdrop-blur-md flex items-center justify-center shadow-[0_12px_32px_rgba(142,36,255,0.08)]">
            <Paintbrush className="w-8 h-8 text-[#8E24FF]" />
          </div>
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8E24FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8E24FF]"></span>
          </span>
        </div>

        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8E24FF]/6 border border-[#8E24FF]/12 backdrop-blur-md shadow-sm mb-6">
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
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#3B007A] border border-[#3B007A] hover:bg-[#2A0054] text-white hover:border-[#2A0054] transition-all duration-300 shadow-[0_4px_20px_rgba(142,36,255,0.12)] text-sm font-bold tracking-wide cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
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
