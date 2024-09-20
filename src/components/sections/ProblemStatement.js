'use client';

import React from 'react';

const ProblemCard = ({ problem, darkMode }) => (
  <div className={`rounded-md p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center text-center w-80 h-32`}>
    <p className={`text-sm ${darkMode ? 'text-white' : 'text-black'}`}>{problem}</p>
  </div>
);

const ProblemStatement = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Tired of Wasting Hours on Manual Sales Tasks?
        </h2>
        <p className="text-xl text-center mb-12">
          Leads, follow-ups, managing it all—it's overwhelming. We've been there.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <ProblemCard problem="Finding new leads eats up your time." darkMode={darkMode} />
          <ProblemCard problem="Following up with prospects feels like a full-time job." darkMode={darkMode} />
        </div>
        <div className="flex justify-center mb-12">
          <ProblemCard problem="You're juggling too many tools, and it's slowing you down." darkMode={darkMode} />
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Cogleads' Solution</h3>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Cogleads automates lead generation, follow-ups, and keeps everything organized in one place. Say goodbye to time-consuming tasks and hello to more focus on growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;