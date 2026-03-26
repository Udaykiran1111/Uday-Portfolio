import React from 'react';

const Contact = () => {
  const email = "vattikutiudaykiran11@gmail.com";
  const phone = "+91 89192 54510"; 
  
  const gridBackground = {
    backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.04) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    backgroundPosition: 'center center'
  };

  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen bg-[#F7F7F7] flex flex-col justify-center px-8 md:px-12 lg:px-20 py-16 mt-[10px]" 
      style={gridBackground}
    >
      <div className="w-full max-w-[1600px] mx-auto z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-2 mb-10 md:mb-16">
          <div className="flex items-center gap-4 ml-1">
            <div className="w-12 h-px bg-[#E32219]"></div>
            <span className="font-heading text-lg md:text-xl font-bold tracking-widest text-[#111111] uppercase">
              LET'S COLLABORATE
            </span>
          </div>
          <h2 className="font-heading text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#111111] leading-[0.85] tracking-[-0.04em] uppercase font-bold mt-3">
            GET <span className="text-[#E32219]">IN TOUCH.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t-2 border-[#111111] pt-10">
          
          {/* LEFT COLUMN: Enhanced Contact Details */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-12">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#E32219] mt-2 flex-shrink-0"></div>
              <span className="font-heading text-2xl md:text-3xl font-bold tracking-widest text-[#111111] uppercase">
                Contact Details
              </span>
            </div>

            <div className="flex flex-col gap-12 pl-8">
              <div className="flex flex-col gap-3">
                <span className="font-body text-sm font-bold tracking-widest text-gray-400 uppercase">Email /</span>
                <a href={`mailto:${email}`} className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#111111] hover:text-[#E32219] transition-colors break-all leading-none">
                  {email}
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <span className="font-body text-sm font-bold tracking-widest text-gray-400 uppercase">Phone /</span>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#111111] hover:text-[#E32219] transition-colors leading-none">
                  {phone}
                </a>
              </div>

              <div className="flex gap-12 pt-4">
                <a href="https://linkedin.com/in/uday-kiran-vattikuti" target="_blank" rel="noopener noreferrer" className="font-heading text-lg font-bold text-[#E32219] uppercase tracking-widest hover:text-[#111111] transition-colors border-b-2 border-transparent hover:border-[#111111]">LinkedIn ↗</a>
                <a href="https://github.com/Vattikutiudaykiran" target="_blank" rel="noopener noreferrer" className="font-heading text-lg font-bold text-[#E32219] uppercase tracking-widest hover:text-[#111111] transition-colors border-b-2 border-transparent hover:border-[#111111]">GitHub ↗</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Compact Horizontal Form */}
          <div className="lg:col-span-6 bg-[#111111] p-8 md:p-10 rounded-xl shadow-2xl self-center">
            <form 
              action="https://formspree.io/f/mwvwkozr" 
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 border-b border-gray-800 pb-1 focus-within:border-[#E32219] transition-colors">
                  <label className="font-heading text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    className="bg-transparent border-none outline-none text-white font-body text-base py-1"
                    placeholder="Your Name"
                  />
                </div>

                <div className="flex flex-col gap-2 border-b border-gray-800 pb-1 focus-within:border-[#E32219] transition-colors">
                  <label className="font-heading text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    className="bg-transparent border-none outline-none text-white font-body text-base py-1"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-gray-800 pb-1 focus-within:border-[#E32219] transition-colors">
                <label className="font-heading text-[10px] font-bold text-gray-500 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message" 
                  required
                  rows="3"
                  className="bg-transparent border-none outline-none text-white font-body text-base py-1 resize-none"
                  placeholder="How can I help?"
                />
              </div>

              <button 
                type="submit"
                className="w-full md:w-max px-12 py-4 bg-[#E32219] text-white font-heading font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:text-[#111111] mt-4"
              >
                Send Message —
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;