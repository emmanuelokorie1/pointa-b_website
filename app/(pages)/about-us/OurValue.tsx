"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import SplitHeader from '@/components/ui/SplitHeader';
import { images } from '@/constants';

const values = [
  { id: 1, image: images.ourValue1, title: "Speed" },
  { id: 2, image: images.ourValue2, title: "Trust" },
  { id: 3, image: images.ourValue3, title: "Reliability" },
  { id: 4, image: images.ourValue4, title: "Growth" },
];

const OurValue = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [xTranslation, setXTranslation] = useState(0);

  // Cached layout values — measured once on mount/resize instead of read
  // synchronously on every scroll frame.
  const sectionTop = useRef(0);
  const sectionHeight = useRef(0);

  // Calculate max horizontal translation and section bounds once (and on resize)
  useEffect(() => {
    const calc = () => {
      if (cardsContainerRef.current) {
        const scrollWidth = cardsContainerRef.current.scrollWidth;
        const containerWidth = cardsContainerRef.current.offsetWidth;
        setXTranslation(-(scrollWidth - containerWidth));
      }
      
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        sectionTop.current = rect.top + window.scrollY;
        sectionHeight.current = rect.height || section.offsetHeight;
      }
    };
    
    // Allow a microtask tick for the DOM to settle layout before measuring
    const timer = setTimeout(calc, 50);
    
    window.addEventListener('resize', calc, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calc);
    };
  }, []);

  // Native passive scroll listener — directly mutates transform, zero React re-renders
  const updateX = useCallback(() => {
    const container = cardsContainerRef.current;
    if (!container || xTranslation === 0 || sectionHeight.current === 0) return;

    const scrollY = window.scrollY;
    const viewportH = window.innerHeight;

    // progress: 0 when section top hits viewport top (scrollY = sectionTop), 
    // 1 when section bottom hits viewport top (scrollY = sectionTop + sectionHeight - viewportH)
    const range = sectionHeight.current - viewportH;
    const rawProgress = range > 0 ? (scrollY - sectionTop.current) / range : 0;
    const progress = Math.max(0, Math.min(1, rawProgress));
    
    const x = progress * xTranslation;
    container.style.transform = `translateX(${x}px)`;
  }, [xTranslation]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateX);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial paint
    updateX();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateX]);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#F4E9FF] h-auto md:h-[200vh] lg:h-[250vh] xl:h-[300vh]">
      <div className="relative md:sticky md:top-0 h-auto md:h-screen w-full flex flex-col justify-start md:pt-[12vh] lg:pt-[15vh] overflow-visible md:overflow-hidden pt-14 pb-6 sm:py-20 md:py-0">

        {/* Header Block Container */}
        <div className="w-[90%] sm:w-[85%] mx-auto">
          <SplitHeader
            badgeText="OUR VALUES"
            badgeVariant="gray-glass"
            title="The Value that Drives us"
            description="At A2B, how we work is just as important as what we do. These are the principles that guide every rider, every merchant relationship and every order we fulfill."
          />
        </div>

        {/* Desktop View: Horizontal scroll driven by native scroll listener */}
        <div className="hidden md:block w-full overflow-hidden mt-12 md:mt-16">
          <div
            ref={cardsContainerRef}
            className="flex flex-row flex-nowrap gap-6 xl:gap-8 pl-[5%] sm:pl-[7.5%] pr-[20vw] pb-16 lg:pb-24"
            style={{ willChange: 'transform', transform: 'translateX(0px)' }}
          >
            {values.map((val, idx) => (
              <div
                key={val.id}
                className={`relative w-[55vw] lg:w-[48vw] xl:w-[42vw] flex-shrink-0 aspect-[550/389] rounded-[2rem] overflow-hidden transition-transform duration-500 ease-out group ${
                  idx % 2 === 1 ? 'translate-y-6 sm:translate-y-10 lg:translate-y-12' : ''
                }`}
                style={{
                  opacity: 1,
                  // Staggered entry via CSS animation — no Framer Motion needed
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s both`,
                }}
              >
                {/* Glassmorphic Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10"></div>

                <Image
                  src={val.image}
                  alt={`Point A2B Core Value: ${val.title}`}
                  fill
                  sizes="50vw"
                  className="object-cover group-hover:scale-[1.035] transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Vertical Cards — simple, no scroll tracking needed */}
        <div className="block md:hidden w-[90%] sm:w-[85%] mx-auto mt-8 pb-12">
          <div className="flex flex-col gap-6">
            {values.map((val, idx) => (
              <div
                key={val.id}
                className="relative w-full aspect-[550/389] rounded-[1.5rem] overflow-hidden group shadow-md"
                style={{
                  animation: `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s both`,
                }}
              >
                {/* Glassmorphic Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10"></div>

                <Image
                  src={val.image}
                  alt={`Point A2B Core Value: ${val.title}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-cover group-hover:scale-[1.035] transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurValue;