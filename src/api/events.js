import client from "./client";
import { configureClient } from './client';
const eventsPath = "/api/v1/events";


const mapEvent = ({ photo, ...event }) => {
  return {
    ...event,
    //photo: photo ? `${process.env.REACT_APP_API_BASE_URL}${photo}` : photo,
  };
const composerPathTags = (tags) => {
  let path = "";
  if (tags.length > 0) {
    tags.forEach((tag) => {
      path = path.concat(`&tags=${tag}`);
    });
  }
  return path;
};

export const getEvents = (eventId) => {
  return client.get(`${eventsPath}/${eventId}`).then(mapEvent);
};


export const getEventsDetails = (eventId, token) => {
  configureClient(token);
  return client.get(`${eventsPath}/event/${eventId}`).then(mapEvent);
};


export const deleteEvent = eventId => {
  return client.delete(`${eventsPath}/${eventId}`);
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

export const setNewEvent = (newEventData) => {
  //configureClient(token);
  const url = `${eventsPath}`;
    return client.post(url, newEventData);
}