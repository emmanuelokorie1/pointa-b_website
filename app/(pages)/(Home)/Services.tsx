"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/constants';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Single synchronized global slideshow index
    const [slideIndex, setSlideIndex] = useState(0);

    // Highly curated widescreen corporate/lifestyle slide arrays
    const slidesLeft = [images.Landing5, images.Landing1, images.Landing2];
    const slidesMiddle = [images.Landing6, images.Landing3, images.Landing4];
    const slidesRight = [images.Landing7, images.Landing9, images.Landing10];

    useEffect(() => {
        // Master interval to sync horizontal sliding across all three windows
        const interval = setInterval(() => {
            setSlideIndex((prev) => prev + 1);
        }, 5000); // Seamless sweeps every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const serviceCards = [
        {
            slides: slidesLeft,
            clipPathId: "url(#clip-left)",
            defaultTransform: "perspective(1200px) rotateY(10deg) rotateZ(1.5deg) translateY(4px) translateZ(-10px)"
        },
        {
            slides: slidesMiddle,
            clipPathId: "url(#clip-middle)",
            defaultTransform: "perspective(1200px) rotateY(0deg) rotateZ(0deg) translateY(0px) translateZ(10px)"
        },
        {
            slides: slidesRight,
            clipPathId: "url(#clip-right)",
            defaultTransform: "perspective(1200px) rotateY(-10deg) rotateZ(-1.5deg) translateY(4px) translateZ(-10px)"
        }
    ];

    return (
        <section className="w-full bg-[#FDFDFD] py-16 sm:py-24 relative overflow-hidden select-none border-b border-black/[0.03]">
            {/* Ambient Background Grid and Glows */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path d="M0 150 C180 200 240 100 400 160 C560 220 620 300 780 260 C900 230 940 320 1000 300" fill="none" stroke="#120024" strokeWidth="2" />
                    <path d="M0 320 C220 400 280 220 500 320 C720 420 780 280 920 380" fill="none" stroke="#120024" strokeWidth="2" />
                    <path d="M0 550 C180 600 340 500 560 580 C780 660 880 540 1000 620" fill="none" stroke="#120024" strokeWidth="2" />
                </svg>
            </div>

            {/* Glowing spot lamp */}
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-200/25 blur-[130px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] mx-auto relative z-10">
                
                {/* 1. Badge & Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center space-y-5 mb-16 sm:mb-24"
                >
                    {/* Micro-badge */}
                    <span className="text-primary bg-primary/8 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-[0_2px_10px_hsla(var(--primary)/0.03)] border border-primary/10">
                        / The Premium Services That We Offer
                    </span>

                    {/* Section Title */}
                    <h2 className="text-[#120024] text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] font-bold tracking-tight font-sans leading-[1.1] max-w-4xl">
                        Everything You Need To <span className="font-['Playfair_Display'] italic font-medium text-primary inline">Deliver</span> With Confidence
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[#120024]/70 text-sm sm:text-base md:text-[1.125rem] leading-relaxed max-w-2xl tracking-wide font-medium">
                        From booking to payment, <strong className="text-[#120024] font-semibold">Point A2B</strong> handles every step of your delivery, so you can focus on growing your business.
                    </p>
                </motion.div>

                {/* 2. Panoramic Widescreen Synchronized Sliding Grid System */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-3.5 xs:gap-4 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5 items-center"
                    style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
                >
                    {serviceCards.map((card, index) => {
                        const isHovered = hoveredIndex === index;
                        const isAnyHovered = hoveredIndex !== null;
                        
                        // Calculate active image based on shared slideIndex
                        const imageIndex = slideIndex % card.slides.length;
                        const currentImage = card.slides[imageIndex];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative w-full h-[400px] xs:h-[450px] sm:h-[500px] md:h-[540px] lg:h-[600px] overflow-hidden cursor-pointer transition-all duration-500 group select-none shadow-md"
                                style={{
                                    clipPath: card.clipPathId,
                                    filter: isHovered 
                                        ? "drop-shadow(0px 24px 48px rgba(123, 57, 237, 0.14))" 
                                        : "drop-shadow(0px 8px 24px rgba(18, 0, 36, 0.04))",
                                    transform: isHovered 
                                        ? "perspective(1200px) rotateY(0deg) rotateZ(0deg) translateY(-8px) translateZ(30px) scale(1.04)" 
                                        : isAnyHovered 
                                            ? `${card.defaultTransform} scale(0.96) opacity(0.85)`
                                            : card.defaultTransform,
                                    transformStyle: "preserve-3d",
                                    willChange: "transform, opacity, filter",
                                }}
                            >
                                {/* Autoplay Slideshow Layer with Premium Horizontal Slide Transitions */}
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <AnimatePresence mode="popLayout" initial={false}>
                                        <motion.div
                                            key={`${slideIndex}-${index}`}
                                            initial={{ x: "100%", opacity: 0.9, scale: 1.02 }}
                                            animate={{ x: 0, opacity: 1, scale: 1 }}
                                            exit={{ x: "-100%", opacity: 0.9, scale: 0.98 }}
                                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            <Image
                                                src={currentImage}
                                                alt={`Curved plasma slideshow segment ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                                                priority
                                            />

                                            {/* Specular Reflective Light Sweep attached to entering slide */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none z-20" />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Soft Ambient Vignette Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60" />
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            {/* SVG Clip Path Definitions for Curved Panoramic Silhouette with subtle border rounding */}
            <svg className="absolute w-0 h-0 pointer-events-none" width="0" height="0">
                <defs>
                    {/* Left Segment: Taller left edge (y=0), curving down to right y=0.08 */}
                    <clipPath id="clip-left" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.04 Q 0,0 0.02,0 Q 0.5,0.04 0.98,0.08 Q 1,0.08 1,0.10 L 1,0.90 Q 1,0.92 0.98,0.92 Q 0.5,0.96 0.02,1.0 Q 0,1.0 0,0.96 Z" />
                    </clipPath>
                    {/* Middle Segment: Flat straight rectangle sitting at height y=0.08 to y=0.92 */}
                    <clipPath id="clip-middle" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.10 Q 0,0.08 0.02,0.08 L 0.98,0.08 Q 1,0.08 1,0.10 L 1,0.90 Q 1,0.92 0.98,0.92 L 0.02,0.92 Q 0,0.92 0,0.90 Z" />
                    </clipPath>
                    {/* Right Segment: Curved up from left inner edge y=0.08 to tall right outer edge y=0 */}
                    <clipPath id="clip-right" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.10 Q 0,0.08 0.02,0.08 Q 0.5,0.04 0.98,0 Q 1,0 1,0.04 L 1,0.96 Q 1,1.0 0.98,1.0 Q 0.5,0.96 0.02,0.92 Q 0,0.92 0,0.90 Z" />
                    </clipPath>
                </defs>
            </svg>
        </section>
    );
};

export default Services;