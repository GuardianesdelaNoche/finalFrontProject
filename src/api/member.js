import client from './client';

const version = 'v1';
const baseURL = `/api/${version}/users`

export const setUpdateMember = (memberData) => {
    const url = `${baseURL}`;
    return client.put(url, memberData);        
}

export const getMemberData = (memberId) => {
    const url = `${baseURL}`;
    return client.get(url, memberId);        
}