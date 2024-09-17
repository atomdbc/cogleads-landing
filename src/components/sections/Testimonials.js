'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const TestimonialCard = ({ name, username, testimonial, image, date }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mr-6 flex-shrink-0 w-80">
    <div className="flex items-center mb-4">
      <Image
        src={image || "/placeholder-avatar.png"}
        alt={name}
        width={40}
        height={40}
        className="rounded-full mr-3"
      />
      <div className="truncate">
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-600 text-sm">@{username}</p>
      </div>
    </div>
    <p className="text-gray-800 mb-4 truncate">{testimonial}</p>
    <div className="flex justify-between items-center text-gray-500 text-sm">
      <span>{date}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollUpperRef = useRef(null);
  const scrollLowerRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    let upperTranslateX = 0;
    let lowerTranslateX = 0;

    const scrollUpper = () => {
      upperTranslateX -= 1; // move left
      if (scrollUpperRef.current) {
        scrollUpperRef.current.style.transform = `translateX(${upperTranslateX}px)`;
        if (Math.abs(upperTranslateX) > scrollUpperRef.current.scrollWidth) {
          upperTranslateX = 0;
        }
      }
    };

    const scrollLower = () => {
      lowerTranslateX += 1; // move right
      if (scrollLowerRef.current) {
        scrollLowerRef.current.style.transform = `translateX(${lowerTranslateX}px)`;
        if (lowerTranslateX > scrollLowerRef.current.scrollWidth) {
          lowerTranslateX = 0;
        }
      }
    };

    const upperScrollInterval = setInterval(scrollUpper, 20);
    const lowerScrollInterval = setInterval(scrollLower, 20);

    return () => {
      clearInterval(upperScrollInterval);
      clearInterval(lowerScrollInterval);
    };
  }, []);

  const testimonials = [
    {
      name: "Rodri Alba",
      username: "rodri_agm",
      testimonial: "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can't imagine my life without it.",
      image: "/placeholder-avatar.png",
      date: "Apr 12, 2023"
    },
    {
      name: "Michele Lex",
      username: "MikyBrown",
      testimonial: "I've tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!",
      image: "/placeholder-avatar.png",
      date: "Mar 28, 2023"
    },
    {
      name: "Michael Ross",
      username: "michiack",
      testimonial: "Simple lives up to its name in every way. It's incredibly easy to use yet powerful enough to handle all my tasks efficiently. It's become an essential part of my daily routine.",
      image: "/placeholder-avatar.png",
      date: "Jan 15, 2023"
    },
    {
      name: "Jane Doe",
      username: "janedoe",
      testimonial: "This tool has made managing my projects so much easier. I recommend it to anyone who needs an intuitive and powerful solution.",
      image: "/placeholder-avatar.png",
      date: "Feb 10, 2023"
    },
    {
      name: "John Smith",
      username: "johnsmith",
      testimonial: "The customer support and ease of use are unmatched. I’ve switched all my projects to this platform.",
      image: "/placeholder-avatar.png",
      date: "Mar 18, 2023"
    },
    {
      name: "Alice Wonder",
      username: "alicew",
      testimonial: "I love the simplicity and the efficiency of this tool. My team productivity has skyrocketed since we adopted it.",
      image: "/placeholder-avatar.png",
      date: "Jun 10, 2023"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Top startups love Simple</h2>
        
        {/* Upper Scroll (scrolls left) */}
        <div className="overflow-hidden pb-8">
          <div ref={scrollUpperRef} className="flex whitespace-nowrap">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Lower Scroll (scrolls right) */}
        <div className="overflow-hidden pb-8 mt-8">
          <div ref={scrollLowerRef} className="flex whitespace-nowrap">
            {[...testimonials].reverse().map((testimonial, index) => (
              <TestimonialCard key={`reverse-${index}`} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">Our recent clients and partners</p>
          <div className="flex justify-center space-x-8">
            {['webflow', 'retune', 'finsweet', 'attributes', 'clientfirst', 'adobe'].map((logo, index) => (
              <div key={index} className="w-20 h-10 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
