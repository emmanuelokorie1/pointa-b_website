"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/constants';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Single synchronized global slideshow index
    const [slideIndex, setSlideIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Highly curated widescreen corporate/lifestyle slide arrays
    const slidesLeft = [images.Landing5, images.Landing1, images.Landing2];
    const slidesMiddle = [images.Landing6, images.Landing3, images.Landing4];
    const slidesRight = [images.Landing7, images.Landing9, images.Landing10];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Master interval to sync horizontal sliding across all three windows
        const interval = setInterval(() => {
            setSlideIndex((prev) => prev + 1);
        }, 5000); // Seamless sweeps every 5 seconds

        return () => {
            window.removeEventListener("resize", checkMobile);
            clearInterval(interval);
        };
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
        <section className="w-full bg-[#FDFDFD] py-20 sm:py-32 relative overflow-hidden select-none border-b border-black/[0.03] font-sans">
            {/* Ambient Background Grid and Glows */}
            <div className="absolute inset-0 bg-[#F4EAFF]/20 z-0"></div>
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#8E24FF 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFDFD] via-transparent to-[#FDFDFD] z-0 pointer-events-none"></div>
            
            {/* Glowing spot lamps */}
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full pointer-events-none z-0 bg-[#8E24FF]/10 blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 bg-[#A655FF]/10 blur-[100px]"></div>

            <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] mx-auto relative z-10">
                {/* 1. Badge & Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center mb-16 sm:mb-24 relative z-20"
                >
                    {/* Premium Glass Badge */}
                    <div className="bg-white/60 backdrop-blur-md border border-[#8E24FF]/20 text-[#8E24FF] text-[11px] sm:text-xs font-bold px-6 py-2.5 rounded-full shadow-sm uppercase tracking-[0.15em] inline-flex items-center gap-2.5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8E24FF] animate-pulse"></span>
                        Premium Delivery Services
                    </div>

                    {/* Section Title */}
                    <h2 className="text-[#0B0F19] text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] font-bold tracking-tight font-sans leading-[1.1] max-w-4xl drop-shadow-sm mb-6">
                        Everything You Need To <span className="font-['Playfair_Display'] italic font-medium text-[#8E24FF] inline">Deliver</span> With Confidence
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[#475569] text-base sm:text-lg md:text-[1.125rem] leading-relaxed max-w-2xl tracking-wide font-medium">
                        From booking to payment, <strong className="text-[#0B0F19] font-semibold">Point A2B</strong> handles every step of your delivery, so you can focus on growing your business.
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
                                className={`relative w-full h-[400px] xs:h-[450px] sm:h-[500px] md:h-[540px] lg:h-[600px] rounded-[1.25rem] md:rounded-none overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group select-none shadow-[0_20px_40px_rgba(142,36,255,0.06)] ${isHovered ? 'z-30 shadow-[0_40px_80px_rgba(142,36,255,0.25)]' : 'z-10'}`}
                                style={{
                                    clipPath: isMobile ? "none" : card.clipPathId,
                                    transform: isMobile
                                        ? (isHovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)")
                                        : (isHovered
                                            ? "perspective(1200px) rotateY(0deg) rotateZ(0deg) translateY(-8px) translateZ(30px) scale(1.04)"
                                            : isAnyHovered
                                                ? `${card.defaultTransform} scale(0.96) opacity(0.85)`
                                                : card.defaultTransform),
                                    transformStyle: isMobile ? "flat" : "preserve-3d",
                                    willChange: "transform, opacity",
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
                                <div className="absolute inset-0 bg-gradient-to-t from-[#270B4B]/60 via-transparent to-transparent z-10 transition-opacity duration-700 group-hover:opacity-0" />
                                
                                {/* Dynamic Glowing Border on Hover */}
                                <div className="absolute inset-0 border-2 border-[#8E24FF]/0 group-hover:border-[#8E24FF]/30 transition-colors duration-700 z-30 pointer-events-none rounded-[1.25rem] md:rounded-none" />
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