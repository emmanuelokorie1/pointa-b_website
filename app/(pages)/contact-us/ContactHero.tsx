"use client";

import React from 'react';
import PageHero from '@/components/ui/PageHero';
import { images } from '@/constants';

export default function ContactHero() {
  return (
    <PageHero
      // variant="full-height"
      // badgeText="CONTACT US"
      // title="We would love to help out"
      // description="We are here 24/7 to give you all of the support you need"
      // heroImage={images.contact}
      // imageAlt="Contact Point A2B Support"
      // imageContainerClass="relative z-10 px-6 sm:px-[10px] sm:w-[90%] mx-auto w-full sm:-mt-24 -mt-32 md:-mt-36 lg:-mt-44 sm:mb-24 mb-16"




      badgeText="CONTACT US"
      title="We would love to help out"
      description="We are here 24/7 to give you all of the support you need"
      heroImage={images.contact}
      imageAlt="Contact Point A2B Support"
      imageContainerClass="relative z-10 px-6 sm:px-[10px] sm:w-[90%] mx-auto w-full sm:-mt-24 -mt-32 md:-mt-36 lg:-mt-44 sm:mb-24 mb-16"
    />
  );
}
