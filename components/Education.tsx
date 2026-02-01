
import React from 'react';
import { education } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex items-center space-x-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Academic</span>
        <div className="h-[1px] flex-grow bg-gray-100"></div>
      </div>
      
      <div className="space-y-20">
        {education.map((edu) => (
          <div key={edu.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 group">
            <div className="md:col-span-3 space-y-4">
              <div className="text-xs uppercase tracking-widest text-gray-400 pt-1">{edu.date}</div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 glass rounded-lg flex items-center justify-center p-2 border border-gray-100 grayscale group-hover:grayscale-0 transition-all duration-700 flex-shrink-0">
                  <img src={edu.img} alt={edu.school} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-sm font-medium text-gray-600">{edu.school}</span>
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-2xl serif transition-all duration-300">
                  {edu.degree}
                </h3>
                <div className="text-[10px] font-bold text-black border border-black px-2 py-0.5 rounded mt-2 md:mt-0 w-fit">Grade {edu.grade}</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl whitespace-pre-line">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
