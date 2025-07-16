// src/components/layout/useFontManager.jsx
import { useEffect } from 'react';

const useFontManager = (language) => {
  useEffect(() => {
    // Set the lang attribute on the html element
    document.documentElement.lang = language;
    
    // Add language-specific class to body
    const body = document.body;
    
    // Remove existing language classes
    body.classList.remove('font-english', 'font-khmer');
    
    // Add appropriate language class
    if (language === 'km') {
      body.classList.add('font-khmer');
    } else {
      body.classList.add('font-english');
    }
    
    // Optional: Set font family directly on body for immediate effect
    if (language === 'km') {
      body.style.fontFamily = "var(--font-khmer)";
    } else {
      body.style.fontFamily = "var(--font-english)";
    }
    
    // Log for debugging
    // console.log(`Font switched to: ${language === 'km' ? 'Khmer' : 'English'}`);
    
  }, [language]);
  
  // Return utility functions for component-level font management
  return {
    getFontClass: () => language === 'km' ? 'font-khmer' : 'font-english',
    getTextClass: () => language === 'km' ? 'khmer-text' : 'english-text',
    isKhmer: () => language === 'km',
    isEnglish: () => language === 'en',
    getCurrentLanguage: () => language
  };
};

export default useFontManager;