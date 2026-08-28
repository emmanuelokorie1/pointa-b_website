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
                return 'flex items-center gap-3 bg-[#F4F4F5] text-[#3B007A] text-[14px] font-extrabold px-6 py-3.5 rounded-full w-fit cursor-pointer';
            case 'navbar':
                return 'flex items-center justify-center gap-2.5 bg-[#F4F4F5] px-6 py-3 rounded-full border border-black/10 cursor-pointer w-full select-none text-[11px] font-bold text-[#3B007A] tracking-wider uppercase font-sans';
            case 'primary':
            default:
                return 'flex bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#3B007A] text-md font-semibold px-6 py-3.5 rounded-full items-center justify-center gap-2.5 group/btn w-full sm:w-auto';
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
            <div className={`flex items-center gap-1.5 opacity-90 group-hover/btn:opacity-100`}>
                <img src={icons.GooglePlay.src} alt="Google Play" className={iconStyles.playStore} />
                <img src={icons.AppStore.src} alt="Apple Store" className={iconStyles.appStore} />
            </div>
            <span className={variant === 'primary' ? 'text-md font-bold' : ''}>{text}</span>
        </button>
    );
};

export default DownloadAppButton;
