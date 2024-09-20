'use client';

import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import Button from '../common/Button';

const WaitlistModal = ({ isOpen, onClose, darkMode }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className={`relative w-full max-w-lg rounded-lg p-8 transition-transform duration-300 ease-in-out transform scale-100 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X size={24} />
            </button>
            <div className="flex items-center justify-center mb-8">
              <Image src="/sonetz_black.png" alt="Cogleads Logo" width={48} height={48} />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center">Get early access</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 text-sm font-medium">First name</label>
                  <input type="text" id="firstName" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`} placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 text-sm font-medium">Last name</label>
                  <input type="text" id="lastName" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`} placeholder="Doe" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                <input type="email" id="email" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`} placeholder="johndoe@example.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-1 text-sm font-medium">Phone</label>
                <input type="tel" id="phone" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`} placeholder="+1 (555) 123-4567" />
              </div>
              <div className="mb-4">
                <label htmlFor="businessName" className="block mb-1 text-sm font-medium">Business Name</label>
                <input type="text" id="businessName" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`} placeholder="Acme Inc." />
              </div>
              <div className="mb-4">
                <label htmlFor="industry" className="block mb-1 text-sm font-medium">Industry</label>
                <select id="industry" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}>
                  <option value="">Select an industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="primaryRole" className="block mb-1 text-sm font-medium">Primary Role</label>
                <select id="primaryRole" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}>
                  <option value="">Select a role</option>
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="engineering">Engineering</option>
                  <option value="productManagement">Product Management</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block mb-1 text-sm font-medium">Location</label>
                <input type="text" id="location" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`} placeholder="San Francisco, CA" />
              </div>
              <div className="mb-6">
                <label htmlFor="currentChallenge" className="block mb-1 text-sm font-medium">Your Current Business Management Tool</label>
                <input type="text" id="currentChallenge" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`} placeholder="Spreadsheets, Trello, etc." />
              </div>
              <button type="submit" className="w-full bg-black text-white rounded-full py-3 hover:bg-gray-800 transition-colors duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WaitlistModal;
