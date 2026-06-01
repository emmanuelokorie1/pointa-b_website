"use client";

import React, { useState, useEffect } from 'react';
import { routes } from '@/constants/route';
import { icons } from '@/constants';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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

    const navItems = [
        {
            label: "About us",
            href: routes.ABOUTUS
        },
        {
            label: "Services",
            href: routes.SERVICES
        },
        {
            label: "Contact us",
            href: routes.CONTACTUS
        },
    ];

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:max-w-[90%] lg:max-w-[75%] xl:max-w-[65%] mx-auto z-50">
            {/* iOS Transparent Frosted Glassmorphic Container */}
            <div className={`relative group/nav backdrop-blur-2xl rounded-[1rem] px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ${
                isScrolled
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
                    <span className={`text-lg font-bold tracking-tight transition-colors font-sans ${isScrolled ? "text-[#120024]" : "text-white"}`}>
                        Point <span className={`font-['Playfair_Display'] italic font-medium lowercase transition-colors duration-300 ${isScrolled ? "text-primary" : "text-[#D6FF38]"}`}>a2b</span>
                    </span>
                </div>

                {/* Central Track (Desktop) */}
                <div className="hidden md:flex items-center gap-3 relative">
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
                                className={`relative px-6 py-3 rounded-full cursor-pointer text-sm font-semibold tracking-wide transition-colors duration-300 select-none ${isActive
                                    ? (isScrolled ? "text-primary" : "text-white")
                                    : (isScrolled ? "text-[#120024]/60 hover:text-[#120024]" : "text-white/60 hover:text-white")
                                    }`}
                            >
                                {/* Active route glass backplate (permanent capsule with spring sliding transition) */}
                                {isActive && (
                                    <motion.span
                                        layoutId="activeNavPill"
                                        className={`absolute inset-0 rounded-full -z-10 ${
                                            isScrolled 
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
                                        className={`absolute inset-0 rounded-full -z-10 ${
                                            isScrolled
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
                <div className="flex items-center gap-3">
                    {/* Custom-Tinted Royal Purple Glass Merchant Button (Visible on sm+) */}
                    <button
                        onClick={() => router.push(routes.CONTACTUS)}
                        className={`hidden sm:flex text-sm font-semibold px-5 py-3 rounded-full hover:scale-102 active:scale-98 transition-all duration-300 items-center justify-center cursor-pointer ${
                            isScrolled
                            ? "bg-primary hover:bg-primary/90 text-white shadow-[0_8px_24px_hsla(var(--primary)/0.25)] border border-primary/10"
                            : "bg-primary hover:bg-primary/25 text-white border border-primary/30 hover:border-primary/50 shadow-[0_8px_32px_0_hsla(var(--primary)/0.15)]"
                        }`}
                    >
                        Get started as Merchant
                    </button>

                    {/* Mobile Hamburger Menu Toggle (Visible below md) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex md:hidden items-center justify-center p-2.5 rounded-lg transition-all cursor-pointer ${
                            isScrolled
                            ? "bg-[#120024]/5 border border-[#120024]/10 hover:bg-[#120024]/10 hover:border-[#120024]/20"
                            : "bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.18]"
                        }`}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isScrolled ? "#120024" : "white"}
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
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] md:hidden"
                        />

                        {/* Slide-in Drawer Container */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 220 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-[#120024] border-l border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-3xl z-[100] flex flex-col justify-between p-8 md:hidden overflow-y-auto"
                        >
                            {/* Drawer Content Stack */}
                            <div className="flex flex-col gap-10">
                                {/* Header Row */}
                                <div className="flex items-center justify-between">
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
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.18] transition-all cursor-pointer"
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
                                    </button>
                                </div>

                                {/* Navigation Links Stack */}
                                <div className="flex flex-col gap-6 text-left pl-2">
                                    {navItems.map((item, index) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    router.push(item.href);
                                                    setIsOpen(false);
                                                }}
                                                className={`cursor-pointer text-lg font-bold tracking-wide transition-all duration-300 select-none ${isActive
                                                    ? "text-[#D6FF38] translate-x-1"
                                                    : "text-white/70 hover:text-white hover:translate-x-1"
                                                }`}
                                            >
                                                {item.label}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Bottom Actions Area */}
                            <div className="flex flex-col gap-6 w-full">
                                {/* Divider line */}
                                <div className="h-px bg-white/[0.08] w-full"></div>

                                {/* Merchant Button */}
                                <button
                                    onClick={() => {
                                        router.push(routes.CONTACTUS);
                                        setIsOpen(false);
                                    }}
                                    className="bg-gradient-to-r from-primary to-[#9B51E0] hover:from-primary/95 hover:to-[#9B51E0]/95 text-white text-sm font-bold py-4 rounded-xl shadow-[0_8px_32px_0_hsla(var(--primary)/0.3)] hover:scale-[1.02] active:scale-98 transition-all border border-primary/50 w-full text-center cursor-pointer font-sans"
                                >
                                    Get started as Merchant
                                </button>

                                {/* Translucent App Pill */}
                                <div className="flex items-center justify-center gap-2.5 bg-white/95 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-98 transition-all duration-300 cursor-pointer w-full select-none">
                                    <img src={icons.GooglePlay.src} alt="Google Play" className="w-5 h-5" />
                                    <img src={icons.AppStore.src} alt="App Store" className="w-5 h-5 filter brightness-0" />
                                    <span className="text-[11px] font-bold text-[#3B007A] tracking-wider uppercase font-sans">Download App</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;