import React, { useState } from 'react';
import { Bio } from '../constants';

interface ResumeDockProps {
  darkMode?: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeResume: 'sd' | 'aiml' | null;
  setActiveResume: (type: 'sd' | 'aiml' | null) => void;
}

const ResumeDock: React.FC<ResumeDockProps> = ({ darkMode, isOpen, setIsOpen, activeResume, setActiveResume }) => {

  const openResume = (type: 'sd' | 'aiml') => {
    setActiveResume(type);
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setTimeout(() => setActiveResume(null), 300);
  };

  return (
    <>
      {/* Side Label */}
      <div className="hidden lg:block fixed left-12 top-[70%] -translate-y-1/2 rotate-[-90deg] origin-left text-[9px] uppercase tracking-[0.6em] text-gray-400 font-medium pointer-events-none z-[60]">
        Precision & Automation
      </div>

      {/* Tactical Dock - Improved UI */}
      <div className={`flex fixed z-[60] backdrop-blur-sm border rounded-full p-3 shadow-lg transition-colors duration-300
        bottom-6 left-1/2 -translate-x-1/2 flex-row gap-4
        lg:bottom-auto lg:left-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col lg:gap-3
        ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'}`}>
        {/* Mobile: Show icons instead of dots */}
        <button
          onClick={() => openResume('sd')}
          className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all lg:hidden ${darkMode ? 'hover:bg-white text-white' : 'hover:bg-black text-black'}`}
          title="SD Resume"
        >
          {/* Code Icon */}
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
        </button>
        {/* Desktop: Show dot and label */}
        <button
          onClick={() => openResume('sd')}
          className={`group relative items-center justify-center w-10 h-10 rounded-full transition-all hidden lg:flex ${darkMode ? 'hover:bg-white' : 'hover:bg-black'}`}
          title="SD Resume"
        >
          <div className={`w-3 h-3 rounded-full transition-all ${darkMode ? 'bg-gray-500 group-hover:bg-black' : 'bg-gray-400 group-hover:bg-white'}`}></div>
          <span className={`absolute opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-3 py-1 rounded shadow-md text-[9px] uppercase tracking-[0.2em] font-medium 
            -top-10 left-1/2 -translate-x-1/2
            lg:top-1/2 lg:-translate-y-1/2 lg:right-14 lg:left-auto lg:translate-x-0
            ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>SD</span>
        </button>
        <div className={`transition-all ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-[1px] h-6 lg:w-full lg:h-[1px]`}></div>
        {/* Mobile: Show brain icon for AI/ML */}
        <button
          onClick={() => openResume('aiml')}
          className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all lg:hidden ${darkMode ? 'hover:bg-white text-white' : 'hover:bg-black text-black'}`}
          title="AI/ML Resume"
        >
          {/* Brain Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></svg>
        </button>
        {/* Desktop: Show dot and label */}
        <button
          onClick={() => openResume('aiml')}
          className={`group relative items-center justify-center w-10 h-10 rounded-full transition-all hidden lg:flex ${darkMode ? 'hover:bg-white' : 'hover:bg-black'}`}
          title="AI/ML Resume"
        >
          <div className={`w-3 h-3 rounded-full transition-all ${darkMode ? 'bg-gray-500 group-hover:bg-black' : 'bg-gray-400 group-hover:bg-white'}`}></div>
          <span className={`absolute opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-3 py-1 rounded shadow-md text-[9px] uppercase tracking-[0.2em] font-medium 
            -top-10 left-1/2 -translate-x-1/2
            lg:top-1/2 lg:-translate-y-1/2 lg:right-14 lg:left-auto lg:translate-x-0
            ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>AI/ML</span>
        </button>
      </div>

      {/* Resume Sidebar */}
      <div className={`fixed shadow-2xl z-[100] transform transition-all duration-500 
        bottom-0 left-0 w-full h-[85vh] rounded-t-2xl
        md:inset-y-0 md:left-auto md:right-0 md:w-[600px] md:h-full md:rounded-none
        ${isOpen
          ? 'translate-y-0 md:translate-x-0'
          : 'translate-y-full md:translate-y-0 md:translate-x-full'
        } 
        ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
             <h3 className={`text-2xl serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
              {activeResume === 'sd' ? 'Software Development Resume' : 'AI/ML Engineering Resume'}
            </h3>
            <button
              onClick={closeSidebar}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-black'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Resume Content */}
          <div className="flex-1 overflow-auto p-6">
            <iframe
              src={activeResume === 'sd' ? Bio.resumeSD : Bio.resumeAIML}
              className="w-full h-full border-0"
              title={`${activeResume === 'sd' ? 'SD' : 'AI/ML'} Resume`}
            />
          </div>

          {/* Footer */}
          <div className={`p-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <a
              href={activeResume === 'sd' ? Bio.resumeSD : Bio.resumeAIML}
              download
              className={`w-full block text-center px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition-all font-bold ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[99] transition-opacity"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default ResumeDock;
