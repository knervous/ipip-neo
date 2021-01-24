import React from 'react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const [t] = useTranslation('shared');
  return <div>{t('contact')}</div>;
};
