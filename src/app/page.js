'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Results from '../components/sections/Results';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
import Integrations from '../components/sections/Integrations.js';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import Footer from '../components/layout/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div id="hero"><Hero darkMode={darkMode} /></div>
      <div id="features"><Features darkMode={darkMode} /></div>
      <div id="results"><Results darkMode={darkMode} /></div>
      <div id="integrations"><Integrations darkMode={darkMode} /></div>
      <div id="pricing"><Pricing darkMode={darkMode} /></div>
      <div id="testimonials"><Testimonials darkMode={darkMode} /></div>
      <div id="cta"><CallToAction darkMode={darkMode} /></div>
      <Footer darkMode={darkMode} />
    </div>
  );
}