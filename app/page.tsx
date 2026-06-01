import React from 'react';
import HeroSection from '@/app/(pages)/(Home)/HeroSection';
import TrutsedBrand from '@/app/(pages)/(Home)/TrutsedBrand';
import About from '@/app/(pages)/(Home)/About';
import Services from '@/app/(pages)/(Home)/Services';
import AppProvides from '@/app/(pages)/(Home)/AppProvides';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#3B007A]">
      {/* Hero Section containing Left copy and Right Masonry Images Grid */}
      <HeroSection />
      
      {/* Trusted Brands Panel */}
      <TrutsedBrand />

      {/* About Us Bento Grid Section */}
      <About />

      {/* Services Curved 3D Panoramic Grid Section */}
      <Services />

      {/* App Provides Real Time Order Tracking Section */}
      <AppProvides />
    </main>
  );
}

