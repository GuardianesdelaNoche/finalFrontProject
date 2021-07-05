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


