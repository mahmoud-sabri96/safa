import { createContext, useContext, useEffect } from 'react';
// Locales
import { allLangs, defaultLang } from '../locales/config';


const LocalizationContext = createContext();

export const useSetting = () => {
    return useContext(LocalizationContext);
};



export function LocalizationProvider({ children }) {
    
    const htmlTag = document.getElementsByTagName('html')[0]

    const langStorage = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : '';

    const currentLang = allLangs.find((lang) => lang.value === langStorage) || defaultLang;



    useEffect(() => {
        if (currentLang.value === 'ar') {
            htmlTag.setAttribute('dir', 'rtl');
            htmlTag.setAttribute('lang', 'ar');
        } else {
            htmlTag.setAttribute('dir', 'ltr');
            htmlTag.setAttribute('lang', 'en');
        }
    }, [])

    const value = {
    }

    return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>
}