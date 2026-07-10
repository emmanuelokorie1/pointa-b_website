"use client";

import React from 'react';
import HeroSection from './HeroSection';
import WhatWeOffer from './WhatWeOffer';
import WhyPeopleChooseUs from './WhyPeopleChooseUs';
import ReadyToExperience from './ReadyToExperience';
import Footer from '@/components/layouts/Footer';
import YourDeliveries from '../(Home)/YourDeliveries';

export default function ServicesPage() {
  return <main className="bg-white min-h-screen flex flex-col">
    <HeroSection />
    <WhatWeOffer />
    <WhyPeopleChooseUs />
    <ReadyToExperience />

    {/* Your Deliveries App Download Section */}
    {/* <YourDeliveries /> */}

    {/* Footer */}
    {/* <Footer /> */}
  </main>;
}
