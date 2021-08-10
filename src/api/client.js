import axios from 'axios';

const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });
// const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL_LOCAL }); //add in .env for testing

const setAuthorizationHeader = token => {
  if (typeof token === 'string' || token instanceof String) {
    client.defaults.headers.common['x-access-token'] = token;
    return;
  }
};



const removeAuthorizationHeader = () => {
    delete client.defaults.headers.common['x-access-token'];
};

client.interceptors.response.use(
  response => response.data,
  error => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      statusCode: error.response.status,
      ...error.response.data,
    });
  }
);

export const configureClient = ( accessToken ) => {
  if (accessToken) {
    setAuthorizationHeader(accessToken);
  }
};

export const resetClient = () => {
  removeAuthorizationHeader();
};

export default client;
