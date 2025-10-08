import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/common.json";
import contactEN from "./locales/en/contact.json";
import productsEN from "./locales/en/products.json";
import productDetailEN from "./locales/en/productsDetail.json";
import aboutEN from "./locales/en/about.json";
import homeEN from "./locales/en/home.json";
import privacyEN from "./locales/en/privacy.json";

import translationPT from "./locales/pt/common.json";
import contactPT from "./locales/pt/contact.json";
import productsPT from "./locales/pt/products.json";
import productDetailPT from "./locales/pt/productsDetail.json"; 
import aboutPT from "./locales/pt/about.json";
import homePT from "./locales/pt/home.json";
import privacyPT from "./locales/pt/privacy.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
        contact: contactEN,
        products: productsEN,
        productDetail: productDetailEN,
        about: aboutEN,
        home: homeEN,
        privacy: privacyEN,
      },
      pt: {
        translation: translationPT,
        contact: contactPT,
        products: productsPT,
        productDetail: productDetailPT,
        about: aboutPT,
        home: homePT,
        privacy: privacyPT,
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
