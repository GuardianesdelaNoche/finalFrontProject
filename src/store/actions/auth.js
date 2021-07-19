import { types } from "../types/types";
<<<<<<< Updated upstream
import {login, logout} from '../../api/login'
=======
import {login} from '../../api/login'
>>>>>>> Stashed changes

export const authLoginRequest = () => ({
type: types.authLoginRequest
});

export const authLoginSuccess = () => ({
    type: types.authLoginSuccess
});

export const authLoginError = error => ({
    type: types.authLoginError,
    payload: error
});

export const authLogout = () => {
    return {
        type: types.authLogout,
    };
}

export const loginAction = credentials => {
    return async function (dispatch, getState, { api, history }) {
        dispatch(authLoginRequest());
        try {
<<<<<<< Updated upstream
           
=======
            // TODO - Add Endpoint to Login
>>>>>>> Stashed changes
            const logged = await login(credentials);
            dispatch(authLoginSuccess(logged));

            // Redirect
            const { from } = history.location.state || { from: { pathname: '/' } };
            history.replace(from);
        } catch (error) {
            dispatch(authLoginError(error));
        }
    };
};

<<<<<<< Updated upstream

export const logoutAction = () => {
    return async function (dispatch, _getState, { api }) {
        //await api.auth.logout();
        await logout();
        dispatch(authLogout());
    };
};
=======
>>>>>>> Stashed changes
