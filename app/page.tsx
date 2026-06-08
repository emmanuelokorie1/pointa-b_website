import React from 'react';
import HeroSection from '@/app/(pages)/(Home)/HeroSection';
import TrutsedBrand from '@/app/(pages)/(Home)/TrutsedBrand';
import About from '@/app/(pages)/(Home)/About';
import Services from '@/app/(pages)/(Home)/Services';
import AppProvides from '@/app/(pages)/(Home)/AppProvides';
import HowitWorks from '@/app/(pages)/(Home)/HowitWorks';
import WhyMerchant from './(pages)/(Home)/WhyMerchant';
import RealStory from './(pages)/(Home)/RealStory';
import YourDeliveries from './(pages)/(Home)/YourDeliveries';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[rgb(12,8,18)]">
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

      {/* How it Works Section */}
      <HowitWorks />

      {/* Why Merchant Section */}
      <WhyMerchant />

      {/* Real Story Testimonials */}
      <RealStory />

      {/* Your Deliveries App Download Section */}
      <YourDeliveries />

      {/* Footer */}
      <Footer />
    </main>
  );
}
