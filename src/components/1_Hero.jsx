import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // --- Master Ref so GSAP can find BOTH the Intro and the Hero ---
  const mainRef = useRef(null);

  // Intro Loader Refs
  const introRef = useRef(null);
  const introLogoRef = useRef(null);

  // Hero Refs
  const bgRef = useRef(null);
  const textWrapperRef = useRef(null);
  const baseTextRef = useRef(null);
  const highlightLayerRef = useRef(null);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const chapters = [
    { name: 'Summary', id: 'summary' },
    { name: 'The Toolkit', id: 'skills' },
    { name: 'Experience', id: 'internship' },
    { name: 'Projects', id: 'projects' },
    { name: 'Training', id: 'training' },
    { name: 'Credentials', id: 'certifications' },
    { name: 'Milestones', id: 'achievements' },
    { name: 'Academic Track', id: 'education' },
    { name: 'Collaborate', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // We scope this to mainRef so it can find elements everywhere in the component
    let ctx = gsap.context(() => {
      
      // Scale pieces slightly so there are no white hairline gaps before they explode
      gsap.set('.shatter-box', { scale: 1.05 });

      // --- 1. THE EXPLOSIVE SHATTER ANIMATION ---
      const introTl = gsap.timeline();

      // 1. Hold the Logo on the solid Red screen for 2 seconds
      introTl.to(introLogoRef.current, { scale: 1.1, duration: 2.0, ease: "power1.inOut" });
      
      // 2. Logo vanishes right before the explosion
      introTl.to(introLogoRef.current, { scale: 0.5, opacity: 0, duration: 0.3, ease: "power3.in" });
        
      // 3. The Shatter! Targets all 12 unequal pieces
      introTl.to('.shatter-box', {
        // Send every piece to a completely random spot off-screen
        x: () => gsap.utils.random(-150, 150) + "vw",
        y: () => gsap.utils.random(-150, 150) + "vh",
        // Spin them randomly
        rotation: () => gsap.utils.random(-720, 720),
        // Randomly change their size as they fly
        scale: () => gsap.utils.random(0.2, 1.5),
        opacity: 0, 
        duration: 2.5, 
        ease: "power4.out", // Explodes fast, drifts to a stop
        stagger: { amount: 0.3, from: "center" } // The center pieces explode slightly first
      }, "-=0.1"); 

      // 4. Hide the intro container so we can click the page below
      introTl.set(introRef.current, { display: "none" });


      // --- 2. THE INFINITE COLOR SWEEP LOOP ---
      // Delay set to 5.5 seconds so it waits for the Intro Shatter to completely finish
      const loopTl = gsap.timeline({ repeat: -1, delay: 5.5 }); 
      
      const base = baseTextRef.current;
      const overlay = highlightLayerRef.current;

      const schemes = [
        { bg: 'transparent', text: '#E32219' }, // 0: Start (Red Text, Transparent BG)
        { bg: '#2563EB', text: '#ffffff' },     // 1: Racing Blue
        { bg: '#F97316', text: '#ffffff' },     // 2: McLaren Orange
        { bg: '#111111', text: '#ffffff' },     // 3: Carbon Black
        { bg: '#16A34A', text: '#ffffff' },     // 4: Aston Green
        { bg: '#1be8da', text: '#ffffff' },
        { bg: '#ffffff', text: '#E32219' },     // 5: Ferrari Red (Solid BG)
      ];

      gsap.set(base, { backgroundColor: schemes[0].bg, color: schemes[0].text });
      gsap.set(overlay, { clipPath: "inset(0% 100% 0% 0%)" }); 

      schemes.forEach((_, index) => {
        const nextScheme = schemes[(index + 1) % schemes.length];
        
        loopTl.to({}, { duration: 2 });
        loopTl.set(overlay, {
          backgroundColor: nextScheme.bg,
          color: nextScheme.text,
          clipPath: "inset(0% 100% 0% 0%)" 
        });
        
        loopTl.to(overlay, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power3.inOut" 
        });
        
        loopTl.set(base, {
          backgroundColor: nextScheme.bg,
          color: nextScheme.text
        });
      });

      // --- 3. PARALLAX SCROLL DOWN ---
      gsap.to(textWrapperRef.current, {
        y: 200, 
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

    }, mainRef); // <-- CRITICAL: Scoped to the master wrapper
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      
      {/* --- INTRO SHATTER LOADER --- */}
      <div ref={introRef} className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none">
        
        {/* Asymmetrical Grid: 4 columns, 3 rows, ALL different fractional (fr) sizes */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-[1.5fr_3fr_1.2fr_2fr] grid-rows-[2fr_1fr_2.5fr]">
          {/* We generate the 12 pieces to fill the grid perfectly */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="relative w-full h-full">
              {/* This is the box that actually flies away */}
              <div className="shatter-box absolute inset-0 bg-[#E32219] origin-center"></div>
            </div>
          ))}
        </div>

        {/* Initial Loading Logo */}
        <div ref={introLogoRef} className="relative z-10 font-heading text-8xl md:text-[150px] font-bold text-white tracking-widest drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          UK<span className="text-[#111111]">.</span>
        </div>
      </div>


      {/* --- SLEEK SLIDE-IN CHAPTERS MENU --- */}
      <div className={`fixed inset-0 bg-[#111111] z-[100] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-full px-8 md:px-12 py-8 flex justify-between items-center border-b border-gray-900">
          <div className="font-heading text-4xl font-bold tracking-widest text-white">
            UK<span className="text-[#E32219]">.</span>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="text-white font-heading text-2xl tracking-widest hover:text-[#E32219] transition-colors uppercase"
          >
            Close ✕
          </button>
        </div>

        <div className="flex flex-col items-center justify-start flex-grow gap-4 md:gap-8 overflow-y-auto py-10">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => scrollToSection(chapter.id)}
              className="group relative font-heading text-4xl md:text-7xl uppercase text-gray-600 hover:text-white transition-colors duration-300 tracking-tighter flex-shrink-0"
            >
              <span className="text-[#E32219] text-2xl md:text-4xl absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">▹</span>
              {chapter.name}
            </button>
          ))}
        </div>
      </div>

      {/* --- MAIN HERO SECTION --- */}
      <section ref={bgRef} className="relative w-full h-screen bg-[#F7F7F7] overflow-hidden flex items-center justify-center">
      
        {/* Top Right Navigation */}
        <div className="absolute top-8 w-full px-8 md:px-12 flex justify-between items-center z-50">
          <div className="font-heading text-4xl font-bold tracking-widest text-[#111111]">
            UK<span className="text-[#E32219]">.</span>
          </div> 
          
          <div className="flex items-center gap-12">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="hidden md:flex items-center gap-2 font-heading text-2xl tracking-widest text-[#111111] uppercase hover:text-[#E32219] transition-colors"
            >
              Chapters <span className="text-sm">▼</span>
            </button>
            
            <a 
              href="/resume/Uday Kiran Resume.pdf" 
              download="Uday Kiran Resume.pdf"
              className="px-8 py-3 font-heading text-xl tracking-widest text-[#F7F7F7] bg-[#111111] hover:bg-[#E32219] transition-colors duration-300 uppercase"
            >
              Resume / CV
            </a>
          </div>
        </div>

        {/* The Giant Text Layers */}
        <div ref={textWrapperRef} className="absolute z-10 w-full h-full flex justify-center items-center pointer-events-none">
          <div className="relative flex justify-center items-center">
            {/* THE FIX: Increased text size up to 23vw / 20vw to make the layout a little bit bigger, exactly as requested */}
            <h1 ref={baseTextRef} className="text-[23vw] md:text-[20vw] font-bold leading-none tracking-tight whitespace-nowrap px-4 py-2" style={{ fontFamily: '"F1 Torque", "Impact", "Bebas Neue", sans-serif', textTransform: 'uppercase' }}>
              UDAY KIRAN
            </h1>
            {/* Highlight Sweeping Layer */}
            <h1 ref={highlightLayerRef} className="absolute left-0 top-0 w-full h-full text-[23vw] md:text-[20vw] font-bold leading-none tracking-tight whitespace-nowrap px-4 py-2" style={{ clipPath: 'inset(0% 100% 0% 0%)', fontFamily: '"F1 Torque", "Impact", "Bebas Neue", sans-serif', textTransform: 'uppercase' }}>
              UDAY KIRAN
            </h1>
          </div>
        </div>

        {/* Foreground Portrait */}
        <div className="absolute z-20 bottom-0 w-full h-[95vh] flex justify-center items-end pointer-events-none">
          <img 
            src="/images/IMG_1705-Photoroom.png" 
            alt="Uday Kiran" 
            className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] grayscale contrast-125"
          />
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 z-30 flex flex-col items-center drop-shadow-md">
          <span className="text-sm font-body tracking-widest text-[#111111] md:text-white mb-3 uppercase font-bold">Scroll to Explore</span>
          <div className="w-px h-16 bg-[#E32219] animate-bounce"></div>
        </div>

      </section>
    </div>
  );
};

export default Hero;