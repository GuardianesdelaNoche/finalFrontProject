 import { types } from "../types/types";

 const initialState = {
     loaded: false,
     data: []
 };

 export const tagsReducer = ( state = initialState, action ) => {
 
     switch (action.type) {
         case types.tagsLoadedSuccess:
             return {
                 ...state, 
                 loaded: true,
                 data: [...action.payload.data]
             }
         default:
             return state;
     }
 }