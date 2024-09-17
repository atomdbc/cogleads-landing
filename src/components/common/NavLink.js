'use client'

import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Image
          src="/sonetz_black.png"
          alt="Cogleads Logo"
          width={30}
          height={40}
          className="mr-2"
        />
        <span className="ml-2 text-xl font-bold transition-opacity duration-500 ease-in-out">Cogleads</span>
      </div>
      <div className="hidden md:flex space-x-6">
        {['Solutions', 'Features', 'Results', 'Pricing', 'Resources'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm text-gray-600 hover:text-black transition duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="space-x-3">
        <Button>Sign In</Button>
        <Button primary>Start Free</Button>
      </div>
    </nav>
  )
}