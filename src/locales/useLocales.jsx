// react-i18next
import { useTranslation } from 'react-i18next';
// Config
import { allLangs, defaultLang } from './config';
import Axios from '../utils/Axios';
// --------------------------------------------------------

export default function useLocales() {
    const { i18n, t: translate } = useTranslation();

    const langStorage = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : '';

    const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

    let htmlTag = document.getElementsByTagName('html')[0]

    const handleChangeLanguage = (newlang) => {
        i18n.changeLanguage(newlang);
        onChangeDirectionByLang(newlang);
        Axios.defaults.headers.common.LANGUAGE = newlang ;
    };

    const onChangeDirectionByLang = (newlang) => {
        htmlTag.setAttribute('lang', newlang);
        if (newlang === 'ar') {
            htmlTag.setAttribute('dir', 'rtl');
        } else {
            htmlTag.setAttribute('dir', 'ltr');
        }
    }

    return {
        onChangeLang: handleChangeLanguage,
        translate: (text, options) => translate(text, options),
        currentLang,
        allLangs,
    };
}