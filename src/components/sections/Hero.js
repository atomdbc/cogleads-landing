'use client';

import React from 'react';
import { Rocket } from 'lucide-react';
import Image from 'next/image';
import Button from '../common/Button';

export default function Hero({ darkMode }) {
  return (
    <div className={`min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-20 mb-16">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm mb-6 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
            <Rocket className="mr-2" size={20} />
            <span>Unlock Effortless Growth with AI-Powered CRM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Spend 10x time on closing deals<br />
            using Cogleads
          </h1>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Experience 10x efficiency, 50% cost reduction, and 100% customer satisfaction. Our AI-powered all-in-one solution works tirelessly so you don't have to.
          </p>
          <div className="space-x-4">
            <Button 
              primary 
              className={`px-6 py-3 ${
                darkMode 
                  ? 'bg-gray-400 text-black hover:bg-gray-400'  // Ensure contrast in dark mode
                  : 'bg-black text-white hover:bg-gray-800'
              } transition-colors duration-300`}
            >
              Start Growing Today
            </Button>
            <Button 
              className={`px-6 py-3 ${
                darkMode 
                  ? 'bg-gray-600 text-white hover:bg-gray-500'  // More visible gray background
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              } transition-colors duration-300`}
            >
             Book a Demo
            </Button>
          </div>
        </div>
        
        <div className="mt-20">
          <div className={`rounded-lg overflow-hidden shadow-md ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <Image
              src="/placeholder.png"
              alt="Cogleads Dashboard"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
