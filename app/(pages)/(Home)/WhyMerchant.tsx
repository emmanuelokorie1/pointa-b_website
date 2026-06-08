"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Vetted & Professional Riders",
    desc: "Every rider on the A2B platform goes through a thorough background check, identity verification and training before their first delivery. We don't just hand anyone the job, we make sure your packages and food orders are in safe, responsible hands every single time. When an A2B rider shows up at your door, you can trust who you're opening it for.",
    image: images.merchant1,
    bg: "#FFFCF4",
    reverse: false,
  },
  {
    id: 2,
    title: "Grow Your Reach",
    desc: "Listing your business on A2B means instantly putting your brand in front of thousands of active customers who are already on the app and ready to order. Whether you run a restaurant, a fashion store, a grocery shop or any kind of business, A2B gives you the visibility and the delivery infrastructure to scale without the stress of managing logistics yourself. More customers, more orders, more revenue.",
    image: images.merchant2,
    bg: "#F7F7F7",
    reverse: true,
  },
  {
    id: 3,
    title: "Built for Small Businesses like Yours",
    desc: "A2B was built with the everyday Nigerian entrepreneur in mind. Whether you are just starting out with a small home business, running a growing SME, or managing an established brand, A2B levels the playing field by giving you access to the same delivery infrastructure that big corporations use — at a fraction of the cost. You do not need a fleet of bikes or a logistics team. A2B handles all of that so you can focus on building your business, serving your customers and growing your revenue one order at a time. Small business, big delivery energy",
    image: images.merchant3,
    bg: "#FBF9F9",
    reverse: false,
  }
];

const WhyMerchant = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale0 = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const scale1 = useTransform(scrollYProgress, [0.3, 1], [1, 0.96]);
  const scale2 = useTransform(scrollYProgress, [0.6, 1], [1, 1]);
  
  const scales = [scale0, scale1, scale2];

  return (
    <section ref={containerRef} className="w-full bg-[#270B4B] py-20 lg:py-32 font-sans relative overflow-clip">
      {/* Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#8E24FF]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-6 relative">
          <h2 className="text-white text-[2.5rem] sm:text-4xl lg:text-[3.2rem] font-bold leading-[1.15] max-w-2xl tracking-tight drop-shadow-lg">
            Why Merchants & Business owners Trust <span className="font-['Playfair_Display'] italic text-[#A655FF] font-medium">Point A2B</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-sm leading-relaxed mb-2 font-medium">
            Build dependable teams without the hiring friction.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ 
                top: `calc(15vh + ${idx * 40}px)`,
                willChange: "transform, opacity",
                backgroundColor: feature.bg,
                scale: scales[idx] || 1,
              }}
              className={`sticky group flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} rounded-[2rem] overflow-hidden p-8 sm:p-10 lg:p-12 gap-10 lg:gap-16 items-center shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-[3px] border-white`}
            >
              
              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                {/* Target Icon */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#8E24FF] shadow-[0_8px_20px_rgba(142,36,255,0.3)] flex items-center justify-center mb-6 lg:mb-8 transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500">
                  <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full bg-[#270B4B]"></div>
                </div>

                <h3 className="text-[1.8rem] sm:text-3xl lg:text-[2.5rem] font-bold text-[#0B0F19] tracking-tight mb-5 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#475569] text-[15px] sm:text-[17px] leading-[1.8] font-medium">
                  {feature.desc}
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[#8E24FF]/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyMerchant;