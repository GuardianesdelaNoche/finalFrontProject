 import { types } from "../types/types";

 const initialState = {
     loaded: false,
     data: [],
     total: 0
 };

 export const eventsReducer = ( state = initialState, action ) => {
 
     switch (action.type) {
         case types.eventsLoadedSuccess:
             return {
                 ...state, 
                 loaded: true,
                 data: [...action.payload.data],
                 total: action.payload.total
             }
         default:
             return state;
     }
 }