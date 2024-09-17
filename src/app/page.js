import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Results from '../components/sections/Results';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
// import Ingerations from '../components/sections/Integtations';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Features />
      <Results />
      {/* <Ingerations /> */}
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}