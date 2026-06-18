import React from 'react';
import PageHero from '@/components/ui/PageHero';
import { images } from '@/constants';

const HeroSection = () => {
    return (
        <PageHero
            badgeText="SERVICES"
            title="Everything you need, Delivered"
            description="From food to packages, from merchants to doorsteps, A2B offers a complete range of delivery and logistics services built for speed, reliability and scale."
            heroImage={images.serviceHero}
            imageAlt="Point A2B Services"
            imageContainerClass="relative z-10 px-6 sm:px-[10px] sm:w-[90%] mx-auto w-full sm:-mt-24 -mt-32 md:-mt-36 lg:-mt-44 sm:mb-24 mb-16"
        />
    );
};

export default HeroSection;