"use client";

import React, { useEffect, useRef, useCallback, useState } from 'react';
import Image from 'next/image';
import { homeImages as images } from '@/constants/images/home';
import { icons } from '@/constants/icons';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const steps = [
    {
        id: 1,
        title: "Sign up & create an order",
        desc: "Enter your pickup address, drop-off location, and package details in under 3 minutes.",
        image: images.hiw1,
        showStoreButtons: true,
    },
    {
        id: 2,
        title: "Choose your rider",
        desc: "Review live bids from nearby verified riders, see their ETA, distance, and price before you confirm.",
        image: images.hiw2,
    },
    {
        id: 3,
        title: "Track your order",
        desc: "Watch your package move in real time on the map from pickup to drop-off.",
        image: images.hiw3,
    },
    {
        id: 4,
        title: "Confirm your delivery",
        desc: "Your customer receives the package and your payment is automatically processed through escrow.",
        image: images.hiw4,
    }
];

// Step card — IntersectionObserver driven, zero Framer Motion
const StepCard = ({
    step,
    index,
}: {
    step: typeof steps[number];
    index: number;
}) => {
    const isEven = index % 2 !== 0;
    const [textRef, textVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-80px', once: true });
    const [imgRef, imgVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-80px', once: true });

    return (
        <div className={`relative flex flex-col items-center md:items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

            {/* Text Content */}
            <div
                ref={textRef}
                className={`w-full md:w-1/2 flex flex-col mb-8 md:mb-0 ${isEven ? 'md:pl-16 lg:pl-32 xl:pl-40' : 'md:pr-16 lg:pr-32 xl:pr-40'} ${isEven ? 'fade-in-right' : 'fade-in-left'} ${textVisible ? 'is-visible' : ''}`}
                style={{ '--stagger-delay': '100ms' } as React.CSSProperties}
            >
                {/* Step Badge */}
                <div className={`w-full flex justify-center md:justify-start mb-6 md:mb-10 lg:mb-12`}>
                    <div className="bg-white/90 border border-white text-[#8E24FF] text-sm lg:text-[14px] font-extrabold px-6 py-2.5 rounded-full flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(142,36,255,0.12)] uppercase tracking-[0.15em] relative transition-transform hover:-translate-y-0.5">
                        STEP {step.id}
                    </div>
                </div>

                {/* Content Block */}
                <div className="w-full text-center md:text-left max-w-full px-4 md:px-0">
                    <h3 className="text-[1.8rem] sm:text-3xl lg:text-[2.2rem] font-bold text-[#0B0F19] mb-4 lg:mb-8 tracking-tight leading-[1.15]">
                        {step.title}
                    </h3>
                    <p className="text-[#475569] leading-[1.6] text-base sm:text-xl lg:text-[1.4rem] font-medium">
                        {step.desc}
                    </p>
                    {step.showStoreButtons && (
                        <div className="mt-8">
                            <p className="text-gray-900 font-bold text-lg mb-4">
                                Get the <span className="text-[#8E24FF] font-black italic">Point A2B</span> app on:
                            </p>
                            <div className={`flex flex-wrap items-center gap-3 sm:gap-4 mt-2 ${isEven ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                                <button className="bg-black text-white h-[48px] sm:h-[54px] px-3.5 sm:px-4 rounded-xl flex items-center gap-2.5 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group">
                                    <div className="w-6 sm:w-7 flex items-center justify-center">
                                        <Image src={icons.AppStore} alt="Apple Logo" className="w-full h-auto brightness-0 invert group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div className="flex flex-col items-start pt-0.5">
                                        <span className="text-[9px] sm:text-[10px] font-medium opacity-90 leading-none mb-1">Download on the</span>
                                        <span className="text-lg sm:text-[22px] font-semibold tracking-tight leading-none">App Store</span>
                                    </div>
                                </button>

                                <button className="bg-black text-white h-[48px] sm:h-[54px] px-3.5 sm:px-4 rounded-xl flex items-center gap-2.5 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group">
                                    <div className="w-6 sm:w-7 flex items-center justify-center">
                                        <Image src={icons.GooglePlay} alt="Google Play Logo" className="w-full h-auto group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div className="flex flex-col items-start pt-0.5">
                                        <span className="text-[9px] sm:text-[10px] font-medium opacity-90 leading-none mb-1 uppercase tracking-wide">GET IT ON</span>
                                        <span className="text-lg sm:text-[21px] font-semibold tracking-tight leading-none">Google Play</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Image Content */}
            <div
                ref={imgRef}
                className={`w-full md:w-1/2 flex justify-center mt-4 md:mt-0 px-6 md:px-0 ${isEven ? 'md:pr-10 lg:pr-20 xl:pr-[120px] md:justify-end' : 'md:pl-10 lg:pl-20 xl:pl-[120px] md:justify-start'} ${isEven ? 'fade-in-left' : 'fade-in-right'} ${imgVisible ? 'is-visible' : ''}`}
                style={{ '--stagger-delay': '300ms' } as React.CSSProperties}
            >
                <div className="relative w-full max-w-[400px] lg:max-w-[500px] drop-shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-transform duration-500 ease-out group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#8E24FF]/30 to-transparent blur-3xl -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image
                        src={step.image}
                        alt={`Step ${step.id} visual`}
                        className="w-full h-auto object-contain rounded-xl relative z-10"
                        priority={index === 0}
                        quality={90}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                </div>
            </div>
        </div>
    );
};

const HowitWorks = () => {
    const [titleRef, titleVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-40px', once: true });
    // Section visibility — scroll handler only fires while section is in viewport
    const [sectionVisRef, isSectionInView] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '200px', once: false });
    const isSectionInViewRef = useRef(false);
    useEffect(() => { isSectionInViewRef.current = isSectionInView; }, [isSectionInView]);

    // === Bike rotation — native scroll, no React state, no Framer Motion ===
    const containerRef = useRef<HTMLDivElement>(null);
    const bikeRef = useRef<HTMLDivElement>(null);
    const trackFillRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const lastScrollY = useRef(0);
    const currentRotation = useRef(160);
    const targetRotation = useRef(160);

    // Cached layout values — measured once on mount/resize instead of read
    // synchronously on every scroll frame. getBoundingClientRect() forces
    // the browser to flush layout before returning a value; calling it
    // inside a scroll-driven rAF loop means forcing a layout recalculation
    // up to 60 times per second while the user scrolls. Storing document-
    // relative top + height instead lets the per-frame math be pure
    // arithmetic against window.scrollY, which is already known for free.
    const containerTop = useRef(0);
    const containerHeight = useRef(0);

    const measureContainer = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        containerTop.current = rect.top + window.scrollY;
        containerHeight.current = rect.height;
    }, []);

    const updateBike = useCallback(() => {
        const bike = bikeRef.current;
        const track = trackFillRef.current;
        if (!bike) return;

        const viewportH = window.innerHeight;
        const scrollY = window.scrollY;

        // Match original Framer Motion useScroll offset: ["start end", "start 40vh"]
        // "start end" = container top is at viewport bottom (scrollY = containerTop - viewportH)
        // "start 40vh" = container top is at 40vh from top (scrollY = containerTop - viewportH * 0.4)
        const startScroll = containerTop.current - viewportH;        // container top enters viewport bottom
        const endScroll = containerTop.current - viewportH * 0.4;    // container top reaches 40vh
        const range = endScroll - startScroll;
        const rawProgress = range > 0 ? (scrollY - startScroll) / range : 0;
        const progress = Math.max(0, Math.min(1, rawProgress));

        if (track) {
            track.style.setProperty('--scroll-progress', String(progress));
        }

        const scrollDelta = scrollY - lastScrollY.current;
        lastScrollY.current = scrollY;

        if (progress < 1) {
            targetRotation.current = 140 - progress * 180;
        } else {
            if (scrollDelta > 5) targetRotation.current = -40;
            else if (scrollDelta < -5) targetRotation.current = 140;
        }

        // Lerp toward target — 0.18 approximates the original useSpring damping/stiffness feel
        currentRotation.current += (targetRotation.current - currentRotation.current) * 0.18;
        bike.style.transform = `rotate(${currentRotation.current}deg)`;
    }, []);

    useEffect(() => {
        measureContainer(); // initial measurement

        const onScroll = () => {
            // Skip frame scheduling entirely when section is off-screen
            if (!isSectionInViewRef.current) return;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateBike);
        };

        // Re-measure only when layout might actually have changed —
        // not on every scroll frame.
        const onResize = () => {
            measureContainer();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateBike);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize, { passive: true });
        // Initial paint
        updateBike();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [updateBike, measureContainer]);

    return (
        <section className="relative w-full bg-[#F4EAFF] sm:py-24 py-10 lg:py-32 overflow-clip font-sans">
            {/* Sentinel for section visibility (throttles the scroll handler) */}
            <div ref={sectionVisRef} className="absolute top-0 left-0 w-full h-1 pointer-events-none" aria-hidden />
            <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto relative z-10">

                {/* Section Title */}
                <div
                    ref={titleRef}
                    className={`text-center relative fade-in-up ${titleVisible ? 'is-visible' : ''}`}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#8E24FF]/10 blur-3xl rounded-full pointer-events-none"></div>
                    <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.2rem] font-bold text-[#8E24FF] tracking-tight leading-tight relative drop-shadow-sm">
                        <span className="font-['Playfair_Display'] font-normal">How </span>
                        <span className="font-['Playfair_Display'] italic font-medium">it </span>
                        <span className="font-['Playfair_Display'] font-normal">Works</span>
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative w-full sm:w-[95%] lg:w-[90%] max-w-[1600px] mx-auto mt-8 sm:mt-16 md:mt-24">

                    {/* Horizontal Dashed Line */}
                    <div className="hidden md:block absolute top-0 left-0 w-full border-t border-dashed border-[#D1B3FF] opacity-80"></div>

                    {/* Vertical Dashed Line Base (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E8D4FF] -translate-x-1/2 opacity-60"></div>

                    {/* Glowing Track Fill — driven by CSS custom property --scroll-progress */}
                    <div
                        ref={trackFillRef}
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#8E24FF] via-[#D1B3FF] to-[#8E24FF] shadow-[0_0_15px_rgba(142,36,255,0.7)] -translate-x-1/2 origin-top rounded-full scroll-track-fill"
                    ></div>

                    {/* Single Sticky Bike tracking down the timeline — rotated via direct DOM mutation */}
                    <div ref={containerRef} className="hidden md:block absolute left-1/2 top-32 bottom-[20vh] w-16 -translate-x-1/2 z-20 pointer-events-none">
                        <div className="sticky top-[30vh] w-[72px] h-[72px] flex items-center justify-center drop-shadow-[0_12px_24px_rgba(142,36,255,0.4)]">
                            <div ref={bikeRef} className="w-full h-full flex items-center justify-center" style={{ transform: 'rotate(160deg)' }}>
                                <Image
                                    src={images.DeliveryBike1}
                                    alt="Delivery Bike tracking progress"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-24 md:gap-[20vh] lg:gap-[25vh] relative pt-12 md:pt-32 pb-12 md:pb-[10vh]">
                        {steps.map((step, index) => (
                            <StepCard key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default HowitWorks;