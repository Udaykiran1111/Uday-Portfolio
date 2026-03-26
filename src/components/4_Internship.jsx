import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Internship = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          end: "+=250%", 
          scrub: 2.5, 
          pin: true, 
        }
      });

      // THE FIX: Safe `.from()` animation
      tl.from('.internship-content', { 
        x: "50vw", 
        y: "50vh", 
        opacity: 0, 
        ease: "none" 
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const gridBackground = {
    backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.04) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    backgroundPosition: 'center center'
  };

  const bullets = [
    "Optimized conversational data analysis. Refined 30+ complex prompts to improve LLM response consistency and ensured a 98% precision rate in data interpretation.",
    "Executed a strategic content analysis on a library of 7,787 Netflix titles using Python and Pandas. Identified dominant genres and global market gaps.",
    "Spearheaded an exploratory data analysis of 102,058 NYC Airbnb listings. Uncovered a 0.99 correlation between pricing and service fees to inform host strategies."
  ];

  return (
    <section 
      id="internship" 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#F7F7F7] flex items-center justify-center px-8 md:px-12 lg:px-16 overflow-hidden"
      style={gridBackground}
    >
      <div className="w-full max-w-[1600px] mx-auto z-10">
        
        <div className="internship-content w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t-2 border-[#111111] pt-8 will-change-transform">
          
          <div className="lg:col-span-3 flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111111] mt-1.5 flex-shrink-0"></div>
            <span className="font-heading text-lg md:text-xl tracking-widest uppercase text-[#111111] font-bold">
              WORK EXPERIENCE
            </span>
          </div>

          <div className="lg:col-span-9 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-[3rem] md:text-[4rem] lg:text-[5rem] text-[#111111] leading-[0.85] tracking-[-0.02em] uppercase font-bold">
                AICTE VOIS VIRTUAL INTERNSHIP
              </h3>
              <p className="font-body text-xl md:text-2xl text-gray-700 mt-2">
                Conversational Data Analysis with LLMs
              </p>
              <span className="font-body text-[#E32219] font-bold tracking-widest uppercase text-sm md:text-base mt-2">
                SEP 2025 — OCT 2025
              </span>
            </div>

            <div className="flex flex-col gap-6 mt-4 lg:w-[85%]">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-2 h-2 bg-[#E32219] mt-2.5 flex-shrink-0"></div>
                  <p className="font-body text-lg md:text-xl text-[#111111] leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship;