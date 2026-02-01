
import React from 'react';
import { experiences } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex items-center space-x-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Chronicle</span>
        <div className="h-[1px] flex-grow bg-gray-100"></div>
      </div>
      
      <div className="space-y-20">
        {experiences.map((exp) => (
          <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 group">
            <div className="md:col-span-3 space-y-4">
              <div className="text-xs uppercase tracking-widest text-gray-400 pt-1">{exp.date}</div>
              <div className="w-12 h-12 glass rounded-lg flex items-center justify-center p-2 border border-gray-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={exp.img} alt={exp.company} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-2xl serif group-hover:italic transition-all duration-300">
                  {exp.company}
                </h3>
                <span className="text-sm font-medium text-gray-500">{exp.role}</span>
              </div>
              <p className="text-gray-500 font-light leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="text-[8px] uppercase tracking-[0.2em] px-3 py-1 bg-gray-50 text-gray-400 rounded-full border border-gray-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
