import React from 'react';

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              Privacy Policy
            </a>
            <a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              Terms of Use
            </a>
            <a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              Cookie Settings
            </a>
          </div>
          <p className="text-sm text-center md:text-left w-full md:w-auto">
            &copy; {currentYear} Sonetz AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}