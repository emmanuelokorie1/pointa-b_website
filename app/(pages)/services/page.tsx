import React from 'react';
import { Truck, Code, Users, Briefcase, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: 'Hyperlocal Deliveries',
      description: 'Ultra-fast delivery services connecting you with local restaurants, groceries, and retail stores in under 35 minutes.',
      tag: 'Speed',
      bg: 'from-[#9B51E0] to-primary',
      shadow: 'shadow-purple-500/20'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: 'Merchant Payouts & Escrow',
      description: 'A bulletproof transaction panel enabling cashouts, escrow holds, and immediate delivery verification for sellers.',
      tag: 'Secure',
      bg: 'from-pink-500 to-rose-500',
      shadow: 'shadow-pink-500/20'
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Developer APIs',
      description: 'Integrate Point A2B directly into your WooCommerce, Shopify, or custom React applications for instant courier dispatch.',
      tag: 'API',
      bg: 'from-teal-400 to-emerald-500',
      shadow: 'shadow-emerald-500/20'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Enterprise Shipping & Fleet',
      description: 'Dedicated cargo networks, specialized item handlers, and bulk operations with full insurance coverage.',
      tag: 'Corporate',
      bg: 'from-amber-400 to-orange-500',
      shadow: 'shadow-amber-500/20'
    }
  ];

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
              What We Do
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-sans">
            Logistics Solutions For <span className="font-['Playfair_Display'] italic font-medium text-[#D6FF38]">Modern Demands</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed">
            Point A2B designs state-of-the-art dispatch and fleet management platforms, providing secure logistics services for builders, stores, and individual clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Header elements */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.bg} flex items-center justify-center shadow-lg ${service.shadow} group-hover:scale-105 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D6FF38] bg-[#D6FF38]/10 border border-[#D6FF38]/20 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-[#D6FF38] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>

              {/* Action */}
              <div className="pt-8 flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-200 cursor-pointer">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>

            </div>
          ))}
        </div>

      </div>

    </main>
  );
}
