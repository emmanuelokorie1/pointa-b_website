"use client";

import React, { useState } from 'react';

interface TrackSearchFormProps {
    onSubmit: (trackingCode: string) => void;
    errorTrackingId?: string;
}

const TrackSearchForm = ({ onSubmit, errorTrackingId }: TrackSearchFormProps) => {
    const [inputVal, setInputVal] = useState("");

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputVal.trim()) {
            onSubmit(inputVal.trim());
            setInputVal("");
        }
    };

    const isError = !!errorTrackingId;

    return (
        <div className="min-h-screen bg-gray-50 text-[#3B007A] flex flex-col items-center justify-center p-6 text-center font-sans">
            <div className="bg-white border border-gray-200 shadow-2xl p-8 rounded-3xl max-w-md w-full z-10 flex flex-col items-center">
                {isError ? (
                    <>
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-4 animate-bounce">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="text-[#3B007A] text-2xl font-black tracking-tight mb-2">Tracking Code Not Found</h2>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            We couldn't retrieve tracking information for code <strong className="text-gray-800">"{errorTrackingId}"</strong>. Please check the ID and try again.
                        </p>
                    </>
                ) : (
                    <>
                        <div className="w-16 h-16 bg-[#8E24FF]/10 rounded-full flex items-center justify-center text-[#8E24FF] mb-4">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h2 className="text-[#3B007A] text-2xl font-black tracking-tight mb-2">Track Your Shipment</h2>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Enter your tracking code below to follow your delivery status in real-time.
                        </p>
                    </>
                )}
                
                <form onSubmit={handleSearchSubmit} className="w-full space-y-3">
                    <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-2xl p-1.5 focus-within:border-[#8E24FF] focus-within:ring-2 focus-within:ring-[#8E24FF]/20 transition-all duration-300">
                        <input
                            type="text"
                            placeholder={isError ? "Enter Tracking ID" : "Enter Tracking ID (e.g. 3XOXC9545)"}
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            className="flex-1 bg-transparent border-0 outline-none ring-0 text-gray-900 placeholder-gray-400 text-sm py-2.5 px-3 focus:ring-0 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#3B007A] hover:bg-[#2c005e] text-white text-sm font-extrabold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
                        >
                            Track
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TrackSearchForm;
