import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Configure i18next
i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: translationFR },
    en: { translation: translationEN },
    es: { translation: translationES },
  },
  lng: 'fr', // Default language
  fallbackLng: 'fr', // Fallback language
  interpolation: { escapeValue: false } // React already protects from XSS
});

export default i18n;
