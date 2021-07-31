import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, PrivateRoute } from '../auth';
import { EventsPage } from '../events';
import DetailsPage from '../events/EventDetail/DetailsPage';
import UserDashboard from '../user/dashboard/Userdashboard';
import NotFoundPage from './NotFoundPage';
import { RememberPassPage, RecoverPassPage } from '../auth';
import  ListMyEvents  from '../user/myEvents/ListMyEvents';
import MyFavoritesEvents from '../user/myFavorites/MyFavoritesEvents';
import MySuscribesEvents from '../user/mySuscribes/MyFavoritesEvents';
import { loginWithTokenAction } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import storage from "../../utils/storage";


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
      <Route exact path="/forgotthepassword" component={RememberPassPage} /> 
      <Route exact path="/rememberPassword" component={RememberPassPage} />
      <Route exact path="/rememberPassword/tokenExpired">
        <RememberPassPage tokenExpired />
      </Route>
      <Route exact path="/forgotthepassword/:token">
        { routeProps => <RecoverPassPage { ...routeProps} />}
      </Route>      
      <Route exact path="/event/:eventId/:eventTitle" component={DetailsPage} />
      <Route exact path="/events" component={EventsPage} />
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
