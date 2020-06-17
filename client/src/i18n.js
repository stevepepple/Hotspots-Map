import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import translationsEN from 'vibemap-constants/translations/english.json';
import translationsES from 'vibemap-constants/translations/spanish.json';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: translationsEN
    },
    es: {
      translations: translationsES
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;