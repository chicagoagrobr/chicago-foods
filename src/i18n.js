import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/common.json";
import contactEN from "./locales/en/contact.json";

import translationPT from "./locales/pt/common.json";
import contactPT from "./locales/pt/contact.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
        contact: contactEN,
      },
      pt: {
        translation: translationPT,
        contact: contactPT,
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
