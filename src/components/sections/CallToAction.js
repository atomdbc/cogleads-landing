import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex items-center">
        {/* Left side - space for visual */}
        <div className="w-1/2 pr-8">
          {/* Placeholder for visual */}
          <div className="bg-gray-800 h-80 rounded-lg shadow-lg"></div>
        </div>
        
        {/* Right side - content */}
        <div className="w-1/2 flex flex-col justify-center pl-8">
          <h2 className="text-2xl font-semibold mb-3 leading-tight">Join Cogleads and Start Growing Today</h2>
          <p className="mb-6 text-sm text-gray-300 leading-relaxed max-w-md">
            Don't let manual tasks slow you down. Join the waitlist and see how easy it is to scale your business with Cogleads.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition duration-300 ease-in-out">
              Join the Waitlist
            </button>
            <button className="bg-transparent hover:bg-white hover:text-black text-white text-sm font-medium py-2 px-4 border border-white hover:border-transparent rounded transition duration-300 ease-in-out">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;