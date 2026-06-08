import React from 'react';
import Image from 'next/image';
import GooglePlay from '@/assets/icons/google.svg';
import AppStore from '@/assets/icons/apple.svg';

const FooterCTA = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[rgb(13,17,19)] to-[rgb(27,14,45)] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5 relative overflow-hidden">
      {/* Left Text */}
      <div className="flex flex-col gap-3 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-medium tracking-tight">
          Ready to move what matters, faster?
        </h2>
        <p className="text-[#A1A1AA] text-lg sm:text-xl">
          Fast pickups. Real-time tracking. Zero stress.
        </p>
      </div>

      {/* Right Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        
        {/* Contact Us + Arrow */}
        <div className="flex items-center gap-3">
          <button className="bg-[#121212]/80 hover:bg-[#1A1A1A] border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-colors">
            Contact us
          </button>
          <div className="bg-[#8E24FF] hover:bg-[#7a1fe0] transition-colors p-3.5 rounded-full flex items-center justify-center text-white w-12 h-12 cursor-pointer shadow-lg shadow-[#8E24FF]/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        {/* QR Code and App Download Panel */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-2.5 rounded-2xl flex items-center gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
          {/* QR Code Block */}
          <div className="bg-[#8E24FF] p-1.5 rounded-xl">
            <div className="bg-white p-1 rounded-lg">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://swift-sme.com" 
                alt="QR Code"
                className="w-17 h-17 object-contain"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* App Store Icons */}
          <div className="flex flex-col gap-2">
            <button className="bg-white hover:bg-gray-200 p-2 rounded-xl text-black transition-colors flex items-center justify-center w-[42px] h-[42px]">
              <Image src={AppStore} alt="App Store" className="h-5 w-auto object-contain" />
            </button>
            <button className="bg-white hover:bg-gray-200 p-2 rounded-xl text-black transition-colors flex items-center justify-center w-[42px] h-[42px]">
              <Image src={GooglePlay} alt="Google Play" className="h-5 w-auto object-contain" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterCTA;
