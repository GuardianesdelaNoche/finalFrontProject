
import client, { configureClient } from './client';

const version = 'v1';
const baseURL = `/api/${version}/usersId`

export const getUsersChat = (token) => {
    configureClient(token);
    const url = `${baseURL}`;
    return client.get(url);
}