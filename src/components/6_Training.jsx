import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Training = () => {
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

      // Same heavy drag animation from the bottom right corner
      tl.from('.training-content', { 
        x: "100vw", 
        y: "100vh", 
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
    "Executed end-to-end data analysis workflows in Python, transforming raw datasets into actionable insights.",
    "Implemented machine learning pipelines including feature preparation, model evaluation, and validation.",
    "Applied analytical libraries (Pandas, NumPy, Scikit-learn, Matplotlib) to solve structured data problems.",
    "Delivered concise analytical summaries, translating results into decision-oriented insights."
  ];

  return (
    <section 
      id="training" 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#F7F7F7] flex items-center justify-center px-8 md:px-12 lg:px-16 overflow-hidden"
      style={gridBackground}
    >
      <div className="w-full max-w-[1600px] mx-auto z-10">
        
        <div className="training-content w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t-2 border-[#111111] pt-8 will-change-transform">
          
          {/* Left Column: Section Title */}
          <div className="lg:col-span-3 flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111111] mt-1.5 flex-shrink-0"></div>
            <span className="font-heading text-lg md:text-xl tracking-widest uppercase text-[#111111] font-bold">
              TRAINING
            </span>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#111111] leading-[0.85] tracking-[-0.02em] uppercase font-bold">
                FROM DATA TO DECISIONS: A HANDS-ON APPROACH TO DATA SCIENCE
              </h3>
              <p className="font-body text-xl md:text-2xl text-gray-700 mt-2">
                LPU Skill Development
              </p>
              <span className="font-body text-[#E32219] font-bold tracking-widest uppercase text-sm md:text-base mt-2">
                JUN 2025 — JUL 2025
              </span>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-6 mt-4 lg:w-[85%]">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex gap-6 items-start">
                  {/* Square Red Bullet matching the Internship section */}
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

export default Training;