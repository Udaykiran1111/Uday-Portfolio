import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Summary = () => {
  const sectionRef = useRef(null);
  const textBlockRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // THE FIX 1: Instantly hide and push elements off-screen before anything else happens
      gsap.set([textBlockRef.current, imageRef.current], { 
        x: "100vw", 
        y: "100vh", 
        opacity: 0 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          end: "+=250%", 
          scrub: 2.5, 
          pin: true, 
        }
      });

      // THE FIX 2: Both elements travel the exact same distance and start at exact time '0'
      tl.to(textBlockRef.current, 
        { x: 0, y: 0, opacity: 1, ease: "none" },
        0 
      );

      tl.to(imageRef.current,
        { x: 0, y: 0, opacity: 1, ease: "none" },
        0 // Starting at '0' ensures it moves perfectly side-by-side with the text
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const gridBackground = {
    backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.04) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    backgroundPosition: 'center center'
  };

  return (
    <section 
      id="summary" 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#F7F7F7] flex items-center py-24 px-8 md:px-12 lg:px-16 overflow-hidden"
      style={gridBackground} 
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-[1600px] mx-auto z-10">
        
        <div ref={textBlockRef} className="flex-1 w-full flex flex-col gap-6 will-change-transform">
          <div className="flex items-center gap-4 ml-1">
            <div className="w-12 h-px bg-[#E32219]"></div>
            <span className="font-body text-sm font-bold tracking-widest text-[#111111] uppercase">
              Profile
            </span>
          </div>

          <h2 className="font-heading text-[12vw] lg:text-[8.5vw] xl:text-[9vw] font-bold leading-[0.8] tracking-[-0.03em] text-[#111111] m-0 p-0 uppercase">
            Data Science & M L<br/>
            <span className="text-[#E32219]">Engineer</span>
          </h2>

          <p className="font-body text-xl md:text-2xl text-gray-700 max-w-4xl mt-4 leading-relaxed pr-4">
            Computer Science Engineering student specializing in AI and Machine Learning, with experience in predictive modeling, data analysis, and intelligent system development. Focused on solving real-world problems through scalable, data-driven solutions.
          </p>
        </div>

        <div ref={imageRef} className="flex justify-center items-center w-full lg:w-[35%] max-w-[500px] will-change-transform">
          <img 
            src="/images/summary-graphic.png" 
            alt="Monochrome Abstract Graphic" 
            className="w-full h-auto object-contain grayscale contrast-125 lg:transform lg:-translate-y-8 drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Summary;