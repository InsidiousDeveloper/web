import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Hi"
    }
  },
  uz: {
    translation: {
      "Welcome to React": "Salom"
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    en: {
        translation: {
          "Welcome to React": "Hi"
        }
      },
      uz: {
        translation: {
          "Welcome to React": "Salom"
        }
      },
    fallbackLng: 'en',
    detection: {
        order: ['htmlTag', 'cookie', 'localstorage', 'path', 'subdomain'],
        caches: ['cookie'],
    },
  })

export default i18n;