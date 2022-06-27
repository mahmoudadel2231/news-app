import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {translation as englishTranslation} from './en.json';

type TScopes = keyof typeof englishTranslation | any;
export type TLocalizer = (key: string) => string;

const useKeyTranslation = (path: TScopes) => {
  const {t} = useTranslation(['translation']);
  return useCallback(
    (key: string, ...props) => t(`${path}.${key}`, ...props),
    [path, t],
  );
};

export default useKeyTranslation;
