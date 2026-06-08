"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';

export default function ContactHero() {
  return (
    <>
      {/* Top Purple Hero Section */}
      <section className="w-full relative pt-40 md:pt-48 pb-56 md:pb-[25rem] flex flex-col items-center px-4">
         {/* Curved Purple Background */}
         <div className="absolute top-0 left-0 w-full h-full bg-[#3B007A] rounded-b-[40px] md:rounded-b-[100px] shadow-lg"></div>

         {/* Content */}
         <div className="relative z-10 flex flex-col items-center">
           {/* Badge */}
           <div className="mb-8 bg-white/10 px-5 py-2 rounded-full text-white/90 text-xs font-semibold tracking-[0.1em] shadow-sm">
              / CONTACT US
           </div>

           {/* Title */}
           <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 text-center tracking-tight">
              We would love to help out
           </h1>

           {/* Subtitle */}
           <p className="text-white/80 text-lg md:text-xl font-medium text-center">
              We are here 24/7 to give you all of the support you need
           </p>
         </div>
      </section>

      {/* Overlapping Hero Image */}
      <section className="relative w-full px-4 md:px-10 lg:px-16 max-w-[1400px] mx-auto -mt-32 md:-mt-56 z-10 mb-20 md:mb-32">
         <div className="relative w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
                src={images.contact} 
                alt="Contact Point A2B Support" 
                fill 
                className="object-cover" 
                priority
            />
         </div>
      </section>
    </>
  );
}
