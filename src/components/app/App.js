import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, PrivateRoute, RememberPass } from '../auth';

import { EventsPage } from '../events';
import { MemberPage, UpdateMemberPage } from '../members';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/forgotthepassword" component={RememberPass} />
      <Route exact path="/changeMyData">
        {routeProps => <UpdateMemberPage {...routeProps} />}
      </Route>
      <PrivateRoute exact path="/member" component={MemberPage} />
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/register">
        {routeProps => <RegisterPage {...routeProps} />}
      </Route>
      <Route exact path="/404">
        <NotFoundPage />
      </Route>
      <Route exact path="/">
        <Redirect to="/events" />
      </Route>
      <Redirect to="/404" />
    </Switch>
    
    
  );
}

export default App;
