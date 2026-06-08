import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="border-t border-white/10 flex flex-col sm:flex-row justify-between pt-4 items-center gap-6">
        
        {/* Reviews */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Trustpilot Star */}
            <div className="w-8 h-8 rounded-full bg-[#00B67A] flex items-center justify-center text-white shadow-inner">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            {/* Multicolored arrow */}
            <div className="w-8 h-8 rounded-full bg-[#0E131F] border border-white/10 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" stroke="#FF6B00" />
                <path d="M7 7h10v10" stroke="#38BDF8" />
              </svg>
            </div>
            {/* Google G */}
            <div className="w-8 h-8 rounded-full bg-[#0F172A] border border-white/10 flex items-center justify-center text-white font-bold text-sm font-sans">
              G
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5 text-[#FFB800]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <span className="text-xs text-gray-400 mt-0.5">4.9 from 1164 reviews</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <Link href="/" prefetch={false} className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-sm font-semibold text-gray-400 hover:text-white transition-colors">
            <span className="font-sans text-[15px] lowercase">in</span>
          </Link>
          {/* Facebook */}
          <Link href="/" prefetch={false} className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-sm font-semibold text-gray-400 hover:text-white transition-colors">
            <span className="font-sans text-[15px] lowercase">f</span>
          </Link>
          {/* Instagram */}
          <Link href="/" prefetch={false} className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="4" cy="4" r="2"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </Link>
          {/* YouTube */}
          <Link href="/" prefetch={false} className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="4.5" rx="3" ry="3"/><polygon points="10 9 15 12 10 15 10 9"/></svg>
          </Link>
          {/* TikTok */}
          <Link href="/" prefetch={false} className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/></svg>
          </Link>
        </div>

      </div>

      {/* Giant backdrop branding logo */}
      <div className="w-full text-center select-none pointer-events-none opacity-[0.03] sm:opacity-[0.08] transition-opacity duration-300 pb-0">
        <h1 className="text-[12vw] font-black tracking-tighter leading-none text-primary font-sans uppercase">
          POINT A2B
        </h1>
      </div>
    </div>
  );
};

export default FooterBottom;