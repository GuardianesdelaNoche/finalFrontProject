import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Root from './components/root';
import { configureClient } from "./api/client";
import { configureStore } from './store/store';
// import * as serviceWorker from './serviceWorker';

/** TODO */
const accessToken = null; 
configureClient({ accessToken });
const history = createBrowserHistory();
const store = configureStore({
  preloadedState: { auth: !!accessToken  },
  history
});


ReactDOM.render(
  <React.StrictMode>
    <Root store={store} history={history}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
