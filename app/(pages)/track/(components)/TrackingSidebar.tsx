"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import type { OrderTrackingData, StatusDetails } from './types';
import AccordionItem from './AccordionItem';

interface TrackingSidebarProps {
    orderData: OrderTrackingData;
    status: StatusDetails;
}

const getIcon = (id: number) => {
    switch(id) {
        case 4: return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
        case 3: return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>;
        case 2: return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>;
        case 1: return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
        default: return <div className="w-1.5 h-1.5 rounded-full bg-current" />;
    }
};

const TrackingSidebar = ({ orderData, status }: TrackingSidebarProps) => {
    return (
        <div className="absolute bottom-0 md:bottom-auto md:top-0 left-0 w-full md:w-[420px] lg:w-[480px] h-[55vh] md:h-full bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-2xl rounded-t-3xl md:rounded-none z-20 flex flex-col pt-6 md:pt-32 pb-8 overflow-y-auto overflow-x-hidden border-t md:border-t-0 md:border-r border-gray-200 transition-all duration-300">

            {/* Mobile Pull Indicator */}
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5 md:hidden shrink-0" />

            <div className="flex flex-col px-5 md:px-8 pb-8">

                {/* STATUS CARD (Always visible) */}
                <div className="flex flex-col gap-3 py-6 border-b border-gray-100 min-h-[170px]">
                    <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-colors duration-500 ${status.badgeColor}`}>
                            {status.statusText}
                        </span>
                        <span className="text-gray-400 text-xs font-semibold">ID: {orderData.trackingCode.toUpperCase()}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#3B007A] transition-all duration-500">
                            {status.statusText}
                        </h1>
                        <div className="flex flex-col items-start md:items-end shrink-0">
                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">ETA</span>
                            <span className="text-[#8E24FF] text-xl font-black tracking-tight transition-all duration-500">
                                {orderData.eta}
                            </span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium min-h-[48px] transition-all duration-500">
                        {status.subtext}
                    </p>

                    {/* Live progress indicator details */}
                    {typeof orderData.progressPercentage === 'number' && orderData.progressPercentage > 0 && (
                        <div className="mt-2 flex flex-col gap-1.5 border-t border-gray-100 pt-3">
                            <div className="flex justify-between items-center text-xs text-gray-500 font-semibold">
                                {typeof orderData.distanceRemaining === 'number' && (
                                    <span>Distance remaining: <strong className="text-gray-800">{orderData.distanceRemaining} km</strong></span>
                                )}
                                <span>{orderData.progressPercentage}% complete</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-[#8E24FF] h-full rounded-full transition-all duration-500 ease-out" 
                                    style={{ width: `${orderData.progressPercentage}%` }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <AccordionItem
                    title="Order Timeline"
                    defaultOpen
                >
                    <div className="relative flex flex-col gap-6 ml-3 py-2 mt-3">
                        {orderData.timelineEvents.map((evt, idx) => {
                            const isActive = evt.status === "active";
                            const isCompleted = evt.status === "completed";
                            const isPending = evt.status === "pending";
                            const isLast = idx === orderData.timelineEvents.length - 1;

                            return (
                                <div key={evt.id} className="relative flex gap-4 text-xs group">
                                    {!isLast && (
                                        <div className={`absolute left-[13px] top-8 bottom-[-24px] w-0.5 rounded-full transition-colors duration-500 ${
                                            isCompleted || isActive ? 'bg-[#8E24FF]' : 'bg-gray-100'
                                        }`} />
                                    )}

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
                    badge={<span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-md">{orderData.products.length}</span>}
                    defaultOpen
                >
                    <div className="flex flex-col gap-3 pt-2">
                        {orderData.products.map((prod, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-3 flex gap-4 items-center">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                                    <Image src={images.box2} alt="Box" className="w-10 h-10 object-contain" />
                                </div>
                                <div className="flex flex-col flex-1 gap-1.5">
                                    <h4 className="text-[#3B007A] font-bold text-xs">{prod.name}</h4>
                                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[9px] text-gray-500">
                                        <span>Size: <strong className="text-gray-800">{prod.size}</strong></span>
                                        <span>Weight: <strong className="text-gray-800">{prod.weight}</strong></span>
                                        <span>Category: <strong className="text-gray-800">{prod.category}</strong></span>
                                        <span className="truncate">Dimension: <strong className="text-gray-800">{prod.dimension}</strong></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                <AccordionItem title="Shipment Info" defaultOpen>
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-5 flex flex-col gap-5 mt-2">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-xs">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 font-medium text-[10px]">Recipient name</span>
                                <span className="text-gray-900 font-bold">{orderData.recipientName}</span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 font-medium text-[10px]">Rider name</span>
                                <span className="text-gray-900 font-bold">{orderData.riderName}</span>
                            </div>

                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 font-medium text-[10px]">Recipient phone</span>
                                <span className="text-gray-900 font-bold">{orderData.recipientPhone}</span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 font-medium text-[10px]">Rider phone</span>
                                <span className="text-gray-900 font-bold">{orderData.riderPhone}</span>
                            </div>

                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 font-medium text-[10px]">Pick-up address</span>
                                <span className="text-gray-900 font-bold leading-tight pr-2">{orderData.sender}</span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 font-medium text-[10px]">Drop-off address</span>
                                <span className="text-gray-900 font-bold leading-tight pr-2">{orderData.recipient}</span>
                            </div>
                        </div>

                        <div className="mt-1 pt-4 border-t border-gray-200 flex flex-col gap-2">
                            <span className="text-gray-400 font-medium text-[10px]">Pick-up code</span>
                            <div className="self-start px-3 py-1.5 bg-[#8E24FF]/10 border border-[#8E24FF]/20 rounded-lg">
                                <span className="text-[#8E24FF] font-black tracking-widest italic">{orderData.securityPin}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-5 bg-white border border-gray-200 shadow-sm rounded-2xl p-4">
                        <h3 className="text-[#3B007A] text-[10px] font-bold uppercase tracking-wider">
                            Delivery instructions
                        </h3>
                        <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                            {orderData.deliveryInstructions}
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem title="Rider Profile">
                    <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-3xl flex flex-col gap-4 mt-2">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50 shrink-0">
                                <img
                                    src={orderData.riderPhoto}
                                    alt={orderData.riderName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-[#3B007A] text-sm font-bold">{orderData.riderName}</h3>
                                    <span className="bg-[#8E24FF]/10 text-[#8E24FF] text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                        ★ {orderData.riderRating}
                                    </span>
                                </div>
                                <p className="text-gray-500 font-medium text-[10px] mt-0.5">{orderData.riderVehicle}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                            <button
                                onClick={() => window.open(`tel:${orderData.riderPhone}`)}
                                className="flex-1 bg-[#3B007A] hover:bg-[#2c005e] text-white text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.781-2.38 1.937-2.62a52.448 52.448 0 0115.626 0c1.156.24 1.937 1.348 1.937 2.62v10.756c0 1.272-.781 2.38-1.937 2.62a52.448 52.448 0 01-15.626 0C3.03 17.652 2.25 16.544 2.25 15.272V6.622z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Call
                            </button>
                            <button
                                onClick={() => window.open(`https://wa.me/${orderData.riderPhone.replace(/\+/g, '')}`)}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#3B007A] text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                Message
                            </button>
                        </div>
                    </div>
                </AccordionItem>

            </div>
        </div>
    );
};

export default TrackingSidebar;
