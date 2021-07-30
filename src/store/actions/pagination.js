export const paginationRedirect = (path) => {
    return function(dispatch, getState, {history}) {
        history.push(path);
    }
}