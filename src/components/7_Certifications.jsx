import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          end: "+=400%", 
          scrub: 2.5, 
          pin: true, 
        }
      });

      tl.fromTo('.slide-1', 
        { x: "100vw", y: "100vh", opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: "none" }
      )
      .to('.slide-1', 
        { x: "-100vw", y: "-100vh", opacity: 0, ease: "none" },
        "swap"
      )
      .fromTo('.slide-2', 
        { x: "100vw", y: "100vh", opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: "none" },
        "swap"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const gridBackground = {
    backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.04) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    backgroundPosition: 'center center'
  };

  const certificates = [
    {
      title: "Oracle AI Autonomous Database 2025 Certified Professional",
      issuer: "Oracle",
      desc: "Certified in Oracle Autonomous Database with focus on AI-driven data management and automation.",
      skills: "Oracle Cloud, AI Integration",
      logo: "/images/cert-oracle.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FAD381E3575ED554C5A354BB05B044CE576BD9F8FC9DB5A032BFEFC1558E9398"
    },
    {
      title: "OCI 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      desc: "Fundamental knowledge of AI/ML concepts and Oracle Cloud AI services.",
      skills: "AI/ML, OCI",
      logo: "/images/cert-oracle.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E4D3968F18C635491FCEEF4DF2861E1B4151D6C097F8F4B57C0009AA51325439"
    },
    {
      title: "OCI 2025 Certified Networking Professional",
      issuer: "Oracle",
      desc: "Advanced expertise in cloud networking and virtual cloud networks.",
      skills: "VCN, Security",
      logo: "/images/cert-oracle.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F96DE0166B8E9A69055E2C3E64B0DEC076B7638147975F28002D8E7E0DE0F1AF"
    },
    {
      title: "Oracle Database@AWS Certified Architect Professional",
      issuer: "Oracle",
      desc: "Architected database solutions integrating Oracle with AWS architecture.",
      skills: "AWS, Oracle DB",
      logo: "/images/cert-oracle.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6DC368256696A60700EE567B501900DC79701746641EE64125FF09AB6C03458E"
    },
    {
      title: "Cloud Computing (NPTEL)",
      issuer: "NPTEL",
      desc: "12-week course covering cloud architecture and virtualization.",
      skills: "Virtualization, Distributed Systems",
      logo: "/images/cert-nptel.png",
      link: "https://drive.google.com/file/d/1hb2AaZs9vuiQ4l8Vnc1LSPRvIVFAorj-/view?usp=sharing"
    },
    {
      title: "Computer Communications Specialization",
      issuer: "Coursera",
      desc: "Foundation in networking concepts including TCP/IP and protocols.",
      skills: "Networking, TCP/IP",
      logo: "/images/cert-coursera.png",
      link: "https://coursera.org/share/1b006b25ec73f2c53cf8a883a2b9c391"
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      desc: "Certification focusing on responsive UI design and modern web practices.",
      skills: "HTML, CSS, UI Design",
      logo: "/images/cert-freecodecamp1.png",
      link: "https://www.freecodecamp.org/certification/uday123/responsive-web-design"
    },
    {
      title: "Data Visualization",
      issuer: "VOIS",
      desc: "Focused on data visualization techniques and visual analytics tools.",
      skills: "Analytics, Dashboards",
      logo: "/images/cert-vois.png",
      link: "https://drive.google.com/file/d/1cLq7rXHGeLQ4_FNX52dy75zrny_rv3FB/view?usp=sharing"
    }
  ];

  const slide1Certs = certificates.slice(0, 4);
  const slide2Certs = certificates.slice(4, 8);

  // Separate Card Component for better error handling
  const CertificateCard = ({ cert }) => (
    <div className="relative group w-full aspect-[3/4.5] md:aspect-[3/4] max-h-[380px]">
      <div className="absolute top-0 left-0 w-full h-full bg-[#E32219] rounded-xl translate-x-1.5 translate-y-1.5 md:translate-x-2 md:translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 z-0"></div>

      <div className="relative w-full h-full bg-[#111111] rounded-xl flex flex-col z-10 p-5 overflow-hidden group-hover:-translate-y-1 transition-transform duration-300 shadow-2xl border border-gray-800">
        
        {/* LOGO AREA - WIDER AND COLORFUL */}
        <div className="w-full h-24 md:h-28 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-5 overflow-hidden relative">
          <img 
            src={cert.logo} 
            alt={`${cert.issuer} Logo`} 
            className="w-[85%] h-[75%] object-contain opacity-100 z-10 transition-all group-hover:scale-105" 
            onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'block'; 
            }} 
          />
          <span className="absolute font-heading font-bold text-gray-500 text-[10px] uppercase text-center px-4 hidden">
            {cert.issuer}
          </span>
        </div>

        <div className="flex flex-col flex-grow">
          <h4 className="font-heading text-base md:text-lg font-bold text-white uppercase leading-[1.1] mb-2 line-clamp-2">
            {cert.title}
          </h4>
          <p className="font-body text-[11px] md:text-xs text-gray-400 leading-relaxed line-clamp-3 mb-auto">
            {cert.desc}
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <div className="font-heading text-[9px] md:text-[10px] font-bold text-[#E32219] uppercase tracking-widest block line-clamp-1">
              {cert.skills}
            </div>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 font-heading text-[10px] md:text-xs text-white hover:text-[#E32219] uppercase tracking-widest font-bold transition-colors w-fit"
            >
              Verify <span className="text-sm leading-none -mt-0.5">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="certifications" 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#F7F7F7] overflow-hidden"
      style={gridBackground}
    >
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
        {/* SLIDE 1 */}
        <div className="slide-1 absolute w-full max-w-[1600px] px-8 md:px-12 lg:px-16 will-change-transform z-20">
          <div className="flex items-center gap-4 ml-1 mb-8">
            <div className="w-12 h-px bg-[#E32219]"></div>
            <span className="font-heading text-lg md:text-xl font-bold tracking-widest text-[#111111] uppercase">
              CERTIFICATIONS
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {slide1Certs.map((cert, index) => (
              <CertificateCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="slide-2 absolute w-full max-w-[1600px] px-8 md:px-12 lg:px-16 will-change-transform z-10 pt-[52px] md:pt-[60px]"> 
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {slide2Certs.map((cert, index) => (
              <CertificateCard key={index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;