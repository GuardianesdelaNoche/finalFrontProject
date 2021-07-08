import client from './client';

const eventsPath = '/api/v1/events';

const mapEvent = ({ photo, ...event }) => ({
  ...event,
  photo: photo ? `${process.env.REACT_APP_API_BASE_URL}${photo}` : photo,
});

export const getEvents = () => {
   const events = client.get(`${eventsPath}`);
   console.log(events);
  return client.get(`${eventsPath}`).then(eve => {return eve.map(mapEvent)});
};
