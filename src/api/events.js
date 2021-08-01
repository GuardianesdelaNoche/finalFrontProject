import { TiThLarge } from "react-icons/ti";
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

export const getEventsPage = (currentPage, limit, title) => {
  let request = `${eventsPath}?skip=${(currentPage-1)*limit}&limit=${limit}`;
  console.log('request', request)
  console.log('title', title)
  if(title){
    request = request.concat(`&title=${title}`)
  }
  console.log('request total', request)
  return client.get(`${request}`).then(eve => eve);
  // return client.get(`${eventsPath}`).then(eve => eve);
};