import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';

// get default language selected by user in navigator
const locale = navigator.language;
console.log(locale.search('kk'));

let lang;

if(locale.search('es') >= 0) {
  lang = Spanish;
} else {
  lang = English;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale={locale} messages={lang}>
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
