import React from 'react';

import LanguagePicker from './LanguagePicker';
import './footer.scss';
export default () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-container__details">
          {/* Spaces inside the below span tags are necessary for sentence spacing. */}
          <span>Copyright &reg; {`${new Date().getFullYear()} All rights reserved.`} </span>
        </p>
        <p className="footer-container__details">
          <a href="not implemented" target="_new">
            Privacy policy
          </a>
        </p>

        <LanguagePicker className="language-picker" />
      </div>
    </footer>
  );
};
