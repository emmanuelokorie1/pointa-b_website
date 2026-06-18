"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import YourDeliveries from '../(Home)/YourDeliveries';
import Footer from '@/components/layouts/Footer';
import HeroSection from './HeroSection';
import MoreThanJust from './MoreThanJust';
import OurMission from './OurMission';
import OurVision from './OurVision';
import FoundingStory from './FoundingStory';
import MeetTheTeam from './MeetTheTeam';
import OurValue from './OurValue';

export default function AboutUsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">

      <HeroSection />
      <OurMission />
      <OurVision />
      <FoundingStory />
      <MoreThanJust />
      <OurValue />
      <MeetTheTeam />
      
      {/* Your Deliveries App Download Section */}
      <YourDeliveries />

      {/* Footer */}
      <Footer />
    </main>
  );
}
