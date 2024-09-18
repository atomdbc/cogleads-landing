'use client'

import React from 'react'
import Image from 'next/image'

export default function Footer({ darkMode }) {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Image
              src={darkMode ? "/sonetz_white.png" : "/sonetz_black.png"}
              alt="Sonetz AI Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-sm">powered by Sonetz Ai.</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className={`hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Privacy Policy</a>
            <a href="#" className={`hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Terms of Service</a>
          </div>
        </div>
        <div className="mt-4 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Sonetz AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}