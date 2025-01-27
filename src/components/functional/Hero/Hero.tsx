"use client"

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LenguageContext';
import { translations } from '@/translations';

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            {t.description}
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/valencaceres" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/valentin-caceres-b22446288/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:dev.vcaceres@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};