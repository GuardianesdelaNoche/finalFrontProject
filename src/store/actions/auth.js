import { types } from "../types/types";
import {login} from '../../api/login'

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


export const loginAction = credentials => {
    return async function (dispatch, getState, { api, history }) {
        dispatch(authLoginRequest());
        try {
            // TODO - Add Endpoint to Login
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

