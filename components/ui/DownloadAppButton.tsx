"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { routes } from '@/constants/route';
import { icons } from '@/constants';

interface DownloadAppButtonProps {
    id?: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Determines the visual styling variation:
     * - 'primary': Solid white button, purple text, default for Hero Section
     * - 'glass': Premium translucent white glass, standard for interactive sub-features
     * - 'navbar': Special layout for the navigation header/drawer
     */
    variant?: 'primary' | 'glass' | 'navbar';
    /**
     * Custom route to push. Defaults to routes.SERVICES.
     */
    href?: string;
    /**
     * Custom text inside the button. Defaults to "Download App".
     */
    text?: string;
    /**
     * Controls whether to use Framer Motion features for state animations
     */
    useMotion?: boolean;
    /**
     * Optional additional motion props (e.g. whileHover, whileTap, initial, whileInView)
     */
    motionProps?: HTMLMotionProps<"button">;
}

export const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({
    id = 'download-app-btn',
    className = '',
    onClick,
    variant = 'primary',
    href = routes.SERVICES,
    text = 'Download App',
    useMotion = true,
    motionProps = {}
}) => {
    const router = useRouter();

    const handleDefaultClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
        } else {
            router.push(href);
        }
    };

    // Styling configurations based on variant
    const getVariantStyles = () => {
        switch (variant) {
            case 'glass':
                return "flex items-center gap-3 bg-white text-[#3B007A] text-[14px] font-extrabold px-6 py-3.5 rounded-full shadow-[0_12px_36px_rgba(136,3,224,0.25)] hover:shadow-[0_16px_40px_rgba(136,3,224,0.35)] transition-all duration-300 w-fit cursor-pointer";
            case 'navbar':
                return "flex items-center justify-center gap-2.5 bg-white/95 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-98 transition-all duration-300 cursor-pointer w-full select-none text-[11px] font-bold text-[#3B007A] tracking-wider uppercase font-sans";
            case 'primary':
            default:
                return "flex bg-white hover:bg-white/95 text-[#3B007A] text-md font-semibold px-6 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 items-center justify-center gap-2.5 shadow-lg shadow-purple-950/20 group/btn w-full sm:w-auto";
        }
    };

    // Image/Icon classes based on variant
    const getIconStyles = () => {
        switch (variant) {
            case 'navbar':
                return {
                    playStore: "w-5 h-5",
                    appStore: "w-5 h-5 filter brightness-0"
                };
            case 'glass':
                return {
                    playStore: "w-5 h-5",
                    appStore: "w-5 h-5"
                };
            case 'primary':
            default:
                return {
                    playStore: "w-6 h-6",
                    appStore: "w-6 h-6"
                };
        }
    };

    const getWrapperStyles = () => {
        switch (variant) {
            case 'navbar':
                return "flex items-center gap-1.5";
            case 'glass':
                return "flex items-center gap-1.5 opacity-90";
            case 'primary':
            default:
                return "flex items-center gap-1.5 opacity-90 group-hover/btn:opacity-100 transition-opacity";
        }
    };

    const getTextStyles = () => {
        switch (variant) {
            case 'navbar':
                return ""; // Handled in container class
            case 'glass':
                return ""; // Handled in container class
            case 'primary':
            default:
                return "text-md font-bold";
        }
    };

    const combinedClassName = `${getVariantStyles()} ${className}`;
    const iconStyles = getIconStyles();

    const renderContent = () => (
        <>
            <div className={getWrapperStyles()}>
                {/* Google Play Icon */}
                <img
                    src={icons.GooglePlay.src}
                    alt="Google Play"
                    className={iconStyles.playStore}
                />
                {/* Apple Icon */}
                <img
                    src={icons.AppStore.src}
                    alt="Apple Store"
                    className={iconStyles.appStore}
                />
            </div>
            <span className={getTextStyles()}>{text}</span>
        </>
    );

    if (useMotion) {
        // Standard interactive motion states based on variant
        const defaultMotionProps = variant === 'glass' ? {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.15 },
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.98 }
        } : variant === 'navbar' ? {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 }
        } : {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 }
        };

        // Merge standard motion props with overrides
        const mergedMotionProps = {
            ...defaultMotionProps,
            ...motionProps,
            className: combinedClassName,
            onClick: handleDefaultClick,
            id
        };

        return (
            <motion.button {...mergedMotionProps}>
                {renderContent()}
            </motion.button>
        );
    }

    return (
        <button
            id={id}
            onClick={handleDefaultClick}
            className={combinedClassName}
        >
            {renderContent()}
        </button>
    );
};

export default DownloadAppButton;
