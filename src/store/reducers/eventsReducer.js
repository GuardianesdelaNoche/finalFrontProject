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
        case types.eventsLoadedClean:
            return {
                ...state,
                loaded: false,
                data: []
            }
        default:
            return state;
    }
}

/**
* FRONT JM User Panel Finish
*/
export const eventsOwnReducer = ( state = initialState, action ) => {
 
    switch (action.type) {
        case types.eventsOwnLoadedSuccess:
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

export const eventsFavoriteReducer = ( state = initialState, action ) => {
 
    switch (action.type) {
        case types.eventsFavoriteLoadedSuccess:
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

export const eventsAssistantReducer = ( state = initialState, action ) => {
 
    switch (action.type) {
        case types.eventsAssistantLoadedSuccess:
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