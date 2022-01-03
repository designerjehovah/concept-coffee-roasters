import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PreferenceState from './context/preferences/PreferenceState';

ReactDOM.render(
  <React.StrictMode>
    <PreferenceState>
      <App />
    </PreferenceState>
  </React.StrictMode>,
  document.getElementById('root')
);
