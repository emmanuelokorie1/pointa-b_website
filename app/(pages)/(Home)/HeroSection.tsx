"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { routes } from '@/constants/route';
import { images } from '@/constants';
import DeliveryRouteAnimation from './DeliveryRouteAnimation';
import DownloadAppButton from '@/components/ui/DownloadAppButton';

import { useInView } from 'framer-motion';

const marqueeColumns = [
    {
        id: 1,
        containerClass: "flex-1 flex flex-col gap-4 md:gap-5 h-fit animate-marquee-down marquee-container cursor-pointer",
        cards: [
            {
                image: images.slide1,
                alt: "Point A2B Dashboard",
                // badge: {
                //     text: "⚡ Live Dispatching",
                //     dotColor: "bg-[#D6FF38]",
                //     positionClass: "top-4 left-4"
                // }
            },
            {
                image: images.slide2,
                alt: "Team collaboration",
            },
            {
                image: images.slide3,
                alt: "Meeting discussion",
            }
        ]
    },
    {
        id: 2,
        containerClass: "flex-1 flex flex-col gap-4 md:gap-5 h-fit animate-marquee-up marquee-container cursor-pointer",
        cards: [
            {
                image: images.slide4,
                alt: "Developer focus",
            },
            {
                image: images.slide8,
                alt: "SEO planning",
            },
            {
                image: images.slide9,
                alt: "Developer setup charts",
                // badge: {
                //     text: "📊 Route Analytics",
                //     dotColor: "bg-pink-500",
                //     positionClass: "top-4 right-4"
                // }
            }
        ]
    },
    {
        id: 3,
        containerClass: "hidden sm:flex flex-1 flex-col gap-4 md:gap-5 h-fit animate-marquee-down marquee-container cursor-pointer",
        cards: [
            {
                image: images.slide5,
                alt: "Office success celebration",
            },
            {
                image: images.slide6,
                alt: "Team brainstorming",
                // badge: {
                //     text: "👥 Multi-Agent Dispatch",
                //     dotColor: "bg-purple-500",
                //     positionClass: "bottom-4 left-4"
                // }
            },
            {
                image: images.slide7,
                alt: "Group discussion workshop",
            }
        ]
    }
];

