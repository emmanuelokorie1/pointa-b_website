"use client";

import React from 'react';
import Image from 'next/image';
import SplitHeader from '@/components/ui/SplitHeader';
import { motion } from 'framer-motion';
import { images } from '@/constants';

const MoreThanJust = () => {
  return (
    <section className="relative w-full bg-white py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 xl:px-[10px] overflow-hidden">
      <div className="w-full sm:w-[85%] mx-auto flex flex-col gap-2 sm:gap-4">
        
        {/* Top Header Block */}
        <SplitHeader
          badgeText="WHAT WE DO"
          badgeVariant="gray"
          title={<>More than just <br /> Delivery</>}
          description="A2B is a full logistics ecosystem where customers get fast delivery, merchants reach more customers and riders earn great income. One platform, everyone wins."
        />

        {/* Bottom Features Image Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12.5] xl:aspect-[16/12] overflow-hidden flex items-center justify-center transition-all duration-500"
          style={{ position: 'relative' }}
        >
          <Image
            src={images.moreThanJust}
            alt="Point A2B: More than just Delivery Feature Ecosystem"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MoreThanJust;