
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
    <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden visible pt-20 md:pt-32">

      <div
        className="text-center z-10 transition-all duration-1000 ease-out px-4 flex flex-col items-center"
        style={{ opacity, transform: `translateY(${opacity === 1 ? '0' : '20px'})` }}
      >
        <div className="h-6 mb-6"> {/* Fixed height container to prevent layout shifts */}
          <span className={`text-[10px] uppercase tracking-[0.6em] block font-semibold transition-all duration-500 ${roleFade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'} ${darkMode ? 'text-orange-200' : 'text-orange-900'}`}>
            {Bio.roles[roleIndex]}
          </span>
        </div>

        <h1 className={`relative text-5xl md:text-8xl lg:text-[10rem] serif leading-none mb-8 tracking-tighter transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
          Hrishi <span className="relative inline-block">
            <span className="italic font-light">Mehta</span>
            <span className="absolute -top-2 -right-8 md:-right-16 md:-top-4 text-3xl md:text-6xl animate-wave origin-[70%_70%]">👋</span>
          </span>
          <style>{`
            @keyframes wave {
              0% { transform: rotate(0.0deg) }
              10% { transform: rotate(14.0deg) }
              20% { transform: rotate(-8.0deg) }
              30% { transform: rotate(14.0deg) }
              40% { transform: rotate(-4.0deg) }
              50% { transform: rotate(10.0deg) }
              60% { transform: rotate(0.0deg) }
              100% { transform: rotate(0.0deg) }
            }
            .animate-wave {
              animation: wave 2s infinite;
            }
          `}</style>
        </h1>

        <p className={`max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
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
