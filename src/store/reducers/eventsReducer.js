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
         case types.eventDetailsSuccess:
             return {
                 ...state,
                 loaded: false,
                 data: [...state.data, action.payload.event],
             }
         case types.eventDeleteSuccess:
             return {
                 ...state,
                 loaded: false,
                 data: state.data.filter((event) => event.id !== action.payload.event),
             }
         default:
             return state;
     }
 }