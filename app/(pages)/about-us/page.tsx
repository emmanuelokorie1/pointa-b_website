import React from 'react';
import { Shield, Sparkles, Zap, Award } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen bg-[#3B007A] bg-gradient-to-br from-[#270054] via-[#3B007A] to-[#5100A8] text-white overflow-hidden pt-36 pb-20">
      
      {/* Decorative ambient glowing dots */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-pink-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] rounded-full px-4 py-1.5 hover:bg-white/[0.12] transition-colors duration-200 cursor-default">
            <span className="text-[10px] md:text-xs font-semibold tracking-wider text-white/90 uppercase">
              Our Journey
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-sans">
            Redefining Logistics For <span className="font-['Playfair_Display'] italic font-medium text-[#D6FF38]">How You Live</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed">
            Point A2B was born out of a simple goal: to make delivery logistics entirely friction-free, connecting local ecosystems with intelligence and care.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { value: '10M+', label: 'Deliveries Completed' },
            { value: '50+', label: 'Cities Covered' },
            { value: '99.9%', label: 'On-Time Success Rate' },
            { value: '15k+', label: 'Delivery Partners' },
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 text-center backdrop-blur-md shadow-xl hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#D6FF38] mb-2 font-sans">
                {stat.value}
              </h2>
              <p className="text-white/70 text-sm font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values / Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl space-y-6 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#9B51E0] to-primary flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Instant Dispatch & Smart Routing</h3>
              <p className="text-white/80 leading-relaxed">
                We integrate real-time spatial mapping and traffic prediction models to match packages with optimum routes, cutting delivery wait times by over 30%.
              </p>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl space-y-6 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Secured Merchant Wallet</h3>
              <p className="text-white/80 leading-relaxed">
                Full ledger oversight, automated cashouts, and multi-tier fraud protection keep client transactions and service partner payouts secure at all times.
              </p>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl space-y-6 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Exceptional Customer Care</h3>
              <p className="text-white/80 leading-relaxed">
                Whether you are ordering hot meals, medical supplies, or corporate document batches, our dedicated support crew monitors every phase of the transfer.
              </p>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl space-y-6 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Commitment to Sustainability</h3>
              <p className="text-white/80 leading-relaxed">
                We are actively transitioning our logistics routing patterns towards greener, micro-mobility operations, aiming for completely net-zero delivery networks by 2030.
              </p>
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}
