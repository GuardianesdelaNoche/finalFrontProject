import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage,
   RegisterPage,
   PrivateRoute,
   RememberPassPage,
   RecoverPassPage
} from '../auth';

import { EventsPage } from '../events';
import { MemberPage, UpdateMemberPage } from '../members';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/forgotthepassword" component={RememberPass} />
      <PrivateRoute exact path="/member" component={MemberPage} />
      <PrivateRoute exact path="/updateMyData" component={UpdateMemberPage} />
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
