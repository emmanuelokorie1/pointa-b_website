"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import { MessageSquare, Send, ChevronDown } from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+233', flag: '🇬🇭', name: 'Ghana' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: '+254', flag: '🇰🇪', name: 'Kenya' },
];

const inputClass =
  'w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-base text-[#0B0F19] placeholder-gray-400 focus:outline-none focus:border-[#8E24FF] focus:bg-white transition-all duration-200';

const labelClass = 'block text-sm font-semibold text-[#0B0F19] mb-2';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ firstName: '', lastName: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="bg-[#F7F7F7] px-6 relative z-10 pt-16 md:pt-20 pb-24">
      <div className="grid lg:grid-cols-12 gap-8 sm:w-[90%] w-full mx-auto items-stretch">

        {/* Contact Card Column — outer relative wrapper */}
        <div className="lg:col-span-5 relative flex flex-col">

          {/* Dark tilted card — floats above, overlaps white card */}
          <div className="relative z-20 flex justify-start px-4">
            <div
              className="w-full max-w-[450px] h-[250px] rounded-[1.5rem] -rotate-6 overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(145deg, #7B00DD 0%, #4a007a 30%, #1a1a1a 70%, #0d0d0d 100%)' }}
            >
              {/* Scattered dots — top right */}
              <div className="absolute top-4 right-4 w-40 h-36 opacity-60">
                {[
                  { top: '8%',  left: '60%', size: 8 },
                  { top: '8%',  left: '75%', size: 8 },
                  { top: '8%',  left: '90%', size: 8 },
                  { top: '24%', left: '40%', size: 6 },
                  { top: '24%', left: '60%', size: 10 },
                  { top: '24%', left: '78%', size: 10 },
                  { top: '24%', left: '95%', size: 8 },
                  { top: '42%', left: '50%', size: 7 },
                  { top: '42%', left: '68%', size: 12 },
                  { top: '42%', left: '88%', size: 9 },
                  { top: '60%', left: '60%', size: 8 },
                  { top: '60%', left: '80%', size: 7 },
                  { top: '76%', left: '68%', size: 8 },
                  { top: '76%', left: '85%', size: 6 },
                ].map((dot, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-[#c084fc]"
                    style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
                  />
                ))}
              </div>

              {/* Phone icon circle */}
              <div
                className="absolute left-7 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>

              {/* Heading */}
              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-white font-bold leading-tight"
                  style={{ fontSize: '1.9rem', fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
                  Send us a message
                </p>
              </div>
            </div>
          </div>

          {/* White card — sits below, pill + email inside */}
          <div className="relative z-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] pt-32 pb-8 px-8 flex flex-col gap-6">

            {/* Pill badge */}
            <div className="bg-[#f0e6ff] rounded-full px-6 py-3 text-center">
              <p className="text-sm font-bold text-[#5B0097] tracking-wide">Fill out the form by your right</p>
            </div>

            {/* Email row */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📨</span>
                <div>
                  <p className="text-sm font-bold text-[#0B0F19]">Prefer to email?</p>
                  <p className="text-sm text-gray-400">hello@pointA2B.co</p>
                </div>
              </div>
              <a
                href="mailto:hello@pointA2B.co"
                className="w-10 h-10 rounded-full bg-[#8E24FF] flex items-center justify-center flex-shrink-0 hover:bg-[#7a1ddb] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

          </div>

        </div>



        {/* Form Card */}
        <div className="lg:col-span-7 bg-white border border-gray-100 p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* First name + Last name */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className={labelClass}>First name</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formState.firstName}
                  onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                  placeholder="Enter first name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>Last name</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formState.lastName}
                  onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                  placeholder="Enter last name"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Phone number */}
            <div>
              <label htmlFor="phone" className={labelClass}>Phone number</label>
              <div className="flex gap-3">
                {/* Country picker */}
                <div className="relative">
                  <select
                    value={countryCode.code}
                    onChange={(e) =>
                      setCountryCode(COUNTRY_CODES.find((c) => c.code === e.target.value) ?? COUNTRY_CODES[0])
                    }
                    className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl pl-4 pr-10 py-4 text-base text-[#0B0F19] focus:outline-none focus:border-[#8E24FF] focus:bg-white transition-all duration-200 cursor-pointer"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="Enter phone number"
                  className={`${inputClass} flex-1`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>Email address</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="Enter email address"
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Enter message"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#8E24FF] hover:bg-[#7a1ddb] text-white font-semibold py-4 rounded-full shadow-lg shadow-[#8E24FF]/30 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              {submitted ? (
                <>
                  <MessageSquare className="w-5 h-5 animate-pulse" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  <span className="text-base font-semibold">Send message</span>
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}