
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 flex flex-col items-center">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl serif mb-6">Let's collaborate.</h2>
        <p className="text-gray-400 text-lg">Currently accepting new projects and creative partnerships.</p>
      </div>
      
      <div className="w-full max-w-2xl">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-b border-gray-200 pb-4">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Name</label>
              <input 
                type="text" 
                placeholder="Type your name"
                className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-gray-200"
              />
            </div>
            <div className="border-b border-gray-200 pb-4">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Email</label>
              <input 
                type="email" 
                placeholder="you@company.com"
                className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-gray-200"
              />
            </div>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Message</label>
            <textarea 
              rows={3}
              placeholder="Tell us about your project"
              className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-gray-200 resize-none"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button className="px-12 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-all rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transform duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
