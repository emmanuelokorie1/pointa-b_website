"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import { motion } from 'framer-motion';

// High-performance animated counter that triggers when in viewport
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isIntersecting) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration, isIntersecting]);

    const formatNumber = (num: number) => {
        return num.toLocaleString();
    };

    return (
        <span ref={elementRef} className="tabular-nums">
            {formatNumber(count)}{suffix}
        </span>
    );
};

// Premium, lightweight 3D hover tilt & cursor shine spot wrapper component
const Card3D = ({ children, className, delay = 0, initialY = 40 }: { children: React.ReactNode; className: string; delay?: number; initialY?: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    // We removed the expensive mousemove state tracking to dramatically improve performance
    // and prevent severe lag caused by continuous React re-renders.

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: initialY }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
            className={`${className} relative cursor-pointer`}
            style={{
                transformStyle: "preserve-3d"
            }}
        >
            {/* Static specular reflection layer on hover */}
            <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30 opacity-0 group-hover:opacity-100" 
                style={{ background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.08), transparent 70%)' }}
            />
            
            {/* 3D floating perspective inner container */}
            <div className="w-full h-full flex flex-col" style={{ transform: "translateZ(18px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <section className="w-full bg-[#FDFDFD] py-14 sm:py-20 relative overflow-hidden select-none border-b border-black/[0.03]">
            {/* Topographic outline contour visual overlays in the background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path d="M0 150 C180 200 240 100 400 160 C560 220 620 300 780 260 C900 230 940 320 1000 300" fill="none" stroke="#120024" strokeWidth="2.5" />
                    <path d="M0 320 C220 400 280 220 500 320 C720 420 780 280 920 380 C950 360 970 400 1000 420" fill="none" stroke="#120024" strokeWidth="2.5" />
                    <path d="M0 550 C180 600 340 500 560 580 C780 660 880 540 1000 620" fill="none" stroke="#120024" strokeWidth="2.5" />
                    <path d="M0 780 C280 860 440 740 720 830 C880 880 940 800 1000 840" fill="none" stroke="#120024" strokeWidth="2.5" />
                </svg>
            </div>

            {/* Subtle premium ambient light glow */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(233, 213, 255, 0.2) 0%, transparent 70%)' }}></div>

            <div className="max-w-[90%] lg:max-w-[87%] xl:max-w-[87%] mx-auto relative z-10">

                {/* 1. Badge & Headings (Slide up & Fade in) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col text-left space-y-5 mb-10 sm:mb-16"
                >
                    {/* Micro-badge */}
                    <div className="flex">
                        <span className="text-primary bg-primary/8 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-[0_2px_10px_hsla(var(--primary)/0.03)] border border-primary/10">
                            / About Us
                        </span>
                    </div>

                    {/* Playfair Highlight Title */}
                    <h2 className="text-[#120024] text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-semibold tracking-tight font-sans leading-[1.12]">
                        We Are The <span className="font-['Playfair_Display'] italic font-medium text-primary inline">Bridge</span> Between Your Business And Your Customer.
                    </h2>

                    {/* Mission Paragraph */}
                    <p className="text-[#120024]/70 text-sm sm:text-base md:text-[1.25rem] leading-relaxed tracking-wide font-sans pt-1">
                        <strong className="text-[#120024] font-semibold">Point A2B</strong> Logistics was built on one simple belief, that every delivery matters. We started as a small team with big ambitions, and today we move hundreds of packages daily across cities, connecting businesses to their customers with speed, precision and care. We don't just deliver goods, we deliver trust.
                    </p>
                </motion.div>

                {/* 2. Bento Grid System */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

                    {/* LEFT COLUMN: Wide yellow card + Two side-by-side cards */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">

                        {/* Card 1: Moves Completed (Pastel Yellow Wide Card) with 3D Hover & Cursor Shine */}
                        <Card3D
                            className="overflow-hidden rounded-[2rem] bg-[#FFF781] border border-yellow-300/20 p-6 xs:p-8 sm:p-10 flex flex-col justify-between h-[260px] xs:h-[280px] sm:h-[300px] md:h-[320px] group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out"
                            delay={0}
                        >
                            {/* Dotted curve design vector overlay in the background */}
                            <div className="absolute -top-20 left-56 w-64 h-64 opacity-25 pointer-events-none" style={{ transform: "translateZ(-10px)" }}>
                                <svg className="w-full h-full text-[#120024]/40" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                                </svg>
                            </div>

                            {/* Stat details */}
                            <div className="relative z-10 flex flex-col gap-1 sm:gap-2 justify-between h-full max-w-[62%] xs:max-w-[60%] sm:max-w-[55%]" style={{ transform: "translateZ(25px)" }}>
                                <span className="text-[10px] sm:text-xs font-bold text-[#000000] uppercase tracking-widest">
                                    Moves completed
                                </span>
                                <div>
                                    <h3 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#120024] tracking-tight mt-0.5 sm:mt-1">
                                        <AnimatedCounter end={15000} suffix="+" />
                                    </h3>
                                    <p className="text-[11px] xs:text-xs sm:text-[13px] text-[#120024]/80 leading-relaxed mt-2 sm:mt-4 font-medium">
                                        Whether it’s a local apartment or a large office move, we’ve successfully relocated thousands.
                                    </p>
                                </div>
                            </div>

                            {/* Van stacked with boxes asset */}
                            <div 
                                className="absolute bottom-[-12%] xs:bottom-[-16%] sm:bottom-[-20%] right-[-6%] sm:right-[-5%] w-[48%] xs:w-[46%] sm:w-[44%] h-[68%] xs:h-[73%] sm:h-[78%] select-none pointer-events-none transform group-hover:scale-[1.04] group-hover:translate-x-1 transition-all duration-500 ease-out"
                                style={{ transform: "translateZ(30px)" }}
                            >
                                <Image
                                    src={images.carPackage}
                                    alt="Delivery van with packages"
                                    fill
                                    className="object-contain object-bottom-right"
                                    sizes="(max-width: 640px) 130px, (max-width: 768px) 180px, 280px"
                                    priority
                                />
                            </div>
                        </Card3D>

                        {/* Bottom Row under Left side: Card 3 & Card 4 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:flex-1">

                            {/* Card 3: Illustrated Smiley Cardboard Box with 3D Hover & Cursor Shine */}
                            <Card3D
                                className="overflow-hidden rounded-[2rem] bg-[#FAF7F2] border border-[#120024]/[0.02] flex items-center justify-center min-h-[300px] lg:h-full group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out"
                                delay={0.1}
                            >
                                <div 
                                    className="relative w-full h-full transform group-hover:scale-[1.06] group-hover:rotate-2 transition-all duration-500 ease-out p-4 sm:p-5"
                                    style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                                >
                                    <Image
                                        src={images.box2}
                                        alt="Illustrated smiling delivery cardboard box"
                                        fill
                                        sizes="(max-width: 640px) 240px, 320px"
                                        className="object-cover rounded-[1.5rem]"
                                    />
                                </div>
                            </Card3D>

                            {/* Card 4: Industry Experience (Square White Card) with 3D Hover & Cursor Shine */}
                            <Card3D
                                className="overflow-hidden rounded-[2rem] bg-white border border-[#120024]/[0.04] p-8 flex flex-col justify-between min-h-[300px] lg:h-full group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out shadow-[0_8px_32px_rgba(0,0,0,0.01)]"
                                delay={0.2}
                            >
                                <div style={{ transform: "translateZ(10px)" }}>
                                    <span className="text-[11px] sm:text-xs font-bold text-[#120024]/40 uppercase tracking-widest block">
                                        Industry experience
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1 mt-auto" style={{ transform: "translateZ(25px)" }}>
                                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#120024] tracking-tight">
                                        <AnimatedCounter end={10} suffix="+ Years" />
                                    </h3>
                                    <p className="text-xs sm:text-[13px] text-[#120024]/60 leading-relaxed mt-3">
                                        A decade of expertise means you're in safe, experienced hands.
                                    </p>
                                </div>
                            </Card3D>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Tall Movers Card + Dark satisfaction Card */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">

                        {/* Card 2: Movers Carrying Boxes (Tall grey/off-white card) with 3D Hover & Cursor Shine */}
                        <Card3D
                            className="overflow-hidden rounded-[2rem] bg-[#EBECEC] border border-black/[0.02] flex items-center justify-center min-h-[360px] sm:min-h-[400px] lg:flex-1 group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out"
                            delay={0.15}
                        >
                            <div 
                                className="relative w-full h-full transform group-hover:scale-[1.04] transition-all duration-500 ease-out p-4 sm:p-5"
                                style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src={images.packages}
                                    alt="Movers relocation delivery helpers carrying box"
                                    fill
                                    sizes="(max-width: 1024px) 350px, 500px"
                                    className="object-cover rounded-[1.5rem]"
                                    priority
                                />
                            </div>
                        </Card3D>

                        {/* Card 5: Customer Satisfaction (Dark Charcoal Card) with 3D Hover & Cursor Shine */}
                        <Card3D
                            className="overflow-hidden rounded-[2rem] bg-[#120024] p-8 flex flex-col justify-between h-[240px] sm:h-[260px] group hover:-translate-y-1.5 hover:shadow-[0_24px_48px_hsla(var(--primary)/0.12)] transition-all duration-500 ease-out border border-white/[0.04]"
                            delay={0.25}
                        >
                            {/* Subtle dark ambient glow inside card */}
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ transform: "translateZ(-5px)", background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)' }}></div>

                            <div className="relative z-10" style={{ transform: "translateZ(10px)" }}>
                                <span className="text-[11px] sm:text-xs font-bold text-white/40 uppercase tracking-widest block">
                                    Customer satisfaction
                                </span>
                            </div>

                            <div className="mt-auto relative z-10 flex flex-col gap-1" style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
                                <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                                    <AnimatedCounter end={99} suffix="%" />
                                </h3>
                                <p className="text-sm sm:text-[18px] text-white/70 leading-relaxed mt-2.5 max-w-[90%]">
                                    Our clients love us for our reliability, speed, and stress-free service.
                                </p>

                                {/* Avatars & Pulse Pill row */}
                                <div className="flex flex-wrap items-center gap-3 mt-4" style={{ transform: "translateZ(15px)" }}>
                                    {/* Circular Overlapping Avatar Stack */}
                                    <div className="flex -space-x-3">
                                        {[images.Landing1, images.Landing2, images.Landing3, images.Landing4].map((avatar, idx) => (
                                            <div key={idx} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#120024] shadow-md hover:scale-115 hover:z-20 transition-transform duration-300">
                                                <Image
                                                    src={avatar}
                                                    alt={`Satisfied customer testimonial avatar ${idx + 1}`}
                                                    fill
                                                    sizes="32px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                        {/* Extra count pill */}
                                        <div className="relative w-10 h-10 rounded-full bg-primary border-2 border-[#120024] flex items-center justify-center shadow-md text-[9px] font-extrabold text-white select-none transform hover:scale-110 transition-transform duration-300" style={{ transform: "translateZ(5px)" }}>
                                            +12k
                                        </div>
                                    </div>

                                    {/* Active Client / Rating Tag */}
                                    {/* <div className="flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.08] rounded-full px-2.5 py-1 text-[10px] font-bold text-white/80 shadow-inner select-none" style={{ transform: "translateZ(10px)" }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#D6FF38] animate-pulse"></span>
                                        <span>4.9/5 Rating</span>
                                    </div> */}

                                    {/* Glowing Red Heart Circle Pill with dynamic nested ripple ring */}
                                    {/* <div className="relative flex items-center justify-center ml-auto">
                                        <div className="absolute inset-0 rounded-full bg-red-500/35 animate-ping opacity-60 pointer-events-none scale-105"></div>
                                        <div className="relative w-8 h-8 rounded-full bg-red-500/15 border border-red-500/40 flex items-center justify-center shadow-[0_0_14px_rgba(239,68,68,0.35)] hover:scale-110 transition-transform cursor-pointer">
                                            <span className="text-red-500 text-xs select-none">❤️</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </Card3D>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;