"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingTier = ({ title, monthlyPrice, yearlyPrice, features, isPopular, cta, billingPeriod, darkMode }) => (
  <div className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
    darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
  } ${isPopular ? `border-2 ${darkMode ? 'border-white' : 'border-black'} transform hover:-translate-y-1` : ''}`}>
    {isPopular && (
      <span className={`px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block ${
        darkMode ? 'bg-white text-black' : 'bg-black text-white'
      }`}>
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className={`mb-6 h-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      {title === 'Free' ? 'For everyone in your company' : 'For growing teams and businesses'}
    </p>
    <div className="text-4xl font-bold mb-6">
      ${billingPeriod === 'monthly' ? monthlyPrice : yearlyPrice}
      <span className={`text-base font-normal ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
      </span>
    </div>
    <ul className="mb-8 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className={`h-5 w-5 mr-2 flex-shrink-0 mt-1 ${darkMode ? 'text-white' : 'text-black'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-4 rounded-lg transition duration-300 ${
      isPopular 
        ? darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'
        : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-black hover:bg-gray-300'
    }`}>
      {cta}
    </button>
  </div>
);

const Pricing = ({ darkMode }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

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
    <section className={`py-20 ${darkMode ? 'bg-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Simple Pricing for Your Business</h2>
        <p className={`text-xl text-center mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Start with our free tier and scale as you grow
        </p>
        
        <div className="flex justify-center mb-12">
          <div className={`flex items-center rounded-full p-1 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'monthly' 
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : darkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'
              }`} 
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'yearly' 
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : darkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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

        <div className="mt-12 text-center">
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>No credit card required. 14-day free trial.</p>
          <button className={`px-8 py-3 rounded-lg transition duration-300 mr-4 ${
            darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'
          }`}>
            Join the Waitlist
          </button>
          <button className={`px-8 py-3 rounded-lg border transition duration-300 ${
            darkMode ? 'bg-gray-800 text-white border-white hover:bg-gray-700' : 'bg-white text-black border-black hover:bg-gray-50'
          }`}>
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;