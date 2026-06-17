"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/constants';

const FoundingStory = () => {
  const milestones = [
    {
      year: "2024",
      title: "The Frustration",
      description: "Our story began with a simple observation: logistics in Nigeria was broken. Sending a document or commercial package across town was slow, unpredictable, and highly stressful. Deliveries would get lost, pricing was opaque, and merchants spent hours coordinating riders manually."
    },
    {
      year: "2025",
      title: "The Blueprint",
      description: "We realized that solving this required more than just more bikes—it required a unified digital ecosystem. We set out to build a platform that connects merchants, riders, and customers in real-time. By providing automated dispatching, accurate live tracking, and transparent pricing, we designed Point A2B to make deliveries seamless and reliable."
    },
    {
      year: "Present",
      title: "Moving What Matters",
      description: "Today, Point A2B is powering the logistics behind hundreds of local merchants, helping businesses scale and providing dispatch riders with stable, structured incomes. Our vision is to build the reliable commerce infrastructure of Nigeria, ensuring no order is too far and no business is too small to reach its customers."
    }
  ];

  return (
    <section className="relative w-full bg-[#fcfbfe] sm:py-[2rem] py-6 px-6 sm:px-[10px]">
      <div className="w-full lg:w-[85%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-0 lg:gap-16">
        
        {/* Left Column: Narrative Copy */}
        <div className="w-full lg:w-[53%] flex flex-col text-left pt-6 lg:py-[8rem]">
         

          {/* Heading */}
          <div className="mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#212121] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-none mb-4"
            >
              The Founding <span className="italic text-primary inline-block">Story.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#1A1A1A] text-md sm:text-lg tracking-tight"
            >
              We Didn&apos;t Start A Company. We Built A Correction.
            </motion.p>
          </div>

          {/* Narrative milestones */}
          <div className="flex flex-col gap-10 sm:ml-2 lg:pt-[2rem] pt-[1rem]">
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col text-left group lg:pb-[3rem] sm:pb-[2rem] pb-[.5rem]"
              >

                {/* Milestone Title */}
                <h3 className="text-[#1A1A1A] uppercase text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3">
                  <Image src={images.milestoneIcon} alt="" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
                  <span>{milestone.title}</span>
                </h3>

                {/* Milestone Description */}
                <p className="text-neutral-600 text-sm sm:text-[1.3rem] leading-relaxed font-normal">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky World Image */}
        <div className="w-full lg:w-[40%] h-fit lg:sticky lg:top-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square p-4 flex items-center justify-center bg-transparent"
            style={{ position: 'relative' }}
          >
            {/* Visual glow ring effect in the background */}
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 via-white to-transparent pointer-events-none z-0" /> */}
            <Image
              src={images.world}
              alt="Point A2B Global Expansion and Coverage Map"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
              className="object-contain"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FoundingStory;