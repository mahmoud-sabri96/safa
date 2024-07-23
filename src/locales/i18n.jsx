// i18next
import i18n from 'i18next';
// i18next-browser-languagedetector
import LanguageDetector from 'i18next-browser-languagedetector';
// initReactI18next
import { initReactI18next } from 'react-i18next';
import enLocales from "./lang/en/en";
import arLocales from "./lang/ar/ar";
import { defaultLang } from './config';
// ----------------------------------------------------------------------

let lng = defaultLang.value;


if (typeof window !== "undefined") {
    lng = localStorage.getItem("i18nextLng") || defaultLang.value;
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translations: enLocales },
            ar: { translations: arLocales },
        },
        lng,
        fallbackLng: defaultLang.value,
        debug: false,
        ns: ["translations"],
        defaultNS: "translations",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;