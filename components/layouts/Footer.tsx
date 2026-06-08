import React from 'react';

import Link from 'next/link';
import FooterCTA from './FooterCTA';
import FooterBottom from './FooterBottom';
import { footerLinks } from '@/constants/data';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[rgb(13,17,19)] to-[rgb(12,8,18)] text-white pt-20 sm:pb-12 font-sans">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Floating Call to Action Banner */}
        <FooterCTA />

        {/* Links & Newsletter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-8">
          
          {/* Left Col - Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-[#8E24FF] text-3xl font-semibold tracking-tight">Point A2B</h3>
            <p className="text-[#A1A1AA] text-base leading-relaxed pr-0 lg:pr-12">
              Join hundreds of businesses who trust Point A2B Logistics to move their goods faster, smarter and on time, every single time.
            </p>
            
            <div className="mt-4 flex items-center bg-[#222222] rounded-full p-1.5 pl-6 border border-white/5 max-w-[400px]">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent text-white placeholder-gray-500 flex-1 outline-none text-sm"
              />
              <button className="bg-[#8E24FF] hover:bg-[#7a1fe0] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                Start for Free
              </button>
            </div>
          </div>

          {/* Quicklinks Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h4 className="text-[#8E24FF] font-semibold tracking-wider text-sm uppercase">{column.title}</h4>
                <ul className="flex flex-col gap-4 text-sm text-[#D4D4D8]">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} prefetch={false} className="hover:text-white transition-colors flex items-center gap-1 group">
                        {link.name} 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" transition-all duration-300"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line - Reviews & Socials */}
        <FooterBottom />

      </div>
    </footer>
  );
};

export default Footer;