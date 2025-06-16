import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    lng: "ro",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    returnObjects: false,
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;