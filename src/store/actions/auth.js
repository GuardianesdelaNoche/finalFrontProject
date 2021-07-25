import { types } from "../types/types";
import {login, logout} from '../../api/login';
import { getUserDataById } from "../../api/user";


export const authLoginRequest = () => ({
type: types.authLoginRequest
});

export const authLoginSuccess = userData => ({
        type: types.authLoginSuccess,
        payload: userData
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
           
            const logged = await login(credentials);       
            const userData = await getUserDataById(logged.token);                       
            dispatch(authLoginSuccess(userData.result));

            // Redirect
            const { from } = history.location.state || { from: { pathname: '/' } };
            history.replace(from);
        } catch (error) {
            dispatch(authLoginError(error));
        }
    };
};

export const logoutAction = () => {
    return async function (dispatch, _getState, { api, history }) {
        await logout();
        dispatch(authLogout());
        history.push("/");
    };
};
