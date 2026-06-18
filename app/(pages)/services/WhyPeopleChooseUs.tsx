"use client";

import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import { QrCode } from 'lucide-react';
import { images, icons } from '@/constants';

const WhyPeopleChooseUs = () => {
  return (
    <section className="w-full bg-white pb-12 sm:pb-20 px-4 sm:px-[10px] sm:w-[85%] mx-auto select-none font-sans">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        {/* Page Badge */}
        <Badge text="FEATURES" variant="purple-light" className="mb-4" />

        {/* Heading */}
        <h2 className="text-[#1E1B29] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Why people choose A2B services
        </h2>

        {/* Subtitle */}
        <p className="text-[#555] max-w-2xl mx-auto leading-relaxed font-medium text-sm sm:text-base">
          There are other delivery options out there. Here is why thousands of Nigerians
          choose A2B every single day.
        </p>
      </div>

      {/* Main Feature Cards Grid */}
      <div className="flex flex-col gap-6 sm:gap-8 w-full">
        {/* Top Card: Transparency (with text overlaid on whyChoose.svg) */}
        <div className="relative w-full h-[580px] sm:h-[550px] lg:h-[650px] xl:h-[650px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-md">
          {/* Background Graphic */}
          <Image
            src={images.whyChoose}
            alt="A2B Transparency features background"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 85vw"
            className="object-cover pointer-events-none select-none"
            priority
          />

          {/* Text and Badges Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent z-10 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
            {/* Header Content */}
            <div className="flex flex-col">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold mb-4 tracking-tight leading-none">
                Transparency
              </h3>
              <p className="text-white/85 max-w-[520px] text-xs sm:text-sm lg:text-base leading-relaxed font-medium tracking-wide">
                No hidden fees, no surprises. You see the cost upfront and track every
                step of the journey in real time
              </p>
            </div>

            {/* Footer Content: QR & Downloads */}
            <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between gap-6 w-full">
              {/* QR Code Segment */}
              <div className="flex flex-col items-center sm:items-start gap-2">
                <span className="text-white/70 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-center sm:text-left">
                  Scan to download app
                </span>

                {/* QR Code Icon in a rounded white card */}
                <div className="w-20 h-20 sm:w-32 sm:h-32 bg-white p-1.5 rounded-xl flex items-center justify-center shadow-md">
                  <QrCode className="w-full h-full text-black" strokeWidth={1.5} />
                </div>
              </div>

              {/* App Download Buttons */}
              <div className="flex flex-col gap-3 items-center sm:items-start">
                {/* Google Play Badge */}
                <a href="#" className="bg-black text-white h-[48px] sm:h-[54px] w-[160px] sm:w-[180px] px-3.5 sm:px-4 rounded-xl flex items-center gap-2.5 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group flex-shrink-0">
                  <div className="w-6 sm:w-7 flex items-center justify-center">
                    <Image src={icons.GooglePlay} alt="Google Play Logo" className="w-full h-auto group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex flex-col items-start pt-0.5">
                    <span className="text-[9px] sm:text-[10px] font-medium opacity-90 leading-none mb-1 uppercase tracking-wide">GET IT ON</span>
                    <span className="text-lg sm:text-[21px] font-semibold tracking-tight leading-none">Google Play</span>
                  </div>
                </a>

                {/* App Store Badge */}
                <a href="#" className="bg-black text-white h-[48px] sm:h-[54px] w-[160px] sm:w-[180px] px-3.5 sm:px-4 rounded-xl flex items-center gap-2.5 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group flex-shrink-0">
                  <div className="w-6 sm:w-7 flex items-center justify-center">
                    <Image src={icons.AppStore} alt="Apple Logo" className="w-full h-auto brightness-0 invert group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex flex-col items-start pt-0.5">
                    <span className="text-[9px] sm:text-[10px] font-medium opacity-90 leading-none mb-1">Download on the</span>
                    <span className="text-lg sm:text-[22px] font-semibold tracking-tight leading-none">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Bottom Card: Speed, Support, Coverage (using whyChoose2.svg directly) */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px]">
            <Image
              src={images.whyChoose2}
              alt="Speed, Support, and Coverage features of A2B Logistics"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 85vw"
              className="object-contain"
              priority
            />
          </div>
          {/* Bottom Card: Speed, Support, Coverage (using whyChoose3.svg directly) */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px]">
            <Image
              src={images.whyChoose3}
              alt="Speed, Support, and Coverage features of A2B Logistics"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 85vw"
              className="object-contain"
              priority
            />
          </div>
          {/* Bottom Card: Speed, Support, Coverage (using whyChoose4.svg directly) */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px]">
            <Image
              src={images.whyChoose4}
              alt="Speed, Support, and Coverage features of A2B Logistics"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 85vw"
              className="object-contain"
              priority
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyPeopleChooseUs;