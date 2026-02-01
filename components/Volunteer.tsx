
import React from 'react';
import { volunteer } from '../constants';

const Volunteer: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Social Impact</span>
        <div className="h-[1px] flex-grow bg-gray-100"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {volunteer.map((item, idx) => (
          <div key={idx} className="group p-8 border border-gray-100 bg-[#fdfdfd] hover:bg-white transition-all duration-500 flex flex-col justify-between aspect-video relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <img src={item.img} alt="" className="w-24 h-24 object-contain" />
            </div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 glass border border-gray-100 rounded p-1.5 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <img src={item.img} alt={item.organization} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-gray-300">{item.date}</span>
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{item.organization}</h4>
              <h3 className="text-2xl serif mb-4">{item.role}</h3>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
