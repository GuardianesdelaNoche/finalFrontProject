import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, PrivateRoute } from '../auth';
import { EventsPage } from '../events';
import DetailsPage from '../events/EventDetail/DetailsPage';
import UserDashboard from '../user/dashboard/Userdashboard';

import { RememberPassPage, RecoverPassPage } from '../auth';
import  ListMyEvents  from '../user/myEvents/ListMyEvents';
import MyFavoritesEvents from '../user/myFavorites/MyFavoritesEvents';
import MySuscribesEvents from '../user/mySuscribes/MySuscribesEvents';
import { loginWithTokenAction } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import storage from "../../utils/storage";
import NewEventPage from '../events/NewEvent/NewEventPage';
import { NotFoundPage } from '../shared';


function App() {
  const dispatch = useDispatch();
  if( storage.get("auth")){
    const accessToken = storage.get("auth");
    if(accessToken.token){
      dispatch(loginWithTokenAction(accessToken.token))
    }
  }

  return (
    
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/rememberPassword" component={RememberPassPage} />
      <Route exact path="/rememberPassword/tokenExpired">
        <RememberPassPage tokenExpired />
      </Route>
      <Route exact path="/forgotthepassword/:token">
        { routeProps => <RecoverPassPage { ...routeProps} />}
      </Route>

      <PrivateRoute exact path="/event/New" component={NewEventPage} />
      <Route exact path="/event/:eventId/:eventTitle" component={DetailsPage} />
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/">
         <Redirect to="/events" />
      </Route>
      <PrivateRoute exact path="/user">
        {routeProps => <UserDashboard {...routeProps} />}
      </PrivateRoute>
      <PrivateRoute exact path="/myEvents" component={ListMyEvents} />
      <PrivateRoute exact path="/myFavorites" component={MyFavoritesEvents} />
      <PrivateRoute exact path="/mySuscribes" component={MySuscribesEvents} />


      <Route exact path="/register">
        {routeProps => <RegisterPage {...routeProps} />}
      </Route>
      <Route exact path="/404">
        <NotFoundPage message="Sorry about that, but the page you looking for isn´t available" />
      </Route>

      <Redirect to="/404" />
    </Switch>
    
    
  );
}

export default App;
