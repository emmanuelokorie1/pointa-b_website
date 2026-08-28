"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/constants';

const OurVision = () => {
  return (
    <section className="relative w-full bg-[#FDFBFF] overflow-hidden flex flex-col md:flex-row items-stretch">
      
      {/* Left Side: Copy Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full md:w-[65%] flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 sm:py-16 md:py-18 text-center md:text-left items-center md:items-start"
      >
        {/* Title */}
        <h2 className="sm:text-[1.8rem] text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[3rem] 2xl:text-[4rem] font-bold leading-[1.2] mb-6 pt-10 tracking-tight text-center md:text-left w-full">
          <span className="text-primary/50 block">A Nigeria where no order is</span>
          <span className="text-primary/50 block">too far, no delivery is too</span>
          <span className="text-primary/50">slow and no business </span>
          <span className="text-primary">is too</span> <br />
          <span className="text-primary block">small to reach its customers.</span>
        </h2>

        {/* Description */}
        <p className="text-[#5B0097] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.7rem] leading-relaxed tracking-wide mb-[8rem] md:mb-[10rem] lg:mb-[14rem] mt-6 text-center md:text-left w-full">
          We are building the infrastructure that powers the next generation of Nigerian commerce.
        </p>

        {/* Watermark Text Background */}
        <div className="absolute left-1/2 -translate-x-1/2 md:left-20 lg:left-28 xl:left-32 md:translate-x-0 bottom-[10px] lg:bottom-[-5px] xl:bottom-[-10px] text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[9rem] font-black text-primary/20 uppercase select-none pointer-events-none font-sans whitespace-nowrap tracking-tight z-0 leading-none">
          Our Vision
        </div>
      </motion.div>

      {/* Right Side: Delivery Rider Photo */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative w-full md:w-[35%] h-[320px] md:h-auto z-10"
        style={{ position: 'relative' }}
      >
        <Image
          src={images.Landing5}
          alt="Point A2B Rider Dispatching"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </motion.div>

    </section>
  );
};

export default OurVision;