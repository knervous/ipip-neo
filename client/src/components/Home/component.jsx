import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import './component.scss';

export const Home = () => {
  const [t] = useTranslation('shared');
  const history = useHistory();

  return (
    <div className="home-container">
      <p className="home-title">{t('ui.home.title')}</p>
      <p className="home-titleSub">{t('ui.home.titleSub')}</p>
      <p className="home-welcome">{t('ui.home.welcome')}</p>
      <p className="home-getStarted">{t('ui.home.getStarted')}</p>
      <div onClick={() => history.push('/test')} className="home-start">
        <span>{t('ui.home.start')}</span>
      </div>
    </div>
  );
};
