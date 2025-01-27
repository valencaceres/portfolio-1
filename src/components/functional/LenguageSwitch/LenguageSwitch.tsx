"use client"

import React from 'react';
import { useLanguage } from '@/context/LenguageContext';
import { Languages } from 'lucide-react';

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
      aria-label="Switch language"
    >
      <Languages className="w-6 h-6 text-white" />
      <span className="sr-only">
        {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      </span>
    </button>
  );
};