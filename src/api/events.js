import client from "./client";

const eventsPath = "/api/v1/events";


const mapEvent = ({ photo, ...event }) => {

  console.log(photo);
  return {
    ...event,
    // photo: photo ? `${process.env.REACT_APP_API_BASE_URL}${photo}` : photo,
  };
};

export const getEvents = () => {
  return client.get(`${eventsPath}`).then(eve => eve);
};

export const getEventsPage = (currentPage, limit) => {
  const request = `${eventsPath}?skip=${(currentPage-1)*limit}&limit=${limit}`;
  return client.get(`${request}`).then(eve => eve);
  // return client.get(`${eventsPath}`).then(eve => eve);
};