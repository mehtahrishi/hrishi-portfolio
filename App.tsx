
import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, Bio } from './constants';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';

import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ResumeDock from './components/ResumeDock';
import Education from './components/Education';
import Volunteer from './components/Volunteer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [resumeSidebarOpen, setResumeSidebarOpen] = useState(false);
  const [activeResume, setActiveResume] = useState<'sd' | 'aiml' | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      threshold: 0,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  const aboutText = `"As a highly adaptable and results-driven professional, I bring a robust blend of expertise in Full-stack Development, Cloud DevOps Engineering and AI/ML Engineering. My core focus is on architecting, building, and securing high-quality, scalable applications and secure infrastructure that drive innovation and deliver tangible business value."`;

  return (
    <div className={`min-h-screen selection:bg-black selection:text-white transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#faf9f6] text-black'}`}>
      {/* Navigation - Fixed at the very top */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 md:px-12 py-5 flex justify-between items-center ${scrolled
        ? darkMode
          ? 'bg-gray-900/80 backend-blur-md border-b border-gray-800 shadow-sm'
          : 'glass py-3 border-b border-gray-100 shadow-sm'
        : 'bg-transparent'
        }`}>
        <div className="text-xl font-bold tracking-[0.2em] serif uppercase">{Bio.name.split(' ')[0]}</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className={`group relative text-[10px] uppercase tracking-[0.3em] transition-colors font-semibold ${darkMode ? 'hover:text-orange-100' : 'hover:text-orange-900'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${darkMode ? 'bg-orange-200' : 'bg-orange-900'}`}></span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, '#contact')}
            className={`text-[10px] uppercase tracking-widest font-bold border px-5 py-2 transition-all ml-4 ${darkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}
          >
            Connect
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-[10px] uppercase tracking-widest font-bold flex items-center space-x-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          <div className="w-4 h-4 flex flex-col justify-center space-y-1">
            <span className={`w-full h-[1px] transition-transform ${darkMode ? 'bg-white' : 'bg-black'} ${mobileMenuOpen ? 'rotate-45 translate-y-[2px]' : ''}`}></span>
            <span className={`w-full h-[1px] transition-transform ${darkMode ? 'bg-white' : 'bg-black'} ${mobileMenuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Dark Mode Toggle - Hanging Bulb */}
      <div className="fixed top-0 right-12 z-[70] flex flex-col items-center">
        {/* Wire */}
        <div className={`w-[1px] h-24 transition-colors duration-300 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

        {/* Bulb */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative group w-8 h-12 -mt-1 transition-all duration-300 focus:outline-none`}
          title={darkMode ? 'Turn Lights On' : 'Turn Lights Off'}
        >
          {/* Bulb Body */}
          <div className={`absolute inset-0 rounded-full blur-md transition-all duration-300 ${darkMode ? 'bg-gray-800 opacity-0' : 'bg-yellow-400 opacity-60'}`}></div>
          <svg
            className={`w-full h-full drop-shadow-lg transition-all duration-300 rotate-180 ${darkMode ? 'text-gray-600 hover:text-gray-400' : 'text-yellow-500 hover:text-yellow-600'}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] transition-all duration-700 md:hidden flex flex-col justify-center items-center space-y-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${darkMode ? 'bg-gray-900/95 backdrop-blur-xl' : 'glass'}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleAnchorClick(e, link.href)}
            className={`text-2xl serif italic transition-colors ${darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-500'}`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleAnchorClick(e, '#contact')}
          className={`px-10 py-4 text-[10px] uppercase tracking-widest transition-colors ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          Connect Now
        </a>
      </div>

      {/* Hero Section */}
      <Hero onNavigate={handleAnchorClick} darkMode={darkMode} />

      {/* Main Content Flow */}
      <main ref={mainRef} className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 py-32">
        <section id="about" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Professional Profile</span>
              <h2 className="text-5xl md:text-6xl serif leading-[1.1]">Architecting <span className="italic">Quality</span> through Adaptability.</h2>
              <p className={`text-xl leading-relaxed font-light italic ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                "As a highly adaptable and results-driven professional, I bring a robust blend of expertise in <span className={`${darkMode ? 'text-orange-200' : 'text-orange-800'} font-normal`}>Full-stack Development</span>, <span className={`${darkMode ? 'text-orange-200' : 'text-orange-800'} font-normal`}>Cloud DevOps Engineering</span> and <span className={`${darkMode ? 'text-orange-200' : 'text-orange-800'} font-normal`}>AI/ML Engineering</span>. My core focus is on architecting, building, and securing <span className="animate-inline-underline">high-quality, scalable applications</span> and <span className="animate-inline-underline">secure infrastructure</span> that drive innovation and deliver tangible business value."
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => {
                    setActiveResume('sd');
                    setResumeSidebarOpen(true);
                  }}
                  className="px-10 py-4 bg-black text-white text-[10px] uppercase tracking-[0.2em] hover:bg-gray-800 transition-all text-center font-bold"
                >
                  Check Resume
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="px-10 py-4 border border-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all text-center font-bold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden group rounded-sm shadow-sm border border-gray-100">
              <img
                src="/profile.jpg"
                alt="Hrishi Mehta"
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="text-white text-[10px] uppercase tracking-[0.5em] border border-white px-6 py-3">DevOps & Full Stack</span>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-32">
          <ProjectGrid onNavigate={handleAnchorClick} darkMode={darkMode} />
        </section>

        <section id="experience" className="scroll-mt-32">
          <Experience darkMode={darkMode} />
        </section>

        <section id="skills" className="scroll-mt-32">
          <Skills darkMode={darkMode} />
        </section>

        <section id="education" className="scroll-mt-32">
          <Education darkMode={darkMode} />
        </section>

        <section id="volunteer" className="scroll-mt-32">
          <Volunteer darkMode={darkMode} />
        </section>




      </main>

      <Footer onNavigate={handleAnchorClick} darkMode={darkMode} />
      <ResumeDock
        darkMode={darkMode}
        isOpen={resumeSidebarOpen}
        setIsOpen={setResumeSidebarOpen}
        activeResume={activeResume}
        setActiveResume={setActiveResume}
      />
    </div>
  );
};

export default App;
