import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-white pt-20 pb-10 px-8 md:px-12 lg:px-20 border-t border-gray-900">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-5xl font-bold tracking-tighter leading-none italic uppercase">
              UDAY<br/><span className="text-[#E32219]">KIRAN</span>
            </h2>
            <p className="font-body text-xs text-gray-500 tracking-widest uppercase font-bold">
              Data Scientist & Developer
            </p>
          </div>

          {/* Site Map Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Navigation</h4>
            <a href="#summary" className="font-heading text-lg hover:text-[#E32219] transition-colors uppercase">The Summary</a>
            <a href="#projects" className="font-heading text-lg hover:text-[#E32219] transition-colors uppercase">Project Works</a>
            <a href="#internship" className="font-heading text-lg hover:text-[#E32219] transition-colors uppercase">Experiences</a>
          </div>

          {/* Social Presence Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Network</h4>
            <a href="https://linkedin.com" target="_blank" className="font-heading text-lg hover:text-[#E32219] transition-colors uppercase">LinkedIn ↗</a>
            <a href="https://github.com" target="_blank" className="font-heading text-lg hover:text-[#E32219] transition-colors uppercase">GitHub ↗</a>
            <a href="https://vattikuti.com" target="_blank" className="font-heading text-lg hover:text-[#E32219] transition-colors uppercase">Portfolio</a>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Legal</h4>
            <span className="font-heading text-lg text-gray-400 uppercase">Privacy Policy</span>
            <span className="font-heading text-lg text-gray-400 uppercase">Cookie Policy</span>
            <span className="font-heading text-lg text-gray-400 uppercase">Terms of Use</span>
          </div>
        </div>

        {/* Bottom Bar: Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-900 gap-8">
          
          {/* Social Icons (Placeholder styles matching CL) */}


          {/* Copyright Info */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-heading text-[10px] md:text-xs tracking-widest text-gray-500 uppercase font-bold">
              ©{currentYear} UDAY KIRAN ALL RIGHTS RESERVED — SITE BY GEMINI
            </p>
            <p className="font-heading text-[9px] tracking-[0.2em] text-gray-700 uppercase">
              Driven by Data • Engineered for Excellence
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;