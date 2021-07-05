
import { Redirect, Route, useLocation } from 'react-router-dom';



const PrivateRoute = props => {
//   const isLogged = true;
  const isLogged = false;
  const location = useLocation();

  return isLogged ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};

export default PrivateRoute;