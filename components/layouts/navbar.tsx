"use client";

import React, { useState, useEffect } from 'react';
import { routes } from '@/constants/route';
import { icons } from '@/constants';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import DownloadAppButton from '@/components/ui/DownloadAppButton';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Pages with white/light backgrounds — navbar should always use dark text
    const isLightPage = 
        pathname === routes.TRACK || pathname.startsWith('/track') ||
        pathname === routes.CONTACTUS ||
        pathname === routes.ABOUTUS ||
        pathname === routes.SERVICES;
    const isScrolledOrLight = isScrolled || isLightPage;

    const navItems = [
        {
            label: "About us",
            href: routes.ABOUTUS,
            description: "Our mission, vision, and team culture",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
            )
        },
        {
            label: "Services",
            href: routes.SERVICES,
            description: "Premium high-speed logistics solutions",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            )
        },
        {
            label: "Contact us",
            href: routes.CONTACTUS,
            description: "Get in touch with our fast support desk",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            )
        },
    ];

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[75%] mx-auto z-50">
                {/* iOS Transparent Frosted Glassmorphic Container */}
                <div className={`relative group/nav backdrop-blur-2xl rounded-[1rem] px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ${isScrolledOrLight
                        ? "bg-white/80 border border-[#120024]/10 shadow-[0_12px_32px_rgba(18,0,36,0.05),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:border-primary/20 hover:shadow-[0_16px_40px_hsla(var(--primary)/0.1)]"
                        : "bg-white/[0.08] border border-white/[0.12] shadow-[0_16px_40px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/[0.2] hover:shadow-[0_20px_50px_hsla(var(--primary)/0.15)]"
                    }`}>

                    {/* Subtle ambient border glow */}
                    <div className="absolute inset-0 rounded-[1rem] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-[1px]"></div>

                    {/* Logo Section */}
                    <div
                        onClick={() => {
                            router.push(routes.HOME);
                            setIsOpen(false);
                        }}
                        className="flex items-center gap-2.5 group cursor-pointer select-none"
                    >
                        <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#9B51E0] via-primary to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 group-hover:rotate-12 transition-all duration-300">
                            {/* Custom abstract connecting nodes SVG */}
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="relative z-10"
                            >
                                <circle cx="12" cy="5" r="1.5" fill="white" />
                                <circle cx="5" cy="12" r="1.5" fill="white" />
                                <circle cx="19" cy="12" r="1.5" fill="white" />
                                <circle cx="12" cy="19" r="1.5" fill="white" />
                                <circle cx="12" cy="12" r="2" fill="white" />
                                <line x1="12" y1="6.5" x2="12" y2="10" />
                                <line x1="12" y1="14" x2="12" y2="17.5" />
                                <line x1="6.5" y1="12" x2="10" y2="12" />
                                <line x1="14" y1="12" x2="17.5" y2="12" />
                            </svg>
                        </div>
                        <span className={`text-lg font-bold tracking-tight transition-colors font-sans ${isScrolledOrLight ? "text-[#120024]" : "text-white"}`}>
                            Point <span className={`font-['Playfair_Display'] italic font-medium lowercase transition-colors duration-300 ${isScrolledOrLight ? "text-primary" : "text-[#D6FF38]"}`}>a2b</span>
                        </span>
                    </div>

                    {/* Central Track (Desktop) */}
                    <div className="hidden lg:flex items-center lg:gap-1 xl:gap-2 relative">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => router.push(item.href)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    whileHover={{ y: -1, scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative px-4 xl:px-6 py-3 rounded-full cursor-pointer text-sm font-semibold tracking-wide transition-colors duration-300 select-none whitespace-nowrap ${isActive
                                        ? (isScrolledOrLight ? "text-primary" : "text-white")
                                        : (isScrolledOrLight ? "text-[#120024]/60 hover:text-[#120024]" : "text-white/60 hover:text-white")
                                        }`}
                                >
                                    {/* Active route glass backplate (permanent capsule with spring sliding transition) */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNavPill"
                                            className={`absolute inset-0 rounded-full -z-10 ${isScrolledOrLight
                                                    ? "bg-primary/8 border border-primary/12 shadow-[0_2px_8px_hsla(var(--primary)/0.04)]"
                                                    : "bg-white/[0.16] border border-white/[0.24] shadow-[0_8px_32px_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.25)] backdrop-blur-md"
                                                }`}
                                            transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.8 }}
                                        />
                                    )}

                                    {/* Frosted glass pill tracker on hover (spring sliding transition) */}
                                    {!isActive && hoveredIndex === index && (
                                        <motion.span
                                            layoutId="hoverNavPill"
                                            className={`absolute inset-0 rounded-full -z-10 ${isScrolledOrLight
                                                    ? "bg-[#120024]/5 border border-[#120024]/10 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                                                    : "bg-white/[0.08] border border-white/[0.12] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                                                }`}
                                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                        />
                                    )}

                                    <span className="relative z-10">
                                        {item.label}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Action Buttons & Mobile Menu Toggle */}
                    <div className="flex items-center gap-2.5">
                        <div className="hidden md:block">
                            <DownloadAppButton id="nav-download-app-btn" className="!py-3" />
                        </div>
                        {/* Custom-Tinted Royal Purple Glass Merchant Button (Visible on md+) */}
                        <button
                            onClick={() => router.push(routes.CONTACTUS)}
                            className={`hidden md:flex text-sm font-semibold px-4 xl:px-5 py-[12px] xl:py-[14px] rounded-full hover:scale-102 active:scale-98 transition-all duration-300 items-center justify-center cursor-pointer whitespace-nowrap ${isScrolledOrLight
                                    ? "bg-primary hover:bg-primary/90 text-white shadow-[0_8px_24px_hsla(var(--primary)/0.25)] border border-primary/10"
                                    : "bg-primary hover:bg-primary/25 text-white border border-primary/30 hover:border-primary/50 shadow-[0_8px_32px_0_hsla(var(--primary)/0.15)]"
                                }`}
                        >
                            Get started as Merchant
                        </button>

                        {/* Mobile Hamburger Menu Toggle (Visible below lg) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`flex lg:hidden items-center justify-center p-2.5 rounded-lg transition-all cursor-pointer ${isScrolledOrLight
                                    ? "bg-[#120024]/5 border border-[#120024]/10 hover:bg-[#120024]/10 hover:border-[#120024]/20"
                                    : "bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.18]"
                                }`}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={isScrolledOrLight ? "#120024" : "white"}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {isOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </>
                                ) : (
                                    <>
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sliding Full Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Translucent Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] lg:hidden"
                        />

                        {/* Slide-in Drawer Container */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 220 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-gradient-to-b from-[#120024] to-[#110026] border-l border-white/[0.08] shadow-[0_0_60px_rgba(0,0,0,0.6)] backdrop-blur-3xl z-[100] flex flex-col p-6 sm:p-8 lg:hidden overflow-hidden"
                        >
                            {/* Ambient Glows */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#8E24FF]/15 blur-[80px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
                            <div className="absolute bottom-1/3 -left-16 w-52 h-52 rounded-full bg-[#D6FF38]/5 blur-[70px] pointer-events-none -z-10" />

                            {/* Header Row (Fixed) */}
                            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] shrink-0">
                                <div
                                    onClick={() => {
                                        router.push(routes.HOME);
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-2.5 cursor-pointer select-none"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9B51E0] via-primary to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="5" r="1.5" fill="white" />
                                            <circle cx="5" cy="12" r="1.5" fill="white" />
                                            <circle cx="19" cy="12" r="1.5" fill="white" />
                                            <circle cx="12" cy="19" r="1.5" fill="white" />
                                            <circle cx="12" cy="12" r="2" fill="white" />
                                            <line x1="12" y1="6.5" x2="12" y2="10" />
                                            <line x1="12" y1="14" x2="12" y2="17.5" />
                                            <line x1="6.5" y1="12" x2="10" y2="12" />
                                            <line x1="14" y1="12" x2="17.5" y2="12" />
                                        </svg>
                                    </div>
                                    <span className="text-md font-bold tracking-tight text-white font-sans">
                                        Point <span className="font-['Playfair_Display'] italic font-medium text-[#D6FF38] lowercase">a2b</span>
                                    </span>
                                </div>

                                {/* Close Button */}
                                <motion.button
                                    whileHover={{ rotate: 90, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsOpen(false)}
                                    className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.16] text-white/70 hover:text-white transition-colors cursor-pointer"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </motion.button>
                            </div>

                            {/* Middle Links (Scrollable to prevent content overflow) */}
                            <div className="flex-1 overflow-y-auto py-4 pr-1 -mr-2 flex flex-col gap-4 scrollbar-thin">
                                {navItems.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                router.push(item.href);
                                                setIsOpen(false);
                                            }}
                                            className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${isActive
                                                ? "bg-gradient-to-r from-white/[0.08] to-white/[0.03] border-[#8E24FF]/40 shadow-[0_8px_32px_-8px_rgba(142,36,255,0.4)]"
                                                : "bg-white/[0.02] border-white/5 hover:border-[#8E24FF]/30 hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3.5">
                                                {/* Icon Badge */}
                                                <div className={`p-2.5 rounded-xl border transition-all duration-300 ${isActive
                                                    ? "bg-[#8E24FF] border-[#8E24FF]/20 text-[#D6FF38] shadow-[0_4px_12px_rgba(142,36,255,0.25)]"
                                                    : "bg-gradient-to-br from-white/5 to-white/[0.01] border-white/10 text-white/50 group-hover:from-[#8E24FF]/25 group-hover:to-[#8E24FF]/5 group-hover:border-[#8E24FF]/50 group-hover:text-[#D6FF38]"
                                                    }`}>
                                                    {item.icon}
                                                </div>
                                                
                                                {/* Text content */}
                                                <div className="flex flex-col gap-0.5">
                                                    <span className={`text-base font-bold tracking-tight transition-colors duration-300 ${isActive
                                                        ? "text-[#D6FF38]"
                                                        : "text-white/90 group-hover:text-[#D6FF38]"
                                                        }`}>
                                                        {item.label}
                                                    </span>
                                                    <span className="text-xs text-white/40 font-medium group-hover:text-white/60 transition-colors duration-300">
                                                        {item.description}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Arrow icon */}
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-[#8E24FF] group-hover:border-[#8E24FF] group-hover:text-white transition-all duration-300">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                                    <polyline points="7 7 17 7 17 17"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Bottom Actions Area (Fixed) */}
                            <div className="flex flex-col gap-4 w-full pt-6 border-t border-white/[0.06] shrink-0 mt-auto">
                                {/* Merchant Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        router.push(routes.CONTACTUS);
                                        setIsOpen(false);
                                    }}
                                    className="bg-gradient-to-r from-primary to-[#9B51E0] hover:from-primary/95 hover:to-[#9B51E0]/95 text-white text-sm font-bold py-4 rounded-xl shadow-[0_8px_32px_0_hsla(var(--primary)/0.3)] border border-primary/50 w-full text-center cursor-pointer font-sans"
                                >
                                    Get started as Merchant
                                </motion.button>

                                {/* Translucent App Pill */}
                                <DownloadAppButton id="nav-download-app-btn" variant="navbar" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;