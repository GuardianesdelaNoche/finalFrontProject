import client from "./client";

const eventsPath = "/api/v1/events";

const composerPathTags = (tags) => {
  let path = "";
  if (tags.length > 0) {
    tags.forEach((tag) => {
      path = path.concat(`&tags=${tag}`);
    });
  }
  return path;
};

export const getEvents = () => {
  return client.get(`${eventsPath}`).then((eve) => eve);
};

export const getEventsPage = (
  currentPage,
  limit,
  title,
  sort,
  indoor,
  price,
  tags
) => {
  let request = `${eventsPath}?skip=${
    (currentPage - 1) * limit
  }&limit=${limit}`;
  if (title) {
    request = request.concat(`&title=${title}`);
  }
  if (sort) {
    request = request.concat(`&sort=${sort}`);
  }
  if (indoor) {
    request = request.concat(`&indoor=${indoor}`);
  }
  if (price) {
    if (price !== "0-0") {
      request = request.concat(`&price=${price}`);
    }
  }
  if (tags) {
    const pathTags = composerPathTags(tags);
    request = request.concat(pathTags);
  }
  return client.get(`${request}`).then((eve) => eve);
};
