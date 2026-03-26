import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const educationHistory = [
    {
      id: 1,
      institution: "TSR School",
      location: "Enkoor, Telangana",
      degree: "Class X",
      date: "May 2021",
      gradeType: "GPA",
      grade: "10 / 10",
    },
    {
      id: 2,
      institution: "Krishnaveni Junior College",
      location: "Khammam, Telangana",
      degree: "Class XII",
      date: "Jul 2021 – May 2023",
      gradeType: "Percentage",
      grade: "89.5%",
    },
    {
      id: 3,
      institution: "Lovely Professional University",
      location: "Ludhiana, Punjab",
      degree: "B.Tech. Computer Science & Engineering",
      date: "Aug 2023 – Present",
      gradeType: "CGPA",
      grade: "7.22 / 10",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const scrollWidth = containerRef.current.scrollWidth;

      // 1. UI ENTRANCE ANIMATION (Exactly like Projects - from Bottom Right)
      gsap.fromTo('.education-ui-layer',
        { x: 800, y: 800, opacity: 0 },
        {
          x: 0, y: 0, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 100%", 
            end: "top top",    
            scrub: 2 
          }
        }
      );

      // 2. HORIZONTAL SCROLL & PINNING (Starts after the entrance is done)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => "+=" + (scrollWidth - window.innerWidth), 
          scrub: 1, 
          pin: true, 
          invalidateOnRefresh: true,
        }
      });

      // Move the racetrack content
      tl.to(containerRef.current, {
        x: () => -(scrollWidth - window.innerWidth),
        ease: "none"
      }, 0);

      // Animate the stripes
      tl.fromTo(".racetrack-stripes", 
        { backgroundPosition: "0% 0%" },
        { 
          backgroundPosition: "200% 0%", 
          ease: "none"
        },
        0
      );

    }, triggerRef);

    return () => ctx.revert(); 

  }, []);

  return (
    <section ref={triggerRef} className="relative w-full h-screen overflow-hidden">
      
      {/* ── ENTRANCE LAYER (The UI Wrapper that flies in) ── */}
      <div className="education-ui-layer absolute inset-0 w-full h-full bg-[#111111] z-10 opacity-0 will-change-transform">
        
        {/* Title Block */}
        <div className="absolute top-0 left-0 w-full h-[30vh] flex items-center justify-center p-8 z-10 pointer-events-none">
          <h2 className="text-[12vw] font-heading font-bold text-white leading-none tracking-tighter uppercase opacity-10">
            Academic Track
          </h2>
        </div>

        {/* Racetrack Container */}
        <div className="relative w-full h-full flex flex-col justify-end">
          
          {/* Stripes */}
          <div className="racetrack-stripes absolute bottom-0 left-0 w-[1000vw] h-20 opacity-30 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #E32219, #E32219 20px, transparent 20px, transparent 40px, white 40px, white 60px, transparent 60px, transparent 80px)"
            }}
          ></div>

          {/* Horizontal Moving Content */}
          <div ref={containerRef} className="w-fit flex items-end h-screen pb-32 pl-[20vw] pr-[20vw] will-change-transform">
            {educationHistory.map((edu) => (
              <div key={edu.id} className="w-[80vw] lg:w-[45vw] flex-shrink-0 px-8 lg:px-12 flex flex-col gap-6 relative">
                
                {/* Red Marker Dot */}
                <div className="absolute -bottom-32 left-8 lg:left-12 w-10 h-10 rounded-full bg-[#E32219] border-8 border-[#111111] z-20"></div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-gray-800 pb-2">
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white uppercase tracking-tight">
                    {edu.institution}
                  </h3>
                  <span className="text-gray-500 font-body text-sm mt-1 md:mt-0 whitespace-nowrap">
                    {edu.location}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <p className="text-xl lg:text-2xl font-body text-[#E32219] uppercase tracking-wide">
                    {edu.degree}
                  </p>
                  <span className="text-xs font-body tracking-widest text-gray-300 px-3 py-1 border border-gray-700 uppercase whitespace-nowrap">
                    {edu.date}
                  </span>
                </div>

                <p className="text-gray-400 font-body text-lg leading-relaxed max-w-2xl">
                  {edu.description}
                </p>

                <div className="mt-4 p-5 bg-[#F7F7F7] border-l-4 border-[#E32219] w-fit">
                  <span className="font-body text-xs font-bold text-[#111111] tracking-widest uppercase">
                    Achieved {edu.gradeType}:
                  </span>
                  <span className="font-heading text-4xl lg:text-5xl font-bold text-[#111111] leading-none ml-4 align-middle">
                    {edu.grade}
                  </span>
                </div>

              </div>
            ))}
            
            {/* Finish Line Area */}
            <div className="w-[50vw] flex-shrink-0 flex items-end">
              <h4 className="text-[20vw] font-heading text-white opacity-5 tracking-tighter -mb-8">FINISH</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;