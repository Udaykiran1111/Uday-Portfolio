import React from 'react';
import Hero from './components/1_Hero';
import Summary from './components/2_summary';
import Skills from './components/3_Skills';
import Internship from './components/4_Internship';
import Projects from './components/5_Projects';
import Training from './components/6_Training';
import Certifications from './components/7_Certifications';
import Achievements from './components/8_Achievements';
import Education from './components/9_Education';
import Contact from './components/10_Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="font-body bg-[#F7F7F7]">
      <Hero />
      <Summary />
      <Skills />
      <Internship />
      <Projects />
      <Training />
      <Certifications />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;