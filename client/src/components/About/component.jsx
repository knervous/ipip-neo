import React from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const [t] = useTranslation('shared');
  return <div>{t('about')}</div>;
};
