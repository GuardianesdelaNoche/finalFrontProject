const composerPathFilters = (filters) => {
  const { indoor, price, tags, username } = filters;
  // if (username) {
  //   return `&username=${username}`;
  // } else {
    let path = "";
    if (indoor) {
      path = path.concat(`&indoor=${indoor}`);
    }
    if (price) {
      //send from click filters = object
      if (price.low <= price.high) {
        path = path.concat(`&price=${price.low}-${price.high}`);
      } else if (price.low >= price.high) {
        path = path.concat(`&price=${price.high}-${price.low}`);
      }
    }
    if (tags && tags.length > 0) {
      tags.forEach((tag) => {
        path = path.concat(`&tags=${tag}`);
      });
    }
    if(username && username !== ""){
      path = path.concat(`&username=${username}`)
    }
    return path;
  // }
};

export const paginationRedirect = (req) => {
  return function (dispatch, getState, { history }) {
    const { page, limit, title, sort, filters } = req;
    console.log('paginationRedirect filters', filters)
    let path = `/events?`;
    if (page) {
      path = path.concat(`page=${page}`);
    }

    if (limit) {
      path = path.concat(`&limit=${limit}`);
    }

    if (title) {
      path = path.concat(`&title=${title}`);
    }

    if (sort) {
      path = path.concat(`&sort=${sort}`);
    }

    if (filters) {
      const pathFilters = composerPathFilters(filters);
      path = path.concat(pathFilters);
    }
    console.log('paginationRedirect path push', path)
    history.push(path);
  };
};
