
import React from 'react';
import { projects, Bio } from '../constants';

interface ProjectGridProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Portfolio</span>
          <h2 className="text-4xl md:text-6xl serif">Selected Works</h2>
        </div>
        <div className="mt-4 md:mt-0 text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">
          Innovation & Deployment
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`group ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
          >
            <div className="overflow-hidden relative aspect-[16/9] bg-[#f2f1ef] mb-8 border border-gray-100 rounded-sm">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <div className="flex space-x-4">
                   <a 
                    href={project.webapp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-2 bg-white text-black text-[9px] uppercase tracking-widest font-bold shadow-xl hover:bg-black hover:text-white transition-all"
                   >
                     Live Demo
                   </a>
                   <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-2 border border-white text-white text-[9px] uppercase tracking-widest font-bold backdrop-blur-md hover:bg-white hover:text-black transition-all"
                   >
                     Source
                   </a>
                 </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-3xl serif leading-none">{project.title}</h3>
                  <div className="flex items-center space-x-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{project.category}</p>
                    <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-medium">{project.date}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 font-light text-sm leading-relaxed max-w-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-[0.2em] text-gray-300 font-medium border-b border-gray-100 hover:text-gray-400 transition-colors">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-24 text-center">
        {/* Fix: Bio was missing from imports. Added Bio to the import statement above and used Bio.github here. */}
        <a 
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-[10px] uppercase tracking-[0.4em] font-bold inline-flex items-center space-x-6 hover:text-gray-400 transition-colors"
        >
          <span>View All Repository</span>
          <span className="w-12 h-[1px] bg-black group-hover:w-16 transition-all"></span>
        </a>
      </div>
    </div>
  );
};

export default ProjectGrid;
