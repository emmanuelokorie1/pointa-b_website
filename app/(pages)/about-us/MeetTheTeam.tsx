"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/constants';

const MeetTheTeam = () => {
  const team = [
    {
      id: 1,
      name: "Victor Effiong",
      role: "Founder, Point A2B Logistics",
      image: images.team1,
      desktopClass: "lg:col-start-2 lg:col-span-4 lg:translate-y-0"
    },
    {
      id: 2,
      name: "David Ademola",
      role: "Founder, Point A2B Logistics",
      image: images.team2,
      desktopClass: "lg:col-start-8 lg:col-span-4 lg:translate-y-20"
    },
    {
      id: 3,
      name: "Stella Jacobs",
      role: "Founder, Point A2B Logistics",
      image: images.team3,
      desktopClass: "lg:col-start-4 lg:col-span-4 lg:translate-y-12"
    },
    {
      id: 4,
      name: "Victor Olusola",
      role: "Founder, Point A2B Logistics",
      image: images.team4,
      desktopClass: "lg:col-start-9 lg:col-span-4 lg:translate-y-36"
    },
    {
      id: 5,
      name: "Chidera Nnamdi",
      role: "Founder, Point A2B Logistics",
      image: images.team5,
      desktopClass: "lg:col-start-2 lg:col-span-4 lg:translate-y-16"
    },
    {
      id: 6,
      name: "Hameedah Babatunde",
      role: "Founder, Point A2B Logistics",
      image: images.team6,
      desktopClass: "lg:col-start-8 lg:col-span-4 lg:translate-y-36"
    }
  ];

  return (
    <section className="relative w-full bg-[#444444] py-20 sm:py-28 lg:py-36 overflow-hidden z-10">
      
      {/* Background Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#8E24FF]/10 blur-[150px] rounded-full pointer-events-none z-0" 
        style={{ contentVisibility: 'auto' }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-purple-500/5 blur-[180px] rounded-full pointer-events-none z-0" 
        style={{ contentVisibility: 'auto' }}
      ></div>

      <div className="w-[90%] sm:w-[85%] mx-auto relative z-10 flex flex-col gap-16 sm:gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/40 text-4xl sm:text-5xl lg:text-[5rem] font-bold tracking-tight font-sans leading-none"
          >
            Meet the Team
          </motion.h2>
        </div>

        {/* Scattered/Staggered Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-16 sm:gap-x-12 lg:gap-y-8 pb-6 sm:pb-8 lg:pb-12">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col items-center text-center my-8 group ${member.desktopClass} sm:even:translate-y-12 sm:odd:translate-y-0 lg:sm:even:translate-y-inherit`}
            >
              
              {/* Profile Image Wrapper */}
              <div 
                className="relative w-44 h-44 sm:w-[20rem] sm:h-[20rem] rounded-full overflow-hidden border-2 border-white/5 shadow-2xl bg-neutral-800 transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:border-purple-500/25 mb-6"
                style={{ position: 'relative' }}
              >
                <Image
                  src={member.image}
                  alt={`Point A2B Team: ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 176px, 192px"
                  className="object-cover"
                />
              </div>

              {/* Identity details */}
              <div className="flex flex-col gap-1 transition-transform duration-500 group-hover:translate-y-[-2px]">
                <h3 className="text-white text-xl sm:text-3xl font-bold tracking-tight">
                  {member.name}
                </h3>
                <p className="text-white/80 text-base sm:text-lg font-light tracking-wide">
                  {member.role}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetTheTeam;