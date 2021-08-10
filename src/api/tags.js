import client from "./client";

const eventsPath = "/api/v1/tags";


const mapEvent = ({ photo, ...event }) => {
  return {
    ...event,

    //photo: photo ? `${process.env.REACT_APP_API_BASE_URL}${photo}` : photo,
  };
};

export const getTags = (eventId) => {
  return client.get(`${eventsPath}`).then(mapEvent);
};