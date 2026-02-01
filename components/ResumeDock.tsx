import React, { useState } from 'react';
import { Bio } from '../constants';

const ResumeDock: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState<'sd' | 'aiml' | null>(null);

  const openResume = (type: 'sd' | 'aiml') => {
    setSelectedResume(type);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setTimeout(() => setSelectedResume(null), 300);
  };

  return (
    <>
      {/* Side Label */}
      <div className="hidden lg:block fixed left-12 top-[60%] -translate-y-1/2 rotate-[-90deg] origin-left text-[9px] uppercase tracking-[0.6em] text-gray-400 font-medium pointer-events-none z-[60]">
        Precision & Automation
      </div>

      {/* Tactical Dock - Improved UI */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg z-[60]">
        <button 
          onClick={() => openResume('sd')}
          className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-black transition-all"
          title="SD Resume"
        >
          <div className="w-3 h-3 rounded-full bg-gray-400 group-hover:bg-white transition-all"></div>
          <span className="absolute right-14 text-[9px] uppercase tracking-[0.2em] text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white px-3 py-1 rounded shadow-md">SD</span>
        </button>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <button 
          onClick={() => openResume('aiml')}
          className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-black transition-all"
          title="AI/ML Resume"
        >
          <div className="w-3 h-3 rounded-full bg-gray-400 group-hover:bg-white transition-all"></div>
          <span className="absolute right-14 text-[9px] uppercase tracking-[0.2em] text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white px-3 py-1 rounded shadow-md">AI/ML</span>
        </button>
      </div>

      {/* Resume Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[600px] bg-white shadow-2xl z-[100] transform transition-transform duration-500 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold uppercase tracking-wider">
              {selectedResume === 'sd' ? 'Software Development Resume' : 'AI/ML Engineering Resume'}
            </h3>
            <button 
              onClick={closeSidebar}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Resume Content */}
          <div className="flex-1 overflow-auto p-6">
            <iframe 
              src={selectedResume === 'sd' ? Bio.resumeSD : Bio.resumeAIML}
              className="w-full h-full border-0"
              title={`${selectedResume === 'sd' ? 'SD' : 'AI/ML'} Resume`}
            />
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <a 
              href={selectedResume === 'sd' ? Bio.resumeSD : Bio.resumeAIML}
              download
              className="w-full block text-center px-6 py-3 bg-black text-white text-[10px] uppercase tracking-[0.2em] hover:bg-gray-800 transition-all font-bold"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[99] transition-opacity"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default ResumeDock;
