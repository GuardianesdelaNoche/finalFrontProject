import client from './client';
import { configureClient } from './client';


const version = 'v1';
const baseURL = `/api/${version}/users`

export const getUserDataById = (token) => {
    configureClient(token);
    const url = `${baseURL}`;
    return client.get(url);        
}

export const setUserData = (token, memberData) => {
    configureClient(token);
    const url = `${baseURL}`;
    return client.put(url, memberData);
} 

export const getMyEvents = (token) => {
    configureClient(token);
    const url = `${baseURL}`;
    return client.get(url);
}

export const getUsersChat = (token) => {
    configureClient(token);
    const url = `${baseURL}/chat`;
    return client.get(url);
}


