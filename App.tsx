
import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, Bio } from './constants';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ResumeDock from './components/ResumeDock';
import Education from './components/Education';
import Volunteer from './components/Volunteer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
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

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-[#faf9f6]">
      {/* Navigation - Fixed at the very top */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 md:px-12 py-5 flex justify-between items-center ${scrolled ? 'glass py-3 border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
        <div className="text-xl font-bold tracking-[0.2em] serif uppercase">{Bio.name.split(' ')[0]}</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="group relative text-[10px] uppercase tracking-[0.3em] hover:text-gray-400 transition-colors font-semibold"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleAnchorClick(e, '#contact')}
            className="text-[10px] uppercase tracking-widest font-bold border border-black px-5 py-2 hover:bg-black hover:text-white transition-all ml-4"
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
            <span className={`w-full h-[1px] bg-black transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[2px]' : ''}`}></span>
            <span className={`w-full h-[1px] bg-black transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] glass transition-all duration-700 md:hidden flex flex-col justify-center items-center space-y-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleAnchorClick(e, link.href)}
            className="text-2xl serif italic hover:text-gray-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          onClick={(e) => handleAnchorClick(e, '#contact')}
          className="px-10 py-4 bg-black text-white text-[10px] uppercase tracking-widest"
        >
          Connect Now
        </a>
      </div>

      {/* Hero Section */}
      <Hero onNavigate={handleAnchorClick} />

      {/* Main Content Flow */}
      <main ref={mainRef} className="max-w-7xl mx-auto px-6 md:px-12 space-y-48 py-32">
        <section id="about" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Professional Profile</span>
              <h2 className="text-5xl md:text-6xl serif leading-[1.1]">Architecting <span className="italic">Quality</span> through Adaptability.</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light italic">
                "As a highly adaptable and results-driven professional, I bring a robust blend of expertise in Full-stack Development, Cloud DevOps Engineering, Software Testing, Cyber Security Enthusiast and AI/ML Engineering. My core focus is on architecting, building, and securing high-quality, scalable applications and secure infrastructure that drive innovation and deliver tangible business value."
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-black text-white text-[10px] uppercase tracking-[0.2em] hover:bg-gray-800 transition-all text-center font-bold"
                >
                  Download CV
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="px-10 py-4 border border-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all text-center font-bold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden group rounded-sm shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" 
                alt="Technology Space" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 <span className="text-white text-[10px] uppercase tracking-[0.5em] border border-white px-6 py-3">DevOps & Full Stack</span>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-32">
          <ProjectGrid onNavigate={handleAnchorClick} />
        </section>

        <section id="experience" className="scroll-mt-32">
          <Experience />
        </section>

        <section id="skills" className="scroll-mt-32">
          <Skills />
        </section>

        <section id="education" className="scroll-mt-32">
          <Education />
        </section>

        <section id="volunteer" className="scroll-mt-32">
          <Volunteer />
        </section>

        <section id="philosophy" className="scroll-mt-32">
          <Philosophy />
        </section>

        <section id="contact" className="scroll-mt-32">
          <Contact />
        </section>
      </main>

      <Footer onNavigate={handleAnchorClick} />
      <ResumeDock />
    </div>
  );
};

export default App;