const HeroSection = () => {
    const router = useRouter();
    const heroRef = React.useRef(null);
    const isHeroInView = useInView(heroRef, { margin: "200px" });

    const [trackingId, setTrackingId] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleTrackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!trackingId.trim()) {
            setError("Please enter a valid tracking ID");
            return;
        }
        setIsLoading(true);
        setError(null);
        setTimeout(() => {
            setIsLoading(false);
            router.push(`${routes.TRACK}?id=${encodeURIComponent(trackingId.trim())}`);
        }, 800);
    };

    return (
        <section ref={heroRef} className="relative min-h-screen bg-[#3B007A] bg-gradient-to-br from-[#270054] via-[#3B007A] to-[#5100A8] overflow-hidden flex flex-col lg:justify-center sm:pt-28 pt-[8rem] pb-12 lg:py-0">

            {/* {isHeroInView && <DeliveryRouteAnimation />} */}

            <div className="px-6 sm:px-8 lg:pl-[4rem] md:pl-[2rem] xl:pl-[6rem] 2xl:pl-[8rem] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Column: Heading and Description */}
                <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left space-y-6 md:space-y-8 relative animate-fade-blur-in opacity-0 z-10">

                    {/* Heading */}
                    <h1 className="text-white text-[2.2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.4rem] 2xl:text-[4rem] font-extrabold tracking-tight leading-[1.08] font-sans relative z-10">
                        The <span className="font-['Playfair_Display'] italic font-medium text-[#D6FF38] inline md:mr-1">Delivery</span> Platform <br className="hidden lg:block" />
                        That Gets How You Live
                    </h1>

                    {/* Description */}
                    <p className="text-white/80 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-xl tracking-wide relative z-10">
                        Order from local businesses near you or send anything across town, one app for every delivery moment in your day
                    </p>

                    {/* Order Tracking Input / Status */}
                    <div className="pt-4 space-y-4 relative z-10 w-full max-w-md">
                        <form onSubmit={handleTrackSubmit} className="space-y-2.5">
                            <label className="block text-white/70 text-xs font-bold uppercase tracking-wider pl-1">
                                Track Your Order
                            </label>
                            <div className="relative flex items-center bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-1.5 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300">
                                {/* Left Icon (Map pin) */}
                                <div className="pl-3.5 pr-2 text-white/50">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                {/* Input Field */}
                                <input
                                    type="text"
                                    placeholder="Enter Tracking ID"
                                    value={trackingId}
                                    onChange={(e) => {
                                        setTrackingId(e.target.value);
                                        setError(null);
                                    }}
                                    className="flex-1 bg-transparent border-0 outline-none ring-0 text-white placeholder-white/40 text-sm py-2 px-1 focus:ring-0 focus:outline-none"
                                />
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-[#D6FF38] hover:bg-[#c2e632] text-[#3B007A] text-sm font-extrabold px-5 py-2.5 rounded-xl hover:scale-102 active:scale-98 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(214,255,56,0.2)]"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-1.5 h-4 w-4 text-[#3B007A]" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>Tracking...</span>
                                        </>
                                    ) : (
                                        <span>Track</span>
                                    )}
                                </button>
                            </div>
                            {error && (
                                <p className="text-pink-500 text-xs pl-1 font-semibold">{error}</p>
                            )}
                            <p className="text-white/40 text-[11px] pl-1 font-medium">
                                Try entering demo code: <span onClick={() => setTrackingId("PT-829-105")} className="text-[#D6FF38] underline cursor-pointer hover:text-[#c2e632] transition-colors">PT-829-105</span>
                            </p>
                        </form>

                        {/* Download App Button — shown on mobile only (md+ shows it in the navbar) */}
                        <div className="md:hidden pt-2">
                            <DownloadAppButton
                                id="hero-download-app-btn-mobile"
                                variant="primary"
                                text="Download App"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Staggered Masonry Grid */}
            <div className="lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-[40%] xl:w-[45%] w-full h-[380px] sm:h-[480px] lg:h-full select-none overflow-hidden z-10 mt-10 lg:mt-0">

                {/* Staggered Masonry Flexbox Grid */}
                <div className="w-full h-full flex gap-4 md:gap-5 overflow-hidden justify-center relative items-start">

                    {/* Fade effect at the bottom of the grid */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#3B007A] via-[#3B007A]/80 to-transparent z-20 pointer-events-none"></div>
                    {/* Fade effect at the top of the grid */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#3B007A] via-[#3B007A]/80 to-transparent z-20 pointer-events-none"></div>

                    {marqueeColumns.map((col) => (
                        <div
                            key={col.id}
                            className={col.containerClass}
                        >
                            {/* Render column cards twice to create seamless marquee loop */}
                            {[0, 1].map((copyIndex) => (
                                <React.Fragment key={copyIndex}>
                                    {col.cards.map((card, cardIndex) => (
                                        <div
                                            key={`${copyIndex}-${cardIndex}`}
                                            className="w-full aspect-[3/4] rounded-[1.8rem] overflow-hidden border border-white/[0.08] shadow-lg shadow-black/10 marquee-card relative group hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
                                            style={{ position: 'relative' }}
                                        >
                                            {/* Floating Glass Badge - Removed backdrop-blur-md to fix massive GPU lag while scrolling/animating */}
                                            {/* {card.badge && (
                                                <div className={`absolute ${card.badge.positionClass} bg-black/60 border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-md pointer-events-none z-10 group-hover:scale-105 transition-transform duration-300`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${card.badge.dotColor} animate-pulse`}></span>
                                                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">{card.badge.text}</span>
                                                </div>
                                            )} */}
                                            {/* Glass Specular Reflection Sweep Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
                                            <Image
                                                src={card.image}
                                                alt={card.alt}
                                                fill
                                                sizes="(max-width: 640px) 120px, (max-width: 1024px) 200px, 300px"
                                                className="object-cover object-center group-hover:scale-[1.045] transition-transform duration-700 ease-out"
                                                decoding="async"
                                                priority={copyIndex === 0 && cardIndex === 0}
                                                loading={copyIndex === 0 && cardIndex === 0 ? undefined : "lazy"}
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;