import client from './client';

const version = 'v1';
const baseURL = `/api/${version}/users`

export const setRecover = (recoverData) => {
    const url = `${baseURL}`;
    return client.put(url, recoverData);
        
}