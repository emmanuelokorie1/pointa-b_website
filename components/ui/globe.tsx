"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import { useMotionValue, useSpring, motion } from "motion/react"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const CORE_MARKERS = [
  // Core Nigeria Hubs
  { location: [6.5244, 3.3792] as [number, number], size: 0.12 }, // Lagos (Main HQ)
  { location: [9.0579, 7.4951] as [number, number], size: 0.08 }, // Abuja
  { location: [4.8156, 7.0498] as [number, number], size: 0.07 }, // Port Harcourt
  { location: [12.0022, 8.5920] as [number, number], size: 0.06 }, // Kano
  
  // Global Expansion Targets
  { location: [51.5074, -0.1278] as [number, number], size: 0.09 }, // London
  { location: [40.7128, -74.006] as [number, number], size: 0.09 }, // New York
  { location: [25.2048, 55.2708] as [number, number], size: 0.08 }, // Dubai
  { location: [-26.2041, 28.0473] as [number, number], size: 0.07 }, // Johannesburg
  { location: [43.6510, -79.3470] as [number, number], size: 0.06 }, // Toronto
  { location: [39.9042, 116.4074] as [number, number], size: 0.05 }, // Beijing
];

// Pre-calculate beautifully curved bezier dotted lines from Lagos to main global hubs
function getBezier(start: number, end: number, t: number, control: number) {
  return (1 - t) * (1 - t) * start + 2 * (1 - t) * t * control + t * t * end;
}

const ROUTE_MARKERS: any[] = [];
const LAGOS = CORE_MARKERS[0].location;
const TARGETS = [CORE_MARKERS[1], CORE_MARKERS[4], CORE_MARKERS[5], CORE_MARKERS[6], CORE_MARKERS[7], CORE_MARKERS[9]];

TARGETS.forEach(target => {
  const segments = 30; // Density of the dotted line
  // Control point pushes the curve upwards to create an arc effect over the globe surface
  const latControl = (LAGOS[0] + target.location[0]) / 2 + (Math.abs(target.location[1] - LAGOS[1]) > 50 ? 30 : 15);
  const lngControl = (LAGOS[1] + target.location[1]) / 2;

  for (let i = 1; i < segments; i++) {
    const t = i / segments;
    const lat = getBezier(LAGOS[0], target.location[0], t, latControl);
    const lng = getBezier(LAGOS[1], target.location[1], t, lngControl);
    ROUTE_MARKERS.push({ location: [lat, lng], size: 0.015, isRoute: true, t });
  }
});

const ALL_MARKERS = [...CORE_MARKERS, ...ROUTE_MARKERS];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 4.5, // Rotate to center on Africa/Europe initially
  theta: 0.2, // Slight tilt
  dark: 0,
  diffuse: 1.2,
  mapSamples: 24000,
  mapBrightness: 2,
  baseColor: [0.988, 0.984, 0.996], // Matches the #FCFBFE background perfectly
  markerColor: [142 / 255, 36 / 255, 255 / 255], // Point A2B Primary Purple (#8E24FF)
  glowColor: [1, 1, 1],
  markers: ALL_MARKERS,
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state: any) => {
        if (!pointerInteracting.current) phiRef.current += 0.003
        state.phi = phiRef.current + rs.get()
        state.width = widthRef.current * 2
        state.height = widthRef.current * 2
        
        // Dynamic pulsing effect for markers
        const time = Date.now() / 400
        const routeTime = (Date.now() % 4000) / 4000; // Loops every 4 seconds
        
        state.markers = config.markers?.map((marker: any, idx) => {
          if (marker.isRoute) {
             // Calculate distance from current moving pulse position (from 0 to 1)
             // We wrap around using % 1 so the pulse repeats seamlessly
             const dist = Math.abs(marker.t - routeTime);
             const wrappedDist = Math.min(dist, 1 - dist);
             
             // If the marker is close to the pulse, increase its size to simulate a glowing moving dot
             const pulseSize = wrappedDist < 0.08 ? (0.08 - wrappedDist) * 0.3 : 0;
             return {
                location: marker.location,
                size: marker.size + pulseSize
             }
          }
          
          return {
            location: marker.location,
            // Base size + subtle pulsing oscillation for core hubs
            size: marker.size + Math.max(0, Math.sin(time + idx) * 0.025),
          }
        })
      },
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-150",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
