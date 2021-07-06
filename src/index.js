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

let lang;

if(locale.search('es') >= 0) {
  lang = Spanish;
} else {
  lang = English;
}
import { createBrowserHistory } from 'history';

import storage from "./utils/storage";
import Root from './components/root';
import { configureClient } from "./api/client";
import { configureStore } from './store/store';
// import * as serviceWorker from './serviceWorker';


const accessToken = storage.get("auth");
configureClient({ accessToken });
const history = createBrowserHistory();
const store = configureStore({
  preloadedState: { auth: !!accessToken  },
  history
});


ReactDOM.render(
  <React.StrictMode>
    <Root store={store} history={history}/>
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
// serviceWorker.unregister();
