export const paginationRedirect = (req) => {
    return function(dispatch, getState, {history}) {
        const { page, limit, title, sort } = req;
        let path = `/events?`;
        if(page) {
            path = path.concat(`page=${page}`)
        }
        
        if(limit) {
            path = path.concat(`&limit=${limit}`)
        }
        
        if(title) {
            path = path.concat(`&title=${title}`)
        }

        if(sort) {
            path = path.concat(`&sort=${sort}`)
        }
        history.push(path);
    }
}