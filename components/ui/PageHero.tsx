import React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

interface PageHeroProps {
  badgeText: string;
  badgeVariant?: 'glass' | 'gray' | 'purple-light';
  title: React.ReactNode;
  description: React.ReactNode;
  heroImage: any;
  imageAlt: string;
  variant?: 'standard' | 'full-height';
  aspectRatioClass?: string;
  imageContainerClass?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  badgeText,
  badgeVariant = 'glass',
  title,
  description,
  heroImage,
  imageAlt,
  variant = 'standard',
  aspectRatioClass,
  imageContainerClass,
}) => {
  if (variant === 'full-height') {
    return (
      <div className="relative w-full h-screen flex flex-col overflow-hidden">
        {/* Purple Background — fills the top ~58% of the screen */}
        <div className="absolute top-0 left-0 w-full h-[58%] bg-[#5B0097] rounded-b-[40px] md:rounded-b-[80px] shadow-lg z-0" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center pt-36 md:pt-44 px-4 pb-14">
          <Badge text={badgeText} variant={badgeVariant} className="mb-6" />
          <h1 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 tracking-tight leading-[1.15]">
            {title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Overlapping Image — grows to fill remaining screen space */}
        <div className="relative z-10 flex-1 px-4 md:px-10 lg:px-16 pb-8 md:pb-12 sm:w-[90%] w-full mx-auto">
          <div className="relative w-full h-full min-h-[260px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src={heroImage}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Header Section */}
      <section className="relative w-full bg-[#5B0097] pt-32 md:pt-40 pb-44 md:pb-60 px-6 sm:px-8 overflow-hidden z-0">
        {/* Slanted translucent decorative stripes on the left */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 opacity-10 pointer-events-none select-none z-0">
          <svg className="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M20,-10 L38,-10 L-2,110 L-20,110 Z" fill="currentColor" />
            <path d="M45,-10 L63,-10 L23,110 L5,110 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <Badge text={badgeText} variant={badgeVariant} className="mb-6" />
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.15] mb-6">
            {title}
          </h1>
          <p className="text-white/85 text-base md:text-lg lg:text-xl font-medium max-w-4xl leading-relaxed tracking-wide">
            {description}
          </p>
        </div>
      </section>

      {/* Staggered Masonry Grid Section */}
      <section className={imageContainerClass || "relative z-10 px-6 sm:px-[10px] sm:w-[85%] mx-auto w-full sm:-mt-24 -mt-32 md:-mt-36 lg:-mt-44 sm:mb-24 mb-16"}>
        <div className={`relative w-full ${aspectRatioClass || 'aspect-[4/3] sm:aspect-[1305/651]'} overflow-hidden group`} style={{ position: 'relative' }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
          <Image
            src={heroImage}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 85vw"
            className="object-cover transition-transform duration-700 ease-out rounded-2xl"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default PageHero;
