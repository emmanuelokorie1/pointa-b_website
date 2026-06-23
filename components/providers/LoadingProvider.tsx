"use client";

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(false);
  const [fade, setFade] = useState(true);

  const handleComplete = () => {
    setFade(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 300); // Match the fade-out duration
  };

  // Safety fallback: if the loader hasn't dismissed after 5 seconds,
  // force-dismiss it.
  useEffect(() => {
    if (!showLoader) return;
    const fallback = setTimeout(() => {
      setFade(true);
      setTimeout(() => setShowLoader(false), 300);
    }, 5000);
    return () => clearTimeout(fallback);
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <div 
          className={`fixed inset-0 z-[99999] transition-opacity duration-300 ease-out ${
            fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <LoadingScreen onComplete={handleComplete} />
        </div>
      )}
      <div 
        className={`transition-opacity duration-300 ease-out ${
          fade ? 'opacity-100 font-sans' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </>
  );
}
