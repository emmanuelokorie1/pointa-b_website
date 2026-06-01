"use client";

import React from 'react';
import Image from 'next/image';
import { icons } from '@/constants';

const TrutsedBrand = () => {
    // 8 items (already duplicated in state)
    const baseBrands = [
        { name: "91Pay", logo: icons.Nine1 },
        { name: "Blaiz", logo: icons.blaiz },
        { name: "ClaraWave", logo: icons.clara },
        { name: "Tuyaupay", logo: icons.tuyaupay },
        { name: "91Pay", logo: icons.Nine1 },
        { name: "Blaiz", logo: icons.blaiz },
        { name: "ClaraWave", logo: icons.clara },
        { name: "Tuyaupay", logo: icons.tuyaupay }
    ];

    // Double the array for infinite seamless looping
    const brands = [...baseBrands, ...baseBrands];

    return (
        <section className="w-full bg-[#F8F9FA] border-t border-black/[0.03] border-b py-10 sm:py-16 select-none overflow-hidden relative">
            
            {/* Subtle premium ambient glow in the center background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[160px] bg-purple-200/30 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
            
            {/* 1. Header Column (Centered with Max-Width Constraints) */}
            <div className="max-w-[90%] lg:max-w-[75%] xl:max-w-[70%] mx-auto flex flex-col items-center gap-6 relative z-10 mb-12 sm:mb-16">
                <div className="flex flex-col items-center text-center space-y-3.5">
                    {/* Micro-badge */}
                    <span className="text-primary bg-primary/8 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-[0_2px_10px_hsla(var(--primary)/0.03)] border border-primary/10">
                        Trusted Partners
                    </span>
                    {/* Main Title with brand accent highlight */}
                    <h3 className="text-[#120024] text-base sm:text-lg md:text-xl font-bold tracking-tight font-sans max-w-xl leading-snug">
                        Trusted by leading brands and <span className="text-primary font-semibold">high-growth global businesses</span>
                    </h3>
                </div>
            </div>

            {/* 2. Infinite Horizontal Sliding Marquee Container (Edge-to-Edge, Full screen width) */}
            <div className="relative w-full overflow-hidden py-4 z-10">
                
                {/* Specular vignette fade effect (Absolute left edge of browser window) */}
                <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/85 to-transparent z-20 pointer-events-none"></div>
                
                {/* Specular vignette fade effect (Absolute right edge of browser window) */}
                <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-[#F8F9FA] via-[#F8F9FA]/85 to-transparent z-20 pointer-events-none"></div>

                {/* Infinite Sliding Running Track */}
                <div className="flex items-center gap-10 sm:gap-14 w-max animate-marquee-horizontal hover:[animation-play-state:paused] cursor-pointer py-2">
                    {brands.map((brand, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-center px-10 py-6 min-w-[200px] sm:min-w-[240px] rounded-2xl bg-white/80 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md group hover:bg-white hover:border-primary/15 hover:shadow-[0_12px_40px_hsla(var(--primary)/0.06)] transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Specular Light Reflex sweep (Super subtle and premium) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10"></div>

                            {/* Brand Logo Wrapper */}
                            <div className="relative w-36 h-9 sm:w-40 sm:h-10 opacity-70 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center">
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 120px, 160px"
                                    priority={index < 8}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrutsedBrand;