import { create } from 'zustand';
import Papa from 'papaparse';
import React from 'react';

const initialState = {
  translations: {},
  language: 'en',
  isLoaded: false,
};

const loadTranslations = async () => {
  const response = await fetch('/src/assets/locales/translations.csv');
  const csv = await response.text();
  // console.log(csv);
  const parsed = Papa.parse(csv, { header: true });
  const translations = {};
  parsed.data.forEach(row => {
    translations[row.key] = row;
  });
  return translations;
};

export const useTranslationStore = create((set, get) => ({
  ...initialState,
  setLanguage: (lang) => set({ language: lang }),
  load: async () => {
    if (!get().isLoaded) {
      const translations = await loadTranslations();
      set({ translations, isLoaded: true });
    }
  },
}));

export const useTranslation = () => {
  const { translations, language, setLanguage, load } = useTranslationStore();
  React.useEffect(() => { load(); }, [load]);
  const t = (key) => {
    if (!translations[key]) return key;
    return translations[key][language] || key;
  };
  return { t, language, setLanguage };
}; 