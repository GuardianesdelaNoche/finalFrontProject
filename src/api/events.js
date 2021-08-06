import client from "./client";

const eventsPath = "/api/v1/events";


export const getEvents = () => {
  return client.get(`${eventsPath}`).then(eve => eve);
};

export const getEventsPage = (currentPage, limit, title, sort) => {
  let request = `${eventsPath}?skip=${(currentPage-1)*limit}&limit=${limit}`;
  if(title){
    request = request.concat(`&title=${title}`)
  }
  if(sort){
    request = request.concat(`&sort=${sort}`)
  }
  return client.get(`${request}`).then(eve => eve);
};