'use client';

import TypingEffect from '@/components/TypingEffect';
import Fireflies from '@/components/Fireflies';
import Timeline from '@/components/Timeline';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger content fade-in after a brief delay
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToExperience = () => {
    const element = document.getElementById('experience-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 font-sans">
      {/* Interactive Fireflies Background */}
      <Fireflies />
      {/* Fixed Social Icons - Bottom Left - Hidden on Mobile */}
      <div className={`hidden md:flex fixed left-8 bottom-8 z-20 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col gap-5 items-center">
          {/* Gmail */}
          <a
            href="mailto:avyaysujir1010@gmail.com"
            className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-red-400/50 hover:bg-red-400/10 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <svg className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/avyay-nayak-sujir"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AvyayNayakSujir"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/avyay_nayak"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 transition-colors" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#f09433' }} />
                  <stop offset="25%" style={{ stopColor: '#e6683c' }} />
                  <stop offset="50%" style={{ stopColor: '#dc2743' }} />
                  <stop offset="75%" style={{ stopColor: '#cc2366' }} />
                  <stop offset="100%" style={{ stopColor: '#bc1888' }} />
                </linearGradient>
              </defs>
              <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Vertical Line Decoration */}
          <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-700 to-transparent"></div>
        </div>
      </div>
      
      <main className="relative flex w-full max-w-4xl flex-col items-start justify-center px-6 py-20 sm:px-12 md:px-16">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className={`relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Typing Effect reveals hello message */}
          <div className="mb-6 overflow-hidden">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <TypingEffect 
                texts={["Hello,"]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 block"
                delay={300}
                typingSpeed={100}
                pauseBetween={500}
              />
              <TypingEffect 
                texts={["I'm Avyay."]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 block mt-2"
                delay={1300}
                typingSpeed={100}
                pauseBetween={500}
              />
            </h1>
          </div>

          {/* Description */}
          <div className={`space-y-4 max-w-2xl transition-all duration-1000 delay-2800 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 leading-relaxed">
              A{' '}
              <span className="text-emerald-400 font-semibold">Full Stack Developer</span>{' '}
              who’s passionate about engineering scalable systems and automating processes.
            </p>
            
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              I enjoy the responsibility of owning the technical roadmap, ensuring that every piece of the architecture is stable, efficient, and built to scale.
            </p>
            {/* Social Icons - Mobile Only */}
            <div className="flex md:hidden justify-start gap-4 pt-6">
              {/* Gmail */}
              <a
                href="mailto:avyaysujir1010@gmail.com"
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-red-400/50 hover:bg-red-400/10 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/avyay-nayak-sujir"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AvyayNayakSujir"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/avyay_nayak"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 transition-colors" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-gradient-mobile" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f09433' }} />
                      <stop offset="25%" style={{ stopColor: '#e6683c' }} />
                      <stop offset="50%" style={{ stopColor: '#dc2743' }} />
                      <stop offset="75%" style={{ stopColor: '#cc2366' }} />
                      <stop offset="100%" style={{ stopColor: '#bc1888' }} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instagram-gradient-mobile)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 pt-6">
              <button 
                onClick={scrollToExperience}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
              >
                <span className="relative z-10">Work & Experience</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
                <a 
                href="https://drive.google.com/file/d/1mD7Q_dSmQdafdU56w5kbW3IY7TDFWaeH/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-emerald-400/50 text-emerald-400 font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-400/10 hover:border-emerald-400 hover:scale-105 flex items-center gap-2"
                >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
                </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    {/* Experience Timeline Section */}
    <div className="scroll-mt-20">
      <Timeline />
    </div>
    
    {/* Projects Section */}
    <div className="scroll-mt-20">
      <Projects />
    </div>

    {/* Education Section */}
    <div className="scroll-mt-20">
      <Education />
    </div>

    {/* Contact Section */}
    <Contact />
    </>
  );
}
