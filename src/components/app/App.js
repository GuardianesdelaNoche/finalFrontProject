import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, PrivateRoute, RememberPass } from '../auth';

import { EventsPage } from '../events';
import { MemberPage } from '../members';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/forgotthepassword" component={RememberPass} />
      <PrivateRoute exact path="/member" component={MemberPage} />
      <Route exact path="/events" component={EventsPage} >
          {/* <Redirect to="/events/page/1/limit/10" /> */}
        </Route>
      <Route exact path="/">
        <Redirect to="/events/page/1/limit/10" />
      </Route>
      <Route path="/events/page/:page/limit/:limit" component={EventsPage} />
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/404">
        <NotFoundPage />
      </Route>
      <Redirect to="/404" />
    </Switch>
    
    
  );
}

export default App;
