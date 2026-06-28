"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/constants/route';
import { icons } from '@/constants/icons';

interface DownloadAppButtonProps {
    id?: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'glass' | 'navbar';
    href?: string;
    text?: string;
}

export const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({
    id = 'download-app-btn',
    className = '',
    onClick,
    variant = 'primary',
    href = routes.SERVICES,
    text = 'Download App',
}) => {
    const router = useRouter();

    const handleDefaultClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
        } else {
            router.push(href);
        }
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'glass':
                return 'flex items-center gap-3 bg-white text-[#3B007A] text-[14px] font-extrabold px-6 py-3.5 rounded-full shadow-[0_12px_36px_rgba(136,3,224,0.25)] hover:shadow-[0_16px_40px_rgba(136,3,224,0.35)] transition-all duration-300 w-fit cursor-pointer hover:scale-[1.03] active:scale-98';
            case 'navbar':
                return 'flex items-center justify-center gap-2.5 bg-white px-6 py-3 rounded-xl border border-white/20 shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-98 transition-all duration-300 cursor-pointer w-full select-none text-[11px] font-bold text-[#3B007A] tracking-wider uppercase font-sans';
            case 'primary':
            default:
                return 'flex bg-white hover:bg-white/95 text-[#3B007A] text-md font-semibold px-6 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 items-center justify-center gap-2.5 shadow-lg shadow-purple-950/20 group/btn w-full sm:w-auto';
        }
    };

    const getIconStyles = () => {
        switch (variant) {
            case 'navbar':
                return { playStore: 'w-5 h-5', appStore: 'w-5 h-5 filter brightness-0' };
            case 'glass':
                return { playStore: 'w-5 h-5', appStore: 'w-5 h-5' };
            default:
                return { playStore: 'w-6 h-6', appStore: 'w-6 h-6' };
        }
    };

    const iconStyles = getIconStyles();

    return (
        <button
            id={id}
            onClick={handleDefaultClick}
            className={`${getVariantStyles()} ${className}`}
        >
            <div className={`flex items-center gap-1.5 ${variant === 'primary' ? 'opacity-90 group-hover/btn:opacity-100 transition-opacity' : 'opacity-90'}`}>
                <img src={icons.GooglePlay.src} alt="Google Play" className={iconStyles.playStore} />
                <img src={icons.AppStore.src} alt="Apple Store" className={iconStyles.appStore} />
            </div>
            <span className={variant === 'primary' ? 'text-md font-bold' : ''}>{text}</span>
        </button>
    );
};

export default DownloadAppButton;
