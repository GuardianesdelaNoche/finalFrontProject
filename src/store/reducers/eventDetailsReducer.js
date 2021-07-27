 import { types } from "../types/types";

 const initialState = {
     loaded: false,
     data: [],
 };

export const eventDetailsReducer = ( state = initialState, action ) => {
 
     switch (action.type) {
         case types.eventDetailsSuccess:
             return {
                 ...state,
                 loaded: false,
                 data: [...state.data, action.payload.event],
               
            }
         default:
             return state;
     }
 }