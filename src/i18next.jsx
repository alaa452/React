import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import detector from 'i18next-browser-languagedetector';

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "products": "products",
          "Cart": "Cart",
          "Login": "Login",
          "Register": "Register",
          "Logout": "Logout",
          "Category": "Category",
        }
      },
      ar: {
        translation: {
          "Home": "الرئيسية",
          "products": "المنتجات",
          "Cart": "السلة",
          "Login": "تسجيل الدخول",
          "Register": "التسجيل",
          "Logout": "تسجيل الخروج",
          "Category": "الفئة",
        }
      }
    },
    fallbackLng: "en",
  });

  export default i18n;