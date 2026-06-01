"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { routes } from '@/constants/route';
import { icons, images } from '@/constants';
import DeliveryRouteAnimation from './DeliveryRouteAnimation';

const marqueeColumns = [
    {
        id: 1,
        containerClass: "flex-1 flex flex-col gap-4 md:gap-5 h-fit animate-marquee-down marquee-container hover:[animation-play-state:paused] cursor-pointer",
        cards: [
            {
                image: images.slide1,
                alt: "Point A2B Dashboard",
                badge: {
                    text: "⚡ Live Dispatching",
                    dotColor: "bg-[#D6FF38]",
                    positionClass: "top-4 left-4"
                }
            },
            {
                image: images.Landing7,
                alt: "Team collaboration",
            },
            {
                image: images.Landing6,
                alt: "Meeting discussion",
            }
        ]
    },
    {
        id: 2,
        containerClass: "flex-1 flex flex-col gap-4 md:gap-5 h-fit animate-marquee-up marquee-container hover:[animation-play-state:paused] cursor-pointer",
        cards: [
            {
                image: images.Landing3,
                alt: "Developer focus",
            },
            {
                image: images.Landing4,
                alt: "SEO planning",
            },
            {
                image: images.Landing8,
                alt: "Developer setup charts",
                badge: {
                    text: "📊 Route Analytics",
                    dotColor: "bg-pink-500",
                    positionClass: "top-4 right-4"
                }
            }
        ]
    },
    {
        id: 3,
        containerClass: "hidden sm:flex flex-1 flex-col gap-4 md:gap-5 h-fit animate-marquee-down marquee-container hover:[animation-play-state:paused] cursor-pointer",
        cards: [
            {
                image: images.Landing5,
                alt: "Office success celebration",
            },
            {
                image: images.Landing9,
                alt: "Team brainstorming",
                badge: {
                    text: "👥 Multi-Agent Dispatch",
                    dotColor: "bg-purple-500",
                    positionClass: "bottom-4 left-4"
                }
            },
            {
                image: images.Landing10,
                alt: "Group discussion workshop",
            }
        ]
    }
];

const HeroSection = () => {
    const router = useRouter();
    return (
        <section className="relative min-h-screen bg-[#3B007A] bg-gradient-to-br from-[#270054] via-[#3B007A] to-[#5100A8] overflow-hidden flex flex-col lg:justify-center sm:pt-28 pt-[8rem] pb-12 lg:py-0">

            <DeliveryRouteAnimation />

            <div className="px-6 sm:px-8 lg:pl-[4rem] md:pl-[2rem] xl:pl-[6rem] 2xl:pl-[8rem] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Column: Heading and Description */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6 md:space-y-8 relative animate-fade-blur-in opacity-0 z-10">

                    {/* Heading */}
                    <h1 className="text-white text-[2.2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.4rem] 2xl:text-[4rem] font-extrabold tracking-tight leading-[1.08] font-sans relative z-10">
                        The <span className="font-['Playfair_Display'] italic font-medium text-[#D6FF38] inline md:mr-1">Delivery</span> Platform <br className="hidden lg:block" />
                        That Gets How You Live
                    </h1>

                    {/* Description */}
                    <p className="text-white/80 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-xl tracking-wide relative z-10">
                        Order from local businesses near you or send anything across town, one app for every delivery moment in your day
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-6 relative z-10">
                        {/* Primary: Premium White Download App Button */}
                        <button
                            id="hero-download-app-btn"
                            onClick={() => router.push(routes.SERVICES)}
                            className="flex bg-white hover:bg-white/95 text-[#3B007A] text-sm font-semibold px-6 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 items-center justify-center gap-2.5 shadow-lg shadow-purple-950/20 group/btn w-full sm:w-auto"
                        >
                            <div className="flex items-center gap-1.5 opacity-90 group-hover/btn:opacity-100 transition-opacity">
                                {/* Google Play Icon */}
                                <img src={icons.GooglePlay.src} alt="Google Play" className="w-6 h-6" />
                                {/* Apple Icon */}
                                <img src={icons.AppStore.src} alt="Apple Store" className="w-6 h-6" />
                            </div>
                            <span className="text-md font-bold">Download App</span>
                        </button>
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
                                        >
                                            {/* Floating Glass Badge */}
                                            {card.badge && (
                                                <div className={`absolute ${card.badge.positionClass} bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-md pointer-events-none z-10 group-hover:scale-105 transition-transform duration-300`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${card.badge.dotColor} animate-pulse`}></span>
                                                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">{card.badge.text}</span>
                                                </div>
                                            )}
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