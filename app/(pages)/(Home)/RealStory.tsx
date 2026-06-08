"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tightened positions for Desktop (beautifully clustered)
const desktopPositions = [
  { left: "50%", top: "50%", scale: 1.5, opacity: 1, zIndex: 30, glow: true },
  { left: "60%", top: "45%", scale: 0.9, opacity: 0.8, zIndex: 20, glow: false },
  { left: "70%", top: "35%", scale: 0.6, opacity: 0.4, zIndex: 15, glow: false },
  { left: "80%", top: "25%", scale: 0.4, opacity: 0, zIndex: 5, glow: false },
  { left: "20%", top: "25%", scale: 0.4, opacity: 0, zIndex: 5, glow: false },
  { left: "30%", top: "35%", scale: 0.6, opacity: 0.4, zIndex: 15, glow: false },
  { left: "40%", top: "45%", scale: 0.9, opacity: 0.8, zIndex: 20, glow: false },
];

// Widened positions for Mobile (prevents overlapping on narrow screens)
const mobilePositions = [
  { left: "50%", top: "50%", scale: 1.5, opacity: 1, zIndex: 30, glow: true },
  { left: "72%", top: "45%", scale: 0.85, opacity: 0.8, zIndex: 20, glow: false },
  { left: "90%", top: "35%", scale: 0.6, opacity: 0.4, zIndex: 15, glow: false },
  { left: "105%", top: "25%", scale: 0.4, opacity: 0, zIndex: 5, glow: false },
  { left: "-5%", top: "25%", scale: 0.4, opacity: 0, zIndex: 5, glow: false },
  { left: "10%", top: "35%", scale: 0.6, opacity: 0.4, zIndex: 15, glow: false },
  { left: "28%", top: "45%", scale: 0.85, opacity: 0.8, zIndex: 20, glow: false },
];

const testimonials = [
  {
    id: 1,
    quote: "A2B has completely changed how I send packages to my family. The tracking is so accurate, and the riders are always polite and on time.",
    name: "Amaka Omah",
    role: "Regular User",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "I use A2B every week to send documents across the city. It's incredibly fast, reliable, and gives me total peace of mind.",
    name: "David Adeleke",
    role: "Frequent Sender",
    avatar: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Joining A2B as a rider has been fantastic. The app gives me consistent delivery requests and the payout system is very transparent.",
    name: "Sarah Ibrahim",
    role: "Verified Rider",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: "The best logistics app I've ever used. The support team is incredibly responsive and the app is so easy to navigate.",
    name: "Chukwudi Eze",
    role: "Regular User",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 5,
    quote: "I was skeptical at first, but A2B proved me wrong. My packages are always delivered safely without any hassle or delays.",
    name: "Aisha Bello",
    role: "Frequent Sender",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 6,
    quote: "The navigation and real-time support on the rider app makes my daily deliveries so much easier and completely stress-free.",
    name: "Tunde Bakare",
    role: "Dispatch Rider",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 7,
    quote: "I love the flexibility A2B gives me. I can choose my working hours and my earnings are directly deposited without any delay.",
    name: "Nneka Okoro",
    role: "Verified Rider",
    avatar: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=256&auto=format&fit=crop"
  }
];

const RealStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play timer for the progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const carouselPositions = isMobile ? mobilePositions : desktopPositions;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-[#DFACFF] py-10 lg:py-16 font-sans relative overflow-hidden">
      {/* Static Diagonal Striped Background (Animation removed to fix lag) */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{ 
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 190px, rgba(255,255,255,0.4) 190px, rgba(255,255,255,0.4) 380px)'
        }}
      ></div>

      {/* Main Container - Removed backdrop-blur to fix lag */}
      <div className="w-[95%] lg:w-[90%] max-w-[1500px] mx-auto relative z-10 bg-[#F4E6FF] rounded-[2rem] lg:rounded-[3rem] shadow-[0_20px_50px_rgba(142,36,255,0.15)] border border-white flex flex-col items-center justify-center py-6 lg:py-8 overflow-hidden">
        
        {/* Headings */}
        <div className="text-center mb-2 lg:mb-3 relative z-10 pointer-events-none">
          {/* <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#8E24FF] text-xl lg:text-2xl font-bold tracking-widest uppercase mb-1"
          >
            Real stories
          </motion.h3> */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1A1A1A] text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight"
          >
            Real <span className="font-['Playfair_Display'] italic text-transparent bg-clip-text bg-gradient-to-r from-[#8E24FF] to-[#D494FF]">results</span>
          </motion.h2>

          {/* Social Proof / Abundance Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3 bg-white/60 backdrop-blur-md py-2 px-4 lg:px-5 rounded-full border border-white mx-auto max-w-fit shadow-sm pointer-events-auto"
          >
            <div className="flex -space-x-2">
              <img className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white object-cover relative z-30" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop" alt="Merchant" loading="lazy" />
              <img className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white object-cover relative z-20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop" alt="Merchant" loading="lazy" />
              <img className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white object-cover relative z-10" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=256&auto=format&fit=crop" alt="Merchant" loading="lazy" />
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white bg-[#8E24FF] text-white text-[8px] lg:text-[10px] flex items-center justify-center font-bold relative z-0">
                +1k
              </div>
            </div>
            <span className="text-[#333333] font-medium text-xs lg:text-sm">
              Trusted by over <strong className="text-[#8E24FF]">1,000+</strong> happy Users & Riders
            </span>
          </motion.div>
        </div>

        {/* Horizontal Avatar Arch Carousel */}
        <div className="w-full relative h-[140px] sm:h-[170px] pointer-events-none mt-2">
          {testimonials.map((testimonial, idx) => {
            const relativeIndex = (idx - currentIndex + testimonials.length) % testimonials.length;
            const pos = carouselPositions[relativeIndex];
            const isActive = relativeIndex === 0;

            return (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  top: pos.top,
                  left: pos.left,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                  x: "-50%",
                  y: "-50%"
                }}
                transition={{ type: "spring", stiffness: 70, damping: 14 }}
                className="absolute w-16 h-16 sm:w-20 sm:h-20 pointer-events-auto"
              >
                {/* Active avatar highlighted by its styling in the child div below, no extra waves needed */}

                <div 
                  className={`relative w-full h-full rounded-full overflow-hidden border-[3px] flex items-center justify-center bg-white transition-all duration-500 cursor-pointer ${
                    pos.glow 
                      ? 'shadow-[0_0_50px_rgba(142,36,255,0.6)] border-white ring-4 ring-white/50' 
                      : 'shadow-lg border-white/60 grayscale-[40%] opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:border-white'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  style={{ 
                    animationName: isActive ? 'none' : 'float',
                    animationDuration: '4s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: `${idx * 0.4}s`
                  }}
                >
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global floating animation definition */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}} />

        {/* Central Testimonial Card - Styled as a Message Bubble */}
        <div className="w-[90%] sm:w-[80%] max-w-[700px] relative z-10 min-h-[220px] pointer-events-none mt-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full bg-white border border-purple-50 rounded-[2rem] p-6 lg:p-10 shadow-[0_20px_40px_-15px_rgba(142,36,255,0.1)] pointer-events-auto relative mt-2"
            >
              {/* Speech Bubble Tail pointing to the active avatar */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-t border-l border-purple-50 transform rotate-45 rounded-tl-md pointer-events-none z-0"></div>

              {/* Inner Content Container */}
              <div className="relative z-10">
                {/* 5-Star Rating */}
                <div className="flex gap-1.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 lg:w-6 lg:h-6 text-[#FFD700] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#333333] text-lg sm:text-xl lg:text-[20px] leading-relaxed font-normal mb-8">
                  {testimonials[currentIndex].quote}
                </p>
                
                {/* Sender Profile / Footer */}
                <div className="flex items-center justify-between border-t border-purple-50 pt-5">
                  <div className="flex flex-col">
                    <h4 className="text-[#1A1A1A] font-bold text-lg lg:text-xl">{testimonials[currentIndex].name}</h4>
                    <span className="text-[#666666] text-sm lg:text-base">{testimonials[currentIndex].role}</span>
                  </div>
                  
                  <span className="flex items-center gap-1 text-[10px] lg:text-xs text-[#8E24FF] font-bold uppercase tracking-wider bg-[#F4E6FF] px-3 py-1.5 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-6 z-20 mt-5">
          <button 
            onClick={prevTestimonial}
            className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-[0_10px_30px_rgba(142,36,255,0.15)] flex items-center justify-center text-[#8E24FF] hover:bg-[#8E24FF] hover:text-white transition-all duration-300 active:scale-95 group border border-purple-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full relative overflow-hidden transition-all duration-500 ${
                  idx === currentIndex ? 'w-12 bg-[#8E24FF]/20' : 'w-2.5 bg-[#8E24FF]/20 hover:bg-[#8E24FF]/50'
                }`}
              >
                {/* Auto-play Progress Bar */}
                {idx === currentIndex && (
                  <motion.div
                    key={`progress-${currentIndex}`}
                    className="absolute top-0 left-0 h-full bg-[#8E24FF] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 10, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-[0_10px_30px_rgba(142,36,255,0.15)] flex items-center justify-center text-[#8E24FF] hover:bg-[#8E24FF] hover:text-white transition-all duration-300 active:scale-95 group border border-purple-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default RealStory;