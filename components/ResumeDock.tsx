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
      <div className="hidden lg:block fixed left-12 top-[60%] -translate-y-1/2 rotate-[-90deg] origin-left text-[9px] uppercase tracking-[0.6em] text-gray-400 font-medium pointer-events-none z-[60]">
        Precision & Automation
      </div>

      {/* Tactical Dock - Improved UI */}
      <div className={`flex fixed z-[60] backdrop-blur-sm border rounded-full p-3 shadow-lg transition-colors duration-300
        bottom-6 left-1/2 -translate-x-1/2 flex-row gap-4
        lg:bottom-auto lg:left-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col lg:gap-3
        ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'}`}>
        <button
          onClick={() => openResume('sd')}
          className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all ${darkMode ? 'hover:bg-white' : 'hover:bg-black'}`}
          title="SD Resume"
        >
          <div className={`w-3 h-3 rounded-full transition-all ${darkMode ? 'bg-gray-500 group-hover:bg-black' : 'bg-gray-400 group-hover:bg-white'}`}></div>
          <span className={`absolute opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-3 py-1 rounded shadow-md text-[9px] uppercase tracking-[0.2em] font-medium 
            -top-10 left-1/2 -translate-x-1/2
            lg:top-1/2 lg:-translate-y-1/2 lg:right-14 lg:left-auto lg:translate-x-0
            ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>SD</span>
        </button>
        <div className={`transition-all ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-[1px] h-6 lg:w-full lg:h-[1px]`}></div>
        <button
          onClick={() => openResume('aiml')}
          className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all ${darkMode ? 'hover:bg-white' : 'hover:bg-black'}`}
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
            <h3 className={`text-xl font-bold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-black'}`}>
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
