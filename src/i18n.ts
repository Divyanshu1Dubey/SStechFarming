import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

// IMPORTANT: We do not include browser autodetection here. We want explicit cookie/localStorage control.
i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "hi", "bn"], // add others as needed
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage"],
      lookupCookie: "preferredLanguage",
      lookupLocalStorage: "preferredLanguage",
      caches: ["cookie", "localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: { useSuspense: false },
  });

export default i18n;
