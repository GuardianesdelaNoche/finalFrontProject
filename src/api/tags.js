import client from "./client";

const tagsPath = "/api/v1/tags";


export const getTags = () => {
  return client.get(`${tagsPath}`).then(tag => tag);
};