"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/constants';
import DownloadAppButton from '@/components/ui/DownloadAppButton';

const AppProvides = () => {
    return (
        <section className="relative bg-[#3B007A] bg-gradient-to-br from-[#270054] via-[#3B007A] to-[#5100A8] py-16 sm:py-24 lg:py-0 lg:h-fit overflow-hidden select-none">

            {/* Ambient Background Spot Lamps */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)' }}></div>

            <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-stretch">
                
                {/* LEFT COLUMN: Narrative, CTAs, and Features */}
                <div className="lg:col-span-6 flex flex-col justify-center lg:justify-between text-left pt-12 pb-6 lg:py-20 gap-10 lg:gap-0">
                    
                    {/* Top block: Heading + CTA */}
                    <div className="space-y-8">
                        {/* Badge & Primary Heading */}
                        <div className="space-y-4">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-[1.1]"
                            >
                                The App Provides <br />
                                Real Time Order Tracking
                            </motion.h2>
                        </div>

                        {/* Integrated Premium White Glass "Download App" Pill */}
                        <DownloadAppButton id="provides-download-app-btn" variant="glass" />
                    </div>

                    {/* Features Columns divided by border */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                        
                        {/* Customer Delivery Feature */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col space-y-4 text-left group"
                        >
                            {/* Diagonal arrows expand SVG */}
                            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shadow-md">
                                <svg className="w-6 h-6 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                                    {/* Top-Right */}
                                    <path d="M16 4h4v4" />
                                    <line x1="20" y1="4" x2="14" y2="10" />
                                    {/* Bottom-Left */}
                                    <path d="M8 20H4v-4" />
                                    <line x1="4" y1="20" x2="10" y2="14" />
                                    {/* Top-Left */}
                                    <path d="M8 4H4v4" />
                                    <line x1="4" y1="4" x2="10" y2="10" />
                                    {/* Bottom-Right */}
                                    <path d="M16 20h4v-4" />
                                    <line x1="20" y1="20" x2="14" y2="14" />
                                </svg>
                            </div>
                            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight font-sans">
                                Customer Delivery
                            </h3>
                            <p className="text-white/70 text-sm sm:text-[14px] leading-relaxed max-w-sm">
                                Gives users live updates and ETA tracking for a smoother, hassle-free experience
                            </p>
                        </motion.div>

                        {/* Rider Earnings Feature */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col space-y-4 text-left border-t sm:border-t-0 sm:border-l border-white/10 pt-8 sm:pt-0 sm:pl-10 md:pl-12 group"
                        >
                            {/* Diagonal arrows expand SVG */}
                            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shadow-md">
                                <svg className="w-6 h-6 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                                    {/* Top-Right */}
                                    <path d="M16 4h4v4" />
                                    <line x1="20" y1="4" x2="14" y2="10" />
                                    {/* Bottom-Left */}
                                    <path d="M8 20H4v-4" />
                                    <line x1="4" y1="20" x2="10" y2="14" />
                                    {/* Top-Left */}
                                    <path d="M8 4H4v4" />
                                    <line x1="4" y1="4" x2="10" y2="10" />
                                    {/* Bottom-Right */}
                                    <path d="M16 20h4v-4" />
                                    <line x1="20" y1="20" x2="14" y2="14" />
                                </svg>
                            </div>
                            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight font-sans">
                                Rider Earnings
                            </h3>
                            <p className="text-white/70 text-sm sm:text-[14px] leading-relaxed max-w-sm">
                                Gives riders real-time bid notifications and daily payouts for a flexible, rewarding delivery experience.
                            </p>
                        </motion.div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Device Stage featuring iPhone SVG & Floating Glass Panels */}
                <div className="lg:col-span-6 relative flex items-center justify-center w-full min-h-[350px] sm:min-h-[450px] lg:min-h-[660px] xl:min-h-[720px] lg:h-full pb-10 lg:pb-0">
                    
                    {/* Ambient Glow immediately behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)' }}></div>
                    
                    {/* LEFT PANEL: In-Transit deliveries (Fades up & Floats Y-axis) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30, y: 40 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute left-[-0.75rem] sm:left-0 md:left-4 top-[25%] lg:top-[28%] w-[110px] sm:w-[160px] md:w-[180px] lg:w-[200px] bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-20"
                    >
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full"
                        >
                            <Image
                                src={images?.Frame1}
                                alt="Point A2B Mobile App Mockup Screen showing live order tracking"
                                width={200}
                                height={240}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    {/* iPhone device mockup rendered using images.iPhone */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50, rotate: 1 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                        className="relative w-[220px] h-[440px] sm:w-[300px] sm:h-[610px] lg:w-[340px] lg:h-[650px] xl:w-[400px] xl:h-[700px] select-none z-10 lg:flex lg:items-end lg:justify-end"
                    >
                        <Image
                            src={images?.iPhone}
                            alt="Point A2B Mobile App Mockup Screen showing live order tracking"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                    
                    {/* Top Right glass block */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute right-[-0.25rem] sm:right-4 md:right-8 top-[15%] lg:top-[18%] w-[130px] sm:w-[200px] md:w-[220px] lg:w-[260px] h-[95px] sm:h-[140px] md:h-[150px] lg:h-[180px] bg-purple-950/90 border border-white/[0.15] rounded-[1rem] sm:rounded-[1.75rem] shadow-[0_24px_50px_rgba(0,0,0,0.35)] z-20 pointer-events-none p-2.5 sm:p-5 flex flex-col justify-between"
                    >
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full flex flex-col justify-between"
                        >
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
                        </motion.div>
                    </motion.div>

                    {/* Bottom Right glass block */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30, y: -20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute right-[-0.5rem] sm:right-0 md:right-4 bottom-[15%] lg:bottom-[20%] w-[130px] sm:w-[200px] md:w-[220px] lg:w-[260px] h-[95px] sm:h-[140px] md:h-[150px] lg:h-[180px] bg-purple-950/90 border border-white/[0.15] rounded-[1rem] sm:rounded-[1.75rem] shadow-[0_24px_50px_rgba(0,0,0,0.35)] z-20 pointer-events-none p-2.5 sm:p-5 flex flex-col justify-between"
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full flex flex-col justify-between"
                        >
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
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AppProvides;