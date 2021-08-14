import client from "./client";
import { configureClient } from './client';
const eventsPath = "/api/v1/events";
const apiPath = "/api/v1"

const mapEvent = ({ photo, ...event }) => {
  return {
    ...event,
    //photo: photo ? `${process.env.REACT_APP_API_BASE_URL}${photo}` : photo,
  };
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

export const getEventsPage = (currentPage, limit) => {
  const request = `${eventsPath}?skip=${(currentPage-1)*limit}&limit=${limit}`;
  return client.get(`${request}`).then(eve => eve);
  // return client.get(`${eventsPath}`).then(eve => eve);
};

/** BACK 3008 */
export const getEventsFavorite = (token) => {
  //export const getEventsFavorite = () => {
    configureClient(token);
    return client.get(`${apiPath}/eventsuser/favoriteevent`);
  };
  
  
  export const getEventsOwn = (token) => {
    //export const getEventsFavorite = () => {
      configureClient(token);
      return client.get(`${apiPath}/eventsuser/ownevent`);
  };
  
  export const getEventsAssistant = (token) => {
    //export const getEventsFavorite = () => {
      configureClient(token);
      return client.get(`${apiPath}/eventsuser/assistant`);
  };
  
  
  //===================
export const setNewEvent = (newEventData) => {
  //configureClient(token);
  const url = `${eventsPath}`;
    return client.post(url, newEventData);
}