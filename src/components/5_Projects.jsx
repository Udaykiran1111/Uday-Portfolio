import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

 const projects = [
  {
    id: "01",
    title: "AI-POWERED CARDIOVASCULAR RISK ASSISTANT (GENAI ENABLED)",
    tech: "PYTHON, FLASK, SCIKIT-LEARN, PANDAS, GEMINI API",
    date: "FEB 2026 - MAR 2026",
    description: "Developed a hybrid AI system integrating Logistic Regression with LLM-based explanations for cardiovascular risk prediction. Designed a pipeline combining ML, rule-based logic, and natural language reasoning. Deployed a Flask web app for real-time, explainable health risk analysis.",
    live: "https://ai-cvd-risk-assistant.onrender.com/",
    github: "https://github.com/Udaykiran1111/AI-CVD-Risk-Assistant"
  },
  {
    id: "02",
    title: "PREDICTIVE STAFFING PLANNER FOR AADHAAR SEVA BOOTHS",
    tech: "PYTHON, PANDAS, SCIKIT-LEARN, STREAMLIT",
    date: "JAN 2026 - FEB 2026",
    description: "Built a lifecycle-based MBUPI pressure scoring model to forecast biometric update demand across multiple states. Performed regional demand analysis and developed an interactive Streamlit dashboard to optimize workforce allocation using data-driven insights.",
    live: "https://uidai-predictive-staffing.streamlit.app/",
    github: "https://github.com/Udaykiran1111/uidai-predictive-staffing"
  },
  {
    id: "03",
    title: "F1 STATISTICS ANALYSIS (1950 - 2024)",
    tech: "PYTHON, PANDAS, NUMPY, MATPLOTLIB, DATA ANALYSIS",
    date: "NOV 2025 - DEC 2025",
    description: "Conducted comprehensive analysis of Formula 1 data spanning 1950–2024. Extracted trends in driver performance, team dominance, and race outcomes using data visualization and statistical techniques to generate actionable insights.",
    live: "https://app.powerbi.com/groups/me/reports/f1a40e84-797a-4998-824e-59fc6d9fb46f/8e8f69f40fdcb563545d?experience=power-bi",
  },
  {
    id: "04",
    title: "MCDONALD’S INSPECTION DATA ANALYSIS",
    tech: "PYTHON, PANDAS, SEABORN, MATPLOTLIB",
    date: "FEB 2025 - MAR 2025",
    description: "Analyzed food safety inspection datasets to identify patterns in violations and risk factors across locations. Performed data cleaning, exploratory data analysis, and visualization to highlight critical compliance issues and support data-driven decision making.",
    github: "https://github.com/Udaykiran1111/McDonald-s-Inspection-Data-Analysis"
  }
];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. UI ENTRANCE ANIMATION (From Bottom Right)
      gsap.fromTo('.projects-ui-layer',
        { x: 800, y: 800, opacity: 0 },
        {
          x: 0, y: 0, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%", 
            end: "top top",    
            scrub: 2 
          }
        }
      );

      // 2. 3D Z-AXIS ANIMATION
      const sharedTimelineText = document.querySelector('.timeline-text');
      const sharedTimelineContainer = document.querySelector('.timeline-container');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000%", 
          scrub: 2, 
          pin: true, 
          
          // ── THE FIX: BOUNDARY FAILSAFES ──
          // If you scroll completely past the section downwards, hide it.
          onLeave: () => {
            gsap.to(sharedTimelineContainer, { opacity: 0, duration: 0.3, overwrite: true });
          },
          // If you scroll BACK UP into the section from the bottom, force it to show the last project date.
          onEnterBack: () => {
            sharedTimelineText.textContent = projects[projects.length - 1].date;
            gsap.to(sharedTimelineContainer, { opacity: 1, duration: 0.3, overwrite: true });
          },
          // If you scroll BACK UP past the start of the section, hide it again.
          onLeaveBack: () => {
            gsap.to(sharedTimelineContainer, { opacity: 0, duration: 0.3, overwrite: true });
          }
        }
      });

      projects.forEach((proj, i) => {
        const isLeft = i % 2 === 0; 
        const card = cardRefs.current[i];
        
        const st = i * 1.5; 

        gsap.set(card, { 
          scale: 0.1, 
          opacity: 0, 
          left: "50%", 
          top: "50%", 
          xPercent: -50, 
          yPercent: -50 
        });

        tl.to(card, {
          scale: 0.6,
          opacity: 1,
          left: isLeft ? "35%" : "65%", 
          duration: 1.5,
          ease: "sine.inOut" 
        }, st)
        .to(card, {
          scale: 1,
          left: isLeft ? "25%" : "75%", 
          duration: 1.5,
          ease: "none",
          
          onStart: () => {
            sharedTimelineText.textContent = proj.date;
            gsap.to(sharedTimelineContainer, { opacity: 1, duration: 0.3, overwrite: true });
          },
          onReverseComplete: () => {
             if (i !== 0) {
               sharedTimelineText.textContent = projects[i-1].date;
             }
          }
        }, st + 1.5)
        .to(card, {
          scale: 2.2, 
          opacity: 0,
          left: isLeft ? "5%" : "95%", 
          duration: 1.5,
          ease: "sine.inOut",
          
          onReverseStart: () => {
             sharedTimelineText.textContent = proj.date;
             gsap.to(sharedTimelineContainer, { opacity: 1, duration: 0.3, overwrite: true });
          }
        }, st + 3);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="relative w-full h-screen bg-transparent overflow-hidden"
    >
      
      {/* ── ENTRANCE LAYER ── */}
      <div className="projects-ui-layer absolute inset-0 w-full h-full bg-[#050510] z-0 opacity-0">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/background2.png" 
            alt="Dark textured background" 
            className="w-full h-full object-cover grayscale"
          />
          {/* 50% opacity overlay to keep text readable */}
          <div className="absolute inset-0 bg-[#050510] opacity-75"></div>
        </div>

        <div className="absolute top-12 left-8 md:left-12 z-50 flex items-center gap-4">
          <div className="w-8 h-px bg-[#E32219]"></div>
          <span className="font-heading text-lg md:text-xl tracking-widest uppercase text-white font-bold">
            PROJECT WORKS
          </span>
        </div>
        
      </div>

      {/* ── Fixed Timeline Marker ── */}
      <div className="timeline-container absolute top-20 right-8 md:right-16 lg:right-24 z-50 flex items-center gap-4 opacity-0">
        <div className="w-8 h-px bg-[#E32219]"></div>
        <span className="timeline-text font-heading text-lg md:text-xl tracking-widest uppercase text-white font-bold">
          {/* Text is dynamically injected via GSAP */}
        </span>
      </div>

      {/* ── The 3D Space ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {projects.map((project) => (
          
          <div 
            key={project.id} 
            ref={addToRefs} 
            className="absolute w-[80vw] max-w-[550px] bg-white rounded-2xl flex flex-col items-start justify-center p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] will-change-transform opacity-0 pointer-events-auto overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#E32219]"></div>

            <h4 className="font-heading text-4xl md:text-5xl lg:text-[55px] text-[#111111] uppercase tracking-tighter leading-[0.85] w-full text-left mb-6 relative z-10 mt-4">
              {project.title}
            </h4>
            
            <div className="inline-block px-4 py-2 bg-[#F7F7F7] border border-gray-200 rounded-md mb-6 relative z-10">
              <span className="font-heading text-xs md:text-sm tracking-widest uppercase text-[#111111] font-bold">
                {project.tech}
              </span>
            </div>

            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl w-full text-left mb-10 relative z-10 font-medium">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-auto relative z-10">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 font-heading text-lg tracking-widest text-white bg-[#E32219] hover:bg-[#111111] rounded-lg transition-colors duration-300 uppercase w-full sm:w-1/2 text-center shadow-lg hover:shadow-xl"
              >
                GitHub Project
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 font-heading text-lg tracking-widest text-[#111111] border-2 border-[#111111] hover:bg-[#111111] hover:text-white rounded-lg transition-colors duration-300 uppercase w-full sm:w-1/2 text-center"
              >
                Live Demo
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;