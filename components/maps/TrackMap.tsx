"use client";

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { images } from '@/constants';

interface Point {
    lng: number;
    lat: number;
    label: string;
}

interface TrackMapProps {
    progress: number;
    points: Point[];
}

const TrackMap = ({ progress, points }: TrackMapProps) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const riderMarkerRef = useRef<mapboxgl.Marker | null>(null);
    const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);
    const [style, setStyle] = useState<"streets-v12" | "satellite-streets-v12">("streets-v12");
    const [tokenError, setTokenError] = useState(false);

    // Keep routeCoords in a mutable ref to prevent stale closure issues inside map event callbacks
    const routeCoordsRef = useRef(routeCoords);
    useEffect(() => {
        routeCoordsRef.current = routeCoords;
    }, [routeCoords]);

    // Check for Mapbox token
    useEffect(() => {
        const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
        if (!token) {
            setTokenError(true);
        }
    }, []);

    // 1. Fetch real-world street routing directions from Mapbox Directions API
    useEffect(() => {
        const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
        if (!token || points.length === 0) return;

        const coordsQuery = points.map(pt => `${pt.lng},${pt.lat}`).join(';');
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordsQuery}?geometries=geojson&overview=full&access_token=${token}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.routes && data.routes[0]) {
                    const coords = data.routes[0].geometry.coordinates;
                    setRouteCoords(coords);
                } else {
                    setRouteCoords(points.map(pt => [pt.lng, pt.lat]));
                }
            })
            .catch(err => {
                console.error("Error fetching directions:", err);
                setRouteCoords(points.map(pt => [pt.lng, pt.lat]));
            });
    }, [points]);

    // 2. Initialize Mapbox and Setup Markers (Done once)
    useEffect(() => {
        if (!mapContainerRef.current) return;

        const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
        if (!token) return;

        mapboxgl.accessToken = token;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [points[0]?.lng || 3.388, points[0]?.lat || 6.515],
            zoom: 11,
            pitch: 0,
            bearing: 0
        });

        mapRef.current = map;

        map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

        // Modular function to redraw/setup route lines on initial load and style switches
        const setupRouteLayer = () => {
            const currentPath = routeCoordsRef.current.length > 0 ? routeCoordsRef.current : points.map(pt => [pt.lng, pt.lat]);

            if (!map.getSource('route')) {
                map.addSource('route', {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: currentPath
                        }
                    }
                });
            }

            if (!map.getLayer('route-line')) {
                map.addLayer({
                    id: 'route-line',
                    type: 'line',
                    source: 'route',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#8E24FF',
                        'line-width': 4,
                        'line-opacity': 0.85
                    }
                });
            }
            
            // Adjust bounds to show the complete trip path
            if (currentPath.length > 0) {
                const bounds = new mapboxgl.LngLatBounds();
                currentPath.forEach(pt => bounds.extend([pt[0], pt[1]]));
                map.fitBounds(bounds, {
                    padding: { top: 60, bottom: 60, left: 60, right: 60 },
                    maxZoom: 15,
                    duration: 1000
                });
            }
        };

        // Setup markers and bounds on initial load
        map.on('load', () => {
            // Standard Location Pin SVG template for checkpoints
            const createLocationPin = (color: string) => {
                const el = document.createElement('div');
                el.className = 'w-8 h-8 flex items-center justify-center cursor-pointer group';
                el.innerHTML = `
                    <div class="w-full h-full rounded-full bg-white border-2 border-[${color}] shadow-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742c1.427-.993 3.327-2.496 4.908-4.525 1.6-2.059 2.58-4.396 2.58-6.728 0-4.602-3.83-8.24-8.24-8.24-4.41 0-8.24 3.638-8.24 8.24 0 2.332.978 4.669 2.58 6.728 1.58 2.03 3.48 3.532 4.908 4.525a16.975 16.975 0 001.144.742zm.46-12.351a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                `;
                return el;
            };

            // Add station location markers to the map
            points.forEach((pt, idx) => {
                const isStart = idx === 0;
                const isDest = idx === points.length - 1;
                
                const color = isDest ? '#8E24FF' : (isStart ? '#3B007A' : '#9CA3AF');
                const pinEl = createLocationPin(color);

                new mapboxgl.Marker(pinEl)
                    .setLngLat([pt.lng, pt.lat])
                    .setPopup(new mapboxgl.Popup({ offset: 15 }).setHTML(`<h3 class="text-xs font-bold text-black">${pt.label}</h3>`))
                    .addTo(map);
            });

            // Active Rider Marker using images.DeliveryBike1
            const riderEl = document.createElement('div');
            riderEl.className = 'relative flex h-10 w-10 items-center justify-center cursor-pointer group';
            
            const pingSpan = document.createElement('span');
            pingSpan.className = 'animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8E24FF] opacity-75';
            
            const centerSpan = document.createElement('div');
            centerSpan.className = 'relative inline-flex rounded-full h-8 w-8 bg-white border-2 border-[#8E24FF] shadow-md flex items-center justify-center p-1 transition-transform duration-200 group-hover:scale-110';
            
            const riderImg = document.createElement('img');
            riderImg.src = images.DeliveryBike1.src;
            riderImg.className = 'w-full h-full object-contain';
            
            centerSpan.appendChild(riderImg);
            riderEl.appendChild(pingSpan);
            riderEl.appendChild(centerSpan);

            const riderMarker = new mapboxgl.Marker(riderEl)
                .setLngLat([points[progress]?.lng || 0, points[progress]?.lat || 0])
                .setPopup(new mapboxgl.Popup({ offset: 15 }).setHTML('<strong class="text-black">Current Rider Location</strong>'))
                .addTo(map);

            riderMarkerRef.current = riderMarker;

            // Make sure the route line and camera fit runs on initial load
            setupRouteLayer();
        });

        // 3. Listen to style.load to redraw route sources/layers when style toggles
        map.on('style.load', () => {
            setupRouteLayer();
        });

        // 4. Force map container resizing when its size changes (like during transition / sidebar reveal)
        const resizeObserver = new ResizeObserver(() => {
            map.resize();
        });
        resizeObserver.observe(mapContainerRef.current);

        return () => {
            resizeObserver.disconnect();
            map.remove();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 5. Update GeoJSON route source data and fit bounds when API directions route updates
    useEffect(() => {
        if (!mapRef.current || routeCoords.length === 0) return;

        const map = mapRef.current;
        
        const source = map.getSource('route') as mapboxgl.GeoJSONSource;
        if (source) {
            source.setData({
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: routeCoords
                }
            });
        }
        
        // Fit bounds to the new route safely
        const bounds = new mapboxgl.LngLatBounds();
        routeCoords.forEach(pt => bounds.extend([pt[0], pt[1]]));
        map.fitBounds(bounds, {
            padding: { top: 60, bottom: 60, left: 60, right: 60 },
            maxZoom: 15,
            duration: 1000
        });
        
    }, [routeCoords]);

    // 6. Update active Rider marker coordinate only (Steady camera, no continuous zooming)
    useEffect(() => {
        if (!riderMarkerRef.current || points.length === 0) return;

        const currentPos = points[progress];
        if (currentPos) {
            riderMarkerRef.current.setLngLat([currentPos.lng, currentPos.lat]);
        }
    }, [progress, points]);

    // 7. Style switching handler
    const toggleStyle = (newStyle: "streets-v12" | "satellite-streets-v12") => {
        setStyle(newStyle);
        if (mapRef.current) {
            mapRef.current.setStyle(`mapbox://styles/mapbox/${newStyle}`);
        }
    };

    if (tokenError) {
        return (
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-50 p-6 text-center z-10">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-sm">Mapbox Token Missing</h3>
                <p className="text-gray-500 text-xs mt-1 max-w-xs leading-relaxed">
                    Please configure <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[11px]">NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN</code> in your environment or <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[11px]">.env.local</code> file.
                </p>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 w-full h-full">
            {/* Map Controls Panel */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-1 bg-white/90 border border-gray-200 backdrop-blur-md p-1.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <button
                    onClick={() => {
                        if (mapRef.current && points[progress]) {
                            mapRef.current.flyTo({
                                center: [points[progress].lng, points[progress].lat],
                                zoom: 14,
                                speed: 1.2
                            });
                        }
                    }}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-[#8E24FF] hover:bg-[#8E24FF]/10 transition-all duration-200 cursor-pointer group"
                    title="Recenter to tracking location"
                >
                    <svg className="w-5 h-5 group-active:scale-95 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4m10 0h4M12 3v4m0 10v4m-5.657-9.657a8 8 0 1111.314 0 8 8 0 01-11.314 0z" />
                    </svg>
                </button>

                <div className="w-[1px] h-6 bg-gray-200 mx-1" />

                <button
                    onClick={() => toggleStyle("streets-v12")}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase transition-all duration-200 cursor-pointer ${
                        style === "streets-v12"
                            ? "bg-[#8E24FF] text-white"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                >
                    Streets
                </button>
                <button
                    onClick={() => toggleStyle("satellite-streets-v12")}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase transition-all duration-200 cursor-pointer ${
                        style === "satellite-streets-v12"
                            ? "bg-[#8E24FF] text-white"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                >
                    Satellite
                </button>
            </div>

            {/* Point A2B Map Signature / Watermark */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-[calc(50%+200px)] lg:left-[calc(50%+240px)] z-20 pointer-events-none">
                <div className="bg-white/80 backdrop-blur-xl border border-white border-b-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-6 py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-500">
                    <span className="w-2 h-2 rounded-full bg-[#8E24FF] animate-pulse" />
                    <span className="text-gray-400 font-bold text-[9px] uppercase tracking-widest border-r border-gray-200 pr-2.5">
                        Live Tracking
                    </span>
                    <span className="text-[#3B007A] font-black text-sm tracking-tight flex items-center">
                        Point <i className="text-[#8E24FF] font-serif ml-0.5 font-bold italic">a2b</i>
                    </span>
                </div>
            </div>

            {/* Map Canvas container */}
            <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};

export default TrackMap;
