import React from 'react';
import { GlobalContext } from '../GlobalState/GlobalState';
import './languagePicker.scss';
export default () => {
  const languages = [
    {
      code: 'en',
      name: 'English'
    },
    {
      code: 'es',
      name: 'Spanish'
    }
  ];

  return (
    <GlobalContext.Consumer>
      {({
        actions,
        state: {
          ui: { language }
        }
      }) => {
        const handleLanguageChange = e => {
          actions.changeLanguage(e.target.value);
        };
        return (
          <select className="lang-selector" value={language} onChange={handleLanguageChange}>
            {languages.map(language => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        );
      }}
    </GlobalContext.Consumer>
  );
};
