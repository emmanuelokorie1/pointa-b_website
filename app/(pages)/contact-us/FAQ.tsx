"use client";

import React, { useState } from 'react';
import Badge from '@/components/ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "How does the app work?",
    answer: "Simply open the Point A2B app, enter your pickup and drop-off locations, choose your delivery package type (bike, car, or courier), and request a rider. You can track your rider in real time from dispatch to delivery."
  },
  {
    question: "How do I list my business as a merchant?",
    answer: "Click the \"Get started as Merchant\" button in the navbar or visit our Merchant Portal. Fill out your business registration details, and our onboarding team will verify your account and get you set up within 24 hours."
  },
  {
    question: "How fast are deliveries?",
    answer: "Most local deliveries within the city are completed in under 45 minutes. Our smart dispatch system assigns the closest rider to your pickup point to minimize wait times."
  },
  {
    question: "What can I send through the app?",
    answer: "You can send documents, food, groceries, clothing, electronics, and other packages up to 25kg on bikes, or larger items using our car and van logistics options. Prohibited items include illegal goods, weapons, and hazardous materials."
  },
  {
    question: "Is my order being tracked in real time?",
    answer: "Yes, absolutely! Once a rider accepts your delivery, you will see a live map showing the rider's exact GPS location, speed, and estimated time of arrival (ETA) directly in the app."
  },
  {
    question: "What if there is a problem with my order or delivery?",
    answer: "Our customer support team is available 24/7. You can chat with us live through the support section of the app, send an email to support@pointA2B.co, or call our direct helpline for immediate assistance."
  },
  {
    question: "How much does a delivery cost?",
    answer: "Delivery costs are calculated based on the distance between pickup and drop-off, the type of vehicle selected, and current demand. You will always see the exact price upfront before confirming your request."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-14 sm:py-20 lg:py-28 relative z-10 border-t border-gray-100"> 
      <div className="grid lg:grid-cols-12 gap-12 sm:w-[85%] w-full mx-auto items-start">
        
        {/* Left Column - Heading Info */}
        <div className="lg:col-span-5 w-full lg:w-[90%] flex flex-col justify-center text-left space-y-5 lg:sticky lg:top-32">
          {/* Badge */}
          <Badge text="FAQs" />
          
          {/* Title */}
          <h2 className="text-[#0B0F19] pb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg xl:text-xl font-normal leading-relaxed">
            Have more questions? Reach out to us, and our team will be happy to assist you!
          </p>
        </div>

        {/* Right Column - Accordion */}
        <div className="lg:col-span-7 space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-primary/30 bg-[#FAF8FF] shadow-[0_8px_30px_rgba(142,36,255,0.04)]" 
                    : "border-gray-100 bg-[#F9F9FB] hover:border-gray-200 hover:bg-[#F6F6F9]"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none select-none"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                    isOpen ? "text-[#8E24FF]" : "text-[#1A1A1A]"
                  }`}>
                    {item.question}
                  </span>
                  
                  {/* Icon Wrapper */}
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-[#8E24FF] text-white rotate-180" : "bg-white text-[#8E24FF] shadow-sm border border-gray-100"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[3]" />
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-500 text-sm md:text-base leading-relaxed border-t border-gray-100/50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;