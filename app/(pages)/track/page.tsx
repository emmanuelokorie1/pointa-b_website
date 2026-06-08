"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { routes } from '@/constants/route';
import { images } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const TrackMap = dynamic(() => import('@/components/maps/TrackMap'), { ssr: false });

// Track details simulation data
const trackingData = {
    contents: "High-Value Electronic Components",
    weight: "1.85 kg",
    dimensions: "30 x 20 x 10 cm",
    securityPin: "8 2 9 4",
    sealStatus: "Intact",
    sender: "Point A2B Dispatch Hub (Ikeja)",
    recipient: "TechCorp Office (Victoria Island)",
    riderName: "Emmanuel Okorie",
    riderRating: "4.9",
    riderVehicle: "Logistics Cruiser (Bike #92)",
    eta: "14 mins"
};

// Route coordinate path for real map in Lagos, Nigeria (lng, lat)
const mapPathPoints = [
    { lng: 3.3524, lat: 6.6018, label: "Ikeja Hub" },
    { lng: 3.3762, lat: 6.5540, label: "Toll Gate" },
    { lng: 3.3995, lat: 6.5020, label: "Third Mainland Bridge" },
    { lng: 3.4402, lat: 6.4426, label: "Lekki Exp" },
    { lng: 3.4246, lat: 6.4281, label: "TechCorp (VI)" }
];

const AccordionItem = ({ title, defaultOpen = false, children, badge }: { title: string, defaultOpen?: boolean, children: React.ReactNode, badge?: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
            >
                <div className="flex items-center gap-2">
                    <h2 className="text-[#3B007A] text-sm font-extrabold uppercase tracking-wider group-hover:text-[#8E24FF] transition-colors">{title}</h2>
                    {badge}
                </div>
                <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                {children}
            </div>
        </div>
    );
};

const TrackPageContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const trackingId = searchParams.get('id') || "PT-829-105";

    const [mounted, setMounted] = useState(false);
    const [progress, setProgress] = useState(0); // 0 to 4 (stages of path)
    const [inputVal, setInputVal] = useState("");

    // Initial mounting
    useEffect(() => {
        setMounted(true);
    }, [trackingId]);

    // Simulated progress updates
    useEffect(() => {
        if (!mounted) return;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev < 4) return prev + 1;
                clearInterval(timer);
                return prev;
            });
        }, 15000); // Slower progress (every 15s) so the UI doesn't jump constantly

        return () => clearInterval(timer);
    }, [mounted]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputVal.trim()) {
            router.push(`${routes.TRACK}?id=${encodeURIComponent(inputVal.trim())}`);
            setInputVal("");
        }
    };

    // Status details mapping for friendly consumer labels
    const getStatusDetails = (stage: number) => {
        switch (stage) {
            case 0:
                return {
                    statusText: "Order Confirmed",
                    subtext: "Your package has been registered and is ready for pickup.",
                    eta: "24 mins",
                    badgeColor: "bg-[#3B007A]/10 text-[#3B007A]",
                };
            case 1:
                return {
                    statusText: "Picked Up & En Route",
                    subtext: "Emmanuel has picked up your package and is departing Ikeja Hub.",
                    eta: "18 mins",
                    badgeColor: "bg-blue-100 text-blue-700",
                };
            case 2:
                return {
                    statusText: "In Transit",
                    subtext: "Rider is crossing the Third Mainland Bridge corridor.",
                    eta: "12 mins",
                    badgeColor: "bg-[#8E24FF]/10 text-[#8E24FF]",
                };
            case 3:
                return {
                    statusText: "Near Destination",
                    subtext: "Rider is passing Lekki Expressway and approaching drop-off.",
                    eta: "5 mins",
                    badgeColor: "bg-amber-100 text-amber-700",
                };
            case 4:
                return {
                    statusText: "Arrived",
                    subtext: "Courier has arrived. Please verify your package and share the PIN.",
                    eta: "Awaiting PIN",
                    badgeColor: "bg-emerald-100 text-emerald-700",
                };
            default:
                return {
                    statusText: "In Transit",
                    subtext: "Rider is heading to your drop-off.",
                    eta: "14 mins",
                    badgeColor: "bg-[#3B007A]/10 text-[#3B007A]",
                };
        }
    };

    const status = getStatusDetails(progress);

    // List of history checkpoints for the visual timeline (showing all steps at once)
    const getTimelineEvents = (stage: number) => {
        return [
            { id: 4, time: "1:12 PM", title: "Arrived & Pending", desc: "Courier reached Victoria Island destination.", status: stage === 4 ? "active" : (stage > 4 ? "completed" : "pending") },
            { id: 3, time: "1:00 PM", title: "In Transit", desc: "Crossing Third Mainland Bridge corridor.", status: (stage === 2 || stage === 3) ? "active" : (stage > 3 ? "completed" : "pending") },
            { id: 2, time: "12:54 PM", title: "Picked Up", desc: "Courier accepted & departed from Hub.", status: stage === 1 ? "active" : (stage > 1 ? "completed" : "pending") },
            { id: 1, time: "12:48 PM", title: "Order Confirmed", desc: "Package registered at Ikeja Hub.", status: stage === 0 ? "active" : (stage > 0 ? "completed" : "pending") }
        ];
    };

    const timelineEvents = getTimelineEvents(progress);

    if (!mounted) return null;

    return (
        <main className="relative h-screen w-screen bg-gray-50 text-[#3B007A] font-sans overflow-hidden">

            {/* FULL SCREEN MAP (Background layer) */}
            <div className="absolute inset-0 z-0">
                <TrackMap progress={progress} points={mapPathPoints} />

                {/* Optional map overlay gradient for better text readability if map is too bright */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/30 to-transparent z-10 hidden md:block" />
            </div>

            {/* FLOATING SIDEBAR / BOTTOM SHEET (Foreground layer) */}
            <div className="absolute bottom-0 md:bottom-auto md:top-0 left-0 w-full md:w-[420px] lg:w-[480px] h-[55vh] md:h-full bg-white md:bg-white/95 md:backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-2xl rounded-t-3xl md:rounded-none z-20 flex flex-col pt-6 md:pt-32 pb-8 overflow-y-auto overflow-x-hidden border-t md:border-t-0 md:border-r border-gray-200 transition-all duration-300">

                {/* Mobile Pull Indicator */}
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5 md:hidden shrink-0" />

                <div className="flex flex-col px-5 md:px-8 pb-8">

                    {/* STATUS CARD (Always visible) */}
                    <div className="flex flex-col gap-3 py-6 border-b border-gray-100 min-h-[170px]">
                        <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-colors duration-500 ${status.badgeColor}`}>
                                {status.statusText}
                            </span>
                            <span className="text-gray-400 text-xs font-semibold">ID: {trackingId.toUpperCase()}</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#3B007A] transition-all duration-500">
                                {status.statusText}
                            </h1>
                            <div className="flex flex-col items-start md:items-end shrink-0">
                                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">ETA</span>
                                <span className="text-[#8E24FF] text-xl font-black tracking-tight transition-all duration-500">
                                    {status.eta}
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium min-h-[48px] transition-all duration-500">
                            {status.subtext}
                        </p>
                    </div>

                    <AccordionItem
                        title="Order Timeline"
                        badge={<span className="bg-[#8E24FF]/10 text-[#8E24FF] px-2 py-0.5 rounded-full text-[9px] font-bold">Live</span>}
                        defaultOpen
                    >
                        <div className="relative flex flex-col gap-6 ml-3 py-2 mt-3">
                            {timelineEvents.map((evt, idx) => {
                                const isActive = evt.status === "active";
                                const isCompleted = evt.status === "completed";
                                const isPending = evt.status === "pending";
                                const isLast = idx === timelineEvents.length - 1;

                                const getIcon = (id: number) => {
                                    switch(id) {
                                        case 4: return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
                                        case 3: return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>;
                                        case 2: return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>;
                                        case 1: return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
                                        default: return <div className="w-1.5 h-1.5 rounded-full bg-current" />;
                                    }
                                };

                                return (
                                    <div key={evt.id} className="relative flex gap-4 text-xs group">
                                        {/* Dynamic Connecting Line */}
                                        {!isLast && (
                                            <div className={`absolute left-[13px] top-8 bottom-[-24px] w-0.5 rounded-full transition-colors duration-500 ${
                                                isCompleted || isActive ? 'bg-[#8E24FF]' : 'bg-gray-100'
                                            }`} />
                                        )}

                                        {/* Icon Container */}
                                        <div className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500 ${
                                            isActive 
                                                ? 'border-[#8E24FF] bg-white text-[#8E24FF] shadow-[0_0_12px_rgba(142,36,255,0.4)] scale-110' 
                                                : isCompleted 
                                                    ? 'border-[#3B007A] bg-[#3B007A] text-white' 
                                                    : 'border-gray-200 bg-gray-50 text-gray-300'
                                        }`}>
                                            {getIcon(evt.id)}
                                            {isActive && <span className="absolute -inset-[3px] rounded-full border border-[#8E24FF] animate-ping opacity-60" />}
                                        </div>

                                        {/* Content Block */}
                                        <div className="flex flex-col flex-1 pb-2">
                                            <div className="flex items-center justify-between">
                                                <span className={`font-bold text-sm transition-colors duration-500 ${
                                                    isActive ? 'text-[#8E24FF]' : isPending ? 'text-gray-400' : 'text-[#3B007A]'
                                                }`}>
                                                    {evt.title}
                                                </span>
                                                <span className={`text-[10px] font-bold transition-colors duration-500 ${
                                                    isActive ? 'text-[#8E24FF]' : isPending ? 'text-gray-300' : 'text-gray-500'
                                                }`}>
                                                    {evt.time}
                                                </span>
                                            </div>
                                            <p className={`text-[11px] font-medium leading-relaxed mt-1 transition-colors duration-500 ${
                                                isActive ? 'text-gray-700' : isPending ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                {evt.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="Package Details"
                        badge={<span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-md">2</span>}
                        defaultOpen
                    >
                        <div className="flex flex-col gap-3 pt-2">
                            {/* Product 1 */}
                            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-3 flex gap-4 items-center">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                                    <Image src={images.box2} alt="Box" className="w-10 h-10 object-contain" />
                                </div>
                                <div className="flex flex-col flex-1 gap-1.5">
                                    <h4 className="text-[#3B007A] font-bold text-xs">Macbook Air M1</h4>
                                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[9px] text-gray-500">
                                        <span>Size: <strong className="text-gray-800">Medium</strong></span>
                                        <span>Weight: <strong className="text-gray-800">0.5kg</strong></span>
                                        <span>Category: <strong className="text-gray-800">Fragile</strong></span>
                                        <span className="truncate">Dimension: <strong className="text-gray-800">12cm by 12cm</strong></span>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-3 flex gap-4 items-center">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                                    <Image src={images.box2} alt="Box" className="w-10 h-10 object-contain" />
                                </div>
                                <div className="flex flex-col flex-1 gap-1.5">
                                    <h4 className="text-[#3B007A] font-bold text-xs">Iphone 13 promax</h4>
                                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[9px] text-gray-500">
                                        <span>Size: <strong className="text-gray-800">Small</strong></span>
                                        <span>Weight: <strong className="text-gray-800">0.2kg</strong></span>
                                        <span>Category: <strong className="text-gray-800">Fragile</strong></span>
                                        <span className="truncate">Dimension: <strong className="text-gray-800">5cm by 10cm</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="Shipment Info" defaultOpen>
                        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-5 flex flex-col gap-5 mt-2">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-xs">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-gray-400 font-medium text-[10px]">Recipient name</span>
                                    <span className="text-gray-900 font-bold">Susan Sheidu</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-gray-400 font-medium text-[10px]">Rider name</span>
                                    <span className="text-gray-900 font-bold">{trackingData.riderName}</span>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <span className="text-gray-400 font-medium text-[10px]">Recipient phone</span>
                                    <span className="text-gray-900 font-bold">09045221765</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-gray-400 font-medium text-[10px]">Rider phone</span>
                                    <span className="text-gray-900 font-bold">09145221765</span>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <span className="text-gray-400 font-medium text-[10px]">Pick-up address</span>
                                    <span className="text-gray-900 font-bold leading-tight pr-2">{trackingData.sender}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-gray-400 font-medium text-[10px]">Drop-off address</span>
                                    <span className="text-gray-900 font-bold leading-tight pr-2">{trackingData.recipient}</span>
                                </div>
                            </div>

                            <div className="mt-1 pt-4 border-t border-gray-200 flex flex-col gap-2">
                                <span className="text-gray-400 font-medium text-[10px]">Pick-up code</span>
                                <div className="self-start px-3 py-1.5 bg-[#8E24FF]/10 border border-[#8E24FF]/20 rounded-lg">
                                    <span className="text-[#8E24FF] font-black tracking-widest italic">{trackingData.securityPin}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-5 bg-white border border-gray-200 shadow-sm rounded-2xl p-4">
                            <h3 className="text-[#3B007A] text-[10px] font-bold uppercase tracking-wider">
                                Delivery instructions
                            </h3>
                            <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                                Please call upon arrival. If I am not available, leave the package with the security personnel at the main gate and ensure they sign the delivery log. Handle fragile items with extreme care.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="Rider Profile">
                        <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-3xl flex flex-col gap-4 mt-2">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50 shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
                                        alt={trackingData.riderName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-[#3B007A] text-sm font-bold">{trackingData.riderName}</h3>
                                        <span className="bg-[#8E24FF]/10 text-[#8E24FF] text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                            ★ {trackingData.riderRating}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 font-medium text-[10px] mt-0.5">{trackingData.riderVehicle}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 w-full">
                                <button
                                    onClick={() => window.open('tel:+2348000000000')}
                                    className="flex-1 bg-[#3B007A] hover:bg-[#2c005e] text-white text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.781-2.38 1.937-2.62a52.448 52.448 0 0115.626 0c1.156.24 1.937 1.348 1.937 2.62v10.756c0 1.272-.781 2.38-1.937 2.62a52.448 52.448 0 01-15.626 0C3.03 17.652 2.25 16.544 2.25 15.272V6.622z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Call
                                </button>
                                <button
                                    onClick={() => window.open('https://wa.me/2348000000000')}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#3B007A] text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                                >
                                    Message
                                </button>
                            </div>
                        </div>
                    </AccordionItem>

                </div>
            </div>
        </main>
    );
};

export default function TrackPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center font-mono">
                <div className="flex flex-col items-center gap-3">
                    <svg className="animate-spin h-8 w-8 text-[#8E24FF]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="font-sans font-medium text-gray-500">Loading tracking details...</span>
                </div>
            </div>
        }>
            <TrackPageContent />
        </Suspense>
    );
}
