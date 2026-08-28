"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/constants';
import { Check, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'food-delivery',
    num: '01',
    title: 'Food delivery',
    image: images.foodDelivery,
    alt: 'Point A2B Food delivery',
    description: 'Hunger does not wait and neither do we. A2B logistics connects you to your favourite local restaurants, fast food spots and homemade food vendors so you can order what you want and have it delivered fresh and hot. Our riders are always nearby and ready to move the moment your order is confirmed.',
    features: [
      'Order from a wide variety of local restaurants and food vendors',
      'Real time tracking from the kitchen straight to your door',
      'Fast pickup and delivery so your food always arrives fresh',
      'Available for quick lunches, family dinners and late night cravings',
    ]
  },
  {
    id: 'package-delivery',
    num: '02',
    title: 'Package delivery',
    image: images.packageDelivery,
    alt: 'Point A2B Package delivery',
    description: 'Sending something across town should not be a stressful experience. With A2B all you need to do is tell us where to pick it up and where it needs to go – our verified riders handle the rest with speed, care and professionalism. We treat every package like it matters because to someone it does.',
    features: [
      'Send documents, gifts, products and everyday items across the city',
      'Verified riders who handle every package with care',
      'Real time tracking for both sender and receiver',
      'Safe, fast and reliable delivery every single time',
    ]
  },
  {
    id: 'merchant-fulfillment',
    num: '03',
    title: 'Merchant order fulfillment',
    image: images.merchantFulfillment,
    alt: 'Point A2B Merchant order fulfillment',
    description: 'Running a business is hard enough without worrying about how your products get to your customers. A2B merchant fulfillment takes the entire delivery side of your operations off your plate so you can focus on building your brand and serving your customers.',
    features: [
      'Riders dispatched immediately when a customer places an order',
      'No hiring, no managing logistics, no delivery headaches',
      'Keeps customers happy with fast and reliable fulfillment',
      'Scales with your business whether you get five orders or five hundred',
    ]
  },
  {
    id: 'same-day',
    num: '04',
    title: 'Same day delivery',
    image: images.sameDay,
    alt: 'Point A2B Same day delivery',
    description: 'Some things simply cannot wait until tomorrow. When urgency is the priority A2B same day delivery gets your item across the city and to its destination within hours. Fast, tracked and built for moments where there is absolutely no room for delays.',
    features: [
      'Perfect for urgent documents, last minute gifts and time sensitive orders',
      'Rider dispatched quickly after order confirmation',
      'Full real time tracking throughout the entire delivery',
      'Guaranteed same day arrival so deadlines are always met',
    ]
  },
  {
    id: 'sme-logistics',
    num: '05',
    title: 'Business & SME logistics',
    image: images.smeLogistics,
    alt: 'Point A2B Business & SME logistics',
    description: 'Small and medium businesses are the backbone of the Nigerian economy and A2B was built with them in mind. Our SME logistics service gives growing businesses access to reliable and affordable delivery infrastructure without the cost of building one from scratch.',
    features: [
      'Dedicated delivery support for product based businesses of all sizes',
      'Merchant dashboard to track every order and monitor earnings',
      'Consistent rider availability as your order volume grows',
      'Affordable fulfillment that protects your brand reputation',
    ]
  }
];

const WhatWeOffer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-zinc-50 py-16 sm:py-24 px-4 sm:px-[10px] sm:w-[85%] mx-auto select-none font-sans">
      {/* Heading Group */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-[#1E1B29] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          What we offer
        </h2>
        <p className="text-[#555] max-w-2xl mx-auto leading-relaxed font-medium text-sm sm:text-base">
          Whether you are an individual, a small business or a growing brand, A2B
          has a service designed specifically for you.
        </p>
      </div>

      {/* Interactive Segment Card */}
      <div className="bg-white rounded-3xl p-2 sm:p-4 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-4 border border-zinc-200">
        {/* Left column: Tabs List */}
        <div className="w-full lg:w-[38%] rounded-2xl overflow-hidden divide-y divide-black/10 flex flex-col">
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            if (isActive) {
              return (
                <motion.div
                  key={service.id}
                  layoutId={`tab-container-${service.id}`}
                  className="w-full py-5 sm:py-6 px-5 sm:px-6 flex flex-col justify-between bg-[#F8EEFF] relative overflow-hidden cursor-default"
                >
                  <div className="flex items-start justify-between w-full">
                    {/* Rounded Image Container with position relative to avoid NextJS fill shifts */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#EBE8F3]">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 640px) 64px, 80px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    {/* Service Index number */}
                    <span className="text-[#5B0097] font-black text-xl sm:text-2xl opacity-90 leading-none mt-1 select-none">
                      {service.num}
                    </span>
                  </div>

                  {/* Service Label Text with link arrow and underline */}
                  <div className="flex flex-col items-start mt-4">
                    <span className="text-[#5B0097] font-black text-sm sm:text-base tracking-wide flex items-center gap-1 select-none">
                      {service.title}
                      <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                    </span>
                    <div className="h-[3px] bg-[#5B0097] w-[90%] sm:w-[80%] rounded-full mt-1.5" />
                  </div>
                </motion.div>
              );
            }

            return (
              <div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className="w-full py-4 sm:py-6 px-5 sm:px-6 flex items-center justify-between text-left hover:bg-black/[0.01] cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Small inactive number badge */}
                  <div className="w-10 h-10 border border-black/[0.05] rounded-xl flex items-center justify-center text-sm font-bold text-gray-500 select-none">
                    {service.num}
                  </div>
                  {/* Label */}
                  <span className="text-[#1E1B29] font-bold text-sm sm:text-base tracking-wide flex items-center gap-0.5">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-gray-400" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: Content Panel */}
        <div className="flex-1 bg-zinc-50 p-2 sm:p-4 lg:p-6 rounded-2xl border border-zinc-200 flex flex-col justify-center min-h-[380px] sm:min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full h-full flex flex-col justify-between"
            >
              {/* Detailed Description */}
              <p className="text-[#1E1B29]/95 font-medium text-lg sm:text-xl lg:text-2xl mb-8">
                {services[activeIndex].description}
              </p>

              {/* Dynamic Feature Bullets */}
              <div className="flex flex-col gap-3.5">
                {services[activeIndex].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="flex items-center gap-3 bg-[#F8EEFF] px-4 py-3 sm:py-5 rounded-2xl border border-purple-50/20"
                  >
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-[#1E1B29] text-sm sm:text-[1rem] tracking-wide">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;