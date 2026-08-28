"use client";

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

const LOADER_SEEN_KEY = 'pointab-loader-seen';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(false);
  const [fade, setFade] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(LOADER_SEEN_KEY);
    setShowLoader(!seen);
    setReady(true);
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem(LOADER_SEEN_KEY, '1');
    setFade(true);
    setTimeout(() => setShowLoader(false), 300);
  };

  useEffect(() => {
    if (!showLoader) return;
    const fallback = setTimeout(() => {
      sessionStorage.setItem(LOADER_SEEN_KEY, '1');
      setFade(true);
      setTimeout(() => setShowLoader(false), 300);
    }, 3500);
    return () => clearTimeout(fallback);
  }, [showLoader]);

  if (!ready) {
    return <div className="font-sans">{children}</div>;
  }

  return (
    <>
      {showLoader && (
        <div
          className={`fixed inset-0 z-[99999] ${
            fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <LoadingScreen onComplete={handleComplete} />
        </div>
      )}
      <div
        className={`font-sans ${
          showLoader && !fade ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}
