import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, PrivateRoute } from '../auth';
import { EventsPage } from '../events';
import DetailsPage from '../events/EventDetail/DetailsPage';
import { MemberPage } from '../members';
import UserDashboard from '../user/dashboard/Userdashboard';
import ListMyEvents from '../user/myEvents/ListMyEvents';
import NotFoundPage from './NotFoundPage';
import { RememberPassPage, RecoverPassPage } from '../auth';


function App() {
  return (
    
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/forgotthepassword" component={RememberPassPage} /> 
      <Route exact path="/rememberPassword" component={RememberPassPage} />
      <Route exact path="/rememberPassword/tokenExpired">
        <RememberPassPage tokenExpired />
      </Route>
      <Route exact path="/forgotthepassword/:token">
        { routeProps => <RecoverPassPage { ...routeProps} />}
      </Route>
      <PrivateRoute exact path="/member" component={MemberPage} />
      <Route exact path="/event/:eventId" component={DetailsPage} />
      <Route exact path="/events" component={EventsPage} />
      <PrivateRoute exact path="/myEvents" component={ListMyEvents} />
      <PrivateRoute exact path="/user" component={UserDashboard} />

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
