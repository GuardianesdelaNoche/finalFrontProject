import { authLoginRequest,
        authLoginSuccess,
        authLoginError,
        authLogout, 
        loginAction
 } from "./auth";
import { types } from '../types/types';

describe('authLoginRequest', () => {
    test('should return an authLoginRequest action', () => {
        const expectedAction = { type: types.authLoginRequest};
        const result = authLoginRequest();
        expect(result).toEqual(expectedAction);
    })
});

describe('authLoginSuccess', () => {
    test('should return an authLoginSuccess action', () => {
        const userData = 'userData';
        const expectedAction = { type: types.authLoginSuccess, payload: userData};
        const result = authLoginSuccess(userData);
        expect(result).toEqual(expectedAction);
    })
});

describe('authLoginError', () => {
    test('should return an authLoginError action', () => {
        const error = 'error';
        const expectedAction = { type: types.authLoginError, payload: error};
        const result = authLoginError(error);
        expect(result).toEqual(expectedAction);
    })
});

describe('authLogout', () => {
    test('should return an authLogout action', () => {        
        const expectedAction = { type: types.authLogout};
        const result = authLogout();
        expect(result).toEqual(expectedAction);
    })
});


describe('loginAction', () => {
    describe('when login api resolves', () => {        
        const credentials = 'credentials';
        const userData = 'userData';
        const action = loginAction(credentials);
        const dispatch = jest.fn();
        const getState = () => {};
        const history = {
            location: {},
            replace: jest.fn(),
        }
        const api = {
            login: {login: jest.fn().mockResolvedValue()}
        };

        test('should dispatch an authLoginRequest action', () => {
            action(dispatch, getState, {api, history});
            expect(dispatch).toHaveBeenCalledWith({ type: types.authLoginRequest});
        });

        test('should call api.login.login', () => {
            action(dispatch, getState, { api, history });
            expect(api.login.login).toHaveBeenCalledWith(credentials);
        });

        test('should dispatch an authLoginSuccess action', ()=> {
            action(dispatch, getState, { api, history });
            expect(dispatch).toHaveBeenNthCalledWith(2, {type: types.authLoginSuccess, payload: userData});
            
        })
    })
});