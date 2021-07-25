 import { types } from "../types/types";

 const initialState = {
     isLoaded: false,
     data:[]
    };
 
 export const authReducer = ( state = initialState, action ) => {
 
     switch (action.type) {
         case types.authLoginSuccess:
             return {
                 ...state,
                 data: action.payload,
                 isLoaded: true}
         case types.authLogout:
            return {
                ...state,
                data:[],
                isLoaded: false,
            }
         default:
             return state;
     }
 }