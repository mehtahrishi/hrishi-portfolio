
import React from 'react';
import { volunteer } from '../constants';

interface VolunteerProps {
  darkMode?: boolean;
}

const Volunteer: React.FC<VolunteerProps> = ({ darkMode }) => {
  return (
    <div className="space-y-16">
      <div className="flex items-center space-x-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Social Impact</span>
        <div className="h-[1px] flex-grow bg-gray-100"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteer.map((item, idx) => (
          <div key={idx} className={`group relative border hover:shadow-lg transition-all duration-500 overflow-hidden ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className="p-8 space-y-6 relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 flex items-center justify-center p-2.5 grayscale group-hover:grayscale-0 transition-all duration-700 flex-shrink-0">
                  <img src={item.img} alt={item.organization} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-[8px] uppercase tracking-widest text-gray-300 text-right">{item.date}</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-semibold">{item.organization}</h4>
                <h3 className={`text-xl serif leading-tight transition-colors ${darkMode ? 'text-white group-hover:text-gray-300' : 'text-black group-hover:text-gray-600'}`}>{item.role}</h3>
              </div>

              <p className={`text-sm leading-relaxed transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.map((skill) => (
                  <span key={skill} className={`text-[8px] uppercase tracking-wider px-2 py-1 border transition-colors ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-400' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
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

export default Volunteer;
