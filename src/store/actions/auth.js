import { types } from "../types/types";
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

export const loginWithTokenAction = token => {
    return async function (dispatch, getState, { api, history }) {
        
        try {      
      
            const userData = await getUserDataById(token);                       
            dispatch(authLoginSuccess(userData.result));

            // Redirect
            const { from } = history.location.state || { from: { pathname: '/' } };
            history.replace(from);
        } catch (error) {
            dispatch(authLoginError(error));
        }
    };

}

export const loginAction = credentials => {
    return async function (dispatch, getState, { api, history }) {
        try {
            dispatch(authLoginRequest());
           
            const logged = await api.login.login(credentials);       
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
        await api.login.logout();
        dispatch(authLogout());
        history.push("/");
    };
};
