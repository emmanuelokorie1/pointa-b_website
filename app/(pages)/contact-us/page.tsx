"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

export default function ContactUsPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

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
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-sans">
            Let's Start A <span className="font-['Playfair_Display'] italic font-medium text-[#D6FF38]">Conversation</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed">
            Have questions about our courier systems, merchant integrations, or custom enterprise solutions? Write to us and a logistics advisor will respond shortly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Details Card (Col Span 5) */}
          <div className="lg:col-span-5 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl space-y-10">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Details</h2>
              <p className="text-white/70 leading-relaxed text-sm">
                Feel free to contact our office or submit the form. We normally respond within 2-4 business hours.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:border-primary/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-semibold tracking-wider uppercase">Email Support</p>
                  <p className="text-sm font-semibold text-white/90">hello@pointa2b.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shadow-lg group-hover:bg-pink-500 group-hover:border-pink-500/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-semibold tracking-wider uppercase">Hotline Support</p>
                  <p className="text-sm font-semibold text-white/90">+1 (800) 555-A2B-NOW</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shadow-lg group-hover:bg-emerald-500 group-hover:border-emerald-500/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-semibold tracking-wider uppercase">HQ Address</p>
                  <p className="text-sm font-semibold text-white/90">100 Logistics Blvd, Suite 400, San Francisco, CA</p>
                </div>
              </div>

            </div>

          </div>

          {/* Form Card (Col Span 7) */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-white/70 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name" 
                    className="w-full bg-white/[0.04] border border-white/[0.12] rounded-2xl px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D6FF38] focus:bg-white/[0.08] transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-white/70 uppercase tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email" 
                    className="w-full bg-white/[0.04] border border-white/[0.12] rounded-2xl px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D6FF38] focus:bg-white/[0.08] transition-all duration-200"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-white/70 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="How can our logistics team help you?" 
                  className="w-full bg-white/[0.04] border border-white/[0.12] rounded-2xl px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D6FF38] focus:bg-white/[0.08] transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-purple-950/20 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                {submitted ? (
                  <>
                    <MessageSquare className="w-5 h-5 animate-pulse text-[#D6FF38]" />
                    <span className="text-[#D6FF38]">Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

    </main>
  );
}
