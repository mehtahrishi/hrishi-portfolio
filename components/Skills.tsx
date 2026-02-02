
import React from 'react';
import { skills } from '../constants';

interface SkillsProps {
  darkMode?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <div className="space-y-16">
      <div className="flex items-center space-x-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Technical Expertise</span>
        <div className={`h-[1px] flex-grow scroll-line transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-black'}`}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {skills.map((cat, idx) => (
          <div key={idx} className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">{cat.title}</h4>
            <div className="grid grid-cols-3 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="group flex flex-col items-center space-y-2 p-4 transition-all duration-500"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                  <span className={`text-[9px] uppercase tracking-widest text-gray-400 group-hover:${darkMode ? 'text-orange-200' : 'text-orange-900'} transition-colors text-center font-medium`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
