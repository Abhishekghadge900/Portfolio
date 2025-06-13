import { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  // Create refs for each section for smooth scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // All section refs in an object for easier access in navbar
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef
  };

  return (
    <div className="relative">
      <Navbar sectionRefs={sectionRefs} />
      <main>
        <section id="home" ref={homeRef} className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>
        <section id="about" ref={aboutRef} className="min-h-screen py-20 bg-black">
          <AboutSection />
        </section>
        <section id="skills" ref={skillsRef} className="min-h-screen bg-black py-20">
          <SkillsSection />
        </section>
        <section id="projects" ref={projectsRef} className="min-h-screen py-20 bg-black">
          <ProjectsSection />
        </section>
        <section id="contact" ref={contactRef} className="min-h-screen ">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;