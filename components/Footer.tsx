
import React from 'react';
import { Bio } from '../constants';

interface FooterProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, darkMode }) => {
  return (
    <footer id="contact" className={`px-6 md:px-12 py-32 border-t transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-[#faf9f6] border-gray-100'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-6">
            <div className={`text-3xl font-bold tracking-tighter serif uppercase ${darkMode ? 'text-white' : 'text-black'}`}>{Bio.name.split(' ')[0]}</div>
            <p className={`text-sm font-light max-w-xs leading-relaxed ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Engineering high-availability solutions with precision. Delivering innovation across the stack.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className={`text-[10px] uppercase tracking-[0.3em] font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Navigation</h5>
            <ul className={`space-y-3 text-xs uppercase tracking-widest ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              <li><a href="#work" onClick={(e) => onNavigate(e, '#work')} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>Work</a></li>
              <li><a href="#about" onClick={(e) => onNavigate(e, '#about')} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>About</a></li>
              <li><a href="#experience" onClick={(e) => onNavigate(e, '#experience')} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>Experience</a></li>
              <li><a href="#contact" onClick={(e) => onNavigate(e, '#contact')} className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className={`text-[10px] uppercase tracking-[0.3em] font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Inquiries</h5>
            <div className={`text-xs tracking-widest leading-loose flex flex-col space-y-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              <a href={Bio.Mail} className={`hover:underline transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>
                {Bio.Mail.replace('mailto:', '')}
              </a>
              <a href="tel:9892090398" className={`hover:underline transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>
                +91 98920 90398
              </a>
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-between items-center border-t pt-12 text-[10px] uppercase tracking-[0.3em] font-medium ${darkMode ? 'border-gray-800 text-gray-600' : 'border-gray-100 text-gray-300'}`}>
          <div>© 2026 {Bio.name}. Built with focus.</div>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-8">
            <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>LinkedIn</a>
            <a href={Bio.github} target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>GitHub</a>
            <a href={Bio.medium} target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>Medium</a>
            <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
