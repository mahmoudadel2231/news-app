import {I18nManager} from 'react-native';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ar from './ar.json';
import en from './en.json';

const resources = {
  en,
  ar,
};
export const rtlSupport = {
  en: false,
  ar: true,
};

export const setLanguage = (language: keyof typeof rtlSupport) => {
  I18nManager.allowRTL(rtlSupport[language]);
  I18nManager.forceRTL(rtlSupport[language]);
  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });
};

export default i18n;
