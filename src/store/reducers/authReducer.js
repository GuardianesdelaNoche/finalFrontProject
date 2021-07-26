 import { types } from "../types/types";

 const initialState = {
     isLogged: false,
     data:[]
    };
 
 export const authReducer = ( state = initialState, action ) => {
 
     switch (action.type) {
         case types.authLoginSuccess:
             return {
                 ...state,
                 data: action.payload,
                 isLogged: true}
         case types.authLogout:
            return {
                ...state,
                data:[],
                isLogged: false,
            }
         default:
             return state;
     }
 }