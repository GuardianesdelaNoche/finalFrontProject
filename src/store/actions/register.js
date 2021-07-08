import { types } from "../types/types";

export const registerRequest = () => ({
type: types.registerRequest
});

export const registerSuccess = () => ({
    type: types.registerSuccess
});

export const registerError = error => ({
    type: types.registerError,
    payload: error
});


export const registerAction = registerData => {
    return async function ( dispatch, getState, { api, history }) {
        dispatch(registerRequest());
        try {
            //TODO - add endpoint to register
            //api.register(registerData)
            dispatch(registerSuccess());
            const { from } = history.location.state || { from: { pathname: '/' } };
            history.replace(from);
        } catch (error) {
            dispatch(registerError());
        }
    }
}