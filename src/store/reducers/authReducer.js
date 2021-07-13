 import { types } from "../types/types";

 const initialState = false;
 
 export const authReducer = ( state = initialState, action ) => {
 
     switch (action.type) {
         case types.authLoginSuccess:
             return true
         case types.authLogout:
             return false
         default:
             return state;
     }
 }