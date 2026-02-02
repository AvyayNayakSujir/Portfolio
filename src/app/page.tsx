'use client';

import MatrixText from '@/components/MatrixText';
import Fireflies from '@/components/Fireflies';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger content fade-in after a brief delay
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 font-sans overflow-hidden">
      {/* Interactive Fireflies Background */}
      <Fireflies />
      
      <main className="relative flex w-full max-w-4xl flex-col items-start justify-center px-6 py-20 sm:px-12 md:px-16">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className={`relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Matrix reveal hello message */}
          <div className="mb-6 overflow-hidden">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <MatrixText 
                text="Hello, I'm" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 block"
                delay={300}
              />
              <MatrixText 
                text="Avyay" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 block mt-2"
                delay={800}
              />
            </h1>
          </div>

          {/* Description */}
          <div className={`space-y-4 max-w-2xl transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 leading-relaxed">
              A passionate{' '}
              <span className="text-emerald-400 font-semibold">developer</span>{' '}
              crafting beautiful digital experiences with modern technologies.
            </p>
            
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              I specialize in building responsive web applications, elegant user interfaces, 
              and scalable solutions. With a keen eye for design and a love for clean code, 
              I transform ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="px-8 py-4 border-2 border-emerald-400/50 text-emerald-400 font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-400/10 hover:border-emerald-400 hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
