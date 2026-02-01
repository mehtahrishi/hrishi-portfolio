
import React from 'react';
import { Bio } from '../constants';

interface FooterProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="px-6 md:px-12 py-32 bg-[#faf9f6] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-6">
            <div className="text-3xl font-bold tracking-tighter serif uppercase">{Bio.name.split(' ')[0]}</div>
            <p className="text-gray-400 text-sm font-light max-w-xs leading-relaxed">
              Engineering high-availability solutions with precision. Delivering innovation across the stack.
            </p>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold">Navigation</h5>
            <ul className="space-y-3 text-xs uppercase tracking-widest text-gray-500">
              <li><a href="#work" onClick={(e) => onNavigate(e, '#work')} className="hover:text-black transition-colors">Work</a></li>
              <li><a href="#about" onClick={(e) => onNavigate(e, '#about')} className="hover:text-black transition-colors">About</a></li>
              <li><a href="#experience" onClick={(e) => onNavigate(e, '#experience')} className="hover:text-black transition-colors">Experience</a></li>
              <li><a href="#contact" onClick={(e) => onNavigate(e, '#contact')} className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold">Inquiries</h5>
            <p className="text-xs text-gray-500 tracking-widest leading-loose">
              {Bio.Mail.replace('mailto:', '')}<br/>
              Mumbai, India
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-12 text-[10px] uppercase tracking-[0.3em] text-gray-300 font-medium">
          <div>© 2024 {Bio.name}. Built with focus.</div>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-8">
            <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
            <a href={Bio.medium} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Medium</a>
            <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
