import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

export const init18n = (language = 'en') =>
  i18n
    .use(initReactI18next)
    .use(XHR)
    .init({
      react: {
        nsMode     : 'fallback',
        bindI18n   : 'languageChanged loaded',
        wait       : true,
        useSuspense: false
      },
      lng          : language,
      fallbackLng  : 'en',
      wait         : true,
      ns           : ['shared'],
      defaultNS    : 'shared',
      interpolation: {
        escapeValue: false
      },
      format : value => value,
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }
    });

init18n();

export function changeLanguage(language) {
  return new Promise((res, _rej) => {
    i18n.changeLanguage(language, err => {
      if (err) {
        console.error(err);
      }
      res();
    });
  });
}


export default i18n;
