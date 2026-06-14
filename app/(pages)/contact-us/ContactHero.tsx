"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';

export default function ContactHero() {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">

      {/* Purple Background — fills the top ~58% of the screen */}
      <div className="absolute top-0 left-0 w-full h-[58%] bg-[#5B0097] rounded-b-[40px] md:rounded-b-[80px] shadow-lg z-0" />

      {/* Text Content — sits above the purple bg, below the navbar */}
      <div className="relative z-10 flex flex-col items-center text-center pt-36 md:pt-44 px-4 pb-14">
        {/* Badge */}
        <div className="mb-6 bg-white/10 px-5 py-2 rounded-full text-white/90 text-xs font-semibold tracking-[0.1em] shadow-sm">
          / CONTACT US
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 tracking-tight">
          We would love to help out
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl">
          We are here 24/7 to give you all of the support you need
        </p>
      </div>

      {/* Overlapping Image — grows to fill remaining screen space */}
      <div className="relative z-10 flex-1 px-4 md:px-10 lg:px-16 pb-8 md:pb-12 sm:w-[90%] w-full mx-auto">
        <div className="relative w-full h-full min-h-[260px] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src={images.contact}
            alt="Contact Point A2B Support"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

    </div>
  );
}
