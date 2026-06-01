"use client";

import React from 'react';
import { images } from '@/constants';

const DeliveryRouteAnimation = () => {
    return (
        /* Delivery story route — pickup → ride → deliver → U-turn → return */
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible select-none">
            {/* Desktop/Tablet Landscape SVG (viewBox optimized for wide desktop viewports) */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1200 800"
                fill="none"
                className="hidden lg:block overflow-visible"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
                <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#D6FF38" />
                    </linearGradient>
                </defs>

                {/* High-Performance vector glow path (Zero CPU overhead) */}
                <path
                    d="M 0,620 C 300,615 490,590 640,460"
                    stroke="url(#routeGradient)"
                    strokeWidth="6"
                    opacity={0.08}
                />

                {/* Dashed delivery route (Core sharp line) */}
                <path
                    d="M 0,620 C 300,615 490,590 640,460"
                    stroke="url(#routeGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    opacity={0.28}
                />

                {/* === PICKUP BOX at start (0, 620) ===
                    Bike arrives → box bounces (gentle care) → climbs onto bike carrier → bounces/settles on carrier → gone
                    Reappears halfway through return (new order!) */}
                <g transform="translate(6, 606)">
                    {/* Master opacity: visible during bounce & climb/settle, fades out, resets invisibly */}
                    <animate
                        attributeName="opacity"
                        values="0.85;0.85;0.85;0;0;0.85;0.85"
                        keyTimes="0; 0.063; 0.090; 0.093; 0.82; 0.83; 1"
                        dur="22s"
                        repeatCount="indefinite"
                    />

                    {/* Middle group: bounce Y translate + precise climb + rack-settle bounce */}
                    <g>
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 0,0; 0,-11; 0,4; 0,-6; 0,0; 10,-8; 23,-6; 28,-10; 32,-6; 36,-6; 36,-6; 0,0; 0,0; 0,0"
                            keyTimes="0; 0.015; 0.027; 0.040; 0.053; 0.063; 0.070; 0.077; 0.082; 0.086; 0.090; 0.093; 0.098; 0.82; 1"
                            calcMode="spline"
                            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                            additive="replace"
                            dur="22s"
                            repeatCount="indefinite"
                        />

                        {/* Inner group: squash-stretch on ground + shrink on climb + squash-stretch settle on carrier */}
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                values="1 1; 1 1; 0.88 1.14; 1.24 0.76; 0.92 1.08; 1 1; 0.7 0.7; 0.52 0.38; 0.42 0.48; 0.48 0.42; 0.45 0.45; 0.45 0.45; 1 1; 1 1; 1 1"
                                keyTimes="0; 0.015; 0.027; 0.040; 0.053; 0.063; 0.070; 0.077; 0.082; 0.086; 0.090; 0.093; 0.098; 0.82; 1"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                                additive="replace"
                                dur="22s"
                                repeatCount="indefinite"
                            />
                            {/* Box body */}
                            <rect x="-11" y="-8" width="22" height="16" rx="2.5" fill="#D6FF38" />
                            {/* Box lid */}
                            <rect x="-12" y="-14" width="24" height="8" rx="2" fill="#c6ef20" />
                            {/* Tape – vertical */}
                            <line x1="0" y1="-14" x2="0" y2="8" stroke="#8fb010" strokeWidth="2" />
                            {/* Tape – horizontal */}
                            <line x1="-11" y1="-8" x2="11" y2="-8" stroke="#8fb010" strokeWidth="1.2" />
                            {/* Shipping label */}
                            <rect x="-6" y="-3" width="13" height="8" rx="1" fill="rgba(59,0,122,0.25)" />
                            <line x1="-4" y1="-1" x2="4" y2="-1" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                            <line x1="-4" y1="1.5" x2="4" y2="1.5" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                            <line x1="-4" y1="4" x2="1" y2="4" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                        </g>
                    </g>
                </g>

                {/* === DESTINATION PIN at end (640, 460) ===
                    Normal: red teardrop with pulse
                    Delivery reaction (t≈0.5): green ✓ + burst celebration */}
                <g transform="translate(640, 460)">

                    {/* --- NORMAL PIN — hidden while bike is at destination --- */}
                    <g>
                        <animate
                            attributeName="opacity"
                            values="1;1;0;0;1;1"
                            keyTimes="0;0.46;0.50;0.67;0.70;1"
                            dur="22s"
                            repeatCount="indefinite"
                        />
                        {/* Pulsing halo */}
                        <circle cx="0" cy="-18" r="8" fill="none" stroke="#FF4B4B" strokeWidth="1.5">
                            <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                        </circle>
                        {/* Pin teardrop */}
                        <path d="M 0,2 C -2,0 -10,-6 -10,-16 A 10,10 0 0 1 10,-16 C 10,-6 2,0 0,2 Z" fill="#FF4B4B" />
                        <circle cx="0" cy="-16" r="4" fill="white" />
                        <ellipse cx="0" cy="4" rx="5" ry="2.5" fill="#FF4B4B" opacity="0.3" />
                    </g>

                    {/* --- DELIVERY REACTION — visible when bike arrives (t=0.49→0.68) --- */}
                    <g>
                        <animate
                            attributeName="opacity"
                            values="0;0;1;1;0;0"
                            keyTimes="0;0.49;0.52;0.65;0.68;1"
                            dur="22s"
                            repeatCount="indefinite"
                        />
                        {/* Burst ring 1 — fast lime */}
                        <circle cx="0" cy="-16" r="2" fill="none" stroke="#D6FF38" strokeWidth="2">
                            <animate attributeName="r" values="2;2;38;38" keyTimes="0;0.50;0.59;1" dur="22s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;0;0.9;0;0" keyTimes="0;0.49;0.51;0.59;1" dur="22s" repeatCount="indefinite" />
                        </circle>
                        {/* Burst ring 2 — slower pink */}
                        <circle cx="0" cy="-16" r="2" fill="none" stroke="#ec4899" strokeWidth="1.5">
                            <animate attributeName="r" values="2;2;28;28" keyTimes="0;0.51;0.64;1" dur="22s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;0;0.55;0;0" keyTimes="0;0.50;0.53;0.64;1" dur="22s" repeatCount="indefinite" />
                        </circle>
                        {/* Green success circle */}
                        <circle cx="0" cy="-16" r="13" fill="#22C55E" />
                        {/* Checkmark ✓ */}
                        <path
                            d="M -6,-14 L -2,-10 L 8,-22"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        {/* Green ground shadow */}
                        <ellipse cx="0" cy="4" rx="5" ry="2.5" fill="#22C55E" opacity="0.3" />
                    </g>

                    {/* --- DELIVERY BOX AT DESTINATION ---
                        Pops in when bike arrives → climbs down from carrier → settle bounces on ground → fades out into checkmark */}
                    <g transform="translate(0, -10)">
                        {/* Master opacity: visible during unload & ground bounce/settle, fades out */}
                        <animate
                            attributeName="opacity"
                            values="0;0;0.85;0.85;0;0"
                            keyTimes="0; 0.454; 0.455; 0.510; 0.523; 1"
                            dur="22s"
                            repeatCount="indefinite"
                        />

                        {/* Middle group: precise unload translate from rack (-13, -4) to ground (0, 0) + settle bounce */}
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="-13,-4; -13,-4; 0,0; 0,-6; 0,0; 0,0; 0,0"
                                keyTimes="0; 0.455; 0.486; 0.495; 0.505; 0.523; 1"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                                additive="replace"
                                dur="22s"
                                repeatCount="indefinite"
                            />

                            {/* Inner group: scales up from 0.45 (on bike) to 1.0 (on ground) + squash/stretch ground bounce */}
                            <g>
                                <animateTransform
                                    attributeName="transform"
                                    type="scale"
                                    values="0.45 0.45; 0.45 0.45; 1.24 0.76; 0.92 1.08; 1 1; 1 1; 0.45 0.45"
                                    keyTimes="0; 0.455; 0.486; 0.495; 0.505; 0.523; 1"
                                    calcMode="spline"
                                    keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                                    additive="replace"
                                    dur="22s"
                                    repeatCount="indefinite"
                                />
                                {/* Box body */}
                                <rect x="-11" y="-8" width="22" height="16" rx="2.5" fill="#D6FF38" />
                                {/* Box lid */}
                                <rect x="-12" y="-14" width="24" height="8" rx="2" fill="#c6ef20" />
                                {/* Tape – vertical */}
                                <line x1="0" y1="-14" x2="0" y2="8" stroke="#8fb010" strokeWidth="2" />
                                {/* Tape – horizontal */}
                                <line x1="-11" y1="-8" x2="11" y2="-8" stroke="#8fb010" strokeWidth="1.2" />
                                {/* Shipping label */}
                                <rect x="-6" y="-3" width="13" height="8" rx="1" fill="rgba(59,0,122,0.25)" />
                                <line x1="-4" y1="-1" x2="4" y2="-1" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                                <line x1="-4" y1="1.5" x2="4" y2="1.5" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                                <line x1="-4" y1="4" x2="1" y2="4" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                            </g>
                        </g>
                    </g>
                </g>

                {/* === SINGLE BIKE — goes forward then back, U-turn at each end ===
                    Outer <g>: handles animateMotion position (keyPoints 0→1→0)
                    Inner <g>: handles scaleX flip (1→0→-1) giving the wheeling U-turn effect */}
                <g opacity="0.65">
                    {/* Outer motion group */}
                    <g>
                        {/* Inner direction group: scaleX spins at destination (t=0.5) and at start (t=1) */}
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                values="1 1; 1 1; 0 1; -1 1; -1 1; 0 1; 1 1"
                                keyTimes="0; 0.47; 0.50; 0.53; 0.95; 0.98; 1"
                                calcMode="linear"
                                additive="replace"
                                dur="22s"
                                repeatCount="indefinite"
                            />
                            <image
                                href={images.DeliveryBike.src}
                                width="36"
                                height="36"
                                x="-18"
                                y="-28"
                            />

                            {/* === RIDING BOX ON BIKE CARRIER ===
                                Only visible while bike is traveling forward (t = 1.98s to t = 10.0s) */}
                            <g transform="translate(-13, -14) scale(0.45)">
                                <animate
                                    attributeName="opacity"
                                    values="0; 0; 0.85; 0.85; 0; 0; 0"
                                    keyTimes="0; 0.089; 0.090; 0.455; 0.463; 0.5; 1"
                                    dur="22s"
                                    repeatCount="indefinite"
                                />
                                {/* Box body */}
                                <rect x="-11" y="-8" width="22" height="16" rx="2.5" fill="#D6FF38" />
                                {/* Box lid */}
                                <rect x="-12" y="-14" width="24" height="8" rx="2" fill="#c6ef20" />
                                {/* Tape – vertical */}
                                <line x1="0" y1="-14" x2="0" y2="8" stroke="#8fb010" strokeWidth="2" />
                                {/* Tape – horizontal */}
                                <line x1="-11" y1="-8" x2="11" y2="-8" stroke="#8fb010" strokeWidth="1.2" />
                                {/* Shipping label */}
                                <rect x="-6" y="-3" width="13" height="8" rx="1" fill="rgba(59,0,122,0.25)" />
                                <line x1="-4" y1="-1" x2="4" y2="-1" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                                <line x1="-4" y1="1.5" x2="4" y2="1.5" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                                <line x1="-4" y1="4" x2="1" y2="4" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                            </g>
                        </g>
                        <animateMotion
                            dur="22s"
                            repeatCount="indefinite"
                            path="M 0,620 C 300,615 490,590 640,460"
                            rotate="0"
                            calcMode="spline"
                            keyTimes="0; 0.5; 1"
                            keyPoints="0; 1; 0"
                            keySplines="0.35 0 0.65 1; 0.35 0 0.65 1"
                        />
                    </g>
                </g>
            </svg>

            {/* Mobile/Tablet SVG (viewBox optimized for vertical/narrow portrait screens) */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 375 700"
                fill="none"
                className="block lg:hidden overflow-visible"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
                <defs>
                    <linearGradient id="routeGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#D6FF38" />
                    </linearGradient>
                </defs>

                {/* High-Performance vector glow path (Zero CPU overhead) */}
                <path
                    d="M 30,480 C 130,475 240,460 345,420"
                    stroke="url(#routeGradientMobile)"
                    strokeWidth="6"
                    opacity={0.08}
                />

                {/* Dashed delivery route (Core sharp line) */}
                <path
                    d="M 30,480 C 130,475 240,460 345,420"
                    stroke="url(#routeGradientMobile)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    opacity={0.28}
                />

                {/* === PICKUP BOX at start === */}
                <g transform="translate(36, 466)">
                    <animate
                        attributeName="opacity"
                        values="0.85;0.85;0.85;0;0;0.85;0.85"
                        keyTimes="0; 0.063; 0.090; 0.093; 0.82; 0.83; 1"
                        dur="22s"
                        repeatCount="indefinite"
                    />
                    <g>
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 0,0; 0,-11; 0,4; 0,-6; 0,0; 10,-8; 23,-6; 28,-10; 32,-6; 36,-6; 36,-6; 0,0; 0,0; 0,0"
                            keyTimes="0; 0.015; 0.027; 0.040; 0.053; 0.063; 0.070; 0.077; 0.082; 0.086; 0.090; 0.093; 0.098; 0.82; 1"
                            calcMode="spline"
                            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                            additive="replace"
                            dur="22s"
                            repeatCount="indefinite"
                        />
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                values="1 1; 1 1; 0.88 1.14; 1.24 0.76; 0.92 1.08; 1 1; 0.7 0.7; 0.52 0.38; 0.42 0.48; 0.48 0.42; 0.45 0.45; 0.45 0.45; 1 1; 1 1; 1 1"
                                keyTimes="0; 0.015; 0.027; 0.040; 0.053; 0.063; 0.070; 0.077; 0.082; 0.086; 0.090; 0.093; 0.098; 0.82; 1"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                                additive="replace"
                                dur="22s"
                                repeatCount="indefinite"
                            />
                            {/* Box body */}
                            <rect x="-11" y="-8" width="22" height="16" rx="2.5" fill="#D6FF38" />
                            {/* Box lid */}
                            <rect x="-12" y="-14" width="24" height="8" rx="2" fill="#c6ef20" />
                            {/* Tape – vertical */}
                            <line x1="0" y1="-14" x2="0" y2="8" stroke="#8fb010" strokeWidth="2" />
                            {/* Tape – horizontal */}
                            <line x1="-11" y1="-8" x2="11" y2="-8" stroke="#8fb010" strokeWidth="1.2" />
                            {/* Shipping label */}
                            <rect x="-6" y="-3" width="13" height="8" rx="1" fill="rgba(59,0,122,0.25)" />
                            <line x1="-4" y1="-1" x2="4" y2="-1" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                            <line x1="-4" y1="1.5" x2="4" y2="1.5" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                            <line x1="-4" y1="4" x2="1" y2="4" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                        </g>
                    </g>
                </g>

                {/* === DESTINATION PIN === */}
                <g transform="translate(345, 420)">
                    <g>
                        <animate
                            attributeName="opacity"
                            values="1;1;0;0;1;1"
                            keyTimes="0;0.46;0.50;0.67;0.70;1"
                            dur="22s"
                            repeatCount="indefinite"
                        />
                        <circle cx="0" cy="-18" r="8" fill="none" stroke="#FF4B4B" strokeWidth="1.5">
                            <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <path d="M 0,2 C -2,0 -10,-6 -10,-16 A 10,10 0 0 1 10,-16 C 10,-6 2,0 0,2 Z" fill="#FF4B4B" />
                        <circle cx="0" cy="-16" r="4" fill="white" />
                        <ellipse cx="0" cy="4" rx="5" ry="2.5" fill="#FF4B4B" opacity="0.3" />
                    </g>

                    <g>
                        <animate
                            attributeName="opacity"
                            values="0;0;1;1;0;0"
                            keyTimes="0;0.49;0.52;0.65;0.68;1"
                            dur="22s"
                            repeatCount="indefinite"
                        />
                        <circle cx="0" cy="-16" r="2" fill="none" stroke="#D6FF38" strokeWidth="2">
                            <animate attributeName="r" values="2;2;38;38" keyTimes="0;0.50;0.59;1" dur="22s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;0;0.9;0;0" keyTimes="0;0.49;0.51;0.59;1" dur="22s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="0" cy="-16" r="2" fill="none" stroke="#ec4899" strokeWidth="1.5">
                            <animate attributeName="r" values="2;2;28;28" keyTimes="0;0.51;0.64;1" dur="22s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;0;0.55;0;0" keyTimes="0;0.50;0.53;0.64;1" dur="22s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="0" cy="-16" r="13" fill="#22C55E" />
                        <path
                            d="M -6,-14 L -2,-10 L 8,-22"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        <ellipse cx="0" cy="4" rx="5" ry="2.5" fill="#22C55E" opacity="0.3" />
                    </g>

                    <g transform="translate(0, -10)">
                        <animate
                            attributeName="opacity"
                            values="0;0;0.85;0.85;0;0"
                            keyTimes="0; 0.454; 0.455; 0.510; 0.523; 1"
                            dur="22s"
                            repeatCount="indefinite"
                        />
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="-13,-4; -13,-4; 0,0; 0,-6; 0,0; 0,0; 0,0"
                                keyTimes="0; 0.455; 0.486; 0.495; 0.505; 0.523; 1"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                                additive="replace"
                                dur="22s"
                                repeatCount="indefinite"
                            />
                            <g>
                                <animateTransform
                                    attributeName="transform"
                                    type="scale"
                                    values="0.45 0.45; 0.45 0.45; 1.24 0.76; 0.92 1.08; 1 1; 1 1; 0.45 0.45"
                                    keyTimes="0; 0.455; 0.486; 0.495; 0.505; 0.523; 1"
                                    calcMode="spline"
                                    keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                                    additive="replace"
                                    dur="22s"
                                    repeatCount="indefinite"
                                />
                                <rect x="-11" y="-8" width="22" height="16" rx="2.5" fill="#D6FF38" />
                                <rect x="-12" y="-14" width="24" height="8" rx="2" fill="#c6ef20" />
                                <line x1="0" y1="-14" x2="0" y2="8" stroke="#8fb010" strokeWidth="2" />
                                <line x1="-11" y1="-8" x2="11" y2="-8" stroke="#8fb010" strokeWidth="1.2" />
                                <rect x="-6" y="-3" width="13" height="8" rx="1" fill="rgba(59,0,122,0.25)" />
                                <line x1="-4" y1="-1" x2="4" y2="-1" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                                <line x1="-4" y1="1.5" x2="4" y2="1.5" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                                <line x1="-4" y1="4" x2="1" y2="4" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                            </g>
                        </g>
                    </g>
                </g>

                {/* === SINGLE BIKE === */}
                <g opacity="0.65">
                    <g>
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                values="1 1; 1 1; 0 1; -1 1; -1 1; 0 1; 1 1"
                                keyTimes="0; 0.47; 0.50; 0.53; 0.95; 0.98; 1"
                                calcMode="linear"
                                additive="replace"
                                dur="22s"
                                repeatCount="indefinite"
                            />
                            <image
                                href={images.DeliveryBike.src}
                                width="36"
                                height="36"
                                x="-18"
                                y="-28"
                            />
                            <g transform="translate(-13, -14) scale(0.45)">
                                <animate
                                    attributeName="opacity"
                                    values="0; 0; 0.85; 0.85; 0; 0; 0"
                                    keyTimes="0; 0.089; 0.090; 0.455; 0.463; 0.5; 1"
                                    dur="22s"
                                    repeatCount="indefinite"
                                />
                                <rect x="-11" y="-8" width="22" height="16" rx="2.5" fill="#D6FF38" />
                                <rect x="-12" y="-14" width="24" height="8" rx="2" fill="#c6ef20" />
                                <line x1="0" y1="-14" x2="0" y2="8" stroke="#8fb010" strokeWidth="2" />
                                <line x1="-11" y1="-8" x2="11" y2="-8" stroke="#8fb010" strokeWidth="1.2" />
                                <rect x="-6" y="-3" width="13" height="8" rx="1" fill="rgba(59,0,122,0.25)" />
                                <line x1="-4" y1="-1" x2="4" y2="-1" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                                <line x1="-4" y1="1.5" x2="4" y2="1.5" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                                <line x1="-4" y1="4" x2="1" y2="4" stroke="rgba(59,0,122,0.4)" strokeWidth="0.8" />
                            </g>
                        </g>
                        <animateMotion
                            dur="22s"
                            repeatCount="indefinite"
                            path="M 30,480 C 130,475 240,460 345,420"
                            rotate="0"
                            calcMode="spline"
                            keyTimes="0; 0.5; 1"
                            keyPoints="0; 1; 0"
                            keySplines="0.35 0 0.65 1; 0.35 0 0.65 1"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default DeliveryRouteAnimation;
