import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import '@shared/styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);