"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { homeImages as images } from '@/constants/images/home';

const ServiceCard = ({
    card,
    index,
    slideIndex,
    hoveredIndex,
    setHoveredIndex,
    isMobile,
}: {
    card: {
        slides: typeof images.slide1[];
        clipPathId: string;
        defaultTransform: string;
    };
    index: number;
    slideIndex: number;
    hoveredIndex: number | null;
    setHoveredIndex: (i: number | null) => void;
    isMobile: boolean;
}) => {
    const [cardRef, cardVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-60px', once: true });
    const isHovered = hoveredIndex === index;
    const isAnyHovered = hoveredIndex !== null;
    const imageIndex = slideIndex % card.slides.length;
    const currentImage = card.slides[imageIndex];

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative w-full h-[400px] xs:h-[450px] sm:h-[500px] md:h-[540px] lg:h-[600px] rounded-[1.25rem] md:rounded-none overflow-hidden cursor-pointer transition-transform duration-500 ease-out group select-none shadow-[0_20px_40px_rgba(142,36,255,0.06)] fade-in-up ${cardVisible ? 'is-visible' : ''} ${isHovered ? 'z-30 shadow-[0_40px_80px_rgba(142,36,255,0.25)]' : 'z-10'}`}
            style={{
                clipPath: isMobile ? 'none' : card.clipPathId,
                transform: isMobile
                    ? (isHovered ? 'scaleX(1.02)' : 'scale(1)')
                    : (isHovered
                        ? 'scaleX(1.04)'
                        : isAnyHovered
                            ? `${card.defaultTransform} scaleX(0.97)`
                            : card.defaultTransform),
                contain: 'layout paint',
                transitionDelay: `${index * 150}ms`,
            }}
        >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    key={`${slideIndex}-${index}`}
                    src={currentImage}
                    alt={`Delivery service showcase ${index + 1}`}
                    fill
                    className="object-cover service-slide-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                    loading="lazy"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#270B4B]/60 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 border-2 border-[#8E24FF]/0 group-hover:border-[#8E24FF]/30 transition-colors duration-500 z-30 pointer-events-none rounded-[1.25rem] md:rounded-none" />
        </div>
    );
};

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({ rootMargin: '200px', once: false });
    const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-100px', once: true });

    const serviceCards = useMemo(() => {
        const slidesLeft = [images.slide9, images.slide1, images.Landing2];
        const slidesMiddle = [images.merchant1, images.Landing3, images.Landing4];
        const slidesRight = [images.Landing1, images.Landing5, images.Landing6];

        return [
            {
                slides: slidesLeft,
                clipPathId: 'url(#clip-left)',
                defaultTransform: 'translateZ(0px)',
            },
            {
                slides: slidesMiddle,
                clipPathId: 'url(#clip-middle)',
                defaultTransform: 'translateZ(0px)',
            },
            {
                slides: slidesRight,
                clipPathId: 'url(#clip-right)',
                defaultTransform: 'translateZ(0px)',
            },
        ];
    }, []);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setSlideIndex((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#F4EAFF] py-20 sm:py-32 relative overflow-hidden select-none border-b border-black/[0.03] font-sans"
        >
            <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] mx-auto relative z-10">
                <div
                    ref={headerRef}
                    className={`flex flex-col items-center text-center mb-16 sm:mb-24 relative z-20 fade-in-up ${headerVisible ? 'is-visible' : ''}`}
                >
                    <div className="bg-white/90 border border-[#8E24FF]/20 text-[#8E24FF] text-[11px] sm:text-xs font-bold px-6 py-2.5 rounded-full shadow-sm uppercase tracking-[0.15em] inline-flex items-center gap-2.5 mb-6">
                        Premium Delivery Services
                    </div>

                    <h2 className="text-[#0B0F19] text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] font-bold tracking-tight font-sans leading-[1.1] max-w-4xl drop-shadow-sm mb-6">
                        Everything You Need To <span className="font-['Playfair_Display'] italic font-medium text-[#8E24FF] inline">Deliver</span> With Confidence
                    </h2>

                    <p className="text-[#475569] text-base sm:text-lg md:text-[1.125rem] leading-relaxed max-w-2xl tracking-wide font-medium">
                        From booking to payment, <strong className="text-[#0B0F19] font-semibold">Point A2B</strong> handles every step of your delivery, so you can focus on growing your business.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-3.5 xs:gap-4 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5 items-stretch"
                    style={{ perspective: '1500px' }}
                >
                    {serviceCards.map((card, index) => (
                        <ServiceCard
                            key={index}
                            card={card}
                            index={index}
                            slideIndex={slideIndex}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>

            <svg className="absolute w-0 h-0 pointer-events-none" width="0" height="0">
                <defs>
                    <clipPath id="clip-left" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.04 Q 0,0 0.02,0 Q 0.5,0.04 0.98,0.08 Q 1,0.08 1,0.10 L 1,0.90 Q 1,0.92 0.98,0.92 Q 0.5,0.96 0.02,1.0 Q 0,1.0 0,0.96 Z" />
                    </clipPath>
                    <clipPath id="clip-middle" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.10 Q 0,0.08 0.02,0.08 L 0.98,0.08 Q 1,0.08 1,0.10 L 1,0.90 Q 1,0.92 0.98,0.92 L 0.02,0.92 Q 0,0.92 0,0.90 Z" />
                    </clipPath>
                    <clipPath id="clip-right" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.10 Q 0,0.08 0.02,0.08 Q 0.5,0.04 0.98,0 Q 1,0 1,0.04 L 1,0.96 Q 1,1.0 0.98,1.0 Q 0.5,0.96 0.02,0.92 Q 0,0.92 0,0.90 Z" />
                    </clipPath>
                </defs>
            </svg>
        </section>
    );
};

export default Services;
