import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';

import App from './App';

const locale = navigator.language;
let lang;

if(locale.search('es') >= 0) {
  lang = Spanish;
} else {
  lang = English;
}

export default function Root({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <IntlProvider locale={locale} messages={lang} >
            <App />
        </IntlProvider>
      </Router>
    </Provider>
  );
}