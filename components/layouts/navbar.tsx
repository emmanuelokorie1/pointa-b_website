"use client";

import React, { useState, useEffect } from 'react';
import { routes } from '@/constants/route';
import { icons } from '@/constants/icons';
import { useRouter, usePathname } from 'next/navigation';
import DownloadAppButton from '@/components/ui/DownloadAppButton';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 50);
                ticking = false;
            });
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const isLightPage =
        pathname === routes.TRACK || pathname.startsWith('/track') ||
        pathname === routes.CONTACTUS ||
        pathname === routes.ABOUTUS ||
        pathname === routes.SERVICES;
    const isScrolledOrLight = isScrolled || isLightPage;

    const navItems = [
        { label: 'About us', href: routes.ABOUTUS },
        { label: 'Services', href: routes.SERVICES },
        { label: 'Contact us', href: routes.CONTACTUS },
    ];

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[75%] mx-auto z-50">
                <div className={`relative group/nav rounded-[1rem] px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ${isScrolledOrLight
                        ? 'bg-white/95 border border-[#120024]/10 shadow-[0_12px_32px_rgba(18,0,36,0.05),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:border-primary/20 hover:shadow-[0_16px_40px_hsla(var(--primary)/0.1)]'
                        : 'bg-[#1a0038]/75 border border-white/[0.12] shadow-[0_16px_40px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/[0.2] hover:shadow-[0_20px_50px_hsla(var(--primary)/0.15)]'
                    }`}>

                    <div className="absolute inset-0 rounded-[1rem] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                    <div
                        onClick={() => {
                            router.push(routes.HOME);
                            setIsOpen(false);
                        }}
                        className="flex items-center gap-2.5 group cursor-pointer select-none"
                    >
                        <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#9B51E0] via-primary to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 group-hover:rotate-12 transition-all duration-300">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
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
                        <span className={`text-lg font-bold tracking-tight transition-colors font-sans ${isScrolledOrLight ? 'text-[#120024]' : 'text-white'}`}>
                            Point <span className={`font-['Playfair_Display'] italic font-medium lowercase transition-colors duration-300 ${isScrolledOrLight ? 'text-primary' : 'text-[#D6FF38]'}`}>a2b</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center lg:gap-1 xl:gap-2 relative">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            const isHovered = hoveredIndex === index;
                            return (
                                <div
                                    key={item.href}
                                    onClick={() => router.push(item.href)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`relative px-4 xl:px-6 py-3 rounded-full cursor-pointer text-sm font-semibold tracking-wide transition-all duration-200 select-none whitespace-nowrap hover:-translate-y-px active:scale-95 ${isActive
                                        ? (isScrolledOrLight ? 'text-primary' : 'text-white')
                                        : (isScrolledOrLight ? 'text-[#120024]/60 hover:text-[#120024]' : 'text-white/60 hover:text-white')
                                        }`}
                                >
                                    {isActive && (
                                        <span className={`absolute inset-0 rounded-full -z-10 transition-colors duration-200 ${isScrolledOrLight
                                                ? 'bg-primary/8 border border-primary/12 shadow-[0_2px_8px_hsla(var(--primary)/0.04)]'
                                                : 'bg-white/20 border border-white/24 shadow-[0_8px_32px_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.25)]'
                                            }`} />
                                    )}
                                    {!isActive && isHovered && (
                                        <span className={`absolute inset-0 rounded-full -z-10 transition-colors duration-200 ${isScrolledOrLight
                                                ? 'bg-[#120024]/5 border border-[#120024]/10'
                                                : 'bg-white/10 border border-white/12'
                                            }`} />
                                    )}
                                    <span className="relative z-10">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2.5">
                        <div className="hidden md:block">
                            <DownloadAppButton id="nav-download-app-btn" className="!py-3" />
                        </div>
                        <button
                            onClick={() => router.push(routes.CONTACTUS)}
                            className={`hidden md:flex text-sm font-semibold px-4 xl:px-5 py-[12px] xl:py-[14px] rounded-full hover:scale-102 active:scale-98 transition-all duration-300 items-center justify-center cursor-pointer whitespace-nowrap ${isScrolledOrLight
                                    ? 'bg-primary hover:bg-primary/90 text-white shadow-[0_8px_24px_hsla(var(--primary)/0.25)] border border-primary/10'
                                    : 'bg-primary hover:bg-primary/25 text-white border border-primary/30 hover:border-primary/50 shadow-[0_8px_32px_0_hsla(var(--primary)/0.15)]'
                                }`}
                        >
                            Get started as Merchant
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`flex lg:hidden items-center justify-center p-2.5 rounded-lg transition-all cursor-pointer ${isScrolledOrLight
                                    ? 'bg-[#120024]/5 border border-[#120024]/10 hover:bg-[#120024]/10 hover:border-[#120024]/20'
                                    : 'bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.18]'
                                }`}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isScrolledOrLight ? '#120024' : 'white'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

            <div
                className={`fixed inset-0 bg-black/70 z-[99] lg:hidden transition-opacity duration-250 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
                aria-hidden={!isOpen}
            />

            <div
                className={`fixed top-0 right-0 bottom-0 w-full bg-gradient-to-b from-[#120024] to-[#110026] border-l border-white/[0.08] shadow-[0_0_60px_rgba(0,0,0,0.6)] z-[100] flex flex-col p-6 sm:p-8 lg:hidden overflow-hidden transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden={!isOpen}
            >
                <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#8E24FF]/15 pointer-events-none -z-10" />
                <div className="absolute bottom-1/3 -left-16 w-52 h-52 rounded-full bg-[#D6FF38]/5 pointer-events-none -z-10" />

                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] shrink-0">
                    <div
                        onClick={() => {
                            router.push(routes.HOME);
                            setIsOpen(false);
                        }}
                        className="flex items-center gap-2.5 cursor-pointer select-none"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9B51E0] via-primary to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.16] text-white/70 hover:text-white transition-all duration-200 hover:rotate-90 cursor-pointer"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4 pr-1 -mr-2 flex flex-col gap-4 mt-12">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <div
                                key={item.href}
                                onClick={() => {
                                    router.push(item.href);
                                    setIsOpen(false);
                                }}
                                className="group flex items-center justify-center py-3.5 cursor-pointer select-none hover:scale-105 active:scale-98 transition-transform duration-200"
                            >
                                <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${isActive ? 'text-[#D6FF38]' : 'text-white/95 group-hover:text-[#D6FF38]'}`}>
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-4 w-full pt-6 border-t border-white/[0.06] shrink-0 mt-auto">
                    <button
                        onClick={() => {
                            router.push(routes.CONTACTUS);
                            setIsOpen(false);
                        }}
                        className="bg-gradient-to-r from-primary to-[#9B51E0] hover:from-primary/95 hover:to-[#9B51E0]/95 text-white text-base font-extrabold py-4 rounded-2xl shadow-[0_8px_32px_0_hsla(var(--primary)/0.3)] border border-primary/50 w-full text-center cursor-pointer hover:scale-[1.02] active:scale-98 transition-transform duration-200"
                    >
                        Get started as Merchant
                    </button>
                    <DownloadAppButton id="nav-download-app-btn-mobile" variant="navbar" className="!py-4 !text-sm sm:!text-md !font-black !tracking-widest !rounded-2xl" />
                </div>
            </div>
        </>
    );
};

export default Navbar;
