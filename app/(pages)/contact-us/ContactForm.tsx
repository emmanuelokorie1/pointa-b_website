"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
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
    <section className="max-w-7xl mx-auto px-6 relative z-10 pb-24">
      <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        
        {/* Contact Details Card */}
        <div className="lg:col-span-5 bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#0B0F19] tracking-tight">Contact Details</h2>
            <p className="text-gray-500 leading-relaxed text-base">
              Feel free to contact our office or submit the form. We normally respond within 2-4 business hours.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Email */}
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shadow-sm group-hover:bg-[#8E24FF] group-hover:border-[#8E24FF] transition-all duration-300">
                <Mail className="w-6 h-6 text-[#8E24FF] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">Email Support</p>
                <p className="text-base font-semibold text-[#0B0F19]">hello@pointa2b.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shadow-sm group-hover:bg-[#8E24FF] group-hover:border-[#8E24FF] transition-all duration-300">
                <Phone className="w-6 h-6 text-[#8E24FF] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">Hotline Support</p>
                <p className="text-base font-semibold text-[#0B0F19]">+1 (800) 555-A2B-NOW</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shadow-sm group-hover:bg-[#8E24FF] group-hover:border-[#8E24FF] transition-all duration-300">
                <MapPin className="w-6 h-6 text-[#8E24FF] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">HQ Address</p>
                <p className="text-base font-semibold text-[#0B0F19]">100 Logistics Blvd, Suite 400, San Francisco, CA</p>
              </div>
            </div>

          </div>

        </div>

        {/* Form Card */}
        <div className="lg:col-span-7 bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-base text-[#0B0F19] placeholder-gray-400 focus:outline-none focus:border-[#8E24FF] focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-base text-[#0B0F19] placeholder-gray-400 focus:outline-none focus:border-[#8E24FF] focus:bg-white transition-all duration-200"
                />
              </div>

            </div>

            {/* Message */}
            <div className="space-y-3">
              <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="How can our logistics team help you?"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-base text-[#0B0F19] placeholder-gray-400 focus:outline-none focus:border-[#8E24FF] focus:bg-white transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#8E24FF] hover:bg-[#7a1ddb] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#8E24FF]/30 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group mt-4"
            >
              {submitted ? (
                <>
                  <MessageSquare className="w-5 h-5 animate-pulse text-white" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  <span className="text-lg">Send Message</span>
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}