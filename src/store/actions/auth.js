import { types } from "../types/types";

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
            //await api.auth.login(credentials);
            dispatch(authLoginSuccess());
            // Redirect
            const { from } = history.location.state || { from: { pathname: '/' } };
            history.replace(from);
        } catch (error) {
            dispatch(authLoginError(error));
        }
    };
};

