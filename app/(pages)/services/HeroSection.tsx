import React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import { images } from '@/constants';

const HeroSection = () => {
    return (
        <div className='bg-gray-50'>
            {/* Hero Header Section */}
            <section className="relative w-full bg-[#5B0097] pt-32 md:pt-40 pb-44 md:pb-60 px-6 sm:px-8 overflow-hidden z-0">
                {/* Slanted translucent decorative stripes on the left */}
                <div className="absolute inset-y-0 left-0 w-full md:w-3/5 opacity-10 pointer-events-none select-none z-0">
                    <svg className="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M20,-10 L38,-10 L-2,110 L-20,110 Z" fill="currentColor" />
                        <path d="M45,-10 L63,-10 L23,110 L5,110 Z" fill="currentColor" />
                    </svg>
                </div>

                {/* Text Content */}
                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                    {/* Page Badge */}
                    <Badge text="SERVICES" variant="glass" className="mb-6" />

                    {/* Heading */}
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.15] mb-6">
                        Everything you need, Delivered
                    </h1>

                    {/* Paragraph Description */}
                    <p className="text-white/85 text-base md:text-lg lg:text-xl font-medium max-w-4xl leading-relaxed tracking-wide">
                        From food to packages, from merchants to doorsteps, A2B offers a complete range
                        of delivery and logistics services built for speed, reliability and scale.
                    </p>
                </div>
            </section>

            <section className="relative z-10 px-6 smpx-[10px] sm:w-[90%] mx-auto w-full -mt-24 md:-mt-36 lg:-mt-44 mb-24">
                <div className="relative w-full aspect-[1305/651] overflow-hidden group" style={{ position: 'relative' }}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
                    <Image
                        src={images.serviceHero}
                        alt="Point A2B Services"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 85vw"
                        className="object-cover transition-transform duration-700 ease-out"
                        priority
                    />
                </div>
            </section>
        </div>
    )
}

export default HeroSection