"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import { motion } from 'framer-motion';

const YourDeliveries = () => {
  return (
    <section className="w-full bg-[#111111] py-16 lg:py-24 font-sans text-white relative">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-4">
        
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full xl:w-[32%] flex flex-col gap-6 text-center xl:text-left"
        >
          <h2 className="text-4xl sm:text-5xl xl:text-[3.4rem] leading-[1.1] font-medium">
            Your <span className="text-[#8E24FF] font-['Playfair_Display'] italic">Deliveries,</span><br className="hidden xl:block" /> Right in Your Pocket
          </h2>
          <p className="text-[#d6d6d7] text-lg sm:text-2xl leading-relaxed mt-4">
            Whether you're an SME shipping orders or a rider earning on the go, download the SwiftSME app and manage everything bookings, tracking, bids, and payments, all from your phone, anywhere in Lagos.
          </p>
        </motion.div>

        {/* Center Column - iPhone Images */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full xl:w-[40%] flex justify-center items-center mt-2 xl:mt-0"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[450px] xl:max-w-[500px] h-[550px] sm:h-[650px] xl:h-[750px] mx-auto">
            {/* Back Phone (iPhone2 - Blue, Camera) - Offset Left & Down */}
            <div className="absolute left-[5%] xl:left-[0%] top-[15%] xl:top-[18%] w-[55%] sm:w-[50%] z-0">
              <Image 
                src={images.iPhone2} 
                alt="A2B App Interface Background" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Front Phone (iPhone3 - White, UI) - Offset Right & Up */}
            <div className="absolute right-[0%] xl:-right-0 top-0 w-[75%] sm:w-[70%] z-10">
              <Image 
                src={images.iPhone3} 
                alt="A2B App Interface" 
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </motion.div>
        

        {/* Right Column - QR Code */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full xl:w-[25%] flex flex-col items-center xl:items-start gap-6 text-center xl:text-left xl:pl-8"
        >
          <h3 className="text-2xl sm:text-4xl xl:text-3xl font-medium text-white">
            Scan the QR code to<br className="hidden xl:block" /> download our Mobile App
          </h3>
          
          {/* QR Code Container */}
          <div className="bg-[#1A1A1A] border-[4px] sm:border-[6px] border-[#333333] p-1.5 sm:p-2 rounded-[2rem] inline-block shadow-2xl">
            <div className="bg-[#8E24FF] p-3 sm:p-4 rounded-[1.5rem]">
              <div className="bg-white p-2 rounded-xl">
                 <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://swift-sme.com" 
                    alt="Download App QR Code"
                    className="w-32 h-32 sm:w-40 sm:h-40 xl:w-36 xl:h-36 object-contain"
                 />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default YourDeliveries;