import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './redux/store';
import '@csstools/normalize.css';
import './base.css';
import App from './App';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
