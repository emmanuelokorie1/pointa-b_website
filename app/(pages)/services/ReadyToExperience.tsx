"use client";

import React from 'react';
import Image from 'next/image';
import { images, icons } from '@/constants';

const ReadyToExperience = () => {
  // Overlapping user avatars matching the screenshot
  const avatars = [images.Landing1, images.Landing2, images.Landing3];

  return (
    <section className="w-full bg-[#F4E9FF] py-14 sm:py-20 px-4 sm:px-[10px] select-none font-sans">
      <div className="w-full bg-primary sm:w-[85%] mx-auto rounded-none py-16 sm:py-20 px-6 sm:px-12 md:px-20 flex flex-col items-center justify-center text-center relative overflow-hidden">

        {/* 3 Overlapping Avatars */}
        <div className="flex -space-x-3 items-center justify-center mb-6 relative z-10">
          {avatars.map((avatar, idx) => (
            <div
              className="relative w-16 h-16 rounded-none overflow-hidden border-2 border-white/20"
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
            className="w-full sm:w-auto bg-[#F4F4F5] text-primary font-bold px-6 py-4 rounded-none text-sm sm:text-base flex items-center justify-center"
          >
            Get started as Merchant
          </a>

          {/* Download App Button with customized high-fidelity side-by-side design */}
          <a
            className="w-full sm:w-auto bg-primary hover:bg-white/15 border border-white/20 text-white font-bold px-5 py-4 rounded-none text-sm sm:text-base flex items-center justify-center gap-3"
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