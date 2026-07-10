"use client";

import React from 'react';
import Image from 'next/image';
import { sharedImages as images } from '@/constants/images/shared';
import DownloadAppButton from '@/components/ui/DownloadAppButton';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AppProvides = () => {
    const [sectionRef, sectionVisible] = useIntersectionObserver<HTMLElement>({ rootMargin: '0px', once: false });
    const [headingRef, headingVisible] = useIntersectionObserver<HTMLHeadingElement>({ rootMargin: '-80px', once: true });
    // Single observer covers both feature blocks (adjacent elements)
    const [feat1Ref, feat1Visible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-60px', once: true });
    const [feat2Ref, feat2Visible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-60px', once: true });
    // Single observer for the right-column device stage — all panels share same visibility
    const [phoneRef, phoneVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: '-40px', once: true });
    // Reuse phoneVisible for all floating panels (they enter viewport at the same time)
    const leftPanelRef = React.useRef<HTMLDivElement>(null);
    const topPanelRef = React.useRef<HTMLDivElement>(null);
    const botPanelRef = React.useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className={`relative bg-[#3B007A] bg-gradient-to-br from-[#270054] via-[#3B007A] to-[#5100A8] pt-16 pb-0 sm:pt-24 sm:pb-0 lg:py-0 lg:h-fit overflow-hidden select-none ${!sectionVisible ? 'animations-paused' : ''}`}>

            {/* Ambient Background Spot Lamps */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)' }}></div>

            <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-stretch">

                {/* LEFT COLUMN: Narrative, CTAs, and Features */}
                <div className="lg:col-span-6 flex flex-col justify-center lg:justify-between text-left pt-12 sm:pb-6 lg:py-20 gap-10 lg:gap-0">

                    {/* Top block: Heading + CTA */}
                    <div className="space-y-8">
                        {/* Badge & Primary Heading */}
                        <div className="space-y-4">
                            <h2
                                ref={headingRef}
                                className={`text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-[1.1] fade-in-up ${headingVisible ? 'is-visible' : ''}`}
                            >
                                The App Provides <br />
                                Real Time Order Tracking
                            </h2>
                        </div>

                        {/* Integrated Premium White Glass "Download App" Pill */}
                        <DownloadAppButton id="provides-download-app-btn" variant="glass" />
                    </div>

                    {/* Features Columns divided by border */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">

                        {/* Customer Delivery Feature */}
                        <div
                            ref={feat1Ref}
                            className={`flex flex-col space-y-4 text-left group fade-in-up ${feat1Visible ? 'is-visible' : ''}`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shadow-md">
                                <svg className="w-6 h-6 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                                    <path d="M16 4h4v4" /><line x1="20" y1="4" x2="14" y2="10" />
                                    <path d="M8 20H4v-4" /><line x1="4" y1="20" x2="10" y2="14" />
                                    <path d="M8 4H4v4" /><line x1="4" y1="4" x2="10" y2="10" />
                                    <path d="M16 20h4v-4" /><line x1="20" y1="20" x2="14" y2="14" />
                                </svg>
                            </div>
                            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight font-sans">Customer Delivery</h3>
                            <p className="text-white/70 text-sm sm:text-[14px] leading-relaxed max-w-sm">
                                Gives users live updates and ETA tracking for a smoother, hassle-free experience
                            </p>
                        </div>

                        {/* Rider Earnings Feature */}
                        <div
                            ref={feat2Ref}
                            className={`flex flex-col space-y-4 text-left border-t sm:border-t-0 sm:border-l border-white/10 pt-8 sm:pt-0 sm:pl-10 md:pl-12 group fade-in-up ${feat2Visible ? 'is-visible' : ''}`}
                            style={{ transitionDelay: '300ms' }}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shadow-md">
                                <svg className="w-6 h-6 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                                    <path d="M16 4h4v4" /><line x1="20" y1="4" x2="14" y2="10" />
                                    <path d="M8 20H4v-4" /><line x1="4" y1="20" x2="10" y2="14" />
                                    <path d="M8 4H4v4" /><line x1="4" y1="4" x2="10" y2="10" />
                                    <path d="M16 20h4v-4" /><line x1="20" y1="20" x2="14" y2="14" />
                                </svg>
                            </div>
                            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight font-sans">Rider Earnings</h3>
                            <p className="text-white/70 text-sm sm:text-[14px] leading-relaxed max-w-sm">
                                Gives riders real-time bid notifications and daily payouts for a flexible, rewarding delivery experience.
                            </p>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Device Stage featuring iPhone SVG & Floating Glass Panels */}
                <div className="lg:col-span-6 relative flex items-end justify-center w-full min-h-[350px] sm:min-h-[450px] lg:min-h-[660px] xl:min-h-[720px] lg:h-full pb-0">

                    {/* Ambient Glow immediately behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)' }}></div>

                    {/* LEFT PANEL: In-Transit deliveries
                        Entrance: fade-in-up via IntersectionObserver
                        Float:    CSS @keyframe floatY-8 (6s) — zero JS per frame */}
                    <div
                        ref={leftPanelRef}
                        className={`absolute left-[-0.75rem] sm:left-0 md:left-4 top-[25%] lg:top-[28%] w-[110px] sm:w-[160px] md:w-[180px] lg:w-[200px] bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-20 fade-in-up ${phoneVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        {/* CSS float — replaces motion.div animate={{ y: [0,-8,0] }} repeat:Infinity */}
                        <div className="float-panel-left w-full h-full">
                            <Image
                                src={images?.Frame1}
                                alt="Point A2B Mobile App Mockup Screen showing live order tracking"
                                width={200}
                                height={240}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* iPhone device mockup — entrance only, no repeat animation */}
                    <div
                        ref={phoneRef}
                        className={`relative w-[220px] h-[440px] sm:w-[300px] sm:h-[610px] lg:w-[340px] lg:h-[650px] xl:w-[400px] xl:h-[700px] select-none z-10 flex items-end justify-center lg:justify-end fade-in-up ${phoneVisible ? 'is-visible' : ''}`}
                    >
                        <Image
                            src={images?.iPhone}
                            alt="Point A2B Mobile App Mockup Screen showing live order tracking"
                            fill
                            sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 400px"
                            className="object-contain object-bottom"
                        />
                    </div>

                    {/* Top Right glass block
                        Float: CSS @keyframe floatY6 (8s) — zero JS per frame */}
                    <div
                        ref={topPanelRef}
                        className={`absolute right-[-0.25rem] sm:right-4 md:right-8 top-[15%] lg:top-[18%] w-[130px] sm:w-[200px] md:w-[220px] lg:w-[260px] h-[95px] sm:h-[140px] md:h-[150px] lg:h-[180px] bg-purple-950/90 border border-white/[0.15] rounded-[1rem] sm:rounded-[1.75rem] shadow-[0_24px_50px_rgba(0,0,0,0.35)] z-20 pointer-events-none p-2.5 sm:p-5 flex flex-col justify-between fade-in-up ${phoneVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        {/* CSS float — replaces motion.div animate={{ y: [0,6,0] }} repeat:Infinity */}
                        <div className="float-panel-top w-full h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <span className="text-[7px] sm:text-[10px] font-bold text-white/70 uppercase tracking-wider">Fast Delivery</span>
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D6FF38] animate-pulse"></span>
                            </div>
                            <div className="space-y-0.5">
                                <div className="text-base sm:text-2xl md:text-3xl font-black text-white leading-none">99.8%</div>
                                <div className="text-[7px] sm:text-[10px] md:text-xs text-white/90">On-Time ETA Accuracy</div>
                            </div>
                            <div className="w-full bg-white/10 h-1 sm:h-1.5 rounded-full overflow-hidden">
                                <div className="bg-[#D6FF38] h-full w-[95%]" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Right glass block
                        Float: CSS @keyframe floatY-6 (7s) — zero JS per frame */}
                    <div
                        ref={botPanelRef}
                        className={`absolute right-[-0.5rem] sm:right-0 md:right-4 bottom-[15%] lg:bottom-[20%] w-[130px] sm:w-[200px] md:w-[220px] lg:w-[260px] h-[95px] sm:h-[140px] md:h-[150px] lg:h-[180px] bg-purple-950/90 border border-white/[0.15] rounded-[1rem] sm:rounded-[1.75rem] shadow-[0_24px_50px_rgba(0,0,0,0.35)] z-20 pointer-events-none p-2.5 sm:p-5 flex flex-col justify-between fade-in-up ${phoneVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        {/* CSS float — replaces motion.div animate={{ y: [0,-6,0] }} repeat:Infinity */}
                        <div className="float-panel-bottom w-full h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <span className="text-[7px] sm:text-[10px] font-bold text-white/70 uppercase tracking-wider">Rider Payout</span>
                                <span className="text-[8px] sm:text-[11px] font-extrabold text-[#D6FF38]">Active</span>
                            </div>
                            <div className="space-y-0.5">
                                <div className="text-xs sm:text-xl md:text-2xl font-black text-white leading-none">Daily Payouts</div>
                                <div className="text-[7px] sm:text-[10px] md:text-xs text-white/90 font-medium">Flexible bid rewards</div>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-1.5">
                                <span className="text-[7px] sm:text-[10px] text-white/40">Secured via</span>
                                <span className="text-[7px] sm:text-[10px] font-bold text-white/80">91Pay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppProvides;