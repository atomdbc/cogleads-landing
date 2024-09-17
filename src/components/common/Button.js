'use client'

import React from 'react'

const Button = ({ children, primary = false, className = '' }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium text-sm transition duration-300 ${
      primary
        ? 'bg-black text-white hover:bg-gray-800'
        : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
    } ${className}`}
  >
    {children}
  </button>
)

export default Button