import { useState, useEffect, useRef } from 'react';

function Navbar({ items }) {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? '');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Highlight the section currently occupying the middle of the viewport.
  // IntersectionObserver avoids running state updates on every scroll event.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  // Close the mobile menu on Escape or when clicking outside the nav.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [mobileMenuOpen]);

  const linkClass = (id, extra = '') =>
    `text-base font-medium transition-colors duration-200 cursor-pointer ${extra} ${
      activeSection === id ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
    }`;

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-neutral-800 font-sans"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            onClick={() => scrollToSection(items[0]?.id)}
            className="text-2xl font-bold text-blue-400 tracking-tight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            aria-label="Back to top"
          >
            {'<Abhishek/>'}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={linkClass(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={linkClass(item.id, 'py-2 text-left')}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
