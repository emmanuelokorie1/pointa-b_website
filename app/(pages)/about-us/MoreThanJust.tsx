"use client";

import React from 'react';
import Image from 'next/image';
import SplitHeader from '@/components/ui/SplitHeader';
import { motion, Variants } from 'framer-motion';
import { images, icons } from '@/constants';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const MoreThanJust = () => {
  return (
    <section className="relative w-full bg-white py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 xl:px-[10px] overflow-hidden">
      <div className="w-full sm:w-[85%] mx-auto flex flex-col gap-8 sm:gap-12">

        {/* Top Header Block */}
        <SplitHeader
          badgeText="WHAT WE DO"
          badgeVariant="gray"
          title={<>More than just <br /> Delivery</>}
          description="A2B is a full logistics ecosystem where customers get fast delivery, merchants reach more customers and riders earn great income. One platform, everyone wins."
        />

        {/* Bottom Features Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}

        >
          <section className="flex flex-col lg:flex-row gap-6 w-full mb-6">
            {/* Card 1: More Than Just (morethan.svg) */}
            <motion.div
              variants={cardVariants}
              className="relative w-full lg:w-[36.5%] aspect-[450/411] transition-all duration-500"
            >
              <Image
                src={images.moreThanJust}
                alt="Point A2B Live Map Tracking Feature"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            </motion.div>

            {/* Card 2: Delivered to Your Door (morethan1Background.svg + Food Delivery Rider) */}
            <motion.div
              variants={cardVariants}
              className="relative w-full lg:w-[63.5%] overflow-hidden rounded-[1rem] min-h-[350px] sm:min-h-[380px] lg:min-h-0 lg:aspect-[781/411] shadow-md flex flex-col justify-between p-6 sm:p-6 lg:p-8 group"
            >
              {/* Background Conic Gradient SVG */}
              <Image
                src={images.moreThan1Background}
                alt="Purple Card Background"
                fill
                sizes="(max-width: 640px) 100vw, 60vw"
                className="object-cover pointer-events-none select-none z-0"
              />

              {/* Background Rider Image */}
              <div className="absolute right-0 bottom-0 h-full w-[40%] pointer-events-none select-none z-10">
                <Image
                  src={images.moreThan1}
                  alt="Delivered to Your Door rider"
                  fill
                  sizes="(max-width: 640px) 45vw, 30vw"
                  className="object-contain object-left-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col flex-1 justify-between gap-6 2xl:max-w-[60%] max-w-[80%] select-none">
                <div className="flex flex-col">
                  <div
                    className="text-white text-2xl sm:text-3xl lg:text-[2rem] xl:text-[3rem] 2xl:text-[4rem] font-extrabold pb-4 sm:pb-4 xl:pb-8 2xl:pb-10 max-w-sm"
                    style={{ lineHeight: '1.07' }}
                  >
                    Delivered <br className="hidden xl:inline" /> to Your Door
                  </div>
                  <p className="text-white/85 text-sm sm:text-md lg:text-[1.1rem] leading-relaxed font-medium tracking-wide max-w-md">
                    Fast, verified riders moving your orders from pickup to doorstep seamlessly.
                  </p>
                </div>

                {/* App Download Buttons */}
                <div className="flex sm:flex-row flex-col gap-2.5 sm:gap-3 justify-start items-start mt-auto">
                  <a href="#" className="bg-black text-white h-[48px] sm:h-[54px] w-fit sm:w-[160px] md:w-[180px] px-3.5 sm:px-4 rounded-xl flex items-center gap-2.5 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group flex-shrink-0">
                    <div className="w-6 sm:w-7 flex items-center justify-center">
                      <Image src={icons.GooglePlay} alt="Google Play Logo" className="w-full h-auto group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex flex-col items-start pt-0.5">
                      <span className="text-[9px] sm:text-[10px] font-medium opacity-90 leading-none mb-1 uppercase tracking-wide">GET IT ON</span>
                      <span className="text-lg sm:text-[21px] font-semibold tracking-tight leading-none">Google Play</span>
                    </div>
                  </a>

                  <a href="#" className="bg-black text-white h-[48px] sm:h-[54px] w-fit sm:w-[180px] px-3.5 sm:px-4 rounded-xl flex items-center gap-2.5 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group flex-shrink-0">
                    <div className="w-6 sm:w-7 flex items-center justify-center">
                      <Image src={icons.AppStore} alt="Apple Logo" className="w-full h-auto brightness-0 invert group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex flex-col items-start pt-0.5">
                      <span className="text-[9px] sm:text-[10px] font-medium opacity-90 leading-none mb-1">Download on the</span>
                      <span className="text-lg sm:text-[22px] font-semibold tracking-tight leading-none">App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Card 2: More Than 2 (morethan2.svg) */}
            <motion.div
              variants={cardVariants}
              className="relative w-full aspect-[407/404] transition-all duration-500"
            >
              <Image
                src={images.moreThan2}
                alt="Point A2B Merchant Sales Feature"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            </motion.div>

            {/* Card 3: More Than 3 (morethan3.svg) */}
            <motion.div
              variants={cardVariants}
              className="relative w-full aspect-[407/404] transition-all duration-500"
            >
              <Image
                src={images.moreThan3}
                alt="Point A2B Rider Delivery Feature"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            </motion.div>

            {/* Card 4: More Than 4 (morethan4.svg) */}
            <motion.div
              variants={cardVariants}
              className="relative w-full aspect-[407/404] transition-all duration-500"
            >
              <Image
                src={images.moreThan4}
                alt="Point A2B Notifications Feature"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            </motion.div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default MoreThanJust;