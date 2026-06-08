"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { images } from '@/constants';

interface LoadingProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingProps) {
  const onCompleteRef = useRef(onComplete);

  // Keep onComplete callback ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Determine how many milliseconds have elapsed since the page load started
    const elapsed = performance.now();
    // Calculate the remaining animation time so it transitions at exactly the right moment
    const remaining = Math.max(3200 - elapsed, 0);

    const timer = setTimeout(() => {
      onCompleteRef.current?.();
    }, remaining + 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] bg-white flex items-center justify-center overflow-hidden">

      <style dangerouslySetInnerHTML={{ __html: `

        /* Register custom CSS property for animating numbers on compositor thread */
        @property --num {
          syntax: '<integer>';
          initial-value: 0;
          inherits: true;
        }

        /* Road dashes scroll from right → left endlessly */
        @keyframes roadScroll {
          from { background-position: 0 0; }
          to   { background-position: -80px 0; }
        }

        /* Bike floats gently — simulates riding on uneven road */
        @keyframes bikeFloat {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50%       { transform: translateY(-5px) rotate(0.5deg); }
        }

        /* CSS keyframe for instant paint progress bar animation */
        @keyframes trackFill {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* CSS keyframe for instant paint text counter animation */
        @keyframes countUp {
          from { --num: 0; }
          to   { --num: 100; }
        }

        /* Wheel spin overlay */
        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .ptab-road {
          background-image: repeating-linear-gradient(
            90deg,
            transparent        0px,
            transparent        30px,
            rgba(142,36,255,0.15) 30px,
            rgba(142,36,255,0.15) 60px
          );
          background-size: 80px 100%;
          animation: roadScroll 0.6s linear infinite;
        }

        .ptab-bike-float { animation: bikeFloat 1.4s ease-in-out infinite; }

        .ptab-wheel {
          animation: wheelSpin 0.5s linear infinite;
          transform-origin: center;
        }

        /* Hardware-accelerated smooth progress bar */
        .ptab-track-fill {
          animation: trackFill 3.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Compositor-thread smooth text counter using modern CSS counters */
        #ptab-pct::after {
          animation: countUp 3.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          counter-reset: percent var(--num);
          content: counter(percent) "%";
        }

      `}} />

      {/* ── Centred card — roughly 50% of screen ── */}
      <div className="w-full max-w-[520px] px-8 flex flex-col items-center">

        {/* Brand */}
        <h1 className="text-3xl font-bold text-[#120024] font-sans tracking-tight mb-1">
          Point{' '}
          <span className="font-['Playfair_Display'] italic font-medium lowercase text-[#8E24FF]">
            a2b
          </span>
        </h1>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.25em] font-semibold mb-10">
          Smart Logistics
        </p>

        {/* Bike + road scene */}
        <div className="w-full relative">

          {/* Bike floats above the road */}
          <div className="flex justify-center mb-[-6px] relative z-10">

            {/* Bike image with float */}
            <div className="ptab-bike-float relative">
              <Image
                src={images.DeliveryBike}
                alt="Delivery Bike"
                width={100}
                height={100}
                priority
                className="object-contain"
              />

              {/* Spinning wheel overlays (front & rear) */}
              <svg
                className="ptab-wheel absolute"
                style={{ width: 22, height: 22, bottom: 5, left: 13 }}
                viewBox="0 0 22 22"
              >
                <circle cx="11" cy="11" r="9" stroke="#8E24FF" strokeWidth="2" fill="none" strokeOpacity="0.5"/>
                <line x1="11" y1="2"  x2="11" y2="20" stroke="#8E24FF" strokeWidth="1.5" strokeOpacity="0.4"/>
                <line x1="2"  y1="11" x2="20" y2="11" stroke="#8E24FF" strokeWidth="1.5" strokeOpacity="0.4"/>
              </svg>
              <svg
                className="ptab-wheel absolute"
                style={{ width: 22, height: 22, bottom: 5, right: 12 }}
                viewBox="0 0 22 22"
              >
                <circle cx="11" cy="11" r="9" stroke="#8E24FF" strokeWidth="2" fill="none" strokeOpacity="0.5"/>
                <line x1="11" y1="2"  x2="11" y2="20" stroke="#8E24FF" strokeWidth="1.5" strokeOpacity="0.4"/>
                <line x1="2"  y1="11" x2="20" y2="11" stroke="#8E24FF" strokeWidth="1.5" strokeOpacity="0.4"/>
              </svg>
            </div>

          </div>

          {/* Scrolling road strip */}
          <div className="ptab-road w-full h-5 rounded-md opacity-80" />

          {/* Thin ground line */}
          <div className="w-full h-[1.5px] bg-gray-150 mt-0" />

        </div>

        {/* Progress bar */}
        <div className="w-full mt-8 space-y-2">
          <div className="w-full h-[3px] bg-gray-100 rounded-full overflow-hidden">
            <div 
              id="ptab-bar"
              className="ptab-track-fill h-full bg-gradient-to-r from-[#9B51E0] to-[#8E24FF] rounded-full" 
            />
          </div>

          {/* Percentage */}
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">
              Loading...
            </span>
            <span
              id="ptab-pct"
              className="text-[10px] font-mono font-bold text-[#8E24FF] tracking-widest"
            />
          </div>
        </div>

      </div>

    </div>
  );
}
