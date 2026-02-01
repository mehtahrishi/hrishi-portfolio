
import React, { useEffect, useState } from 'react';
import { Bio } from '../constants';

interface HeroProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, darkMode }) => {
  const [opacity, setOpacity] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleFade, setRoleFade] = useState(true);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 200);

    const interval = setInterval(() => {
      setRoleFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % Bio.roles.length);
        setRoleFade(true);
      }, 500); // Wait for fade out before changing text
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`h-screen flex flex-col justify-center items-center relative overflow-hidden visible pt-20 md:pt-32 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-[#faf9f6]'}`}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-1/4 -left-1/4 w-[40rem] h-[40rem] rounded-full blur-[160px] animate-pulse transition-colors duration-1000 ${darkMode ? 'bg-blue-900/10' : 'bg-blue-50/20'}`}></div>
        <div className={`absolute bottom-1/4 -right-1/4 w-[40rem] h-[40rem] rounded-full blur-[160px] animate-pulse [animation-delay:2s] transition-colors duration-1000 ${darkMode ? 'bg-purple-900/10' : 'bg-orange-50/20'}`}></div>
      </div>

      <div
        className="text-center z-10 transition-all duration-1000 ease-out px-4 flex flex-col items-center"
        style={{ opacity, transform: `translateY(${opacity === 1 ? '0' : '20px'})` }}
      >
        <div className="h-6 mb-6"> {/* Fixed height container to prevent layout shifts */}
          <span className={`text-[10px] uppercase tracking-[0.6em] block font-semibold transition-all duration-500 ${roleFade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'} ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>
            {Bio.roles[roleIndex]}
          </span>
        </div>

        <h1 className={`text-7xl md:text-[11rem] serif leading-[0.9] mb-8 tracking-tighter transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
          Hrishi<br />
          <span className="italic font-light">Mehta</span>
        </h1>

        <p className={`max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Architecting scalable applications and secure infrastructure <br className="hidden md:block" />
          with a focus on <span className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>minimalism and performance</span>.
        </p>

        <div className="relative group">
          <a
            href="#work"
            onClick={(e) => onNavigate(e, '#work')}
            className={`flex items-center space-x-6 text-[11px] uppercase tracking-[0.5em] font-bold py-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
          >
            <span>Explore Projects</span>
            <div className={`w-12 h-[1px] group-hover:w-20 transition-all duration-700 ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
