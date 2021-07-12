import { types } from "../types/types";

const initialState = {
    numItemsPage: "10"
};

export const paginationReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.paginationSetNumItemsPage:
            return {
                ...state, 
                numItemsPage: action.payload
            }
        default:
            return state;
    }
}