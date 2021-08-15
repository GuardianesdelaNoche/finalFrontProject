import { types } from "../types/types";


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

export const tagsLoadedSuccess = tagsData => ({
   type:types.tagsLoadedSuccess,
   payload: [tagsData] 
});

export const loginWithTokenAction = token => {
    return async function (dispatch, getState, { api, history }) {
        
        try {      
      
            const userData = await api.user.getUserDataById(token);                       
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
        dispatch(authLoginRequest());
        try {
           
            const logged = await api.login.login(credentials);       
            const userData = await api.user.getUserDataById(logged.token);    
            const tagsData = await api.tags.getTags();                   
            dispatch(authLoginSuccess(userData.result));
            dispatch(tagsLoadedSuccess(tagsData.tags))

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
