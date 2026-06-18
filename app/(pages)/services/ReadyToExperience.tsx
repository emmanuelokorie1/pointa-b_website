"use client";

import React from 'react';
import Image from 'next/image';
import { images, icons } from '@/constants';

const ReadyToExperience = () => {
  // Overlapping user avatars matching the screenshot
  const avatars = [images.Landing1, images.Landing2, images.Landing3];

  return (
    <section className="w-full bg-[#F4E9FF] py-14 sm:py-20 px-4 sm:px-[10px] select-none font-sans">
      <div className="w-full bg-gradient-to-br from-[#7C00D6]  sm:w-[85%] mx-auto to-[#3B007A] rounded-[2rem] sm:rounded-[2.5rem] py-16 sm:py-20 px-6 sm:px-12 md:px-20 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden">
        {/* Ambient light glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

        {/* 3 Overlapping Avatars */}
        <div className="flex -space-x-3 items-center justify-center mb-6 relative z-10">
          {avatars.map((avatar, idx) => (
            <div
              key={idx}
              className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-md hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={avatar}
                alt={`A2B user avatar ${idx + 1}`}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-center mb-6 tracking-tight leading-tight relative z-10">
          Ready to experience delivery better?
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 text-sm sm:text-base md:text-2xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed relative z-10">
          Join thousands of customers and merchants already using A2B to
          move what matters most.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 w-full">
          {/* Get Started as Merchant Button */}
          <a
            href="#"
            className="w-full sm:w-auto bg-white text-primary hover:bg-white/95 font-bold px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base flex items-center justify-center active:scale-95"
          >
            Get started as Merchant
          </a>

          {/* Download App Button with customized high-fidelity side-by-side design */}
          <a
            href="#"
            className="w-full sm:w-auto bg-primary hover:bg-white/15 border border-white/20 text-white font-bold px-5 py-4 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-3 active:scale-95"
          >
            <div className="flex items-center gap-1.5 opacity-90 flex-shrink-0">
              <Image src={icons.GooglePlay} alt="Google Play" className="w-6 h-6 object-contain" />
              <Image src={icons.AppStore} alt="App Store" className="w-6 h-6 object-contain brightness-0 invert" />
            </div>
            {/* Divider line */}
            <div className="w-[1px] h-4 bg-white/30" />
            <span className="font-semibold tracking-wide">Download App</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToExperience;