import client from './client';

const version = 'v1';
const baseURL = `/api/${version}/users`

export const getMemberDataById = (memberId) => {
    const url = `${baseURL}`;
    return client.get(url, memberId);
        
}