"use client";

import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
    badge?: React.ReactNode;
}

const AccordionItem = ({ title, defaultOpen = false, children, badge }: AccordionItemProps) => {
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

export default AccordionItem;
