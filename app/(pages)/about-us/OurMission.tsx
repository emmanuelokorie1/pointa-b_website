"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/constants';

const OurMission = () => {
  return (
    <section className="relative w-full bg-[#FDFBFF] md:bg-transparent overflow-hidden flex flex-col md:flex-row justify-end md:items-center md:h-[85vh] px-0 md:px-20 lg:px-28 xl:px-36">
      
      {/* Copy Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 w-full md:w-[50%] lg:w-[55%] flex flex-col justify-center px-6 sm:px-12 md:px-0 sm:pt-16 pt-8 pb-[7.5rem] md:py-0 text-center md:text-left items-center md:items-start"
      >
        {/* Title */}
        <h2 className="text-[#1A1A1A] md:text-white text-3xl sm:text-4xl md:text-5xl xl:text-[3.7rem] 2xl:text-[4rem] font-extrabold leading-[1.15] mb-6 text-center md:text-left w-full">
          To make delivery <br className="hidden md:inline" />
          fast, affordable <br className="hidden md:inline" />
          and <span className="italic text-primary font-bold">accessible..</span> for <br className="hidden md:inline" />
          every Nigerian
        </h2>

        {/* Description */}
        <p className="text-neutral-600 md:text-white text-md sm:text-[1.2rem] md:text-[1.4rem] font-medium max-w-xl leading-relaxed tracking-wide text-center md:text-left w-full">
          Whether you are a customer waiting for your lunch, a small business owner fulfilling orders or a rider looking for a reliable income. We exist to move things forward.
        </p>

        {/* Mobile Watermark Text Background */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[10px] text-[2.5rem] sm:text-[3.5rem] font-bold text-[#5B0097]/30 uppercase select-none pointer-events-none whitespace-nowrap tracking-tight z-0 leading-none md:hidden">
          Our Mission
        </div>
      </motion.div>

      {/* Background/Bottom Image */}
      <div className="relative w-full md:absolute md:inset-0 h-[420px] sm:h-[550px] md:h-full z-0">
        <Image
          src={images.ourMission}
          alt="Our Mission background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-left md:object-center select-none pointer-events-none"
        />
      </div>

      {/* Desktop Watermark Text Background */}
      <div className="absolute md:right-50 md:bottom-[-10px] lg:bottom-[-10px] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] font-bold text-[#E2E3E7]/40 uppercase select-none pointer-events-none font-sans whitespace-nowrap tracking-tight z-[5] leading-none hidden md:block">
        Our Mission
      </div>
    </section>
  );
};

export default OurMission;