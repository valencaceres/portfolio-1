"use client"

import React from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LenguageContext';
import { translations } from '@/translations';

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">{t.title}</h2>
          <p className="mt-4 text-xl text-gray-600">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">{t.frontend.title}</h3>
            <p className="text-gray-600">
              {t.frontend.description}
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">{t.design.title}</h3>
            <p className="text-gray-600">
              {t.design.description}
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">{t.backend.title}</h3>
            <p className="text-gray-600">
              {t.backend.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};