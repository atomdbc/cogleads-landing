'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Cogleads. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}