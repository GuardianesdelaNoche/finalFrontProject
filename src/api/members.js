import { to } from 'color-string';
import client from './client';
import { configureClient } from './client';


const version = 'v1';
const baseURL = `/api/${version}/users`

export const getMemberDataById = (token) => {
    configureClient(token);
    const url = `${baseURL}`;
    return client.get(url);        
}

export const setMemberData = (token, memberData) => {
    configureClient(token);
    const url = `${baseURL}`;
    return client.put(url);
} 