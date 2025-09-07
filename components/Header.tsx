
import React from 'react';
import { TravelIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex justify-center items-center gap-4 mb-4">
        <TravelIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Travel Checklist
        </h1>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Your personalized packing list for an amazing trip to <span className="font-semibold text-gray-700 dark:text-gray-300">NYC, Boston & Salem</span>.
      </p>
    </header>
  );
};

export default Header;
