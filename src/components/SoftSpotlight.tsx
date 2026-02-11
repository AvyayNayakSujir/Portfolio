'use client';

import { useEffect, useRef } from 'react';

export default function SoftSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const randomPercent = (min: number, max: number) =>
      min + Math.random() * (max - min);

    const spots = [
      { x: 28, y: 18, tx: 28, ty: 18 },
      { x: 70, y: 64, tx: 70, ty: 64 },
      { x: 40, y: 72, tx: 40, ty: 72 },
      { x: 78, y: 32, tx: 78, ty: 32 },
    ];

    const setTargets = () => {
      spots.forEach((spot) => {
        spot.tx = clamp(randomPercent(12, 88), 8, 92);
        spot.ty = clamp(randomPercent(12, 88), 8, 92);
      });
    };

    const applyPositions = () => {
      spots.forEach((spot, index) => {
        el.style.setProperty(`--spot-${index + 1}-x`, `${spot.x}%`);
        el.style.setProperty(`--spot-${index + 1}-y`, `${spot.y}%`);
      });
    };

    setTargets();
    applyPositions();

    if (prefersReducedMotion) {
      return;
    }

    const drift = () => {
      const ease = 0.0025;
      spots.forEach((spot) => {
        spot.x += (spot.tx - spot.x) * ease;
        spot.y += (spot.ty - spot.y) * ease;
      });
      applyPositions();
      frame = window.requestAnimationFrame(drift);
    };

    let frame = window.requestAnimationFrame(drift);
    const targetInterval = window.setInterval(setTargets, 8000);

    return () => {
      window.clearInterval(targetInterval);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div ref={spotlightRef} className="soft-spotlight" />
    </div>
  );
}
