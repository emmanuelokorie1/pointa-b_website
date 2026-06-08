"use client";

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);
  const [fade, setFade] = useState(false);

  const handleComplete = () => {
    setFade(true);
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 600); // Matches the transition duration
    return () => clearTimeout(timeout);
  };

  return (
    <>
      {showLoader && (
        <div 
          className={`fixed inset-0 z-[99999] transition-opacity duration-500 ease-in-out ${
            fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <LoadingScreen onComplete={handleComplete} />
        </div>
      )}
      <div 
        className={`transition-opacity duration-700 ease-in-out ${
          fade ? 'opacity-100 font-sans' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </>
  );
}
