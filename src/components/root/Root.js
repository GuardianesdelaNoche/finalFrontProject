import React from 'react';
import T from 'prop-types';
import { Router } from 'react-router-dom';

import App from '../app';

function Root({ history, ...props }) {
  return (
      <Router history={history}>
        <App {...props} />
      </Router>
  );
}

Root.propTypes = {
  history: T.object.isRequired,
};

export default Root;
