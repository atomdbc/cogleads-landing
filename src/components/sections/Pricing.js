"use client";

import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import WaitlistModal from '../common/WaitlistModal';

const PricingTier = ({ title, monthlyPrice, yearlyPrice, features, isPopular, cta, billingPeriod, darkMode }) => (
  <div className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
    darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
  } ${isPopular ? 'border-2 border-gray-300 transform scale-105' : ''} flex flex-col h-full relative`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className={`px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center ${
          darkMode ? 'bg-white text-black' : 'bg-black text-white'
        }`}>
          <Star className="w-4 h-4 mr-2" /> Most Popular
        </span>
      </div>
    )}
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className={`mb-6 h-12 text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      {title === 'Free' ? 'For everyone in your company' : 'For growing teams and businesses'}
    </p>
    <div className="text-4xl font-bold mb-6">
      ${billingPeriod === 'monthly' ? monthlyPrice : yearlyPrice}
      <span className={`text-xl font-normal ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
      </span>
    </div>
    <ul className="mb-8 space-y-4 flex-grow text-base">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className={`h-5 w-5 mr-3 flex-shrink-0 mt-1 ${darkMode ? 'text-white' : 'text-black'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-6 rounded-lg transition duration-300 mt-auto text-lg font-semibold ${
      isPopular 
        ? darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
        : darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-black hover:bg-gray-300'
    }`}>
      {cta}
    </button>
  </div>
);

const Pricing = ({ darkMode }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const freeTierFeatures = [
    'Join a workspace',
    'View recordings & clips',
    'Search knowledge base',
    'Generate, view, share, and comment on pages',
    'Create, manage, and view Pipelines'
  ];

  const proTierFeatures = [
    'All Free features',
    'Connect your Google Account',
    'Sync Gmail Contacts & Email',
    'Record meetings on Zoom, Meet, Teams',
    'Meeting prep, notes, action items, and clips',
    'Automatically-organized CRM'
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-5xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Simple Pricing for Your Business</h2>
        <p className={`text-2xl text-center mb-12 ${darkMode ? 'text-white' : 'text-black'}`}>
          Start with our free tier and scale as you grow
        </p>
        
        <div className="flex justify-center mb-12">
          <div className={`flex items-center rounded-full p-1 ${darkMode ? 'bg-white' : 'bg-black'}`}>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'monthly' 
                  ? darkMode ? 'bg-black text-white' : 'bg-white text-black'
                  : darkMode ? 'text-black' : 'text-white'
              }`} 
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'yearly' 
                  ? darkMode ? 'bg-black text-white' : 'bg-white text-black'
                  : darkMode ? 'text-black' : 'text-white'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingTier
            title="Free"
            monthlyPrice="0"
            yearlyPrice="0"
            features={freeTierFeatures}
            cta="Get Started"
            billingPeriod={billingPeriod}
            darkMode={darkMode}
          />
          <PricingTier
            title="Pro"
            monthlyPrice="22.99"
            yearlyPrice="18.99"
            features={proTierFeatures}
            isPopular={true}
            cta="Start Free Trial"
            billingPeriod={billingPeriod}
            darkMode={darkMode}
          />
        </div>

        <div className="mt-16 text-center">
          <p className={`mb-6 text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>No credit card required. 14-day free trial.</p>
          <div className="flex justify-center space-x-6">
            <button className={`px-8 py-3 rounded-full text-base transition duration-300 ${
              darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
            }`} onClick={openModal}>
              Join the Waitlist
            </button>
            <a href="https://calendly.com/sonetz-inc/30min?month=2024-09" target="_blank" rel="noopener noreferrer">
              <button className={`px-8 py-3 rounded-full text-base border transition duration-300 ${
                darkMode ? 'bg-black text-white border-white hover:bg-gray-900' : 'bg-white text-black border-black hover:bg-gray-100'
              }`}>
                Book a Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} darkMode={darkMode} />
    </section>
  );
};

export default Pricing;