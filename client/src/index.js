import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './services/i18n';
import 'antd/dist/antd.css';

// todo pcj: investigate service worker
// require('./serviceWorker');

ReactDOM.render(<App />, document.getElementById('root'));
