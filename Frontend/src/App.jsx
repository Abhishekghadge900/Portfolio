import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NAV_ITEMS } from './navItems';

function App() {
  // scroll-mt-16 keeps section headings from sliding under the fixed navbar.
  return (
    <div className="relative bg-black text-white">
      <Navbar items={NAV_ITEMS} />
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>
        <section id="about" className="scroll-mt-16 py-20">
          <AboutSection />
        </section>
        <section id="skills" className="scroll-mt-16 py-20">
          <SkillsSection />
        </section>
        <section id="projects" className="scroll-mt-16 py-20">
          <ProjectsSection />
        </section>
        <section id="contact" className="scroll-mt-16">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
