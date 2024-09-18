'use client';

import React from 'react';
import Image from 'next/image';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Adjusted for smaller navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center py-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Image
            src={darkMode ? "/sonetz_white.png" : "/sonetz_black.png"}
            alt="Sonetz Logo"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="ml-2 text-lg font-semibold">Cogleads</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Solutions', id: 'hero' },
            { name: 'Features', id: 'features' },
            { name: 'Results', id: 'results' },
            { name: 'Pricing', id: 'pricing' },
            { name: 'Resources', id: 'testimonials' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm hover:text-gray-500 transition duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className={`p-1.5 rounded-full ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}
          >
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <a 
            href="https://calendly.com/sonetz-inc/30min?month=2024-09" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-3 py-1.5 text-sm rounded transition duration-300 ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
