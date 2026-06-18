import React from 'react';
import PageHero from '@/components/ui/PageHero';
import { images } from '@/constants';

const HeroSection = () => {
    return (
        <PageHero
            badgeText="ABOUT US"
            title="We are A2B Moving what matters"
            description="A2B Logistics was born out of a simple frustration, deliveries in Nigeria were too slow, too unreliable and too stressful. We decided to fix that. Today we are one of the fastest growing logistics and delivery platforms in the country, connecting customers, merchants and riders in one seamless ecosystem that just works."
            heroImage={images.aboutHero}
            imageAlt="Point A2B Team collaboration"
        />
    )
}

export default HeroSection;