import axios from 'axios';

const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const setAuthorizationHeader = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;

};

const setCorsHeader = () => {
    client.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    client.defaults.headers.common['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept";
    client.defaults.headers.common['Content-Type'] = "application/json";    
    client.defaults.mode = 'no-cors';

}

const removeAuthorizationHeader = () => {
    delete client.defaults.headers.common['Authorization'];
}

client.interceptors.response.use(
    response => response.data, 
    error => {
        if(!error.response){
            return Promise.reject({ message: error.message })
        }
        return Promise.reject({
            message: error.response.statusText,
            statusCode: error.response.status,
            ...error.response.data
        })
    }
);

export const configureClient = ({ accessToken }) => {
    if (accessToken) {
        setAuthorizationHeader(accessToken);
    }
    setCorsHeader();
}

export const resetClient = () => {
    removeAuthorizationHeader();
}

export default client;