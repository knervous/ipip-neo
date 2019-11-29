import React from 'react';
import AuthRouter from './routers/AuthRouter';

import './styles/common/styles.scss';

// This layer will eventually provide ThemeContext
export default () => {
  return (
    <div>
      <AuthRouter />
    </div>
  );
};
