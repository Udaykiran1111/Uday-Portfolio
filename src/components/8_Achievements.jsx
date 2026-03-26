import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          end: "+=250%", 
          scrub: 2.5, // Matches the heavy delay of Training
          pin: true, 
        }
      });

      // Same heavy drag animation from the bottom right corner (100vw/100vh)
      tl.from('.achievements-content', { 
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

  const milestones = [
    {
      date: "NOV 2025",
      title: "Global Data Visualization Challenge",
      desc: "Completed Microsoft Fabric Data Days, successfully engineering and visualizing complex data models in a highly competitive global environment."
    },
    {
      date: "NOV 2025",
      title: "Google Agentic AI Program",
      desc: "Finished Google's rigorous 5-Day Agentic AI Program, gaining specialized, hands-on experience in building and deploying autonomous AI agents."
    }
  ];

  return (
    <section 
      id="achievements" 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#F7F7F7] flex items-center justify-center px-8 md:px-12 lg:px-16 overflow-hidden"
      style={gridBackground}
    >
      <div className="w-full max-w-[1600px] mx-auto z-10">
        
        <div className="achievements-content w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t-2 border-[#111111] pt-8 will-change-transform">
          
          {/* Left Column: Section Title */}
          <div className="lg:col-span-3 flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111111] mt-1.5 flex-shrink-0"></div>
            <span className="font-heading text-lg md:text-xl tracking-widest uppercase text-[#111111] font-bold">
              ACHIEVEMENTS
            </span>
          </div>

          {/* Right Column: Milestones Content */}
          <div className="lg:col-span-9 flex flex-col gap-16">
            {milestones.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-body text-[#E32219] font-bold tracking-widest uppercase text-sm md:text-base">
                    {item.date}
                  </span>
                  <h3 className="font-heading text-[2rem] md:text-[3rem] lg:text-[3.5rem] text-[#111111] leading-[0.9] tracking-tight uppercase font-bold">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex gap-6 items-start lg:w-[85%]">
                  {/* Square Red Bullet to match the aesthetic */}
                  <div className="w-2 h-2 bg-[#E32219] mt-2.5 flex-shrink-0"></div>
                  <p className="font-body text-lg md:text-xl text-[#111111] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;