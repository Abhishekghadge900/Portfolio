import { useState, useEffect } from 'react';

function Navbar({ sectionRefs }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling when clicking nav items
  const scrollToSection = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Detect which section is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better UX
      
      // Check each section to see if it's in view
      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-sans text-[#222]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo or Title */}
          <span className="text-2xl font-bold text-[#0078D4] tracking-tight select-none"><a>{"<Abhishek/>"}</a></span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-base font-medium transition-colors duration-200 hover:cursor-pointer ${
                activeSection === 'home'
                  ? 'text-[#0078D4]'
                  : 'text-[#333] hover:text-[#0078D4]'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-base font-medium transition-colors duration-200 hover:cursor-pointer ${
                activeSection === 'about'
                  ? 'text-[#0078D4]'
                  : 'text-[#333] hover:text-[#0078D4]'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`text-base font-medium transition-colors duration-200 hover:cursor-pointer ${
                activeSection === 'skills'
                  ? 'text-[#0078D4]'
                  : 'text-[#333] hover:text-[#0078D4]'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`text-base font-medium transition-colors duration-200 hover:cursor-pointer ${
                activeSection === 'projects'
                  ? 'text-[#0078D4]'
                  : 'text-[#333] hover:text-[#0078D4]'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`text-base font-medium transition-colors duration-200 hover:cursor-pointer ${
                activeSection === 'contact'
                  ? 'text-[#0078D4]'
                  : 'text-[#333] hover:text-[#0078D4]'
              }`}
            >
              Contact
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-[#0078D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white font-sans text-[#222]">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-base font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'home'
                    ? 'text-[#0078D4]'
                    : 'text-[#333] hover:text-[#0078D4]'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-base font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'about'
                    ? 'text-[#0078D4]'
                    : 'text-[#333] hover:text-[#0078D4]'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`text-base font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'skills'
                    ? 'text-[#0078D4]'
                    : 'text-[#333] hover:text-[#0078D4]'
                }`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`text-base font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'projects'
                    ? 'text-[#0078D4]'
                    : 'text-[#333] hover:text-[#0078D4]'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-base font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'contact'
                    ? 'text-[#0078D4]'
                    : 'text-[#333] hover:text-[#0078D4]'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;