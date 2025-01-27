"use client"

import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LenguageContext';
import { translations } from '../../../translations';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Valentin Caceres</h3>
            <p className="text-gray-400 mb-6">{t.description}</p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.quickLinks.title}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white transition-colors"
                >
                  {t.quickLinks.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="hover:text-white transition-colors"
                >
                  {t.quickLinks.projects}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-white transition-colors"
                >
                  {t.quickLinks.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.contact.title}</h4>
            <ul className="space-y-2">
              <li>Madrid, España</li>
              <li>contact@example.com</li>
              <li>+1 (234) 567-890</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Valentin Caceres. {t.rights}
            </p>
            <p className="text-sm text-gray-400 flex items-center mt-4 md:mt-0">
              {t.madeWith} <Heart size={16} className="mx-1 text-red-500" /> {t.by} Valentin Caceres
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};