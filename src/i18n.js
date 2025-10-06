import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/common.json";
import contactEN from "./locales/en/contact.json";
import productsEN from "./locales/en/products.json";
import productDetailEN from "./locales/en/productsDetail.json";

import translationPT from "./locales/pt/common.json";
import contactPT from "./locales/pt/contact.json";
import productsPT from "./locales/pt/products.json";
import productDetailPT from "./locales/pt/productsDetail.json"; 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
        contact: contactEN,
        products: productsEN,
        productDetail: productDetailEN,
      },
      pt: {
        translation: translationPT,
        contact: contactPT,
        products: productsPT,
        productDetail: productDetailPT,
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
