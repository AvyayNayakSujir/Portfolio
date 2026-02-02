'use client';

import { useEffect, useRef } from 'react';

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  brightness: number;
  size: number;
  targetBrightness: number;
}

export default function Fireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firefliesRef = useRef<Firefly[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize fireflies
    const numFireflies = 40;
    firefliesRef.current = Array.from({ length: numFireflies }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      brightness: Math.random() * 0.5 + 0.5,
      size: Math.random() * 3 + 2,
      targetBrightness: Math.random() * 0.5 + 0.5,
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      firefliesRef.current.forEach((firefly) => {
        // Distance to mouse
        const dx = mouseRef.current.x - firefly.x;
        const dy = mouseRef.current.y - firefly.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Attraction/repulsion logic
        const attractionRadius = 200;
        const repulsionRadius = 50;

        if (distance < repulsionRadius && distance > 0) {
          // Scatter away from cursor
          const force = (repulsionRadius - distance) / repulsionRadius;
          firefly.vx -= (dx / distance) * force * 0.5;
          firefly.vy -= (dy / distance) * force * 0.5;
          firefly.targetBrightness = 1;
        } else if (distance < attractionRadius && distance > repulsionRadius) {
          // Attract to cursor
          const force = (attractionRadius - distance) / attractionRadius;
          firefly.vx += (dx / distance) * force * 0.1;
          firefly.vy += (dy / distance) * force * 0.1;
          firefly.targetBrightness = 0.8;
        } else {
          // Random wandering
          firefly.vx += (Math.random() - 0.5) * 0.1;
          firefly.vy += (Math.random() - 0.5) * 0.1;
          firefly.targetBrightness = 0.5;
        }

        // Apply velocity damping
        firefly.vx *= 0.95;
        firefly.vy *= 0.95;

        // Limit velocity
        const maxSpeed = 2;
        const speed = Math.sqrt(firefly.vx * firefly.vx + firefly.vy * firefly.vy);
        if (speed > maxSpeed) {
          firefly.vx = (firefly.vx / speed) * maxSpeed;
          firefly.vy = (firefly.vy / speed) * maxSpeed;
        }

        // Update position
        firefly.x += firefly.vx;
        firefly.y += firefly.vy;

        // Wrap around edges
        if (firefly.x < 0) firefly.x = canvas.width;
        if (firefly.x > canvas.width) firefly.x = 0;
        if (firefly.y < 0) firefly.y = canvas.height;
        if (firefly.y > canvas.height) firefly.y = 0;

        // Update brightness with smooth transition
        firefly.brightness += (firefly.targetBrightness - firefly.brightness) * 0.1;

        // Flickering effect
        const flicker = Math.sin(Date.now() * 0.005 + firefly.x) * 0.2 + 0.8;

        // Draw firefly with glow
        const gradient = ctx.createRadialGradient(
          firefly.x,
          firefly.y,
          0,
          firefly.x,
          firefly.y,
          firefly.size * 4
        );
        gradient.addColorStop(0, `rgba(52, 211, 153, ${firefly.brightness * flicker})`);
        gradient.addColorStop(0.3, `rgba(52, 211, 153, ${firefly.brightness * flicker * 0.6})`);
        gradient.addColorStop(1, 'rgba(52, 211, 153, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = `rgba(167, 243, 208, ${firefly.brightness * flicker})`;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
