"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/constants';

const AppProvides = () => {
    return (
        <section className="relative bg-gradient-to-br h-fit from-[#120024] via-[#240046] to-[#3C0070] overflow-hidden select-none">
            {/* Ambient Background Spot Lamps */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[130px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" style={{ animationDuration: '8s' }}></div>

            <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* LEFT COLUMN: Narrative, CTAs, and Features */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-8 lg:space-y-10">
                    
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
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 bg-white text-[#3B007A] text-[11px] font-extrabold px-6 py-3.5 rounded-full shadow-[0_12px_36px_rgba(136, 3, 224, 0.25)] hover:shadow-[0_16px_40px_rgba(136, 3, 224, 0.35)] transition-all duration-300 w-fit cursor-pointer"
                    >
                        {/* Play Store SVG */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M3 5.277c0-.285.08-.553.226-.788l10.395 10.395-10.428-10.428C3.08 4.75 3 5.006 3 5.277v13.446c0 .27.08.527.226.756l10.428-10.428L3.226 19.45c-.146-.235-.226-.503-.226-.788V5.277zm11.373 7.15l2.973 2.973L3.922 21.053l10.451-8.626zm3.626-2.996L4.549 3.013l12.824 6.412 1.344.672-1.344.672-.672.336zm.672.336l3.35 1.675c.677.338.677 1.112 0 1.45l-3.35 1.675-2.973-2.973 2.973-2.973z" />
                        </svg>
                        {/* Apple Store SVG */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.51-.62.73-1.16 1.87-1.01 2.98 1.12.09 2.27-.62 2.94-1.43z" />
                        </svg>
                        <span>Download App</span>
                    </motion.div>

                    {/* Features Columns divided by border */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-24">
                        
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
                <div className="lg:col-span-6 relative flex items-center justify-center min-h-[660px] md:min-h-[720px] w-full">
                    
                    {/* Ambient Glow immediately behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/30 blur-[80px] rounded-full pointer-events-none"></div>

                    {/* iPhone device mockup rendered in premium metallic dark titanium CSS */}
                  
                  
                    {/* FLOATING GLASS PANELS (TACTILE 3D DEPTH) */}
                    
                    {/* LEFT PANEL: In-Transit deliveries (Fades up & Floats Y-axis) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30, y: 40 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        animate={{ y: [0, -8, 0] }}
                        className="absolute left-[-2rem] sm:left-0 md:left-4 top-[28%] w-[180px] h-fit sm:w-[200px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-20 flex flex-col space-y-3"
                        style={{ animationDuration: '6s', animationIterationCount: 'infinite', animationName: 'floatY' }}
                    >
                         <Image
                            src={images?.Frame1}
                            alt="Point A2B Mobile App Mockup Screen showing live order tracking"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    {/* iPhone device mockup rendered using images.iPhone */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50, rotate: 1 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                        className="relative w-[300px] h-[610px] md:w-[400px] md:h-[660px] select-none z-10 flex items-end justify-end"
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
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        animate={{ y: [0, 6, 0] }}
                        className="absolute right-[-1rem] sm:right-4 md:right-8 top-[18%] w-[110px] sm:w-[130px] h-[75px] sm:h-[85px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[14px] rounded-[1.25rem] shadow-[0_20px_45px_rgba(0,0,0,0.25)] z-20 pointer-events-none"
                        style={{ animationDuration: '8s', animationIterationCount: 'infinite', animationName: 'floatYInverse' }}
                    ></motion.div>

                    {/* Bottom Right glass block */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        animate={{ y: [0, -6, 0] }}
                        className="absolute right-[-2rem] sm:right-0 md:right-4 bottom-[20%] w-[110px] sm:w-[130px] h-[75px] sm:h-[85px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[14px] rounded-[1.25rem] shadow-[0_20px_45px_rgba(0,0,0,0.25)] z-20 pointer-events-none"
                        style={{ animationDuration: '7s', animationIterationCount: 'infinite', animationName: 'floatY' }}
                    ></motion.div>

                </div>

            </div>
        </section>
    );
};

export default AppProvides;