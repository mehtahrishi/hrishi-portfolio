
import React, { useRef, useState } from 'react';
import { projects, Bio } from '../constants';

interface ProjectGridProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  darkMode?: boolean;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onNavigate, darkMode }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<'all' | 'web' | 'aiml'>('all');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600; // Approx card width
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'web') return project.category === 'web app';
    if (filter === 'aiml') return project.category === 'machine learning';
    return true;
  });

  return (
    <div className="space-y-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Title Area */}
        <div className="flex items-center space-x-4 flex-grow mr-0 md:mr-8 w-full">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 whitespace-nowrap">Selected Works</span>

          {/* Filters */}
          <div className="flex items-center gap-3 ml-4">
            <button
              onClick={() => setFilter('all')}
              className={`text-[9px] uppercase tracking-widest transition-colors ${filter === 'all' ? (darkMode ? 'text-orange-200 font-bold' : 'text-orange-900 font-bold') : 'text-gray-500 hover:text-gray-400'}`}
            >
              All
            </button>
            <span className="text-gray-600 text-[9px]">\</span>
            <button
              onClick={() => setFilter('web')}
              className={`text-[9px] uppercase tracking-widest transition-colors ${filter === 'web' ? (darkMode ? 'text-orange-200 font-bold' : 'text-orange-900 font-bold') : 'text-gray-500 hover:text-gray-400'}`}
            >
              Web
            </button>
            <span className="text-gray-600 text-[9px]">\</span>
            <button
              onClick={() => setFilter('aiml')}
              className={`text-[9px] uppercase tracking-widest transition-colors ${filter === 'aiml' ? (darkMode ? 'text-orange-200 font-bold' : 'text-orange-900 font-bold') : 'text-gray-500 hover:text-gray-400'}`}
            >
              AI/ML
            </button>
          </div>

          <div className={`h-[1px] flex-grow scroll-line transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-black'}`}></div>

          {/* Mobile Swipe Hint - Inline after line */}
          <span className={`md:hidden text-[9px] uppercase tracking-widest animate-pulse whitespace-nowrap ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Swipe &gt;&gt;
          </span>
        </div>

        {/* Navigation Buttons for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scroll('left')}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${darkMode ? 'border-gray-800 hover:bg-white hover:text-black text-gray-400' : 'border-gray-200 hover:bg-black hover:text-white text-gray-400'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${darkMode ? 'border-gray-800 hover:bg-white hover:text-black text-gray-400' : 'border-gray-200 hover:bg-black hover:text-white text-gray-400'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex-none w-[90vw] md:w-[600px] snap-center group"
          >
            {/* Card Content */}
            <div className="flex flex-col space-y-8">
              {/* Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm transition-all duration-500 bg-transparent">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />

                {/* Overlay on Image Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.158-1.11-1.158-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 pr-8">
                <div className="flex justify-between items-baseline border-b pb-4 transition-colors duration-300 border-gray-100 dark:border-gray-800">
                  <div className="flex items-center space-x-3">
                    <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {project.category}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono opacity-50 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {project.date}
                  </span>
                </div>

                <h3 className={`text-3xl serif leading-tight transition-colors duration-300 ${darkMode ? 'text-orange-200' : 'text-orange-900'}`}>
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 4).map(tag => (
                    <span
                      key={tag}
                      className={`text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-sm border transition-colors duration-300 ${darkMode ? 'border-gray-800 text-orange-200' : 'border-gray-200 text-orange-900'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ProjectGrid;
