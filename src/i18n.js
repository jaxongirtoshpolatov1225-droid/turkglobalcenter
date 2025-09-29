import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import uzTranslation from './locales/uz.json';
import ruTranslation from './locales/ru.json';
import enTranslation from './locales/en.json';
import trTranslation from './locales/tr.json';

// Translation resources
const resources = {
  uz: {
    translation: uzTranslation
  },
  ru: {
    translation: ruTranslation
  },
  en: {
    translation: enTranslation
  },
  tr: {
    translation: trTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
