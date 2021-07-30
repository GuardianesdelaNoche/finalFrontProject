// import { types } from "../types/types";

// export const paginationSetLimit = (numItems) => ({
//     type: types.paginationSetLimit,
//     payload: numItems
// });

// export const paginationSetTotalPages = (totalPages) => ({
//     type: types.paginationSetTotalPages,
//     payload: totalPages
// });

// export const paginationSetCurrentPage = (current) => ({
//     type: types.paginationSetCurrentPage,
//     payload: current
// });


// export const paginationUpdateCurrentPage = (beforePage, current) => {
//     return function (dispatch, getState, { history }) {
//         history.push(`/events/page/${beforePage}`);
//         dispatch( paginationSetCurrentPage( current ) )
//     }
// }

export const paginationRedirect = (path) => {
    return function(dispatch, getState, {history}) {
        history.push(path);
    }
}