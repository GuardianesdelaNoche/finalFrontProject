import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import storage from "./utils/storage";
import Root from './components/root';
import { configureClient } from "./api/client";
import { configureStore } from './store/store';

import './index.css';

const accessToken = storage.get("auth");
configureClient({ accessToken });
const history = createBrowserHistory();
const store = configureStore({
  preloadedState: { auth: !!accessToken  },
  history
});


const render = () => {
  ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root'),
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
