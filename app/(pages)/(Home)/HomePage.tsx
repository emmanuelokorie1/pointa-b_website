"use client";

import HeroSection from '@/app/(pages)/(Home)/HeroSection';
import TrutsedBrand from '@/app/(pages)/(Home)/TrutsedBrand';
import DeferredSection from '@/components/ui/DeferredSection';
import Footer from '@/components/layouts/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-[rgb(12,8,18)]">
      <HeroSection />
      <TrutsedBrand />

      <DeferredSection
        load={() => import('@/app/(pages)/(Home)/About')}
        minHeight={720}
      />
      <DeferredSection
        load={() => import('@/app/(pages)/(Home)/Services')}
        minHeight={640}
      />
      <DeferredSection
        load={() => import('@/app/(pages)/(Home)/AppProvides')}
        minHeight={560}
      />
      <DeferredSection
        load={() => import('@/app/(pages)/(Home)/HowitWorks')}
        minHeight={800}
      />
      <DeferredSection
        load={() => import('@/app/(pages)/(Home)/WhyMerchant')}
        minHeight={480}
      />
      <DeferredSection
        load={() => import('@/app/(pages)/(Home)/RealStory')}
        minHeight={640}
      />
      <DeferredSection
        load={() => import('@/app/(pages)/(Home)/YourDeliveries')}
        minHeight={400}
      />

      <Footer />
    </main>
  );
}
