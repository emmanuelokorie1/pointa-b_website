"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const desktopPositions = [
  { x: 0, y: 0, scale: 1.5, opacity: 1, zIndex: 30, glow: true },
  { x: 130, y: -10, scale: 0.9, opacity: 0.8, zIndex: 20, glow: false },
  { x: 250, y: -25, scale: 0.6, opacity: 0.4, zIndex: 15, glow: false },
  { x: 360, y: -40, scale: 0.4, opacity: 0, zIndex: 5, glow: false },
  { x: -360, y: -40, scale: 0.4, opacity: 0, zIndex: 5, glow: false },
  { x: -250, y: -25, scale: 0.6, opacity: 0.4, zIndex: 15, glow: false },
  { x: -130, y: -10, scale: 0.9, opacity: 0.8, zIndex: 20, glow: false },
];

const mobilePositions = [
  { x: 0, y: 0, scale: 1.5, opacity: 1, zIndex: 30, glow: true },
  { x: 120, y: -10, scale: 0.85, opacity: 0.8, zIndex: 20, glow: false },
  { x: 220, y: -25, scale: 0.6, opacity: 0.4, zIndex: 15, glow: false },
  { x: 310, y: -40, scale: 0.4, opacity: 0, zIndex: 5, glow: false },
  { x: -310, y: -40, scale: 0.4, opacity: 0, zIndex: 5, glow: false },
  { x: -220, y: -25, scale: 0.6, opacity: 0.4, zIndex: 15, glow: false },
  { x: -120, y: -10, scale: 0.85, opacity: 0.8, zIndex: 20, glow: false },
];

const testimonials = [
  {
    id: 1,
    quote: "A2B has completely changed how I send packages to my family. The tracking is so accurate, and the riders are always polite and on time.",
    name: "Amaka Omah",
    role: "Regular User",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "I use A2B every week to send documents across the city. It's incredibly fast, reliable, and gives me total peace of mind.",
    name: "David Adeleke",
    role: "Frequent Sender",
    avatar: "https://images.unsplash.com/photo-1522529599102-1322a5f08cb3?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Joining A2B as a rider has been fantastic. The app gives me consistent delivery requests and the payout system is very transparent.",
    name: "Sarah Ibrahim",
    role: "Verified Rider",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: 4,
    quote: "The best logistics app I've ever used. The support team is incredibly responsive and the app is so easy to navigate.",
    name: "Chukwudi Eze",
    role: "Regular User",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: 5,
    quote: "I was skeptical at first, but A2B proved me wrong. My packages are always delivered safely without any hassle or delays.",
    name: "Aisha Bello",
    role: "Frequent Sender",
    avatar: "https://images.unsplash.com/photo-1506277886164-e5b38d00ceac?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: 6,
    quote: "The navigation and real-time support on the rider app makes my daily deliveries so much easier and completely stress-free.",
    name: "Tunde Bakare",
    role: "Dispatch Rider",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: 7,
    quote: "I love the flexibility A2B gives me. I can choose my working hours and my earnings are directly deposited without any delay.",
    name: "Nneka Okoro",
    role: "Verified Rider",
    avatar: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=256&auto=format&fit=crop",
  },
];

const RealStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({ rootMargin: '-80px', once: false });
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-40px', once: true });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [isInView]);

  const carouselPositions = isMobile ? mobilePositions : desktopPositions;
  const current = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="w-full bg-[#DFACFF] py-10 lg:py-16 font-sans relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 190px, rgba(255,255,255,0.4) 190px, rgba(255,255,255,0.4) 380px)',
        }}
      />

      <div className="w-[95%] lg:w-[90%] max-w-[1500px] mx-auto relative z-10 flex flex-col items-center justify-center py-6 lg:py-8 overflow-hidden">
        <div ref={headerRef} className={`text-center mb-2 lg:mb-3 relative z-10 pointer-events-none fade-in-up ${headerVisible ? 'is-visible' : ''}`}>
          <h2 className="text-[#1A1A1A] text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight">
            Real
            <span className="font-['Playfair_Display'] italic text-white pl-4">Results</span>
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 bg-white/90 py-2 px-4 lg:px-5 rounded-full border border-white mx-auto max-w-fit pointer-events-auto">
            <div className="flex -space-x-2">
              <div className="relative w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white overflow-hidden z-30">
                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&auto=format&fit=crop" alt="Merchant" fill className="object-cover" sizes="32px" />
              </div>
              <div className="relative w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white overflow-hidden z-20">
                <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=64&auto=format&fit=crop" alt="User" fill className="object-cover" sizes="32px" />
              </div>
              <div className="relative w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white overflow-hidden z-10">
                <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=64&auto=format&fit=crop" alt="Rider" fill className="object-cover" sizes="32px" />
              </div>
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white bg-[#8E24FF] text-white text-[8px] lg:text-[10px] flex items-center justify-center font-bold relative z-0">
                +1k
              </div>
            </div>
            <span className="text-[#333333] font-medium text-xs lg:text-sm">
              Trusted by over <strong className="text-[#8E24FF]">1,000+</strong> happy Users & Riders
            </span>
          </div>
        </div>

        <div className="w-full relative h-[140px] sm:h-[170px] pointer-events-none mt-2">
          {testimonials.map((testimonial, idx) => {
            const relativeIndex = (idx - currentIndex + testimonials.length) % testimonials.length;
            const pos = carouselPositions[relativeIndex];

            return (
              <div
                key={testimonial.id}
                className="absolute w-16 h-16 sm:w-20 sm:h-20 pointer-events-auto -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 testimonial-avatar"
                style={{
                  left: '50%',
                  top: '50%',
                  zIndex: pos.zIndex,
                  opacity: pos.opacity,
                  transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
                }}
              >
                <div
                  className={`relative w-full h-full rounded-full overflow-hidden border-[3px] flex items-center justify-center bg-white cursor-pointer transition-opacity duration-300 ${
                    pos.glow
                      ? 'border-white ring-4 ring-white/40'
                      : 'border-white/60 hover:opacity-100 hover:border-white'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" sizes="80px" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[90%] sm:w-[80%] max-w-[700px] relative z-10 min-h-[220px] pointer-events-none mt-4">
          <div
            key={currentIndex}
            className="w-full bg-white border border-purple-50 rounded-[2rem] p-6 lg:p-10 pointer-events-auto relative mt-2 testimonial-card-enter"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-t border-l border-purple-50 transform rotate-45 rounded-tl-md pointer-events-none z-0" />

            <div className="relative z-10">
              <div className="flex gap-1.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 lg:w-6 lg:h-6 text-[#FFD700] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#333333] text-lg sm:text-xl lg:text-[20px] leading-relaxed font-normal mb-8">
                {current.quote}
              </p>

              <div className="flex items-center justify-between border-t border-purple-50 pt-5">
                <div className="flex flex-col">
                  <h4 className="text-[#1A1A1A] font-bold text-lg lg:text-xl">{current.name}</h4>
                  <span className="text-[#666666] text-sm lg:text-base">{current.role}</span>
                </div>

                <span className="flex items-center gap-1 text-[10px] lg:text-xs text-[#8E24FF] font-bold uppercase tracking-wider bg-[#F4E6FF] px-3 py-1.5 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 z-20 mt-5">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center text-[#8E24FF] hover:bg-[#8E24FF] hover:text-white transition-all duration-300 active:scale-95 group border border-purple-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M15 18l-6-6 6-6" />
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
                {idx === currentIndex && (
                  <span
                    key={`progress-${currentIndex}`}
                    className="absolute top-0 left-0 h-full bg-[#8E24FF] rounded-full testimonial-progress"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center text-[#8E24FF] hover:bg-[#8E24FF] hover:text-white transition-all duration-300 active:scale-95 group border border-purple-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealStory;
