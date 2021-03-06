import React from 'react';
import T from 'prop-types';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../app';



function Root({ store, history, ...props }) {

  return (
    <Provider store={store}>
      <Router history={history}>
        <App {...props} />
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: T.object.isRequired,
  history: T.object.isRequired,
};

export default Root;
