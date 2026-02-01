
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="py-24 border-y border-gray-100">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Our Core Pillars</span>
        <h2 className="text-5xl md:text-7xl serif tracking-tight">The Art of Less</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-20">
          <div className="space-y-4">
            <h4 className="text-lg font-bold tracking-tight">Clarity</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              We remove ambiguity. Every element is tested for its utility and emotional resonance. If it doesn't contribute, it's removed.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold tracking-tight">Empathy</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Design is a service to humanity. We prioritize the user's mental load and emotional well-being above flashy aesthetics.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold tracking-tight">Precision</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              The details are not the details. They make the design. We obsess over typography, spacing, and transition timing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
