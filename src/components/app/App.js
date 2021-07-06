import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage, PrivateRoute } from '../auth';
import RegisterPage from '../auth/RegisterPage';

import { EventsPage } from '../events';
import { MemberPage } from '../members';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/member" component={MemberPage} />
      <Route exact path="/404">
        <NotFoundPage />
      </Route>
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/">
        <Redirect to="/events" />
      </Route>
      <Redirect to="/404" />
    </Switch>
    
    
  );
}

export default App;
