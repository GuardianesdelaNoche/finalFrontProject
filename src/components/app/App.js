import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { EventsPage } from '../events';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <Switch>
      <Route exact path="/404">
        <NotFoundPage />
      </Route>
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/">
        <Redirect to="/events" />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
