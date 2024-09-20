import React, { useState } from 'react';
import WaitlistModal  from '../common/WaitlistModal';

const CTASection = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} py-20`}>
      <div className="container mx-auto px-4 flex items-center">
        {/* Left side - space for visual */}
        <div className="w-1/2 pr-8">
          {/* Placeholder for visual */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} h-80 rounded-lg shadow-lg`}></div>
        </div>
        
        {/* Right side - content */}
        <div className="w-1/2 flex flex-col justify-center pl-8">
          <h2 className="text-2xl font-semibold mb-3 leading-tight">Join Cogleads and Start Growing Today</h2>
          <p className={`mb-6 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-md`}>
            Don't let manual tasks slow you down. Join the waitlist and see how easy it is to scale your business with Cogleads.
          </p>
          <div className="flex space-x-4">
            <button className={`${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} text-sm font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out`} onClick={openModal}>
              Join the Waitlist
            </button>
            <button className={`bg-transparent ${darkMode ? 'text-white border-white hover:bg-white hover:text-black' : 'text-black border-black hover:bg-black hover:text-white'} text-sm font-medium py-2 px-6 border rounded-full transition duration-300 ease-in-out`}>
              Book a Demo
            </button>
          </div>
        </div>
      </div>
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} darkMode={darkMode} />
    </div>
  );
};

export default CTASection;