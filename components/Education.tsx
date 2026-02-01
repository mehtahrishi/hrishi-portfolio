
import React from 'react';
import { education } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 bg-white/30 rounded-3xl p-8 backdrop-blur-sm border border-white/50">
      <div className="space-y-6">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Academic</span>
        <h2 className="text-4xl serif italic leading-tight">Foundation of <br/>Engineering Excellence</h2>
        <p className="text-gray-400 text-sm font-light max-w-xs leading-relaxed">
          Broadening horizons through structured learning and technical rigor.
        </p>
      </div>
      <div className="space-y-12">
        {education.map((edu) => (
          <div key={edu.id} className="flex space-x-6 group">
            <div className="flex-shrink-0 w-16 h-16 glass rounded-xl border border-gray-100 flex items-center justify-center p-2 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src={edu.img} alt={edu.school} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-[10px] text-gray-400 uppercase tracking-widest">{edu.date}</div>
                <div className="text-[10px] font-bold text-black border border-black px-2 py-0.5 rounded">Grade {edu.grade}</div>
              </div>
              <h4 className="text-xl serif">{edu.school}</h4>
              <p className="text-sm text-gray-500 font-light">{edu.degree}</p>
              <p className="text-xs text-gray-400 italic font-light">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
