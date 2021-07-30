// import { types } from "../types/types";

// const initialState = {
//     limit: "10",
//     currentPage: "1",
//     totalPages: null
// };

// export const paginationReducer = ( state = initialState, action ) => {

//     switch (action.type) {
//         case types.paginationSetLimit:
//             return {
//                 ...state, 
//                 limit: action.payload
//             }
//         case types.paginationSetCurrentPage:
//             return {
//                 ...state,
//                 currentPage: action.payload
//             }
//         default:
//             return state;
//     }
// }