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
            <span>Grow your business with AI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Spend More Time Closing Deals,<br />
            Not Chasing Leads
          </h1>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let us handle the busywork while you focus on growing your business.
          </p>
          <div className="space-x-4">
            <Button 
              primary 
              className={`px-6 py-3 ${
                darkMode 
                  ? 'bg-gray-400 text-black hover:bg-gray-500'
                  : 'bg-black text-white hover:bg-gray-900'
              } transition-colors duration-300`}
            >
              Join the Waitlist
            </Button>
            <a 
              href="https://calendly.com/sonetz-inc/30min?month=2024-09" 
              target="_blank" 
              rel="noopener noreferrer"
            >
             <Button 
              className={`px-6 py-3 ${
                darkMode 
                  ? 'bg-gray-600 text-white hover:bg-gray-500'
                  : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
              } transition-colors duration-300`}
            >
              Book a Demo
            </Button>
            </a>
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