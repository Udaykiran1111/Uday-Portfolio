import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          end: "+=300%", 
          scrub: 2.5, 
          pin: true, 
        }
      });

      // THE FIX: Using .fromTo() forces strict start and end coordinates. 
      // This permanently fixes the "stuck on scroll up" bug because GSAP no longer has to guess where the elements should go.
      tl.fromTo('.toolkit-header', 
        { x: "100vw", y: "100vh", opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: "none" }
      )
      .fromTo('.toolkit-card', 
        { x: "100vw", y: "100vh", opacity: 0 },
        { x: 0, y: 0, opacity: 1, stagger: 0.1, ease: "none" }, 
        "<0.1" // Starts slightly after the header
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const TabbedCard = ({ title, content, isRed }) => (
    <div className="toolkit-card relative mt-8 w-full shadow-[0_10px_40px_rgba(0,0,0,0.04)] will-change-transform">
      <div className={`absolute right-0 top-0 -translate-y-full flex items-center gap-3 px-4 py-2 rounded-t-xl z-10 transition-colors ${isRed ? 'bg-[#E32219]' : 'bg-[#EBEBEB]'}`}>
        <div className={`w-1.5 h-1.5 rounded-full ${isRed ? 'bg-white' : 'bg-[#111111]'}`}></div>
        <span className={`font-heading text-xs tracking-widest uppercase ${isRed ? 'text-white' : 'text-[#111111]'}`}>
          {title}
        </span>
      </div>
      <div className={`p-6 md:p-8 rounded-xl rounded-tr-none relative z-20 flex flex-col gap-4 ${isRed ? 'bg-[#E32219]' : 'bg-[#EBEBEB]'}`}>
        <p className={`font-heading text-3xl md:text-4xl lg:text-[45px] font-bold uppercase leading-[0.85] tracking-tight ${isRed ? 'text-white' : 'text-[#111111]'}`}>
          {content}
        </p>
      </div>
    </div>
  );

  const gridBackground = {
    backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.04) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    backgroundPosition: 'center center'
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#F7F7F7] flex flex-col justify-center px-8 md:px-12 lg:px-16 overflow-hidden"
      style={gridBackground}
    >
      <div className="w-full max-w-[1600px] mx-auto z-10 pt-12">
        
        {/* THE FIX: Re-added 'toolkit-header' class and added 'mb-8' for proper spacing */}
        <div className="toolkit-header flex items-center gap-4 ml-1 mb-10 will-change-transform">
          <div className="w-12 h-px bg-[#E32219]"></div>
          <span className="font-body text-sm font-bold tracking-widest text-[#111111] uppercase">
            SKILLS
          </span>
        </div>

        {/* Custom Column Layout from your provided code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full items-start">
          <div className="flex flex-col gap-6 w-full">
            <TabbedCard title="LANGUAGES" content="C, C++, Java, Python, SQL" isRed={true} />
            <TabbedCard title="TOOLS & PLATFORMS" content="MySQL, Power BI, Jupyter, Google Colab, Git, GitHub, Cisco Packet Tracer, Linux"  />
          </div>
          <div className="flex flex-col gap-6 w-full md:mt-12">
            <TabbedCard title="WEB TECHNOLOGIES" content="HTML, CSS, JavaScript" />
            <TabbedCard title="FRAMEWORKS" content="React, Scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn, SHAP" />
          </div>
          <div className="flex flex-col gap-6 w-full md:mt-24">
            <TabbedCard title="SOFT SKILLS" content="Problem-Solving, Time Management, Leadership, Adaptability, Quick Learner" isRed={true}/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;